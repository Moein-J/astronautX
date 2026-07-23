import { ObservatoryParallax } from './observatory-parallax'

// ----- TYPES -----
type TObservatorySectionProps = {
  id?: string
}

// ----- MOCK-DATA -----

const discoveries = [
  {
    id: 'disc-1',
    catalogId: 'EXO-186F',
    title: 'Kepler Habitable System',
    category: 'EXOPLANET CANDIDATE',
    description:
      'Earth-sized terrestrial world orbiting in the conservative habitable zone of an M1 dwarf star. Atmospheric water vapor detected.',
    distance: '582 LIGHT YEARS',
    magnitude: '+12.4',
    spectralClass: 'SPECTRAL TYPE: M1V',
    gradient: 'from-cyan-500 via-blue-600 to-indigo-950',
    glowColor: 'hover:shadow-cyan-500/20',
  },
  {
    id: 'disc-2',
    catalogId: 'NEB-M16',
    title: 'Pillars of Creation',
    category: 'STELLAR NURSERY',
    description:
      'Columns of interstellar hydrogen gas and dust in the Eagle Nebula. Actively forming new star systems inside dark globule cores.',
    distance: '6,500 LIGHT YEARS',
    magnitude: '+6.0',
    spectralClass: 'SPECTRAL TYPE: H-II',
    gradient: 'from-purple-500 via-pink-600 to-slate-950',
    glowColor: 'hover:shadow-purple-500/20',
  },
  {
    id: 'disc-3',
    catalogId: 'BH-SGR-A',
    title: 'Event Horizon Horizon',
    category: 'SUPERMASSIVE SINGULARITY',
    description:
      'Gravitational lensing shadow surrounding the supermassive black hole at Galactic Center. Relativistic accretion disk velocity 0.3c.',
    distance: '26,000 LIGHT YEARS',
    magnitude: '+14.8',
    spectralClass: 'RELATIVISTIC PLASMA',
    gradient: 'from-amber-500 via-orange-600 to-slate-950',
    glowColor: 'hover:shadow-amber-500/20',
  },
]

export function ObservatorySection({
  id = 'observatory',
}: TObservatorySectionProps) {
  return (
    <section id={id} className="relative min-h-screen w-full bg-transparent">
      <ObservatoryParallax discoveries={discoveries} />
    </section>
  )
}
