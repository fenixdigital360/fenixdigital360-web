import Image from "next/image";
import {
  IconArrowUpRight,
  IconBot,
  IconCompass,
  IconLayout,
  IconMegaphone,
  IconTarget,
  IconWorkflow,
} from "./icons";
import { type Lang, t } from "@/lib/i18n";

const ICONS = [IconTarget, IconWorkflow, IconBot, IconLayout, IconMegaphone, IconCompass];

const IMAGES = [
  "/assets/services/media-buying.jpg",
  "/assets/services/automatizaciones.jpg",
  "/assets/services/agentes-ia.jpg",
  "/assets/services/diseno-web.jpg",
  "/assets/services/marketing-digital.jpg",
  "/assets/services/consultoria-gtm.jpg",
];

export default function ServicesSection({ lang }: { lang: Lang }) {
  const services = t(lang).services;

  return (
    <section id="servicios" className="border-t border-white/5 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{services.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">
            {services.titleA} <span className="text-fade">{services.titleFade}</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-body">
            {services.description}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service, i) => {
            const Icon = ICONS[i];
            return (
              <div key={service.title} className="card-glow flex flex-col overflow-hidden rounded-2xl">
                <div className="relative h-36 w-full overflow-hidden">
                  <Image
                    src={IMAGES[i]}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    style={{ filter: "brightness(0.6) saturate(0.9)" }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, rgba(0,12,96,0.25), rgba(4,4,4,0.85)), linear-gradient(135deg, rgba(0,12,96,0.35), rgba(128,1,166,0.3))",
                    }}
                  />
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-lg font-medium text-title">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-body">
                    {service.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {"href" in service && service.href && (
                    <a
                      href={service.href}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-title transition-colors hover:text-purple"
                    >
                      {services.verMas}
                      <IconArrowUpRight />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
