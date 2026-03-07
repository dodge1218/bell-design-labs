"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

import type { Testimonial } from "@/lib/constants/testimonials";
import { Button } from "@/components/ui/button";

const TRANSITION_DURATION = 0.5;

type TestimonialsCarouselProps = {
  testimonials: Testimonial[];
};

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [index, setIndex] = useState(0);

  const current = useMemo(() => testimonials[index], [index, testimonials]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const directionVariants = {
    initial: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 40 : -40,
      scale: 0.98,
    }),
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -40 : 40, scale: 0.98 }),
  } as const;

  const goTo = (dir: number) => {
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  return (
    <div className="relative">
      <div className="absolute -top-12 right-0 hidden gap-2 md:flex">
        <Button variant="ghost" size="icon" className="rounded-2xl border border-white/20 bg-white/10" onClick={() => goTo(-1)}>
          <ArrowLeft className="size-4" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-2xl border border-white/20 bg-white/10" onClick={() => goTo(1)}>
          <ArrowRight className="size-4" />
        </Button>
      </div>
      <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-8 text-white shadow-2xl backdrop-blur">
        <div className="mb-4 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <Star key={starIndex} className="size-4 fill-white text-white" />
          ))}
        </div>
        <div className="relative min-h-[180px]">
          <AnimatePresence mode="wait" custom={1}>
            <motion.blockquote
              key={current.name}
              custom={1}
              variants={directionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: TRANSITION_DURATION, ease: "easeOut" }}
              className="text-lg leading-relaxed text-white/90"
            >
              “{current.quote}”
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <motion.div
          key={`${current.name}-${current.company}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-6 flex items-center gap-4"
        >
          <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-white/20 to-white/5 text-base font-semibold text-white">
            {current.name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-white">{current.name}</p>
            <p className="text-sm text-white/70">
              {current.role} · {current.company}
            </p>
          </div>
        </motion.div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-2 md:hidden">
        <Button variant="ghost" size="icon" className="rounded-2xl border border-white/20 bg-white/10" onClick={() => goTo(-1)}>
          <ArrowLeft className="size-4" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-2xl border border-white/20 bg-white/10" onClick={() => goTo(1)}>
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
