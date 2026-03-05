"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

type TopBannerProps = {
  message: string;
};

export function TopBanner({ message }: TopBannerProps) {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-secondary text-muted-foreground"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-sm">
            <p className="font-medium tracking-tight">{message}</p>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Dismiss banner"
              onClick={() => setVisible(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="size-4" />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
