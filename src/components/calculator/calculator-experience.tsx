"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { X } from "lucide-react";

import { addOnCategories } from "@/lib/constants/addons";
import { pricingPlans } from "@/lib/constants/pricing";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

type CustomItem = {
  id: string;
  name: string;
  price: number;
};

export function CalculatorExperience() {
  const [planName, setPlanName] = useState(pricingPlans[1].name);
  const [selectedAddOns, setSelectedAddOns] = useState<Record<string, boolean>>({});
  const [customItems, setCustomItems] = useState<CustomItem[]>([]);
  const [customName, setCustomName] = useState("");
  const [customPrice, setCustomPrice] = useState("");

  const activePlan = pricingPlans.find((plan) => plan.name === planName)!;

  const addOnList = useMemo(
    () =>
      addOnCategories.flatMap((category) =>
        category.items.map((item) => ({ ...item, category: category.title }))
      ),
    []
  );

  const selectedItems = addOnList.filter((item) => selectedAddOns[item.id]);

  const addOnsTotal = selectedItems.reduce((sum, item) => sum + item.price, 0);
  const customTotal = customItems.reduce((sum, item) => sum + item.price, 0);
  const total = activePlan.price + addOnsTotal + customTotal;

  function toggleAddOn(id: string) {
    setSelectedAddOns((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function handleAddCustom() {
    const parsed = Number(customPrice);
    if (!customName || Number.isNaN(parsed) || parsed <= 0) return;
    setCustomItems((prev) => [
      ...prev,
      { id: `${customName}-${Date.now()}`, name: customName, price: parsed },
    ]);
    setCustomName("");
    setCustomPrice("");
  }

  function removeCustomItem(id: string) {
    setCustomItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <div className="space-y-8">
        <Card className="border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="text-xl text-slate-900">Choose a base package</CardTitle>
            <CardDescription>Select the package that best matches your build.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <button
                key={plan.name}
                type="button"
                onClick={() => setPlanName(plan.name)}
                className={`rounded-2xl border p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 ${
                  plan.name === planName
                    ? "border-slate-900 bg-white shadow-sm"
                    : "border-slate-200 bg-[#fafafa]"
                }`}
              >
                <p className="text-sm font-medium text-slate-700">{plan.name}</p>
                <p className="text-xl font-semibold text-slate-900">{formatCurrency(plan.price)}</p>
                <p className="text-xs text-slate-500">{plan.turnaround}</p>
              </button>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-6">
          {addOnCategories.map((category) => (
            <Card key={category.id} className="border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">{category.title}</CardTitle>
                <CardDescription>{category.summary}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.items.map((item) => (
                  <label
                    key={item.id}
                    className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-slate-100 px-4 py-3 text-sm hover:bg-[#f8fafc]"
                  >
                    <div>
                      <p className="font-medium text-slate-900">{item.name}</p>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-slate-900">
                        {item.price === 0 ? "Included" : formatCurrency(item.price)}
                      </span>
                      <input
                        type="checkbox"
                        className="h-5 w-5 rounded border-slate-300 accent-slate-900"
                        checked={Boolean(selectedAddOns[item.id])}
                        onChange={() => toggleAddOn(item.id)}
                      />
                    </div>
                  </label>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="border-slate-200 bg-white">
        <CardHeader>
          <CardTitle className="text-xl text-slate-900">Estimate breakdown</CardTitle>
          <CardDescription>Adjust selections and watch this update in real time.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>Base: {activePlan.name}</span>
              <span className="font-medium text-slate-900">{formatCurrency(activePlan.price)}</span>
            </div>
            <Separator />
            <div className="space-y-2">
              {selectedItems.length === 0 ? (
                <p className="text-sm text-slate-500">No add-ons selected yet.</p>
              ) : (
                selectedItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between text-sm text-slate-600">
                    <span>{item.name}</span>
                    <span className="font-medium text-slate-900">{formatCurrency(item.price)}</span>
                  </div>
                ))
              )}
            </div>
            <Separator />
            <div className="space-y-2">
              {customItems.length === 0 ? (
                <p className="text-sm text-slate-500">No custom line items.</p>
              ) : (
                customItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between text-sm text-slate-600">
                    <span>{item.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-900">{formatCurrency(item.price)}</span>
                      <button
                        type="button"
                        className="text-xs text-slate-400 hover:text-slate-900"
                        onClick={() => removeCustomItem(item.id)}
                      >
                        <X className="size-3.5" />
                        <span className="sr-only">Remove</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="rounded-2xl bg-[#f5f5f5] p-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Add a custom item</p>
            <div className="mt-3 grid gap-3">
              <div className="space-y-1">
                <Label htmlFor="custom-name">Name</Label>
                <Input
                  id="custom-name"
                  value={customName}
                  onChange={(event) => setCustomName(event.target.value)}
                  placeholder="e.g. Custom photoshoot"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="custom-price">Price</Label>
                <Input
                  id="custom-price"
                  type="number"
                  min="0"
                  value={customPrice}
                  onChange={(event) => setCustomPrice(event.target.value)}
                  placeholder="150"
                />
              </div>
              <Button type="button" variant="outline" className="justify-center text-slate-900" onClick={handleAddCustom}>
                Add custom item
              </Button>
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-between text-lg font-semibold text-slate-900">
            <span>Total investment</span>
            <span>{formatCurrency(total)}</span>
          </div>
          <Button className="h-12 w-full text-base" asChild>
            <Link href="/start-project">Start Project with this Budget</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
