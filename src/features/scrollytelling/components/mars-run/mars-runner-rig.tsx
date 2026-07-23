'use client'

import { RefObject } from 'react'
import { AstronautRig } from '../hero/astronaut-rig'

type TMarsRunnerRigProps = {
  astroOrbitRef: RefObject<HTMLDivElement | null>
  astroRunnerRef: RefObject<HTMLDivElement | null>
}

export function MarsRunnerRig(props: TMarsRunnerRigProps) {
  const { astroOrbitRef, astroRunnerRef } = props
  return (
    /* Central Orbit Ring Container matched precisely to Mars center */
    <div
      ref={astroOrbitRef}
      className="pointer-events-none absolute inset-0 z-30 m-auto h-75 w-75 rounded-full sm:h-105 sm:w-105 md:h-135 md:w-135"
    >
      {/* Astronaut positioned right on top of the circular rim of Mars */}
      <div
        ref={astroRunnerRef}
        className="absolute top-0 left-1/2 flex origin-bottom -translate-x-1/2 translate-y-[-82%] flex-col items-center"
      >
        <div className="scale-50 -rotate-6 transform sm:scale-60 md:scale-70">
          <AstronautRig scale={0.45} />
        </div>

        {/* Surface Contact Dust Sparkles */}
        <div className="absolute -bottom-1 left-1/2 flex -translate-x-1/2 items-center justify-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-ping rounded-full bg-orange-400 opacity-90 blur-xs" />
          <span className="h-1 w-1 animate-pulse rounded-full bg-amber-300 opacity-80 blur-xs" />
        </div>
      </div>
    </div>
  )
}
