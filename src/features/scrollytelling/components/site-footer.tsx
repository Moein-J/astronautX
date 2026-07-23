'use client'

import { ArrowUp, Orbit } from 'lucide-react'
import { useLenisScroll } from '@/shared/components/providers/smooth-scroll-provider'

type TSiteFooterProps = {
  className?: string
}

export function SiteFooter({ className = '' }: TSiteFooterProps) {
  const { lenisRef } = useLenisScroll()

  const handleScrollTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer
      className={`relative z-20 w-full border-t border-white/10 bg-slate-950 font-sans text-slate-400 ${className}`}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 py-12 sm:py-16 md:flex-row">
        {/* Brand info */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center gap-2.5 text-lg font-bold tracking-wider text-white md:justify-start">
            <Orbit className="animate-spin-slow h-5 w-5 text-cyan-400" />
            <span>ASTRONAUT IN SPACE</span>
          </div>
          <p className="max-w-sm text-xs text-slate-400">powered by Moein j.</p>
        </div>

        {/* Navigation & Back to top */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs">
          <a href="#liftoff" className="transition-colors hover:text-cyan-400">
            [1] LIFTOFF
          </a>
          <a href="#journey" className="transition-colors hover:text-cyan-400">
            [2] JOURNEY
          </a>
          <a href="#arrival" className="transition-colors hover:text-cyan-400">
            [3] ARRIVAL
          </a>

          <button
            onClick={handleScrollTop}
            aria-label="Scroll back to top of page"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-cyan-300 transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800"
          >
            <span>TOP</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Copyright Sub-bar */}
      <div className="border-t border-white/5 bg-slate-950/80 px-6 py-4 text-center font-mono text-[11px] text-slate-500">
        <span>© {new Date().getFullYear()} ASTRONAUT Story. Moein J</span>
      </div>
    </footer>
  )
}
