import Link from "next/link";

export default function Privacidad() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-12 max-w-3xl mx-auto">
      <Link href="/" className="text-sm text-gray-500 hover:text-black">← Volver</Link>
      <h1 className="text-4xl font-bold mt-6 mb-4">Aviso de Privacidad</h1>
      <p className="text-sm text-gray-500 mb-12">Última actualización: 30 de abril de 2026</p>

      <article className="max-w-none text-gray-700 space-y-6 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">1. Identidad del responsable</h2>
          <p>
            Sincronia (en adelante, "el Responsable") es responsable del tratamiento de sus datos personales conforme a la
            Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP, vigente desde el 21 de
            marzo de 2025). Domicilio para efectos de este Aviso: México. Contacto: hola@sincronia.lat
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">2. Datos personales que recabamos</h2>
          <p>Para operar el servicio recabamos:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Datos de identificación: nombre, correo electrónico, teléfono.</li>
            <li>Datos comerciales: nombre de tu tienda, RFC, datos fiscales para facturación.</li>
            <li>Datos de comunicación: mensajes de WhatsApp procesados a través del servicio.</li>
            <li>Datos técnicos: identificadores de cuenta, BSUID (Business-Scoped User ID de Meta), datos de pedidos provenientes de Shopify.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">3. Finalidades del tratamiento</h2>
          <p>Tratamos sus datos para:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Operar el servicio de atención al cliente automatizada con inteligencia artificial.</li>
            <li>Sincronizar información entre su tienda Shopify, WhatsApp Business y nuestros sistemas.</li>
            <li>Generar propuestas de respuesta vía agente de IA, sujetas a aprobación humana antes de su envío al cliente final.</li>
            <li>Mantener registros de auditoría conforme a la LFPDPPP.</li>
            <li>Facturación y cumplimiento de obligaciones fiscales.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">4. Uso de inteligencia artificial</h2>
          <p>
            Sincronia utiliza modelos de inteligencia artificial (Anthropic Claude) para clasificar intenciones y proponer
            respuestas. El sistema opera bajo un modelo de <strong>human-in-the-loop</strong>: ninguna acción transaccional
            (cambio de pedido, devolución, modificación de datos) se ejecuta sin aprobación humana explícita.
          </p>
          <p>
            La lógica algorítmica utilizada incluye: clasificación de intenciones del mensaje, generación de respuesta
            propuesta basada en reglas configuradas por el cliente (políticas de cambio, devolución, envío) y enrutamiento
            al operador humano para validación. Las consecuencias potenciales incluyen el procesamiento automatizado de
            mensajes con fines de eficiencia operativa.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">5. Datos sensibles</h2>
          <p>
            Sincronia <strong>no solicita ni almacena</strong> datos sensibles como números de tarjetas de crédito, CVV,
            CURP, contraseñas o información financiera. Si un cliente final envía datos sensibles por error, estos son
            redactados automáticamente de los registros.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">6. Transferencias de datos</h2>
          <p>
            Compartimos datos con los siguientes terceros estrictamente necesarios para operar el servicio:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Meta Platforms, Inc. (WhatsApp Business Platform)</li>
            <li>Gupshup (proveedor de infraestructura BSP)</li>
            <li>Anthropic, Inc. (procesamiento de IA)</li>
            <li>Supabase (almacenamiento de datos)</li>
            <li>Shopify, Inc. (integración con su tienda)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">7. Derechos ARCO</h2>
          <p>
            Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (derechos
            ARCO). Para ejercerlos, escríbanos a <a href="mailto:hola@sincronia.lat" className="underline">hola@sincronia.lat</a>.
            Responderemos en un plazo no mayor a 20 días hábiles conforme a la LFPDPPP.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">8. Conservación de datos</h2>
          <p>
            Conservamos los datos de conversaciones hasta por 90 días para mejorar la calidad del servicio. Datos fiscales
            se conservan conforme a obligaciones del SAT (5 años). Puede solicitar la eliminación anticipada en cualquier
            momento.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">9. Autoridad competente</h2>
          <p>
            Quejas y denuncias por presuntos incumplimientos pueden presentarse ante la Secretaría Anticorrupción y Buen
            Gobierno (autoridad sucesora del INAI desde 2025).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">10. Cambios al aviso</h2>
          <p>
            Cualquier cambio a este aviso será publicado en sincronia.lat/privacidad e informado a los usuarios registrados
            por correo electrónico.
          </p>
        </section>
      </article>
    </main>
  );
}
