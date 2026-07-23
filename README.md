## 📦 Package Installation & Local Setup

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+) and [pnpm](https://pnpm.io/) installed.

### 1. Clone & Install Dependencies

```bash
pnpm install
```

### 2. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Build for Production

```bash
pnpm build
pnpm start
```

# 🚀 Astronaut in Space — Scroll-Interactive Storytelling Landing Page

A high-performance **Next.js 16 (App Router) + TypeScript** landing page built with **GSAP + ScrollTrigger**, **Lenis Smooth Scroll**, and **Framer Motion**. Designed around an astronaut drifting through deep space, told across 5 interactive storytelling sections.

---

## 🌟 Features & Highlights

- **Scroll-Interactive Storytelling Narrative**: 5 scrollytelling phases ("Hero","Liftoff", "The Journey", "Arrival" ,"Observatory").
- **2D Layered Parallax Engine**: Multi-depth parallax effects for stars, planets, nebulae, and foreground space debris without the weight of full 3D runtimes.
- **GSAP + Lenis Sync**: Pinning, scrubbing, and inertia-driven smooth scrolling with `scrollerProxy` integration.
- **Interactive Station Terminal**: Terminal dashboard with live telemetry indicators, systems power sliders, docking sequencer, and `canvas-confetti` reward animation.
- **Interactive Canvas Starfield & Thruster Trail**: Mouse velocity-driven thruster stardust particles and twinkling starfield background.
- **Strict Server/Client Architecture**: Default Server Components for SEO and HTML streaming, isolating Client Components to interactive leaf nodes.
- **Accessibility & Reduced Motion**: Automatically detects `prefers-reduced-motion` settings and adapts parallax intensity for mobile devices.

---

## 🛠️ Tech Stack & Packages

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Scroll & Parallax**: [GSAP 3](https://gsap.com/) + [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- **Smooth Physics**: [Lenis Scroll](https://lenis.darkroom.engineering/)
- **Micro-Interactions**: [Motion (Framer Motion)](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📐 Architecture & Server vs. Client Strategy

- `src/app/page.tsx`: Pure single-line delegate page returning the main feature component.
- `src/app/layout.tsx`: Server Component providing global fonts, dark mode class, and comprehensive OpenGraph / SEO Metadata.
- `src/features/scrollytelling/components/`:
  - **Server Components**: `hero-section.tsx`, `journey-section.tsx`, `arrival-section.tsx` keep section markup, headers, and metadata in initial HTML output for search engines.
  - **Client Components**: `hero-parallax.tsx`, `journey-parallax.tsx`, `arrival-parallax.tsx`, `astronaut-rig.tsx`, `starfield-background.tsx`, `thruster-cursor.tsx`, `cosmos-dashboard.tsx`,.

---

## 🤖 AI Usage & Hand-Editing Documentation

**Workflow overview:** I didn't just prompt an agent and ship the output. The process had four distinct stages:

1. **Planning** — I worked with Claude to turn the assignment brief into a concrete technical plan: section structure, animation library choice (GSAP + ScrollTrigger + Lenis over Three.js, reasoning below), Server/Client component boundaries for SEO, and a lazy-loading strategy. I reviewed and adjusted this plan before any code was written.
2. **Custom skills** — I authored my own project-specific "skill" files (not published to GitHub) encoding my personal conventions for component structure, hook separation, and performance rules (e.g. transform/opacity-only animations, Server-Component-by-default). These were given to the coding agent alongside the plan so generated code would match my standards from the start, not need a full rewrite after.
3. **Code generation** — Using the plan and my custom skills as instructions, Antigravity AI generated the section components, the SVG astronaut rig, the smooth-scroll provider, and the interactive terminal dashboard.
4. **Manual review & refactor** — I reviewed the generated code section by section: refactored components, separated hooks out of component files that had them inlined, and fixed a recurring React anti-pattern the agent kept introducing — calling `setState` synchronously in a `useEffect` body on mount (causing an unnecessary cascading re-render), instead of computing initial state lazily via `useState`'s initializer. I caught and fixed this in both `useReducedMotion` and `SmoothScrollProvider` with Claude's help during a debugging pass, along with a missing-perspective bug that silently broke the astronaut's 3D scroll rotation, and a `bg-radial` Tailwind class that doesn't actually exist and was rendering nothing.

| Component / Task            | AI Tool Used   | AI Contribution                                                                                      | Hand-Edited / Custom Adjustments                                                                          |
| :-------------------------- | :------------- | :------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------- |
| **Overall Plan & Architecture** | Claude      | Turned the brief into a section-by-section plan, animation library decision, Server/Client split strategy, lazy-loading strategy | Reviewed and adjusted scope/priorities before implementation started                                       |
| **Component Architecture**  | Antigravity AI | Generated initial feature folder structure and boilerplate layout, following my custom project skills | Verified strict TypeScript typing (`type T...Props`), destructured defaults, and purity of `app/page.tsx` |
| **GSAP ScrollTrigger Sync** | Antigravity AI | Drafted ScrollTrigger timeline pinning and scrubbed parallax offsets                                 | Calibrated scroll trigger start/end breakpoints, lag smoothing, and Lenis ticker cleanup hooks; added scroll-synced narrative captions to the timeline |
| **Vector Astronaut SVG**    | Antigravity AI | Generated multi-layered SVG paths for helmet, suit, and backpack                                     | Enhanced glowing visor gradients, added thruster jet flame animations, and interactive float keyframes    |
| **Interactive Terminal**    | Antigravity AI | Built tabbed layout and docking state sequencer                                                      | Added `canvas-confetti` trigger, system sliders, and reactive status badges                               |
| **Debugging & Code Review** | Claude          | Diagnosed a recurring cascading-render bug (synchronous `setState` in effect bodies), a missing-perspective 3D bug, and an invalid Tailwind class | Applied the fixes across `useReducedMotion`, `SmoothScrollProvider`, and `hero-parallax.tsx`; separated hooks from components where they'd been inlined; added scroll-reset-on-reload behavior (`history.scrollRestoration = "manual"`) |

---

## 💡 Design Rationale

1. **Why Astronaut / Space Theme?**
   Deep space provides a natural canvas for multi-tiered depth perception. Stars, distant nebulae, mid-ground gas giants, and foreground debris move at distinct speeds to highlight smooth scroll physics.
2. **Why 2D Layered SVG over Three.js/3D?**
   2D SVG vectors provide crisp, high-DPI resolution without 3D WebGL context overhead, ensuring 60 FPS performance across mobile devices and legacy hardware.
3. **Why GSAP + Lenis over Pure CSS Parallax?**
   Pure CSS parallax is limited to fixed scroll ratios. GSAP ScrollTrigger allows exact section pinning, element scrubbing, and timeline synchronization with Lenis physics for a premium feel.
4. **Why plan + custom skills before code generation, instead of one-shot prompting?**
   One-shot prompts tend to drift from a project's own conventions over time — inconsistent component structure, hooks left inline, animations that don't respect `prefers-reduced-motion`. Writing my own reusable skill files up front meant every generated component started from my actual standards, and the review pass caught real correctness bugs (not just style nits) rather than re-litigating structure from scratch.