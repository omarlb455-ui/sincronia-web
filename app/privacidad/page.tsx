import { PolicyLayout, Section } from "../_components/PolicyLayout";
import Link from "next/link";

export const metadata = {
  title: "Aviso de Privacidad · Sincronia",
  description: "Cómo Sincronia trata tus datos personales conforme a la LFPDPPP.",
};

export default function Privacidad() {
  return (
    <PolicyLayout title="Aviso de Privacidad" date="1 de mayo de 2026">
      <p className="text-base">
        Este aviso describe cómo <strong>Sincronia</strong> recaba, usa y protege los datos personales de quienes
        contratan el servicio (<strong>Clientes</strong>) y de las personas que interactúan con el servicio a través
        de WhatsApp (<strong>Usuarios Finales</strong>), conforme a la Ley Federal de Protección de Datos Personales
        en Posesión de los Particulares (LFPDPPP), vigente desde el 21 de marzo de 2025.
      </p>

      <Section title="1. Identidad y domicilio del responsable">
        <p>
          <strong>Sincronia</strong> (en adelante, &ldquo;el Responsable&rdquo; o &ldquo;Sincronia&rdquo;), con
          domicilio para efectos de este Aviso en México. Para el ejercicio de derechos ARCO o cualquier consulta
          relacionada con el tratamiento de tus datos, escríbenos a{" "}
          <a href="mailto:hola@sincronia.lat" className="underline">hola@sincronia.lat</a>.
        </p>
      </Section>

      <Section title="2. Datos personales que recabamos">
        <p>
          <strong>De nuestros Clientes (comerciantes Shopify):</strong>
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Datos de identificación: nombre, apellidos, RFC, datos fiscales para facturación.</li>
          <li>Datos de contacto: correo electrónico, teléfono, WhatsApp, URL de tienda Shopify.</li>
          <li>Datos comerciales: nombre del negocio, volumen de mensajes, plan contratado.</li>
          <li>Datos de pago: gestionados directamente por nuestro procesador (Stripe / Mercado Pago); Sincronia no almacena datos de tarjetas.</li>
        </ul>
        <p className="mt-3">
          <strong>De los Usuarios Finales (clientes de tiendas que usan Sincronia):</strong>
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Número de teléfono y nombre de WhatsApp.</li>
          <li>BSUID (Business-Scoped User ID) provisto por Meta.</li>
          <li>Contenido de los mensajes intercambiados con la tienda vía WhatsApp.</li>
          <li>Datos de pedidos asociados (productos, dirección de envío, status) provenientes de Shopify del Cliente.</li>
        </ul>
      </Section>

      <Section title="3. Finalidades del tratamiento">
        <p><strong>Finalidades primarias (necesarias para prestar el servicio):</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>Operar la atención al cliente automatizada con IA y aprobación humana.</li>
          <li>Sincronizar información entre tu tienda Shopify, WhatsApp Business y nuestros sistemas.</li>
          <li>Generar propuestas de respuesta vía agente de IA, sujetas a aprobación del Cliente antes del envío al Usuario Final.</li>
          <li>Mantener registros de auditoría y cumplir obligaciones de retención fiscal.</li>
          <li>Facturación, cobranza y atención a soporte técnico.</li>
        </ul>
        <p className="mt-3"><strong>Finalidades secundarias (opt-in):</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>Envío de comunicaciones promocionales sobre nuevas funciones (puedes oponerte en cualquier momento).</li>
          <li>Mejora del modelo de IA usando datos agregados y anonimizados.</li>
        </ul>
      </Section>

      <Section title="4. Datos sensibles y datos que no recabamos">
        <p>
          Sincronia <strong>no solicita ni almacena</strong> datos sensibles como CURP, contraseñas, números de
          tarjetas, CVV, ni información financiera completa. Si un Usuario Final envía datos de este tipo por error,
          serán redactados automáticamente de los registros antes de procesarse.
        </p>
      </Section>

      <Section title="5. Uso de inteligencia artificial">
        <p>
          Sincronia utiliza modelos de IA (Anthropic Claude) para clasificar intenciones y generar propuestas de
          respuesta. El sistema opera bajo un modelo de <strong>human-in-the-loop</strong>: ninguna acción
          transaccional (cambio de pedido, devolución, modificación de datos) se ejecuta sin aprobación humana
          explícita por parte del Cliente.
        </p>
        <p>
          Para más detalle sobre cómo usamos IA, decisiones automatizadas y tus derechos al respecto, consulta
          nuestra <Link href="/ia" className="underline">Política de Uso de IA</Link>.
        </p>
      </Section>

      <Section title="6. Transferencias y subprocesadores">
        <p>
          Para operar el servicio, transferimos datos a los siguientes terceros, todos con DPA (Data Processing
          Agreement) firmado y cláusulas contractuales tipo (SCC) cuando la transferencia es internacional:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Meta Platforms, Inc.</strong> — WhatsApp Business Platform (EE.UU. / global)</li>
          <li><strong>Anthropic, PBC</strong> — Procesamiento de IA (EE.UU.)</li>
          <li><strong>Supabase, Inc.</strong> — Base de datos y almacenamiento (EE.UU.)</li>
          <li><strong>Shopify, Inc.</strong> — Integración con tu tienda (Canadá / EE.UU.)</li>
          <li><strong>n8n GmbH</strong> — Orquestación de flujos (UE / EE.UU.)</li>
          <li><strong>Vercel, Inc.</strong> — Hosting de la plataforma web (EE.UU.)</li>
          <li><strong>Stripe, Inc. / Mercado Libre, S. de R.L. de C.V.</strong> — Procesamiento de pagos</li>
        </ul>
        <p>
          La lista completa y actualizada está en nuestra{" "}
          <Link href="/subprocesadores" className="underline">página de Subprocesadores</Link>.
        </p>
      </Section>

      <Section title="7. Derechos ARCO">
        <p>
          Tienes derecho a <strong>Acceder</strong>, <strong>Rectificar</strong>, <strong>Cancelar</strong> u{" "}
          <strong>Oponerte</strong> al tratamiento de tus datos personales. También puedes revocar el consentimiento
          que nos hayas otorgado o limitar el uso/divulgación de tus datos.
        </p>
        <p>
          Para ejercer cualquiera de estos derechos, envía tu solicitud a{" "}
          <a href="mailto:hola@sincronia.lat" className="underline">hola@sincronia.lat</a> incluyendo:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Nombre completo y medio de contacto para responderte.</li>
          <li>Documento que acredite tu identidad (INE u otro oficial).</li>
          <li>Descripción clara de los datos y derechos que deseas ejercer.</li>
        </ul>
        <p>Responderemos en un plazo máximo de <strong>20 días hábiles</strong> conforme al artículo 32 de la LFPDPPP.</p>
      </Section>

      <Section title="8. Conservación y eliminación de datos">
        <p>Aplicamos los siguientes plazos de retención:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Conversaciones de WhatsApp:</strong> 90 días desde el último mensaje, salvo solicitud expresa de menor plazo.</li>
          <li><strong>Datos de pedidos sincronizados desde Shopify:</strong> mientras la tienda esté activa + 30 días tras cancelación.</li>
          <li><strong>Datos fiscales:</strong> 5 años conforme al Código Fiscal de la Federación (CFF).</li>
          <li><strong>Logs de auditoría:</strong> 12 meses.</li>
        </ul>
        <p>Puedes solicitar la eliminación anticipada en cualquier momento ejerciendo tu derecho de Cancelación.</p>
      </Section>

      <Section title="9. Medidas de seguridad">
        <p>Implementamos las siguientes medidas técnicas y administrativas:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Cifrado en tránsito (TLS 1.3) y en reposo (AES-256).</li>
          <li>Tokens de acceso almacenados en bóveda cifrada con rotación periódica.</li>
          <li>Control de acceso basado en roles y autenticación multifactor para empleados.</li>
          <li>Registros de auditoría inmutables.</li>
          <li>Respaldos diarios con retención de 30 días.</li>
          <li>Pruebas de seguridad y revisión de proveedores.</li>
        </ul>
      </Section>

      <Section title="10. Notificación de vulneraciones">
        <p>
          En caso de una vulneración de seguridad que afecte significativamente tus derechos patrimoniales o morales,
          te notificaremos en un plazo no mayor a <strong>72 horas</strong> tras tener conocimiento de la misma, por
          el medio de contacto que tengamos registrado, conforme al artículo 20 de la LFPDPPP.
        </p>
      </Section>

      <Section title="11. Uso de cookies">
        <p>
          Para detalles sobre cookies y tecnologías similares en sincronia.lat, consulta nuestra{" "}
          <Link href="/cookies" className="underline">Política de Cookies</Link>.
        </p>
      </Section>

      <Section title="12. Autoridad competente">
        <p>
          Si consideras que tu derecho de protección de datos personales ha sido lesionado por alguna conducta de
          Sincronia, puedes presentar denuncia ante la <strong>Secretaría Anticorrupción y Buen Gobierno</strong>{" "}
          (autoridad sucesora del INAI desde marzo de 2025), encargada de la tutela de los derechos ARCO en el sector
          privado en México.
        </p>
      </Section>

      <Section title="13. Cambios al aviso">
        <p>
          Cualquier modificación a este Aviso será publicada en{" "}
          <a href="https://sincronia.lat/privacidad" className="underline">sincronia.lat/privacidad</a> con la fecha
          de actualización. Si los cambios afectan finalidades primarias o transferencias materiales, te notificaremos
          por correo electrónico al menos 15 días antes de su entrada en vigor.
        </p>
      </Section>
    </PolicyLayout>
  );
}
