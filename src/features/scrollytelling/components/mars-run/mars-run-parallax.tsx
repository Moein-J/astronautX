"use client";

import React from "react";
import { useMarsRunParallax } from "../../hooks/use-mars-run-parallax";
import { MarsPlanetSphere } from "./mars-planet-sphere";
import { MarsRunnerRig } from "./mars-runner-rig";
import { MarsSurfaceMarkers } from "./mars-surface-markers";
import { Sparkles, Flame } from "lucide-react";

export function MarsRunParallax() {
  const {
    containerRef,
    marsPlanetRef,
    astroOrbitRef,
    astroRunnerRef,
    surfaceMarkersRef,
  } = useMarsRunParallax();

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-dvh flex flex-col items-center justify-between py-10 md:py-16 px-4 md:px-6 overflow-hidden bg-linear-to-b from-slate-950 via-red-950/20 to-slate-950"
    >
      {/* Top Header Badge Spacer */}
      <div className="h-2 md:h-6" />

      {/* Section Header */}
      <div className="relative z-20 max-w-4xl w-full text-center flex flex-col items-center space-y-3 sm:space-y-5 my-auto">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/90 border border-orange-500/40 backdrop-blur-md text-orange-300 text-[10px] sm:text-xs font-mono tracking-wider shadow-lg shadow-orange-950/50 max-w-[92vw] truncate">
          <Sparkles className="w-3.5 h-3.5 text-orange-400 animate-spin-slow shrink-0" />
          <span className="truncate">PHASE 04 // MARS SURFACE TRAVERSE</span>
        </div>

        <h2 className="text-2xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-white via-orange-100 to-red-400">
          Running Around Mars
        </h2>

        <p className="max-w-2xl text-xs sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed px-2">
          Scroll down to initiate planetary orbit stride. Watch the astronaut physically walk 360° around the surface of Mars as real-time terrain telemetry unlocks.
        </p>
      </div>

      {/* Interactive Mars Treadmill & Orbit Runner Rig */}
      <div className="relative z-10 my-6 sm:my-10 flex items-center justify-center w-full max-w-4xl">
        <MarsRunnerRig
          astroOrbitRef={astroOrbitRef}
          astroRunnerRef={astroRunnerRef}
        />
        <MarsPlanetSphere marsPlanetRef={marsPlanetRef} />
        <MarsSurfaceMarkers surfaceMarkersRef={surfaceMarkersRef} />
      </div>

      {/* Footer Indicator */}
      <div className="relative z-20 flex items-center gap-2 text-slate-400 font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-1">
        <Flame className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
        <span>ORBITAL WALK ACTIVE // 360° PLANETARY CIRCUMNAVIGATION</span>
      </div>
    </div>
  );
}
