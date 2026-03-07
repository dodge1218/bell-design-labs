import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "default",
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "center" | "left";
  tone?: "default" | "inverted";
}) {
  const inverted = tone === "inverted";
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl space-y-3",
        align === "center" ? "text-center" : "text-left",
        inverted && "text-white"
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.2em]",
            inverted ? "text-white/70" : "text-slate-500"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={cn("text-3xl font-semibold tracking-tight", inverted ? "text-white" : "text-slate-900")}>{title}</h2>
      {description && (
        <p className={cn("text-base", inverted ? "text-white/80" : "text-slate-600")}>{description}</p>
      )}
    </div>
  );
}
