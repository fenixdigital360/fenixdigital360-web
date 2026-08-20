import Image from "next/image";
import { type Lang, t } from "@/lib/i18n";

export default function ProblemSection({ lang }: { lang: Lang }) {
  const problem = t(lang).problem;

  return (
    <section className="border-t border-white/5 py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="eyebrow">{problem.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">
            {problem.titleA} <span className="text-fade">{problem.titleFade}</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-body">
            {problem.description}
          </p>
          <a href="#cta" className="btn-primary mt-8 inline-flex">
            {problem.cta}
          </a>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 sm:aspect-[5/4]">
            <Image
              src="/assets/photos/team-office.jpg"
              alt="Equipo trabajando en la operacion de un negocio"
              fill
              sizes="(max-width: 1024px) 100vw, 540px"
              className="object-cover"
              style={{ filter: "brightness(0.55) saturate(0.85)" }}
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(160deg, rgba(0,12,96,0.55), rgba(128,1,166,0.35) 60%, transparent)",
              }}
            />
          </div>

          <div className="card-glow absolute inset-x-4 -bottom-8 rounded-2xl p-5 sm:inset-x-8 sm:p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-medium text-title">
                {problem.panelTitle}
              </span>
              <span className="tag-pill !text-[10px]">{problem.panelLive}</span>
            </div>
            <ul className="mt-4 flex flex-col gap-2.5">
              {problem.tasks.map((task) => (
                <li
                  key={task.label}
                  className="flex items-center justify-between gap-4 rounded-xl bg-white/[0.03] px-3.5 py-2.5"
                >
                  <span className="text-xs text-body sm:text-sm">{task.label}</span>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ${
                      task.status === problem.tasks[0].status
                        ? "bg-gradient-brand text-white"
                        : "border border-white/15 text-body"
                    }`}
                  >
                    {task.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
