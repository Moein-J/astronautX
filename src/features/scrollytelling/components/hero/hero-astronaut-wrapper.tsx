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
      style={{ opacity: 0, transformStyle: "preserve-3d" }}
      className="pointer-events-none relative z-10 flex w-full max-h-[35vh] items-center justify-center will-change-transform"
    >
      <AstronautRig scale={0.75} />
    </div>
  );
}
