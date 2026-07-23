'use client'

import { Shield, Zap, Compass, Radio, CheckCircle2 } from 'lucide-react'

// ----- TYPES -----
export type TNarrativeLog = {
  id: string
  logNumber: string
  title: string
  description: string
  metric: string
  metricLabel: string
  iconName: 'shield' | 'zap' | 'compass' | 'radio'
}

type TJourneyCardItemProps = {
  log: TNarrativeLog
  index: number
  setCardRef: (el: HTMLDivElement | null) => void
}

function renderLogIcon(iconName: TNarrativeLog['iconName']) {
  switch (iconName) {
    case 'shield':
      return <Shield className="h-4 w-4 text-cyan-400 sm:h-5 sm:w-5" />
    case 'zap':
      return <Zap className="h-4 w-4 text-purple-400 sm:h-5 sm:w-5" />
    case 'compass':
      return <Compass className="h-4 w-4 text-amber-400 sm:h-5 sm:w-5" />
    case 'radio':
      return <Radio className="h-4 w-4 text-emerald-400 sm:h-5 sm:w-5" />
  }
}

export function JourneyCardItem(props: TJourneyCardItemProps) {
  const { index, log, setCardRef } = props

  return (
    <div
      ref={setCardRef}
      className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/50 p-4 opacity-0 backdrop-blur-2xl transition-colors duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] sm:p-6 md:p-9"
    >
      {/* Ambient Card Corner Glow */}
      <div className="pointer-events-none absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-cyan-500/10 blur-xl transition-all duration-500 group-hover:bg-cyan-500/20 sm:h-28 sm:w-28 md:h-36 md:w-36" />

      {/* Card Top Header */}
      <div className="mb-4 flex items-center justify-between gap-3 sm:mb-6">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="rounded-xl border border-white/10 bg-slate-800/90 p-2 transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-500/40 sm:p-2.5 md:p-3">
            {renderLogIcon(log.iconName)}
          </div>
          <span className="font-mono text-[10px] tracking-wider text-cyan-400 sm:text-xs">
            {log.logNumber}
          </span>
        </div>
        <div className="text-right font-mono text-[10px] text-slate-400 sm:text-xs">
          <span className="text-xs font-bold text-cyan-300 sm:text-sm">
            {log.metric}
          </span>{' '}
          <span className="block text-[9px] text-slate-500 sm:text-[10px]">
            {log.metricLabel}
          </span>
        </div>
      </div>

      {/* Title & Description */}
      <div className="space-y-1.5 sm:space-y-2.5 md:space-y-3">
        <h3 className="text-base font-bold text-white transition-colors group-hover:text-cyan-300 sm:text-lg md:text-2xl">
          {log.title}
        </h3>
        <p className="text-xs leading-relaxed font-normal text-slate-300 sm:text-sm md:text-base">
          {log.description}
        </p>
      </div>

      {/* Card Footer Status */}
      <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3 font-mono text-[10px] text-slate-500 sm:mt-6 sm:pt-4 sm:text-xs md:mt-8">
        <span className="flex items-center gap-1.5 text-cyan-400/90">
          <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
          STATUS: VERIFIED
        </span>
        <span className="text-slate-400">ENTRY #{index + 101}</span>
      </div>
    </div>
  )
}
