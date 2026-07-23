"use client";

import React from "react";
import { Shield, Zap, Compass, Radio, CheckCircle2 } from "lucide-react";

export type TNarrativeLog = {
  id: string;
  logNumber: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  iconName: "shield" | "zap" | "compass" | "radio";
};

type TJourneyCardItemProps = {
  log: TNarrativeLog;
  index: number;
  setCardRef: (el: HTMLDivElement | null) => void;
};

export function JourneyCardItem({
  log,
  index,
  setCardRef,
}: TJourneyCardItemProps) {
  const renderIcon = (iconName: TNarrativeLog["iconName"]) => {
    switch (iconName) {
      case "shield":
        return <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />;
      case "zap":
        return <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />;
      case "compass":
        return <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />;
      case "radio":
        return <Radio className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />;
    }
  };

  return (
    <div
      ref={setCardRef}
      className="opacity-0 group relative p-4 sm:p-6 md:p-9 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-cyan-400/60 backdrop-blur-2xl transition-colors duration-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] flex flex-col justify-between"
    >
      {/* Ambient Card Corner Glow */}
      <div className="absolute top-0 right-0 w-24 sm:w-28 md:w-36 h-24 sm:h-28 md:h-36 bg-cyan-500/10 rounded-bl-full blur-xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-500" />

      {/* Card Top Header */}
      <div className="flex items-center justify-between gap-3 mb-4 sm:mb-6">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-slate-800/90 border border-white/10 group-hover:border-cyan-500/40 group-hover:scale-110 transition-all duration-300">
            {renderIcon(log.iconName)}
          </div>
          <span className="text-[10px] sm:text-xs font-mono text-cyan-400 tracking-wider">
            {log.logNumber}
          </span>
        </div>
        <div className="text-right font-mono text-[10px] sm:text-xs text-slate-400">
          <span className="text-cyan-300 font-bold text-xs sm:text-sm">
            {log.metric}
          </span>{" "}
          <span className="text-slate-500 block text-[9px] sm:text-[10px]">
            {log.metricLabel}
          </span>
        </div>
      </div>

      {/* Title & Description */}
      <div className="space-y-1.5 sm:space-y-2.5 md:space-y-3">
        <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
          {log.title}
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
          {log.description}
        </p>
      </div>

      {/* Card Footer Status */}
      <div className="mt-4 sm:mt-6 md:mt-8 pt-3 sm:pt-4 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-xs font-mono text-slate-500">
        <span className="flex items-center gap-1.5 text-cyan-400/90">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
          STATUS: VERIFIED
        </span>
        <span className="text-slate-400">ENTRY #{index + 101}</span>
      </div>
    </div>
  );
}
