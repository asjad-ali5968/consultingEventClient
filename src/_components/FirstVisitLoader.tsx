"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { LOADER_SESSION_KEY, useLoaderGate } from "./LoaderGateProvider";

const SPLIT_DURATION_MS = 700;
const LOADER_BG = "#5c4033";

export default function FirstVisitLoader() {
  const { markLoaderComplete } = useLoaderGate();

  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.sessionStorage.getItem(LOADER_SESSION_KEY) !== "1";
  });

  const [logoReady, setLogoReady] = useState(false);
  const [isSplitting, setIsSplitting] = useState(false);
  const previousOverflow = useRef("");
  const splitStartedRef = useRef(false);
  const completionRef = useRef(false);

  useEffect(() => {
    if (!isVisible || !logoReady || splitStartedRef.current) {
      return;
    }
    splitStartedRef.current = true;
    setIsSplitting(true);
  }, [isVisible, logoReady]);

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

  function handleSplitPanelTransitionEnd(
    e: React.TransitionEvent<HTMLDivElement>,
  ) {
    if (e.propertyName !== "transform") {
      return;
    }
    if (!isSplitting || completionRef.current) {
      return;
    }
    completionRef.current = true;
    setIsVisible(false);
    markLoaderComplete();
  }

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
        onTransitionEnd={handleSplitPanelTransitionEnd}
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
          unoptimized
          className="h-auto w-[220px] max-w-full sm:w-[320px] md:w-[420px]"
          onLoadingComplete={() => setLogoReady(true)}
          onError={() => setLogoReady(true)}
        />
      </div>
    </div>
  );
}
