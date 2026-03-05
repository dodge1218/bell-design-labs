export type CarePlan = {
  name: string;
  price: number;
  description: string;
  badge?: string;
  features: string[];
};

export const carePlans: CarePlan[] = [
  {
    name: "Standard",
    price: 50,
    description:
      "Peace-of-mind monitoring for lean teams that just need the essentials covered.",
    features: [
      "Security monitoring + firewall rules",
      "Weekly off-site backups (1-week retention)",
      "Plugin + dependency updates",
      "1 hour of content changes per month",
      "Monthly performance + SEO snapshot",
    ],
  },
  {
    name: "Premium",
    price: 100,
    badge: "Recommended",
    description:
      "Priority response plus proactive improvements to keep growth initiatives moving.",
    features: [
      "Priority security sweeps + uptime alerts",
      "Daily backups with 2-week retention",
      "3-day turnaround SLA on fixes",
      "2 hours of content changes + 1 hour of new features",
      "Quarterly strategy + analytics review",
    ],
  },
  {
    name: "Enterprise",
    price: 200,
    description:
      "For mission-critical marketing teams that can’t risk downtime or stale funnels.",
    features: [
      "Dedicated success channel + standby engineer",
      "Daily backups with 30-day retention",
      "3-day SLA on fixes + proactive remediation",
      "3 hours of changes + 3 hours of new features",
      "Executive-ready performance reporting",
    ],
  },
];
