import Image from "next/image";

import type { PortfolioData } from "@/types/home";

type PortfolioProps = {
  data: PortfolioData;
};

export default function Portfolio({ data }: PortfolioProps) {
  return (
    <section className="bg-[#efefef] px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div>
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-black/70">
            {data.eyebrow}
          </p>
          <h2 className="mt-1 text-4xl text-black md:text-[44px]">
            {data.heading.title}
            <span
              className="ml-3 inline-block align-middle text-[62px] leading-none font-semibold"
              style={{ fontFamily: "var(--font-league-script), cursive" }}
            >
              {data.heading.scriptWord}
            </span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.items.map((item) => (
            <article
              key={item.couple}
              className="group h-[420px] perspective-distant"
            >
              <div className="relative h-full w-full rounded-[2px] transform-3d transition-transform duration-700 group-hover:transform-[rotateY(180deg)]">
                <div className="absolute inset-0 overflow-hidden backface-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.couple} wedding`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="absolute inset-0 flex backface-hidden transform-[rotateY(180deg)]">
                  <div className="flex h-full w-full flex-col justify-between bg-[#7b8877] p-8 text-white transform-3d">
                    <div className="transform-[translate3d(-100px,0,20px)] opacity-85 transition-all duration-900 ease-out group-hover:transform-[translate3d(0,0,34px)] group-hover:opacity-100">
                      <p className="mt-6 max-w-[30ch] font-sans text-[18px] text-white/95">
                        {item.description}
                      </p>
                    </div>

                    <div className=" font-sans text-lg leading-9 text-white/95 transform-[translate3d(-126px,0,12px)] opacity-80 transition-all delay-75 duration-700 ease-out group-hover:transform-[translate3d(0,0,24px)] group-hover:opacity-100">
                      <p>Wedding Planner : {item.planner}</p>
                      <p>Photographer : {item.photographer}</p>
                      <a
                        href={item.ctaHref}
                        className="mt-8 inline-block border-b border-white pb-1 text-[15px] leading-none"
                      >
                        {item.ctaLabel}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
