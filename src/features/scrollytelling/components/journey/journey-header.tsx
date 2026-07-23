"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function JourneyHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-4">
      <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 backdrop-blur-md text-cyan-300 text-[10px] sm:text-xs font-mono tracking-wider shadow-lg shadow-cyan-950/50 max-w-full truncate">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow shrink-0" />
        <span className="truncate">PHASE 02 // DEEP PARALLAX TRAJECTORY</span>
      </span>
      <h2 className="text-2xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-100 to-indigo-300">
        Navigating the Deep Void
      </h2>
      <p className="text-slate-300 text-xs sm:text-base md:text-lg leading-relaxed px-1 sm:px-0">
        As altitude increases, environment density shifts. Scroll through key
        mission milestones logged during trans-orbital transit.
      </p>
    </div>
  );
}
