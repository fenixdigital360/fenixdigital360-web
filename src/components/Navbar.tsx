"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { type Lang, t } from "@/lib/i18n";

export default function Navbar({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const nav = t(lang).nav;

  const homeHref = lang === "es" ? "/" : "/pt";

  const navLinks = [
    { label: nav.servicios, href: `${homeHref}#servicios` },
    { label: nav.agentesIa, href: `${homeHref}#agentes-ia` },
    { label: nav.metodo, href: `${homeHref}#metodo` },
    {
      label: nav.portafolio,
      href: "https://portafolio-feniel.vercel.app/",
      external: true,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href={homeHref}
          className="flex items-center gap-2.5"
          aria-label="FenixDigital360"
        >
          <Image
            src="/assets/fenix-icon.png"
            alt="FenixDigital360"
            width={34}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <span className="font-heading text-lg font-semibold text-title">
            FenixDigital360
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-body transition-colors hover:text-title"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-body transition-colors hover:text-title"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href={nav.langSwitchHref}
            className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-body transition-colors hover:text-title"
          >
            {nav.langSwitch}
          </Link>
          <a href={`${homeHref}#cta`} className="btn-primary !py-2.5 !px-5 !text-sm">
            {nav.hablemos}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 md:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-full bg-white transition-transform ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-white transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-[1.5px] w-full bg-white transition-transform ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-bg px-5 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="text-base text-body"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-body"
                >
                  {link.label}
                </a>
              )
            )}
            <Link
              href={nav.langSwitchHref}
              onClick={() => setOpen(false)}
              className="text-base text-body"
            >
              {nav.langSwitch}
            </Link>
            <a
              href={`${homeHref}#cta`}
              onClick={() => setOpen(false)}
              className="btn-primary justify-center"
            >
              {nav.hablemos}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
