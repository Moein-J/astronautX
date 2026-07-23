"use client";

import React, { RefObject } from "react";
import { AstronautRig } from "../hero/astronaut-rig";

type TMarsRunnerRigProps = {
  astroOrbitRef: RefObject<HTMLDivElement | null>;
  astroRunnerRef: RefObject<HTMLDivElement | null>;
};

export function MarsRunnerRig({
  astroOrbitRef,
  astroRunnerRef,
}: TMarsRunnerRigProps) {
  return (
    /* Central Orbit Ring Container matched dynamically to Mars center and height */
    <div
      ref={astroOrbitRef}
      className="absolute inset-0 m-auto w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] max-h-[38vh] max-w-[38vh] rounded-full pointer-events-none z-30"
    >
      {/* Astronaut positioned right on top of the circular rim of Mars */}
      <div
        ref={astroRunnerRef}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[80%] flex flex-col items-center origin-bottom"
      >
        <div className="transform -rotate-6 scale-35 sm:scale-45 md:scale-55 lg:scale-65">
          <AstronautRig scale={0.4} />
        </div>

        {/* Surface Contact Dust Sparkles */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 opacity-90 blur-xs animate-ping" />
          <span className="w-1 h-1 rounded-full bg-amber-300 opacity-80 blur-xs animate-pulse" />
        </div>
      </div>
    </div>
  );
}
