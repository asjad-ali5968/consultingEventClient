import Link from "next/link";
import { Phone, Camera } from "lucide-react";

const exploreLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-20 text-white">
      <div className=" mx-auto flex w-full max-w-8xl flex-wrap justify-around gap-x-14 gap-y-12">
        <div className="min-w-[250px]">
          <h3 className="text-[34px] leading-none">Beasty Events Decor</h3>
          <p className="mt-5 max-w-sm font-sans text-sm leading-7 text-white/70">
            We create unforgettable celebrations with thoughtful styling,
            creative details, and seamless planning for every special occasion.
          </p>
        </div>

        <div className="min-w-[160px]">
          <h3 className="text-[34px] leading-none">Explore</h3>
          <ul className="mt-5 space-y-2 font-sans text-sm text-white/85">
            {exploreLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-[250px]">
          <h3 className="text-[34px] leading-none">Get in touch</h3>
          <div className="mt-5 space-y-2 font-sans text-sm text-white/80">
            <p>WARREN, NJ, 07059</p>
          </div>

          <p className="mt-5 flex items-center gap-2 font-sans text-2xl leading-none">
            <Phone size={18} />
            631-532-9042
          </p>
          <p className="mt-3 font-sans text-sm text-white/85">
            beastyeventsdecor@gmail.com
          </p>

          <div className="mt-5 flex items-center gap-3 text-sm text-white/80">
            <a
              href="https://www.instagram.com/beastyeventsdecor_and_more/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-white"
            >
              <Camera size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
