"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "./use-reduced-motion";

export function useSpacewalkParallax() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const evaAstroRef = useRef<HTMLDivElement | null>(null);
  const earthRimRef = useRef<HTMLDivElement | null>(null);
  const tetherPathRef = useRef<SVGPathElement | null>(null);
  const evaHotspotsRef = useRef<(HTMLDivElement | null)[]>([]);

  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const evaAstro = evaAstroRef.current;
    const earthRim = earthRimRef.current;
    const tetherPath = tetherPathRef.current;

    if (!container || !evaAstro || prefersReducedMotion) return;

    const mm = gsap.matchMedia();

    // Desktop Pinned Spacewalk Animation
    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=140%",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 1. Earth Rim rotate & scale up
      if (earthRim) {
        tl.to(
          earthRim,
          { scale: 1.25, rotate: 18, y: -60, ease: "none" },
          0,
        );
      }

      // 2. Astronaut EVA float across screen
      tl.to(
        evaAstro,
        {
          x: 140,
          y: -40,
          rotate: -14,
          scale: 1.15,
          duration: 1,
          ease: "sine.inOut",
        },
        0,
      );

      // 3. Tether path stretch animation
      if (tetherPath) {
        tl.to(
          tetherPath,
          { strokeDashoffset: 0, duration: 1, ease: "sine.inOut" },
          0,
        );
      }

      // 4. Sequential Hotspots Reveal
      const [h1, h2, h3] = evaHotspotsRef.current;

      if (h1) {
        tl.fromTo(
          h1,
          { opacity: 0, scale: 0.8, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.25, ease: "power2.out" },
          0.2,
        );
        tl.to(h1, { opacity: 0.35, duration: 0.15 }, 0.52);
        tl.to(h1, { opacity: 0, duration: 0.15 }, 0.85);
      }

      if (h2) {
        tl.fromTo(
          h2,
          { opacity: 0, scale: 0.8, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.25, ease: "power2.out" },
          0.48,
        );
        tl.to(h2, { opacity: 0.35, duration: 0.15 }, 0.72);
        tl.to(h2, { opacity: 0, duration: 0.15 }, 0.85);
      }

      if (h3) {
        tl.fromTo(
          h3,
          { opacity: 0, scale: 0.8, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.25, ease: "power2.out" },
          0.7,
        );
        tl.to(h3, { opacity: 0, duration: 0.15 }, 0.85);
      }
    });

    // Mobile Animation
    mm.add("(max-width: 767px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=90%",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      if (earthRim) {
        tl.to(earthRim, { scale: 1.15, rotate: 10, ease: "none" }, 0);
      }

      tl.to(
        evaAstro,
        {
          y: -40,
          scale: 1.05,
          duration: 1,
          ease: "sine.inOut",
        },
        0,
      );

      const [h1, h2, h3] = evaHotspotsRef.current;
      if (h1) {
        tl.fromTo(
          h1,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" },
          0.2,
        );
        tl.to(h1, { opacity: 0, duration: 0.15 }, 0.8);
      }
      if (h2) {
        tl.fromTo(
          h2,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" },
          0.45,
        );
        tl.to(h2, { opacity: 0, duration: 0.15 }, 0.8);
      }
      if (h3) {
        tl.fromTo(
          h3,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" },
          0.7,
        );
        tl.to(h3, { opacity: 0, duration: 0.15 }, 0.8);
      }
    });

    return () => {
      mm.revert();
    };
  }, [prefersReducedMotion]);

  return {
    containerRef,
    evaAstroRef,
    earthRimRef,
    tetherPathRef,
    evaHotspotsRef,
  };
}
