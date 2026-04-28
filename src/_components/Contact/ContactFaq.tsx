"use client";

import { useState } from "react";

import type { ContactFaqData } from "@/types/about";

type ContactFaqProps = {
  data: ContactFaqData;
};

export default function ContactFaq({ data }: ContactFaqProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#748173] px-6 py-20 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="text-white">
          <p className="font-sans text-[11px] uppercase tracking-[0.42em] text-white/80">
            {data.eyebrow}
          </p>
          <h2
            className="mt-3 text-[42px] leading-[0.95] text-white md:text-[56px]"
            style={{ fontFamily: "var(--font-playfair-display), serif" }}
          >
            {data.heading.title}
            <span
              className="ml-2 inline-block text-[58px] md:text-[78px]"
              style={{ fontFamily: "var(--font-league-script), cursive" }}
            >
              {data.heading.scriptWord}
            </span>
          </h2>
          <p className="mt-8 max-w-[470px] font-sans text-sm leading-7 text-white/80">
            {data.description}
          </p>
        </div>

        <div className="space-y-3">
          {data.items.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div key={item.question} className="overflow-hidden bg-white/95">
                <button
                  type="button"
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors duration-300 hover:bg-white"
                  aria-expanded={isActive}
                >
                  <span
                    className="text-[17px] leading-none text-zinc-900"
                    style={{
                      fontFamily: "var(--font-playfair-display), serif",
                    }}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`text-2xl leading-none text-zinc-500 transition-transform duration-300 ${
                      isActive ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 font-sans text-sm leading-7 text-zinc-700">
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
