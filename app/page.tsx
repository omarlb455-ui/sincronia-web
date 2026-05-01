import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg">
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Footer />
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
        <a href="#precios" className="text-gray-400 hover:text-white transition">Precios</a>
        <a href="#como-funciona" className="text-gray-400 hover:text-white transition">Cómo funciona</a>
        <a href="mailto:hola@sincronia.lat" className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition">
          Empezar
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="px-6 md:px-12 py-20 md:py-32 max-w-5xl mx-auto text-center">
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
          href="mailto:hola@sincronia.lat"
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

function Features() {
  const items = [
    {
      icon: "🤝",
      title: "Tú decides, la IA propone",
      desc: "El agente sugiere respuestas y acciones en tu WhatsApp. Tú apruebas, editas o rechazas con un click.",
    },
    {
      icon: "🛒",
      title: "Conectado a tu Shopify",
      desc: "Cambia tallas, corrige direcciones, busca pedidos. No solo platica — actúa en tu tienda.",
    },
    {
      icon: "📱",
      title: "Tu WhatsApp sigue siendo tuyo",
      desc: "Coexistencia oficial de Meta. Tu app del celular sigue funcionando normal. Cero riesgo de baneo.",
    },
    {
      icon: "🇲🇽",
      title: "Habla como mexicano",
      desc: "Tono cálido, modismos, paqueterías locales. No es un bot gringo traducido.",
    },
    {
      icon: "🧠",
      title: "Aprende tu negocio",
      desc: "Configura tus políticas de cambio, devolución y envío. El agente las respeta al pie de la letra.",
    },
    {
      icon: "📊",
      title: "Métricas claras",
      desc: "Mira cuántos mensajes respondió, qué propuso, cuánto tiempo ahorraste. Datos sin humo.",
    },
  ];
  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-tight">
        Todo lo que necesitas, <span className="gradient-text">nada de fricción</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <div
            key={it.title}
            className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition"
          >
            <div className="text-3xl mb-3">{it.icon}</div>
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
          href="mailto:hola@sincronia.lat"
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
