# Architecture Notes

- **App Router + shared layout** — Root layout wires banner, nav, footer, and page transitions once, then every page is a server component by default with isolated client islands for interactivity.
- **Constants-driven content** — All pricing, add-ons, FAQs, testimonials, benefits, and site configs live under `src/lib/constants` so marketing can tweak offers without touching JSX.
- **Feature modules** — Forms, calculator, layout, SEO helpers, and work marquee live in dedicated component folders to keep concerns separate and tree-shake cleanly.
- **SEO plumbing** — `metadata` exports, sitemap/robots routes, and JSON-LD helpers sit close to their pages to keep structured data coupled with the screen it describes.
