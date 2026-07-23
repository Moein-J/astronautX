'use client'

import { ExternalLink, Sparkles } from 'lucide-react'

export type TObservatoryDiscovery = {
  id: string
  catalogId: string
  title: string
  category: string
  description: string
  distance: string
  magnitude: string
  spectralClass: string
  gradient: string
  glowColor: string
}

type TObservatoryCardItemProps = {
  item: TObservatoryDiscovery
  index: number
  setCardRef: (el: HTMLDivElement | null) => void
}

export function ObservatoryCardItem(props: TObservatoryCardItemProps) {
  const { item, setCardRef } = props
  return (
    <div
      ref={setCardRef}
      className={`group relative rounded-2xl border border-white/10 bg-slate-900/60 p-6 opacity-0 backdrop-blur-2xl hover:border-cyan-400/60 hover:shadow-2xl sm:p-7 ${item.glowColor} flex flex-col justify-between overflow-hidden`}
    >
      {/* Dynamic Ambient Background Glow */}
      <div
        className={`absolute -top-12 -right-12 h-44 w-44 rounded-full bg-linear-to-br ${item.gradient} pointer-events-none opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-40`}
      />

      <div>
        {/* Card Top Metadata Header */}
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-slate-950/80 px-2.5 py-1 font-mono text-[10px] tracking-wider text-cyan-300">
            <Sparkles className="h-3 w-3 text-cyan-400" />
            {item.catalogId}
          </span>
          <span className="font-mono text-[10px] tracking-wider text-slate-400">
            {item.category}
          </span>
        </div>

        {/* Visual Abstract Cosmic Canvas/Graphic Box */}
        <div className="relative mb-5 flex h-36 w-full items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-slate-950/90 transition-colors group-hover:border-cyan-500/30 sm:h-44">
          <div
            className={`h-28 w-28 rounded-full bg-radial sm:h-36 sm:w-36 ${item.gradient} animate-pulse opacity-80 blur-xl`}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#020617_80%)]" />
          <div className="relative z-10 space-y-1 text-center">
            <span className="block font-mono text-xs font-bold tracking-widest text-white drop-shadow-md">
              {item.distance}
            </span>
            <span className="block font-mono text-[9px] tracking-wider text-cyan-400">
              {item.spectralClass}
            </span>
          </div>
        </div>

        {/* Title & Narrative Description */}
        <div className="mb-6 space-y-2">
          <h3 className="text-lg font-bold text-white transition-colors group-hover:text-cyan-300 sm:text-xl">
            {item.title}
          </h3>
          <p className="text-xs leading-relaxed font-normal text-slate-300 sm:text-sm">
            {item.description}
          </p>
        </div>
      </div>

      {/* Card Footer Telemetry Grid */}
      <div className="flex items-center justify-between border-t border-white/5 pt-4 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-slate-400">
            MAG:{' '}
            <span className="font-bold text-cyan-300">{item.magnitude}</span>
          </span>
        </div>

        <button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-[11px] font-medium text-slate-300 transition-all hover:border-cyan-500/40 hover:bg-cyan-500/20 hover:text-cyan-300">
          <span>SPECTRAL DATA</span>
          <ExternalLink className="h-3 w-3" />
        </button>
      </div>
    </div>
  )
}
