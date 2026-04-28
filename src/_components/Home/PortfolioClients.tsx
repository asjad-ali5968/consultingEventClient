"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import type { PortfolioClientsData } from "@/types/sharedSections";

type PortfolioClientsProps = {
  data: PortfolioClientsData;
};

export default function PortfolioClients({ data }: PortfolioClientsProps) {
  const [step, setStep] = useState(0);
  const loopedLogos = useMemo(
    () => [...data.clientLogos, ...data.clientLogos],
    [data.clientLogos],
  );
  const slidePercent = 100 / data.clientLogos.length;

  useEffect(() => {
    let timeoutId: number;

    const scheduleNextMove = () => {
      timeoutId = window.setTimeout(() => {
        setStep((prev) => (prev + 1) % data.clientLogos.length);
        scheduleNextMove();
      }, data.moveIntervalMs);
    };

    scheduleNextMove();

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <section className="relative z-20 overflow-hidden bg-[#7f8880] py-4 md:py-5">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="overflow-hidden">
          <ul
            className="flex items-center transition-transform duration-700 ease-out will-change-transform"
            style={{ transform: `translate3d(-${step * slidePercent}%, 0, 0)` }}
          >
            {loopedLogos.map((logo, index) => (
              <li
                key={`${logo}-${index}`}
                className="flex shrink-0 items-center justify-center px-3 py-2 md:px-4"
                style={{ width: `${100 / data.clientLogos.length}%` }}
              >
                <Image
                  src={logo}
                  alt="Client logo"
                  width={180}
                  height={90}
                  className="h-auto w-auto max-h-[64px] object-contain opacity-85"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>{`
        .marquee-track {
          animation: marquee 18s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
