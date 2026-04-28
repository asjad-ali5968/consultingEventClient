import Image from "next/image";

import type { WeddingTeamData } from "@/types/about";

type WeddingTeamProps = {
  data: WeddingTeamData;
};

export default function WeddingTeam({ data }: WeddingTeamProps) {
  return (
    <section className="bg-[#f8f5ef] px-6 py-20 md:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-md">
          <p className="font-sans text-[11px] uppercase tracking-[0.4em] text-black/55">
            {data.eyebrow}
          </p>
          <h1 className="mt-2 text-[2.8rem] leading-none text-[#1b1815] sm:text-[2.5rem]">
            {data.heading.title}{" "}
            <span
              className="inline-block font-medium text-[3.9rem] sm:text-[5rem]"
              style={{ fontFamily: "var(--font-league-script), cursive" }}
            >
              {data.heading.scriptWord}
            </span>
          </h1>
        </div>

        <div className="mt-12 space-y-10 lg:mt-14 lg:space-y-12">
          {data.members.map((member) => (
            <article
              key={member.name}
              className={`grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-14 ${
                member.imageFirst ? "" : "lg:[&>*:first-child]:order-2"
              }`}
            >
              <div
                className={`relative mx-auto w-full max-w-[520px] ${
                  member.imageFirst ? "lg:ml-4" : "lg:mr-4"
                }`}
              >
                <div
                  className={`absolute h-full w-full bg-[#748173] ${
                    member.imageFirst
                      ? "-right-7 top-6"
                      : "-right-7 top-6"
                  }`}
                />
                <div className="group relative z-10 aspect-[1.22/1] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 520px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-95"
                  />
                </div>
              </div>

              <div
                className={`max-w-xl ${
                  member.imageFirst ? "lg:pt-2" : "lg:pr-8"
                }`}
              >
                <h2 className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[#1b1815]">
                  <span
                    className="text-[3.2rem] leading-none font-medium sm:text-[4rem]"
                    style={{ fontFamily: "var(--font-league-script), cursive" }}
                  >
                    {member.name}
                  </span>
                  <span className="text-[2.1rem] leading-none text-black/45">
                    |
                  </span>
                  <span className="text-[2rem] leading-none sm:text-[2rem]">
                    {member.role}
                  </span>
                </h2>

                <div className="mt-5 max-w-lg space-y-6 font-sans text-[1.02rem] leading-8 text-black/72">
                  {member.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
