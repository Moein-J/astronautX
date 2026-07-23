"use client";

import React, { RefObject } from "react";
import { AstronautRig } from "../hero/astronaut-rig";

type TSpacewalkTetherRigProps = {
  evaAstroRef: RefObject<HTMLDivElement | null>;
  tetherPathRef: RefObject<SVGPathElement | null>;
};

export function SpacewalkTetherRig({
  evaAstroRef,
  tetherPathRef,
}: TSpacewalkTetherRigProps) {
  return (
    <div className="relative z-10 flex items-center justify-center w-full max-w-4xl my-4 sm:my-6">
      {/* Dynamic Umbilical Tether SVG Cable */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
        viewBox="0 0 800 400"
      >
        <path
          ref={tetherPathRef}
          d="M 50 200 C 200 350, 450 50, 750 200"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="3"
          strokeDasharray="8 6"
          className="opacity-75 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
        />
      </svg>

      {/* Floating Spacewalk Astronaut Rig */}
      <div
        ref={evaAstroRef}
        className="relative z-10 pointer-events-none scale-90 sm:scale-100 md:scale-110 flex items-center justify-center"
      >
        <AstronautRig scale={1} />
      </div>
    </div>
  );
}
