import { SmoothScrollProvider } from "@/shared/components/providers/smooth-scroll-provider";
import { StarfieldBackground } from "./starfield-background";
import { ThrusterCursor } from "./thruster-cursor";
import { ScrollProgressBar } from "./scroll-progress-bar";
import { HeroSection } from "./hero";
import { JourneySection } from "./journey";
import { ArrivalSection } from "./arrival";
import { SiteFooter } from "./site-footer";

export function ScrollytellingLandingPage() {
  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans antialiased overflow-x-hidden">
        {/* Global Ambient Interactive Canvas Background */}
        <StarfieldBackground />

        {/* Custom Thruster Particle Cursor */}
        <ThrusterCursor />

        {/* Top Scroll HUD Progress Bar */}
        <ScrollProgressBar />


        {/* Main Scrollytelling Narrative Sections */}
        <main className="relative z-10 flex flex-col">
          <HeroSection id="liftoff" />
          <JourneySection id="journey" />
          <ArrivalSection id="arrival" />
        </main>

        {/* Site Footer */}
        <SiteFooter />
      </div>
    </SmoothScrollProvider>
  );
}
