"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function SiteHeader() {
  const pathname = usePathname();

  const navItems = siteConfig.navLinks;

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          DreamSite Builders
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-slate-900",
                pathname === item.href && "text-slate-950"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex">
          <Button asChild className="px-6 shadow-sm">
            <Link href="/start-project">Start a Project</Link>
          </Button>
        </div>
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  const pathname = usePathname();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="size-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-sm">
        <DialogHeader>
          <DialogTitle>Navigate</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          {siteConfig.navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-base font-medium",
                pathname === item.href
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:bg-slate-50"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-2">
            <Link href="/start-project">Start a Project</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
