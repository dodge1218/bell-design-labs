# NEXT_TICKET.md — DSB Website Clone (bell-design-labs)

## Objective
Build a new, unique version of dreamsitebuilders.com at `/home/yin/.openclaw/workspace/bell-design-labs/`.
This is the DSB business site — a web design agency. Must contain all the same offers and content but with a **completely different visual style**.

## Design Requirements (HARD)
- **White background / light grey / off-white palette** — clean, minimal, professional
- NOT the current dark cyber-industrial theme
- Think: Apple, Linear, Vercel, Stripe — clean light design with subtle depth
- 60-30-10 rule: white(60%) / light grey or off-white(30%) / brand accent for CTAs(10%)
- Typography: clean sans-serif, generous whitespace, strong hierarchy
- Micro-interactions: subtle, polished (hover states, smooth transitions)

## Pages Required (matching current site structure)
1. **Homepage** (`/`)
   - Hero: "Get A Website That Drives New Leads" — tagline, CTA, 3-step process (submit form → we design → review & launch)
   - Pain points section: slow loading, outdated design, low conversion, poor mobile
   - Why Choose Us comparison (vs Freelancers, vs Agencies)
   - Comparison table with attributes: Ideal For, Costs, Initial Investment, Turnaround, Design Approach, Maintenance, SEO, Support, Guarantee, Performance
   - Top banner: "Most Popular: Growth Website—$500 one-time—built in 7–14 days"

2. **Pricing** (`/pricing`)
   - 3 tiers:
     - **Starter** — $200 one-time: clean modern design, basic SEO, fast loading, up to 5 pages, social links, responsive
     - **Growth** (Most Popular) — $500 one-time: everything in Starter + animations, full SEO, extra speed, contact forms, blog, CMS
     - **Web App** — $1,000 one-time: everything in Growth + premium design, backend, user logins/dashboards, admin panel, payments
   - Optional Add-ons (collapsed by default, "View all add-ons" button):
     - Core: User Accounts +$150, CMS/Blog +$100, Search +$50, Dark Mode +$50, Multi-language +$100, Newsletter +$50, Booking System +$100, Events Calendar +$100, Member Area +$150, Reviews/Testimonials +$50
     - E-commerce: Store +$300, Subscription +$200, Product Management +$100
     - Integrations: Payment Gateways +$100, Google Analytics +$25, Calendars +$50, Maps +$25, Social Feeds +$50, CRM +$100, Email Marketing +$50, Zapier +$50, Live Chat +$50
     - Design & Marketing: Logo & Branding (included in Starter), 3D Visuals +$300, Automated Workflows +$200, Speed Optimization +$150, Accessibility +$200
     - Add-Ons: SEO Setup +$100, Copywriting +$150, Email Setup +$50, Social Media Setup +$50, Legal Pages +$25, Multi-language Setup +$100
     - Advanced & AI: Admin Panel +$100, Database +$100, Security Bundle +$100, Support System +$100, Commenting +$50, AI Chat +$150, AI Assistant +$200, Custom AI Model +$500, Voice Agent +$400
   - Monthly Care Plans:
     - Standard $50/mo: security monitoring, weekly backups (1-week), updates, 1hr changes/mo, monthly report
     - Premium $100/mo (Recommended): priority security, 3-day fix SLA, 2hr changes/mo, 1hr features/mo, daily backups (2-week)
     - Enterprise $200/mo: priority security, 3-day fix SLA, 3hr changes/mo, 3hr features/mo, daily backups (30-day)
   - Domain: $20 setup (free with care plan), ~$12/yr renewal
   - Hosting included: HTTPS, daily backups, 24/7 uptime, fast servers — no extra cost
   - FAQ: own website? changes later? build time? hosting included? upgrade plans?

3. **Calculator** (`/calculator`)
   - Interactive cost calculator
   - Same add-on categories as pricing page
   - Live "Estimate Breakdown" sidebar: base package, selected add-ons, total
   - Custom item input (name + price)
   - "Start Project with this Budget" CTA

4. **Portfolio / Work** (`/work`)
   - Case study showcase: before/after comparison
   - Featured project: "Gatecrasher K9" (gck9.com) — Next.js, React, Tailwind
   - Stats: High Performance, Fast LCP, More Leads
   - Benefits marquee: Drive More Sales, Build Trust, Automate Support, Showcase Portfolio, Expand Reach, Capture Leads, 24/7 Presence, Elevate Brand

5. **Contact** (`/contact`)
   - Quick question form: name, phone (optional), email, service dropdown, subject, message
   - "Book a 15-min call" CTA
   - "Get an accurate quote" — link to start-project intake form
   - Testimonials: "Response time was incredible" (John D.), "No fluff, just great website" (Sarah M.)
   - What happens next: review → reply 24hr → kickoff/proposal
   - Email: contact@dreamsitebuilders.com

6. **Start Project** (`/start-project`) — 4-step intake form

## Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- lucide-react icons
- React Hook Form + Zod
- Framer Motion (subtle animations)

## Acceptance Criteria
- [ ] All 6 pages functional with matching content to current site
- [ ] White/grey/off-white design — visually distinct from current dark theme
- [ ] Calculator is interactive with live pricing
- [ ] Mobile responsive (all pages)
- [ ] `pnpm build` passes
- [ ] `pnpm lint` passes
- [ ] SEO: sitemap, robots.txt, metadata per page, JSON-LD
- [ ] Decision docs: dependencies, custom-code, architecture, ux-flow, design, seo, offer
- [ ] All data (pricing, addons, plans) extracted to constants files for A/B readiness
