"use client";

import { useHeroParallax } from "../../hooks/use-hero-parallax";
import { HeroBackgroundRing } from "./hero-background-ring";
import { HeroContent } from "./hero-content";
import { HeroAstronautWrapper } from "./hero-astronaut-wrapper";
import { HeroAscentTelemetry } from "./hero-ascent-telemetry";
import { HeroScrollHint } from "./hero-scroll-hint";
import { HeroLaunchpadSurface } from "./hero-launchpad-surface";
import { HeroSolarSystem } from "./hero-solar-system";
import { HeroShootingStars } from "./hero-shooting-stars";

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
    launchpadRef,
    solarSystemRef,
    scrollHintRef,
    calloutsRef,
  } = useHeroParallax();

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-dvh flex flex-col items-center justify-between py-4 sm:py-6 md:py-8 px-4 md:px-6 overflow-hidden bg-linear-to-b from-slate-950 via-slate-900/60 to-slate-950"
    >
      {/* Ambient Shooting Comets */}
      <HeroShootingStars />

      {/* Solar System Gateway (Zooms in as astronaut reaches deep space) */}
      <HeroSolarSystem solarSystemRef={solarSystemRef} />

      {/* Background Cosmic Energy Ring */}
      <HeroBackgroundRing starRingRef={starRingRef} />

      {/* Top Header Badge Spacer */}
      <div className="h-1 sm:h-2" />

      {/* Hero Central Content (Fades out during lift-off) */}
      <HeroContent
        heroContentRef={heroContentRef}
        badgeText={badgeText}
        title={title}
        subtitle={subtitle}
        ctaText={ctaText}
      />

      {/* Earth Launchpad Surface Platform (Bottom Ground at initial state) */}
      <HeroLaunchpadSurface launchpadRef={launchpadRef} />

      {/* Floating Astronaut Rig & Ascent Telemetry Callouts */}
      <div className="relative z-10 my-1.5 sm:my-3 md:my-4 flex items-center justify-center w-full max-w-4xl">
        <HeroAstronautWrapper astroWrapperRef={astroWrapperRef} />
        <HeroAscentTelemetry calloutsRef={calloutsRef} />
      </div>

      {/* Scroll Hint — Centered & hidden on short height screens (<700px) */}
      <div className="hidden min-h-[700px]:flex items-center justify-center">
        <HeroScrollHint scrollHintRef={scrollHintRef} />
      </div>
    </div>
  );
}
