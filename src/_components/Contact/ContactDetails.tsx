import { Headset, Mail, MapPin } from "lucide-react";

import type { ContactDetailsData } from "@/types/contact";

type ContactDetailsProps = {
  data: ContactDetailsData;
};

export default function ContactDetails({ data }: ContactDetailsProps) {
  return (
    <section
      className={`relative z-20 px-6 py-20 md:py-24 bg-white`}
      style={{ fontFamily: "var(--font-playfair-display), serif" }}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="text-4xl leading-tight text-black md:text-5xl">
            {data.left.title}
          </h2>

          <div className="mt-10 space-y-10 text-black/90">
            <div className="flex items-start gap-4">
              <Headset className="mt-1 shrink-0 text-black/70" size={24} />
              <div>
                <p className="text-sm text-black/70">
                  {data.left.items.phone.label}
                </p>
                <p className="mt-1 text-2xl leading-none">
                  {data.left.items.phone.value}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="mt-1 shrink-0 text-black/70" size={24} />
              <div>
                <p className="text-sm text-black/70">
                  {data.left.items.email.label}
                </p>
                <p className="mt-1 text-2xl leading-none">
                  {data.left.items.email.value}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="mt-1 shrink-0 text-black/70" size={24} />
              <div>
                <p className="text-sm text-black/70">
                  {data.left.items.address.label}
                </p>
                <p className="mt-1 text-base leading-7">
                  {data.left.items.address.lines.map((line, idx) => (
                    <span key={`${line}-${idx}`}>
                      {idx > 0 ? <br /> : null}
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-4xl leading-tight text-black md:text-5xl">
            {data.right.title}
          </h2>
          <p className="mt-4 text-sm text-black/75">
            {data.right.description}
          </p>

          <form className="mt-8">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                placeholder={data.right.form.placeholders.name}
                className="h-12 border border-black/70 bg-transparent px-4 text-sm text-black outline-none transition-colors placeholder:text-black/70 focus:border-black"
              />
              <input
                type="email"
                placeholder={data.right.form.placeholders.email}
                className="h-12 border border-black/70 bg-transparent px-4 text-sm text-black outline-none transition-colors placeholder:text-black/70 focus:border-black"
              />
              <input
                type="tel"
                placeholder={data.right.form.placeholders.phone}
                className="h-12 border border-black/70 bg-transparent px-4 text-sm text-black outline-none transition-colors placeholder:text-black/70 focus:border-black"
              />
              <input
                type="text"
                placeholder={data.right.form.placeholders.subject}
                className="h-12 border border-black/70 bg-transparent px-4 text-sm text-black outline-none transition-colors placeholder:text-black/70 focus:border-black"
              />
            </div>

            <textarea
              placeholder={data.right.form.placeholders.message}
              rows={6}
              className="mt-3 w-full resize-none border border-black/70 bg-transparent px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-black/70 focus:border-black"
            />

            <button
              type="submit"
              className="mt-6 inline-flex h-12 min-w-[150px] items-center justify-center rounded-full border border-black/70 px-7 text-sm text-black transition-colors hover:bg-black hover:text-white"
            >
              {data.right.form.submitLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
