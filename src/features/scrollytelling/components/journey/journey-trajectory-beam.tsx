"use client";

import React, { RefObject } from "react";

type TJourneyTrajectoryBeamProps = {
  progressBeamRef: RefObject<HTMLDivElement | null>;
};

export function JourneyTrajectoryBeam({
  progressBeamRef,
}: TJourneyTrajectoryBeamProps) {
  return (
    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-slate-800 hidden md:block">
      <div
        ref={progressBeamRef}
        className="w-full h-full bg-linear-to-b from-cyan-400 via-indigo-500 to-purple-500 origin-top transform scale-y-0 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
      />
    </div>
  );
}
