"use client";

import React, { RefObject } from "react";
import { ChevronDown } from "lucide-react";

type THeroScrollHintProps = {
  scrollHintRef: RefObject<HTMLDivElement | null>;
};

export function HeroScrollHint({ scrollHintRef }: THeroScrollHintProps) {
  return (
    <div
      ref={scrollHintRef}
      className="relative z-20 flex flex-col items-center justify-center text-center gap-1 text-slate-400 font-mono text-[11px] md:text-xs tracking-widest uppercase animate-bounce mb-1"
    >
      <span>SCROLL TO LAUNCH</span>
      <ChevronDown className="w-4 h-4 text-cyan-400" />
    </div>
  );
}
