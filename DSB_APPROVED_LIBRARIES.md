# DSB Approved Library Catalog
# Version: 1.0.0
# Owner: DreamSiteBuilders
# Last updated: 2026-03-04
# Purpose: Single source of truth for agent dependency selection. Agents MUST use this catalog before writing custom code.

## Policy

### Rules
1. **Library-first**: For every common UI/UX element, check this catalog before writing custom code.
2. **No scratch-build** for anything this catalog covers — unless documented in `docs/decisions/custom-code.md` with rationale.
3. **No web search for tooling** during builds. If a need isn't covered here, flag it and request a catalog expansion run.
4. **Pin versions**: Use exact or minor-range pins. No `latest` or `*`.
5. **Approval threshold**: ≥500 GitHub stars + active maintenance + no critical advisories.

### When to use custom code
- Catalog has no entry for the need
- Client explicitly requires a non-standard approach
- The approved lib would add disproportionate bundle size for a trivial use case
- Document every exception in `docs/decisions/custom-code.md`

---

## Framework & Core

| Library | Category | Use When | Version Strategy | Stars | Notes |
|---------|----------|----------|-----------------|-------|-------|
| Next.js | Framework | Always (default) | Pin major (16.x) | 130k+ | App Router default. Pages Router only if client requires. |
| TypeScript | Language | Always | Pin minor (5.6.x) | 100k+ | Strict mode enabled. |
| React | UI Runtime | Always (via Next.js) | Pin major (19.x) | 230k+ | — |

## UI Primitives & Component Systems

| Library | Category | Use When | Version Strategy | Stars | Notes |
|---------|----------|----------|-----------------|-------|-------|
| shadcn/ui | Component system | Default for all new projects | Copy-paste (not npm) | 80k+ | Built on Radix + Tailwind. Not a dependency — code lives in repo. |
| Radix UI | Headless primitives | When shadcn doesn't cover the need | Pin minor | 17k+ | A11y-first. Use via shadcn when possible. |
| Headless UI | Headless primitives | Tailwind-native projects without shadcn | Pin minor | 26k+ | Alternative to Radix. Pick one per project, don't mix. |

## Styling

| Library | Category | Use When | Version Strategy | Stars | Notes |
|---------|----------|----------|-----------------|-------|-------|
| Tailwind CSS | Utility CSS | Always (default) | Pin major (4.x) | 85k+ | Configure in `tailwind.config.ts`. |
| tailwind-merge | Class merging | Always with Tailwind | Pin minor | 4k+ | Use via `cn()` utility. |
| clsx | Conditional classes | Always with Tailwind | Pin minor | 8k+ | Lightweight. Pair with tailwind-merge. |
| class-variance-authority | Variant patterns | Component libraries | Pin minor | 6k+ | For typed component variants. |

## Forms & Validation

| Library | Category | Use When | Version Strategy | Stars | Notes |
|---------|----------|----------|-----------------|-------|-------|
| React Hook Form | Form management | Any form with >2 fields | Pin minor | 42k+ | Uncontrolled by default = performance. |
| Zod | Schema validation | Always (forms + API) | Pin minor | 35k+ | Single validation source for client + server. |
| @hookform/resolvers | RHF + Zod bridge | When using both | Pin minor | 2k+ | — |

## Data Fetching & State

| Library | Category | Use When | Version Strategy | Stars | Notes |
|---------|----------|----------|-----------------|-------|-------|
| TanStack Query | Server state | Client-side data fetching | Pin minor | 43k+ | Prefer Next.js RSC for initial loads; TanStack for mutations/polling. |
| nuqs | URL state | Search params as state | Pin minor | 4k+ | Type-safe URL state for Next.js. |
| Zustand | Client state | Complex client-only state | Pin minor | 50k+ | Only when React state/context isn't enough. |

## Tables & Data Display

| Library | Category | Use When | Version Strategy | Stars | Notes |
|---------|----------|----------|-----------------|-------|-------|
| TanStack Table | Data tables | Any sortable/filterable table | Pin minor | 25k+ | Headless. Pair with shadcn table components. |

## Icons

| Library | Category | Use When | Version Strategy | Stars | Notes |
|---------|----------|----------|-----------------|-------|-------|
| Lucide React | Icons | Always (default) | Pin minor | 12k+ | Tree-shakeable. Consistent with shadcn. |

## Animation & Motion

| Library | Category | Use When | Version Strategy | Stars | Notes |
|---------|----------|----------|-----------------|-------|-------|
| Framer Motion | Animation | Page transitions, complex animations | Pin minor | 25k+ | Heavy — only import what you use. |
| tailwindcss-animate | CSS animations | Simple transitions/reveals | Pin minor | 1k+ | Lightweight. Default for shadcn projects. |

