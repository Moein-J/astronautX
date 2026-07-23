"use client";

import { RefObject } from "react";

// ----- TYPES -----
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

// ----- MOCK-DATA -----
const MARS_MARKERS: TMarsMarker[] = [
  {
    id: "olympus",
    step: "MARS // OLYMPUS MONS APEX",
    badge: "ALT 21.9 KM",
    badgePulse: true,
    description:
      "Passing solar system's tallest volcanic peak. Atmospheric pressure 6.1 mbar CO2.",
    borderColor:
      "border-orange-500/40 hover:border-orange-400 shadow-orange-950/60",
    badgeBg: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    textColor: "text-orange-400",
    positionClasses:
      "-top-4 md:-left-6 lg:-left-12 max-w-[200px] md:max-w-[240px] lg:max-w-[280px]",
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
      "top-1/3 md:-right-6 lg:-right-12 max-w-[200px] md:max-w-[240px] lg:max-w-[280px]",
  },
  {
    id: "outpost",
    step: "MARS // PERSEVERANCE BEACON",
    badge: "ROVER LINK ACTIVE",
    badgePulse: false,
    description:
      "Telemetry sync established with surface exploration unit. Quantum data packets 100% nominal.",
    borderColor: "border-red-500/40 hover:border-red-400 shadow-red-950/60",
    badgeBg: "bg-red-500/20 text-red-300 border-red-500/30",
    textColor: "text-red-300",
    positionClasses:
      "-bottom-4 left-1/2 -translate-x-1/2 max-w-[220px] md:max-w-[280px] lg:max-w-[320px] text-center",
  },
];

type TMarsSurfaceMarkersProps = {
  surfaceMarkersRef: RefObject<(HTMLDivElement | null)[]>;
};

export function MarsSurfaceMarkers({
  surfaceMarkersRef,
}: TMarsSurfaceMarkersProps) {
  return (
    <>
      {/* Desktop Absolute Parallax Markers Overlay */}
      <div className="hidden md:block">
        {MARS_MARKERS.map((item, index) => {
          const isCentered = item.positionClasses.includes("text-center");

          return (
            <div
              key={item.id}
              ref={(el) => {
                surfaceMarkersRef.current[index] = el;
              }}
              className={`pointer-events-auto absolute z-30 rounded-xl border bg-slate-950/95 p-3 opacity-0 shadow-2xl backdrop-blur-md transition-colors duration-300 ${item.borderColor} ${item.positionClasses}`}
            >
              <div
                className={`mb-1 flex items-center gap-1.5 ${
                  isCentered ? "justify-center" : "justify-between"
                }`}
              >
                <span
                  className={`font-mono text-[11px] font-bold tracking-wider ${item.textColor}`}
                >
                  {item.step}
                </span>
                <span
                  className={`inline-flex items-center gap-1 rounded border px-1.5 py-0.5 font-mono text-[8px] ${item.badgeBg}`}
                >
                  {item.badgePulse && (
                    <span className="h-1.5 w-1.5 animate-ping rounded-full bg-orange-400" />
                  )}
                  {item.badge}
                </span>
              </div>
              <p className="font-sans text-[11px] leading-relaxed text-slate-300">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Mobile Full-Width Responsive Static Cards List */}
      <div className="md:hidden w-full max-w-sm mx-auto px-2 mt-4 space-y-2.5 pointer-events-auto z-30">
        {MARS_MARKERS.map((item) => (
          <div
            key={item.id}
            className={`w-full rounded-xl border bg-slate-950/90 p-3 shadow-lg transition-colors duration-300 ${item.borderColor}`}
          >
            <div className="mb-1 flex items-center justify-between gap-2">
              <span
                className={`font-mono text-[10px] font-bold tracking-wider ${item.textColor}`}
              >
                {item.step}
              </span>
              <span
                className={`inline-flex items-center gap-1 rounded border px-1 py-0.5 font-mono text-[8px] ${item.badgeBg}`}
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
        ))}
      </div>
    </>
  );
}
