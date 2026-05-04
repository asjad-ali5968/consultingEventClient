"use client";

import type { ReactNode } from "react";
import { useLoaderGate } from "@/_components/LoaderGateProvider";

type HomeVisibilityGateProps = {
  children: ReactNode;
};

export default function HomeVisibilityGate({
  children,
}: HomeVisibilityGateProps) {
  const { contentVisible } = useLoaderGate();

  return (
    <div
      className={
        contentVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }
    >
      {children}
    </div>
  );
}
