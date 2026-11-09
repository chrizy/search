"use client";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { INSTALL_PROMPT, INSTALL_SNIPPET } from "@/lib/data";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Button type="button" variant="secondary" onClick={copy} className="!py-2 !text-xs">
      {copied ? <Check className="h-3.5 w-3.5 text-success" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? "Copied" : label}
    </Button>
  );
}

export function HowItWorks({ onConnect }: { onConnect: (url?: string) => void }) {
  const reduce = usePrefersReducedMotion();
  const [domain, setDomain] = useState("https://www.yourcompany.com");

  return (
    <section id="how-it-works" className="relative bg-white py-20 sm:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Setup"
          title="Live in 2 minutes."
          description="No complicated project. No rebuilding your website. Just connect your website and let Fathom do the work."
        />

        <div className="mt-14 space-y-8">
          {/* Step 1 */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid items-center gap-8 rounded-[28px] bg-slate-50 p-6 ring-1 ring-black/5 lg:grid-cols-2 lg:p-10"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
                Step 1
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-navy sm:text-3xl">
                Add your website
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                Enter your website address. Fathom automatically discovers and indexes
                accessible website content. Initial indexing time depends on website size
                and content.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-lg ring-1 ring-black/5">
              <label className="text-xs font-medium text-muted" htmlFor="how-domain">
                Domain
              </label>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <input
                  id="how-domain"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="w-full flex-1 rounded-xl border border-black/10 bg-slate-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue/30"
                />
                <Button onClick={() => onConnect(domain)}>Connect website</Button>
              </div>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid items-start gap-8 rounded-[28px] bg-slate-50 p-6 ring-1 ring-black/5 lg:grid-cols-2 lg:p-10"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet">
                Step 2
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-navy sm:text-3xl">
                Install the snippet
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                One small code snippet. Paste it into your website, install through a
                supported CMS integration, or ask an AI coding agent to install it using a
                simple instruction.
              </p>
              <p className="mt-3 text-xs text-muted">
                The example script URL is a placeholder until the product backend is
                configured.
              </p>
            </div>
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl bg-[#0b1220] shadow-xl">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
                  <p className="text-xs font-medium text-white/60">widget.js · placeholder</p>
                  <CopyButton value={INSTALL_SNIPPET} label="Copy snippet" />
                </div>
                <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-relaxed text-cyan/90">
                  <code>{INSTALL_SNIPPET}</code>
                </pre>
              </div>
              <div className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">
                    AI coding agent prompt
                  </p>
                  <CopyButton value={INSTALL_PROMPT} label="Copy prompt" />
                </div>
                <p className="text-sm leading-relaxed text-navy/80">{INSTALL_PROMPT}</p>
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid items-center gap-8 rounded-[28px] bg-slate-50 p-6 ring-1 ring-black/5 lg:grid-cols-2 lg:p-10"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan">
                Step 3
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-navy sm:text-3xl">
                Start learning
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                Your website becomes searchable for humans and accessible to compatible AI
                agents. The platform indexes content, enables the question interface, makes
                configured knowledge endpoints available, and begins capturing questions
                routed through the integrations.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-lg ring-1 ring-black/5">
              <p className="mb-4 text-xs font-semibold text-muted">Dashboard populating…</p>
              <div className="space-y-3">
                {[
                  "Indexes website content",
                  "Creates searchable knowledge layer",
                  "Enables website question interface",
                  "Exposes configured knowledge endpoints",
                  "Captures routed questions",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={reduce ? false : { opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3 rounded-xl bg-success/5 px-3 py-2.5 text-sm text-navy ring-1 ring-success/10"
                  >
                    <Check className="h-4 w-4 text-success" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
