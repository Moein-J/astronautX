"use client";

import { useHeroParallax } from "../../hooks/use-hero-parallax";
import { HeroBackgroundRing } from "./hero-background-ring";
import { HeroContent } from "./hero-content";
import { HeroAstronautWrapper } from "./hero-astronaut-wrapper";
import { HeroTelemetryCallouts } from "./hero-telemetry-callouts";
import { HeroScrollHint } from "./hero-scroll-hint";

// ----- TYPES -----
type THeroParallaxProps = {
  title: string;
  subtitle: string;
  ctaText: string;
  badgeText: string;
};

export function HeroParallax(props: THeroParallaxProps) {
  const { badgeText, ctaText, subtitle, title } = props;

  // ----- HOOKS -----
  const {
    containerRef,
    heroContentRef,
    astroWrapperRef,
    starRingRef,
    scrollHintRef,
    calloutsRef,
  } = useHeroParallax();

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-dvh flex flex-col items-center justify-between py-4 sm:py-6 md:py-8 px-4 md:px-6 overflow-hidden bg-linear-to-b from-slate-950 via-slate-900/60 to-slate-950"
    >
      {/* Background Cosmic Energy Ring */}
      <HeroBackgroundRing starRingRef={starRingRef} />

      {/* Top Header Badge Spacer */}
      <div className="h-1 sm:h-2" />

      {/* Hero Central Content */}
      <HeroContent
        heroContentRef={heroContentRef}
        badgeText={badgeText}
        title={title}
        subtitle={subtitle}
        ctaText={ctaText}
      />

      {/* Floating Astronaut Rig & Telemetry Callouts Overlay */}
      <div className="relative z-10 my-1.5 sm:my-3 md:my-4 flex items-center justify-center w-full max-w-4xl">
        <HeroAstronautWrapper astroWrapperRef={astroWrapperRef} />
        <HeroTelemetryCallouts calloutsRef={calloutsRef} />
      </div>

      {/* Scroll Hint — Centered & hidden on short height screens (<700px) to prevent vertical overflow */}
      <div className="hidden min-h-[700px]:flex items-center justify-center">
        <HeroScrollHint scrollHintRef={scrollHintRef} />
      </div>
    </div>
  );
}
