'use client'

import { ArrowUpRight, Code2, Sparkles } from 'lucide-react'

type TArrivalHeaderProps = {
  title: string
  subtitle: string
  ctaPrimary: string
  ctaSecondary: string
}

export function ArrivalHeader(props: TArrivalHeaderProps) {
  const { ctaPrimary, ctaSecondary, subtitle, title } = props

  return (
    <div className="relative z-20 mx-auto mb-10 max-w-3xl space-y-3 text-center sm:mb-16 sm:space-y-6">
      <div className="inline-flex max-w-[92vw] items-center gap-1.5 truncate rounded-full border border-emerald-500/30 bg-emerald-950/70 px-3 py-1 font-mono text-[10px] tracking-wider text-emerald-300 shadow-lg sm:gap-2 sm:px-4 sm:py-1.5 sm:text-xs">
        <Sparkles className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
        <span className="truncate">PHASE 03 // DESTINATION DOCKING</span>
      </div>

      <h2 className="bg-linear-to-r from-white via-cyan-100 to-indigo-300 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
        {title}
      </h2>

      <p className="px-1 text-xs leading-relaxed text-slate-300 sm:px-0 sm:text-base md:text-lg">
        {subtitle}
      </p>

      {/* Primary CTAs */}
      <div className="flex w-full flex-col items-center justify-center gap-2.5 px-4 pt-2 sm:w-auto sm:flex-row sm:gap-4 sm:px-0 sm:pt-4">
        <a
          href="#terminal"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-cyan-500 to-indigo-600 px-6 py-2.5 text-xs font-bold tracking-wide text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40 active:scale-95 sm:w-auto sm:px-8 sm:py-3.5 sm:text-base"
        >
          <span>{ctaPrimary}</span>
          <ArrowUpRight className="h-4 w-4" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/90 px-6 py-2.5 text-xs font-medium tracking-wide text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800 sm:w-auto sm:px-8 sm:py-3.5 sm:text-base"
        >
          <Code2 className="h-4 w-4" />
          <span>{ctaSecondary}</span>
        </a>
      </div>
    </div>
  )
}
