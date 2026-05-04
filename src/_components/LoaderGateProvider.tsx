"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const LOADER_SESSION_KEY = "first-visit-loader-shown";

type LoaderGateContextValue = {
  contentVisible: boolean;
  markLoaderComplete: () => void;
};

const LoaderGateContext = createContext<LoaderGateContextValue | null>(null);

export function LoaderGateProvider({ children }: { children: ReactNode }) {
  const [contentVisible, setContentVisible] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.sessionStorage.getItem(LOADER_SESSION_KEY) === "1";
  });

  const markLoaderComplete = useCallback(() => {
    window.sessionStorage.setItem(LOADER_SESSION_KEY, "1");
    setContentVisible(true);
  }, []);

  const value = useMemo(
    () => ({ contentVisible, markLoaderComplete }),
    [contentVisible, markLoaderComplete],
  );

  return (
    <LoaderGateContext.Provider value={value}>
      {children}
    </LoaderGateContext.Provider>
  );
}

export function useLoaderGate() {
  const ctx = useContext(LoaderGateContext);
  if (!ctx) {
    throw new Error("useLoaderGate must be used within LoaderGateProvider");
  }
  return ctx;
}
