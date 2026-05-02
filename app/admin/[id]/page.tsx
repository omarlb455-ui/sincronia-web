import Link from "next/link";
import { createClient, createAdminClient } from "@/lib/supabase/server";
import { notFound, redirect } from "next/navigation";
import DecisionPanel from "./_components/DecisionPanel";

export const dynamic = "force-dynamic";

type Mensaje = {
  id: string;
  direccion: "inbound" | "outbound";
  texto: string;
  created_at: string;
};

function formatPhone(phone: string): string {
  if (phone.startsWith("521") && phone.length === 13) {
    return `+52 ${phone.slice(3, 5)} ${phone.slice(5, 9)} ${phone.slice(9)}`;
  }
  return phone;
}

const intentLabel: Record<string, string> = {
  greeting: "Saludo",
  info: "Información",
  transactional: "Acción",
  complaint: "Queja",
  unknown: "Sin clasificar",
};

const intentTone: Record<string, string> = {
  greeting: "bg-blue-50 text-blue-700 border-blue-100",
  info: "bg-emerald-50 text-emerald-700 border-emerald-100",
  transactional: "bg-amber-50 text-amber-700 border-amber-100",
  complaint: "bg-red-50 text-red-700 border-red-100",
  unknown: "bg-gray-100 text-gray-600 border-gray-200",
};

export default async function PropuestaDetail({ params }: { params: { id: string } }) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const admin = createAdminClient();
  const { data: operador } = await admin
    .from("operadores")
    .select("tenant_id")
    .eq("email", user.email)
    .single();
  if (!operador) redirect("/admin/login");

  const { data: propuesta } = await admin
    .from("propuestas")
    .select("*")
    .eq("id", params.id)
    .eq("tenant_id", operador.tenant_id)
    .single();

  if (!propuesta) notFound();

  const { data: mensajesData } = await admin
    .from("mensajes")
    .select("id, direccion, texto, created_at")
    .eq("telefono", propuesta.telefono)
    .eq("tenant_id", operador.tenant_id)
    .order("created_at", { ascending: false })
    .limit(20);

  const mensajes = ((mensajesData || []) as Mensaje[]).reverse();

  // Último mensaje del cliente (para resaltar en el panel)
  const lastInbound = [...mensajes].reverse().find((m) => m.direccion === "inbound");

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <Link
          href="/admin"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition"
        >
          <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
            <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Inbox
        </Link>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>{new Date(propuesta.created_at).toLocaleString("es-MX", {
            day: "2-digit",
            month: "short",
            hour: "2-digit",
            minute: "2-digit",
          })}</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_360px] gap-5">
        {/* Conversación */}
        <section className="bg-white rounded-xl border border-black/[0.06] flex flex-col" style={{ minHeight: "calc(100vh - 180px)" }}>
          <header className="px-4 py-3 border-b border-black/[0.04] flex items-center gap-3 flex-wrap">
            <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold flex items-center justify-center">
              {(propuesta.telefono || "??").slice(-2)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900">{formatPhone(propuesta.telefono)}</div>
              <div className="text-[11px] text-gray-500">{mensajes.length} mensajes</div>
            </div>
            {propuesta.intent && (
              <span className={`text-[11px] px-1.5 py-0.5 rounded-md border font-medium ${intentTone[propuesta.intent] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
                {intentLabel[propuesta.intent] || propuesta.intent}
              </span>
            )}
          </header>

          <div className="flex-1 overflow-y-auto p-4 space-y-1.5">
            {mensajes.length === 0 ? (
              <p className="text-sm text-gray-400 italic text-center py-8">Sin historial.</p>
            ) : (
              <ConversationView mensajes={mensajes} />
            )}
          </div>
        </section>

        {/* Panel */}
        <aside>
          <DecisionPanel propuesta={propuesta} lastInbound={lastInbound} />
        </aside>
      </div>
    </div>
  );
}

function ConversationView({ mensajes }: { mensajes: Mensaje[] }) {
  let lastDate = "";
  return (
    <>
      {mensajes.map((m, idx) => {
        const date = new Date(m.created_at).toDateString();
        const showDate = date !== lastDate;
        lastDate = date;
        const prev = mensajes[idx - 1];
        const isGroup = prev && prev.direccion === m.direccion && !showDate;
        return (
          <div key={m.id}>
            {showDate && (
              <div className="text-center my-3">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                  {new Date(m.created_at).toLocaleDateString("es-MX", { day: "numeric", month: "long" })}
                </span>
              </div>
            )}
            <div className={`flex ${m.direccion === "inbound" ? "justify-start" : "justify-end"} ${isGroup ? "mt-0.5" : "mt-2"}`}>
              <div
                className={`max-w-[78%] rounded-2xl px-3 py-1.5 text-[13.5px] leading-snug ${
                  m.direccion === "inbound"
                    ? "bg-gray-100 text-gray-900"
                    : "bg-gray-900 text-white"
                } ${
                  m.direccion === "inbound"
                    ? isGroup ? "rounded-bl-2xl" : "rounded-bl-sm"
                    : isGroup ? "rounded-br-2xl" : "rounded-br-sm"
                }`}
              >
                <div className="whitespace-pre-wrap">{m.texto}</div>
                <div
                  className={`text-[10px] mt-0.5 ${
                    m.direccion === "inbound" ? "text-gray-400" : "text-gray-400"
                  }`}
                >
                  {new Date(m.created_at).toLocaleTimeString("es-MX", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
