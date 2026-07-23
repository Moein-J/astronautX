import React from "react";
import { HeroParallax } from "./hero-parallax";

type THeroSectionProps = {
  id?: string;
};

export function HeroSection({ id = "liftoff" }: THeroSectionProps) {
  const content = {
    badgeText: "MISSION MISSION-01 // DEEP SPACE EXPEDITION",
    title: "Drift Beyond the Horizon",
    subtitle:
      "Embark on a scroll-driven storytelling journey through the infinite cosmos. Experience state-of-the-art parallax physics, interactive space mechanics, and modern web architecture.",
    ctaText: "Begin Journey",
  };

  return (
    <section id={id} className="relative w-full overflow-hidden min-h-screen">
      <HeroParallax
        badgeText={content.badgeText}
        title={content.title}
        subtitle={content.subtitle}
        ctaText={content.ctaText}
      />
    </section>
  );
}
