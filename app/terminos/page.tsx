import Link from "next/link";

export default function Terminos() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-12 max-w-3xl mx-auto">
      <Link href="/" className="text-sm text-gray-400 hover:text-white">← Volver</Link>
      <h1 className="text-4xl font-bold mt-6 mb-4">Términos y Condiciones</h1>
      <p className="text-sm text-gray-500 mb-12">Última actualización: 30 de abril de 2026</p>

      <article className="prose prose-invert max-w-none text-gray-300 space-y-6 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-white">1. Aceptación de los términos</h2>
          <p>
            Al usar Sincronia, usted acepta estos términos y condiciones. Si no está de acuerdo, no use el servicio.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">2. Descripción del servicio</h2>
          <p>
            Sincronia es una plataforma de software como servicio (SaaS) que ofrece atención al cliente asistida por
            inteligencia artificial vía WhatsApp Business API, con integración a tiendas Shopify. El servicio opera bajo
            un modelo de human-in-the-loop donde el cliente del servicio aprueba acciones transaccionales relevantes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">3. Plan y precios</h2>
          <p>
            El servicio se ofrece a $3,000 MXN al mes más IVA. La facturación es mensual y se cobra por adelantado. Sin
            permanencia mínima. Puede cancelar en cualquier momento; el reembolso aplica solo durante los primeros 30
            días desde la activación.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">4. Responsabilidades del cliente</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Mantener su cuenta WhatsApp Business activa conforme a políticas de Meta.</li>
            <li>Configurar correctamente las reglas de negocio (políticas de cambio, devolución, envío).</li>
            <li>Aprobar o rechazar las propuestas del agente IA en tiempos razonables.</li>
            <li>No utilizar el servicio para fines ilícitos, spam, o que violen las políticas de Meta o LFPDPPP.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">5. Limitación de responsabilidad</h2>
          <p>
            Sincronia no se hace responsable por:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Errores derivados de aprobaciones incorrectas por parte del operador humano.</li>
            <li>Caídas o cambios de política de servicios de terceros (Meta, Gupshup, Shopify, Anthropic).</li>
            <li>Pérdidas de ventas o ingresos por uso indebido del servicio.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">6. Propiedad intelectual</h2>
          <p>
            Sincronia y su tecnología son propiedad del Responsable. El cliente conserva la propiedad de sus datos y
            contenidos. Las conversaciones generadas son propiedad del cliente.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">7. Suspensión del servicio</h2>
          <p>
            Podemos suspender el servicio en caso de uso indebido, falta de pago, o violación de políticas de Meta. Se
            notificará al cliente por correo con al menos 7 días de anticipación, salvo en casos urgentes de seguridad.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">8. Jurisdicción</h2>
          <p>
            Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier controversia se someterá a
            los tribunales competentes de la Ciudad de México.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">9. Contacto</h2>
          <p>
            Para dudas o aclaraciones, escriba a <a href="mailto:hola@sincronia.lat" className="underline">hola@sincronia.lat</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
