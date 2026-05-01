import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sincronia — Atención al cliente con IA para tu Shopify",
  description:
    "Agente de IA mexicano que responde por WhatsApp y se conecta con tu Shopify. Tú apruebas, él opera. En 5 minutos lo prendes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
