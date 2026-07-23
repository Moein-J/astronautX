'use client'

import { RefObject } from 'react'

type TJourneyTrajectoryBeamProps = {
  progressBeamRef: RefObject<HTMLDivElement | null>
}

export function JourneyTrajectoryBeam({
  progressBeamRef,
}: TJourneyTrajectoryBeamProps) {
  return (
    <div className="absolute top-0 bottom-0 left-1/2 hidden w-0.5 -translate-x-1/2 bg-slate-800 md:block">
      <div
        ref={progressBeamRef}
        className="h-full w-full origin-top scale-y-0 transform bg-linear-to-b from-cyan-400 via-indigo-500 to-purple-500 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
      />
    </div>
  )
}
