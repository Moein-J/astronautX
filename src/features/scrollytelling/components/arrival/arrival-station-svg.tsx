"use client";

import React, { RefObject } from "react";

type TArrivalStationSvgProps = {
  stationRef: RefObject<HTMLDivElement | null>;
};

export function ArrivalStationSvg({ stationRef }: TArrivalStationSvgProps) {
  return (
    <div
      ref={stationRef}
      className="relative max-w-xl mx-auto mb-6 sm:mb-12 pointer-events-none flex justify-center"
    >
      <svg
        viewBox="0 0 400 200"
        className="w-full h-auto max-w-64 sm:max-w-md drop-shadow-[0_0_50px_rgba(34,211,238,0.35)]"
      >
        <defs>
          <linearGradient
            id="stationMetal"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="panelSolar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
        </defs>
        {/* Solar Arrays */}
        <rect
          x="20"
          y="80"
          width="100"
          height="40"
          rx="4"
          fill="url(#panelSolar)"
          stroke="#7dd3fc"
          strokeWidth="2"
        />
        <rect
          x="280"
          y="80"
          width="100"
          height="40"
          rx="4"
          fill="url(#panelSolar)"
          stroke="#7dd3fc"
          strokeWidth="2"
        />
        {/* Grid lines on panels */}
        <line
          x1="45"
          y1="80"
          x2="45"
          y2="120"
          stroke="#0284c7"
          strokeWidth="2"
        />
        <line
          x1="70"
          y1="80"
          x2="70"
          y2="120"
          stroke="#0284c7"
          strokeWidth="2"
        />
        <line
          x1="95"
          y1="80"
          x2="95"
          y2="120"
          stroke="#0284c7"
          strokeWidth="2"
        />
        <line
          x1="305"
          y1="80"
          x2="305"
          y2="120"
          stroke="#0284c7"
          strokeWidth="2"
        />
        <line
          x1="330"
          y1="80"
          x2="330"
          y2="120"
          stroke="#0284c7"
          strokeWidth="2"
        />
        <line
          x1="355"
          y1="80"
          x2="355"
          y2="120"
          stroke="#0284c7"
          strokeWidth="2"
        />
        {/* Connecting Struts */}
        <rect x="120" y="95" width="40" height="10" fill="#475569" />
        <rect x="240" y="95" width="40" height="10" fill="#475569" />
        {/* Main Central Core Hub */}
        <circle
          cx="200"
          cy="100"
          r="45"
          fill="url(#stationMetal)"
          stroke="#38bdf8"
          strokeWidth="3"
        />
        <circle
          cx="200"
          cy="100"
          r="30"
          fill="#0f172a"
          stroke="#0284c7"
          strokeWidth="2"
        />
        <circle
          cx="200"
          cy="100"
          r="14"
          fill="#22d3ee"
          className="animate-pulse"
        />
        {/* Communications Spire */}
        <line
          x1="200"
          y1="55"
          x2="200"
          y2="15"
          stroke="#38bdf8"
          strokeWidth="3"
        />
        <circle
          cx="200"
          cy="15"
          r="5"
          fill="#ef4444"
          className="animate-ping"
        />
      </svg>
    </div>
  );
}
