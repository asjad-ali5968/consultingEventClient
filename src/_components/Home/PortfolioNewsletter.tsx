import Image from "next/image";

import type { PortfolioNewsletterData } from "@/types/sharedSections";

type PortfolioNewsletterProps = {
  data: PortfolioNewsletterData;
};

export default function PortfolioNewsletter({
  data,
}: PortfolioNewsletterProps) {
  return (
    <section className="relative z-20 min-h-[80vh] overflow-hidden bg-white">
      <div className="grid min-h-[80vh] w-full overflow-hidden md:grid-cols-2">
        <div className="group relative min-h-[80vh] overflow-hidden">
          <Image
            src={data.image.src}
            alt={data.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <div className="flex items-center bg-white px-7 py-10 md:px-14 md:py-16">
          <div className="w-full max-w-[430px]">
            <p className="font-sans text-[11px] uppercase tracking-[0.38em] text-zinc-600">
              {data.eyebrow}
            </p>
            <h2
              className="mt-4 whitespace-nowrap font-serif font-normal  text-[24px] leading-[1.15] text-zinc-900 md:text-[32]"
              style={{ fontFamily: "var(--font-playfair-display), serif" }}
            >
              {data.heading.title}{" "}
              <span
                className="text-[40px] font-normal md:text-[64px]"
                style={{ fontFamily: "var(--font-league-script), cursive" }}
              >
                {data.heading.scriptWord}
              </span>
            </h2>

            <p className="mt-5 font-sans text-sm leading-relaxed text-zinc-700 md:text-base">
              {data.description}
            </p>

            <form
              className="mt-8 space-y-3"
              action={data.form.action}
              method={data.form.method}
            >
              <label className="block">
                <span className="sr-only">Full Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder={data.form.fields.name.placeholder}
                  className="h-12 w-full border border-zinc-500 bg-transparent px-4 font-sans text-[15px] text-zinc-900 placeholder:text-zinc-600 focus:border-zinc-800 focus:outline-none"
                  autoComplete={data.form.fields.name.autoComplete}
                />
              </label>

              <label className="block">
                <span className="sr-only">Email Address</span>
                <input
                  type="email"
                  name="email"
                  placeholder={data.form.fields.email.placeholder}
                  className="h-12 w-full border border-zinc-500 bg-transparent px-4 font-sans text-[15px] text-zinc-900 placeholder:text-zinc-600 focus:border-zinc-800 focus:outline-none"
                  autoComplete={data.form.fields.email.autoComplete}
                />
              </label>

              <button
                type="submit"
                className="mt-3 inline-flex h-12 min-w-[132px] items-center justify-center rounded-full border border-zinc-700 px-8 font-sans text-[15px] text-zinc-900 transition-colors duration-200 hover:bg-zinc-900 hover:text-white"
              >
                {data.form.submitLabel}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
