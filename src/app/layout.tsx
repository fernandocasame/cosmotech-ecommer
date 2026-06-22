import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SoftNow — Innovación & Desarrollo de Software de Élite",
  description: "Diseñamos y desarrollamos productos digitales de alto rendimiento. Plataformas a medida, automatizaciones e inteligencia artificial para escalar tu negocio.",
  metadataBase: new URL("https://SoftNow.info"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SoftNow — Innovación & Desarrollo de Software de Élite",
    description: "Diseñamos y desarrollamos productos digitales de alto rendimiento. Plataformas a medida, automatizaciones e inteligencia artificial para escalar tu negocio.",
    url: "https://SoftNow.info",
    siteName: "SoftNow",
    locale: "es_ES",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={clsx(
          inter.variable,
          outfit.variable,
          "antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
