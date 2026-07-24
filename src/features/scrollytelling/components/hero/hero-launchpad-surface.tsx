"use client";

import { RefObject } from "react";

type THeroLaunchpadSurfaceProps = {
  launchpadRef: RefObject<HTMLDivElement | null>;
};

export function HeroLaunchpadSurface({
  launchpadRef,
}: THeroLaunchpadSurfaceProps) {
  return (
    <div
      ref={launchpadRef}
      className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center justify-end w-full overflow-visible"
    >
      {/* Launchpad Exhaust Smoke Vents Glow */}
      <div className="absolute -top-12 w-full max-w-4xl h-20 bg-radial from-cyan-500/25 via-blue-500/10 to-transparent blur-xl" />

      {/* Vector Rocket Launchpad Gantry Platform (Dynamic Height bounded to 18vh max) */}
      <div className="relative w-full max-w-5xl h-16 sm:h-24 md:h-32 max-h-[18vh] flex items-end justify-center">
        {/* Support Steel Gantry Towers */}
        <svg
          viewBox="0 0 1000 200"
          className="w-full h-full text-slate-800 drop-shadow-xl"
          fill="currentColor"
        >
          <defs>
            <linearGradient id="gantrySteel" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="60%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="launchGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Left Launch Support Tower */}
          <path
            d="M 120 200 L 140 40 L 170 40 L 190 200 Z"
            fill="url(#gantrySteel)"
            stroke="#475569"
            strokeWidth="2"
          />
          <path
            d="M 140 40 L 190 200 M 170 40 L 120 200 M 130 90 L 180 90 M 135 140 L 185 140"
            stroke="#38bdf8"
            strokeWidth="1.5"
            opacity="0.4"
          />

          {/* Right Launch Support Tower */}
          <path
            d="M 810 200 L 830 40 L 860 40 L 880 200 Z"
            fill="url(#gantrySteel)"
            stroke="#475569"
            strokeWidth="2"
          />
          <path
            d="M 830 40 L 880 200 M 860 40 L 810 200 M 820 90 L 870 90 M 825 140 L 875 140"
            stroke="#38bdf8"
            strokeWidth="1.5"
            opacity="0.4"
          />

          {/* Center Heavy Duty Launch Pad Deck */}
          <rect
            x="240"
            y="130"
            width="520"
            height="70"
            rx="12"
            fill="url(#gantrySteel)"
            stroke="#64748b"
            strokeWidth="3"
          />

          {/* Launch Pad Flame Deflector Trench */}
          <rect x="360" y="160" width="280" height="40" rx="6" fill="#020617" />
          <path
            d="M 380 160 Q 500 130 620 160"
            fill="url(#launchGlow)"
            opacity="0.9"
          />

          {/* Launch Pad LED Safety Beacons */}
          <circle cx="260" cy="142" r="5" fill="#ef4444" className="animate-ping" />
          <circle cx="740" cy="142" r="5" fill="#ef4444" className="animate-ping" />
          <circle cx="380" cy="142" r="4" fill="#38bdf8" />
          <circle cx="620" cy="142" r="4" fill="#38bdf8" />
        </svg>

        {/* Ground Exhaust Steam Cloud Lines */}
        <div className="absolute bottom-0 w-full h-6 bg-linear-to-t from-slate-950 via-slate-900 to-transparent border-t border-cyan-500/20" />
      </div>
    </div>
  );
}
