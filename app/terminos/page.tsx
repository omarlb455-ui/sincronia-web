import { PolicyLayout, Section } from "../_components/PolicyLayout";
import Link from "next/link";

export const metadata = {
  title: "Términos y Condiciones · Sincronia",
  description: "Términos del servicio Sincronia.",
};

export default function Terminos() {
  return (
    <PolicyLayout title="Términos y Condiciones" date="1 de mayo de 2026">
      <p className="text-base">
        Estos Términos rigen el uso del servicio <strong>Sincronia</strong>, una plataforma SaaS de atención al
        cliente automatizada con IA para tiendas Shopify, ofrecida por <strong>Sincronia</strong> (en adelante,
        &ldquo;nosotros&rdquo;) en favor de los comerciantes que la contratan (en adelante, &ldquo;Cliente&rdquo;).
      </p>

      <Section title="1. Aceptación de los términos">
        <p>
          Al registrarte, contratar o usar Sincronia, aceptas estos Términos y nuestro{" "}
          <Link href="/privacidad" className="underline">Aviso de Privacidad</Link>. Si no estás de acuerdo, no uses
          el servicio. Estos Términos constituyen un acuerdo legal vinculante entre Sincronia y el Cliente.
        </p>
      </Section>

      <Section title="2. Descripción del servicio">
        <p>
          Sincronia es una plataforma SaaS que ofrece:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Atención al cliente automatizada vía WhatsApp Business Platform.</li>
          <li>Integración con la API Admin de Shopify para consulta y ejecución de acciones en pedidos.</li>
          <li>Modelo de aprobación humana (human-in-the-loop) para acciones transaccionales.</li>
          <li>Configuración de reglas de negocio (políticas de cambio, devolución, envío, tono).</li>
          <li>Métricas y registros de auditoría.</li>
        </ul>
        <p>
          El servicio depende de proveedores terceros (Meta, Shopify, Anthropic, entre otros) cuyos cambios de
          política o disponibilidad pueden afectar la operación.
        </p>
      </Section>

      <Section title="3. Plan, precio y facturación">
        <ul className="list-disc list-inside space-y-1">
          <li>Tarifa: <strong>$3,000 MXN</strong> al mes más IVA por cada tienda Shopify activa.</li>
          <li>Facturación mensual por adelantado, en moneda nacional (MXN).</li>
          <li>Sin permanencia mínima. Puedes cancelar en cualquier momento desde tu cuenta o escribiendo a hola@sincronia.lat.</li>
          <li>Reembolso completo durante los primeros <strong>30 días</strong> desde la activación si no estás satisfecho.</li>
          <li>Después de los 30 días, la cancelación detiene el cobro del siguiente ciclo; no hay reembolsos prorrateados.</li>
          <li>Costos adicionales de Meta (mensajes Marketing, Utility o Authentication fuera de la ventana de servicio) se facturan por separado al consumo.</li>
        </ul>
      </Section>

      <Section title="4. Cuenta del Cliente y credenciales">
        <p>
          Eres responsable de mantener la confidencialidad de tus credenciales de acceso, así como de los tokens y
          conexiones autorizadas a Meta y Shopify. Cualquier uso bajo tu cuenta se presume realizado por ti. Notifícanos
          inmediatamente ante cualquier acceso no autorizado.
        </p>
      </Section>

      <Section title="5. Uso aceptable">
        <p>El Cliente se compromete a:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Cumplir las políticas de WhatsApp Business y de Meta para cuentas de empresa.</li>
          <li>No usar Sincronia para spam, mensajería no solicitada, fraude, suplantación o contenido ilícito.</li>
          <li>Configurar de buena fe las reglas de negocio (políticas de cambio, devolución, envío) que el agente IA respetará.</li>
          <li>Aprobar o rechazar las propuestas del agente en tiempos razonables; las propuestas pendientes pueden expirar.</li>
          <li>No intentar romper, hacer ingeniería inversa o eludir mecanismos de seguridad de la plataforma.</li>
          <li>Cumplir la LFPDPPP respecto de los datos de los Usuarios Finales que procesa a través del servicio.</li>
        </ul>
      </Section>

      <Section title="6. Rol de las partes en datos personales">
        <p>
          Respecto a los datos de los Usuarios Finales (clientes que escriben a la tienda):
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>El <strong>Cliente</strong> actúa como <em>responsable</em> (controller) de los datos.</li>
          <li><strong>Sincronia</strong> actúa como <em>encargado</em> (processor) y procesa los datos exclusivamente conforme a las instrucciones del Cliente y a estos Términos.</li>
          <li>El Cliente debe contar con un Aviso de Privacidad propio que disclose el uso de IA y los subprocesadores listados en <Link href="/subprocesadores" className="underline">sincronia.lat/subprocesadores</Link>.</li>
        </ul>
      </Section>

      <Section title="7. Propiedad intelectual">
        <p>
          Sincronia y todo el software, marca, código, modelos y configuraciones son propiedad del Responsable. Te
          otorgamos una licencia limitada, no exclusiva e intransferible para usar la plataforma durante la vigencia
          de tu suscripción. Tú conservas la propiedad de tus datos, conversaciones y reglas de negocio.
        </p>
      </Section>

      <Section title="8. Disponibilidad y soporte">
        <ul className="list-disc list-inside space-y-1">
          <li>Hacemos esfuerzos razonables para mantener una disponibilidad mensual ≥ 99.5% (excluyendo mantenimientos programados).</li>
          <li>Soporte por correo electrónico en horario hábil (lun–vie, 9:00–18:00 hora CDMX).</li>
          <li>Mantenimientos programados se notifican con al menos 48 horas de anticipación cuando son posibles.</li>
        </ul>
      </Section>

      <Section title="9. Limitación de responsabilidad">
        <p>
          Sincronia no será responsable, en la máxima medida permitida por la ley, por:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Errores derivados de aprobaciones del operador humano del Cliente.</li>
          <li>Caídas, cambios de política, suspensiones o sanciones de servicios de terceros (Meta, Shopify, Anthropic, etc.).</li>
          <li>Pérdidas indirectas, lucro cesante o daño a la imagen del Cliente.</li>
          <li>Configuración incorrecta de reglas de negocio por parte del Cliente.</li>
        </ul>
        <p>
          La responsabilidad agregada total de Sincronia frente al Cliente, por cualquier causa, no excederá el
          equivalente a <strong>tres (3) mensualidades</strong> efectivamente pagadas en los 12 meses anteriores al
          evento que dio origen al reclamo.
        </p>
      </Section>

      <Section title="10. Indemnización">
        <p>
          El Cliente se obliga a sacar en paz y a salvo a Sincronia ante reclamaciones de Usuarios Finales o
          terceros que se deriven de: (a) configuración incorrecta de reglas; (b) violación a las políticas de Meta o
          Shopify; (c) incumplimiento de la LFPDPPP por parte del Cliente; o (d) uso de la plataforma para fines
          distintos a los autorizados.
        </p>
      </Section>

      <Section title="11. Suspensión y terminación">
        <p>Podemos suspender o terminar el servicio en los siguientes casos:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Falta de pago tras 7 días de aviso.</li>
          <li>Uso indebido o violación a las políticas de Meta, Shopify o estos Términos.</li>
          <li>Solicitud de autoridad competente.</li>
          <li>Riesgo inminente de seguridad (suspensión inmediata; aviso posterior).</li>
        </ul>
        <p>
          A la terminación, conservaremos los datos del Cliente por 30 días para permitir exportación, tras lo cual
          se eliminarán salvo que la ley exija conservarlos.
        </p>
      </Section>

      <Section title="12. Modificaciones a los Términos">
        <p>
          Podemos actualizar estos Términos. Cambios materiales se notificarán por correo con al menos 15 días de
          anticipación. El uso continuado del servicio tras la fecha efectiva implica aceptación.
        </p>
      </Section>

      <Section title="13. Jurisdicción y ley aplicable">
        <p>
          Estos Términos se rigen por las leyes de los Estados Unidos Mexicanos. Para la interpretación y
          cumplimiento, las partes se someten expresamente a la jurisdicción de los tribunales competentes de la
          Ciudad de México, renunciando a cualquier otro fuero que pudiera corresponderles.
        </p>
      </Section>

      <Section title="14. Contacto">
        <p>
          Para cualquier duda sobre estos Términos, escríbenos a{" "}
          <a href="mailto:hola@sincronia.lat" className="underline">hola@sincronia.lat</a>.
        </p>
      </Section>
    </PolicyLayout>
  );
}
