import { type Lang, t } from "@/lib/i18n";
import HeroBackground from "./HeroBackground";

export default function Hero({ lang }: { lang: Lang }) {
  const hero = t(lang).hero;

  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      <HeroBackground />

      <div className="mx-auto flex max-w-4xl flex-col items-center px-5 text-center sm:px-8">
        <span className="tag-pill">{hero.tag}</span>

        <h1 className="mt-6 max-w-3xl text-4xl font-medium leading-[1.15] sm:text-5xl md:text-6xl">
          {hero.titleA} <span className="text-gradient-brand">{hero.titleGradient}</span>{" "}
          {hero.titleB}
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-body sm:text-lg">
          {hero.description}
        </p>

        <div className="mt-9 flex flex-col items-center gap-3">
          <a href="#cta" className="btn-primary">
            {hero.cta}
            <span aria-hidden>&rarr;</span>
          </a>
          <p className="text-sm text-body">
            {hero.ctaNote}{" "}
            <strong className="text-title">{hero.ctaNoteStrong}</strong>{" "}
            {hero.ctaNoteEnd}
          </p>
        </div>
      </div>
    </section>
  );
}
