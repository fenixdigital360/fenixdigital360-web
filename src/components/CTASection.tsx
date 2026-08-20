import { type Lang, t } from "@/lib/i18n";

const WHATSAPP_NUMBER = "5541999068492";

export default function CTASection({ lang }: { lang: Lang }) {
  const cta = t(lang).cta;
  const whatsappMessage = encodeURIComponent(cta.whatsappMessage);

  return (
    <section id="cta" className="relative overflow-hidden border-t border-white/5 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(128,1,166,0.25), transparent 55%)",
        }}
      />
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 className="text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
          {cta.titleA} <span className="text-gradient-brand">{cta.titleGradient}</span>{" "}
          {cta.titleB}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
          {cta.description}
        </p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-8 inline-flex"
        >
          {cta.button}
          <span aria-hidden>&rarr;</span>
        </a>
      </div>
    </section>
  );
}
