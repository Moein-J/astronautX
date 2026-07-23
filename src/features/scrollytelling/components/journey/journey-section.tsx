import { JourneyParallax } from './journey-parallax'

// ----- TYPES -----
type TJourneySectionProps = {
  id?: string
}

// ----- MOCK-DATA -----
const logs = [
  {
    id: 'log-1',
    logNumber: 'LOG // 001',
    title: 'Atmospheric Escape Velocity',
    description:
      'Engine thrusters disengage as gravity drops to micro levels. Starfield layers expand into 3D space with high-speed scrub physics.',
    metric: '11.2 KM/S',
    metricLabel: 'VELOCITY',
    iconName: 'zap' as const,
  },
  {
    id: 'log-2',
    logNumber: 'LOG // 002',
    title: 'Nebula Anomaly Crossing',
    description:
      'Traversing ionizing cosmic dust clouds. Electro-magnetic deflector arrays absorb high-energy ambient particles without trajectory loss.',
    metric: '99.8%',
    metricLabel: 'SHIELD MATRIX',
    iconName: 'shield' as const,
  },
  {
    id: 'log-3',
    logNumber: 'LOG // 003',
    title: 'Gravitational Slingshot',
    description:
      'Using gas giant orbital momentum to accelerate towards deep-space outpost coordinates while conserving 84% primary thruster propellant.',
    metric: '+4.8G',
    metricLabel: 'ORBITAL SLING',
    iconName: 'compass' as const,
  },
  {
    id: 'log-4',
    logNumber: 'LOG // 004',
    title: 'Quantum Beacon Stream',
    description:
      'Locked onto telemetry beacon frequency from Destination Cosmos Station. Communication array transmitting live quantum data packets.',
    metric: '0.02 MS',
    metricLabel: 'LATENCY',
    iconName: 'radio' as const,
  },
]

export function JourneySection({ id = 'journey' }: TJourneySectionProps) {
  return (
    <section id={id} className="relative min-h-screen w-full bg-transparent">
      <JourneyParallax logs={logs} />
    </section>
  )
}
