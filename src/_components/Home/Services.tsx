"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import { servicesData as defaultServicesData } from "@/helper/homeData";
import type { ServicesData } from "@/types/home";

type ServicesProps = {
  data?: ServicesData;
  servicesPage?: boolean;
};

export default function Services({
  data = defaultServicesData,
  servicesPage = false,
}: ServicesProps) {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const dragDeltaX = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 640) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = useMemo(
    () => Math.ceil(data.items.length / slidesPerView),
    [data.items.length, slidesPerView],
  );
  const maxPage = Math.max(totalPages - 1, 0);
  const clampedCurrentPage = Math.max(0, Math.min(currentPage, maxPage));

  const onPointerDown = (clientX: number) => {
    dragStartX.current = clientX;
    dragDeltaX.current = 0;
  };

  const onPointerMove = (clientX: number) => {
    if (dragStartX.current === null) return;
    dragDeltaX.current = clientX - dragStartX.current;
    setDragOffset(dragDeltaX.current);
  };

  const onPointerUp = () => {
    const threshold = 60;

    if (dragDeltaX.current <= -threshold) {
      setCurrentPage((prev) => Math.min(prev + 1, maxPage));
    } else if (dragDeltaX.current >= threshold) {
      setCurrentPage((prev) => Math.max(prev - 1, 0));
    }

    dragStartX.current = null;
    dragDeltaX.current = 0;
    setDragOffset(0);
  };

  return (
    <section className="bg-[#e9e9e9] px-6 py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <p className="font-sans text-[12px] uppercase tracking-[0.28em] text-black/80">
              {data.eyebrow}
            </p>
            <h2 className="mt-2 text-4xl text-black md:text-[36px]">
              {data.heading.title}
              <span
                className="inline-block text-[58px] leading-none font-semibold ml-5 align-middle"
                style={{ fontFamily: "var(--font-league-script), cursive" }}
              >
                {data.heading.scriptWord}
              </span>
            </h2>
          </div>
          <p className="max-w-2xl font-sans text-base leading-7 text-black">
            {data.description}
          </p>
        </div>

        <div
          className={`mt-10 ${servicesPage ? "" : "overflow-hidden"}`}
          onMouseDown={
            servicesPage ? undefined : (e) => onPointerDown(e.clientX)
          }
          onMouseMove={
            servicesPage ? undefined : (e) => onPointerMove(e.clientX)
          }
          onMouseUp={servicesPage ? undefined : onPointerUp}
          onMouseLeave={servicesPage ? undefined : onPointerUp}
          onTouchStart={
            servicesPage
              ? undefined
              : (e) => onPointerDown(e.touches[0].clientX)
          }
          onTouchMove={
            servicesPage
              ? undefined
              : (e) => onPointerMove(e.touches[0].clientX)
          }
          onTouchEnd={servicesPage ? undefined : onPointerUp}
        >
          <div
            className={
              servicesPage
                ? "grid gap-5 md:grid-cols-2 xl:grid-cols-3"
                : "flex gap-5 transition-transform duration-500 ease-out"
            }
            style={
              servicesPage
                ? undefined
                : {
                    transform: `translateX(calc(-${clampedCurrentPage * 100}% + ${dragOffset}px))`,
                  }
            }
          >
            {data.items.map((service) => (
              <article
                key={`${service.title}-${service.accent}`}
                className={`group relative h-[447px] overflow-hidden ${
                  servicesPage ? "" : "shrink-0"
                }`}
                style={
                  servicesPage
                    ? undefined
                    : {
                        width: `calc((100% - ${(slidesPerView - 1) * 20}px) / ${slidesPerView})`,
                      }
                }
              >
                <Image
                  src={service.image}
                  alt={`${service.title} ${service.accent}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/35 transition-colors duration-500 group-hover:bg-black/90" />

                <div className="absolute inset-x-0 bottom-[-30px] p-5 text-white transition-all duration-500 group-hover:bottom-0">
                  <h3 className="text-3xl leading-none">
                    <span className="font-serif">{service.title}</span>
                    <span
                      className="ml-2 inline-block align-baseline text-[54px]"
                      style={{
                        fontFamily: "var(--font-league-script), cursive",
                      }}
                    >
                      {service.accent}
                    </span>
                  </h3>

                  <div className="mt-3 h-px w-8 bg-white/70 transition-all duration-500 group-hover:w-full" />
                  <p className="mt-4 translate-y-2 font-sans text-sm uppercase tracking-[0.2em] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {data.itemCtaLabel}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {!servicesPage && (
          <div className="mt-5 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to services page ${idx + 1}`}
                onClick={() => setCurrentPage(idx)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  idx === clampedCurrentPage ? "bg-black" : "bg-black/25"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
