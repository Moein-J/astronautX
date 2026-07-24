"use client";

import { RefObject } from "react";

type THeroSolarSystemProps = {
  solarSystemRef: RefObject<HTMLDivElement | null>;
};

export function HeroSolarSystem({ solarSystemRef }: THeroSolarSystemProps) {
  return (
    <div
      ref={solarSystemRef}
      style={{ opacity: 0, visibility: "hidden" }}
      className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center w-full h-full"
    >
      {/* Central Sun Golden Corona Glow */}
      <div className="absolute w-44 h-44 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-radial from-amber-400/30 via-orange-500/15 to-transparent blur-3xl animate-pulse" />

      {/* Vector Solar System Orbits & Planets SVG */}
      <svg
        viewBox="0 0 800 800"
        className="w-full max-w-4xl h-full max-h-[80vh] overflow-visible opacity-90"
      >
        <defs>
          {/* Sun Gradient */}
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="40%" stopColor="#f59e0b" />
            <stop offset="85%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </radialGradient>

          {/* Saturn Ring Gradient */}
          <linearGradient id="saturnRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#d97706" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#78350f" stopOpacity="0.7" />
          </linearGradient>

          {/* Jupiter Gradient */}
          <linearGradient id="jupiterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fdba74" />
            <stop offset="50%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#7c2d12" />
          </linearGradient>
        </defs>

        {/* Orbit Ellipses */}
        <ellipse
          cx="400"
          cy="400"
          rx="120"
          ry="65"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="1"
          strokeDasharray="3 4"
          opacity="0.35"
        />
        <ellipse
          cx="400"
          cy="400"
          rx="210"
          ry="110"
          fill="none"
          stroke="#a855f7"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          opacity="0.4"
        />
        <ellipse
          cx="400"
          cy="400"
          rx="310"
          ry="165"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeDasharray="5 7"
          opacity="0.45"
        />

        {/* Central Sun */}
        <circle cx="400" cy="400" r="38" fill="url(#sunGlow)" />
        <circle cx="400" cy="400" r="46" stroke="#fef08a" strokeWidth="1" opacity="0.5" />

        {/* Planet 1: Mercury (Small Inner Node) */}
        <circle cx="310" cy="365" r="5" fill="#e2e8f0" />

        {/* Planet 2: Venus */}
        <circle cx="490" cy="360" r="8" fill="#fde047" />

        {/* Planet 3: Earth & Moon */}
        <g transform="translate(230, 445)">
          <circle cx="0" cy="0" r="11" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
          <circle cx="-16" cy="-8" r="3" fill="#cbd5e1" />
        </g>

        {/* Planet 4: Mars (Red Planet) */}
        <circle cx="580" cy="455" r="9" fill="#ef4444" stroke="#b91c1c" strokeWidth="1" />

        {/* Planet 5: Jupiter */}
        <g transform="translate(680, 310)">
          <circle cx="0" cy="0" r="22" fill="url(#jupiterGrad)" />
          {/* Great Red Spot */}
          <ellipse cx="6" cy="6" rx="5" ry="3" fill="#b91c1c" opacity="0.8" />
        </g>

        {/* Planet 6: Saturn with Rings */}
        <g transform="translate(130, 300)">
          <ellipse
            cx="0"
            cy="0"
            rx="32"
            ry="10"
            fill="none"
            stroke="url(#saturnRing)"
            strokeWidth="3.5"
            transform="rotate(-15)"
          />
          <circle cx="0" cy="0" r="15" fill="#fef08a" stroke="#d97706" strokeWidth="1" />
        </g>

        {/* Solar System Gateway Orbit Nodes */}
        <circle cx="400" cy="235" r="3" fill="#38bdf8" className="animate-ping" />
        <circle cx="400" cy="565" r="3" fill="#c084fc" className="animate-ping" />
      </svg>
    </div>
  );
}
