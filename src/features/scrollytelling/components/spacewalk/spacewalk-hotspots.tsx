"use client";

import { MutableRefObject } from "react";

type TEvaHotspot = {
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

const EVA_HOTSPOTS: TEvaHotspot[] = [
  {
    id: "solar-array",
    step: "EVA // SOLAR ARRAY REPAIR",
    badge: "99.4% EFFICIENT",
    badgePulse: true,
    description:
      "Robotic arm deployed. Replenishing high-efficiency solar panel cell grid.",
    borderColor: "border-cyan-500/40 hover:border-cyan-400 shadow-cyan-950/60",
    badgeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    textColor: "text-cyan-400",
    positionClasses:
      "-top-4 left-1 sm:left-4 md:-left-12 lg:-left-24 max-w-[160px] sm:max-w-[220px] md:max-w-[260px]",
  },
  {
    id: "o2-reserve",
    step: "EVA // OXYGEN TANK CAPACITY",
    badge: "98% RESERVE",
    badgePulse: false,
    description:
      "Airlock differential 0.00 PSI. Primary suit oxygen pressure nominal.",
    borderColor:
      "border-emerald-500/40 hover:border-emerald-400 shadow-emerald-950/60",
    badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    textColor: "text-emerald-300",
    positionClasses:
      "top-1/4 right-1 sm:right-4 md:-right-12 lg:-right-24 max-w-[160px] sm:max-w-[220px] md:max-w-[260px]",
  },
  {
    id: "quantum-tether",
    step: "EVA // UMBILICAL TETHER LOCK",
    badge: "TITANIUM BRAID",
    badgePulse: false,
    description:
      "Braided titanium cable locked to station hull. RCS maneuvering jets active.",
    borderColor:
      "border-amber-500/40 hover:border-amber-400 shadow-amber-950/60",
    badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    textColor: "text-amber-300",
    positionClasses:
      "-bottom-6 left-1/2 -translate-x-1/2 max-w-[190px] sm:max-w-[240px] md:max-w-[300px] text-center",
  },
];

type TSpacewalkHotspotsProps = {
  evaHotspotsRef: MutableRefObject<(HTMLDivElement | null)[]>;
};

export function SpacewalkHotspots({
  evaHotspotsRef,
}: TSpacewalkHotspotsProps) {
  return (
    <>
      {EVA_HOTSPOTS.map((item, index) => {
        const isCentered = item.positionClasses.includes("text-center");

        return (
          <div
            key={item.id}
            ref={(el) => {
              evaHotspotsRef.current[index] = el;
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
