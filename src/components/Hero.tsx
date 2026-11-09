"use client";

import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { isValidUrl } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Hero({
  onAddWebsite,
  onExploreDemo,
}: {
  onAddWebsite: (url?: string) => void;
  onExploreDemo: () => void;
}) {
  const reduce = usePrefersReducedMotion();
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (url && !isValidUrl(url)) {
      setError("Enter a valid website address");
      return;
    }
    setError("");
    onAddWebsite(url);
  };

  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16">
      <div className="pointer-events-none absolute inset-0 mesh-gradient mesh-gradient-animated" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/30 to-transparent" />

      <div className="section-pad relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue ring-1 ring-blue/15 backdrop-blur"
          >
            Website knowledge intelligence
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[2.35rem] font-semibold tracking-tight text-balance text-navy sm:text-5xl md:text-[3.5rem] md:leading-[1.08]"
          >
            See what humans and agents ask about your product.
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-lg"
          >
            Your website is answering questions every day. Discover what people and AI
            agents want to know, what they can&apos;t find, and what you should improve.
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.55 }}
            className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted/90"
          >
            Connect your website in minutes. Fathom turns your content into a searchable
            knowledge source — and shows you what people and connected AI agents ask.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.55 }}
            className="mx-auto mt-6 max-w-xl"
          >
            <div className="flex flex-col gap-3 rounded-2xl bg-white/80 p-2 shadow-[0_20px_60px_rgba(15,23,42,0.1)] ring-1 ring-black/5 backdrop-blur sm:flex-row sm:items-center">
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submit()}
                placeholder="Enter your website URL"
                aria-label="Website URL"
                className="w-full flex-1 rounded-xl bg-transparent px-4 py-3 text-sm text-navy outline-none placeholder:text-muted/70"
              />
              <Button onClick={submit} className="shrink-0 sm:w-auto">
                Add your website <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            {error && <p className="mt-2 text-left text-sm text-danger">{error}</p>}
            <div className="mt-3 flex flex-col items-center justify-center gap-2 sm:flex-row">
              <Button variant="secondary" onClick={onExploreDemo} className="!py-2.5">
                <Play className="h-3.5 w-3.5" /> Explore the live demo
              </Button>
            </div>
            <p className="mt-3 text-xs text-muted">
              No complicated integration. Just add a small code snippet or use an AI
              coding agent to install it.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 sm:mt-12"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
