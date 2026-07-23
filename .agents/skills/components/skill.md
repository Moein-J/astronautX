---
name: components
description: Create,modify and edit a component following this conventions
argument-hint: "Component name in kebab-case (e.g., dashboard-menu)"
---

Create,modify and edit a component named "$ARGUMENTS" following this exact conventions.

# When to use

Use this Skill when Agent needs to generate or modify a component file (e.g., `dashboard-menu.tsx`)
for a feature or shared component with correct folder placement, tsx structure, and props.

## Component structure

1. **Component name must follow:**

- kebab-case (e.g., `chat-history-item.tsx`)

2. **Placement:**

- Feature-specific → `src/features/{feature}/components/{component-name}.tsx`
- Shared/reusable → `src/shared/components/{category}/{component-name}.tsx`

3. **Client-side only components:**
   - Only add `use client` at the top if it uses hooks, state, or browser APIs **client-side.**

## Component Rules

- Components must be small and serve a **single responsibility.**
- Props type: `type T{ComponentName}Props = { ... }` — use `type`, not `interface`, with `T` prefix
- Single `props` parameter; destructure with defaults inside the body
- Create a custom hook for the component if the states, hooks, and functions grow.
- `cn()` for all dynamic className merging — import from `@/shared/lib/utils`
- Tailwind CSS only for styling — no inline styles
- shadcn components from `@/shared/components/ui/` for ui elements
- Responsive design with Tailwind classes
- Use `motion/react` (NOT `framer-motion`) for animations
- Pages in `src/app/**` must be pure — one line returning a feature component

## Template

Use the templates from `reference.md` for concrete output.

## Examples

See concrete examples in `examples.md`