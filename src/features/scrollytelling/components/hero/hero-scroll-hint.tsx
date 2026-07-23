'use client'

import { RefObject } from 'react'
import { ChevronDown } from 'lucide-react'

type THeroScrollHintProps = {
  scrollHintRef: RefObject<HTMLDivElement | null>
}

export function HeroScrollHint({ scrollHintRef }: THeroScrollHintProps) {
  return (
    <div
      ref={scrollHintRef}
      className="relative z-20 mb-1 flex animate-bounce flex-col items-center justify-center gap-1 text-center font-mono text-[11px] tracking-widest text-slate-400 uppercase md:text-xs"
    >
      <span>SCROLL TO LAUNCH</span>
      <ChevronDown className="h-4 w-4 text-cyan-400" />
    </div>
  )
}
