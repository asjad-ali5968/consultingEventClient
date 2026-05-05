"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  {
    label: "Event Decor Pakages",
    href: "#",
    children: [
      { label: "Balloon Menu", href: "#" },
      { label: "Personalized Add-Ons", href: "#" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Polices & guidelines", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const pathname = usePathname();
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
      if (window.innerWidth >= 1024) {
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
      <nav className="mx-auto flex h-20 w-full max-w-[1500px] items-center justify-between ">
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

        <ul className="hidden items-center gap-10 text-[17px] text-white lg:flex">
          {navItems.map((item) => (
            <li
              key={item.label}
              className={item.children ? "group relative" : ""}
            >
              <Link
                href={item.href}
                className={`inline-flex items-center gap-1 font-serif text-[16px] font-normal transition-colors hover:text-zinc-300 ${
                  pathname === item.href ? "text-[#a9bd9eee]" : "text-white"
                }`}
              >
                {item.label}
                {item.children && (
                  <span className="text-xs">
                    <ChevronDown className="h-5 w-5 mt-1" />
                  </span>
                )}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full z-50 pt-5 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <ul className="w-56 bg-white py-4 text-black shadow-lg">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className={`block px-6 py-3 text-[16px] leading-none transition-colors hover:bg-zinc-100 ${
                            pathname === child.href
                              ? "text-green-600"
                              : "text-black"
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center text-white lg:hidden"
        >
          <span className="text-2xl leading-none">
            {isMenuOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-white/15 bg-black/95 px-6 py-5 lg:hidden">
          <ul className="flex flex-col gap-4 text-base text-white">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block font-serif font-normal transition-colors hover:text-zinc-300 ${
                    pathname === item.href ? "text-green-500" : "text-white"
                  }`}
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
