"use client";

import { MutableRefObject } from "react";

type TMarsMarker = {
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

const MARS_MARKERS: TMarsMarker[] = [
  {
    id: "olympus",
    step: "MARS // OLYMPUS MONS APEX",
    badge: "ALT 21.9 KM",
    badgePulse: true,
    description:
      "Passing solar system's tallest volcanic peak. Atmospheric pressure 6.1 mbar CO2.",
    borderColor: "border-orange-500/40 hover:border-orange-400 shadow-orange-950/60",
    badgeBg: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    textColor: "text-orange-400",
    positionClasses:
      "-top-6 left-1 sm:left-4 md:-left-16 lg:-left-28 max-w-[160px] sm:max-w-[220px] md:max-w-[260px]",
  },
  {
    id: "canyon",
    step: "MARS // VALLES MARINERIS",
    badge: "DEPTH 7.0 KM",
    badgePulse: false,
    description:
      "Traversing 4,000 km canyon rift system. Sub-surface water ice deposits confirmed.",
    borderColor:
      "border-amber-500/40 hover:border-amber-400 shadow-amber-950/60",
    badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    textColor: "text-amber-300",
    positionClasses:
      "top-1/3 right-1 sm:right-4 md:-right-16 lg:-right-28 max-w-[160px] sm:max-w-[220px] md:max-w-[260px]",
  },
  {
    id: "outpost",
    step: "MARS // PERSEVERANCE BEACON",
    badge: "ROVER LINK ACTIVE",
    badgePulse: false,
    description:
      "Telemetry sync established with surface exploration unit. Quantum data packets 100% nominal.",
    borderColor:
      "border-red-500/40 hover:border-red-400 shadow-red-950/60",
    badgeBg: "bg-red-500/20 text-red-300 border-red-500/30",
    textColor: "text-red-300",
    positionClasses:
      "-bottom-6 left-1/2 -translate-x-1/2 max-w-[190px] sm:max-w-[240px] md:max-w-[300px] text-center",
  },
];

type TMarsSurfaceMarkersProps = {
  surfaceMarkersRef: MutableRefObject<(HTMLDivElement | null)[]>;
};

export function MarsSurfaceMarkers({
  surfaceMarkersRef,
}: TMarsSurfaceMarkersProps) {
  return (
    <>
      {MARS_MARKERS.map((item, index) => {
        const isCentered = item.positionClasses.includes("text-center");

        return (
          <div
            key={item.id}
            ref={(el) => {
              surfaceMarkersRef.current[index] = el;
            }}
            className={`opacity-0 absolute p-2.5 sm:p-3 rounded-xl bg-slate-950/90 border backdrop-blur-xl shadow-2xl pointer-events-auto z-30 transition-colors duration-300 ${item.borderColor} ${item.positionClasses}`}
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
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-orange-400 animate-ping" />
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
