import Link from "next/link";

import { siteConfig } from "@/lib/constants/site";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-[#f8fafc]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm space-y-4">
            <p className="text-lg font-semibold text-slate-900">DreamSite Builders</p>
            <p className="text-sm text-slate-600">{siteConfig.description}</p>
            <div className="text-sm text-slate-600">
              <p>{siteConfig.email}</p>
              <p>{siteConfig.phone}</p>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {siteConfig.footerLinks.map((section) => (
              <div key={section.label} className="space-y-3">
                <p className="text-sm font-semibold text-slate-900">{section.label}</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="transition-colors hover:text-slate-900">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} DreamSite Builders. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {siteConfig.socialLinks.map((social) => (
              <Link key={social.label} href={social.href} className="transition-colors hover:text-slate-900">
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
