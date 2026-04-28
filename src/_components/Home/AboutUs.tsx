import Image from "next/image";

import type { AboutUsData } from "@/types/home";

type AboutUsProps = {
  data: AboutUsData;
};

export default function AboutUs({ data }: AboutUsProps) {
  return (
    <section className="bg-[#f3f3f1] px-6 py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-sans text-[12px] uppercase tracking-[0.38em] text-black">
            {data.eyebrow}
          </p>
          <h2 className="mt-3 text-[52px] leading-none text-black">
            {data.heading.title}
            <span
              className="ml-48 mt-3 inline-block text-[64px] leading-none  font-medium align-middle"
              style={{ fontFamily: "var(--font-league-script), cursive" }}
            >
              {data.heading.scriptWord}
            </span>
          </h2>

          <p className="mt-7 max-w-xl font-sans text-[15px] leading-8 text-black">
            {data.description}
          </p>

          <div className="mt-8 space-y-4">
            {data.bullets.map((bullet) => (
              <div key={bullet} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#748173] text-xs text-white">
                  ✓
                </span>
                <span className="font-sans text-[15px] text-black/80">
                  {bullet}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-black/10 pt-7">
            <div className="flex items-center gap-5">
              <span
                className="text-[56px] leading-none text-black"
                style={{ fontFamily: "var(--font-league-script), cursive" }}
              >
                {data.signature.initials}
              </span>
              <div>
                <p className="text-[28px] text-black">{data.signature.name}</p>
                <p className="mt-1 font-sans text-sm text-black/60">
                  {data.signature.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[420px]">
          <div className="absolute -right-7 top-6 h-full w-full bg-[#748173]" />

          <div className="group relative z-10 aspect-4/5 overflow-hidden">
            <Image
              src={data.portraitImage}
              alt={data.portraitAlt}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-95"
              sizes="(max-width: 1024px) 90vw, 420px"
              priority={false}
            />
          </div>
          <div className="absolute -left-12 bottom-16 z-10 h-42 w-42">
            <svg
              viewBox="0 0 120 120"
              className="h-full w-full text-black/80 spin-circle"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="about-us-circle-text"
                  d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
                />
              </defs>
              <text className="fill-current text-[13px] tracking-[5px] uppercase">
                <textPath href="#about-us-circle-text" startOffset="0%">
                  {data.circleText}
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
