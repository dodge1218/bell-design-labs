"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";

export function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (!formData.get("email")) return;
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3 text-white sm:flex-row">
      <div className="flex-1">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/50 focus:border-white/60 focus:outline-none"
        />
      </div>
      <Button
        type="submit"
        className="h-12 rounded-2xl bg-white px-6 text-base font-semibold text-slate-900 transition hover:-translate-y-0.5"
      >
        {submitted ? "You're in" : "Get updates"}
      </Button>
    </form>
  );
}
