import Link from "next/link";
import { Handshake, ShoppingBag, Smartphone, Sparkles, BookOpenText, BarChart3 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg">
      <Nav />
      <Hero />
      <Stats />
      <Mockup />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-6 max-w-7xl mx-auto">
      <Link href="/" className="text-xl font-bold tracking-tight">
        <span className="gradient-text">Sincronia</span>
      </Link>
      <div className="flex items-center gap-4 text-sm">
        <a href="#precios" className="hidden md:block text-gray-400 hover:text-white transition">Precios</a>
        <a href="#como-funciona" className="hidden md:block text-gray-400 hover:text-white transition">Cómo funciona</a>
        <a href="#empezar" className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition">
          Empezar
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="px-6 md:px-12 pt-12 pb-16 md:pt-24 md:pb-24 max-w-6xl mx-auto text-center">
      <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300">
        🇲🇽 Hecho en México · Para tiendas Shopify
      </div>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
        Atención al cliente
        <br />
        <span className="gradient-text">en sincronía</span> con tu Shopify
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
        Un agente de IA que responde por WhatsApp, ejecuta acciones reales en tu tienda, y siempre te pide tu visto bueno antes de algo importante.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#empezar"
          className="glow-border px-8 py-4 rounded-full bg-gradient-to-r from-accent to-accent2 text-white font-medium hover:opacity-90 transition"
        >
          Empezar ahora
        </a>
        <a
          href="#como-funciona"
          className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition"
        >
          Ver cómo funciona
        </a>
      </div>
      <p className="text-sm text-gray-500 mt-6">$3,000 MXN/mes · Sin permanencia · Setup en 5 minutos</p>
    </section>
  );
}

