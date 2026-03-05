export type ComparisonRow = {
  attribute: string;
  dreamsite: string;
  freelancers: string;
  agencies: string;
};

export const competitorComparison: ComparisonRow[] = [
  {
    attribute: "Ideal For",
    dreamsite: "Operators who need a premium site without bloated retainers.",
    freelancers: "Budget projects with flexible timelines.",
    agencies: "Funded teams with complex internal stakeholders.",
  },
  {
    attribute: "Costs",
    dreamsite: "$200–$1,000 one-time + transparent add-ons.",
    freelancers: "Inconsistent quotes; scope creep common.",
    agencies: "$8k–$40k retainers plus upsells.",
  },
  {
    attribute: "Initial Investment",
    dreamsite: "$200–$1,000 depending on plan.",
    freelancers: "$500–$5k but paid hourly.",
    agencies: "$15k+ upfront.",
  },
  {
    attribute: "Turnaround",
    dreamsite: "Launch in 7–14 days (Starter in 5).",
    freelancers: "4–8 weeks depending on workload.",
    agencies: "2–3 months (or more).",
  },
  {
    attribute: "Design Approach",
    dreamsite: "Conversion-focused systems + custom art direction.",
    freelancers: "Template tweaks with limited QA.",
    agencies: "Beautiful but heavy creative cycles.",
  },
  {
    attribute: "Maintenance",
    dreamsite: "Optional care plans with proactive updates.",
    freelancers: "Ad-hoc; usually unavailable after launch.",
    agencies: "Costly retainers for minor edits.",
  },
  {
    attribute: "SEO",
    dreamsite: "Technical + content SEO baked into builds.",
    freelancers: "Basic metadata; no strategy.",
    agencies: "Requires separate SEO retainer.",
  },
  {
    attribute: "Support",
    dreamsite: "Direct Slack/email with 24h response.",
    freelancers: "Varies; often ghosted when busy.",
    agencies: "Account managers with slower response times.",
  },
  {
    attribute: "Guarantee",
    dreamsite: "Launch guarantee + post-launch tune-ups.",
    freelancers: "Usually none.",
    agencies: "Change requests billed separately.",
  },
  {
    attribute: "Performance",
    dreamsite: "<1s LCP, Core Web Vitals monitored.",
    freelancers: "Unoptimized hosting and scripts.",
    agencies: "Heavy animations slow down pages.",
  },
];

export const whyUsPoints = [
  {
    title: "Predictable pricing",
    detail: "Flat-rate packages with every integration listed upfront.",
  },
  {
    title: "Lead-obsessed",
    detail: "Every layout, CTA, and animation is measured against conversions.",
  },
  {
    title: "Fast + flexible",
    detail: "Dedicated build sprint delivers in days, not months.",
  },
];
