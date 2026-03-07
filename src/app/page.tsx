import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CircleDot,
  Infinity,
  Layers3,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { Reveal } from "@/components/motion/reveal";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { SectionHeading } from "@/components/shared/section-heading";
import { SocialProofMarquee } from "@/components/home/social-proof";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { TestimonialsCarousel } from "@/components/home/testimonials-carousel";
import { TechStackCloud } from "@/components/home/tech-stack-cloud";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { pricingPlans } from "@/lib/constants/pricing";
import { testimonials } from "@/lib/constants/testimonials";
import { competitorComparison, whyUsPoints } from "@/lib/constants/comparison";
import { painPoints, processSteps } from "@/lib/constants/content";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const heroStats = [
  { label: "Launch timeline", prefix: "7–", value: 14, suffix: " days", decimals: 0 },
  { label: "Average response", prefix: "<", value: 4, suffix: " hrs", decimals: 0 },
  { label: "Core Web Vitals", value: 100, suffix: "% green", decimals: 0 },
];

const marqueeClients = [
  { name: "Northwind Ventures", icon: Building2 },
  { name: "Kindred Studio", icon: Sparkles },
  { name: "Ritual Wellness", icon: CircleDot },
  { name: "Gatecrasher K9", icon: ShieldCheck },
  { name: "Atlas Ops", icon: Layers3 },
  { name: "Summit Legal", icon: BadgeCheck },
];

const portfolioProjects = [
  {
    title: "Gatecrasher K9",
    category: "Specialty services",
    result: "+38% booked consults",
    palette: "from-[#1a1f3b] via-[#10142a] to-[#34217d]",
  },
  {
    title: "Ritual Wellness",
    category: "Health & Beauty",
    result: "Paid traffic now converts",
    palette: "from-[#051937] via-[#00224f] to-[#9f4dff]",
  },
  {
    title: "Northwind Ventures",
    category: "Capital firm",
    result: "Site speed 0.9s LCP",
    palette: "from-[#030b15] via-[#061e3f] to-[#20e3b2]",
  },
  {
    title: "Kindred Studio",
    category: "Creative agency",
    result: "+3x lead volume",
    palette: "from-[#1e0242] via-[#2a0a68] to-[#f472b6]",
  },
];

const techStackItems = [
  "Next.js 15",
  "Tailwind v4",
  "Framer Motion",
  "Vercel Edge",
  "TypeScript",
  "shadcn/ui",
  "Supabase",
  "Sanity CMS",
];

const trustSignals = [
  { icon: Zap, title: "Fast builds", detail: "7–14 day launch windows" },
  { icon: Sparkles, title: "SEO-ready", detail: "Metadata, JSON-LD, sitemap" },
  { icon: ShieldCheck, title: "Mobile-first", detail: "Tap targets + clean layouts" },
  { icon: Star, title: "Support", detail: "Direct, fast feedback loops" },
];

const homeBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.url,
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <div className="space-y-28 pb-24 pt-10 sm:space-y-32">
        <section className="relative isolate overflow-hidden px-4">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.25),_transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,_rgba(99,102,241,0.3)_1px,transparent_1px)] [background-size:32px_32px] opacity-50" />
          <div className="relative mx-auto max-w-6xl rounded-[40px] border border-white/10 bg-gradient-to-br from-[#040716] via-[#070c26] to-[#1a0f3f] px-6 py-16 text-white shadow-[0_40px_120px_rgba(15,23,42,0.55)] sm:px-10 lg:flex lg:items-center lg:gap-12">
            <Reveal className="space-y-8 lg:flex-1">
              <Badge className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                Conversion sprint
              </Badge>
              <div className="space-y-6">
                <h1 className={cn("text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl", spaceGrotesk.className)}>
                  We Build Websites That Convert
                </h1>
                <p className="text-lg text-white/80">
                  {siteConfig.description} Built with senior-level craft, motion polish, and performance budgets so you launch in days—not quarters.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="group h-14 rounded-2xl bg-white px-8 text-base font-semibold text-slate-900 shadow-[0_20px_80px_rgba(255,255,255,0.35)] transition hover:-translate-y-0.5"
                >
                  <Link href="/start-project">
                    Start a Project <ArrowUpRight className="ml-2 size-5 transition group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-14 rounded-2xl border-white/40 bg-transparent px-8 text-base text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/15 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/60">{stat.label}</p>
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      className="mt-2 text-2xl text-white"
                      decimals={stat.decimals ?? 0}
                    />
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.15} className="mt-12 h-full lg:mt-0 lg:flex-1">
              <div className="rounded-[32px] border border-white/15 bg-white/5 p-6 backdrop-blur">
                <div className="mb-6 flex items-center gap-3 text-sm text-white/70">
                  <Sparkles className="size-4 text-white" />
                  <span>Three-step launch playbook</span>
                </div>
                <div className="space-y-6">
                  {processSteps.map((step) => (
                    <div key={step.title} className="group flex gap-4 rounded-2xl border border-white/10 bg-white/0 p-4 transition hover:border-white/30">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-base font-semibold text-white">
                        {step.label}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{step.title}</p>
                        <p className="text-sm text-white/70">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-4">
          <div className="mx-auto max-w-6xl space-y-6 rounded-[32px] bg-slate-950 px-6 py-10 text-white">
            <div className="flex flex-col gap-4 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Trusted launch partner</p>
              <p className="text-lg text-white/80">
                Operators from venture studios, creative agencies, and scaling service brands trust DreamSite for premium builds under pressure.
              </p>
            </div>
            <SocialProofMarquee />
          </div>
        </section>

        <section id="pain-points" className="px-4">
          <div className="mx-auto max-w-6xl space-y-12">
            <SectionHeading
              align="left"
              eyebrow="Faster outcomes"
              title="Fix the four blockers holding your site back"
              description="We remove the bottlenecks that stall most redesigns so you can sell sooner."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {painPoints.map((pain, index) => (
                <Reveal key={pain.title} delay={index * 0.05}>
                  <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                    <div className="flex items-center gap-3 text-sm font-semibold text-slate-500">
                      <span className="flex size-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                        <BadgeCheck className="size-4" />
                      </span>
                      {pain.title}
                    </div>
                    <p className="mt-3 text-base text-slate-600">{pain.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {trustSignals.map((signal) => {
                const Icon = signal.icon;
                return (
                  <div key={signal.title} className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white to-slate-50 p-5">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <p className="mt-4 text-base font-semibold text-slate-900">{signal.title}</p>
                    <p className="text-sm text-slate-600">{signal.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="pricing" className="px-4">
          <div className="mx-auto max-w-6xl space-y-12">
            <SectionHeading
              eyebrow="Transparent pricing"
              title="Pick the build that matches your growth stage"
              description="Every plan ships with full strategy, site architecture, and polish. Custom add-ons stay flat-rate."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {pricingPlans.map((plan) => (
                <Reveal key={plan.name}>
                  <div
                    className={cn(
                      "relative flex h-full flex-col rounded-[32px] border border-white/20 bg-white/70 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.15)] backdrop-blur", 
                      plan.name === "Growth"
                        ? "bg-gradient-to-br from-[#645bff]/90 to-[#8a3ffc]/90 text-white"
                        : "bg-white"
                    )}
                  >
                    {plan.emphasis && (
                      <span
                        className={cn(
                          "mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em]",
                          plan.name === "Growth"
                            ? "border-white/40 bg-white/20 text-white"
                            : "border-primary/30 bg-primary/10 text-primary"
                        )}
                      >
                        {plan.emphasis}
                      </span>
                    )}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold">
                        {plan.name}
                      </h3>
                      <p className={cn("text-sm", plan.name === "Growth" ? "text-white/80" : "text-slate-600")}>{plan.description}</p>
                    </div>
                    <div className="mt-6 flex items-baseline gap-2">
                      <span className="text-4xl font-semibold">${plan.price}</span>
                      <span className={plan.name === "Growth" ? "text-white/70" : "text-slate-500"}>one-time</span>
                    </div>
                    <p className={cn("mt-2 text-sm", plan.name === "Growth" ? "text-white/80" : "text-slate-600")}>
                      {plan.turnaround} · {plan.idealFor}
                    </p>
                    <div className="mt-6 flex-1 space-y-3 text-sm">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <span className={cn(
                            "mt-1 flex size-5 items-center justify-center rounded-full text-xs",
                            plan.name === "Growth" ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                          )}>
                            ●
                          </span>
                          <p className={plan.name === "Growth" ? "text-white/85" : "text-slate-600"}>{feature}</p>
                        </div>
                      ))}
                    </div>
                    <Button
                      asChild
                      className={cn(
                        "mt-8 h-12 rounded-2xl text-base font-semibold transition hover:-translate-y-0.5",
                        plan.name === "Growth"
                          ? "bg-white text-slate-900"
                          : "bg-slate-900 text-white"
                      )}
                    >
                      <Link href="/start-project">{plan.cta}</Link>
                    </Button>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="px-4">
          <div className="mx-auto max-w-6xl space-y-12">
            <SectionHeading
              eyebrow="Launch-ready work"
              title="Custom builds with product-level polish"
              description="Motion, layered grids, and conversion copy that feel bespoke—without waiting three months."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {portfolioProjects.map((project, index) => (
                <Reveal key={project.title} delay={index * 0.05}>
                  <div className="group relative overflow-hidden rounded-[32px] border border-slate-100 bg-slate-900 text-white">
                    <div className={cn("h-72 w-full bg-gradient-to-br", project.palette)} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <p className="text-sm uppercase tracking-[0.3em] text-white/60">{project.category}</p>
                      <p className="mt-2 text-2xl font-semibold">{project.title}</p>
                      <p className="text-sm text-white/70">{project.result}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4">
          <div className="mx-auto max-w-6xl rounded-[32px] bg-gradient-to-r from-[#0f172a] via-[#111f49] to-[#3b82f6] px-6 py-14 text-white">
            <div className="space-y-12">
              <div className="space-y-4 text-center lg:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">Process</p>
                <h2 className="text-3xl font-semibold">A timeline you can screenshot to your team</h2>
                <p className="text-white/80">
                  Transparent, trackable, and obsessively organized so you always know the status. Screenshare-ready updates delivered throughout the sprint.
                </p>
              </div>
              <ProcessTimeline steps={processSteps} />
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/20 bg-white/5 px-6 py-5">
                <p className="text-sm text-white/80">Ready in under two weeks. Submit your intake today and get a full site preview this week.</p>
                <Button asChild className="h-12 rounded-2xl bg-white px-6 text-base font-semibold text-slate-900">
                  <Link href="/start-project">Start Project</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4">
          <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="rounded-[32px] border border-white/20 bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-10 text-white">
              <SectionHeading
                align="left"
                eyebrow="Testimonials"
                title="Teams trust us with high-stakes launches"
                description="Direct line to senior builders. Daily async updates. Zero agency fluff."
                tone="inverted"
              />
              <div className="mt-10">
                <TestimonialsCarousel testimonials={testimonials} />
              </div>
            </Reveal>
            <Reveal className="rounded-[32px] border border-slate-200/80 bg-white px-6 py-10">
              <SectionHeading
                align="left"
                eyebrow="Tech stack"
                title="Battle-tested tools without the bloat"
                description="We pick platforms your team can maintain after handoff. No proprietary lock-in."
              />
              <div className="mt-10">
                <TechStackCloud items={techStackItems} />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="why-us" className="px-4">
          <div className="mx-auto max-w-6xl space-y-12">
            <SectionHeading
              eyebrow="Why choose us"
              title="Agency-level polish minus the agency drag"
              description="Side-by-side with freelancers and agencies so you can see exactly where DreamSite Builders fits."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {whyUsPoints.map((point, index) => (
                <Reveal key={point.title} delay={index * 0.08}>
                  <Card className="h-full rounded-[28px] border-slate-200/80 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1">
                    <CardHeader className="space-y-4 p-0">
                      <Badge variant="secondary" className="w-fit rounded-full border border-border bg-secondary">
                        {point.title}
                      </Badge>
                      <CardDescription className="text-base text-slate-600">{point.detail}</CardDescription>
                    </CardHeader>
                  </Card>
                </Reveal>
              ))}
            </div>
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead>Attribute</TableHead>
                    <TableHead>DreamSite Builders</TableHead>
                    <TableHead>Freelancers</TableHead>
                    <TableHead>Agencies</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {competitorComparison.map((row) => (
                    <TableRow key={row.attribute}>
                      <TableCell className="font-medium text-slate-900">{row.attribute}</TableCell>
                      <TableCell>{row.dreamsite}</TableCell>
                      <TableCell className="text-slate-500">{row.freelancers}</TableCell>
                      <TableCell className="text-slate-500">{row.agencies}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>
      </div>
      <JsonLd data={homeBreadcrumb} />
    </>
  );
}
