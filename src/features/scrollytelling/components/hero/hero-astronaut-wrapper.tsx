"use client";

import React, { RefObject } from "react";
import { AstronautRig } from "./astronaut-rig";

type THeroAstronautWrapperProps = {
  astroWrapperRef: RefObject<HTMLDivElement | null>;
};

export function HeroAstronautWrapper({
  astroWrapperRef,
}: THeroAstronautWrapperProps) {
  return (
    <div
      ref={astroWrapperRef}
      className="relative z-10 pointer-events-none scale-90 md:scale-110 flex items-center justify-center w-full"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl scale-75"
        aria-hidden="true"
      />
      <AstronautRig scale={1} />
    </div>
  );
}
