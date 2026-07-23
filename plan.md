# Agent Prompt — "Astronaut in Space" Scroll-Interactive Landing Page


---

## Project Goal

Build a **Next.js 16 (App Router) + TypeScript** landing page for a technical assignment graded on scroll interactivity, code quality, performance, creativity, and UI polish. The theme is **an astronaut drifting through space**, told across 3 sections as a short storytelling journey. As the user scrolls, the astronaut and background layers move at different speeds (parallax), with sticky pinned moments and smooth scroll-linked transitions.

## Stack

Next.js is already scaffolded — don't reinitialize it. Add on top of it (using each library's official install docs, no hand-rolled config):

- **TypeScript**, **Tailwind CSS**
- **GSAP + ScrollTrigger** — primary engine for parallax, pinning, and scroll-scrubbed animation
- **Lenis** (`@studio-freight/lenis`) — smooth-scroll physics layer, synced with GSAP ScrollTrigger's `scrollerProxy`
- **Framer Motion** — only for small local UI micro-interactions (button hover/tap, cursor-follow glow), not the main scroll system
- SVG or optimized PNG/WebP layers for the astronaut and space elements (no Three.js/3D — keep it 2D layered-parallax for reliability and performance)

## Server vs. Client Components — this is a landing page, SEO and initial load matter

Default to **Server Components**. Do not mark whole pages or whole sections `"use client"`. Rules:

- Page-level layout, section wrappers, all text content (headings, copy, CTA labels), and static markup stay as **Server Components** so they're in the initial HTML for SEO/crawlers and don't ship unnecessary JS.
- Only the actual animated/interactive pieces become small, leaf-level Client Components: e.g. `<ParallaxLayer>`, `<AstronautRig>`, `<ScrollProgress>`, the Lenis provider, and any Framer Motion micro-interaction elements.
- Pattern: a Server Component section (`<HeroSection>`) renders its static text/structure directly, and passes/wraps only the moving visual bits in a client child (`<HeroParallax />`). Don't push `"use client"` up to the section or page level just because one child needs it.
- Add real `metadata` (title, description, OpenGraph) per page via Next's Metadata API since this is a landing page — that's free SEO the assignment doesn't explicitly ask for but reviewers notice.

## Lazy loading — use it, but selectively

- **Images:** use `next/image` everywhere; it lazy-loads below-the-fold images by default. Mark only the very first hero image with `priority` so LCP isn't delayed.
- **Below-the-fold sections (Section 3, any far-down content):** fine to `next/dynamic` import their client sub-components with `ssr: false` if they're heavy and not visible on initial paint.
- **Section 1 and the top of Section 2 (astronaut, first parallax layers):** do NOT lazy-load these — they're above/near the fold and are the first thing scored on "Interactive Scrolling." Lazy-loading something the user sees immediately just adds a pop-in delay and hurts first impression.
- **GSAP/Lenis libraries themselves:** fine to dynamically import inside the client components that use them (keeps them out of the initial server-rendered bundle) — just make sure this doesn't visibly delay the hero animation from being ready when the page loads.
- Rule of thumb: lazy-load *weight* (below-fold assets, off-screen sections), never lazy-load the *first-impression* interaction.

## Narrative Structure (3 sections, can expand to 4 if it strengthens the story)

1. **Section 1 — "Liftoff" (Hero, sticky/pinned intro)**
   Astronaut floats center-screen against a starfield. On scroll, the astronaut drifts, tilts, and the camera "zooms" past them (via scale/translate on layered elements) before releasing the pin into Section 2. Include a subtle scroll-hint indicator.

2. **Section 2 — "The Journey" (deep parallax, multiple layers)**
   Astronaut travels across a scrollytelling path — passing planets, debris, a nebula — each layer scrolling at a distinct speed ratio (e.g. stars 0.2x, mid planets 0.5x, astronaut/foreground 1x). Trigger small narrative text blocks that fade/slide in as they enter viewport, pinned briefly if it helps pacing.

3. **Section 3 — "Arrival" (destination / CTA)**
   Astronaut approaches a destination (planet, station, or "home") with a resolving animation, ending on a clear CTA (e.g. "Explore More" / product tagline — invent a plausible fictional product or story hook, per assignment's "free scenario" rule).

## Technical Requirements

- Clean component structure: separate components per section, a shared `ParallaxLayer` component, a `useLenis`/`useScrollAnimation` hook wrapping GSAP context setup/cleanup
- All GSAP/Lenis code must be client components (`"use client"`), dynamically imported where it helps initial load
- Respect `prefers-reduced-motion`: provide a reduced/no-parallax fallback
- Fully responsive: redesign parallax intensity and layout for mobile (lighter movement, stacked layers, no pinning on very small screens if it causes jank)
- Only animate `transform`/`opacity` (GPU-friendly), avoid layout-triggering properties in scroll callbacks
- Use `next/image` for all raster assets, lazy-load below-the-fold sections
- Properly kill/refresh ScrollTrigger instances on unmount and on resize
- No cloned templates — original layout and animation logic

## Deliverables to prepare alongside the code

- `README.md` including: project description, tech stack, how to run locally, **explicit AI usage section** (which AI tools were used, for which parts, what was generated vs. hand-edited), and design-decision rationale (why astronaut/space theme, why GSAP+Lenis over alternatives)
- Ready for deployment to Vercel

## Bonus ideas to consider if time allows

- One genuinely unusual micro-interaction (e.g. cursor becomes a small thruster trail, or scroll velocity affects astronaut rotation)
- Subtle ambient sound toggle (muted by default, user-initiated only)
- A polished loading/intro transition into Section 1

## Build order

1. Install TypeScript/Tailwind config if not already present, install GSAP, Lenis, Framer Motion per their official docs
2. Build static layout/content for all 3 sections first as Server Components (no animation) — confirm responsive structure and that content renders without JS
3. Introduce client boundaries only where needed; wire Lenis + ScrollTrigger sync
4. Add parallax layers section by section, test scroll smoothness at each step
5. Add micro-interactions and polish (spacing, alignment, consistency pass)
6. Performance pass (Lighthouse, check for scroll jank, verify SSR HTML output has real content, lazy-load audit)
7. Write README