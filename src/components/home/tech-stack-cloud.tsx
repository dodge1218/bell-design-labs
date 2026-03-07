"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type TechStackCloudProps = {
  items: string[];
};

export function TechStackCloud({ items }: TechStackCloudProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((item, index) => (
        <motion.span
          key={item}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4 + (index % 3), repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
          className={cn(
            "flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white",
            index % 2 === 0 ? "shadow-[0_15px_40px_rgba(15,23,42,0.35)]" : "shadow-[0_15px_40px_rgba(79,70,229,0.25)]"
          )}
        >
          {item}
        </motion.span>
      ))}
    </div>
  );
}
