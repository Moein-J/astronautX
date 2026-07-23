'use client'

import React, { RefObject } from 'react'

type TSpacewalkEarthRimProps = {
  earthRimRef: RefObject<HTMLDivElement | null>
}

export function SpacewalkEarthRim({ earthRimRef }: TSpacewalkEarthRimProps) {
  return (
    <div
      ref={earthRimRef}
      className="pointer-events-none absolute -bottom-32 left-1/2 z-0 h-100 w-[140vw] max-w-7xl -translate-x-1/2 rounded-[100%] border-t-2 border-cyan-400/50 bg-linear-to-t from-cyan-950/40 via-blue-900/20 to-transparent blur-sm"
    >
      <div className="absolute inset-x-0 top-0 h-16 rounded-t-full bg-cyan-400/20 blur-xl" />
    </div>
  )
}
