"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import Masonry from "react-masonry-css";

import type { PortfolioMasonryData, PortfolioCategory } from "@/types/portfolio";

const masonryPattern = [
  "h-[260px] md:h-[320px] lg:h-[360px]",
  "h-[360px] md:h-[460px] lg:h-[560px]",
  "h-[300px] md:h-[380px] lg:h-[440px]",
  "h-[420px] md:h-[520px] lg:h-[620px]",
  "h-[280px] md:h-[340px] lg:h-[400px]",
  "h-[380px] md:h-[480px] lg:h-[580px]",
];

const couplesPattern = [
  "h-[420px] md:h-[520px] lg:h-[620px]",
  "h-[320px] md:h-[400px] lg:h-[480px]",
  "h-[460px] md:h-[560px] lg:h-[660px]",
  "h-[280px] md:h-[340px] lg:h-[400px]",
];

const compactPattern = [
  "h-[300px] md:h-[360px] lg:h-[420px]",
  "h-[360px] md:h-[440px] lg:h-[520px]",
  "h-[280px] md:h-[340px] lg:h-[400px]",
];

const masonryBreakpoints = {
  default: 3,
  1024: 2,
  640: 1,
};

export default function PortfolioMasonry({
  data,
}: {
  data: PortfolioMasonryData;
}) {
  const [activeCategory, setActiveCategory] =
    useState<PortfolioCategory>("all");
  const [isFilterAnimating, setIsFilterAnimating] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () =>
      mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  const handleFilterChange = (category: PortfolioCategory) => {
    if (category === activeCategory || isFilterAnimating) return;
    if (prefersReducedMotion) {
      setActiveCategory(category);
      return;
    }

    setIsFilterAnimating(true);
    window.setTimeout(() => {
      setActiveCategory(category);
      requestAnimationFrame(() => setIsFilterAnimating(false));
    }, 150);
  };

  const filteredPhotos = useMemo(() => {
    if (activeCategory === "all") return data.photos;
    return data.photos.filter((photo) => photo.category === activeCategory);
  }, [activeCategory, data.photos]);

  const activePattern = useMemo(() => {
    if (activeCategory === "all") return masonryPattern;
    if (activeCategory === "couples") return couplesPattern;
    return compactPattern;
  }, [activeCategory]);

  return (
    <section className="relative z-20 bg-white px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 flex items-center justify-center gap-6 md:gap-8">
          {data.categories.map((category) => {
            const isActive = activeCategory === category.value;
            return (
              <button
                key={category.value}
                type="button"
                onClick={() => handleFilterChange(category.value)}
                className={`font-serif text-base transition-colors duration-300 ${
                  isActive
                    ? "text-black underline underline-offset-4"
                    : "text-zinc-600 hover:text-black"
                }`}
                style={{ fontFamily: "var(--font-playfair-display), serif" }}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div
          className={`transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            isFilterAnimating
              ? "translate-y-1 opacity-50"
              : "translate-y-0 opacity-100"
          }`}
        >
          <Masonry
            breakpointCols={masonryBreakpoints}
            className="flex w-auto -ml-4 md:-ml-5 lg:-ml-6"
            columnClassName="pl-4 md:pl-5 lg:pl-6 space-y-4 md:space-y-5 lg:space-y-6"
          >
            {filteredPhotos.map((photo, index) => (
              <article key={photo.src}>
                <div
                  className={`group relative w-full overflow-hidden rounded-sm bg-zinc-100 ${
                    activePattern[index % activePattern.length]
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    priority={index < 2}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.015] group-hover:brightness-95"
                  />
                </div>
              </article>
            ))}
          </Masonry>
        </div>
      </div>
    </section>
  );
}
