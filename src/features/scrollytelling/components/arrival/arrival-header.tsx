"use client";

import React from "react";
import { ArrowUpRight, Code2, Sparkles } from "lucide-react";

type TArrivalHeaderProps = {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export function ArrivalHeader({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
}: TArrivalHeaderProps) {
  return (
    <div className="relative z-20 max-w-3xl mx-auto text-center space-y-3 sm:space-y-6 mb-10 sm:mb-16">
      <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-[10px] sm:text-xs font-mono tracking-wider shadow-lg max-w-[92vw] truncate">
        <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
        <span className="truncate">PHASE 03 // DESTINATION DOCKING</span>
      </div>

      <h2 className="text-2xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-100 to-indigo-300">
        {title}
      </h2>

      <p className="text-slate-300 text-xs sm:text-base md:text-lg leading-relaxed px-1 sm:px-0">
        {subtitle}
      </p>

      {/* Primary CTAs */}
      <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
        <a
          href="#terminal"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full bg-linear-to-r from-cyan-500 to-indigo-600 text-white font-bold text-xs sm:text-base tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <span>{ctaPrimary}</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full bg-slate-900/90 border border-slate-700 hover:border-cyan-500/50 text-slate-200 font-medium text-xs sm:text-base tracking-wide backdrop-blur-md hover:bg-slate-800 transition-all duration-300"
        >
          <Code2 className="w-4 h-4" />
          <span>{ctaSecondary}</span>
        </a>
      </div>
    </div>
  );
}
