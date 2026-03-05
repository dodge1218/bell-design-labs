# SEO & Schema

- **Metadata** — Every route exports descriptive titles/descriptions via the App Router metadata API.
- **Sitemap & Robots** — `src/app/sitemap.ts` and `robots.ts` list all six pages for crawlers.
- **Structured Data** — Layout injects Organization + WebSite JSON-LD, Pricing adds Product + FAQ schema, and each page includes its own BreadcrumbList for clarity.
- **Content hierarchy** — H1/H2s mirror the spec (hero, pain points, pricing, etc.) for strong keyword signals.
- **Performance** — Lightweight components, CDN hosting assumption, and Inter via `next/font` keep CLS low.
