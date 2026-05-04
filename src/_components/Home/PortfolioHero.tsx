"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

import type { HeroSlide } from "@/types/home";

function renderDescription(description: string) {
  let key = 0;

  const parseInline = (text: string): ReactNode[] => {
    const regex = /<(span|b)>([\s\S]*?)<\/\1>/g;
    const parts: ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      const [fullMatch, tag, content] = match;
      const startIndex = match.index;

      if (startIndex > lastIndex) {
        parts.push(text.slice(lastIndex, startIndex));
      }

      const children = parseInline(content);

      if (tag === "span") {
        parts.push(
          <span
            key={`span-${key}`}
            style={{ fontFamily: "var(--font-league-script), cursive" }}
            className="text-[28px] leading-none text-black font-semibold"
          >
            {children}
          </span>,
        );
      } else {
        parts.push(
          <b key={`b-${key}`} className="font-semibold">
            {children}
          </b>,
        );
      }

      key += 1;
      lastIndex = startIndex + fullMatch.length;
    }

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  };

  const parsed = parseInline(description);
  return parsed.length > 0 ? <>{parsed}</> : description;
}

type PortfolioHeroProps = {
  slides: HeroSlide[];
};

export default function PortfolioHero({ slides }: PortfolioHeroProps) {
  const heroSlides = useMemo(() => slides, [slides]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);
  const totalSlides = heroSlides.length;

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setHasEntered(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (totalSlides <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    // 1. Removed 'sticky top-0' so the section scrolls naturally
    <section className="relative h-screen w-full">
      {/* 2. BACKGROUND LAYER: Fixed to the screen so it acts as a parallax backdrop */}
      <div className="fixed inset-0 z-[-1] h-screen w-full overflow-hidden bg-black">
        <div
          className="flex h-full w-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <div key={index} className="relative h-full w-full shrink-0">
              <Image
                src={slide.image}
                alt=""
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>
      </div>

      {/* 3. FOREGROUND LAYER: Contains the cards, stays in normal flow to scroll up */}
      <div className="relative z-10 h-full w-full overflow-hidden">
        <div
          className="flex h-full w-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, index) => {
            const isActive = index === currentSlide && hasEntered;

            return (
              <div key={index} className="relative h-full w-full shrink-0">
                <div className="mx-auto flex h-full w-full max-w-7xl items-end px-6 pb-20 md:pb-24 lg:px-10">
                  <div className="max-w-xl rounded-lg bg-white p-7 text-black shadow-xl md:p-9">
                    <p
                      className={`font-sans text-[11px] uppercase tracking-[0.3em] text-zinc-600 transition-all duration-700 ${
                        isActive
                          ? "translate-y-0 opacity-100 blur-0 delay-100"
                          : "translate-y-4 opacity-0 blur-sm delay-0"
                      }`}
                    >
                      {slide.tag}
                    </p>
                    <h1
                      className={`mt-3 font-serif text-[36px] leading-tight transition-all duration-700 ${
                        isActive
                          ? "translate-y-0 opacity-100 blur-0 delay-300"
                          : "translate-y-5 opacity-0 blur-sm delay-0"
                      }`}
                      style={{
                        fontFamily: "var(--font-playfair-display), serif",
                      }}
                    >
                      {renderDescription(slide.title)}
                    </h1>
                    <p
                      className={`mt-4 max-w-md font-sans text-sm text-zinc-600 transition-all duration-700 md:text-base ${
                        isActive
                          ? "translate-y-0 opacity-100 blur-0 delay-500"
                          : "translate-y-6 opacity-0 blur-sm delay-0"
                      }`}
                    >
                      {renderDescription(slide.description)}
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
