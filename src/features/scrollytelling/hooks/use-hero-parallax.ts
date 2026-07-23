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
  const scrollHintRef = useRef<HTMLDivElement | null>(null);
  const calloutsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    // Desktop Animation (Pinned 3D Zoom, Perspective Drift & Smooth Scroll Text Callouts)
    mm.add("(min-width: 768px)", () => {
      // Dynamic vertical shift calculated relative to device height
      const screenH = typeof window !== "undefined" ? window.innerHeight : 800;
      const maxY = Math.min(screenH * 0.18, 140);
      const targetScale = screenH < 750 ? 1.35 : 1.75;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=150%",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      const [c1, c2, c3] = calloutsRef.current;

      // Ensure callouts start completely hidden at scroll position 0 on desktop
      if (c1) tl.set(c1, { opacity: 0 }, 0);
      if (c2) tl.set(c2, { opacity: 0 }, 0);
      if (c3) tl.set(c3, { opacity: 0 }, 0);

      // Hero main typography & buttons fade out
      tl.to(
        heroContent,
        {
          opacity: 0,
          y: -Math.min(screenH * 0.12, 90),
          scale: 0.9,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0,
      );

      // Scroll hint fades out
      if (scrollHint) {
        tl.to(scrollHint, { opacity: 0, y: 20, duration: 0.2 }, 0);
      }

      // Cosmic background ring scale
      if (starRing) {
        tl.to(
          starRing,
          { scale: 2.8, rotate: 120, opacity: 0.15, duration: 1 },
          0,
        );
      }

      // Astronaut rig scaling & floating perspective movement with dynamic screen-height bounding
      tl.to(
        astroWrapper,
        {
          scale: targetScale,
          y: -maxY,
          x: 15,
          rotateZ: -10,
          rotateY: 12,
          duration: 1,
          ease: "sine.inOut",
        },
        0.1,
      );

      // Sequentially fade and slide text callouts with smooth power2 easing
      if (c1) {
        tl.fromTo(
          c1,
          { opacity: 0, x: -30, scale: 0.9 },
          { opacity: 1, x: 0, scale: 1, duration: 0.2, ease: "power2.out" },
          0.18,
        );
        tl.to(
          c1,
          { opacity: 0.3, scale: 0.95, duration: 0.15, ease: "power1.inOut" },
          0.48,
        );
        tl.to(
          c1,
          { opacity: 0, scale: 0.9, duration: 0.15, ease: "power1.in" },
          0.82,
        );
      }

      if (c2) {
        tl.fromTo(
          c2,
          { opacity: 0, x: 30, scale: 0.9 },
          { opacity: 1, x: 0, scale: 1, duration: 0.2, ease: "power2.out" },
          0.44,
        );
        tl.to(
          c2,
          { opacity: 0.3, scale: 0.95, duration: 0.15, ease: "power1.inOut" },
          0.68,
        );
        tl.to(
          c2,
          { opacity: 0, scale: 0.9, duration: 0.15, ease: "power1.in" },
          0.82,
        );
      }

      if (c3) {
        tl.fromTo(
          c3,
          { opacity: 0, y: 15, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: "power2.out" },
          0.66,
        );
        tl.to(
          c3,
          { opacity: 0, scale: 0.9, duration: 0.15, ease: "power1.in" },
          0.82,
        );
      }
    });

    // Mobile Layout (NO PINNING: Clean, unpinned responsive layout)
    mm.add("(max-width: 767px)", () => {
      gsap.set(heroContent, { opacity: 1, y: 0, scale: 1 });
      gsap.set(astroWrapper, { opacity: 1, y: 0, scale: 1, rotateZ: 0 });

      const validCallouts = calloutsRef.current.filter(Boolean);
      validCallouts.forEach((card) => {
        if (card) gsap.set(card, { opacity: 1, y: 0, scale: 1, x: 0 });
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
    scrollHintRef,
    calloutsRef,
  };
}
