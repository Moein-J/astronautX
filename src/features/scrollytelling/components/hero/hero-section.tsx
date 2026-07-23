import { HeroParallax } from "./hero-parallax";

type THeroSectionProps = {
  id?: string;
};

export function HeroSection({ id = "liftoff" }: THeroSectionProps) {
  const content = {
    badgeText: "ASTRO-X // INTERSTELLAR EXPEDITION O-01",
    title: "Drift Beyond the Outer Rim",
    subtitle:
      "Experience a hyper-realistic, scroll-driven voyage across deep space. Powered by real-time orbital physics, reactive telemetry HUDs, and state-of-the-art web architecture.",
    ctaText: "Launch Trajectory",
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
