import React from "react";
import { ArrivalParallax } from "./arrival-parallax";

type TArrivalSectionProps = {
  id?: string;
};

export function ArrivalSection({ id = "arrival" }: TArrivalSectionProps) {
  const content = {
    title: "Welcome to Station Cosmos Outpost 07",
    subtitle:
      "Your orbital voyage has successfully reached destination coordinates. Take command of the interactive Station-OS terminal below to run live diagnostics, adjust deflector shields, or trigger automated station docking.",
    ctaPrimary: "Station Command Terminal",
    ctaSecondary: "View Source Code",
  };

  return (
    <section id={id} className="relative w-full min-h-screen bg-slate-950">
      <ArrivalParallax
        title={content.title}
        subtitle={content.subtitle}
        ctaPrimary={content.ctaPrimary}
        ctaSecondary={content.ctaSecondary}
      />
    </section>
  );
}
