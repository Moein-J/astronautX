"use client";

import { useEffect, useState } from "react";
import { Compass } from "lucide-react";

type TScrollProgressBarProps = {
  className?: string;
};

export function ScrollProgressBar({ className = "" }: TScrollProgressBarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Disable scroll progress calculations strictly on mobile devices (width < 768px)
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 767px)").matches
    ) {
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(Math.min(100, Math.max(0, progress)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Immediate initial calculation on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 hidden md:block ${className}`}
    >
      {/* Real-time 60fps Glow bar (Instant bidirectional tracking without transition delay) */}
      <div
        className="h-1 bg-linear-to-r from-cyan-500 via-indigo-500 to-purple-500 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating HUD status indicator */}
      <div className="absolute top-4 left-6 hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-full bg-slate-950/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-cyan-400/90 tracking-wider shadow-lg">
        <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
        <span>ALTITUDE: {Math.round(scrollProgress * 420.5)} KM</span>
        <span className="text-slate-600">|</span>
        <span>TRAJECTORY: {Math.round(scrollProgress)}%</span>
      </div>
    </div>
  );
}