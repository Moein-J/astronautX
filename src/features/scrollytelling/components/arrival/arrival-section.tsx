import { ArrivalParallax } from './arrival-parallax'

// ----- TYPES -----
type TArrivalSectionProps = {
  id?: string
}

// ----- MOCK-DATA -----
const content = {
  title: 'Welcome to Station Cosmos Outpost 07',
  subtitle:
    'Your orbital voyage has successfully reached destination coordinates. Take command of the interactive Station-OS terminal below to run live diagnostics, adjust deflector shields, or trigger automated station docking.',
  ctaPrimary: 'Station Command Terminal',
  ctaSecondary: 'View Source Code',
}

export function ArrivalSection({ id = 'arrival' }: TArrivalSectionProps) {
  return (
    <section id={id} className="relative min-h-screen w-full bg-transparent">
      <ArrivalParallax
        title={content.title}
        subtitle={content.subtitle}
        ctaPrimary={content.ctaPrimary}
        ctaSecondary={content.ctaSecondary}
      />
    </section>
  )
}
