# Dependencies Decision Log

- **Next.js 15.5.12 / React 19** — Required framework per spec. App Router leveraged for streaming + metadata API.
- **Tailwind CSS v4 + shadcn/ui** — Provides utility-first styling with composable components (button, card, table, tabs, etc.) approved in the catalog.
- **clsx + tailwind-merge** — Backed by the approved stack for safe class composition.
- **Framer Motion 12.35.0** — Powers page transitions, scroll reveals, and marquee animations per micro-interaction requirement.
- **React Hook Form + Zod + @hookform/resolvers** — Required for contact + intake forms to guarantee validation parity.
- **lucide-react** — Approved icon set to keep visuals consistent and lightweight.
- **shadcn CLI** — Pulled component primitives into the repo instead of shipping another dependency tree.
