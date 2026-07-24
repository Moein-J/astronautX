'use client'

import { RefObject } from 'react'

type TMarsPlanetSphereProps = {
  marsPlanetRef: RefObject<HTMLDivElement | null>
}

export function MarsPlanetSphere({ marsPlanetRef }: TMarsPlanetSphereProps) {
  return (
    <div className="pointer-events-none relative flex items-center justify-center">
      {/* Outer Atmospheric Red Glow Ring */}
      <div className="absolute h-56 w-56 rounded-full bg-radial from-red-600/30 via-orange-600/15 to-transparent blur-2xl sm:h-72 sm:w-72 md:h-96 md:w-96 lg:h-128 lg:w-lg" />

      {/* Rotating Mars Circle matched dynamically to screen height */}
      <div
        ref={marsPlanetRef}
        className="relative h-48 max-h-[38vh] w-48 max-w-[38vh] overflow-hidden rounded-full border-2 border-red-500/40 shadow-[0_0_60px_rgba(239,68,68,0.4)] sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-105 lg:w-105"
      >
        <svg viewBox="0 0 400 400" className="h-full w-full">
          <defs>
            {/* Mars Red Surface Radial Gradient */}
            <radialGradient id="marsSurface" cx="40%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="40%" stopColor="#ea580c" />
              <stop offset="75%" stopColor="#9a3412" />
              <stop offset="100%" stopColor="#451a03" />
            </radialGradient>
            {/* Crater Shade */}
            <radialGradient id="craterDark" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#7c2d12" />
              <stop offset="100%" stopColor="#290e05" />
            </radialGradient>
          </defs>

          {/* Base Mars Planet Circle */}
          <circle cx="200" cy="200" r="198" fill="url(#marsSurface)" />

          {/* Olympus Mons Volcano Structure */}
          <circle
            cx="150"
            cy="120"
            r="38"
            fill="url(#craterDark)"
            stroke="#f97316"
            strokeWidth="3"
            opacity="0.85"
          />
          <circle cx="150" cy="120" r="18" fill="#451a03" opacity="0.9" />

          {/* Valles Marineris Canyon System Lines */}
          <path
            d="M 90 220 Q 180 250, 290 210 T 350 230"
            fill="none"
            stroke="#7c2d12"
            strokeWidth="10"
            strokeLinecap="round"
            opacity="0.75"
          />
          <path
            d="M 100 225 Q 180 255, 285 215"
            fill="none"
            stroke="#f97316"
            strokeWidth="2"
            opacity="0.5"
          />

          {/* Surface Impact Craters */}
          <circle
            cx="280"
            cy="140"
            r="22"
            fill="url(#craterDark)"
            stroke="#ea580c"
            strokeWidth="2"
            opacity="0.7"
          />
          <circle
            cx="240"
            cy="310"
            r="30"
            fill="url(#craterDark)"
            stroke="#ea580c"
            strokeWidth="2.5"
            opacity="0.8"
          />
          <circle
            cx="110"
            cy="300"
            r="16"
            fill="url(#craterDark)"
            stroke="#f97316"
            strokeWidth="1.5"
            opacity="0.6"
          />

          {/* Polar Ice Cap Overlay */}
          <path
            d="M 130 15 A 198 198 0 0 1 270 15 Z"
            fill="#ffedd5"
            opacity="0.45"
          />

          {/* Surface Telemetry Beacon Nodes */}
          <circle
            cx="200"
            cy="6"
            r="6"
            fill="#22d3ee"
            className="animate-ping"
          />
          <circle cx="200" cy="6" r="4" fill="#06b6d4" />
          <circle cx="394" cy="200" r="5" fill="#f59e0b" />
          <circle cx="6" cy="200" r="5" fill="#10b981" />
          <circle cx="200" cy="394" r="5" fill="#a855f7" />
        </svg>

        {/* Dynamic Surface Dust Storm Atmosphere Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,transparent_40%,#451a03_90%)] opacity-60 mix-blend-multiply" />
      </div>
    </div>
  )
}
