"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import type { HeroSlide } from "@/types/home";

function renderDescription(description: string) {
  const match = description.match(/<span>(.*?)<\/span>/);

  if (!match) {
    return description;
  }

  const highlightedText = match[1];
  const fullMatch = match[0];
  const [beforeText, afterText] = description.split(fullMatch);

  return (
    <>
      {beforeText}
      <span
        style={{ fontFamily: "var(--font-league-script), cursive" }}
        className="text-[28px] leading-none text-black font-semibold"
      >
        {highlightedText}
      </span>
      {afterText}
    </>
  );
}

type HeroProps = {
  slides: HeroSlide[];
};

export default function Hero({ slides }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timer = window.setInterval(goToNext, 6000);
    return () => window.clearInterval(timer);
  }, [totalSlides]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="flex h-full w-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;

          return (
            <div key={slide.image} className="relative h-full w-full shrink-0">
              <Image
                src={slide.image}
                alt={`Event hero slide ${index + 1}`}
                fill
                priority={index === 0}
                sizes="100vw"
                quality={100}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute inset-0">
                <div className="mx-auto flex h-full w-full max-w-7xl items-end px-6 pb-20 md:pb-24 lg:px-10">
                  <div className="max-w-xl bg-white p-7 text-black md:p-9 rounded-lg">
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
                      {slide.title}
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
            </div>
          );
        })}
      </div>

      <div className="absolute right-6 bottom-8 z-20 flex gap-3 md:right-[160px] md:bottom-[50px]">
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Previous slide"
          className="flex h-10 w-10  justify-center  rounded-full border border-white/30 bg-black/30 text-2xl text-white/80 transition-colors hover:bg-black/70"
        >
          &#8249;
        </button>
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next slide"
          className="flex h-10 w-10  justify-center rounded-full border border-white/30 bg-black/30 text-2xl text-white/80 transition-colors hover:bg-black/70"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
}
