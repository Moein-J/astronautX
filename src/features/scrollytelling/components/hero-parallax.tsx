"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AstronautRig } from "./astronaut-rig";
import { useReducedMotion } from "../hooks/use-reduced-motion";
import { ChevronDown, Sparkles, Orbit } from "lucide-react";

type THeroParallaxProps = {
  title: string;
  subtitle: string;
  ctaText: string;
  badgeText: string;
};

export function HeroParallax({
  title,
  subtitle,
  ctaText,
  badgeText,
}: THeroParallaxProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const heroContentRef = useRef<HTMLDivElement | null>(null);
  const astroWrapperRef = useRef<HTMLDivElement | null>(null);
  const starRingRef = useRef<HTMLDivElement | null>(null);
  const scrollHintRef = useRef<HTMLDivElement | null>(null);

  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const heroContent = heroContentRef.current;
    const astroWrapper = astroWrapperRef.current;
    const starRing = starRingRef.current;
    const scrollHint = scrollHintRef.current;

    if (!container || !heroContent || !astroWrapper || prefersReducedMotion) {
      return;
    }

    const mm = gsap.matchMedia();

    // Desktop Animation (Pinned 3D Zoom & Perspective Drift)
    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=120%",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(heroContent, { opacity: 0, y: -100, scale: 0.9, duration: 0.45, ease: "power2.inOut" }, 0);
      tl.to(scrollHint, { opacity: 0, y: 30, duration: 0.2 }, 0);
      if (starRing) tl.to(starRing, { scale: 3.5, rotate: 120, opacity: 0.15, duration: 1 }, 0);
      tl.to(astroWrapper, { scale: 2.2, y: -220, x: 30, rotateZ: -15, rotateY: 20, duration: 1, ease: "sine.inOut" }, 0.1);
    });

    // Mobile Animation (Unpinned smooth fade & float)
    mm.add("(max-width: 767px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      tl.to(heroContent, { opacity: 0.3, y: -30, duration: 1 }, 0);
      tl.to(astroWrapper, { y: -25, scale: 1.1, duration: 1 }, 0);
      tl.to(scrollHint, { opacity: 0, duration: 0.2 }, 0);
    });

    return () => {
      mm.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-dvh flex flex-col items-center justify-between py-10 md:py-16 px-4 md:px-6 overflow-hidden bg-linear-to-b from-slate-950 via-slate-900/60 to-slate-950"
    >
      {/* Background Cosmic Energy Ring */}
      <div
        ref={starRingRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 md:w-162.5 h-75 md:h-162.5 rounded-full border border-cyan-500/20 bg-radial from-cyan-500/15 via-purple-600/10 to-transparent blur-3xl pointer-events-none"
      />

      {/* Top Header Badge Spacer */}
      <div className="h-2 md:h-6" />

      {/* Hero Central Content */}
      <div
        ref={heroContentRef}
        className="relative z-20 max-w-4xl w-full text-center flex flex-col items-center space-y-4 md:space-y-6 my-auto"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 backdrop-blur-md text-cyan-300 text-[11px] md:text-xs font-mono tracking-wider shadow-lg shadow-cyan-950/50">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
          <span>{badgeText}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-100 to-indigo-300 drop-shadow-md leading-[1.12]">
          {title}
        </h1>

        <p className="max-w-2xl text-xs sm:text-base md:text-xl text-slate-300 font-normal leading-relaxed px-2">
          {subtitle}
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-2 sm:px-0">
          <a
            href="#journey"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-linear-to-r from-cyan-500 via-indigo-500 to-blue-600 text-white font-semibold text-xs md:text-base tracking-wide shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 active:scale-95"
          >
            <span>{ctaText}</span>
            <Orbit className="w-4 h-4 text-cyan-200" />
          </a>
          <a
            href="#arrival"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-slate-900/80 border border-slate-700 hover:border-cyan-500/50 text-slate-200 font-medium text-xs md:text-base tracking-wide backdrop-blur-md hover:bg-slate-800 transition-all duration-300"
          >
            Terminal Interface
          </a>
        </div>
      </div>

      {/* Floating Astronaut Rig */}
      <div
        ref={astroWrapperRef}
        className="relative z-10 my-3 md:my-6 pointer-events-none scale-90 md:scale-110 flex items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl scale-75" aria-hidden="true" />
        <AstronautRig scale={1} />
      </div>

      {/* Scroll Hint — Centered */}
      <div
        ref={scrollHintRef}
        className="relative z-20 flex flex-col items-center justify-center text-center gap-1 text-slate-400 font-mono text-[11px] md:text-xs tracking-widest uppercase animate-bounce mb-1"
      >
        <span>SCROLL TO LAUNCH</span>
        <ChevronDown className="w-4 h-4 text-cyan-400" />
      </div>
    </div>
  );
}
