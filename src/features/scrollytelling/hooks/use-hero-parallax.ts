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

    // Desktop Animation (Fast 0.5s Scrub, Smooth Touchpad Tracking & Linear Ease)
    mm.add("(min-width: 768px)", () => {
      const screenH = typeof window !== "undefined" ? window.innerHeight : 800;
      const maxY = Math.min(screenH * 0.18, 140);
      const targetScale = screenH < 750 ? 1.35 : 1.75;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=150%",
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
        },
      });

      const [c1, c2, c3] = calloutsRef.current;

      // Ensure callouts start completely hidden at scroll position 0 on desktop
      if (c1) tl.set(c1, { opacity: 0, scale: 0.95 }, 0);
      if (c2) tl.set(c2, { opacity: 0, scale: 0.95 }, 0);
      if (c3) tl.set(c3, { opacity: 0, scale: 0.95 }, 0);

      // Hero main typography & buttons fade out smoothly
      tl.to(
        heroContent,
        {
          opacity: 0,
          y: -Math.min(screenH * 0.12, 90),
          scale: 0.9,
          duration: 0.35,
          ease: "none",
        },
        0,
      );

      // Scroll hint fades out
      if (scrollHint) {
        tl.to(scrollHint, { opacity: 0, y: 20, duration: 0.2, ease: "none" }, 0);
      }

      // Cosmic background ring scale
      if (starRing) {
        tl.to(
          starRing,
          { scale: 2.8, rotate: 120, opacity: 0.15, duration: 1, ease: "none" },
          0,
        );
      }

      // Astronaut rig scaling & floating perspective movement (Clean 2D transform for 60fps touchpad smoothness)
      tl.to(
        astroWrapper,
        {
          scale: targetScale,
          y: -maxY,
          x: 15,
          rotateZ: -8,
          duration: 1,
          ease: "none",
        },
        0.1,
      );

      // Sequentially fade callout cards with 1:1 linear scrub matching touchpad scroll
      if (c1) {
        tl.fromTo(
          c1,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.22, ease: "none" },
          0.18,
        );
        tl.to(
          c1,
          { opacity: 0, scale: 0.95, duration: 0.22, ease: "none" },
          0.72,
        );
      }

      if (c2) {
        tl.fromTo(
          c2,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.22, ease: "none" },
          0.42,
        );
        tl.to(
          c2,
          { opacity: 0, scale: 0.95, duration: 0.22, ease: "none" },
          0.8,
        );
      }

      if (c3) {
        tl.fromTo(
          c3,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.22, ease: "none" },
          0.62,
        );
        tl.to(
          c3,
          { opacity: 0, scale: 0.95, duration: 0.2, ease: "none" },
          0.85,
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
