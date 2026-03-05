"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

import { type AddOnCategory } from "@/lib/constants/addons";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function AddOnsGrid({ categories }: { categories: AddOnCategory[] }) {
  const [expanded, setExpanded] = useState(false);

  const visibleCategories = expanded ? categories : categories.slice(0, 3);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2">
        {visibleCategories.map((category) => (
          <Card key={category.id} className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-lg text-slate-900">{category.title}</CardTitle>
              <CardDescription>{category.summary}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {category.items.map((item) => (
                <div key={item.id} className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3 last:border-none last:pb-0">
                  <div>
                    <p className="font-medium text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">{item.price === 0 ? "Included" : `${formatCurrency(item.price)}`}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          variant="outline"
          className="px-6 text-slate-900"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? <Minus className="mr-2 size-4" /> : <Plus className="mr-2 size-4" />}
          {expanded ? "Hide add-ons" : "View all add-ons"}
        </Button>
      </div>
    </div>
  );
}
