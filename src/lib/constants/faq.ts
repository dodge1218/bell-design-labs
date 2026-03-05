export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "Do I own my website?",
    answer:
      "100%. You receive the source files, CMS access, and instructions to manage everything in-house.",
  },
  {
    question: "Can I request changes later?",
    answer:
      "Yes. You can book hourly enhancements or subscribe to a care plan for ongoing tweaks and feature adds.",
  },
  {
    question: "How fast can you build?",
    answer:
      "Starter sites ship in 5–7 days, Growth in 7–14 days, and Web App engagements take 3–4 weeks depending on integrations.",
  },
  {
    question: "Is hosting included?",
    answer:
      "Yes. Your plan includes HTTPS, global CDN, daily backups, and uptime monitoring at no extra cost.",
  },
  {
    question: "Can I upgrade plans later?",
    answer:
      "Totally. We only charge the difference between packages, so your initial investment is protected.",
  },
];
