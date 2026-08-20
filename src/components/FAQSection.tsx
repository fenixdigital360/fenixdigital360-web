"use client";

import { useState } from "react";
import { type Lang, t } from "@/lib/i18n";

export default function FAQSection({ lang }: { lang: Lang }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faq = t(lang).faq;

  return (
    <section className="border-t border-white/5 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <span className="eyebrow">{faq.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">
            {faq.titleA} <span className="text-fade">{faq.titleFade}</span>
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-3">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-white/10"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-title">
                    {item.question}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-title transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-body">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
