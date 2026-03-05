"use client";

import { ReactNode, useState } from "react";
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

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().optional(),
  email: z.string().email("Valid email required"),
  service: z.string().min(1, "Select a service"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Share a little more detail"),
});

type ContactSchema = z.infer<typeof contactSchema>;

const serviceOptions = [
  "Website Refresh",
  "New Website",
  "Web App / Dashboard",
  "Care Plan",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit() {
    setSubmitted(true);
    form.reset();
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" error={form.formState.errors.name?.message}>
          <Input placeholder="Jane Founder" {...form.register("name")} />
        </Field>
        <Field label="Phone (optional)" error={form.formState.errors.phone?.message}>
          <Input placeholder="(555) 123-4567" {...form.register("phone")} />
        </Field>
        <Field label="Email" error={form.formState.errors.email?.message}>
          <Input type="email" placeholder="you@company.com" {...form.register("email")} />
        </Field>
        <Field label="Service" error={form.formState.errors.service?.message}>
          <Controller
            control={form.control}
            name="service"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-full justify-between">
                  <SelectValue placeholder="Choose" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((option) => (
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
      <Field label="Subject" error={form.formState.errors.subject?.message}>
        <Input placeholder="Need a growth-focused refresh" {...form.register("subject")} />
      </Field>
      <Field label="Message" error={form.formState.errors.message?.message}>
        <Textarea rows={5} placeholder="Share goals, pages, or launch date" {...form.register("message")} />
      </Field>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" className="h-12 px-6 text-base">
          Send Message
        </Button>
        <p className="text-sm text-slate-500">
          Prefer to skip the form? Email <a href="mailto:contact@dreamsitebuilders.com" className="underline">contact@dreamsitebuilders.com</a>
        </p>
      </div>
      {submitted && (
        <p className="text-sm font-medium text-slate-700">Thanks! We will reply within 24 hours.</p>
      )}
    </form>
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
