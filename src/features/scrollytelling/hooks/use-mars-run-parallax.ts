"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "./use-reduced-motion";

export function useMarsRunParallax() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const marsPlanetRef = useRef<HTMLDivElement | null>(null);
  const astroOrbitRef = useRef<HTMLDivElement | null>(null);
  const astroRunnerRef = useRef<HTMLDivElement | null>(null);
  const surfaceMarkersRef = useRef<(HTMLDivElement | null)[]>([]);

  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const marsPlanet = marsPlanetRef.current;
    const astroOrbit = astroOrbitRef.current;
    const astroRunner = astroRunnerRef.current;

    if (
      !container ||
      !marsPlanet ||
      !astroOrbit ||
      !astroRunner ||
      prefersReducedMotion
    )
      return;

    const mm = gsap.matchMedia();

    // Desktop Pinned Mars Orbital Walk Timeline
    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=160%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 1. Physically rotate the Astronaut Orbit Container 360° around Mars rim
      tl.to(
        astroOrbit,
        {
          rotate: 360,
          ease: "none",
          duration: 1,
        },
        0,
      );

      // 2. Counter-rotate Mars in reverse (-180°) for double parallax planetary friction
      tl.to(
        marsPlanet,
        {
          rotate: -180,
          ease: "none",
          duration: 1,
        },
        0,
      );

      // 3. Proportional stride bounce for compact astronaut
      tl.to(
        astroRunner,
        {
          y: -6,
          repeat: 9,
          yoyo: true,
          ease: "power1.inOut",
          duration: 0.1,
        },
        0,
      );

      // 4. Reveal telemetry markers as astronaut reaches each quadrant
      const [m1, m2, m3] = surfaceMarkersRef.current;

      if (m1) {
        tl.fromTo(
          m1,
          { opacity: 0, scale: 0.8, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.2, ease: "power2.out" },
          0.15,
        );
        tl.to(m1, { opacity: 0.3, duration: 0.15 }, 0.45);
        tl.to(m1, { opacity: 0, duration: 0.15 }, 0.82);
      }

      if (m2) {
        tl.fromTo(
          m2,
          { opacity: 0, scale: 0.8, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.2, ease: "power2.out" },
          0.42,
        );
        tl.to(m2, { opacity: 0.3, duration: 0.15 }, 0.68);
        tl.to(m2, { opacity: 0, duration: 0.15 }, 0.82);
      }

      if (m3) {
        tl.fromTo(
          m3,
          { opacity: 0, scale: 0.8, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.2, ease: "power2.out" },
          0.65,
        );
        tl.to(m3, { opacity: 0, duration: 0.15 }, 0.82);
      }
    });

    // Mobile Unpinned Layout (NO PINNING: Ambient rotation & static card stack for mobile stability)
    mm.add("(max-width: 767px)", () => {
      // Ambient slow rotation of Mars on mobile
      const anim = gsap.to(marsPlanet, {
        rotate: -360,
        duration: 45,
        repeat: -1,
        ease: "none",
      });

      // Ensure markers remain visible in mobile card stack
      const validMarkers = surfaceMarkersRef.current.filter(Boolean);
      validMarkers.forEach((marker) => {
        if (marker) gsap.set(marker, { opacity: 1, y: 0, scale: 1 });
      });

      return () => {
        anim.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, [prefersReducedMotion]);

  return {
    containerRef,
    marsPlanetRef,
    astroOrbitRef,
    astroRunnerRef,
    surfaceMarkersRef,
  };
}
