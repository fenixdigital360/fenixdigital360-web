import Image from "next/image";
import Link from "next/link";
import { type Lang, t } from "@/lib/i18n";

export default function Footer({ lang }: { lang: Lang }) {
  const year = new Date().getFullYear();
  const data = t(lang);
  const homeHref = lang === "es" ? "/" : "/pt";

  const navColumn = [
    { label: data.nav.servicios, href: `${homeHref}#servicios` },
    { label: data.nav.agentesIa, href: `${homeHref}#agentes-ia` },
    { label: data.nav.metodo, href: `${homeHref}#metodo` },
    {
      label: data.nav.portafolio,
      href: "https://portafolio-feniel.vercel.app/",
      external: true,
    },
  ];

  return (
    <footer className="border-t border-white/5 py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href={homeHref} className="flex items-center gap-2.5">
              <Image
                src="/assets/fenix-icon.png"
                alt="FenixDigital360"
                width={30}
                height={28}
                className="h-7 w-auto"
              />
              <span className="font-heading text-base font-semibold text-title">
                FenixDigital360
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-body">
              {data.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-title">
              {data.footer.navegacion}
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {navColumn.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-body transition-colors hover:text-title"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <a
                      href={item.href}
                      className="text-sm text-body transition-colors hover:text-title"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-title">
              {data.footer.servicios}
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {data.services.items.map((item) => (
                <li key={item.title} className="text-sm text-body">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-title">
              {data.footer.contacto}
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="https://wa.me/5541999068492"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-body transition-colors hover:text-title"
                >
                  +55 41 99906 8492
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@fenixdigital360.com"
                  className="text-sm text-body transition-colors hover:text-title"
                >
                  contacto@fenixdigital360.com
                </a>
              </li>
              <li>
                <a
                  href="https://portafolio-feniel.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-body transition-colors hover:text-title"
                >
                  {data.footer.portafolioLink}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-body">
            © {year} FenixDigital360. {data.footer.rights}
          </p>
          <div className="flex gap-6 text-xs text-body">
            <span>{data.footer.privacidad}</span>
            <span>{data.footer.terminos}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
