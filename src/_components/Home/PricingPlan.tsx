"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import type { PricingPlanData } from "@/types/home";

type PricingPlanProps = {
  data: PricingPlanData;
};

export default function PricingPlan({ data }: PricingPlanProps) {
  const [activePlan, setActivePlan] = useState(0);
  const [direction, setDirection] = useState(1);
  const dragStartX = useRef<number | null>(null);
  const dragDeltaX = useRef(0);
  const plan = data.plans[activePlan];
  const maxIndex = data.plans.length - 1;

  const goToPlan = (nextPlan: number) => {
    if (nextPlan === activePlan || nextPlan < 0 || nextPlan > maxIndex) return;
    setDirection(nextPlan > activePlan ? 1 : -1);
    setActivePlan(nextPlan);
  };

  const onPointerDown = (clientX: number) => {
    dragStartX.current = clientX;
    dragDeltaX.current = 0;
  };

  const onPointerMove = (clientX: number) => {
    if (dragStartX.current === null) return;
    dragDeltaX.current = clientX - dragStartX.current;
  };

  const onPointerUp = () => {
    const threshold = 55;

    if (dragDeltaX.current <= -threshold) {
      goToPlan(activePlan + 1);
    } else if (dragDeltaX.current >= threshold) {
      goToPlan(activePlan - 1);
    }

    dragStartX.current = null;
    dragDeltaX.current = 0;
  };

  return (
    <section className="bg-[#efefef] px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-black/80">
              {data.eyebrow}
            </p>
            <h2 className="mt-1 text-4xl text-black md:text-[52px]">
              {data.heading.title}
              <span
                className="ml-3 inline-block align-middle text-[72px] leading-none font-medium"
                style={{ fontFamily: "var(--font-league-script), cursive" }}
              >
                {data.heading.scriptWord}
              </span>
            </h2>
          </div>

          <p className="max-w-xl font-sans text-sm leading-7 text-black/75">
            {data.description}
          </p>
        </div>

        <div
          className="relative mt-12 touch-pan-y"
          onDragStart={(e) => e.preventDefault()}
          onMouseDown={(e) => onPointerDown(e.clientX)}
          onMouseMove={(e) => onPointerMove(e.clientX)}
          onMouseUp={onPointerUp}
          onMouseLeave={onPointerUp}
          onTouchStart={(e) => onPointerDown(e.touches[0].clientX)}
          onTouchMove={(e) => onPointerMove(e.touches[0].clientX)}
          onTouchEnd={onPointerUp}
        >
          <div className="relative h-[600px] w-full max-w-[800px] overflow-hidden">
            <AnimatePresence custom={direction} initial={false} mode="wait">
              <motion.div
                key={`image-${activePlan}`}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 48 : -48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -48 : 48 }}
                transition={{ duration: 0.38, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={plan.image}
                  alt={plan.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  draggable={false}
                  className="h-full w-full select-none object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence custom={direction} initial={false} mode="wait">
            <motion.article
              key={`content-${activePlan}`}
              custom={direction}
              initial={{ opacity: 0, y: 16, x: direction > 0 ? 24 : -24 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: -12, x: direction > 0 ? -24 : 24 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              className="mt-12 w-full bg-[#7e8978] p-8 text-white md:absolute md:right-[-20px] md:top-15 md:mt-0 md:w-[560px] md:p-10"
            >
              <h3 className="text-[38px] leading-tight">
                {plan.title}
                <span
                  className="ml-2 inline-block align-baseline text-[64px] leading-none font-medium"
                  style={{ fontFamily: "var(--font-league-script), cursive" }}
                >
                  {data.heading.scriptWord}
                </span>
              </h3>
              {plan.price ? (
                <p className="mt-4 text-[30px] leading-none">{plan.price}</p>
              ) : null}
              <p className="mt-2 font-sans text-xs uppercase tracking-[0.18em] text-white/80">
                {plan.subtitle}
              </p>
              <p className="mt-5 font-sans text-[15px] leading-7 text-white/95">
                {plan.description}
              </p>

              <div className="mt-6 space-y-2 font-sans text-[15px] text-white/95">
                {plan.features.map((feature, index) => (
                  <p key={`${feature}-${index}`}>&#10003; {feature}</p>
                ))}
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {data.plans.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goToPlan(idx)}
              aria-label={`Show package ${idx + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                idx === activePlan ? "bg-black" : "bg-black/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
