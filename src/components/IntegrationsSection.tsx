"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const WEBSITES = [
  "WordPress",
  "Shopify",
  "Webflow",
  "Wix",
  "Squarespace",
  "Custom websites",
];

const AGENTS = [
  "MCP-compatible agents",
  "WebMCP-enabled browsers",
  "API integrations",
  "AI coding agents",
];

export function IntegrationsSection() {
  const reduce = usePrefersReducedMotion();

  return (
    <section className="relative py-20 sm:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Compatibility"
          title="Works with the tools and platforms you already use."
          description="Presented as integration targets and compatibility categories — not certified native integrations unless already implemented."
        />

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto mt-14 max-w-4xl"
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-48 w-48 rounded-full bg-blue/10 blur-3xl animate-pulse-glow" />
          </div>

          <div className="relative grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <div className="space-y-3">
              <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted md:text-left">
                Website platforms
              </p>
              <div className="grid grid-cols-2 gap-2">
                {WEBSITES.map((name, i) => (
                  <motion.div
                    key={name}
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={reduce ? undefined : { y: -2 }}
                    className="rounded-2xl bg-white px-3 py-3 text-center text-sm font-medium text-navy shadow-sm ring-1 ring-black/5"
                  >
                    {name}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mx-auto flex h-36 w-36 flex-col items-center justify-center rounded-full bg-navy text-center text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan/80">
                Fathom
              </p>
              <p className="mt-1 px-4 font-display text-sm font-semibold leading-tight">
                Knowledge source
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted md:text-right">
                AI & agent technologies
              </p>
              <div className="grid gap-2">
                {AGENTS.map((name, i) => (
                  <motion.div
                    key={name}
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={reduce ? undefined : { y: -2 }}
                    className="rounded-2xl bg-white px-3 py-3 text-center text-sm font-medium text-navy shadow-sm ring-1 ring-black/5"
                  >
                    {name}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-10 text-center font-display text-xl font-semibold text-navy sm:text-2xl">
            One knowledge source. Multiple ways to access it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
