import Link from "next/link";
import { Handshake, ShoppingBag, Smartphone, Sparkles, BookOpenText, BarChart3, Check, Package, Truck, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg">
      <Nav />
      <Hero />
      <Integrations />
      <NumberedSections />
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
        <a href="#precios" className="hidden md:block text-gray-600 hover:text-black transition">Precios</a>
        <a href="#como-funciona" className="hidden md:block text-gray-600 hover:text-black transition">Cómo funciona</a>
        <a href="#empezar" className="px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition">
          Empezar
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="px-6 md:px-12 pt-12 pb-16 md:pt-24 md:pb-24 max-w-6xl mx-auto text-center">
      <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-black/10 bg-white text-xs text-gray-700">
        🇲🇽 Hecho en México · Para tiendas Shopify
      </div>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
        Atención al cliente
        <br />
        <span className="gradient-text">en sincronía</span> con tu Shopify
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
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
          className="px-8 py-4 rounded-full border border-black/15 hover:bg-black/[0.04] transition"
        >
          Ver cómo funciona
        </a>
      </div>
      <p className="text-sm text-gray-500 mt-6">$3,000 MXN/mes · Sin permanencia · Setup en 5 minutos</p>
    </section>
  );
}

function Integrations() {
  const logos = [
    { name: "Shopify", slug: "shopify", color: "95BF47" },
    { name: "WhatsApp", slug: "whatsapp", color: "25D366" },
    { name: "Stripe", slug: "stripe", color: "635BFF" },
    { name: "Mercado Pago", slug: "mercadopago", color: "00B1EA" },
    { name: "Meta", slug: "meta", color: "0866FF" },
    { name: "Anthropic", slug: "anthropic", color: "191919" },
  ];
  return (
    <section className="px-6 md:px-12 py-12 max-w-6xl mx-auto">
      <div className="text-center text-xs uppercase tracking-widest text-gray-500 font-semibold mb-8">
        Se integra con las herramientas que ya usas
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
        {logos.map((l) => (
          <div
            key={l.name}
            className="flex items-center gap-2.5 grayscale hover:grayscale-0 transition opacity-60 hover:opacity-100"
          >
            <img
              src={`https://cdn.simpleicons.org/${l.slug}/${l.color}`}
              alt={l.name}
              className="w-7 h-7"
            />
            <span className="text-base md:text-lg font-semibold text-gray-700">{l.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function NumberedSections() {
  return (
    <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto space-y-32 md:space-y-40">
      <SectionBlock
        num="01"
        eyebrow="Bandeja con IA"
        title={<>Tus mensajes, <span className="gradient-text">contestados solos</span></>}
        desc="Sofía lee cada mensaje que entra a tu WhatsApp Business, entiende qué pide el cliente y redacta la respuesta perfecta — con tu tono, tus políticas, tus tiempos de envío."
        bullets={[
          "Entiende cambios, devoluciones, status de pedido, dudas de talla",
          "Responde 24/7 incluso fuera de horario",
          "Aprende tu negocio con cada conversación",
        ]}
        side="right"
      >
        <BandejaMockup />
      </SectionBlock>

      <SectionBlock
        num="02"
        eyebrow="Aprobación humana"
        title={<>Tú das el <span className="gradient-text">visto bueno</span></>}
        desc="Antes de mandar algo importante, Sofía te pregunta. Apruebas, editas o rechazas con un solo tap desde tu propio WhatsApp. Sin apps nuevas, sin dashboards."
        bullets={[
          "Cada acción transaccional pasa por ti",
          "Edita la propuesta si quieres ajustar el tono",
          "Cuando confíes, le sueltas más libertad",
        ]}
        side="left"
      >
        <AprobacionMockup />
      </SectionBlock>

      <SectionBlock
        num="03"
        eyebrow="Acciones en Shopify"
        title={<>No solo platica — <span className="gradient-text">ejecuta</span></>}
        desc="Conectas tu Shopify una vez. Sofía cambia tallas, corrige direcciones, consulta tracking, aplica reembolsos. Acciones reales en tu tienda, no copy-paste."
        bullets={[
          "Cambio de talla, color o variante en pedidos abiertos",
          "Corrección de dirección antes de envío",
          "Consulta de tracking y status en tiempo real",
        ]}
        side="right"
      >
        <ShopifyMockup />
      </SectionBlock>
    </section>
  );
}

function SectionBlock({
  num,
  eyebrow,
  title,
  desc,
  bullets,
  side,
  children,
}: {
  num: string;
  eyebrow: string;
  title: React.ReactNode;
  desc: string;
  bullets: string[];
  side: "left" | "right";
  children: React.ReactNode;
}) {
  const mockupFirst = side === "left";
  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
      <div className={mockupFirst ? "md:order-2" : ""}>
        <div className="text-7xl md:text-8xl font-bold gradient-text leading-none mb-2">{num}</div>
        <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4">{eyebrow}</div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-5">{title}</h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">{desc}</p>
        <ul className="space-y-3">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-accent to-accent2 flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              <span className="text-gray-700">{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={mockupFirst ? "md:order-1" : ""}>{children}</div>
    </div>
  );
}

function BandejaMockup() {
  return (
    <div className="p-5 rounded-3xl bg-emerald-50 border border-emerald-200 shadow-xl">
      <div className="flex items-center gap-2 mb-4 px-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-white text-xs font-bold">A</div>
        <div>
          <div className="text-sm font-semibold text-gray-900">Ana López</div>
          <div className="text-[10px] text-emerald-600">en línea</div>
        </div>
      </div>
      <div className="space-y-2.5">
        <Bubble side="left">Hola! Necesito cambiar la talla de mi pedido #4521 de M a L 🙏</Bubble>
        <Bubble side="right" agent>¡Hola Ana! 🙌 Claro, ya vi tu pedido de los tenis blancos. ¿Confirmo el cambio de M a L?</Bubble>
        <Bubble side="left">Sí porfa</Bubble>
        <Bubble side="right" agent>Listo ✅ Tu pedido #4521 ahora está en talla L. Te llega el viernes 📦</Bubble>
        <Bubble side="left">Mil gracias!</Bubble>
      </div>
    </div>
  );
}

function AprobacionMockup() {
  return (
    <div className="p-5 rounded-3xl bg-purple-50 border border-purple-200 shadow-xl">
      <div className="flex items-center gap-2 mb-4 px-2">
        <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 text-xs font-bold">🤖</div>
        <div>
          <div className="text-sm font-semibold text-gray-900">Sofía · Sincronia</div>
          <div className="text-[10px] text-purple-600">Tu agente</div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="p-4 rounded-2xl bg-white border border-black/[0.08]">
          <div className="text-xs text-gray-500 mb-2">Propuesta para <strong>Ana López</strong></div>
          <div className="text-xs text-gray-500 mb-2 italic">Pide: cambio M → L del pedido #4521</div>
          <div className="p-3 rounded-xl bg-gray-50 text-sm text-gray-800 mb-3">
            "Listo Ana, cambio aplicado ✅ Tu pedido #4521 ahora está en talla L. Te llega el viernes 📦"
          </div>
          <div className="flex gap-2">
            <button className="flex-1 py-2 rounded-lg bg-emerald-500 text-white text-xs font-medium">✅ Aprobar</button>
            <button className="flex-1 py-2 rounded-lg bg-gray-100 text-gray-700 text-xs font-medium">✏️ Editar</button>
            <button className="flex-1 py-2 rounded-lg bg-red-50 text-red-600 text-xs font-medium">✕ Rechazar</button>
          </div>
        </div>
        <div className="text-center text-[11px] text-gray-500">Tap "Aprobar" → enviado en 2 segundos</div>
      </div>
    </div>
  );
}

function ShopifyMockup() {
  return (
    <div className="p-5 rounded-3xl bg-gray-50 border border-gray-200 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
            <ShoppingBag className="w-4 h-4 text-white" strokeWidth={2} />
          </div>
          <div className="text-sm font-semibold text-gray-900">Shopify · Pedido #4521</div>
        </div>
        <div className="text-[10px] px-2 py-1 rounded-full bg-amber-100 text-amber-800 font-semibold">EN PREPARACIÓN</div>
      </div>
      <div className="space-y-3">
        <div className="p-3 rounded-xl bg-white border border-black/[0.08] flex items-center gap-3">
          <Package className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
          <div className="flex-1">
            <div className="text-xs text-gray-500">Tenis Pacífico Blanco</div>
            <div className="text-sm">
              <span className="line-through text-gray-400">Talla M</span>
              <span className="ml-2 font-semibold text-emerald-600">→ Talla L</span>
            </div>
          </div>
          <Check className="w-4 h-4 text-emerald-500" strokeWidth={3} />
        </div>
        <div className="p-3 rounded-xl bg-white border border-black/[0.08] flex items-center gap-3">
          <MapPin className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
          <div className="flex-1 text-xs text-gray-700">Av. Vallarta 4502, Guadalajara</div>
        </div>
        <div className="p-3 rounded-xl bg-white border border-black/[0.08] flex items-center gap-3">
          <Truck className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
          <div className="flex-1 text-xs text-gray-700">DHL · Entrega vie 3 may</div>
        </div>
        <div className="text-[11px] text-center text-gray-500 pt-1">Acción ejecutada por Sofía vía Shopify Admin API</div>
      </div>
    </div>
  );
}

function Bubble({ children, side, agent }: { children: React.ReactNode; side: "left" | "right"; agent?: boolean }) {
  const isRight = side === "right";
  return (
    <div className={`flex ${isRight ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
          isRight
            ? "bg-emerald-500 text-white rounded-br-sm"
            : "bg-white border border-black/[0.08] text-gray-800 rounded-bl-sm shadow-sm"
        }`}
      >
        {agent && <div className="text-[10px] text-emerald-100 mb-0.5 font-semibold">🤖 SOFÍA · TIENDA</div>}
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
      <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
        Diseñado para tiendas Shopify mexicanas que quieren escalar sin contratar más gente.
      </p>
      <div className="grid md:grid-cols-6 gap-6">
        {items.map((it) => (
          <div
            key={it.title}
            className={`group p-6 rounded-2xl border border-black/[0.08] bg-white hover:border-black/20 hover:shadow-lg transition ${
              it.featured ? "md:col-span-3" : "md:col-span-2"
            }`}
          >
            <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-accent/10 to-accent2/10 border border-black/[0.06] group-hover:scale-105 transition-transform">
              <it.Icon className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{it.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{it.desc}</p>
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
          <div key={s.num} className="p-8 rounded-2xl border border-black/[0.08] bg-white hover:shadow-lg transition">
            <div className="text-sm gradient-text font-bold mb-3">{s.num}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600 text-sm">{s.desc}</p>
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
      <div className="glow-border p-10 rounded-3xl border border-black/[0.08] bg-white text-center shadow-xl">
        <div className="text-sm text-gray-500 mb-2">Plan Sincronia</div>
        <div className="text-6xl font-bold mb-2">
          $3,000<span className="text-2xl text-gray-500 font-normal"> MXN/mes</span>
        </div>
        <div className="text-gray-500 mb-8">Sin permanencia. Cancelas cuando quieras.</div>
        <ul className="text-left space-y-3 mb-10 max-w-md mx-auto text-gray-700">
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
            className="p-6 rounded-2xl border border-black/[0.08] bg-white cursor-pointer group hover:shadow-md transition"
          >
            <summary className="font-semibold text-lg list-none flex justify-between items-center">
              {it.q}
              <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="text-gray-600 mt-3 text-sm leading-relaxed">{it.a}</p>
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
        <p className="text-gray-600">Te contactamos en menos de 24 horas para activar tu cuenta.</p>
      </div>

      <form
        action="https://formsubmit.co/hola@sincronia.lat"
        method="POST"
        className="space-y-4 p-8 rounded-3xl border border-black/[0.08] bg-white shadow-xl"
      >
        <input type="hidden" name="_subject" value="Nuevo lead Sincronia" />
        <input type="hidden" name="_next" value="https://sincronia.lat/?gracias=1" />
        <input type="hidden" name="_captcha" value="false" />

        <div>
          <label className="block text-sm text-gray-700 mb-2">Tu nombre</label>
          <input
            type="text"
            name="nombre"
            required
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-black/[0.08] focus:border-black/30 focus:bg-white focus:outline-none text-gray-900"
            placeholder="Omar Orozco"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-black/[0.08] focus:border-black/30 focus:bg-white focus:outline-none text-gray-900"
            placeholder="omar@mitienda.com"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">WhatsApp</label>
          <input
            type="tel"
            name="whatsapp"
            required
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-black/[0.08] focus:border-black/30 focus:bg-white focus:outline-none text-gray-900"
            placeholder="33 1234 5678"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">URL de tu tienda Shopify</label>
          <input
            type="url"
            name="tienda"
            required
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-black/[0.08] focus:border-black/30 focus:bg-white focus:outline-none text-gray-900"
            placeholder="https://mitienda.mx"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">¿Cuántos mensajes recibes al día? (aprox)</label>
          <select
            name="volumen"
            required
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-black/[0.08] focus:border-black/30 focus:bg-white focus:outline-none text-gray-900"
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
    <footer className="px-6 md:px-12 py-12 border-t border-black/[0.08] mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <div>
          <span className="gradient-text font-bold">Sincronia</span> · Hecho en México 🇲🇽
        </div>
        <div className="flex gap-6">
          <Link href="/privacidad" className="hover:text-black transition">Privacidad</Link>
          <Link href="/terminos" className="hover:text-black transition">Términos</Link>
          <a href="mailto:hola@sincronia.lat" className="hover:text-black transition">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
