"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "./use-reduced-motion";

export function useHeroParallax() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const heroContentRef = useRef<HTMLDivElement | null>(null);
  const astroWrapperRef = useRef<HTMLDivElement | null>(null);
  const starRingRef = useRef<HTMLDivElement | null>(null);
  const exoplanetRef = useRef<HTMLDivElement | null>(null);
  const scrollHintRef = useRef<HTMLDivElement | null>(null);
  const calloutsRef = useRef<(HTMLDivElement | null)[]>([]);

  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const heroContent = heroContentRef.current;
    const astroWrapper = astroWrapperRef.current;
    const starRing = starRingRef.current;
    const exoplanet = exoplanetRef.current;
    const scrollHint = scrollHintRef.current;

    if (!container || !heroContent || !astroWrapper || prefersReducedMotion) {
      return;
    }

    const mm = gsap.matchMedia();

    // Desktop Animation (Balanced Card Staging & Gentle Gradual Fade Out)
    mm.add("(min-width: 768px)", () => {
      const screenH = typeof window !== "undefined" ? window.innerHeight : 800;
      const maxY = Math.min(screenH * 0.15, 110);
      const targetScale = screenH < 700 ? 1.15 : screenH < 780 ? 1.35 : 1.65;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=125%", // Slightly extended end distance for generous card display time
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
        },
      });

      const [c1, c2, c3] = calloutsRef.current;

      // Ensure callouts start completely hidden
      if (c1) tl.set(c1, { autoAlpha: 0, scale: 0.96 }, 0);
      if (c2) tl.set(c2, { autoAlpha: 0, scale: 0.96 }, 0);
      if (c3) tl.set(c3, { autoAlpha: 0, scale: 0.96 }, 0);

      // Hero main typography & buttons fade out smoothly
      tl.to(
        heroContent,
        {
          autoAlpha: 0,
          y: -Math.min(screenH * 0.1, 75),
          scale: 0.92,
          duration: 0.3,
          ease: "none",
        },
        0,
      );

      // Scroll hint fades out
      if (scrollHint) {
        tl.to(scrollHint, { autoAlpha: 0, y: 20, duration: 0.2, ease: "none" }, 0);
      }

      // Cosmic background ring scale & exoplanet parallax drift
      if (starRing) {
        tl.to(
          starRing,
          { scale: 2.5, rotate: 120, opacity: 0.12, duration: 1, ease: "none" },
          0,
        );
      }

      if (exoplanet) {
        tl.to(
          exoplanet,
          { y: 80, rotate: 15, scale: 1.1, opacity: 0.4, duration: 1, ease: "none" },
          0,
        );
      }

      // Astronaut rig scaling & floating movement
      tl.to(
        astroWrapper,
        {
          scale: targetScale,
          y: -maxY,
          x: 10,
          rotateZ: -6,
          duration: 1,
          ease: "none",
        },
        0.1,
      );

      // Card 1: Thrusters (Enters 0.14 -> Holds until 0.45 -> Gentle Fade 0.45-0.58)
      if (c1) {
        tl.fromTo(
          c1,
          { autoAlpha: 0, scale: 0.96 },
          { autoAlpha: 1, scale: 1, duration: 0.18, ease: "none" },
          0.14,
        );
        tl.to(
          c1,
          { autoAlpha: 0, scale: 0.96, duration: 0.14, ease: "none" },
          0.45,
        );
      }

      // Card 2: Quantum Shielding (Enters 0.36 -> Holds until 0.68 -> Gentle Fade 0.68-0.80)
      if (c2) {
        tl.fromTo(
          c2,
          { autoAlpha: 0, scale: 0.96 },
          { autoAlpha: 1, scale: 1, duration: 0.18, ease: "none" },
          0.36,
        );
        tl.to(
          c2,
          { autoAlpha: 0, scale: 0.96, duration: 0.14, ease: "none" },
          0.68,
        );
      }

      // Card 3: Orbital Insertion (Enters 0.54 -> Holds comfortably until 0.88 -> Gentle gradual fade 0.88-1.02)
      if (c3) {
        tl.fromTo(
          c3,
          { autoAlpha: 0, scale: 0.96 },
          { autoAlpha: 1, scale: 1, duration: 0.2, ease: "none" },
          0.54,
        );
        tl.to(
          c3,
          { autoAlpha: 0, scale: 0.96, duration: 0.18, ease: "none" },
          0.88,
        );
      }
    });

    // Mobile Layout (NO PINNING: Clean, unpinned responsive layout)
    mm.add("(max-width: 767px)", () => {
      gsap.set(heroContent, { autoAlpha: 1, y: 0, scale: 1 });
      gsap.set(astroWrapper, { autoAlpha: 1, y: 0, scale: 1, rotateZ: 0 });

      const validCallouts = calloutsRef.current.filter(Boolean);
      validCallouts.forEach((card) => {
        if (card) gsap.set(card, { autoAlpha: 1, y: 0, scale: 1, x: 0 });
      });
    });

    return () => {
      mm.revert();
    };
  }, [prefersReducedMotion]);

  return {
    containerRef,
    heroContentRef,
    astroWrapperRef,
    starRingRef,
    exoplanetRef,
    scrollHintRef,
    calloutsRef,
  };
}
