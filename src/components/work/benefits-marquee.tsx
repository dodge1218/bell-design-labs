"use client";

import { motion } from "framer-motion";

import { benefitsMarquee } from "@/lib/constants/benefits";

export function BenefitsMarquee() {
  const duplicated = [...benefitsMarquee, ...benefitsMarquee];

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <motion.div
        className="flex min-w-[200%] gap-6 px-4 py-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {duplicated.map((benefit, index) => (
          <div
            key={`${benefit}-${index}`}
            className="whitespace-nowrap rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-2 text-sm font-medium text-slate-700"
          >
            {benefit}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
