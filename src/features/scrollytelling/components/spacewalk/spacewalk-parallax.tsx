"use client";

import { useSpacewalkParallax } from "../../hooks/use-spacewalk-parallax";
import { SpacewalkEarthRim } from "./spacewalk-earth-rim";
import { SpacewalkTetherRig } from "./spacewalk-tether-rig";
import { SpacewalkHotspots } from "./spacewalk-hotspots";
import { Sparkles, Compass } from "lucide-react";

export function SpacewalkParallax() {
  const {
    containerRef,
    evaAstroRef,
    earthRimRef,
    tetherPathRef,
    evaHotspotsRef,
  } = useSpacewalkParallax();

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-dvh flex flex-col items-center justify-between py-10 md:py-16 px-4 md:px-6 overflow-hidden bg-linear-to-b from-slate-950 via-cyan-950/20 to-slate-950"
    >
      {/* Background Glowing Earth Atmosphere Horizon */}
      <SpacewalkEarthRim earthRimRef={earthRimRef} />

      {/* Top Header Badge Spacer */}
      <div className="h-2 md:h-6" />

      {/* Section Header */}
      <div className="relative z-20 max-w-4xl w-full text-center flex flex-col items-center space-y-3 sm:space-y-5 my-auto">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 backdrop-blur-md text-cyan-300 text-[10px] sm:text-xs font-mono tracking-wider shadow-lg shadow-cyan-950/50 max-w-[92vw] truncate">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow shrink-0" />
          <span className="truncate">
            PHASE 04 // EXTRAVEHICULAR ACTIVITY (EVA)
          </span>
        </div>

        <h2 className="text-2xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-100 to-indigo-300">
          Untethered Spacewalk
        </h2>

        <p className="max-w-2xl text-xs sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed px-2">
          Step outside the airlock module. Experience zero-gravity tethered
          maneuvering, live suit oxygen diagnostics, and exterior station solar
          grid calibration.
        </p>
      </div>

      {/* Spacewalk Rig & Telemetry Hotspots */}
      <div className="relative z-10 my-3 md:my-6 flex items-center justify-center w-full max-w-4xl">
        <SpacewalkTetherRig
          evaAstroRef={evaAstroRef}
          tetherPathRef={tetherPathRef}
        />
        <SpacewalkHotspots evaHotspotsRef={evaHotspotsRef} />
      </div>

      {/* Footer Indicator */}
      <div className="relative z-20 flex items-center gap-2 text-slate-400 font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-1">
        <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
        <span>EVA MANEUVERING ACTIVE</span>
      </div>
    </div>
  );
}
