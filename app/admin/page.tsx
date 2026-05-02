import Link from "next/link";
import { createClient, createAdminClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type Propuesta = {
  id: string;
  intent: string | null;
  confidence: string | null;
  estado: string;
  escalate: boolean;
  requires_approval: boolean;
  propuesta_texto: string | null;
  telefono: string;
  created_at: string;
};

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

function timeAgo(iso: string): string {
  const diff = (Date.now() - new Date(iso).getTime()) / 1000;
  if (diff < 60) return "ahora";
  if (diff < 3600) return `${Math.floor(diff / 60)}m`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
  return `${Math.floor(diff / 86400)}d`;
}

function formatPhone(phone: string): string {
  // 5213321486752 → +52 33 2148 6752
  if (phone.startsWith("521") && phone.length === 13) {
    return `+52 ${phone.slice(3, 5)} ${phone.slice(5, 9)} ${phone.slice(9)}`;
  }
  return phone;
}

export default async function Inbox() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const admin = createAdminClient();
  const { data: operador } = await admin
    .from("operadores")
    .select("tenant_id")
    .eq("email", user.email)
    .single();
  if (!operador) return null;

  const { data: propuestas } = await admin
    .from("propuestas")
    .select("id, intent, confidence, estado, escalate, requires_approval, propuesta_texto, telefono, created_at")
    .eq("tenant_id", operador.tenant_id)
    .eq("estado", "pendiente")
    .order("created_at", { ascending: false })
    .limit(50);

  const list = (propuestas || []) as Propuesta[];
  const escalations = list.filter((p) => p.escalate);
  const proposals = list.filter((p) => !p.escalate);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Inbox</h1>
        <p className="text-sm text-gray-500 mt-1">
          {list.length === 0 ? "Sin propuestas pendientes" : `${list.length} pendiente${list.length !== 1 ? "s" : ""}`}
          {escalations.length > 0 && (
            <span className="ml-2 text-orange-600">· {escalations.length} requieren atención</span>
          )}
        </p>
      </div>

      {list.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-10">
          {escalations.length > 0 && (
            <Section
              eyebrow="Escalado"
              description="Sofía no propuso respuesta. Necesita tu intervención manual."
              items={escalations}
              type="escalation"
            />
          )}
          {proposals.length > 0 && (
            <Section
              eyebrow="Propuestas"
              description="Sofía generó respuesta. Revisa antes de enviar."
              items={proposals}
              type="proposal"
            />
          )}
        </div>
      )}
    </div>
  );
}

function Section({
  eyebrow,
  description,
  items,
  type,
}: {
  eyebrow: string;
  description: string;
  items: Propuesta[];
  type: "proposal" | "escalation";
}) {
  return (
    <section>
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500">{eyebrow}</h2>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
        <span className="text-sm text-gray-400">{items.length}</span>
      </div>
      <div className="bg-white border border-black/[0.06] rounded-2xl shadow-sm overflow-hidden">
        {items.map((p, i) => (
          <Link
            key={p.id}
            href={`/admin/${p.id}`}
            className={`block px-5 py-4 hover:bg-gray-50 transition ${i > 0 ? "border-t border-black/[0.04]" : ""}`}
          >
            <div className="flex items-start gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1.5">
                  <span className="text-sm font-medium text-gray-900">{formatPhone(p.telefono)}</span>
                  {p.intent && (
                    <span className={`text-[11px] px-1.5 py-0.5 rounded-md border font-medium ${intentTone[p.intent] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
                      {intentLabel[p.intent] || p.intent}
                    </span>
                  )}
                  {p.confidence === "low" && (
                    <span className="text-[11px] px-1.5 py-0.5 rounded-md bg-orange-50 text-orange-700 border border-orange-100 font-medium">
                      baja confianza
                    </span>
                  )}
                </div>
                <p className={`text-sm line-clamp-2 ${type === "escalation" ? "text-gray-400 italic" : "text-gray-700"}`}>
                  {type === "escalation"
                    ? "Sin propuesta — requiere atención manual"
                    : p.propuesta_texto || "(sin texto)"}
                </p>
              </div>
              <div className="text-xs text-gray-400 whitespace-nowrap mt-0.5">{timeAgo(p.created_at)}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function EmptyState() {
  return (
    <div className="bg-white border border-black/[0.06] rounded-2xl shadow-sm py-20 text-center">
      <div className="inline-flex w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/10 to-accent2/10 items-center justify-center mb-4">
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path d="M5 13l4 4L19 7" stroke="url(#g)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="g" x1="0" x2="24" y1="0" y2="24">
              <stop offset="0" stopColor="#7c3aed"/>
              <stop offset="1" stopColor="#06b6d4"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h3 className="font-semibold text-lg tracking-tight">Inbox limpio</h3>
      <p className="text-sm text-gray-500 mt-1">No hay propuestas pendientes. Sofía está al día.</p>
    </div>
  );
}
