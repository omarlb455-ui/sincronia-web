"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Propuesta = {
  id: string;
  intent: string | null;
  confidence: string | null;
  estado: string;
  escalate: boolean;
  requires_approval: boolean;
  propuesta_texto: string | null;
  telefono: string;
  validation_flags?: string[] | null;
};

type Mensaje = {
  id: string;
  direccion: "inbound" | "outbound";
  texto: string;
  created_at: string;
};

const flagLabels: Record<string, string> = {
  no_json_in_response: "Respuesta del agente no fue JSON válido",
  invalid_json: "JSON malformado",
  order_ref_no_verificado: "Pedido no encontrado en Shopify",
  tracking_no_verificado: "Tracking no verificado",
};

function flagLabel(flag: string): string {
  for (const key of Object.keys(flagLabels)) {
    if (flag.startsWith(key)) return flagLabels[key];
  }
  return flag;
}

export default function DecisionPanel({
  propuesta,
  lastInbound,
}: {
  propuesta: Propuesta;
  lastInbound?: Mensaje;
}) {
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(propuesta.propuesta_texto || "");
  const [loading, setLoading] = useState<null | "approve" | "edit" | "reject">(null);
  const [error, setError] = useState<string | null>(null);

  const decide = async (action: "approve" | "edit" | "reject", overrideText?: string) => {
    setLoading(action);
    setError(null);
    try {
      const res = await fetch("/api/operator/decision", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          propuesta_id: propuesta.id,
          action,
          edit_text: action === "edit" ? overrideText : undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error desconocido");
      router.push("/admin");
      router.refresh();
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Error");
      setLoading(null);
    }
  };

  return (
    <div className="space-y-4 sticky top-20">
      {/* Mensaje del cliente a responder */}
      {lastInbound && (
        <div className="rounded-xl border border-black/[0.06] bg-gray-50 p-4">
          <div className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold mb-1.5">
            Necesita respuesta
          </div>
          <p className="text-sm text-gray-900 leading-relaxed">{lastInbound.texto}</p>
        </div>
      )}

      {/* Card principal */}
      {propuesta.escalate ? (
        <EscalationCard
          propuesta={propuesta}
          onReject={() => decide("reject")}
          loading={loading}
          error={error}
        />
      ) : (
        <ProposalCard
          propuesta={propuesta}
          editing={editing}
          text={text}
          loading={loading}
          error={error}
          onEdit={() => setEditing(true)}
          onCancel={() => {
            setEditing(false);
            setText(propuesta.propuesta_texto || "");
            setError(null);
          }}
          onTextChange={setText}
          onApprove={() => decide("approve")}
          onSendEdit={() => decide("edit", text)}
          onReject={() => decide("reject")}
        />
      )}
    </div>
  );
}

function EscalationCard({
  propuesta,
  onReject,
  loading,
  error,
}: {
  propuesta: Propuesta;
  onReject: () => void;
  loading: string | null;
  error: string | null;
}) {
  return (
    <div className="rounded-xl border border-orange-100 bg-white">
      <div className="px-4 py-3 border-b border-orange-100 bg-orange-50/40 rounded-t-xl">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          <span className="text-[11px] uppercase tracking-widest text-orange-700 font-semibold">
            Escalado a humano
          </span>
        </div>
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          El agente decidió no proponer respuesta automática. Atiende manualmente desde tu WhatsApp.
        </p>

        {propuesta.validation_flags && propuesta.validation_flags.length > 0 && (
          <div className="mb-3">
            <div className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold mb-2">
              Razones
            </div>
            <ul className="space-y-1.5">
              {propuesta.validation_flags.map((f) => (
                <li key={f} className="text-xs text-gray-700 flex gap-2">
                  <span className="text-gray-400">·</span>
                  <span>{flagLabel(f)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={onReject}
          disabled={loading !== null}
          className="w-full py-2 rounded-lg border border-black/10 bg-white text-gray-900 text-sm font-medium hover:bg-gray-50 transition disabled:opacity-50"
        >
          {loading === "reject" ? "Marcando…" : "Marcar como atendido"}
        </button>
        {error && <p className="text-xs text-red-600 mt-2">{error}</p>}
      </div>
    </div>
  );
}

function ProposalCard({
  propuesta,
  editing,
  text,
  loading,
  error,
  onEdit,
  onCancel,
  onTextChange,
  onApprove,
  onSendEdit,
  onReject,
}: {
  propuesta: Propuesta;
  editing: boolean;
  text: string;
  loading: string | null;
  error: string | null;
  onEdit: () => void;
  onCancel: () => void;
  onTextChange: (s: string) => void;
  onApprove: () => void;
  onSendEdit: () => void;
  onReject: () => void;
}) {
  const conf = propuesta.confidence;
  const confLabel = conf === "high" ? "Alta confianza" : conf === "med" ? "Confianza media" : "Confianza baja";
  const confColor = conf === "high" ? "text-emerald-700" : conf === "med" ? "text-amber-700" : "text-orange-700";

  return (
    <div className="rounded-xl border border-black/[0.06] bg-white overflow-hidden">
      <div className="px-4 py-3 border-b border-black/[0.04] flex items-center justify-between">
        <div className="text-[11px] uppercase tracking-widest text-gray-500 font-semibold">
          Propuesta de Sofía
        </div>
        {conf && <div className={`text-[11px] font-medium ${confColor}`}>{confLabel}</div>}
      </div>

      <div className="p-4">
        {editing ? (
          <textarea
            value={text}
            onChange={(e) => onTextChange(e.target.value)}
            rows={9}
            className="w-full px-3 py-2.5 rounded-lg bg-white border border-black/20 focus:border-black/40 focus:ring-2 focus:ring-black/5 focus:outline-none text-sm resize-none transition mb-3"
            autoFocus
          />
        ) : (
          <div className="text-sm text-gray-800 whitespace-pre-wrap leading-relaxed mb-4">
            {propuesta.propuesta_texto || "(sin texto)"}
          </div>
        )}

        <div className="space-y-2">
          {editing ? (
            <>
              <button
                onClick={onSendEdit}
                disabled={loading !== null || !text.trim()}
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-accent to-accent2 text-white text-sm font-medium hover:opacity-90 transition disabled:opacity-50"
              >
                {loading === "edit" ? "Enviando…" : "Enviar editado"}
              </button>
              <button
                onClick={onCancel}
                className="w-full py-1.5 text-xs text-gray-500 hover:text-gray-900 transition"
              >
                Cancelar
              </button>
            </>
          ) : (
            <>
              <button
                onClick={onApprove}
                disabled={loading !== null}
                className="w-full py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-black transition disabled:opacity-50"
              >
                {loading === "approve" ? "Enviando…" : "Aprobar y enviar"}
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={onEdit}
                  disabled={loading !== null}
                  className="py-2 rounded-lg border border-black/10 bg-white text-gray-900 text-sm font-medium hover:bg-gray-50 transition disabled:opacity-50"
                >
                  Editar
                </button>
                <button
                  onClick={onReject}
                  disabled={loading !== null}
                  className="py-2 rounded-lg text-red-600 text-sm font-medium hover:bg-red-50 transition disabled:opacity-50"
                >
                  {loading === "reject" ? "…" : "Rechazar"}
                </button>
              </div>
            </>
          )}
        </div>
        {error && <p className="text-xs text-red-600 mt-2">{error}</p>}
      </div>
    </div>
  );
}
