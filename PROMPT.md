You are building the DreamSiteBuilders.com website from scratch. Read REQUIREMENTS.md for the full spec and DSB_APPROVED_LIBRARIES.md for approved dependencies.

CRITICAL DESIGN RULES:
- White background, light grey (#f5f5f5), off-white (#fafafa) palette. NO dark theme.
- Clean, minimal, professional — think Linear.app / Stripe / Vercel aesthetic
- Brand accent: blue (#2563eb) for CTAs only. Everything else neutral.
- Typography: Inter font. Generous whitespace. Strong hierarchy.
- Subtle micro-interactions (hover states, smooth transitions)
- 60-30-10 color rule: white 60%, light grey/off-white 30%, blue accent 10%

BUILD ORDER:
1. Scaffold Next.js 15 App Router + TypeScript + Tailwind v4 + shadcn/ui (use pnpm)
2. Extract ALL pricing data, add-ons, plans, care plans, FAQs, comparison data, testimonials to src/lib/constants/ files — NOT inline in JSX. This enables A/B testing.
3. Build all 6 pages matching the spec in REQUIREMENTS.md:
   - Homepage (/) — hero, pain points, why-choose-us comparison table, 3-step process
   - Pricing (/pricing) — 3 tiers (Starter $200, Growth $500, Web App $1000), add-ons, care plans, domain, hosting, FAQ
   - Calculator (/calculator) — interactive cost calculator with live sidebar breakdown, all add-on categories, custom item input
   - Work (/work) — portfolio showcase, before/after, case study (Gatecrasher K9), stats, benefits marquee
   - Contact (/contact) — form (name, phone, email, service, subject, message), book-a-call CTA, intake form link, testimonials, next steps
   - Start Project (/start-project) — 4-step intake form with progress indicator
4. Create shared layout with:
   - Top banner: "Most Popular: Growth Website—$500 one-time—built in 7–14 days" (dismissible)
   - Nav header with logo text "DreamSite Builders" and mobile menu
   - Footer with links, social, copyright
5. Add SEO infrastructure:
   - src/app/sitemap.ts
   - src/app/robots.ts
   - Per-page metadata (title + description)
   - JSON-LD schemas (Organization, WebSite, Product for each plan, FAQ, BreadcrumbList)
6. Use Framer Motion for:
   - Subtle scroll-triggered reveals (fade-up)
   - Smooth page transitions
   - Hover state enhancements on cards and buttons
7. Use React Hook Form + Zod for contact form and start-project form
8. Make everything mobile-responsive. Tap targets >= 44px. No horizontal scroll.
9. Run: pnpm build — must pass with zero errors.

COMPONENT USAGE:
- shadcn/ui: Button, Card, Dialog, Table, Tabs, Input, Textarea, Label, Badge, Separator, Accordion, Select
- lucide-react for all icons
- Framer Motion for animations
- React Hook Form + @hookform/resolvers + Zod for forms
- clsx + tailwind-merge via cn() utility

DATA CONSTANTS to extract (src/lib/constants/):
- pricing.ts — tiers, features per tier, prices
- addons.ts — all add-on categories and items with prices
- care-plans.ts — monthly plan tiers
- comparison.ts — DreamSite vs Freelancers vs Agencies data
- faq.ts — all FAQ questions/answers
- testimonials.ts — all testimonials
- benefits.ts — benefits list for marquee
- site.ts — site name, description, email, URLs

When completely finished, run this exact command:
openclaw system event --text "Done: DSB website rebuilt — all 6 pages, white/clean design, interactive calculator, SEO, mobile responsive" --mode now
