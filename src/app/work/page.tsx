import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Code2, MonitorSmartphone } from "lucide-react";

import { BenefitsMarquee } from "@/components/work/benefits-marquee";
import { JsonLd } from "@/components/seo/json-ld";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { workStats } from "@/lib/constants/content";
import { siteConfig } from "@/lib/constants/site";

const caseStudyHighlights = [
  "SMS-ready contact form with lead routing",
  "Schedule sync with live class availability",
  "Cinematic before/after gallery with credits",
];

const beforeAfter = {
  before: {
    title: "Before DreamSite",
    description: "Template-based layout with no lead capture and inconsistent branding across pages.",
    notes: ["No mobile nav", "Slow load time", "Generic stock photography"],
  },
  after: {
    title: "After DreamSite",
    description: "Custom storytelling site with animations, fast LCP, and automated follow-ups for every lead.",
    notes: ["Tactile CTAs", "Hero video + stats", "Automated intake"],
  },
};

export const metadata: Metadata = {
  title: "Recent Work & Case Studies",
  description: "See how DreamSite Builders transformed Gatecrasher K9 and other brands with lightning-fast builds.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Work",
      item: `${siteConfig.url}/work`,
    },
  ],
};

export default function WorkPage() {
  return (
    <>
      <div className="space-y-16 pb-20 pt-10">
      <section className="mx-auto max-w-6xl grid gap-10 px-4 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="space-y-6">
          <SectionHeading
            align="left"
            eyebrow="Recent work"
            title="Gatecrasher K9 — from dated template to high-converting brand hub"
            description="We rebuilt gck9.com with Next.js, React, and Tailwind to highlight trust, social proof, and lightning-fast booking."
          />
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="border border-slate-200 bg-[#f5f5f5]">Next.js</Badge>
            <Badge variant="secondary" className="border border-slate-200 bg-[#f5f5f5]">Tailwind</Badge>
            <Badge variant="secondary" className="border border-slate-200 bg-[#f5f5f5]">Framer Motion</Badge>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {caseStudyHighlights.map((point) => (
              <div key={point} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                {point}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 rounded-3xl border border-slate-200 bg-[#f8fafc] px-6 py-6">
            <div>
              <p className="text-sm text-slate-500">Primary goal</p>
              <p className="text-xl font-semibold text-slate-900">Drive more discovery calls</p>
            </div>
            <SeparatorVertical />
            <div>
              <p className="text-sm text-slate-500">Result</p>
              <p className="text-xl font-semibold text-slate-900">+38% qualified leads in 30 days</p>
            </div>
          </div>
          <Button asChild className="h-12 w-fit px-6 text-base">
            <Link href="/contact">
              Book A Call
              <ArrowUpRight className="ml-2 size-4" />
            </Link>
          </Button>
        </Reveal>
        <Reveal>
          <Card className="h-full border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900">Before / After Preview</CardTitle>
              <CardDescription>Toggle between the old experience and the modern relaunch.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="before" className="space-y-4">
                <TabsList className="bg-[#f5f5f5]">
                  <TabsTrigger value="before">Before</TabsTrigger>
                  <TabsTrigger value="after">After</TabsTrigger>
                </TabsList>
                <TabsContent value="before">
                  <ShowcasePanel {...beforeAfter.before} variant="before" />
                </TabsContent>
                <TabsContent value="after">
                  <ShowcasePanel {...beforeAfter.after} variant="after" />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <SectionHeading
          align="left"
          eyebrow="Measured impact"
          title="Performance metrics we obsess over"
          description="Every build ships monitored and optimized so real people feel the difference."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {workStats.map((stat) => (
            <Card key={stat.label} className="border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-4xl font-semibold text-slate-900">{stat.value}</CardTitle>
                <CardDescription className="text-sm text-slate-600">
                  {stat.label} · {stat.detail}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-4">
        <SectionHeading
          align="left"
          eyebrow="Benefits"
          title="Why service brands hire DreamSite"
          description="From automation to lead capture, everything ladders up to revenue."
        />
        <BenefitsMarquee />
      </section>

      <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-3xl border border-slate-200 bg-white px-6 py-8 text-center">
        <p className="text-lg font-semibold text-slate-900">Want your own transformation?</p>
        <p className="text-sm text-slate-600">Tell us about your next launch and we will map the before/after plan.</p>
        <div className="flex justify-center">
          <Button asChild className="h-12 px-8 text-base">
            <Link href="/start-project">Start A Project</Link>
          </Button>
        </div>
      </div>
      </div>
      <JsonLd data={breadcrumb} />
    </>
  );
}

type ShowcaseProps = {
  title: string;
  description: string;
  notes: string[];
  variant: "before" | "after";
};

function ShowcasePanel({ title, description, notes, variant }: ShowcaseProps) {
  return (
    <div className="space-y-4 rounded-2xl border border-slate-200 bg-[#f7f8fb] p-6">
      <div className="rounded-xl border border-dashed border-slate-300 bg-white/80 p-8 text-center">
        {variant === "before" ? (
          <MonitorSmartphone className="mx-auto size-12 text-slate-400" />
        ) : (
          <Code2 className="mx-auto size-12 text-slate-400" />
        )}
        <p className="mt-3 text-sm font-medium text-slate-700">{title}</p>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
      <ul className="space-y-2 text-sm text-slate-600">
        {notes.map((note) => (
          <li key={note} className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-slate-500" />
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SeparatorVertical() {
  return <span className="hidden h-12 w-px bg-slate-200 sm:inline-block" />;
}
