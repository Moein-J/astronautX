"use client";

import React from "react";
import { useObservatoryParallax } from "../../hooks/use-observatory-parallax";
import {
  ObservatoryCardItem,
  TObservatoryDiscovery,
} from "./observatory-card-item";
import { Sparkles } from "lucide-react";

type TObservatoryParallaxProps = {
  discoveries: TObservatoryDiscovery[];
};

export function ObservatoryParallax({
  discoveries,
}: TObservatoryParallaxProps) {
  const { containerRef, cardsRef } = useObservatoryParallax();

  return (
    <div
      ref={containerRef}
      className="relative w-full py-16 sm:py-24 md:py-36 px-4 md:px-6 overflow-hidden"
    >
      {/* Background Cosmic Atmosphere */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-radial from-purple-600/15 via-cyan-500/10 to-transparent blur-3xl pointer-events-none z-0" />

      {/* Main Container */}
      <div className="relative z-20 max-w-5xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/90 border border-purple-500/40 backdrop-blur-md text-purple-300 text-[10px] sm:text-xs font-mono tracking-wider shadow-lg max-w-full truncate">
            <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin-slow shrink-0" />
            <span className="truncate">
              PHASE 05 // QUANTUM OBSERVATORY ARCHIVE
            </span>
          </span>
          <h2 className="text-2xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-white via-purple-100 to-cyan-300">
            Deep Void Discoveries
          </h2>
          <p className="text-slate-300 text-xs sm:text-base md:text-lg leading-relaxed px-1 sm:px-0">
            Explore verified spectral telemetry cataloged by the Station-OS
            Quantum Sensor Array. Scroll to inspect deep space anomalies,
            exoplanet candidates, and gravitational lensing phenomena.
          </p>
        </div>

        {/* Discovery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {discoveries.map((item, index) => (
            <ObservatoryCardItem
              key={item.id}
              item={item}
              index={index}
              setCardRef={(el) => {
                cardsRef.current[index] = el;
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
