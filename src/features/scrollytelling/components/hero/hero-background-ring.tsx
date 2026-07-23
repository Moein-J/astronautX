"use client";

import React, { RefObject } from "react";

type THeroBackgroundRingProps = {
  starRingRef: RefObject<HTMLDivElement | null>;
};

export function HeroBackgroundRing({ starRingRef }: THeroBackgroundRingProps) {
  return (
    <div
      ref={starRingRef}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 md:w-162.5 h-75 md:h-162.5 rounded-full border border-cyan-500/20 bg-radial from-cyan-500/15 via-purple-600/10 to-transparent blur-3xl pointer-events-none"
    />
  );
}
