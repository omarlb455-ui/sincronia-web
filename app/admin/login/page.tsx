"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/admin");
      router.refresh();
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <Link href="/" className="flex items-center justify-center mb-12">
          <span className="gradient-text font-bold text-2xl tracking-tight">Sincronia</span>
        </Link>

        <div className="bg-white rounded-2xl border border-black/[0.06] shadow-sm p-8">
          <h1 className="text-2xl font-semibold tracking-tight mb-1">Iniciar sesión</h1>
          <p className="text-sm text-gray-500 mb-8">Acceso para operadores</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-black/[0.12] focus:border-black/40 focus:ring-2 focus:ring-black/5 focus:outline-none text-gray-900 text-sm transition"
                placeholder="tu@empresa.com"
                autoFocus
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-black/[0.12] focus:border-black/40 focus:ring-2 focus:ring-black/5 focus:outline-none text-gray-900 text-sm transition"
                placeholder="••••••••"
              />
            </div>
            {error && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-lg bg-gray-900 text-white font-medium hover:bg-black transition disabled:opacity-50"
            >
              {loading ? "Entrando…" : "Entrar"}
            </button>
          </form>
        </div>

        <p className="text-xs text-gray-400 text-center mt-6">
          ¿Problemas para entrar? <a href="mailto:hola@sincronia.lat" className="underline">hola@sincronia.lat</a>
        </p>
      </div>
    </main>
  );
}
