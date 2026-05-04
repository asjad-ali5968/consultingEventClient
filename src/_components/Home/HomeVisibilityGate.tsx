"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

const STORAGE_KEY = "first-visit-loader-shown";
const LOADER_TOTAL_MS = 1600;

type HomeVisibilityGateProps = {
  children: ReactNode;
};

export default function HomeVisibilityGate({ children }: HomeVisibilityGateProps) {
  const [isReady, setIsReady] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.sessionStorage.getItem(STORAGE_KEY) === "1";
  });

  useEffect(() => {
    const alreadyShown = window.sessionStorage.getItem(STORAGE_KEY) === "1";
    if (alreadyShown) {
      setIsReady(true);
      return;
    }

    const timer = window.setTimeout(() => {
      setIsReady(true);
    }, LOADER_TOTAL_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className={isReady ? "opacity-100" : "pointer-events-none opacity-0"}>
      {children}
    </div>
  );
}
