import type { Metadata } from "next";

import { CalculatorExperience } from "@/components/calculator/calculator-experience";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Website Cost Calculator",
  description: "Mix and match packages, add-ons, and custom items to understand your total one-time investment.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Calculator",
      item: `${siteConfig.url}/calculator`,
    },
  ],
};

export default function CalculatorPage() {
  return (
    <>
      <div className="space-y-12 pb-20 pt-10">
        <section className="mx-auto max-w-4xl px-4">
          <SectionHeading
            align="left"
            eyebrow="Calculator"
            title="Build an instant budget"
            description="Use this interactive worksheet to plan your spend before you hop on a call."
          />
        </section>
        <section className="mx-auto max-w-6xl px-4">
          <CalculatorExperience />
        </section>
      </div>
      <JsonLd data={breadcrumb} />
    </>
  );
}
