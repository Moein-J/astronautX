'use client'

import React, { RefObject } from 'react'
import { AstronautRig } from '../hero/astronaut-rig'

type TMarsRunnerRigProps = {
  astroOrbitRef: RefObject<HTMLDivElement | null>
  astroRunnerRef: RefObject<HTMLDivElement | null>
}

export function MarsRunnerRig({
  astroOrbitRef,
  astroRunnerRef,
}: TMarsRunnerRigProps) {
  return (
    /* Central Orbit Ring Container matched dynamically to Mars center and height */
    <div
      ref={astroOrbitRef}
      className="pointer-events-none absolute inset-0 z-30 m-auto h-48 max-h-[38vh] w-48 max-w-[38vh] rounded-full sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-105 lg:w-105"
    >
      {/* Astronaut positioned right on top of the circular rim of Mars */}
      <div
        ref={astroRunnerRef}
        className="absolute top-0 left-1/2 flex origin-bottom -translate-x-1/2 translate-y-[-80%] flex-col items-center"
      >
        <div className="scale-35 -rotate-6 transform sm:scale-45 md:scale-55 lg:scale-65">
          <AstronautRig scale={0.4} />
        </div>

        {/* Surface Contact Dust Sparkles */}
        <div className="absolute -bottom-1 left-1/2 flex -translate-x-1/2 items-center justify-center gap-1">
          <span className="h-1.5 w-1.5 animate-ping rounded-full bg-orange-400 opacity-90 blur-xs" />
          <span className="h-1 w-1 animate-pulse rounded-full bg-amber-300 opacity-80 blur-xs" />
        </div>
      </div>
    </div>
  )
}
