"use client";

import React, { RefObject } from "react";
import { Sparkles, Orbit } from "lucide-react";

type THeroContentProps = {
  heroContentRef: RefObject<HTMLDivElement | null>;
  badgeText: string;
  title: string;
  subtitle: string;
  ctaText: string;
};

export function HeroContent({
  heroContentRef,
  badgeText,
  title,
  subtitle,
  ctaText,
}: THeroContentProps) {
  return (
    <div
      ref={heroContentRef}
      className="relative z-20 max-w-4xl w-full text-center flex flex-col items-center space-y-3 sm:space-y-5 md:space-y-6 my-auto"
    >
      <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 backdrop-blur-md text-cyan-300 text-[10px] sm:text-xs font-mono tracking-wider shadow-lg shadow-cyan-950/50 max-w-[92vw] truncate">
        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 animate-spin-slow shrink-0" />
        <span className="truncate">{badgeText}</span>
      </div>

      <h1 className="text-2xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-100 to-indigo-300 drop-shadow-md leading-[1.15] px-1">
        {title}
      </h1>

      <p className="max-w-2xl text-xs sm:text-base md:text-xl text-slate-300 font-normal leading-relaxed px-2 sm:px-4">
        {subtitle}
      </p>

      <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
        <a
          href="#journey"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full bg-linear-to-r from-cyan-500 via-indigo-500 to-blue-600 text-white font-semibold text-xs sm:text-base tracking-wide shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 active:scale-95"
        >
          <span>{ctaText}</span>
          <Orbit className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-200" />
        </a>
        <a
          href="#arrival"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full bg-slate-900/80 border border-slate-700 hover:border-cyan-500/50 text-slate-200 font-medium text-xs sm:text-base tracking-wide backdrop-blur-md hover:bg-slate-800 transition-all duration-300"
        >
          Terminal Interface
        </a>
      </div>
    </div>
  );
}
