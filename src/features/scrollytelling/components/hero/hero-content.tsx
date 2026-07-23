"use client";

import { RefObject } from "react";
import { Sparkles, Orbit } from "lucide-react";

// ----- TYPES -----
type THeroContentProps = {
  heroContentRef: RefObject<HTMLDivElement | null>;
  badgeText: string;
  title: string;
  subtitle: string;
  ctaText: string;
};

export function HeroContent(props: THeroContentProps) {
  const { badgeText, ctaText, heroContentRef, subtitle, title } = props;

  return (
    <div
      ref={heroContentRef}
      className="relative z-20 my-auto flex w-full max-w-4xl flex-col items-center space-y-2.5 text-center sm:space-y-4 md:space-y-5"
    >
      <div className="inline-flex max-w-[92vw] items-center gap-1.5 truncate rounded-full border border-cyan-500/40 bg-slate-900/90 px-3 py-1 font-mono text-[10px] tracking-wider text-cyan-300 shadow-lg shadow-cyan-950/50 backdrop-blur-md sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-xs">
        <Sparkles className="animate-spin-slow h-3 w-3 shrink-0 text-cyan-400 sm:h-3.5 sm:w-3.5" />
        <span className="truncate">{badgeText}</span>
      </div>

      <h1 className="bg-linear-to-r from-white via-cyan-100 to-indigo-300 bg-clip-text px-1 text-2xl leading-[1.15] font-extrabold tracking-tight text-transparent drop-shadow-md sm:text-4xl md:text-6xl lg:text-7xl">
        {title}
      </h1>

      <p className="max-w-2xl px-2 text-xs leading-relaxed font-normal text-slate-300 sm:px-4 sm:text-base md:text-lg">
        {subtitle}
      </p>

      <div className="flex w-full flex-col items-center justify-center gap-2 px-4 pt-1 sm:w-auto sm:flex-row sm:gap-3.5 sm:px-0 sm:pt-1.5">
        <a
          href="#journey"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-cyan-500 via-indigo-500 to-blue-600 px-6 py-2.5 text-xs font-semibold tracking-wide text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50 active:scale-95 sm:w-auto sm:px-7 sm:py-3 sm:text-sm md:text-base"
        >
          <span>{ctaText}</span>
          <Orbit className="h-3.5 w-3.5 text-cyan-200 sm:h-4 sm:w-4" />
        </a>
        <a
          href="#arrival"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-6 py-2.5 text-xs font-medium tracking-wide text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800 sm:w-auto sm:px-7 sm:py-3 sm:text-sm md:text-base"
        >
          Terminal Interface
        </a>
      </div>
    </div>
  );
}
