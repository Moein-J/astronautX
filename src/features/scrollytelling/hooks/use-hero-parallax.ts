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

      // Ensure callouts start completely hidden at scroll position 0
      if (c1) tl.set(c1, { opacity: 0 }, 0);
      if (c2) tl.set(c2, { opacity: 0 }, 0);
      if (c3) tl.set(c3, { opacity: 0 }, 0);

      // Hero main typography & buttons fade out
      tl.to(
        heroContent,
        {
          opacity: 0,
          y: -100,
          scale: 0.9,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0,
      );

      // Scroll hint fades out
      tl.to(scrollHint, { opacity: 0, y: 30, duration: 0.2 }, 0);

      // Cosmic background ring scale
      if (starRing) {
        tl.to(
          starRing,
          { scale: 3.5, rotate: 120, opacity: 0.15, duration: 1 },
          0,
        );
      }

      // Astronaut rig scaling & floating perspective movement
      tl.to(
        astroWrapper,
        {
          scale: 1.8,
          y: -180,
          x: 20,
          rotateZ: -12,
          rotateY: 15,
          duration: 1,
          ease: "sine.inOut",
        },
        0.1,
      );

      // Sequentially fade and slide text callouts with smooth power2 easing
      if (c1) {
        tl.fromTo(
          c1,
          { opacity: 0, x: -40, scale: 0.9 },
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
          { opacity: 0, x: 40, scale: 0.9 },
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
          { opacity: 0, y: 30, scale: 0.9 },
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

    // Mobile Animation (Pinned smooth 3D Zoom, perspective drift & callouts)
    mm.add("(max-width: 767px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=100%",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      const [c1, c2, c3] = calloutsRef.current;
      if (c1) tl.set(c1, { opacity: 0 }, 0);
      if (c2) tl.set(c2, { opacity: 0 }, 0);
      if (c3) tl.set(c3, { opacity: 0 }, 0);

      // Hero typography & CTA buttons fade out
      tl.to(
        heroContent,
        {
          opacity: 0,
          y: -60,
          scale: 0.92,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0,
      );

      tl.to(scrollHint, { opacity: 0, y: 20, duration: 0.2 }, 0);

      if (starRing) {
        tl.to(
          starRing,
          { scale: 2.2, rotate: 60, opacity: 0.2, duration: 1 },
          0,
        );
      }

      // Astronaut moves up smoothly on mobile
      tl.to(
        astroWrapper,
        {
          scale: 1.35,
          y: -100,
          rotateZ: -6,
          duration: 1,
          ease: "sine.inOut",
        },
        0.1,
      );

      // Callouts reveal sequentially on mobile
      if (c1) {
        tl.fromTo(
          c1,
          { opacity: 0, y: 20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: "power2.out" },
          0.2,
        );
        tl.to(
          c1,
          { opacity: 0.3, scale: 0.95, duration: 0.15, ease: "power1.inOut" },
          0.48,
        );
        tl.to(
          c1,
          { opacity: 0, duration: 0.15, ease: "power1.in" },
          0.82,
        );
      }

      if (c2) {
        tl.fromTo(
          c2,
          { opacity: 0, y: 20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: "power2.out" },
          0.44,
        );
        tl.to(
          c2,
          { opacity: 0.3, scale: 0.95, duration: 0.15, ease: "power1.inOut" },
          0.68,
        );
        tl.to(
          c2,
          { opacity: 0, duration: 0.15, ease: "power1.in" },
          0.82,
        );
      }

      if (c3) {
        tl.fromTo(
          c3,
          { opacity: 0, y: 20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: "power2.out" },
          0.66,
        );
        tl.to(
          c3,
          { opacity: 0, duration: 0.15, ease: "power1.in" },
          0.82,
        );
      }
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
