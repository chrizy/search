"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  KNOWLEDGE_OPPORTUNITIES,
  MOST_ASKED,
  UNANSWERED_GAPS,
} from "@/lib/data";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function InsightsSection({ onExplore }: { onExplore: () => void }) {
  const reduce = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(124,58,237,0.08),_transparent_55%)]" />
      <div className="section-pad relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Knowledge gaps"
          title="Find the questions your website can't answer."
          description="Unanswered questions are opportunities to improve your website, your product information and your customer experience."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-6"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-navy">
                Most asked questions
              </h3>
              <span className="text-[10px] font-semibold text-muted">Demo</span>
            </div>
            <ul className="space-y-4">
              {MOST_ASKED.map((item, i) => (
                <li key={item.rank}>
                  <div className="mb-1.5 flex items-start justify-between gap-3">
                    <p className="text-sm font-medium text-navy">
                      <span className="mr-2 text-muted">{item.rank}.</span>
                      {item.question}
                    </p>
                    <span className="shrink-0 text-xs font-semibold text-blue">
                      <AnimatedCounter value={item.count} />
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-blue to-violet"
                      initial={reduce ? false : { width: 0 }}
                      whileInView={{ width: `${100 - i * 14}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, duration: 0.7 }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="rounded-3xl bg-gradient-to-br from-[#1a0b0b] to-[#2a1212] p-6 text-white shadow-xl"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold">Unanswered questions</h3>
              <span className="rounded-full bg-danger/20 px-2 py-0.5 text-[10px] font-semibold text-red-300">
                Gaps
              </span>
            </div>
            <ul className="space-y-3">
              {UNANSWERED_GAPS.map((q, i) => (
                <motion.li
                  key={q}
                  initial={reduce ? false : { opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i }}
                  className="rounded-2xl bg-white/5 px-4 py-3 text-sm ring-1 ring-red-400/20"
                >
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-danger align-middle animate-status" />
                  {q}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, duration: 0.5 }}
            className="glass rounded-3xl p-6"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-navy">
                Knowledge opportunities
              </h3>
              <span className="text-[10px] font-semibold text-violet">AI</span>
            </div>
            <ul className="space-y-3">
              {KNOWLEDGE_OPPORTUNITIES.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl bg-slate-50/90 p-4 ring-1 ring-black/5"
                >
                  <span
                    className={
                      item.priority === "HIGH"
                        ? "rounded-full bg-danger/10 px-2 py-0.5 text-[10px] font-bold text-danger"
                        : "rounded-full bg-warning/10 px-2 py-0.5 text-[10px] font-bold text-warning"
                    }
                  >
                    {item.priority} PRIORITY
                  </span>
                  <p className="mt-2 text-sm font-medium text-navy">{item.title}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <p className="font-display text-2xl font-semibold text-navy sm:text-3xl">
            Stop guessing what your customers want to know. Start seeing it.
          </p>
          <Button onClick={onExplore} className="mt-6">
            Explore the dashboard
          </Button>
        </div>
      </div>
    </section>
  );
}
