import { IconWhatsapp } from "./icons";
import { type Lang, t } from "@/lib/i18n";

const WHATSAPP_NUMBER = "5541999068492";

export default function FloatingWhatsApp({ lang }: { lang: Lang }) {
  const whatsappFloat = t(lang).whatsappFloat;
  const message = encodeURIComponent(whatsappFloat.message);

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary fixed bottom-6 right-6 z-50 !px-5 !py-3.5 !text-sm shadow-2xl"
      aria-label="WhatsApp"
    >
      <IconWhatsapp className="h-5 w-5" />
      {whatsappFloat.label}
    </a>
  );
}
