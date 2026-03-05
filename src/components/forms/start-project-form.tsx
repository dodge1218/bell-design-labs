"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const featureOptions = [
  "Booking calendar",
  "Member portal",
  "E-commerce",
  "Web App",
  "Animations",
  "Automation",
];

const startProjectSchema = z.object({
  company: z.string().min(2, "Company is required"),
  industry: z.string().min(2, "Industry is required"),
  website: z.string().optional(),
  goals: z.string().min(10, "Tell us more about your goals"),
  features: z.array(z.string()).min(1, "Select at least one feature"),
  timeline: z.string().min(1, "Pick a timeline"),
  budget: z.string().min(1, "Pick a budget"),
  contactName: z.string().min(2, "Name is required"),
  contactEmail: z.string().email("Valid email required"),
  contactPhone: z.string().optional(),
  notes: z.string().optional(),
});

type StartProjectSchema = z.infer<typeof startProjectSchema>;

const steps = [
  { title: "Project overview", fields: ["company", "industry", "website"] },
  { title: "Key features", fields: ["features"] },
  { title: "Timeline & goals", fields: ["timeline", "budget", "goals"] },
  { title: "Contact", fields: ["contactName", "contactEmail", "contactPhone", "notes"] },
];

const timelines = ["ASAP", "2–4 weeks", "4–6 weeks", "Flexible"];
const budgets = ["$200–$500", "$500–$1k", "$1k+", "Not sure"];

export function StartProjectForm() {
  const form = useForm<StartProjectSchema>({
    resolver: zodResolver(startProjectSchema),
    defaultValues: {
      company: "",
      industry: "",
      website: "",
      goals: "",
      features: [],
      timeline: "",
      budget: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      notes: "",
    },
  });
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const { register } = form;

  useEffect(() => {
    register("features");
  }, [register]);

  async function handleNext() {
    const fields = steps[step].fields as (keyof StartProjectSchema)[];
    const valid = await form.trigger(fields, { shouldFocus: true });
    if (!valid) return;
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  }

  function handlePrev() {
    setStep((prev) => Math.max(prev - 1, 0));
  }

  function toggleFeature(feature: string) {
    const current = form.getValues("features");
    if (current.includes(feature)) {
      form.setValue(
        "features",
        current.filter((item) => item !== feature)
      );
    } else {
      form.setValue("features", [...current, feature]);
    }
  }

  function onSubmit() {
    setSubmitted(true);
    form.reset();
    setStep(0);
  }

  const currentFeatures = form.watch("features");

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3">
        {steps.map((item, index) => (
          <div key={item.title} className="flex items-center gap-2 text-sm text-slate-600">
            <span
              className={cn(
                "flex size-8 items-center justify-center rounded-full border",
                index <= step ? "border-slate-900 text-slate-900" : "border-slate-200 text-slate-400"
              )}
            >
              {index + 1}
            </span>
            <span>{item.title}</span>
          </div>
        ))}
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {step === 0 && (
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Company" error={form.formState.errors.company?.message}>
              <Input placeholder="Gatecrasher K9" {...form.register("company")} />
            </Field>
            <Field label="Industry" error={form.formState.errors.industry?.message}>
              <Input placeholder="Dog Training" {...form.register("industry")} />
            </Field>
            <Field label="Existing website" error={form.formState.errors.website?.message}>
              <Input placeholder="https://" {...form.register("website")} />
            </Field>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-3">
            <Label className="text-sm text-slate-700">Which features matter most?</Label>
            <div className="grid gap-3 md:grid-cols-2">
              {featureOptions.map((feature) => (
                <button
                  key={feature}
                  type="button"
                  onClick={() => toggleFeature(feature)}
                  className={cn(
                    "rounded-2xl border px-4 py-3 text-left text-sm",
                    currentFeatures.includes(feature)
                      ? "border-slate-900 bg-white"
                      : "border-slate-200 bg-[#f5f5f5]"
                  )}
                >
                  {feature}
                </button>
              ))}
            </div>
            {form.formState.errors.features?.message && (
              <p className="text-xs text-rose-500">{form.formState.errors.features.message}</p>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Timeline" error={form.formState.errors.timeline?.message}>
                <Controller
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full justify-between">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {timelines.map((option) => (
                          <SelectItem value={option} key={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </Field>
              <Field label="Budget" error={form.formState.errors.budget?.message}>
                <Controller
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full justify-between">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgets.map((option) => (
                          <SelectItem value={option} key={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </Field>
            </div>
            <Field label="Goals" error={form.formState.errors.goals?.message}>
              <Textarea rows={5} placeholder="What should success look like?" {...form.register("goals")} />
            </Field>
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Contact name" error={form.formState.errors.contactName?.message}>
              <Input placeholder="Jane Founder" {...form.register("contactName")} />
            </Field>
            <Field label="Email" error={form.formState.errors.contactEmail?.message}>
              <Input type="email" placeholder="you@company.com" {...form.register("contactEmail")} />
            </Field>
            <Field label="Phone" error={form.formState.errors.contactPhone?.message}>
              <Input placeholder="(555) 123-4567" {...form.register("contactPhone")} />
            </Field>
            <Field label="Notes" error={form.formState.errors.notes?.message}>
              <Textarea rows={4} placeholder="Anything else we should know?" {...form.register("notes")} />
            </Field>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-3">
            <Button type="button" variant="outline" onClick={handlePrev} disabled={step === 0}>
              Back
            </Button>
            {step < steps.length - 1 ? (
              <Button type="button" onClick={handleNext}>
                Next step
              </Button>
            ) : (
              <Button type="submit">Submit intake</Button>
            )}
          </div>
          <p className="text-xs text-slate-500">
            Need help? <Link href="mailto:contact@dreamsitebuilders.com" className="underline">Email us</Link>
          </p>
        </div>
        {submitted && (
          <p className="text-sm font-semibold text-slate-700">Thanks! We&apos;ll review and reply shortly.</p>
        )}
      </form>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <div className="space-y-1 text-sm">
      <Label className="text-slate-700">{label}</Label>
      {children}
      {error && <p className="text-xs text-rose-500">{error}</p>}
    </div>
  );
}
