"use client";

import { RefObject } from "react";

// ----- TYPES -----
type TTelemetryItem = {
  id: string;
  step: string;
  badge: string;
  badgePulse?: boolean;
  description: string;
  borderColor: string;
  badgeBg: string;
  textColor: string;
  positionClasses: string;
};

type THeroTelemetryCalloutsProps = {
  calloutsRef: RefObject<(HTMLDivElement | null)[]>;
};

// ----- MOCK-DATA -----
const TELEMETRY_CALLOUTS: TTelemetryItem[] = [
  {
    id: "thrusters",
    step: "01 // HYPERGOLIC IGNITION",
    badge: "2.45G THRUST",
    badgePulse: true,
    description:
      "Primary booster stage engaged. Pitch angle 45° vertical ascent through troposphere.",
    borderColor: "border-cyan-500/40 shadow-cyan-950/60",
    badgeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    textColor: "text-cyan-400",
    positionClasses:
      "top-0 left-2 md:left-4 lg:-left-4 xl:-left-12 w-60 md:w-64 lg:w-72 max-w-[90vw]",
  },
  {
    id: "maxq",
    step: "02 // KÁRMÁN LINE CROSSING",
    badge: "ALT 85K FT",
    badgePulse: false,
    description:
      "Maximum dynamic pressure passed. Ionization shields active. Hull integrity 100% nominal.",
    borderColor: "border-purple-500/40 shadow-purple-950/60",
    badgeBg: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    textColor: "text-purple-300",
    positionClasses:
      "top-1/4 right-2 md:right-4 lg:-right-4 xl:-right-12 w-60 md:w-64 lg:w-72 max-w-[90vw]",
  },
  {
    id: "orbit",
    step: "03 // ORBITAL INSERTION",
    badge: "27,650 KM/H",
    badgePulse: false,
    description:
      "Zero-G momentum locked. Trans-orbital flight path to Cosmos Outpost established.",
    borderColor: "border-indigo-500/40 shadow-indigo-950/60",
    badgeBg: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    textColor: "text-indigo-300",
    positionClasses:
      "bottom-2 md:bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 w-64 md:w-72 lg:w-80 max-w-[90vw] text-center",
  },
];

export function HeroTelemetryCallouts({
  calloutsRef,
}: THeroTelemetryCalloutsProps) {
  return (
    <>
      {/* Desktop & Laptop Parallax Callouts Overlay (High performance bg-slate-950/98 without backdrop-blur compositing lag) */}
      <div className="hidden md:block">
        {TELEMETRY_CALLOUTS.map((item, index) => {
          const isCentered = item.positionClasses.includes("text-center");

          return (
            <div
              key={item.id}
              ref={(el) => {
                calloutsRef.current[index] = el;
              }}
              className={`pointer-events-auto absolute z-20 rounded-xl border bg-slate-950/98 p-3 opacity-0 shadow-2xl will-change-transform ${item.borderColor} ${item.positionClasses}`}
            >
              <div
                className={`mb-1 flex items-center gap-1.5 ${
                  isCentered ? "justify-center" : "justify-between"
                }`}
              >
                <span
                  className={`font-mono text-xs font-bold tracking-wider ${item.textColor}`}
                >
                  {item.step}
                </span>
                <span
                  className={`inline-flex items-center gap-1 rounded border px-1.5 py-0.5 font-mono text-[9px] ${item.badgeBg}`}
                >
                  {item.badgePulse && (
                    <span className="h-1.5 w-1.5 animate-ping rounded-full bg-cyan-400" />
                  )}
                  {item.badge}
                </span>
              </div>
              <p className="font-sans text-xs leading-relaxed text-slate-300">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Mobile Clean Static Responsive Cards Grid */}
      <div className="grid grid-cols-1 gap-2.5 w-full mt-4 md:hidden pointer-events-auto z-20">
        {TELEMETRY_CALLOUTS.map((item) => (
          <div
            key={item.id}
            className={`rounded-xl border bg-slate-950/90 p-3 shadow-lg ${item.borderColor}`}
          >
            <div className="mb-1 flex items-center justify-between gap-2">
              <span
                className={`font-mono text-[10px] font-bold tracking-wider ${item.textColor}`}
              >
                {item.step}
              </span>
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
        ))}
      </div>
    </>
  );
}
