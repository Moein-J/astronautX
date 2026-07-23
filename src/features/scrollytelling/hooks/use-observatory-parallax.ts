"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "./use-reduced-motion";

export function useObservatoryParallax() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const validCards = cardsRef.current.filter(Boolean);
      validCards.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: (index % 3) * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, [prefersReducedMotion]);

  return {
    containerRef,
    cardsRef,
  };
}
