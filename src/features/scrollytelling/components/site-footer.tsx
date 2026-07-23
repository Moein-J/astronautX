"use client";

import { ArrowUp, Orbit } from "lucide-react";
import { useLenisScroll } from "@/shared/components/providers/smooth-scroll-provider";

type TSiteFooterProps = {
  className?: string;
};

export function SiteFooter({ className = "" }: TSiteFooterProps) {
  const { lenisRef } = useLenisScroll();

  const handleScrollTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className={`relative z-20 w-full bg-slate-950 border-t border-white/10 text-slate-400 font-sans ${className}`}>
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand info */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2.5 text-white font-bold text-lg tracking-wider">
            <Orbit className="w-5 h-5 text-cyan-400 animate-spin-slow" />
            <span>ASTRONAUT IN SPACE</span>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            A Next.js 16 App Router scroll-interactive storytelling experience powered by GSAP ScrollTrigger & Lenis smooth physics.
          </p>
        </div>

        {/* Navigation & Back to top */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
          <a href="#liftoff" className="hover:text-cyan-400 transition-colors">
            [1] LIFTOFF
          </a>
          <a href="#journey" className="hover:text-cyan-400 transition-colors">
            [2] JOURNEY
          </a>
          <a href="#arrival" className="hover:text-cyan-400 transition-colors">
            [3] ARRIVAL
          </a>

          <button
            onClick={handleScrollTop}
            aria-label="Scroll back to top of page"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-white/10 text-cyan-300 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Copyright Sub-bar */}
      <div className="border-t border-white/5 bg-slate-950/80 py-4 px-6 text-center text-[11px] font-mono text-slate-500">
        <span>© {new Date().getFullYear()} ASTRONAUT SCROLL EXPERIENCE. BUILT WITH NEXT.JS 16, GSAP & LENIS.</span>
      </div>
    </footer>
  );
}
