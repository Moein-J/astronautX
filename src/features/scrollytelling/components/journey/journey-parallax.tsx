'use client'

import { useJourneyParallax } from '../../hooks/use-journey-parallax'
import { JourneyBackgroundPlanets } from './journey-background-planets'
import { JourneyHeader } from './journey-header'
import { JourneyTrajectoryBeam } from './journey-trajectory-beam'
import { JourneyCardItem, TNarrativeLog } from './journey-card-item'

// ----- TYPES -----
type TJourneyParallaxProps = {
  logs: TNarrativeLog[]
}

export function JourneyParallax({ logs }: TJourneyParallaxProps) {
  // ----- HOOKS -----
  const {
    sectionRef,
    planetRef1,
    planetRef2,
    nebulaRef,
    debrisRef,
    progressBeamRef,
    logCardsRef,
  } = useJourneyParallax()

  return (
    <div
      ref={sectionRef}
      className="relative w-full overflow-hidden px-4 py-16 sm:py-24 md:px-6 md:py-36"
    >
      {/* Background Planets & Nebula Visuals */}
      <JourneyBackgroundPlanets
        planetRef1={planetRef1}
        planetRef2={planetRef2}
        nebulaRef={nebulaRef}
        debrisRef={debrisRef}
      />

      {/* Main Content Container */}
      <div className="relative z-20 mx-auto max-w-5xl space-y-10 sm:space-y-16 md:space-y-28">
        {/* Section Header */}
        <JourneyHeader />

        {/* Narrative Logs Timeline Grid with Central Trajectory Beam */}
        <div className="relative">
          {/* Central Trajectory Progress Line */}
          <JourneyTrajectoryBeam progressBeamRef={progressBeamRef} />

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-12">
            {logs.map((log, index) => (
              <JourneyCardItem
                key={log.id}
                log={log}
                index={index}
                setCardRef={(el) => {
                  logCardsRef.current[index] = el
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
