import { IconArrowUpRight, IconBot, IconServer, IconShield } from "./icons";
import FenixBotIllustration from "./FenixBotIllustration";
import { type Lang, t } from "@/lib/i18n";

const ICONS = [IconBot, IconServer];

export default function AIAgentsSection({ lang }: { lang: Lang }) {
  const agents = t(lang).agents;

  return (
    <section id="agentes-ia" className="border-t border-white/5 py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10">
        <div className="order-2 flex items-center justify-center lg:order-1">
          <div className="w-full max-w-md">
            <FenixBotIllustration />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="eyebrow">{agents.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">
            {agents.titleA} <span className="text-gradient-brand">{agents.titleGradient}</span>{" "}
            {agents.titleB}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-body">
            {agents.description}
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {agents.products.map((product, i) => {
              const Icon = ICONS[i];
              return (
                <div
                  key={product.name}
                  className="card-glow flex items-start gap-4 rounded-2xl p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-title">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-body">
                      {product.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-body">
            <IconShield className="h-4 w-4 text-purple" />
            {agents.infra}
          </div>

          <a
            href="#cta"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-title transition-colors hover:text-purple"
          >
            {agents.cta}
            <IconArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
