export type PricingPlan = {
  name: string;
  price: number;
  emphasis?: string;
  description: string;
  cta: string;
  turnaround: string;
  idealFor: string;
  guarantee: string;
  features: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: 200,
    emphasis: "Launch-ready",
    description:
      "A polished brochure site for new offers, pop-up campaigns, or landing pages that need credibility fast.",
    cta: "Choose Starter",
    turnaround: "5–7 days",
    idealFor: "Solo consultants, new service ideas, micro-business launches",
    guarantee: "30-day quality check + 2 revisions",
    features: [
      "Clean, modern layout tailored to your brand",
      "Up to 5 custom pages",
      "Mobile-responsive build with accessibility best practices",
      "Basic on-page SEO setup",
      "Fast-loading performance with asset compression",
      "Social media + booking links",
      "Contact form with spam protection",
    ],
  },
  {
    name: "Growth",
    price: 500,
    emphasis: "Most Popular",
    description:
      "Full-funnel site with CMS, automations, and launch assets to capture and nurture leads.",
    cta: "Choose Growth",
    turnaround: "7–14 days",
    idealFor: "Growing studios, agencies, and service businesses that need a high-performing marketing site",
    guarantee: "45-day launch support + performance monitoring",
    features: [
      "Everything in Starter",
      "Advanced animations and interactive sections",
      "Full technical + local SEO implementation",
      "Blog + CMS collection setup",
      "High-speed hosting + CDN caching",
      "CRM-ready forms with conditional logic",
      "Resource hub / portfolio templates",
    ],
  },
  {
    name: "Web App",
    price: 1000,
    emphasis: "Product experience",
    description:
      "Custom experiences with gated content, dashboards, and business logic powered by modern web stacks.",
    cta: "Choose Web App",
    turnaround: "3–4 weeks",
    idealFor: "Productized services, membership platforms, training academies, and SaaS MVPs",
    guarantee: "60-day success guarantee + hand-off training",
    features: [
      "Everything in Growth",
      "Premium art direction & custom illustrations",
      "User authentication, roles, and secure dashboards",
      "Transactional email flows",
      "Admin panel with content controls",
      "Payment integration (one-time + subscriptions)",
      "Automation + integration architecture",
    ],
  },
];
