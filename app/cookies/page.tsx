import { PolicyLayout, Section } from "../_components/PolicyLayout";

export const metadata = {
  title: "Política de Cookies · Sincronia",
  description: "Cómo Sincronia usa cookies y tecnologías similares.",
};

export default function Cookies() {
  return (
    <PolicyLayout title="Política de Cookies" date="1 de mayo de 2026">
      <p className="text-base">
        Esta política explica qué cookies y tecnologías similares usamos en sincronia.lat, para qué sirven, y cómo
        puedes controlarlas.
      </p>

      <Section title="1. ¿Qué son las cookies?">
        <p>
          Las cookies son pequeños archivos de texto que un sitio web almacena en tu dispositivo cuando lo visitas.
          Permiten reconocerte en visitas posteriores, recordar preferencias y, en algunos casos, medir cómo usas el
          sitio.
        </p>
      </Section>

      <Section title="2. Qué cookies usa sincronia.lat">
        <p><strong>Esenciales (siempre activas):</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Sesión / preferencias mínimas</strong> — usadas por nuestro hosting (Vercel) para servir el sitio correctamente.</li>
        </ul>
        <p className="mt-3"><strong>Analíticas (opcionales):</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Vercel Analytics</strong> — métricas anónimas y agregadas (páginas vistas, dispositivo, país). No usa cookies de seguimiento individual ni rastrea entre sitios.</li>
        </ul>
        <p className="mt-3"><strong>De terceros:</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>Cuando contratas, redirigimos al procesador de pagos correspondiente (Stripe / Mercado Pago); ellos pueden colocar sus propias cookies bajo sus políticas.</li>
        </ul>
        <p className="mt-3">
          <strong>No usamos</strong> cookies de publicidad, tracking pixels de Facebook, ni tecnologías de
          reconocimiento entre sitios (cross-site tracking).
        </p>
      </Section>

      <Section title="3. Cómo controlar las cookies">
        <p>
          Puedes bloquear o eliminar cookies desde la configuración de tu navegador. La mayoría de navegadores
          permiten desactivarlas globalmente o por sitio. Bloquear las cookies esenciales puede impedir que partes
          del sitio funcionen correctamente.
        </p>
        <p>Guías oficiales:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="underline">Chrome</a></li>
          <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web" target="_blank" rel="noopener noreferrer" className="underline">Firefox</a></li>
          <li><a href="https://support.apple.com/es-mx/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="underline">Safari</a></li>
          <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="underline">Edge</a></li>
        </ul>
      </Section>

      <Section title="4. Cambios a esta política">
        <p>
          Cualquier cambio se publicará en esta página con una nueva fecha de actualización. Te invitamos a
          revisarla periódicamente.
        </p>
      </Section>

      <Section title="5. Contacto">
        <p>
          Dudas sobre esta política:{" "}
          <a href="mailto:hola@sincronia.lat" className="underline">hola@sincronia.lat</a>.
        </p>
      </Section>
    </PolicyLayout>
  );
}
