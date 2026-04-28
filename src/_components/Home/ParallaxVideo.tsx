"use client";

import { useState } from "react";

import type { ParallaxVideoData } from "@/types/home";

type ParallaxVideoProps = {
  data: ParallaxVideoData;
};

export default function ParallaxVideo({ data }: ParallaxVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoSrc = encodeURI(data.videoSrc);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat md:bg-fixed min-h-[500px]"
      style={{ backgroundImage: `url('${data.backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative mx-auto flex  w-full max-w-6xl items-center justify-center px-6 py-16">
        <div className="flex w-full max-w-4xl flex-col items-center text-center text-white">
          <p className="font-sans text-[11px] uppercase tracking-[0.35em] text-white/85">
            {data.tag}
          </p>
          <h2 className="mt-2 text-4xl leading-tight md:text-6xl">
            {data.heading.title}
            <span
              className="ml-3 inline-block align-baseline text-[64px] leading-none font-medium md:text-[92px]"
              style={{ fontFamily: "var(--font-league-script), cursive" }}
            >
              {data.heading.scriptWord}
            </span>
          </h2>

          <div className="mt-10">
            {!isPlaying ? (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                aria-label={data.playAriaLabel}
                className="group flex h-24 w-24 items-center justify-center rounded-full border-2 border-white/85 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
              >
                <span className="ml-1 text-3xl leading-none transition-transform duration-300 group-hover:translate-x-0.5">
                  ▶
                </span>
              </button>
            ) : null}
          </div>
        </div>
      </div>
      {isPlaying ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="relative w-full max-w-[900px] overflow-hidden rounded-2xl border border-white/30 shadow-2xl">
            <button
              type="button"
              onClick={() => setIsPlaying(false)}
              aria-label={data.closeAriaLabel}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/65 text-lg text-white transition-colors duration-200 hover:bg-black/80"
            >
              ×
            </button>
            <video
              src={videoSrc}
              className="aspect-video w-full bg-black object-cover"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
