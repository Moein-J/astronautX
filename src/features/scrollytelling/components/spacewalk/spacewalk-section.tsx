import React from "react";
import { SpacewalkParallax } from "./spacewalk-parallax";

type TSpacewalkSectionProps = {
  id?: string;
};

export function SpacewalkSection({
  id = "spacewalk",
}: TSpacewalkSectionProps) {
  return (
    <section id={id} className="relative w-full min-h-screen bg-slate-950">
      <SpacewalkParallax />
    </section>
  );
}
