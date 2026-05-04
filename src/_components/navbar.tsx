"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        isScrolled ? "bg-black" : "bg-transparent"
      } overflow-x-clip`}
      style={{ fontFamily: "var(--font-playfair-display), serif" }}
    >
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between ">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo/doraDesign.webp"
            alt="Beasty Events logo"
            width={150}
            height={150}
            priority
            className="mt-3 h-auto w-[115px] object-cover brightness-[100] sm:w-[130px] md:w-[150px] invert-100"
          />
        </Link>

        <ul className="hidden items-center gap-14 text-[17px] text-white md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="font-serif font-normal transition-colors hover:text-zinc-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center text-white md:hidden"
        >
          <span className="text-2xl leading-none">
            {isMenuOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-white/15 bg-black/95 px-6 py-5 md:hidden">
          <ul className="flex flex-col gap-4 text-base text-white">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block font-serif font-normal transition-colors hover:text-zinc-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
