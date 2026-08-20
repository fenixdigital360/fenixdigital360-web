import { IconServer, IconTarget, IconUsers } from "./icons";
import { type Lang, t } from "@/lib/i18n";

const ICONS = [IconServer, IconTarget, IconUsers];

export default function DifferentiatorsSection({ lang }: { lang: Lang }) {
  const differentiators = t(lang).differentiators;

  return (
    <section className="border-t border-white/5 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{differentiators.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">
            {differentiators.titleA}{" "}
            <span className="text-fade">{differentiators.titleFade}</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {differentiators.items.map((point, i) => {
            const Icon = ICONS[i];
            return (
              <div key={point.title} className="card-glow rounded-2xl p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-title">
                  {point.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-body">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
