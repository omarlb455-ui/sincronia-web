import { PolicyLayout, Section } from "../_components/PolicyLayout";
import Link from "next/link";

export const metadata = {
  title: "Política de Uso de IA · Sincronia",
  description: "Cómo Sincronia usa inteligencia artificial de forma transparente y responsable.",
};

export default function PoliticaIA() {
  return (
    <PolicyLayout title="Política de Uso de IA" date="1 de mayo de 2026">
      <p className="text-base">
        Sincronia usa inteligencia artificial para asistir a tiendas Shopify en la atención al cliente vía WhatsApp.
        Esta política explica qué hace la IA, qué <strong>no</strong> hace, y cómo nos aseguramos de que su uso sea
        seguro, transparente y bajo control humano.
      </p>

      <Section title="1. Modelo de IA utilizado">
        <p>
          Usamos modelos de lenguaje desarrollados por <strong>Anthropic</strong> (familia Claude). Los modelos se
          ejecutan en la infraestructura de Anthropic en Estados Unidos. Anthropic actúa como subprocesador bajo un
          DPA y, conforme a sus términos comerciales, <strong>no entrena sus modelos con los datos de Sincronia</strong>.
        </p>
      </Section>

      <Section title="2. Para qué se usa la IA">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Clasificación de intención:</strong> determinar si un mensaje es saludo, consulta de información, solicitud transaccional, queja, etc.</li>
          <li><strong>Generación de propuestas de respuesta:</strong> redactar borradores que respeten el tono, políticas y reglas configuradas por el Cliente.</li>
          <li><strong>Extracción estructurada:</strong> identificar números de pedido, productos, direcciones y otros datos relevantes mencionados en la conversación.</li>
        </ul>
      </Section>

      <Section title="3. Para qué NO se usa la IA">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>No ejecuta acciones transaccionales sin aprobación humana.</strong> Cambios de pedido, devoluciones, modificación de direcciones u otras acciones que afecten el negocio del Cliente requieren aprobación explícita del operador humano.</li>
          <li><strong>No toma decisiones de cobro o pago automatizadas.</strong></li>
          <li><strong>No procesa datos sensibles</strong> (CURP, contraseñas, tarjetas, CVV). Si un Usuario Final los envía por error, son redactados antes del procesamiento.</li>
          <li><strong>No suplanta a una persona.</strong> Sofía siempre se identifica como asistente de IA en la primera interacción.</li>
        </ul>
      </Section>

      <Section title="4. Human-in-the-loop">
        <p>
          El núcleo del producto es que <strong>cada acción transaccional pasa por una persona</strong>. Cuando el
          agente IA propone modificar un pedido, cambiar una dirección, aplicar un reembolso, o cualquier acción que
          afecte materialmente al Cliente o al Usuario Final:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li>La IA genera una propuesta visible.</li>
          <li>Un operador humano del Cliente recibe la propuesta vía WhatsApp.</li>
          <li>El operador puede <strong>aprobar</strong>, <strong>editar</strong> o <strong>rechazar</strong> la propuesta.</li>
          <li>Solo entonces se ejecuta la acción y/o se envía la respuesta al Usuario Final.</li>
        </ol>
        <p>
          Las consultas puramente informativas (status de pedido, horarios, ubicación) pueden enviarse
          automáticamente al Usuario Final cuando el Cliente así lo configure, ya que no implican modificaciones.
        </p>
      </Section>

      <Section title="5. Disclosure (transparencia con el Usuario Final)">
        <p>
          Conforme a las políticas de Meta (vigentes desde el 15 de octubre de 2025) y a la LFPDPPP, Sofía se
          presenta explícitamente como asistente con IA en la primera interacción con cada Usuario Final, mediante
          un mensaje del tipo:
        </p>
        <blockquote className="border-l-2 border-gray-300 pl-4 py-2 italic text-gray-600">
          &ldquo;Te atiende Sofía 🤖, asistente con IA de [Nombre de la Tienda]. Tus mensajes se procesan según
          nuestro Aviso de Privacidad: [enlace].&rdquo;
        </blockquote>
        <p>
          El Usuario Final puede solicitar en cualquier momento ser atendido por una persona, o ejercer sus derechos
          ARCO escribiendo al correo de privacidad de la tienda.
        </p>
      </Section>

      <Section title="6. Lógica de decisión">
        <p>La IA utiliza la siguiente lógica algorítmica explícita:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Clasificación del mensaje en categorías predefinidas (greeting, info, transactional, complaint, unknown).</li>
          <li>Aplicación de reglas de negocio configuradas por el Cliente (políticas de cambio, devolución, envío, horarios).</li>
          <li>Generación de respuesta en lenguaje natural basada en el contexto de la conversación y datos de Shopify.</li>
          <li>Enrutamiento al operador humano para validación cuando la acción tiene impacto transaccional.</li>
          <li>Escalación inmediata a operador humano cuando se detecta queja fuerte, lenguaje agresivo, amenaza legal, o intención no clara.</li>
        </ul>
      </Section>

      <Section title="7. Derechos del Usuario Final frente a decisiones automatizadas">
        <p>El Usuario Final tiene derecho a:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Saber que está interactuando con un sistema asistido por IA.</li>
          <li>Solicitar la atención de una persona humana.</li>
          <li>Acceder, rectificar, cancelar u oponerse al tratamiento de sus datos.</li>
          <li>Recibir una explicación razonable de las decisiones automatizadas que le afecten.</li>
          <li>Presentar denuncia ante la <strong>Secretaría Anticorrupción y Buen Gobierno</strong>.</li>
        </ul>
      </Section>

      <Section title="8. Limitaciones conocidas">
        <p>La IA generativa puede:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Cometer errores de comprensión o contexto.</li>
          <li>Proponer respuestas que requieren ajuste por parte del operador humano.</li>
          <li>No estar familiarizada con eventos, productos o políticas posteriores a su entrenamiento.</li>
        </ul>
        <p>
          Por estas razones, mantener el modelo human-in-the-loop es central. Sincronia trabaja continuamente para
          mejorar la calidad de las propuestas, pero no garantiza precisión absoluta.
        </p>
      </Section>

      <Section title="9. Datos y entrenamiento">
        <ul className="list-disc list-inside space-y-1">
          <li>Las conversaciones procesadas <strong>no se usan para entrenar modelos públicos</strong>.</li>
          <li>Anthropic, como proveedor de los modelos, no entrena con los datos enviados por Sincronia bajo sus términos comerciales.</li>
          <li>Sincronia puede usar datos <strong>agregados y anonimizados</strong> para mejorar funcionalidades internas, sin reconstruir datos individuales identificables.</li>
        </ul>
      </Section>

      <Section title="10. Auditoría y mejora continua">
        <p>Cada interacción procesada por IA se registra con:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Mensaje recibido (entrada).</li>
          <li>Clasificación realizada por la IA.</li>
          <li>Propuesta generada.</li>
          <li>Decisión del operador humano (aprobar / editar / rechazar).</li>
          <li>Resultado final enviado al Usuario Final.</li>
        </ul>
        <p>
          Esto permite al Cliente revisar la actuación del agente, identificar errores y refinar las reglas de
          negocio.
        </p>
      </Section>

      <Section title="11. Contacto y reportes">
        <p>
          Si tienes una preocupación sobre el uso de IA en Sincronia, o reportas un comportamiento incorrecto del
          agente, escríbenos a{" "}
          <a href="mailto:hola@sincronia.lat" className="underline">hola@sincronia.lat</a>. Atendemos reportes de
          este tipo con prioridad alta.
        </p>
        <p>
          Para más información sobre cómo tratamos tus datos, consulta nuestro{" "}
          <Link href="/privacidad" className="underline">Aviso de Privacidad</Link>.
        </p>
      </Section>
    </PolicyLayout>
  );
}
