"use client";

import { useArrivalParallax } from "../../hooks/use-arrival-parallax";
import { ArrivalStationSvg } from "./arrival-station-svg";
import { ArrivalHeader } from "./arrival-header";
import { CosmosDashboard } from "../cosmos-dashboard";

type TArrivalParallaxProps = {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export function ArrivalParallax({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
}: TArrivalParallaxProps) {
  const { containerRef, stationRef } = useArrivalParallax();

  return (
    <div
      ref={containerRef}
      className="relative w-full py-12 sm:py-24 md:py-36 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Destination Station SVG Visual */}
      <ArrivalStationSvg stationRef={stationRef} />

      {/* Title & Copy */}
      <ArrivalHeader
        title={title}
        subtitle={subtitle}
        ctaPrimary={ctaPrimary}
        ctaSecondary={ctaSecondary}
      />

      {/* Interactive Cosmos Dashboard Terminal */}
      <div id="terminal" className="relative z-20 pt-2 sm:pt-8">
        <CosmosDashboard />
      </div>
    </div>
  );
}
