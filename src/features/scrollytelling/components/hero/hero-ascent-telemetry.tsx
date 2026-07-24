"use client";

import { RefObject } from "react";
import { Flame, Rocket, Orbit, ShieldCheck } from "lucide-react";

// ----- TYPES -----
type TAscentItem = {
  id: string;
  phase: string;
  badge: string;
  icon: typeof Rocket;
  badgePulse?: boolean;
  metric: string;
  metricLabel: string;
  description: string;
  borderColor: string;
  badgeBg: string;
  textColor: string;
  positionClasses: string;
};

type THeroAscentTelemetryProps = {
  calloutsRef: RefObject<(HTMLDivElement | null)[]>;
};

// ----- NARRATIVE LAUNCH & ASCENT TELEMETRY DATA -----
const ASCENT_TELEMETRY: TAscentItem[] = [
  {
    id: "launchpad",
    phase: "PHASE 01 // LAUNCHPAD IGNITION",
    badge: "0M ALTITUDE",
    icon: Flame,
    badgePulse: true,
    metric: "IGNITION",
    metricLabel: "PAD 39A KSC",
    description:
      "Gantry clamp release confirmed. Primary booster ignition sequence 100% active on Earth surface.",
    borderColor: "border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.25)]",
    badgeBg: "bg-orange-500/20 text-orange-300 border-orange-500/40",
    textColor: "text-orange-400",
    positionClasses:
      "bottom-8 left-2 md:left-6 lg:left-12 w-64 md:w-72 lg:w-80 max-w-[90vw]",
  },
  {
    id: "ascent",
    phase: "PHASE 02 // ATMOSPHERIC ASCENT",
    badge: "ALT 45K FT",
    icon: ShieldCheck,
    badgePulse: false,
    metric: "MACH 4.2",
    metricLabel: "VELOCITY",
    description:
      "Crossing Kármán line. Atmospheric friction shield engaged as launchpad recedes into horizon.",
    borderColor: "border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.25)]",
    badgeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    textColor: "text-cyan-400",
    positionClasses:
      "top-1/4 right-2 md:right-6 lg:right-12 w-64 md:w-72 lg:w-80 max-w-[90vw]",
  },
  {
    id: "solarsystem",
    phase: "PHASE 03 // SOLAR SYSTEM GATEWAY",
    badge: "DEEP SPACE",
    icon: Orbit,
    badgePulse: true,
    metric: "27,650 KM/H",
    metricLabel: "ORBITAL LOCK",
    description:
      "Trans-planetary trajectory confirmed. Floating into the outer boundary of the Solar System.",
    borderColor: "border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.25)]",
    badgeBg: "bg-purple-500/20 text-purple-300 border-purple-500/40",
    textColor: "text-purple-300",
    positionClasses:
      "bottom-4 left-1/2 -translate-x-1/2 w-68 md:w-76 lg:w-84 max-w-[90vw] text-center",
  },
];

export function HeroAscentTelemetry({
  calloutsRef,
}: THeroAscentTelemetryProps) {
  return (
    <>
      {/* Desktop Ascent Telemetry Overlay */}
      <div className="hidden md:block">
        {ASCENT_TELEMETRY.map((item, index) => {
          const Icon = item.icon;
          const isCentered = item.positionClasses.includes("text-center");

          return (
            <div
              key={item.id}
              ref={(el) => {
                calloutsRef.current[index] = el;
              }}
              className={`pointer-events-auto absolute z-20 rounded-2xl border bg-slate-950/98 p-3.5 opacity-0 shadow-2xl will-change-transform ${item.borderColor} ${item.positionClasses}`}
            >
              {/* Corner Cyber Accents */}
              <div className="pointer-events-none absolute -top-1 -left-1 h-3 w-3 border-t-2 border-l-2 border-cyan-400" />
              <div className="pointer-events-none absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-purple-400" />

              {/* Card Header with Icon & Metric */}
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
                    {item.phase}
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
                    <span className="h-1.5 w-1.5 animate-ping rounded-full bg-orange-400" />
                  )}
                  {item.badge}
                </span>

                <div className="flex items-center gap-1 font-mono text-[8px] text-slate-500">
                  <span>SYSTEM // ONLINE</span>
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

      {/* Mobile Clean Responsive Stack */}
      <div className="grid grid-cols-1 gap-3 w-full mt-4 md:hidden pointer-events-auto z-20">
        {ASCENT_TELEMETRY.map((item) => {
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
                    {item.phase}
                  </span>
                </div>

                <span
                  className={`inline-flex items-center gap-1 rounded border px-1.5 py-0.5 font-mono text-[8px] ${item.badgeBg}`}
                >
                  {item.badgePulse && (
                    <span className="h-1 w-1 animate-ping rounded-full bg-orange-400" />
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
