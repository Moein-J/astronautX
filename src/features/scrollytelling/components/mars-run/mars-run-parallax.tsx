'use client'

import { useMarsRunParallax } from '../../hooks/use-mars-run-parallax'
import { MarsPlanetSphere } from './mars-planet-sphere'
import { MarsRunnerRig } from './mars-runner-rig'
import { MarsSurfaceMarkers } from './mars-surface-markers'
import { Sparkles, Flame } from 'lucide-react'

export function MarsRunParallax() {
  const {
    containerRef,
    marsPlanetRef,
    astroOrbitRef,
    astroRunnerRef,
    surfaceMarkersRef,
  } = useMarsRunParallax()

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-dvh w-full flex-col items-center justify-between overflow-hidden bg-linear-to-b from-transparent via-red-950/20 to-transparent px-4 py-10 md:px-6 md:py-16"
    >
      {/* Top Header Badge Spacer */}
      <div className="h-2 md:h-6" />

      {/* Section Header */}
      <div className="relative z-20 my-auto flex w-full max-w-4xl flex-col items-center space-y-3 text-center sm:space-y-5">
        <div className="inline-flex max-w-[92vw] items-center gap-1.5 truncate rounded-full border border-orange-500/40 bg-slate-900/90 px-3 py-1 font-mono text-[10px] tracking-wider text-orange-300 shadow-lg shadow-orange-950/50 backdrop-blur-md sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-xs">
          <Sparkles className="animate-spin-slow h-3.5 w-3.5 shrink-0 text-orange-400" />
          <span className="truncate">PHASE 04 // MARS SURFACE TRAVERSE</span>
        </div>

        <h2 className="bg-linear-to-r from-white via-orange-100 to-red-400 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
          Running Around Mars
        </h2>

        <p className="max-w-2xl px-2 text-xs leading-relaxed font-normal text-slate-300 sm:text-base md:text-lg">
          Scroll down to initiate planetary orbit stride. Watch the astronaut
          physically walk 360° around the surface of Mars as real-time terrain
          telemetry unlocks.
        </p>
      </div>

      {/* Interactive Mars Treadmill & Orbit Runner Rig */}
      <div className="relative z-10 my-6 flex w-full max-w-4xl items-center justify-center sm:my-10">
        <MarsRunnerRig
          astroOrbitRef={astroOrbitRef}
          astroRunnerRef={astroRunnerRef}
        />
        <MarsPlanetSphere marsPlanetRef={marsPlanetRef} />
        <MarsSurfaceMarkers surfaceMarkersRef={surfaceMarkersRef} />
      </div>

      {/* Footer Indicator */}
      <div className="relative z-20 mb-1 flex items-center gap-2 font-mono text-[10px] tracking-widest text-slate-400 uppercase sm:text-xs">
        <Flame className="h-3.5 w-3.5 animate-pulse text-orange-400" />
        <span>ORBITAL WALK ACTIVE // 360° PLANETARY CIRCUMNAVIGATION</span>
      </div>
    </div>
  )
}
