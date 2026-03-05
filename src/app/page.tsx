import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Search, ShieldCheck, Smartphone, Sparkles, Zap } from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { competitorComparison, whyUsPoints } from "@/lib/constants/comparison";
import { painPoints, processSteps } from "@/lib/constants/content";
import { siteConfig } from "@/lib/constants/site";

const heroHighlights = [
  { label: "Launch timeline", value: "7–14 days" },
  { label: "Average response", value: "<4 hours" },
  { label: "Core Web Vitals", value: "All green" },
];

const trustSignals = [
  { icon: Zap, title: "Fast builds", detail: "7–14 day launch windows" },
  { icon: Search, title: "SEO-ready", detail: "Metadata, JSON-LD, sitemap" },
  { icon: Smartphone, title: "Mobile-first", detail: "Tap targets + clean layouts" },
  { icon: ShieldCheck, title: "Support", detail: "Direct, fast feedback loops" },
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
      <div className="space-y-20 pb-20 pt-10">
      <section className="bg-gradient-to-b from-secondary/30 via-background to-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal className="space-y-6">
            <Badge variant="secondary" className="w-fit border border-border bg-secondary text-muted-foreground">
              Conversion-first build sprint
            </Badge>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                {siteConfig.tagline}
              </h1>
              <p className="text-lg text-slate-600">
                Launch a modern website that loads fast, looks custom, and turns browsers into leads without waiting months for a bloated agency process.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="h-12 px-6 text-base">
                <Link href="/start-project">Start a Project</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 px-6 text-base text-slate-900">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-border bg-card p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-xl font-semibold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="rounded-3xl border border-border bg-secondary/40 p-8 shadow-sm">
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <Sparkles className="size-4" />
              <span>Fast three-step build process</span>
            </div>
            <div className="mt-6 space-y-6">
              {processSteps.map((step) => (
                <div key={step.label} className="flex gap-4">
                  <div className="flex size-10 items-center justify-center rounded-full border border-slate-300 text-sm font-semibold text-slate-600">
                    {step.label}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{step.title}</p>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="grid gap-3 rounded-3xl border border-border bg-card/70 p-6 shadow-sm md:grid-cols-4">
          {trustSignals.map((signal) => {
            const Icon = signal.icon;
            return (
              <div key={signal.title} className="flex items-start gap-3 rounded-2xl bg-secondary/20 p-4">
                <div className="mt-0.5 flex size-9 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{signal.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{signal.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="pain-points" className="mx-auto max-w-6xl space-y-10 px-4">
        <SectionHeading
          align="left"
          eyebrow="Faster outcomes"
          title="Fix the four blockers holding your site back"
          description="We remove the bottlenecks that stall most redesigns so you can sell sooner."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {painPoints.map((pain, index) => (
            <Reveal key={pain.title} delay={index * 0.05}>
              <Card className="h-full border-slate-200 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <CheckCircle2 className="size-5 text-slate-400" />
                    {pain.title}
                  </CardTitle>
                  <CardDescription>{pain.detail}</CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="why-us" className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-6xl space-y-10 px-4">
          <SectionHeading
            eyebrow="Why choose us"
            title="Agency-level polish minus the agency drag"
            description="Side-by-side with freelancers and agencies so you can see exactly where DreamSite Builders fits."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {whyUsPoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 0.08}>
                <Card className="h-full border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit border border-border bg-secondary text-muted-foreground">
                      {point.title}
                    </Badge>
                    <CardDescription className="text-base text-slate-600">
                      {point.detail}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Reveal>
            ))}
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary">
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

      <section className="mx-auto max-w-6xl space-y-10 px-4">
        <SectionHeading
          align="left"
          eyebrow="Build sprint"
          title="Three steps to launch"
          description="Transparent, trackable, and obsessively organized so you always know the status."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.07}>
              <Card className="h-full border-slate-200 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-slate-900">
                    <span className="flex size-9 items-center justify-center rounded-full border border-slate-200 text-sm font-semibold">
                      {step.label}
                    </span>
                    {step.title}
                  </CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-border bg-secondary/30 px-6 py-8">
          <div>
            <p className="text-lg font-semibold text-slate-900">Ready in under two weeks</p>
            <p className="text-sm text-slate-600">Submit your intake today and get a full site preview this week.</p>
          </div>
          <Button asChild className="h-12 px-6 text-base">
            <Link href="/start-project">
              Start Project
              <ArrowUpRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>
      </div>
      <JsonLd data={homeBreadcrumb} />
    </>
  );
}
