"use client";

import { RefObject } from "react";
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
      className="pointer-events-none relative z-10 flex w-full max-h-[38vh] items-center justify-center scale-75 sm:scale-85 md:scale-95 lg:scale-105 will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      <AstronautRig scale={1} />
    </div>
  );
}
