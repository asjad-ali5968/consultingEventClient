import type { WhatWeDoData } from "@/types/home";

type WhatWeDoProps = {
  data: WhatWeDoData;
};

export default function WhatWeDo({ data }: WhatWeDoProps) {
  return (
    <section className="bg-[#7f877d] px-6 py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 text-white md:grid-cols-2 md:gap-14">
        <div>
          <p className="font-sans text-[13px] uppercase  text-white">
            {data.eyebrow}
          </p>
          <h2 className="mt-3 text-4xl leading-[30px] md:text-[36px]">
            {data.heading.line1}
            <span
              className="ml-4 inline-block text-[58px] leading-none align-middle font-bold "
              style={{ fontFamily: "var(--font-league-script), cursive" }}
            >
              {data.heading.scriptWord}
            </span>
            <br />
            {data.heading.line2}
          </h2>
          <p className="mt-12 max-w-md font-sans text-base leading-6 text-white ">
            {data.leftDescription}
          </p>
        </div>

        <div>
          {data.paragraphs.map((p) => (
            <p
              key={p}
              className="font-sans text-base leading-8 text-white [&+p]:mt-6"
            >
              {p}
            </p>
          ))}
          <button
            type="button"
            className="mt-9 rounded-full bg-white px-8 py-3 font-sans text-sm font-medium text-[#4f564f] transition-colors hover:bg-white/90"
          >
            {data.cta.label}
          </button>
        </div>
      </div>
    </section>
  );
}
