"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export type ProcessTimelineStep = {
  label: string;
  title: string;
  description: string;
};

type ProcessTimelineProps = {
  steps: ProcessTimelineStep[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <div ref={ref} className="relative">
      <div className="hidden h-24 w-full items-center justify-between gap-6 lg:flex">
        {steps.map((step, index) => (
          <div key={step.title} className="relative flex-1">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="flex flex-col gap-4 rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-lg font-semibold text-white">
                {step.label}
              </span>
              <div>
                <p className="text-lg font-semibold text-white">{step.title}</p>
                <p className="text-sm text-white/70">{step.description}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      <motion.div
        className="hidden lg:block"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ transformOrigin: "left center" }}
      >
        <div className="pointer-events-none absolute left-16 right-16 top-[48px] h-px bg-gradient-to-r from-white/10 via-white to-white/10" />
      </motion.div>
      <div className="flex flex-col gap-4 lg:hidden">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="rounded-3xl border border-white/20 bg-white/5 p-4 backdrop-blur"
          >
            <div className="mb-2 flex items-center gap-3 text-white">
              <span className="flex size-10 items-center justify-center rounded-2xl bg-white/10 text-sm font-semibold">
                {step.label}
              </span>
              <p className="text-base font-semibold">{step.title}</p>
            </div>
            <p className="text-sm text-white/70">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
