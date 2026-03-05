# Design System Decisions

- **Palette** — 60% white, 30% light greys (#f5f5f5/#fafafa), 10% DreamSite blue (#2563eb) reserved strictly for CTAs per brief.
- **Typography** — Inter via `next/font` for consistent, high-legibility sans-serif with generous tracking on headings.
- **Layout rhythm** — Max width capped at 6xl with wide gutters and rounded cards to mirror Linear/Stripe aesthetics.
- **Micro-interactions** — Framer Motion handles page fades, scroll reveals, marquee, and hover lifts; buttons include subtle transitions.
- **Accessibility** — Focus states respect Tailwind tokens, inputs use Labels, and forms show inline errors.
