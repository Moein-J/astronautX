# 🚀 Astronaut in Space — Scroll-Interactive Storytelling Landing Page

A high-performance **Next.js 16 (App Router) + TypeScript** landing page built with **GSAP + ScrollTrigger**, **Lenis Smooth Scroll**, and **Framer Motion**. Designed around an astronaut drifting through deep space, told across 3 interactive storytelling sections.

---

## 🌟 Features & Highlights

- **Scroll-Interactive Storytelling Narrative**: 3 scrollytelling phases ("Liftoff", "The Journey", "Arrival").
- **2D Layered Parallax Engine**: Multi-depth parallax effects for stars, planets, nebulae, and foreground space debris without the weight of full 3D runtimes.
- **GSAP + Lenis Sync**: Pinning, scrubbing, and inertia-driven smooth scrolling with `scrollerProxy` integration.
- **Interactive Station Terminal**: Terminal dashboard with live telemetry indicators, systems power sliders, docking sequencer, and `canvas-confetti` reward animation.
- **Web Audio API Synth**: Native browser sound synthesis creating a deep space ambient drone (muted by default with glassmorphic audio toggle).
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
- **Effects**: `canvas-confetti`, Web Audio API

---

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

---

## 📐 Architecture & Server vs. Client Strategy

- `src/app/page.tsx`: Pure single-line delegate page returning the main feature component.
- `src/app/layout.tsx`: Server Component providing global fonts, dark mode class, and comprehensive OpenGraph / SEO Metadata.
- `src/features/scrollytelling/components/`:
  - **Server Components**: `hero-section.tsx`, `journey-section.tsx`, `arrival-section.tsx` keep section markup, headers, and metadata in initial HTML output for search engines.
  - **Client Components**: `hero-parallax.tsx`, `journey-parallax.tsx`, `arrival-parallax.tsx`, `astronaut-rig.tsx`, `starfield-background.tsx`, `thruster-cursor.tsx`, `cosmos-dashboard.tsx`, `audio-controller.tsx`.

---

## 🤖 AI Usage & Hand-Editing Documentation

| Component / Task | AI Tool Used | AI Contribution | Hand-Edited / Custom Adjustments |
| :--- | :--- | :--- | :--- |
| **Component Architecture** | Antigravity AI | Generated initial feature folder structure and boilerplate layout per `components` skill conventions | Verified strict TypeScript typing (`type T...Props`), destructured defaults, and purity of `app/page.tsx` |
| **GSAP ScrollTrigger Sync** | Antigravity AI | Drafted ScrollTrigger timeline pinning and scrubbed parallax offsets | Calibrated scroll trigger start/end breakpoints, lag smoothing, and Lenis ticker cleanup hooks |
| **Vector Astronaut SVG** | Antigravity AI | Generated multi-layered SVG paths for helmet, suit, and backpack | Enhanced glowing visor gradients, added thruster jet flame animations, and interactive float keyframes |
| **Web Audio Synthesizer** | Antigravity AI | Provided oscillator and gain node Web Audio API boilerplate | Tuned frequency (55Hz sub drone + E3 harmonic), LFO pitch drift, and smooth gain fade transitions |
| **Interactive Terminal** | Antigravity AI | Built tabbed layout and docking state sequencer | Added `canvas-confetti` trigger, system sliders, and reactive status badges |

---

## 💡 Design Rationale

1. **Why Astronaut / Space Theme?**
   Deep space provides a natural canvas for multi-tiered depth perception. Stars, distant nebulae, mid-ground gas giants, and foreground debris move at distinct speeds to highlight smooth scroll physics.
2. **Why 2D Layered SVG over Three.js/3D?**
   2D SVG vectors provide crisp, high-DPI resolution without 3D WebGL context overhead, ensuring 60 FPS performance across mobile devices and legacy hardware.
3. **Why GSAP + Lenis over Pure CSS Parallax?**
   Pure CSS parallax is limited to fixed scroll ratios. GSAP ScrollTrigger allows exact section pinning, element scrubbing, and timeline synchronization with Lenis physics for a premium feel.
