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
  title: dict.pt.meta.title,
  description: dict.pt.meta.description,
  alternates: {
    canonical: "https://www.fenixdigital360.com/pt",
    languages: {
      es: "https://www.fenixdigital360.com/",
      "pt-BR": "https://www.fenixdigital360.com/pt",
    },
  },
};

export default function PtRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${geist.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-body">
        {children}
      </body>
    </html>
  );
}
