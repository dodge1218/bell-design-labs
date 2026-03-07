"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

import { cn } from "@/lib/utils";

type AnimatedCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  delay?: number;
  className?: string;
};

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  delay = 0,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { margin: "-50px", once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 1.8,
      delay,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(parseFloat(latest.toFixed(decimals)));
      },
    });

    return () => controls.stop();
  }, [decimals, delay, isInView, value]);

  const formatted = useMemo(() => {
    const valueStr = decimals > 0 ? displayValue.toFixed(decimals) : `${Math.round(displayValue)}`;
    return `${prefix}${valueStr}${suffix}`;
  }, [decimals, displayValue, prefix, suffix]);

  return (
    <span ref={ref} className={cn("font-semibold tracking-tight", className)}>
      {formatted}
    </span>
  );
}
