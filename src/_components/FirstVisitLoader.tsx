"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const LOGO_HOLD_MS = 900;
const SPLIT_DURATION_MS = 700;
const STORAGE_KEY = "first-visit-loader-shown";
const LOADER_BG = "#5c4033";

export default function FirstVisitLoader() {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.sessionStorage.getItem(STORAGE_KEY) !== "1";
  });
  const [isSplitting, setIsSplitting] = useState(false);
  const previousOverflow = useRef<string>("");

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    window.sessionStorage.setItem(STORAGE_KEY, "1");

    const splitTimer = window.setTimeout(() => {
      setIsSplitting(true);
    }, LOGO_HOLD_MS);

    const hideTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, LOGO_HOLD_MS + SPLIT_DURATION_MS);

    return () => {
      window.clearTimeout(splitTimer);
      window.clearTimeout(hideTimer);
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow.current;
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-1000" aria-hidden>
      <div
        className="absolute inset-y-0 left-0 w-1/2 will-change-transform"
        style={{
          backgroundColor: LOADER_BG,
          transition: `transform ${SPLIT_DURATION_MS}ms ease-in-out`,
          transform: isSplitting ? "translateX(-100%)" : "translateX(0)",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-1/2 will-change-transform"
        style={{
          backgroundColor: LOADER_BG,
          transition: `transform ${SPLIT_DURATION_MS}ms ease-in-out`,
          transform: isSplitting ? "translateX(100%)" : "translateX(0)",
        }}
      />
      <div
        className="absolute inset-0 flex items-center justify-center px-6 will-change-opacity"
        style={{
          backgroundColor: LOADER_BG,
          transition: `opacity ${Math.min(500, SPLIT_DURATION_MS)}ms ease`,
          opacity: isSplitting ? 0 : 1,
        }}
      >
        <Image
          src="/logo/illustration.webp"
          alt="Dora's Designs logo"
          width={420}
          height={420}
          priority
          className="h-auto w-[220px] max-w-full sm:w-[320px] md:w-[420px]"
        />
      </div>
    </div>
  );
}
