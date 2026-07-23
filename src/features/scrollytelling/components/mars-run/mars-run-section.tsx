import React from "react";
import { MarsRunParallax } from "./mars-run-parallax";

type TMarsRunSectionProps = {
  id?: string;
};

export function MarsRunSection({ id = "mars-run" }: TMarsRunSectionProps) {
  return (
    <section id={id} className="relative w-full min-h-screen bg-slate-950">
      <MarsRunParallax />
    </section>
  );
}
