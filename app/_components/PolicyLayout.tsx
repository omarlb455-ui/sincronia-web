import Link from "next/link";

export function PolicyLayout({
  title,
  date,
  children,
}: {
  title: string;
  date: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen px-6 md:px-12 py-12 max-w-3xl mx-auto">
      <Link href="/" className="text-sm text-gray-500 hover:text-black transition">
        ← Volver
      </Link>
      <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-3 tracking-tight">{title}</h1>
      <p className="text-sm text-gray-500 mb-12">Última actualización: {date}</p>
      <article className="text-gray-700 space-y-8 leading-relaxed">{children}</article>

      <div className="mt-16 pt-8 border-t border-black/[0.08] flex flex-wrap gap-4 text-sm text-gray-500">
        <Link href="/privacidad" className="hover:text-black transition">Privacidad</Link>
        <Link href="/terminos" className="hover:text-black transition">Términos</Link>
        <Link href="/cookies" className="hover:text-black transition">Cookies</Link>
        <Link href="/subprocesadores" className="hover:text-black transition">Subprocesadores</Link>
        <Link href="/ia" className="hover:text-black transition">Uso de IA</Link>
        <a href="mailto:hola@sincronia.lat" className="hover:text-black transition ml-auto">hola@sincronia.lat</a>
      </div>
    </main>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 tracking-tight">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
