import type { MoreInfoData } from "@/types/home";

type MoreInfoProps = {
  data: MoreInfoData;
};

export default function MoreInfo({ data }: MoreInfoProps) {
  return (
    <section className="bg-linear-to-b from-[#6d7b6d] via-[#667464] to-[#5b6859] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center text-white">
          <p className="text-[12px] uppercase tracking-[0.2em] text-white">
            {data.eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
            {data.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-white/90">
            {data.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.items.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-white/20 bg-white/10 p-7 text-white shadow-[0_14px_34px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:bg-white/15"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
                {data.itemEyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight">
                {service.title}
              </h2>
              <h3
                className="mt-2 text-[22px] font-medium text-white"
                style={{ fontFamily: "var(--font-league-script), cursive" }}
              >
                {service.subtitle}
              </h3>
              <p className="mt-5 text-[15px] leading-7 text-white/90">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
