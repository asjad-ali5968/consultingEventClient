"use client";

import Link from "next/link";
import Image from "next/image";
import TextPressure from "@/helper/TextPressure";
import { useEffect, useRef, useState } from "react";

const exploreLinks = [
  { label: "Our Work", href: "/portfolio" },
  { label: "About Us", href: "#" },
  { label: "Shop", href: "#" },
  { label: "Reach Out", href: "#" },
];

const followLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/beastyeventsdecor_and_more/",
  },
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
];

export default function Footer() {
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef<HTMLElement>(null);

  // Automatically measure the footer's height so the scroll spacer is perfectly sized
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    });

    if (footerRef.current) {
      resizeObserver.observe(footerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  // If the height hasn't been calculated yet, fall back to standard document flow
  const isMounted = footerHeight > 0;

  return (
    <div
      className="relative w-full"
      style={{
        height: isMounted ? `${footerHeight}px` : "auto",
        clipPath: isMounted
          ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
          : "none",
      }}
    >
      <div className={isMounted ? "fixed bottom-0 left-0 w-full" : "relative"}>
        <footer
          ref={footerRef}
          className="bg-[#7e8978] px-6 pb-8 pt-12 text-[#ffffff] md:px-10 md:pt-16"
        >
          <div className="mx-auto w-full max-w-7xl">
            <div style={{ position: "relative", height: "120px" }}>
              <TextPressure
                text="Book Your Next Event with Us!"
                flex
                alpha={false}
                stroke={false}
                width
                weight
                italic
                textColor="#ffffff"
                strokeColor="#5227FF"
                minFontSize={36}
              />
            </div>

            <div className="mt-0 overflow-visible rounded-[22px] bg-[#ffffff] p-2 md:mt-10 md:p-4">
              <div className="relative mx-auto mb-0 h-[320px] w-full max-w-[980px] md:mb-0 md:-mt-45 md:h-[460px]">
                <Image
                  src="/logo/illustration.webp"
                  alt="Decor team"
                  fill
                  sizes="(max-width: 768px) 100vw, 980px"
                  className="object-contain object-center"
                />
              </div>
            </div>

            <div className="mt-10 grid gap-8 border-t border-[#ffffff] pt-8 font-sans md:grid-cols-3">
              <div>
                <h3 className="text-3xl leading-none uppercase text-[#ffffff] font-bold">
                  Explore
                </h3>
                <ul className="mt-4 space-y-2 text-sm uppercase tracking-[0.06em] text-[#ffffff]">
                  {exploreLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-3xl leading-none uppercase text-[#ffffff] font-bold">
                  Follow
                </h3>
                <ul className="mt-4 space-y-2 text-sm uppercase tracking-[0.06em] text-[#ffffff]">
                  {followLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.href.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                        className="transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-3xl leading-none uppercase text-[#ffffff] font-bold">
                  Contact
                </h3>
                <p className="mt-4 text-sm uppercase tracking-[0.06em] text-[#ffffff]/85">
                  beastyeventsdecor@gmail.com
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.06em] text-[#ffffff]/85">
                  631-532-9042
                </p>
              </div>
            </div>

            <div className="mt-10 flex pb-0 flex-wrap items-center justify-between gap-3 border-t border-[#ffffff]/25 pt-5 font-sans text-sm text-[#ffffff]">
              <p>© 2025 Dora’s Designs, LLC™ All Rights Reserved.</p>
              <p>Site by OZE DEVS</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
