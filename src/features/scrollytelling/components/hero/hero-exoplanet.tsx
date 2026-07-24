"use client";

import { RefObject } from "react";

type THeroExoplanetProps = {
  exoplanetRef?: RefObject<HTMLDivElement | null>;
};

export function HeroExoplanet({ exoplanetRef }: THeroExoplanetProps) {
  return (
    <div
      ref={exoplanetRef}
      className="pointer-events-none absolute -top-10 -right-10 md:top-6 md:right-12 z-0 flex items-center justify-center opacity-80 transition-opacity duration-700"
    >
      {/* Outer Atmospheric Aura */}
      <div className="absolute w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full bg-radial from-cyan-500/20 via-indigo-600/10 to-transparent blur-2xl animate-pulse" />

      {/* Exoplanet Body with Planetary Ring System */}
      <div className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full border border-cyan-400/30 shadow-[0_0_50px_rgba(34,211,238,0.25)] overflow-visible">
        {/* Outer Orbital Rings (Tilted 3D SVG System) */}
        <svg
          viewBox="0 0 300 120"
          className="absolute -top-10 -left-14 w-[160%] h-[160%] overflow-visible pointer-events-none z-10"
        >
          <ellipse
            cx="150"
            cy="60"
            rx="130"
            ry="35"
            fill="none"
            stroke="url(#planetRingGrad)"
            strokeWidth="3"
            transform="rotate(-18 150 60)"
            opacity="0.85"
          />
          <ellipse
            cx="150"
            cy="60"
            rx="145"
            ry="40"
            fill="none"
            stroke="url(#planetRingDust)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            transform="rotate(-18 150 60)"
            opacity="0.6"
          />

          <defs>
            <linearGradient id="planetRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#818cf8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="planetRingDust" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#e0e7ff" />
            </linearGradient>
          </defs>
        </svg>

        {/* Planet Sphere Texture SVG */}
        <svg viewBox="0 0 200 200" className="w-full h-full rounded-full">
          <defs>
            <radialGradient id="exoplanetBody" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="40%" stopColor="#1e1b4b" />
              <stop offset="80%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </radialGradient>

            <linearGradient id="cloudBand" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Base Planet Sphere */}
          <circle cx="100" cy="100" r="98" fill="url(#exoplanetBody)" />

          {/* Swirling Atmospheric Cloud Bands */}
          <path
            d="M 10 70 Q 100 40, 190 70 Q 100 90, 10 70 Z"
            fill="url(#cloudBand)"
          />
          <path
            d="M 5 120 Q 100 90, 195 120 Q 100 140, 5 120 Z"
            fill="url(#cloudBand)"
          />

          {/* Subtle Surface Glow Specular Highlight */}
          <ellipse cx="65" cy="55" rx="35" ry="25" fill="#ffffff" opacity="0.15" />
        </svg>
      </div>
    </div>
  );
}
