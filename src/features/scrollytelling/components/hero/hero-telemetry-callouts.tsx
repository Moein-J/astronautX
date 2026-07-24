"use client";

import { RefObject } from "react";
import { Activity, ShieldCheck, Radio, Cpu } from "lucide-react";

// ----- TYPES -----
type TTelemetryItem = {
  id: string;
  step: string;
  badge: string;
  icon: typeof Activity;
  badgePulse?: boolean;
  metric: string;
  metricLabel: string;
  description: string;
  borderColor: string;
  badgeBg: string;
  textColor: string;
  positionClasses: string;
};

type THeroTelemetryCalloutsProps = {
  calloutsRef: RefObject<(HTMLDivElement | null)[]>;
};

// ----- CREATIVE HOLOGRAPHIC DATA -----
const TELEMETRY_CALLOUTS: TTelemetryItem[] = [
  {
    id: "thrusters",
    step: "01 // HYPERGOLIC VECTOR",
    badge: "2.45G THRUST",
    icon: Activity,
    badgePulse: true,
    metric: "99.8%",
    metricLabel: "FUEL CELL",
    description:
      "Primary booster stage engaged. Pitch angle 45° vertical ascent through troposphere.",
    borderColor: "border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.25)]",
    badgeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    textColor: "text-cyan-400",
    positionClasses:
      "top-0 left-2 md:left-4 lg:-left-4 xl:-left-12 w-64 md:w-72 lg:w-80 max-w-[90vw]",
  },
  {
    id: "maxq",
    step: "02 // QUANTUM SHIELDING",
    badge: "85K FT ALT",
    icon: ShieldCheck,
    badgePulse: false,
    metric: "100%",
    metricLabel: "HULL INTEGRITY",
    description:
      "Maximum dynamic pressure passed. Ionization shields active. Hull integrity nominal.",
    borderColor: "border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.25)]",
    badgeBg: "bg-purple-500/20 text-purple-300 border-purple-500/40",
    textColor: "text-purple-300",
    positionClasses:
      "top-1/4 right-2 md:right-4 lg:-right-4 xl:-right-12 w-64 md:w-72 lg:w-80 max-w-[90vw]",
  },
  {
    id: "orbit",
    step: "03 // ORBITAL INSERTION",
    badge: "27,650 KM/H",
    icon: Radio,
    badgePulse: false,
    metric: "0.00G",
    metricLabel: "ZERO-G LOCK",
    description:
      "Zero-G momentum locked. Trans-orbital flight path to Cosmos Outpost established.",
    borderColor: "border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.25)]",
    badgeBg: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40",
    textColor: "text-indigo-300",
    positionClasses:
      "bottom-2 md:bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 w-68 md:w-76 lg:w-84 max-w-[90vw] text-center",
  },
];

export function HeroTelemetryCallouts({
  calloutsRef,
}: THeroTelemetryCalloutsProps) {
  return (
    <>
      {/* Desktop Cyber-Quantum Holographic Callouts Overlay */}
      <div className="hidden md:block">
        {TELEMETRY_CALLOUTS.map((item, index) => {
          const Icon = item.icon;
          const isCentered = item.positionClasses.includes("text-center");

          return (
            <div
              key={item.id}
              ref={(el) => {
                calloutsRef.current[index] = el;
              }}
              className={`pointer-events-auto absolute z-20 rounded-2xl border bg-slate-950/95 p-3.5 opacity-0 shadow-2xl will-change-transform ${item.borderColor} ${item.positionClasses}`}
            >
              {/* Corner Cyber Accents */}
              <div className="pointer-events-none absolute -top-1 -left-1 h-3 w-3 border-t-2 border-l-2 border-cyan-400" />
              <div className="pointer-events-none absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-purple-400" />

              {/* Card Header with Live Telemetry Icon & Metric */}
              <div
                className={`mb-2 flex items-center gap-2 ${
                  isCentered ? "justify-center" : "justify-between"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="rounded-lg border border-white/10 bg-slate-900/90 p-1.5">
                    <Icon className={`h-4 w-4 ${item.textColor}`} />
                  </div>
                  <span
                    className={`font-mono text-[11px] font-bold tracking-wider ${item.textColor}`}
                  >
                    {item.step}
                  </span>
                </div>

                <div className="text-right font-mono text-[9px]">
                  <span className="font-bold text-white">{item.metric}</span>{" "}
                  <span className="text-slate-400">{item.metricLabel}</span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mb-2 flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 font-mono text-[9px] ${item.badgeBg}`}
                >
                  {item.badgePulse && (
                    <span className="h-1.5 w-1.5 animate-ping rounded-full bg-cyan-400" />
                  )}
                  {item.badge}
                </span>

                <div className="flex items-center gap-1 font-mono text-[8px] text-slate-500">
                  <Cpu className="h-3 w-3 text-slate-400" />
                  <span>SYNC // 100%</span>
                </div>
              </div>

              {/* Description Body */}
              <p className="font-sans text-xs leading-relaxed text-slate-300">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Mobile Clean Static Responsive Cards Grid */}
      <div className="grid grid-cols-1 gap-3 w-full mt-4 md:hidden pointer-events-auto z-20">
        {TELEMETRY_CALLOUTS.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className={`rounded-2xl border bg-slate-950/95 p-3.5 shadow-lg ${item.borderColor}`}
            >
              <div className="mb-1.5 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg border border-white/10 bg-slate-900/90 p-1">
                    <Icon className={`h-3.5 w-3.5 ${item.textColor}`} />
                  </div>
                  <span
                    className={`font-mono text-[10px] font-bold tracking-wider ${item.textColor}`}
                  >
                    {item.step}
                  </span>
                </div>

                <span
                  className={`inline-flex items-center gap-1 rounded border px-1.5 py-0.5 font-mono text-[8px] ${item.badgeBg}`}
                >
                  {item.badgePulse && (
                    <span className="h-1 w-1 animate-ping rounded-full bg-cyan-400" />
                  )}
                  {item.badge}
                </span>
              </div>
              <p className="font-sans text-[10px] leading-tight text-slate-300">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