function Stats() {
  const stats = [
    { num: "8h", label: "Ahorradas a la semana en customer service" },
    { num: "2 min", label: "Tiempo promedio de respuesta vs 4 horas manual" },
    { num: "94%", label: "De propuestas aprobadas sin edición" },
    { num: "$0", label: "De costo extra de Meta en mensajes service" },
  ];
  return (
    <section className="px-6 md:px-12 py-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{s.num}</div>
            <div className="text-sm text-gray-400">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Mockup() {
  return (
    <section className="px-6 md:px-12 py-16 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">
          Así <span className="gradient-text">se siente</span>
        </h2>
        <p className="text-gray-400">El agente propone, tú apruebas con un click. Listo.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Cliente final */}
        <div className="p-6 rounded-3xl bg-emerald-950/30 border border-emerald-500/20">
          <div className="text-xs uppercase tracking-wider text-emerald-400 mb-4 font-semibold">
            Chat con el cliente
          </div>
          <div className="space-y-3">
            <Bubble side="left">Hola! Necesito cambiar la talla de mi pedido #4521 de M a L 🙏</Bubble>
            <Bubble side="right" agent>
              ¡Hola Ana! 🙌 Claro, ya vi tu pedido. Te confirmo en un momento el cambio de M a L de tus tenis blancos.
            </Bubble>
            <Bubble side="right" agent>
              Listo Ana, cambio aplicado ✅ Tu pedido #4521 ahora está en talla L. Te llega el viernes 📦
            </Bubble>
            <Bubble side="left">Perfecto, mil gracias!</Bubble>
          </div>
        </div>

        {/* Operador */}
        <div className="p-6 rounded-3xl bg-purple-950/30 border border-purple-500/20">
          <div className="text-xs uppercase tracking-wider text-purple-400 mb-4 font-semibold">
            Tu WhatsApp (operador)
          </div>
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xs text-gray-500 mb-1">🤖 Sincronia propone</div>
              <div className="text-sm text-gray-300 mb-3">
                <strong>Ana</strong> pide cambio de talla M → L del pedido #4521.
              </div>
              <div className="text-sm text-gray-400 italic mb-3">
                "Listo Ana, cambio aplicado ✅..."
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs font-medium">
                  ✅ Aprobar
                </button>
                <button className="flex-1 py-2 rounded-lg bg-white/5 text-gray-400 text-xs font-medium">
                  ✏️ Editar
                </button>
                <button className="flex-1 py-2 rounded-lg bg-red-500/10 text-red-400 text-xs font-medium">
                  ✕ Rechazar
                </button>
              </div>
            </div>
            <div className="text-center text-xs text-gray-500 mt-2">
              Click "Aprobar" → mensaje enviado al cliente en 2 segundos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bubble({ children, side, agent }: { children: React.ReactNode; side: "left" | "right"; agent?: boolean }) {
  const isRight = side === "right";
  return (
    <div className={`flex ${isRight ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
          isRight
            ? "bg-emerald-500/20 text-emerald-50 rounded-br-sm"
            : "bg-white/10 text-gray-200 rounded-bl-sm"
        }`}
      >
        {agent && <div className="text-[10px] text-emerald-400 mb-0.5 font-semibold">🤖 SOFÍA · TIENDA</div>}
        {children}
      </div>
    </div>
  );
}

function Features() {
  const items = [
    {
      Icon: Handshake,
      title: "Tú decides, la IA propone",
      desc: "El agente sugiere respuestas y acciones en tu WhatsApp. Tú apruebas, editas o rechazas con un click.",
      featured: true,
    },
    {
      Icon: ShoppingBag,
      title: "Conectado a tu Shopify",
      desc: "Cambia tallas, corrige direcciones, busca pedidos. No solo platica — actúa en tu tienda.",
      featured: true,
    },
    {
      Icon: Smartphone,
      title: "Tu WhatsApp sigue siendo tuyo",
      desc: "Coexistencia oficial de Meta. Tu app del celular sigue funcionando normal. Cero riesgo de baneo.",
    },
    {
      Icon: Sparkles,
      title: "Habla como mexicano",
      desc: "Tono cálido, modismos, paqueterías locales. No es un bot gringo traducido.",
    },
    {
      Icon: BookOpenText,
      title: "Aprende tu negocio",
      desc: "Configura tus políticas de cambio, devolución y envío. El agente las respeta al pie de la letra.",
    },
    {
      Icon: BarChart3,
      title: "Métricas claras",
      desc: "Mira cuántos mensajes respondió, qué propuso, cuánto tiempo ahorraste. Datos sin humo.",
    },
  ];
  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-3 tracking-tight">
        Todo lo que necesitas, <span className="gradient-text">nada de fricción</span>
      </h2>
      <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
        Diseñado para tiendas Shopify mexicanas que quieren escalar sin contratar más gente.
      </p>
      <div className="grid md:grid-cols-6 gap-6">
        {items.map((it, i) => (
          <div
            key={it.title}
            className={`group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition ${
              it.featured ? "md:col-span-3" : "md:col-span-2"
            }`}
          >
            <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent2/20 border border-white/10 group-hover:scale-105 transition-transform">
              <it.Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{it.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { num: "01", title: "Conecta tu WhatsApp", desc: "Login con Facebook, autorizas, listo. Coexistencia activa: tu app del celular sigue normal." },
    { num: "02", title: "Configura tus reglas", desc: "Política de cambios, horarios, tono de marca. El agente las respeta siempre." },
    { num: "03", title: "Conectas tu Shopify", desc: "Una app oficial. Toma 30 segundos. El agente ya sabe tus pedidos y productos." },
    { num: "04", title: "Empieza a operar", desc: "El cliente escribe, el agente propone, tú apruebas, se manda. En tiempo real." },
  ];
  return (
    <section id="como-funciona" className="px-6 md:px-12 py-20 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-tight">
        Cómo <span className="gradient-text">funciona</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {steps.map((s) => (
          <div key={s.num} className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="text-sm gradient-text font-bold mb-3">{s.num}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-400 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="precios" className="px-6 md:px-12 py-20 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 tracking-tight">
        Un plan, <span className="gradient-text">sin sorpresas</span>
      </h2>
      <div className="glow-border p-10 rounded-3xl border border-white/10 bg-white/[0.03] text-center">
        <div className="text-sm text-gray-400 mb-2">Plan Sincronia</div>
        <div className="text-6xl font-bold mb-2">
          $3,000<span className="text-2xl text-gray-400 font-normal"> MXN/mes</span>
        </div>
        <div className="text-gray-500 mb-8">Sin permanencia. Cancelas cuando quieras.</div>
        <ul className="text-left space-y-3 mb-10 max-w-md mx-auto text-gray-300">
          <li>✅ Agente IA con human-in-the-loop</li>
          <li>✅ Hasta 1,000 conversaciones / mes</li>
          <li>✅ Integración Shopify oficial</li>
          <li>✅ WhatsApp Business API + Coexistencia</li>
          <li>✅ Setup y onboarding incluidos</li>
          <li>✅ Soporte en español</li>
        </ul>
        <a
          href="#empezar"
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-accent to-accent2 text-white font-medium hover:opacity-90 transition"
        >
          Empezar ahora
        </a>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "¿Voy a perder mi WhatsApp del celular?",
      a: "No. Gracias a Coexistencia oficial de Meta, tu WhatsApp Business sigue funcionando normal en tu celular. Sincronia solo agrega una capa inteligente atrás.",
    },
    {
      q: "¿Necesito un número nuevo?",
      a: "No es obligatorio. Puedes usar el mismo número que tu tienda ya tiene en WhatsApp Business.",
    },
    {
      q: "¿Qué pasa si quiero cancelar?",
      a: "Te vas cuando quieras. Tu número siempre es tuyo — no hay lock-in.",
    },
    {
      q: "¿Es seguro? ¿No me van a banear?",
      a: "Sincronia usa la API oficial de WhatsApp (Cloud API) certificada por Meta. Cero riesgo de baneo, a diferencia de soluciones con conexión QR no oficial.",
    },
    {
      q: "¿La IA decide sola?",
      a: "No. Tú apruebas cada acción importante desde tu WhatsApp. Cuando confíes en el agente, le sueltas más libertad.",
    },
  ];
  return (
    <section className="px-6 md:px-12 py-20 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 tracking-tight">
        Preguntas <span className="gradient-text">frecuentes</span>
      </h2>
      <div className="space-y-4">
        {items.map((it) => (
          <details
            key={it.q}
            className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] cursor-pointer group"
          >
            <summary className="font-semibold text-lg list-none flex justify-between items-center">
              {it.q}
              <span className="text-gray-500 group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="text-gray-400 mt-3 text-sm leading-relaxed">{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="empezar" className="px-6 md:px-12 py-20 max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">
          ¿Listo para <span className="gradient-text">empezar</span>?
        </h2>
        <p className="text-gray-400">Te contactamos en menos de 24 horas para activar tu cuenta.</p>
      </div>

      <form
        action="https://formsubmit.co/hola@sincronia.lat"
        method="POST"
        className="space-y-4 p-8 rounded-3xl border border-white/10 bg-white/[0.03]"
      >
        <input type="hidden" name="_subject" value="Nuevo lead Sincronia" />
        <input type="hidden" name="_next" value="https://sincronia.lat/?gracias=1" />
        <input type="hidden" name="_captcha" value="false" />

        <div>
          <label className="block text-sm text-gray-300 mb-2">Tu nombre</label>
          <input
            type="text"
            name="nombre"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none text-white"
            placeholder="Omar Orozco"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none text-white"
            placeholder="omar@mitienda.com"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-2">WhatsApp</label>
          <input
            type="tel"
            name="whatsapp"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none text-white"
            placeholder="33 1234 5678"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-2">URL de tu tienda Shopify</label>
          <input
            type="url"
            name="tienda"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none text-white"
            placeholder="https://mitienda.mx"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-2">¿Cuántos mensajes recibes al día? (aprox)</label>
          <select
            name="volumen"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none text-white"
          >
            <option value="">Elige una opción</option>
            <option value="<20">Menos de 20</option>
            <option value="20-50">20 a 50</option>
            <option value="50-100">50 a 100</option>
            <option value="100+">Más de 100</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-xl bg-gradient-to-r from-accent to-accent2 text-white font-medium hover:opacity-90 transition"
        >
          Quiero empezar
        </button>
        <p className="text-xs text-gray-500 text-center">
          Al enviar, aceptas nuestro <Link href="/privacidad" className="underline">aviso de privacidad</Link>.
        </p>
      </form>
    </section>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/525500000000?text=Hola,%20me%20interesa%20Sincronia"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium shadow-2xl transition"
      aria-label="Contactar por WhatsApp"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      WhatsApp
    </a>
  );
}

function Footer() {
  return (
    <footer className="px-6 md:px-12 py-12 border-t border-white/10 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <div>
          <span className="gradient-text font-bold">Sincronia</span> · Hecho en México 🇲🇽
        </div>
        <div className="flex gap-6">
          <Link href="/privacidad" className="hover:text-white transition">Privacidad</Link>
          <Link href="/terminos" className="hover:text-white transition">Términos</Link>
          <a href="mailto:hola@sincronia.lat" className="hover:text-white transition">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
