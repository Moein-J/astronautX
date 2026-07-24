"use client";

export function HeroShootingStars() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Shooting Comet 1 */}
      <div className="absolute top-[12%] left-[10%] w-32 h-[1.5px] bg-linear-to-r from-transparent via-cyan-400 to-white -rotate-45 animate-pulse opacity-70" />

      {/* Shooting Comet 2 */}
      <div className="absolute top-[35%] right-[15%] w-44 h-[1.5px] bg-linear-to-r from-transparent via-purple-400 to-white -rotate-45 opacity-50" />

      {/* Ambient Floating Micro-Gems */}
      <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee] animate-ping" />
      <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 rounded-full bg-purple-300 shadow-[0_0_10px_#c084fc] animate-pulse" />
    </div>
  );
}
