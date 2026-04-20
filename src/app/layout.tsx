import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CosmoTech — Transformamos ideas en experiencias digitales épicas",
  description: "Agencia de marketing digital de élite. Elevamos tu marca al siguiente nivel.",
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
          playfair.variable,
          "antialiased bg-gray-50 text-gray-900 font-sans selection:bg-indigo-500/30"
        )}
      >
        {children}
      </body>
    </html>
  );
}
