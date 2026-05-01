import { PolicyLayout, Section } from "../_components/PolicyLayout";

export const metadata = {
  title: "Subprocesadores · Sincronia",
  description: "Lista de proveedores que procesan datos en nombre de Sincronia.",
};

const subprocesadores = [
  {
    nombre: "Meta Platforms, Inc.",
    proposito: "WhatsApp Business Platform — envío y recepción de mensajes",
    ubicacion: "EE.UU. / Global",
    web: "https://www.facebook.com/business/help/whatsapp",
  },
  {
    nombre: "Anthropic, PBC",
    proposito: "Procesamiento de IA (modelo Claude) para clasificación y generación de respuestas",
    ubicacion: "EE.UU.",
    web: "https://www.anthropic.com/legal",
  },
  {
    nombre: "Shopify, Inc.",
    proposito: "Integración con tienda Shopify del Cliente vía Admin API",
    ubicacion: "Canadá / EE.UU.",
    web: "https://www.shopify.com/legal/privacy",
  },
  {
    nombre: "Supabase, Inc.",
    proposito: "Base de datos PostgreSQL y almacenamiento de mensajes y propuestas",
    ubicacion: "EE.UU.",
    web: "https://supabase.com/privacy",
  },
  {
    nombre: "n8n GmbH",
    proposito: "Orquestación de flujos automatizados",
    ubicacion: "UE (Alemania) / EE.UU.",
    web: "https://n8n.io/legal/",
  },
  {
    nombre: "Vercel, Inc.",
    proposito: "Hosting de la plataforma web sincronia.lat",
    ubicacion: "EE.UU.",
    web: "https://vercel.com/legal/privacy-policy",
  },
  {
    nombre: "Stripe, Inc.",
    proposito: "Procesamiento de pagos (cuando aplique)",
    ubicacion: "EE.UU.",
    web: "https://stripe.com/mx/privacy",
  },
  {
    nombre: "Mercado Libre, S. de R.L. de C.V.",
    proposito: "Procesamiento de pagos vía Mercado Pago (cuando aplique)",
    ubicacion: "México",
    web: "https://www.mercadopago.com.mx/privacidad",
  },
];

export default function Subprocesadores() {
  return (
    <PolicyLayout title="Lista de Subprocesadores" date="1 de mayo de 2026">
      <p className="text-base">
        Esta página lista los terceros que procesan datos personales en nombre de Sincronia para operar el servicio.
        Todos los subprocesadores aquí listados están bajo un Data Processing Agreement (DPA) que les obliga a
        cumplir con estándares equivalentes a los nuestros y, cuando aplica, con las cláusulas contractuales tipo
        (SCC) para transferencias internacionales.
      </p>

      <Section title="Subprocesadores activos">
        <div className="overflow-x-auto -mx-2">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-black/10 text-left">
                <th className="py-3 px-2 font-semibold text-gray-900">Proveedor</th>
                <th className="py-3 px-2 font-semibold text-gray-900">Propósito</th>
                <th className="py-3 px-2 font-semibold text-gray-900">Ubicación</th>
                <th className="py-3 px-2 font-semibold text-gray-900">Política</th>
              </tr>
            </thead>
            <tbody>
              {subprocesadores.map((s) => (
                <tr key={s.nombre} className="border-b border-black/[0.06] align-top">
                  <td className="py-3 px-2 font-medium text-gray-900 whitespace-nowrap">{s.nombre}</td>
                  <td className="py-3 px-2 text-gray-700">{s.proposito}</td>
                  <td className="py-3 px-2 text-gray-600 whitespace-nowrap">{s.ubicacion}</td>
                  <td className="py-3 px-2">
                    <a href={s.web} target="_blank" rel="noopener noreferrer" className="underline text-gray-700">
                      Ver
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Notificación de cambios">
        <p>
          Cuando agreguemos o sustituyamos un subprocesador que tenga acceso a datos personales del Cliente o de
          Usuarios Finales, lo publicaremos aquí y notificaremos por correo electrónico a los Clientes con al menos{" "}
          <strong>30 días de anticipación</strong>. Si no estás de acuerdo con el cambio, puedes terminar tu
          suscripción sin penalización dentro de ese plazo.
        </p>
      </Section>

      <Section title="Cómo evaluamos a nuestros subprocesadores">
        <p>Antes de incorporar a un proveedor, verificamos que cumpla con:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Certificaciones de seguridad reconocidas (SOC 2, ISO 27001, o equivalentes), cuando aplican.</li>
          <li>DPA con cláusulas equivalentes a las nuestras y SCC para transferencias internacionales.</li>
          <li>Política de notificación de incidentes ≤ 72 horas.</li>
          <li>Mecanismos de eliminación verificable de datos a solicitud.</li>
          <li>Posibilidad de auditoría razonable.</li>
        </ul>
      </Section>

      <Section title="Contacto">
        <p>
          Para preguntas sobre subprocesadores o solicitudes relacionadas, escríbenos a{" "}
          <a href="mailto:hola@sincronia.lat" className="underline">hola@sincronia.lat</a>.
        </p>
      </Section>
    </PolicyLayout>
  );
}
