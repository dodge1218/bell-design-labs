"use client";

import { motion } from "framer-motion";
import { Building2, Sparkles, CircleDot, ShieldCheck, Layers3, BadgeCheck } from "lucide-react";

import { cn } from "@/lib/utils";

const defaultItems = [
  { name: "Northwind Ventures", icon: Building2 },
  { name: "Kindred Studio", icon: Sparkles },
  { name: "Ritual Wellness", icon: CircleDot },
  { name: "Gatecrasher K9", icon: ShieldCheck },
  { name: "Atlas Ops", icon: Layers3 },
  { name: "Summit Legal", icon: BadgeCheck },
];

type SocialProofProps = {
  className?: string;
};

export function SocialProofMarquee({ className }: SocialProofProps) {
  const doubled = [...defaultItems, ...defaultItems];

  return (
    <div className={cn("overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur", className)}>
      <motion.div
        className="flex min-w-[200%] gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-white/80"
            >
              <span className="flex size-9 items-center justify-center rounded-2xl bg-white/15 text-white">
                <Icon className="size-4" />
              </span>
              {item.name}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
