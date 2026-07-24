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
  const launchpadRef = useRef<HTMLDivElement | null>(null);
  const solarSystemRef = useRef<HTMLDivElement | null>(null);
  const scrollHintRef = useRef<HTMLDivElement | null>(null);
  const calloutsRef = useRef<(HTMLDivElement | null)[]>([]);

  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const heroContent = heroContentRef.current;
    const astroWrapper = astroWrapperRef.current;
    const starRing = starRingRef.current;
    const launchpad = launchpadRef.current;
    const solarSystem = solarSystemRef.current;
    const scrollHint = scrollHintRef.current;

    if (!container || !heroContent || !astroWrapper || prefersReducedMotion) {
      return;
    }

    const mm = gsap.matchMedia();

    // Desktop Extended Scroll Duration Lift-Off & Solar System Gateway Timeline
    mm.add("(min-width: 768px)", () => {
      const screenH = typeof window !== "undefined" ? window.innerHeight : 800;
      const liftOffY = -Math.min(screenH * 0.28, 220);
      const initialScale = screenH < 750 ? 0.68 : 0.75;
      const targetSpaceScale = screenH < 750 ? 1.25 : 1.55;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=230%", // Extended scroll duration for immersive scrollytelling
          scrub: 1.2, // Smooth, luxurious scroll inertia tracking
          pin: true,
          anticipatePin: 1,
        },
      });

      const [c1, c2, c3] = calloutsRef.current;

      // 0. Initial positions (Instant autoAlpha reveal at exact initial scale)
      gsap.set(astroWrapper, { autoAlpha: 1, y: 0, scale: initialScale });
      if (launchpad) gsap.set(launchpad, { y: 0, autoAlpha: 1 });
      if (solarSystem) gsap.set(solarSystem, { autoAlpha: 0, scale: 0.6 });

      if (c1) tl.set(c1, { autoAlpha: 0, scale: 0.95 }, 0);
      if (c2) tl.set(c2, { autoAlpha: 0, scale: 0.95 }, 0);
      if (c3) tl.set(c3, { autoAlpha: 0, scale: 0.95 }, 0);

      // Phase 1: Launchpad Ignition & Hero Content Fade Out (0.0 -> 0.35)
      tl.to(
        heroContent,
        {
          autoAlpha: 0,
          y: -Math.min(screenH * 0.1, 75),
          scale: 0.9,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0,
      );

      if (scrollHint) {
        tl.to(scrollHint, { autoAlpha: 0, y: 20, duration: 0.25 }, 0);
      }

      // Launchpad platform slides down and recedes as astronaut lifts off
      if (launchpad) {
        tl.to(
          launchpad,
          { y: 350, autoAlpha: 0, duration: 0.45, ease: "power2.in" },
          0.05,
        );
      }

      // Astronaut lifts off vertically from y: 0 (ground level) into deep space (-liftOffY)
      tl.to(
        astroWrapper,
        {
          y: liftOffY,
          scale: targetSpaceScale,
          rotateZ: -6,
          duration: 1,
          ease: "power1.out",
        },
        0.05,
      );

      // Cosmic background ring scale
      if (starRing) {
        tl.to(
          starRing,
          { scale: 2.8, rotate: 120, opacity: 0.15, duration: 1 },
          0,
        );
      }

      // Phase 2: Solar System Gateway zooms into view in deep space (0.45 -> 1.0)
      if (solarSystem) {
        tl.to(
          solarSystem,
          { autoAlpha: 1, scale: 1.15, duration: 0.55, ease: "power2.out" },
          0.45,
        );
      }

      // Telemetry Card 1: Launchpad Ignition (0.10 -> 0.38)
      if (c1) {
        tl.fromTo(
          c1,
          { autoAlpha: 0, scale: 0.95, y: 15 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 0.14, ease: "power2.out" },
          0.1,
        );
        tl.to(c1, { autoAlpha: 0, scale: 0.95, duration: 0.12 }, 0.38);
      }

      // Telemetry Card 2: Atmospheric Ascent (0.39 -> 0.65)
      if (c2) {
        tl.fromTo(
          c2,
          { autoAlpha: 0, scale: 0.95, y: 15 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 0.14, ease: "power2.out" },
          0.39,
        );
        tl.to(c2, { autoAlpha: 0, scale: 0.95, duration: 0.12 }, 0.65);
      }

      // Telemetry Card 3: Solar System Gateway (0.66 -> 0.88)
      if (c3) {
        tl.fromTo(
          c3,
          { autoAlpha: 0, scale: 0.95, y: 15 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 0.14, ease: "power2.out" },
          0.66,
        );
        tl.to(c3, { autoAlpha: 0, scale: 0.95, duration: 0.12 }, 0.88);
      }
    });

    // Mobile Layout (NO PINNING: Clean, unpinned responsive layout)
    mm.add("(max-width: 767px)", () => {
      gsap.set(heroContent, { autoAlpha: 1, y: 0, scale: 1 });
      gsap.set(astroWrapper, { autoAlpha: 1, y: 0, scale: 1, rotateZ: 0 });

      if (solarSystem) gsap.set(solarSystem, { autoAlpha: 0.4, scale: 0.9 });
      if (launchpad) gsap.set(launchpad, { autoAlpha: 0.7, y: 0 });

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
    launchpadRef,
    solarSystemRef,
    scrollHintRef,
    calloutsRef,
  };
}
