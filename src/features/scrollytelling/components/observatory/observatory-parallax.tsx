'use client'

import { useObservatoryParallax } from '../../hooks/use-observatory-parallax'
import {
  ObservatoryCardItem,
  TObservatoryDiscovery,
} from './observatory-card-item'
import { Sparkles } from 'lucide-react'

// ----- TYPES -----
type TObservatoryParallaxProps = {
  discoveries: TObservatoryDiscovery[]
}

export function ObservatoryParallax({
  discoveries,
}: TObservatoryParallaxProps) {
  const { containerRef, cardsRef } = useObservatoryParallax()

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden px-4 py-16 sm:py-24 md:px-6 md:py-36"
    >
      {/* Background Cosmic Atmosphere */}
      <div className="pointer-events-none absolute top-1/3 right-1/4 z-0 h-96 w-96 rounded-full bg-radial from-purple-600/15 via-cyan-500/10 to-transparent blur-3xl" />

      {/* Main Container */}
      <div className="relative z-20 mx-auto max-w-5xl space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl space-y-3 text-center sm:space-y-4">
          <span className="inline-flex max-w-full items-center gap-1.5 truncate rounded-full border border-purple-500/40 bg-slate-900/90 px-3 py-1 font-mono text-[10px] tracking-wider text-purple-300 shadow-lg backdrop-blur-md sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-xs">
            <Sparkles className="animate-spin-slow h-3.5 w-3.5 shrink-0 text-purple-400" />
            <span className="truncate">
              PHASE 05 // QUANTUM OBSERVATORY ARCHIVE
            </span>
          </span>
          <h2 className="bg-linear-to-r from-white via-purple-100 to-cyan-300 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            Deep Void Discoveries
          </h2>
          <p className="px-1 text-xs leading-relaxed text-slate-300 sm:px-0 sm:text-base md:text-lg">
            Explore verified spectral telemetry cataloged by the Station-OS
            Quantum Sensor Array. Scroll to inspect deep space anomalies,
            exoplanet candidates, and gravitational lensing phenomena.
          </p>
        </div>

        {/* Discovery Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {discoveries.map((item, index) => (
            <ObservatoryCardItem
              key={item.id}
              item={item}
              index={index}
              setCardRef={(el) => {
                cardsRef.current[index] = el
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
