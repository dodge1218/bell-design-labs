import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/forms/contact-form";
import { JsonLd } from "@/components/seo/json-ld";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { contactNextSteps } from "@/lib/constants/content";
import { siteConfig } from "@/lib/constants/site";
import { testimonials } from "@/lib/constants/testimonials";

const highlightedTestimonials = testimonials.slice(0, 2);

export const metadata: Metadata = {
  title: "Contact DreamSite Builders",
  description: "Send a quick message, book a 15-min call, or head straight to the intake form to get started.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: `${siteConfig.url}/contact`,
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <div className="space-y-16 pb-20 pt-10">
        <section className="mx-auto max-w-4xl px-4">
          <SectionHeading
            align="left"
            eyebrow="Contact"
            title="Let's talk about your next launch"
            description="Fill out the quick form below and we'll respond within 24 hours with next steps."
          />
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="space-y-6">
            <Card className="border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">Send a message</CardTitle>
                <CardDescription>We read every submission and respond within one business day.</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
            <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-[#f8fafc] px-6 py-4 text-sm text-slate-700">
              <p>
                Ready to dive deeper? <Link href="/start-project" className="font-semibold text-slate-900 underline">Get an accurate quote</Link> via the detailed intake form.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild variant="outline" className="h-11 px-6 text-slate-900">
                  <a href="mailto:contact@dreamsitebuilders.com?subject=Book a 15-min call">Book a 15-min Call</a>
                </Button>
                <p className="text-xs text-slate-500">
                  or email {siteConfig.email}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="space-y-6">
            <Card className="border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">Testimonials</CardTitle>
                <CardDescription>People love how fast we respond.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {highlightedTestimonials.map((testimonial) => (
                  <blockquote key={testimonial.name} className="space-y-2 rounded-2xl border border-slate-100 bg-[#f9fafb] p-4">
                    <p className="text-sm text-slate-700">“{testimonial.quote}”</p>
                    <p className="text-xs font-semibold text-slate-500">{testimonial.name} · {testimonial.role}</p>
                  </blockquote>
                ))}
              </CardContent>
            </Card>
            <Card className="border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">What happens next</CardTitle>
                <CardDescription>We keep things simple and transparent.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactNextSteps.map((step, index) => (
                  <div key={step} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 text-xs font-semibold text-slate-500">0{index + 1}</span>
                    <p>{step}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">Need to chat live?</CardTitle>
                <CardDescription>Book a call on your schedule.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-700">
                <Button asChild className="h-11 w-full text-base">
                  <a href="mailto:contact@dreamsitebuilders.com?subject=Book a call">Book a 15-min call</a>
                </Button>
                <p>Prefer async? DM us on LinkedIn or send a Loom.</p>
              </CardContent>
            </Card>
          </Reveal>
        </section>
      </div>
      <JsonLd data={breadcrumb} />
    </>
  );
}
