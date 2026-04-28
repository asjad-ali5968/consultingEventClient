import type { ContactMapData } from "@/types/contact";

type ContactMapProps = {
  data: ContactMapData;
};

export default function ContactMap({ data }: ContactMapProps) {
  return (
    <section className={`px-6 pb-24 bg-white`}>
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative h-[420px] overflow-hidden border border-black/15 bg-[#d8d8d8] sm:h-[520px] md:h-[640px]">
          <iframe
            title={data.iframeTitle}
            src={data.src}
            loading={data.loading}
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full grayscale"
          />
        </div>
      </div>
    </section>
  );
}
