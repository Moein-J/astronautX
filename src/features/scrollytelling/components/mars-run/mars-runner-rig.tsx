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
    /* Central Orbit Ring Container matched precisely to Mars center */
    <div
      ref={astroOrbitRef}
      className="absolute inset-0 m-auto w-[300px] sm:w-[420px] md:w-[540px] h-[300px] sm:h-[420px] md:h-[540px] rounded-full pointer-events-none z-30"
    >
      {/* Astronaut positioned right on top of the circular rim of Mars */}
      <div
        ref={astroRunnerRef}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[82%] flex flex-col items-center origin-bottom"
      >
        <div className="transform -rotate-6 scale-50 sm:scale-60 md:scale-70">
          <AstronautRig scale={0.45} />
        </div>

        {/* Surface Contact Dust Sparkles */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 opacity-90 blur-xs animate-ping" />
          <span className="w-1 h-1 rounded-full bg-amber-300 opacity-80 blur-xs animate-pulse" />
        </div>
      </div>
    </div>
  );
}