## Authentication

| Library | Category | Use When | Version Strategy | Stars | Notes |
|---------|----------|----------|-----------------|-------|-------|
| NextAuth.js (Auth.js) | Auth | OAuth/social login | Pin minor (5.x) | 25k+ | Default for Next.js projects. |
| Clerk | Auth (managed) | Client wants zero auth maintenance | Pin minor | 5k+ | Paid. Faster to ship but vendor lock-in. |

## Database & ORM

| Library | Category | Use When | Version Strategy | Stars | Notes |
|---------|----------|----------|-----------------|-------|-------|
| Drizzle ORM | ORM | Default for new projects | Pin minor | 26k+ | Type-safe, lightweight, SQL-first. |
| Prisma | ORM | Client already uses Prisma | Pin minor | 40k+ | Heavier. Mature ecosystem. Don't mix with Drizzle. |
| Neon (serverless Postgres) | Database | Serverless/edge projects | Via connection string | N/A | Free tier available. Prefer over Supabase for simplicity. |

## Payments

| Library | Category | Use When | Version Strategy | Stars | Notes |
|---------|----------|----------|-----------------|-------|-------|
| Stripe (stripe + @stripe/stripe-js) | Payments | Any payment/subscription | Pin minor | 12k+ | Use Checkout Sessions for MVP, Elements for custom. |

## Email

| Library | Category | Use When | Version Strategy | Stars | Notes |
|---------|----------|----------|-----------------|-------|-------|
| Resend | Transactional email | Default | Pin minor | N/A | Simple API. |
| React Email | Email templates | HTML emails | Pin minor | 14k+ | JSX → HTML email. Pair with Resend. |

## File Upload & Media

| Library | Category | Use When | Version Strategy | Stars | Notes |
|---------|----------|----------|-----------------|-------|-------|
| UploadThing | File uploads | Default for Next.js | Pin minor | 4k+ | Handles S3/storage abstraction. |
| sharp | Image processing | Server-side image optimization | Pin minor | 30k+ | Next.js uses internally. |

## SEO & Analytics

| Library | Category | Use When | Version Strategy | Stars | Notes |
|---------|----------|----------|-----------------|-------|-------|
| next-seo (or Next.js Metadata API) | SEO | Always | Metadata API preferred | 8k+ | Use built-in Metadata API for App Router. |
| @vercel/analytics | Analytics | Vercel-deployed projects | Pin minor | N/A | Zero-config. |
| Plausible | Analytics | Privacy-first analytics | Script tag or proxy | N/A | No cookies. GDPR-friendly. |

## Testing

| Library | Category | Use When | Version Strategy | Stars | Notes |
|---------|----------|----------|-----------------|-------|-------|
| Vitest | Unit/integration tests | Default | Pin minor | 14k+ | Fast. ESM-native. |
| Playwright | E2E tests | Default | Pin minor | 70k+ | Cross-browser. Best DX. |
| Testing Library | Component tests | React component testing | Pin minor | 19k+ | Pair with Vitest. |

## Developer Tooling

| Library | Category | Use When | Version Strategy | Stars | Notes |
|---------|----------|----------|-----------------|-------|-------|
| ESLint | Linting | Always | Pin major (9.x) | 25k+ | — |
| Prettier | Formatting | Always | Pin major | 50k+ | — |
| Husky + lint-staged | Git hooks | Production repos | Pin minor | 33k+ / 13k+ | Pre-commit quality gates. |

## Deployment

| Platform | Use When | Notes |
|----------|----------|-------|
| Vercel | Default for Next.js | Free tier for MVPs. Production for clients. |
| Docker | Self-hosted / VPS | When client requires on-prem or non-Vercel. |
| Railway | Quick backend deploy | Good for standalone APIs / bots. |

---

## Banned Patterns (hard rules)

- ❌ Do NOT hand-code modals, dropdowns, tooltips, or accordions — use Radix/shadcn
- ❌ Do NOT use `create-react-app` — dead project
- ❌ Do NOT use Moment.js — use `date-fns` or native `Intl`
- ❌ Do NOT use jQuery or Bootstrap in new projects
- ❌ Do NOT use `axios` — use native `fetch` (Next.js extends it)
- ❌ Do NOT install random packages found via web search mid-build
- ❌ Do NOT use `any` in TypeScript — strict mode, always
- ❌ Do NOT commit `.env` files or secrets

## Date/Time

| Library | Category | Use When | Version Strategy | Stars | Notes |
|---------|----------|----------|-----------------|-------|-------|
| date-fns | Date manipulation | When native `Intl` isn't enough | Pin minor | 35k+ | Tree-shakeable. |
