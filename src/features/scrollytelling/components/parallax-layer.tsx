"use client";

import React from "react";

type TParallaxLayerProps = {
  children: React.ReactNode;
  speed?: number; // Relative speed multiplier
  className?: string;
  depth?: number; // z-index positioning
};

export function ParallaxLayer({
  children,
  speed = 1,
  className = "",
  depth = 10,
}: TParallaxLayerProps) {
  return (
    <div
      data-parallax-speed={speed}
      className={`parallax-layer transition-transform ease-out ${className}`}
      style={{ zIndex: depth }}
    >
      {children}
    </div>
  );
}
