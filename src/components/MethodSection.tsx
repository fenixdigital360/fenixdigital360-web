import Image from "next/image";
import { type Lang, t } from "@/lib/i18n";

const IMAGES = [
  "/assets/method/diagnostico.jpg",
  "/assets/method/estrategia.jpg",
  "/assets/method/implementacion.jpg",
  "/assets/method/escalamiento.jpg",
];

export default function MethodSection({ lang }: { lang: Lang }) {
  const method = t(lang).method;

  return (
    <section id="metodo" className="border-t border-white/5 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{method.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">
            {method.titleA} <span className="text-gradient-brand">{method.titleGradient}</span>{" "}
            {method.titleB}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {method.steps.map((step, i) => (
            <div
              key={step.number}
              className="relative overflow-hidden rounded-2xl border border-white/10"
            >
              <div className="relative h-32 w-full overflow-hidden">
                <Image
                  src={IMAGES[i]}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  style={{ filter: "brightness(0.55) saturate(0.9)" }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(0,12,96,0.2), rgba(4,4,4,0.9)), linear-gradient(135deg, rgba(0,12,96,0.35), rgba(128,1,166,0.3))",
                  }}
                />
                <span className="text-gradient-brand font-heading absolute bottom-3 left-4 text-3xl font-semibold">
                  {step.number}
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-lg font-medium text-title">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-body">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
