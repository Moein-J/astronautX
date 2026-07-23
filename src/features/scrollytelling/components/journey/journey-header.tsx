'use client'

import { Sparkles } from 'lucide-react'

export function JourneyHeader() {
  return (
    <div className="mx-auto max-w-3xl space-y-2.5 text-center sm:space-y-4">
      <span className="inline-flex max-w-full items-center gap-1.5 truncate rounded-full border border-cyan-500/40 bg-slate-900/90 px-3 py-1 font-mono text-[10px] tracking-wider text-cyan-300 shadow-lg shadow-cyan-950/50 backdrop-blur-md sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-xs">
        <Sparkles className="animate-spin-slow h-3.5 w-3.5 shrink-0 text-cyan-400" />
        <span className="truncate">PHASE 02 // DEEP PARALLAX TRAJECTORY</span>
      </span>
      <h2 className="bg-linear-to-r from-white via-cyan-100 to-indigo-300 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
        Navigating the Deep Void
      </h2>
      <p className="px-1 text-xs leading-relaxed text-slate-300 sm:px-0 sm:text-base md:text-lg">
        As altitude increases, environment density shifts. Scroll through key
        mission milestones logged during trans-orbital transit.
      </p>
    </div>
  )
}
