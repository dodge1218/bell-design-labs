export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "John D.",
    role: "Founder, Gatecrasher K9",
    company: "Gatecrasher K9",
    quote:
      "Response time was incredible. We sent copy changes on a Tuesday and the new pages were live before lunch.",
  },
  {
    name: "Sarah M.",
    role: "Marketing Lead, Ritual Wellness",
    company: "Ritual Wellness",
    quote: "No fluff, just a great website that finally converts our paid campaign traffic.",
  },
  {
    name: "Miles A.",
    role: "COO, Kindred Studio",
    company: "Kindred Studio",
    quote:
      "We ditched a bloated agency retainer and relaunched with DreamSite. Leads tripled within six weeks.",
  },
  {
    name: "Leah S.",
    role: "Head of Ops, Northwind Ventures",
    company: "Northwind Ventures",
    quote:
      "Their build sprint kept everyone aligned. Animations feel premium without tanking performance.",
  },
];
