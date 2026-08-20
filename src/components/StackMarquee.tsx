import { type Lang, t } from "@/lib/i18n";

const STACK = [
  "n8n",
  "OpenAI",
  "Anthropic",
  "WhatsApp Business API",
  "Meta Ads",
  "Google Ads",
  "Chatwoot",
  "Supabase",
  "Vercel",
];

const DOUBLED = [...STACK, ...STACK];

export default function StackMarquee({ lang }: { lang: Lang }) {
  const stack = t(lang).stack;

  return (
    <section className="border-t border-white/5 py-16">
      <p className="text-center text-sm text-body">
        {stack.text} <strong className="text-title">{stack.textStrong}</strong>
      </p>

      <div className="relative mt-8 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent"
        />

        <div className="marquee-track">
          {DOUBLED.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="mx-4 whitespace-nowrap rounded-full border border-white/10 px-6 py-2.5 text-sm font-medium text-body"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
