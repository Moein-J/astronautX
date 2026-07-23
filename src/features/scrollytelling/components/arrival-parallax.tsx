"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../hooks/use-reduced-motion";
import { CosmosDashboard } from "./cosmos-dashboard";
import { ArrowUpRight, Code2, Sparkles } from "lucide-react";

type TArrivalParallaxProps = {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export function ArrivalParallax({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
}: TArrivalParallaxProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stationRef = useRef<HTMLDivElement | null>(null);

  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const station = stationRef.current;

    if (!container || !station || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Space Station approach animation on scroll
      gsap.fromTo(
        station,
        { scale: 0.75, y: 80, opacity: 0.5 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 75%",
            end: "top 25%",
            scrub: 0.6,
          },
        },
      );
    }, container);

    return () => {
      ctx.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="relative w-full py-16 sm:py-36 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Destination Station SVG Visual */}
      <div
        ref={stationRef}
        className="relative max-w-xl mx-auto mb-8 sm:mb-12 pointer-events-none flex justify-center"
      >
        <svg
          viewBox="0 0 400 200"
          className="w-full h-auto max-w-70 sm:max-w-md drop-shadow-[0_0_50px_rgba(34,211,238,0.35)]"
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

      {/* Title & Copy */}
      <div className="relative z-20 max-w-3xl mx-auto text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-[11px] sm:text-xs font-mono tracking-wider shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>PHASE 03 // DESTINATION DOCKING</span>
        </div>

        <h2 className="text-3xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-100 to-indigo-300">
          {title}
        </h2>

        <p className="text-slate-300 text-sm sm:text-lg leading-relaxed">
          {subtitle}
        </p>

        {/* Primary CTAs */}
        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <a
            href="#terminal"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full bg-linear-to-r from-cyan-500 to-indigo-600 text-white font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>{ctaPrimary}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full bg-slate-900/90 border border-slate-700 hover:border-cyan-500/50 text-slate-200 font-medium text-sm sm:text-base tracking-wide backdrop-blur-md hover:bg-slate-800 transition-all duration-300"
          >
            <Code2 className="w-4 h-4" />
            <span>{ctaSecondary}</span>
          </a>
        </div>
      </div>

      {/* Interactive Cosmos Dashboard Terminal */}
      <div id="terminal" className="relative z-20 pt-4 sm:pt-8">
        <CosmosDashboard />
      </div>
    </div>
  );
}
