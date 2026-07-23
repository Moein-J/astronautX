"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "./use-reduced-motion";

export function useArrivalParallax() {
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

  return {
    containerRef,
    stationRef,
  };
}
