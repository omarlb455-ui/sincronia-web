import Link from "next/link";
import { createClient, createAdminClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import LogoutButton from "./_components/LogoutButton";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return <>{children}</>;

  const admin = createAdminClient();
  const { data: operador } = await admin
    .from("operadores")
    .select("id, nombre, tenant_id, rol, tenants(nombre_negocio)")
    .eq("email", user.email)
    .eq("activo", true)
    .single();

  if (!operador) {
    await supabase.auth.signOut();
    redirect("/admin/login?error=not_authorized");
  }

  const tenantName = (operador.tenants as { nombre_negocio?: string } | null)?.nombre_negocio ?? "—";
  const initials = (operador.nombre || "—")
    .split(" ")
    .map((s: string) => s[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-black/[0.06] sticky top-0 z-10 backdrop-blur-md bg-white/80">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/admin" className="gradient-text font-semibold text-lg tracking-tight">
              Sincronia
            </Link>
            <span className="hidden sm:inline-block text-gray-300">/</span>
            <span className="hidden sm:inline-block text-sm text-gray-700 font-medium">{tenantName}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent to-accent2 text-white text-xs font-semibold flex items-center justify-center">
                {initials}
              </div>
              <span className="text-sm text-gray-700">{operador.nombre}</span>
            </div>
            <LogoutButton />
          </div>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>
    </div>
  );
}
