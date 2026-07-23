import React from "react";
import { ArrivalParallax } from "./arrival-parallax";

type TArrivalSectionProps = {
  id?: string;
};

export function ArrivalSection({ id = "arrival" }: TArrivalSectionProps) {
  const content = {
    title: "Welcome to Cosmos Station",
    subtitle:
      "Your orbital voyage has successfully reached destination coordinates. Take command of the interactive station terminal below to run live diagnostics or explore full mission telemetry.",
    ctaPrimary: "Interact with Terminal",
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
