"use client";

import { MutableRefObject } from "react";

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

const TELEMETRY_CALLOUTS: TTelemetryItem[] = [
  {
    id: "thrusters",
    step: "01 // MAIN THRUSTERS",
    badge: "100% PWR",
    badgePulse: true,
    description:
      "Secondary booster stage engaged. Pitch angle 45° vertical takeoff.",
    borderColor: "border-cyan-500/40 hover:border-cyan-400 shadow-cyan-950/60",
    badgeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    textColor: "text-cyan-400",
    positionClasses:
      "-top-4 left-1 sm:left-6 md:-left-8 lg:-left-20 max-w-[155px] sm:max-w-[220px] md:max-w-[260px]",
  },
  {
    id: "maxq",
    step: "02 // MAX Q ALTITUDE",
    badge: "ALT 85K FT",
    badgePulse: false,
    description:
      "Maximum dynamic pressure passed. Hull integrity 100% nominal.",
    borderColor:
      "border-purple-500/40 hover:border-purple-400 shadow-purple-950/60",
    badgeBg: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    textColor: "text-purple-300",
    positionClasses:
      "top-1/4 right-1 sm:right-6 md:-right-8 lg:-right-20 max-w-[155px] sm:max-w-[220px] md:max-w-[260px]",
  },
  {
    id: "orbit",
    step: "03 // ORBITAL INSERTION",
    badge: "27.5K KM/H",
    badgePulse: false,
    description:
      "Zero-G trajectory locked. Trans-orbital flight path established.",
    borderColor:
      "border-indigo-500/40 hover:border-indigo-400 shadow-indigo-950/60",
    badgeBg: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    textColor: "text-indigo-300",
    positionClasses:
      "-bottom-6 left-1/2 -translate-x-1/2 max-w-[180px] sm:max-w-[240px] md:max-w-[300px] text-center",
  },
];

type THeroTelemetryCalloutsProps = {
  calloutsRef: MutableRefObject<(HTMLDivElement | null)[]>;
};

export function HeroTelemetryCallouts({
  calloutsRef,
}: THeroTelemetryCalloutsProps) {
  return (
    <>
      {TELEMETRY_CALLOUTS.map((item, index) => {
        const isCentered = item.positionClasses.includes("text-center");

        return (
          <div
            key={item.id}
            ref={(el) => {
              calloutsRef.current[index] = el;
            }}
            className={`opacity-0 absolute p-2.5 sm:p-3 rounded-xl bg-slate-950/90 border backdrop-blur-xl shadow-2xl pointer-events-auto z-20 transition-colors duration-300 ${item.borderColor} ${item.positionClasses}`}
          >
            <div
              className={`flex items-center gap-1 sm:gap-1.5 mb-0.5 sm:mb-1 ${
                isCentered ? "justify-center" : "justify-between"
              }`}
            >
              <span
                className={`text-[9px] sm:text-[10px] md:text-xs font-mono font-bold tracking-wider ${item.textColor}`}
              >
                {item.step}
              </span>
              <span
                className={`inline-flex items-center gap-0.5 sm:gap-1 text-[8px] sm:text-[9px] font-mono px-1 sm:px-1.5 py-0.5 rounded border ${item.badgeBg}`}
              >
                {item.badgePulse && (
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-ping" />
                )}
                {item.badge}
              </span>
            </div>
            <p className="text-[9px] sm:text-[10px] md:text-xs text-slate-300 font-sans leading-tight sm:leading-relaxed">
              {item.description}
            </p>
          </div>
        );
      })}
    </>
  );
}
