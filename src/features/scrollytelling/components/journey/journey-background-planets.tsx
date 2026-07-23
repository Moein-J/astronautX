"use client";

import React, { RefObject } from "react";

type TJourneyBackgroundPlanetsProps = {
  planetRef1: RefObject<HTMLDivElement | null>;
  planetRef2: RefObject<HTMLDivElement | null>;
  nebulaRef: RefObject<HTMLDivElement | null>;
  debrisRef: RefObject<HTMLDivElement | null>;
};

export function JourneyBackgroundPlanets({
  planetRef1,
  planetRef2,
  nebulaRef,
  debrisRef,
}: TJourneyBackgroundPlanetsProps) {
  return (
    <>
      {/* Background Parallax Planet 1 (Purple Gas Giant with Glowing Rings) */}
      <div
        ref={planetRef1}
        className="absolute -top-10 -right-12 sm:-right-20 w-48 sm:w-64 md:w-112.5 h-48 sm:h-64 md:h-112.5 pointer-events-none z-0 opacity-80"
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-[0_0_50px_rgba(168,85,247,0.35)]"
        >
          <defs>
            <radialGradient id="planet1Grad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="50%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#0f172a" />
            </radialGradient>
          </defs>
          <ellipse
            cx="100"
            cy="100"
            rx="95"
            ry="26"
            fill="none"
            stroke="#e9d5ff"
            strokeWidth="4"
            opacity="0.6"
            transform="rotate(-18 100 100)"
          />
          <circle cx="100" cy="100" r="62" fill="url(#planet1Grad)" />
          <ellipse
            cx="100"
            cy="100"
            rx="95"
            ry="26"
            fill="none"
            stroke="#a855f7"
            strokeWidth="8"
            opacity="0.8"
            transform="rotate(-18 100 100)"
          />
        </svg>
      </div>

      {/* Background Parallax Planet 2 (Cyan Cratered Moon) */}
      <div
        ref={planetRef2}
        className="absolute top-1/2 -left-16 sm:-left-24 w-40 sm:w-56 md:w-96 h-40 sm:h-56 md:h-96 pointer-events-none z-0 opacity-70"
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-[0_0_40px_rgba(34,211,238,0.25)]"
        >
          <radialGradient id="planet2Grad" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="55%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#030712" />
          </radialGradient>
          <circle cx="100" cy="100" r="70" fill="url(#planet2Grad)" />
          <circle cx="75" cy="80" r="14" fill="#0369a1" opacity="0.4" />
          <circle cx="120" cy="110" r="20" fill="#0369a1" opacity="0.4" />
          <circle cx="90" cy="130" r="9" fill="#0369a1" opacity="0.3" />
        </svg>
      </div>

      {/* Cosmic Nebula Cloud */}
      <div
        ref={nebulaRef}
        className="absolute top-1/4 left-1/3 w-80 sm:w-112.5 md:w-175 h-80 sm:h-112.5 md:h-175 rounded-full bg-radial from-indigo-600/20 via-cyan-500/15 to-transparent blur-3xl pointer-events-none z-0"
      />

      {/* Foreground Stardust Particles Layer */}
      <div
        ref={debrisRef}
        className="absolute inset-0 pointer-events-none z-10"
      >
        <div className="absolute top-1/5 right-1/4 w-2.5 h-2.5 rounded-full bg-cyan-300 opacity-70 shadow-[0_0_10px_#22d3ee] animate-pulse" />
        <div className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-purple-400 opacity-60 shadow-[0_0_12px_#a855f7]" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-white opacity-90 shadow-[0_0_8px_#ffffff]" />
      </div>
    </>
  );
}
