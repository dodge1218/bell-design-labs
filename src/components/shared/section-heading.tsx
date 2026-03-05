import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("mx-auto max-w-3xl space-y-3", align === "center" ? "text-center" : "text-left")}
>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{title}</h2>
      {description && <p className="text-base text-slate-600">{description}</p>}
    </div>
  );
}
