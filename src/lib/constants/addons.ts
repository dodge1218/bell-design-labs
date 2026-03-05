export type AddOnItem = {
  id: string;
  name: string;
  price: number;
  description: string;
};

export type AddOnCategory = {
  id: string;
  title: string;
  summary: string;
  items: AddOnItem[];
};

export const addOnCategories: AddOnCategory[] = [
  {
    id: "core",
    title: "Core Experience",
    summary: "Level up the product experience with the foundations modern buyers expect.",
    items: [
      { id: "user-accounts", name: "User Accounts", price: 150, description: "Secure account creation with email verification." },
      { id: "cms", name: "CMS / Blog", price: 100, description: "Structured collections with editor-friendly workflows." },
      { id: "search", name: "Site Search", price: 50, description: "Instant search with filtering across pages and posts." },
      { id: "dark-mode", name: "Dark Mode", price: 50, description: "Automatic theme switching tied to prefers-color-scheme." },
      { id: "multi-language", name: "Multi-language", price: 100, description: "Localized copy, routing, and hreflang tags." },
      { id: "newsletter", name: "Newsletter", price: 50, description: "Email capture with double opt-in and tagging." },
      { id: "booking", name: "Booking System", price: 100, description: "Calendar-based booking tied to your scheduling tool." },
      { id: "events", name: "Events Calendar", price: 100, description: "Show upcoming launches, drops, and activations." },
      { id: "member-area", name: "Member Area", price: 150, description: "Protected resources for clients or students." },
      { id: "reviews", name: "Reviews & Testimonials", price: 50, description: "Rotating social proof block with CMS control." },
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    summary: "Launch or extend a storefront with conversion-ready flows.",
    items: [
      { id: "store", name: "Online Store", price: 300, description: "Product collection, cart, checkout, and fulfillment integrations." },
      { id: "subscription", name: "Subscriptions", price: 200, description: "Recurring billing with pause and upgrade logic." },
      { id: "product-management", name: "Product Management", price: 100, description: "Admin screens for SKU, inventory, and pricing controls." },
    ],
  },
  {
    id: "integrations",
    title: "Integrations",
    summary: "Connect your site to the tools that run the business.",
    items: [
      { id: "payments", name: "Payment Gateways", price: 100, description: "Stripe, PayPal, Square, and manual invoicing hooks." },
      { id: "analytics", name: "Google Analytics", price: 25, description: "GA4 setup with consent mode + dashboards." },
      { id: "calendar", name: "Calendars", price: 50, description: "Embed Google Calendar, SavvyCal, or Cal.com availability." },
      { id: "maps", name: "Maps", price: 25, description: "Custom map styling with dynamic locations." },
      { id: "social-feeds", name: "Social Feeds", price: 50, description: "Instagram, TikTok, or LinkedIn feeds with caching." },
      { id: "crm", name: "CRM Sync", price: 100, description: "Pipe form submissions into HubSpot, Close, or Zoho." },
      { id: "email-marketing", name: "Email Marketing", price: 50, description: "Connect Klaviyo, Mailchimp, or ActiveCampaign." },
      { id: "zapier", name: "Zapier Automation", price: 50, description: "Trigger Zaps or Make scenarios for workflows." },
      { id: "live-chat", name: "Live Chat", price: 50, description: "Install Intercom, Drift, or Crisp widgets." },
    ],
  },
  {
    id: "design-marketing",
    title: "Design & Marketing",
    summary: "Extend the brand system to every touchpoint.",
    items: [
      { id: "logo", name: "Logo & Branding", price: 0, description: "Included brand refresh for Starter websites." },
      { id: "3d", name: "3D Visuals", price: 300, description: "Custom scenes or device mockups rendered for hero and case studies." },
      { id: "workflows", name: "Automated Workflows", price: 200, description: "Custom automations for leads, proposals, or onboarding." },
      { id: "speed", name: "Speed Optimization", price: 150, description: "Advanced caching, image pipelines, and lighthouse tuning." },
      { id: "accessibility", name: "Accessibility Upgrades", price: 200, description: "WCAG 2.1 AA review, remediation, and audit report." },
    ],
  },
  {
    id: "marketing-ops",
    title: "Add-On Services",
    summary: "Done-for-you marketing, copy, and compliance.",
    items: [
      { id: "seo-setup", name: "SEO Setup", price: 100, description: "Topic + keyword research with search console connection." },
      { id: "copywriting", name: "Conversion Copywriting", price: 150, description: "Voice-of-customer research + landing page copy." },
      { id: "email-setup", name: "Email Setup", price: 50, description: "Professional inbox + DNS records." },
      { id: "social-setup", name: "Social Media Setup", price: 50, description: "Profile optimization for top two social channels." },
      { id: "legal-pages", name: "Legal Pages", price: 25, description: "Privacy, terms, cookie, and refund policies." },
      { id: "multi-language-setup", name: "Multi-language Setup", price: 100, description: "Translation workflow + hreflang automation." },
    ],
  },
  {
    id: "advanced-ai",
    title: "Advanced & AI",
    summary: "Leverage AI and backend systems for leverage.",
    items: [
      { id: "admin-panel", name: "Admin Panel", price: 100, description: "Role-based admin experience with analytics." },
      { id: "database", name: "Database Layer", price: 100, description: "Hosted database setup + schema design." },
      { id: "security", name: "Security Bundle", price: 100, description: "WAF rules, monitoring, and incident playbook." },
      { id: "support", name: "Support System", price: 100, description: "Ticketing or help-desk integration." },
      { id: "comments", name: "Commenting", price: 50, description: "Article and changelog commenting with moderation." },
      { id: "ai-chat", name: "AI Chat", price: 150, description: "Context-aware chatbot trained on your assets." },
      { id: "ai-assistant", name: "AI Assistant", price: 200, description: "Automated concierge that triages inbound requests." },
      { id: "ai-model", name: "Custom AI Model", price: 500, description: "Fine-tuned model hosting for proprietary data." },
      { id: "voice-agent", name: "Voice Agent", price: 400, description: "AI voice interface for inbound calls or kiosks." },
    ],
  },
];
