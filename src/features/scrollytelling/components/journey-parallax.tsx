"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../hooks/use-reduced-motion";
import { Shield, Zap, Compass, Radio, Sparkles, CheckCircle2 } from "lucide-react";

type TNarrativeLog = {
  id: string;
  logNumber: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  iconName: "shield" | "zap" | "compass" | "radio";
};

type TJourneyParallaxProps = {
  logs: TNarrativeLog[];
};

export function JourneyParallax({ logs }: TJourneyParallaxProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const planetRef1 = useRef<HTMLDivElement | null>(null);
  const planetRef2 = useRef<HTMLDivElement | null>(null);
  const nebulaRef = useRef<HTMLDivElement | null>(null);
  const debrisRef = useRef<HTMLDivElement | null>(null);
  const progressBeamRef = useRef<HTMLDivElement | null>(null);
  const logCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Master timeline for seamless, jank-free scroll physics
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "bottom 70%",
          scrub: 1.2,
        },
      });

      // 1. Planet 1 (Purple Gas Giant) smooth vertical & rotational drift
      if (planetRef1.current) {
        tl.to(planetRef1.current, { y: -260, rotate: 45, ease: "none" }, 0);
      }

      // 2. Planet 2 (Cyan Moon) smooth vertical & rotational drift
      if (planetRef2.current) {
        tl.to(planetRef2.current, { y: -360, rotate: -30, scale: 1.15, ease: "none" }, 0);
      }

      // 3. Cosmic Nebula Cloud expansion
      if (nebulaRef.current) {
        tl.to(nebulaRef.current, { y: -180, scale: 1.35, opacity: 0.85, ease: "none" }, 0);
      }

      // 4. Foreground Stardust Debris Parallax
      if (debrisRef.current) {
        tl.to(debrisRef.current, { y: -500, ease: "none" }, 0);
      }

      // 5. Central Trajectory Line grow on scroll
      if (progressBeamRef.current) {
        tl.to(progressBeamRef.current, { scaleY: 1, ease: "none" }, 0);
      }

      // 6. Staggered card reveals smooth scrub timeline
      const validCards = logCardsRef.current.filter(Boolean);
      if (validCards.length > 0) {
        tl.fromTo(
          validCards,
          { opacity: 0, y: 60, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.12, ease: "power2.out" },
          0.05
        );
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, [prefersReducedMotion]);

  const renderIcon = (iconName: TNarrativeLog["iconName"]) => {
    switch (iconName) {
      case "shield":
        return <Shield className="w-5 h-5 text-cyan-400" />;
      case "zap":
        return <Zap className="w-5 h-5 text-purple-400" />;
      case "compass":
        return <Compass className="w-5 h-5 text-amber-400" />;
      case "radio":
        return <Radio className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <div ref={sectionRef} className="relative w-full py-20 md:py-36 px-4 md:px-6 overflow-hidden">
      {/* Background Parallax Planet 1 (Purple Gas Giant with Glowing Rings) */}
      <div
        ref={planetRef1}
        className="absolute -top-10 -right-20 w-64 md:w-[450px] h-64 md:h-[450px] pointer-events-none z-0 opacity-80"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_50px_rgba(168,85,247,0.35)]">
          <defs>
            <radialGradient id="planet1Grad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="50%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#0f172a" />
            </radialGradient>
          </defs>
          <ellipse cx="100" cy="100" rx="95" ry="26" fill="none" stroke="#e9d5ff" strokeWidth="4" opacity="0.6" transform="rotate(-18 100 100)" />
          <circle cx="100" cy="100" r="62" fill="url(#planet1Grad)" />
          <ellipse cx="100" cy="100" rx="95" ry="26" fill="none" stroke="#a855f7" strokeWidth="8" opacity="0.8" transform="rotate(-18 100 100)" />
        </svg>
      </div>

      {/* Background Parallax Planet 2 (Cyan Cratered Moon) */}
      <div
        ref={planetRef2}
        className="absolute top-1/2 -left-24 w-56 md:w-96 h-56 md:h-96 pointer-events-none z-0 opacity-70"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_40px_rgba(34,211,238,0.25)]">
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
        className="absolute top-1/4 left-1/3 w-[450px] md:w-[700px] h-[450px] md:h-[700px] rounded-full bg-radial from-indigo-600/20 via-cyan-500/15 to-transparent blur-3xl pointer-events-none z-0"
      />

      {/* Foreground Stardust Particles Layer */}
      <div ref={debrisRef} className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/5 right-1/4 w-3 h-3 rounded-full bg-cyan-300 opacity-70 shadow-[0_0_10px_#22d3ee] animate-pulse" />
        <div className="absolute top-2/3 right-1/3 w-3.5 h-3.5 rounded-full bg-purple-400 opacity-60 shadow-[0_0_12px_#a855f7]" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-white opacity-90 shadow-[0_0_8px_#ffffff]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto space-y-16 md:space-y-28">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 md:space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 backdrop-blur-md text-cyan-300 text-[11px] md:text-xs font-mono tracking-wider shadow-lg shadow-cyan-950/50">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
            <span>PHASE 02 // DEEP PARALLAX TRAJECTORY</span>
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-indigo-300">
            Navigating the Deep Void
          </h2>
          <p className="text-slate-300 text-xs sm:text-base md:text-lg leading-relaxed">
            As altitude increases, environment density shifts. Scroll through key mission milestones logged during trans-orbital transit.
          </p>
        </div>

        {/* Narrative Logs Timeline Grid with Central Trajectory Beam */}
        <div className="relative">
          {/* Central Trajectory Progress Line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-slate-800 hidden md:block">
            <div
              ref={progressBeamRef}
              className="w-full h-full bg-gradient-to-b from-cyan-400 via-indigo-500 to-purple-500 origin-top transform scale-y-0 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {logs.map((log, index) => (
              <div
                key={log.id}
                ref={(el) => {
                  logCardsRef.current[index] = el;
                }}
                className="group relative p-6 md:p-9 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-cyan-400/60 backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Ambient Card Corner Glow */}
                <div className="absolute top-0 right-0 w-28 md:w-36 h-28 md:h-36 bg-cyan-500/10 rounded-bl-full blur-xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-500" />

                {/* Card Top Header */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 md:p-3 rounded-xl bg-slate-800/90 border border-white/10 group-hover:border-cyan-500/40 group-hover:scale-110 transition-all duration-300">
                      {renderIcon(log.iconName)}
                    </div>
                    <span className="text-xs font-mono text-cyan-400 tracking-wider">
                      {log.logNumber}
                    </span>
                  </div>
                  <div className="text-right font-mono text-xs text-slate-400">
                    <span className="text-cyan-300 font-bold text-sm">{log.metric}</span>{" "}
                    <span className="text-slate-500 block text-[10px]">{log.metricLabel}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2.5 md:space-y-3">
                  <h3 className="text-lg md:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {log.title}
                  </h3>
                  <p className="text-slate-300 text-xs md:text-base leading-relaxed font-normal">
                    {log.description}
                  </p>
                </div>

                {/* Card Footer Status */}
                <div className="mt-6 md:mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="flex items-center gap-2 text-cyan-400/90">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    STATUS: VERIFIED
                  </span>
                  <span className="text-slate-400">ENTRY #{index + 101}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
