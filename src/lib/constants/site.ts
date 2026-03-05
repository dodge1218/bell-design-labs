export const siteConfig = {
  name: "DreamSite Builders",
  shortName: "DreamSite",
  description:
    "DreamSite Builders creates lightning-fast, conversion-ready websites for service businesses without the agency fluff or freelancer delays.",
  tagline: "Get A Website That Drives New Leads",
  url: "https://dreamsitebuilders.com",
  ogImage: "https://dreamsitebuilders.com/og-image.jpg",
  email: "contact@dreamsitebuilders.com",
  phone: "(888) 555-0199",
  bannerMessage: "Most Popular: Growth Website—$500 one-time—built in 7–14 days",
  address: "Remote-first studio",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/pricing" },
    { label: "Calculator", href: "/calculator" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
    { label: "Start Project", href: "/start-project" },
  ],
  footerLinks: [
    {
      label: "Company",
      links: [
        { label: "Why DreamSite", href: "/#why-us" },
        { label: "Pricing", href: "/pricing" },
        { label: "Work", href: "/work" },
        { label: "Start Project", href: "/start-project" },
      ],
    },
    {
      label: "Resources",
      links: [
        { label: "Cost Calculator", href: "/calculator" },
        { label: "Care Plans", href: "/pricing#care-plans" },
        { label: "FAQs", href: "/pricing#faq" },
      ],
    },
    {
      label: "Legal",
      links: [
        { label: "Terms", href: "#" },
        { label: "Privacy", href: "#" },
      ],
    },
  ],
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/dreamsitebuilders" },
    { label: "YouTube", href: "https://www.youtube.com/@dreamsitebuilders" },
    { label: "Instagram", href: "https://www.instagram.com/dreamsitebuilders" },
  ],
};

export type SiteConfig = typeof siteConfig;
