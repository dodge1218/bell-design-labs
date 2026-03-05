import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

import { AddOnsGrid } from "@/components/pricing/addons";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { JsonLd } from "@/components/seo/json-ld";
import { addOnCategories } from "@/lib/constants/addons";
import { carePlans } from "@/lib/constants/care-plans";
import { faqs } from "@/lib/constants/faq";
import { pricingPlans } from "@/lib/constants/pricing";
import { siteConfig } from "@/lib/constants/site";
import { formatCurrency } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Transparent Website Pricing",
  description: "Choose a one-time package, layer optional add-ons, and add a care plan only if you need it.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Pricing",
      item: `${siteConfig.url}/pricing`,
    },
  ],
};

const productSchemas = pricingPlans.map((plan) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: `${plan.name} Website Package`,
  description: plan.description,
  brand: {
    "@type": "Brand",
    name: siteConfig.name,
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: plan.price,
    availability: "https://schema.org/InStock",
    url: `${siteConfig.url}/start-project`,
  },
}));

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function PricingPage() {
  return (
    <>
      <div className="space-y-20 pb-20 pt-10">
      <section className="mx-auto max-w-6xl space-y-8 px-4">
        <SectionHeading
          align="left"
          eyebrow="Pricing"
          title="Flat-rate plans with everything spelled out"
          description="Pick the package that fits today, layer on add-ons as you scale, and never worry about surprise invoices."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Reveal key={plan.name}>
              <Card
                className={`h-full border-slate-200 bg-white ${
                  plan.emphasis === "Most Popular" ? "lg:-translate-y-2 lg:shadow-xl" : ""
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl text-slate-900">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </div>
                    {plan.emphasis && (
                      <Badge variant="secondary" className="border border-slate-200 bg-[#f5f5f5] text-slate-700">
                        {plan.emphasis}
                      </Badge>
                    )}
                  </div>
                  <div>
                    <p className="text-4xl font-semibold text-slate-900">{formatCurrency(plan.price)}</p>
                    <p className="text-sm text-slate-500">One-time</p>
                  </div>
                  <div className="space-y-1 text-sm text-slate-600">
                    <p>Ideal for: {plan.idealFor}</p>
                    <p>Turnaround: {plan.turnaround}</p>
                    <p>Guarantee: {plan.guarantee}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-slate-700">
                        <Check className="mt-0.5 size-4 text-slate-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/start-project">{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-4" id="add-ons">
        <SectionHeading
          align="left"
          eyebrow="Add-ons"
          title="Optional upgrades when you need them"
          description="Collapsed by default so you only expand what you care about."
        />
        <AddOnsGrid categories={addOnCategories} />
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-4" id="care-plans">
        <SectionHeading
          align="left"
          eyebrow="Care plans"
          title="Ongoing support that scales with you"
          description="Only pay for proactive maintenance if it would save your team time."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {carePlans.map((plan) => (
            <Card key={plan.name} className="border-slate-200 bg-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-slate-900">{plan.name}</CardTitle>
                  {plan.badge && (
                    <Badge variant="secondary" className="border border-slate-200 bg-[#f5f5f5] text-slate-700">
                      {plan.badge}
                    </Badge>
                  )}
                </div>
                <div>
                  <p className="text-3xl font-semibold text-slate-900">{formatCurrency(plan.price)}/mo</p>
                  <CardDescription>{plan.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2 text-slate-700">
                    <Check className="mt-0.5 size-4 text-slate-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl grid gap-6 px-4 md:grid-cols-2">
        <Card className="border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="text-xl">Domain</CardTitle>
            <CardDescription>
              $20 setup (waived with care plan) + ~$12/yr renewal through your preferred registrar.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="text-xl">Hosting included</CardTitle>
            <CardDescription>
              Enterprise-grade infrastructure with HTTPS, daily backups, uptime monitoring, and blazing-fast servers.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <section className="mx-auto max-w-4xl space-y-6 px-4" id="faq">
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title="Everything you might still be wondering"
          description="Still stuck? Email contact@dreamsitebuilders.com and we will reply same day."
        />
        <Accordion type="single" collapsible>
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-slate-600">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-3xl border border-slate-200 bg-white px-6 py-8 text-center">
        <p className="text-lg font-semibold text-slate-900">Ready to scope your build?</p>
        <p className="text-sm text-slate-600">
          Send your wishlist, we will respond within 24 hours with an exact quote and build timeline.
        </p>
        <div className="flex justify-center">
          <Button asChild className="h-12 px-8 text-base">
            <Link href="/start-project">Start a Project</Link>
          </Button>
        </div>
      </div>
      </div>
      <JsonLd data={productSchemas} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumb} />
    </>
  );
}
