import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import "../globals.css";
import { dict } from "@/lib/i18n";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: dict.es.meta.title,
  description: dict.es.meta.description,
  other: {
    "facebook-domain-verification": "q66f1ktim5sm584d0aygs41tmoskng",
  },
  alternates: {
    canonical: "https://www.fenixdigital360.com/",
    languages: {
      es: "https://www.fenixdigital360.com/",
      "pt-BR": "https://www.fenixdigital360.com/pt",
    },
  },
};

export default function EsRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${geist.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-body">
        {children}
      </body>
    </html>
  );
}
