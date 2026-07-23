import { MarsRunParallax } from './mars-run-parallax'

type TMarsRunSectionProps = {
  id?: string
}

export function MarsRunSection({ id = 'mars-run' }: TMarsRunSectionProps) {
  return (
    <section id={id} className="relative min-h-screen w-full bg-transparent">
      <MarsRunParallax />
    </section>
  )
}
