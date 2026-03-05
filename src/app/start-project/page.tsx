import type { Metadata } from "next";

import { StartProjectForm } from "@/components/forms/start-project-form";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Start A Project",
  description: "Complete the four-step intake form so we can deliver an accurate quote within 24 hours.",
};

const quickFacts = [
  { label: "Time to complete", value: "3–4 minutes" },
  { label: "Response time", value: "<24 hours" },
  { label: "Kickoff", value: "Book call + plan" },
];

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Start Project",
      item: `${siteConfig.url}/start-project`,
    },
  ],
};

export default function StartProjectPage() {
  return (
    <>
      <div className="space-y-12 pb-20 pt-10">
        <section className="mx-auto max-w-4xl px-4">
          <SectionHeading
            align="left"
            eyebrow="Start project"
            title="Tell us about your next build"
            description="This four-step intake replaces endless calls. Share the essentials and we will reply with scope + timeline."
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {quickFacts.map((fact) => (
              <Card key={fact.label} className="border-slate-200 bg-white">
                <CardContent className="space-y-1 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{fact.label}</p>
                  <p className="text-lg font-semibold text-slate-900">{fact.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white px-6 py-8">
          <StartProjectForm />
        </section>
      </div>
      <JsonLd data={breadcrumb} />
    </>
  );
}
