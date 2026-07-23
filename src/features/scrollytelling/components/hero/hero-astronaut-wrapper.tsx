'use client'

import { RefObject } from 'react'
import { AstronautRig } from './astronaut-rig'

type THeroAstronautWrapperProps = {
  astroWrapperRef: RefObject<HTMLDivElement | null>
}

export function HeroAstronautWrapper({
  astroWrapperRef,
}: THeroAstronautWrapperProps) {
  return (
    <div
      ref={astroWrapperRef}
      className="pointer-events-none relative z-10 flex w-full scale-90 items-center justify-center md:scale-110"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div
        className="absolute inset-0 scale-75 rounded-full bg-cyan-400/20 blur-2xl"
        aria-hidden="true"
      />
      <AstronautRig scale={1} />
    </div>
  )
}
