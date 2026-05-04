"use client";

import { useEffect, useState } from "react";

import type { ReviewsData } from "@/types/home";

type ReviewsProps = {
  data: ReviewsData;
};

export default function Reviews({ data }: ReviewsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.items.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  const activeReview = data.items[activeIndex];

  return (
    <section
      className="relative flex h-[470px] items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed px-6 text-white"
      style={{ backgroundImage: `url('${data.backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-4 text-[18px] tracking-[0.22em] text-[#f4c15d]">
          {data.starsText}
        </div>
        <p
          key={activeReview.name}
          className="mx-auto max-w-3xl text-xl italic leading-relaxed md:text-[18px] md:leading-[1.35]"
          style={{ fontFamily: "var(--font-playfair-display), serif" }}
        >
          &quot;{activeReview.message}&quot;
        </p>
        <p className="mt-6 text-sm uppercase tracking-[0.25em] text-white/90">
          {activeReview.name}
        </p>
      </div>
    </section>
  );
}
