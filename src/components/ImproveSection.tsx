"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const STEPS = [
  {
    n: "1",
    title: "Discover",
    body: "Identify unanswered and poorly answered questions.",
  },
  {
    n: "2",
    title: "Recommend",
    body: "AI analyses the missing information and suggests new FAQs, product explanations and website content.",
  },
  {
    n: "3",
    title: "Improve",
    body: "Generate suggested answers and content for the business to review and approve.",
  },
];

export function ImproveSection() {
  const reduce = usePrefersReducedMotion();
  const [approved, setApproved] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setApproved((v) => !v), 4200);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <section className="relative bg-white py-20 sm:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Continuous improvement"
          title="Don't just identify knowledge gaps. Fix them."
          description="Fathom turns questions into actionable improvements — with human approval before anything is published."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="rounded-3xl bg-slate-50 p-6 ring-1 ring-black/5"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-navy font-display text-sm font-bold text-white">
                {step.n}
              </div>
              <h3 className="font-display text-xl font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 overflow-hidden rounded-[28px] border border-black/5 bg-gradient-to-br from-slate-50 to-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-2xl bg-danger/5 p-4 ring-1 ring-danger/15">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-danger">
                  Unanswered question
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-navy">
                  Do you offer discounts for charities?
                </p>
              </div>
              <div className="rounded-2xl bg-violet/5 p-4 ring-1 ring-violet/15">
                <p className="mb-2 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-violet">
                  <Sparkles className="h-3.5 w-3.5" /> Platform recommendation
                </p>
                <p className="text-sm leading-relaxed text-navy">
                  Add a charity and non-profit pricing section to your website.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-[#0b1220] p-5 text-white shadow-xl">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-semibold text-white/70">Draft content editor</p>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-cyan">
                  Human approval before publishing
                </span>
              </div>
              <AnimatePresence mode="wait">
                {!approved ? (
                  <motion.div
                    key="draft"
                    initial={reduce ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={reduce ? undefined : { opacity: 0 }}
                  >
                    <div className="rounded-xl bg-white/5 p-4 text-sm leading-relaxed text-white/85 ring-1 ring-white/10">
                      Yes. We offer discounted pricing for registered charities and
                      non-profit organisations. Contact our team with your charity
                      registration details to receive a tailored quote.
                    </div>
                    <Button
                      variant="dark"
                      className="mt-4 w-full"
                      onClick={() => setApproved(true)}
                    >
                      Approve & publish
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="approved"
                    initial={reduce ? false : { opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-3 py-8 text-center"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-success/20 text-success">
                      <Check className="h-6 w-6" />
                    </span>
                    <p className="font-display text-lg font-semibold">
                      Knowledge entry approved
                    </p>
                    <p className="max-w-sm text-sm text-white/60">
                      The unanswered question is now part of your searchable knowledge
                      layer.
                    </p>
                    <button
                      className="mt-2 text-xs font-semibold text-cyan hover:underline"
                      onClick={() => setApproved(false)}
                    >
                      Replay transformation
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
