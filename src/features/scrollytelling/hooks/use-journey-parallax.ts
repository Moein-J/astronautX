"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "./use-reduced-motion";

export function useJourneyParallax() {
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
      // 1. Planet 1 (Purple Gas Giant) smooth vertical & rotational drift
      if (planetRef1.current) {
        gsap.to(planetRef1.current, {
          y: -220,
          rotate: 35,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // 2. Planet 2 (Cyan Moon) smooth vertical & rotational drift
      if (planetRef2.current) {
        gsap.to(planetRef2.current, {
          y: -300,
          rotate: -25,
          scale: 1.12,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // 3. Cosmic Nebula Cloud expansion
      if (nebulaRef.current) {
        gsap.to(nebulaRef.current, {
          y: -150,
          scale: 1.3,
          opacity: 0.85,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // 4. Foreground Stardust Debris Parallax
      if (debrisRef.current) {
        gsap.to(debrisRef.current, {
          y: -400,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // 5. Central Trajectory Line grow on scroll
      if (progressBeamRef.current) {
        gsap.to(progressBeamRef.current, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: progressBeamRef.current,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 0.8,
          },
        });
      }

      // 6. Smooth Offset Reveal per Journey Card as it enters view
      const validCards = logCardsRef.current.filter(Boolean);
      validCards.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            delay: index % 2 === 1 ? 0.12 : 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, [prefersReducedMotion]);

  return {
    sectionRef,
    planetRef1,
    planetRef2,
    nebulaRef,
    debrisRef,
    progressBeamRef,
    logCardsRef,
  };
}
