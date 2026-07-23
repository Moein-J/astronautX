'use client'

import { RefObject } from 'react'

// ----- TYPES -----
type TTelemetryItem = {
  id: string
  step: string
  badge: string
  badgePulse?: boolean
  description: string
  borderColor: string
  badgeBg: string
  textColor: string
  positionClasses: string
}

type THeroTelemetryCalloutsProps = {
  calloutsRef: RefObject<(HTMLDivElement | null)[]>
}

// ----- MOCK-DATA -----
const TELEMETRY_CALLOUTS: TTelemetryItem[] = [
  {
    id: 'thrusters',
    step: '01 // HYPERGOLIC IGNITION',
    badge: '2.45G THRUST',
    badgePulse: true,
    description:
      'Primary booster stage engaged. Pitch angle 45° vertical ascent through troposphere.',
    borderColor: 'border-cyan-500/40 hover:border-cyan-400 shadow-cyan-950/60',
    badgeBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    textColor: 'text-cyan-400',
    positionClasses:
      '-top-4 left-1 sm:left-6 md:-left-8 lg:-left-20 max-w-[160px] sm:max-w-[220px] md:max-w-[260px]',
  },
  {
    id: 'maxq',
    step: '02 // KÁRMÁN LINE CROSSING',
    badge: 'ALT 85K FT',
    badgePulse: false,
    description:
      'Maximum dynamic pressure passed. Ionization shields active. Hull integrity 100% nominal.',
    borderColor:
      'border-purple-500/40 hover:border-purple-400 shadow-purple-950/60',
    badgeBg: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    textColor: 'text-purple-300',
    positionClasses:
      'top-1/4 right-1 sm:right-6 md:-right-8 lg:-right-20 max-w-[160px] sm:max-w-[220px] md:max-w-[260px]',
  },
  {
    id: 'orbit',
    step: '03 // ORBITAL INSERTION',
    badge: '27,650 KM/H',
    badgePulse: false,
    description:
      'Zero-G momentum locked. Trans-orbital flight path to Cosmos Outpost established.',
    borderColor:
      'border-indigo-500/40 hover:border-indigo-400 shadow-indigo-950/60',
    badgeBg: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    textColor: 'text-indigo-300',
    positionClasses:
      '-bottom-6 left-1/2 -translate-x-1/2 max-w-[190px] sm:max-w-[240px] md:max-w-[300px] text-center',
  },
]

export function HeroTelemetryCallouts({
  calloutsRef,
}: THeroTelemetryCalloutsProps) {
  return (
    <>
      {TELEMETRY_CALLOUTS.map((item, index) => {
        const isCentered = item.positionClasses.includes('text-center')

        return (
          <div
            key={item.id}
            ref={(el) => {
              calloutsRef.current[index] = el
            }}
            className={`pointer-events-auto absolute z-20 rounded-xl border bg-slate-950/90 p-2.5 opacity-0 shadow-2xl backdrop-blur-xl transition-colors duration-300 sm:p-3 ${item.borderColor} ${item.positionClasses}`}
          >
            <div
              className={`mb-0.5 flex items-center gap-1 sm:mb-1 sm:gap-1.5 ${
                isCentered ? 'justify-center' : 'justify-between'
              }`}
            >
              <span
                className={`font-mono text-[9px] font-bold tracking-wider sm:text-[10px] md:text-xs ${item.textColor}`}
              >
                {item.step}
              </span>
              <span
                className={`inline-flex items-center gap-0.5 rounded border px-1 py-0.5 font-mono text-[8px] sm:gap-1 sm:px-1.5 sm:text-[9px] ${item.badgeBg}`}
              >
                {item.badgePulse && (
                  <span className="h-1 w-1 animate-ping rounded-full bg-cyan-400 sm:h-1.5 sm:w-1.5" />
                )}
                {item.badge}
              </span>
            </div>
            <p className="font-sans text-[9px] leading-tight text-slate-300 sm:text-[10px] sm:leading-relaxed md:text-xs">
              {item.description}
            </p>
          </div>
        )
      })}
    </>
  )
}
