import { createClient, createAdminClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user?.email) return NextResponse.json({ error: "no_auth" }, { status: 401 });

  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "invalid_body" }, { status: 400 });

  const { propuesta_id, action, edit_text } = body as {
    propuesta_id?: string;
    action?: "approve" | "edit" | "reject";
    edit_text?: string;
  };

  if (!propuesta_id || !["approve", "edit", "reject"].includes(action || "")) {
    return NextResponse.json({ error: "missing_or_invalid_fields" }, { status: 400 });
  }
  if (action === "edit" && !edit_text?.trim()) {
    return NextResponse.json({ error: "edit_text_required" }, { status: 400 });
  }

  // Admin client (bypassa RLS pero validamos manualmente)
  const admin = createAdminClient();

  // 1. Verifica operador
  const { data: operador } = await admin
    .from("operadores")
    .select("id, tenant_id, nombre")
    .eq("email", user.email)
    .eq("activo", true)
    .single();

  if (!operador) return NextResponse.json({ error: "not_authorized" }, { status: 403 });

  // 2. Carga propuesta y verifica tenant match
  const { data: propuesta } = await admin
    .from("propuestas")
    .select("*, tenants(whatsapp_phone_number_id)")
    .eq("id", propuesta_id)
    .eq("tenant_id", operador.tenant_id)
    .single();

  if (!propuesta) return NextResponse.json({ error: "propuesta_not_found" }, { status: 404 });
  if (propuesta.estado !== "pendiente") {
    return NextResponse.json({ error: "propuesta_already_resolved" }, { status: 409 });
  }

  const now = new Date().toISOString();
  let newEstado: string;
  let finalText: string | null = null;

  if (action === "approve") {
    newEstado = "aprobada";
    finalText = propuesta.propuesta_texto;
  } else if (action === "edit") {
    newEstado = "editada";
    finalText = edit_text!.trim();
  } else {
    newEstado = "rechazada";
    finalText = null;
  }

  // 3. Si hay que enviar al cliente, manda vía Meta
  if (finalText && !propuesta.escalate) {
    const phoneNumberId = (propuesta.tenants as { whatsapp_phone_number_id?: string } | null)
      ?.whatsapp_phone_number_id;
    if (!phoneNumberId) {
      return NextResponse.json({ error: "tenant_phone_id_missing" }, { status: 500 });
    }

    // Normaliza teléfono cliente: 521... → 52...
    const to = (propuesta.telefono || "").replace(/^521/, "52");

    const metaRes = await fetch(
      `https://graph.facebook.com/v22.0/${phoneNumberId}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.META_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to,
          type: "text",
          text: { preview_url: false, body: finalText },
        }),
      }
    );

    if (!metaRes.ok) {
      const errText = await metaRes.text();
      return NextResponse.json(
        { error: "meta_send_failed", details: errText },
        { status: 502 }
      );
    }

    // 4. Guarda mensaje outbound
    await admin.from("mensajes").insert({
      telefono: propuesta.telefono,
      tenant_id: operador.tenant_id,
      direccion: "outbound",
      texto: finalText,
    });
  }

  // 5. Si fue edición, guarda aprendizaje (Capa 4)
  if (action === "edit" && propuesta.propuesta_texto && finalText) {
    const { data: mensajeOrigen } = await admin
      .from("mensajes")
      .select("texto")
      .eq("id", propuesta.mensaje_entrada_id)
      .single();

    if (mensajeOrigen) {
      await admin.from("aprendizajes").insert({
        tenant_id: operador.tenant_id,
        mensaje_cliente: mensajeOrigen.texto,
        respuesta_original: propuesta.propuesta_texto,
        respuesta_final: finalText,
        intent: propuesta.intent,
      });
    }
  }

  // 6. Actualiza propuesta
  await admin
    .from("propuestas")
    .update({
      estado: newEstado,
      respuesta_final: finalText,
      operador_decision_at: now,
      respuesta_original: propuesta.propuesta_texto,
    })
    .eq("id", propuesta_id);

  return NextResponse.json({ ok: true, estado: newEstado });
}
