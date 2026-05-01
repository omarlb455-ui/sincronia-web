import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sincronia — Atención al cliente con IA para tu Shopify",
  description:
    "Agente de IA mexicano que responde por WhatsApp y se conecta con tu Shopify. Tú apruebas, él opera. En 5 minutos lo prendes.",
  metadataBase: new URL("https://sincronia.lat"),
  openGraph: {
    title: "Sincronia — Atención al cliente con IA para tu Shopify",
    description:
      "Agente de IA mexicano que responde por WhatsApp. Tú apruebas, él opera. $3,000 MXN/mes.",
    url: "https://sincronia.lat",
    siteName: "Sincronia",
    locale: "es_MX",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
