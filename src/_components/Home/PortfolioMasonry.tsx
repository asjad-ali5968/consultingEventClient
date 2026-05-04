"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

import type {
  PortfolioMasonryData,
  PortfolioCategory,
} from "@/types/portfolio";

const getColumnCount = (width: number) => {
  if (width <= 640) return 1;
  if (width <= 1024) return 2;
  if (width <= 1280) return 3;
  return 4;
};

export default function PortfolioMasonry({
  data,
}: {
  data: PortfolioMasonryData;
}) {
  const [activeCategory, setActiveCategory] =
    useState<PortfolioCategory>("all");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [columnCount, setColumnCount] = useState(4);

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

  useEffect(() => {
    let frameId = 0;

    const updateColumnCount = () => {
      setColumnCount(getColumnCount(window.innerWidth));
    };

    const onResize = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateColumnCount);
    };

    updateColumnCount();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const handleFilterChange = (category: PortfolioCategory) => {
    if (category === activeCategory) return;
    setActiveCategory(category);
  };

  const filteredPhotos = useMemo(() => {
    if (activeCategory === "all") return data.photos;
    return data.photos.filter((photo) => photo.category === activeCategory);
  }, [activeCategory, data.photos]);

  const layoutTransition = prefersReducedMotion
    ? { duration: 0 }
    : {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1] as const,
      };

  const fadeTransition = prefersReducedMotion
    ? { duration: 0 }
    : {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      };

  return (
    <section className="relative z-20 bg-white px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto w-full max-w-352">
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

        <LayoutGroup id="portfolio-masonry">
          <motion.div layout transition={layoutTransition}>
            <motion.div
              layout
              className="w-full"
              style={{ columnCount, columnGap: "1rem" }}
              transition={layoutTransition}
            >
              <AnimatePresence initial={false}>
                {filteredPhotos.map((photo, photoIndex) => (
                  <motion.article
                    layout
                    key={photoIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mb-4 break-inside-avoid md:mb-5 lg:mb-6"
                    transition={{
                      layout: layoutTransition,
                      opacity: fadeTransition,
                    }}
                  >
                    <div
                      className="group relative w-full overflow-hidden rounded-sm bg-zinc-100"
                      style={{
                        aspectRatio: `${photo.width} / ${photo.height}`,
                      }}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        priority={photoIndex < 3}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        className="object-cover object-center transition duration-500 group-hover:scale-[1.015] group-hover:brightness-95"
                      />
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
