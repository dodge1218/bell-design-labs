import Link from "next/link";

import { NewsletterSignup } from "@/components/forms/newsletter-signup";
import { siteConfig } from "@/lib/constants/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/20 bg-slate-950 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-2xl font-semibold">DreamSite Builders</p>
            <p className="text-white/70">{siteConfig.description}</p>
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">Newsletter</p>
              <p className="mt-2 text-base text-white/80">Join 1,200+ operators getting weekly launch breakdowns and speed tactics.</p>
              <div className="mt-4">
                <NewsletterSignup />
              </div>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            {siteConfig.footerLinks.map((section) => (
              <div key={section.label} className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">{section.label}</p>
                <ul className="space-y-2 text-sm text-white/70">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="transition hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <div>
            <p>© {new Date().getFullYear()} DreamSite Builders. All rights reserved.</p>
            <p className="mt-1 text-white/60">{siteConfig.email} · {siteConfig.phone}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {siteConfig.socialLinks.map((social) => (
              <Link key={social.label} href={social.href} className="transition hover:text-white">
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
