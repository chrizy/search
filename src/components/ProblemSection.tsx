"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const TRADITIONAL = [
  { label: "Page views", value: "48.2k" },
  { label: "Bounce rate", value: "61%" },
  { label: "Traffic", value: "+12%" },
  { label: "Clicks", value: "9,401" },
];

const FATHOM = [
  { label: "Actual questions", value: "1,284", tone: "text-blue" },
  { label: "Unanswered questions", value: "46", tone: "text-danger" },
  { label: "Weak answers", value: "28", tone: "text-warning" },
  { label: "Trending topics", value: "12", tone: "text-violet" },
  { label: "AI agent questions", value: "193", tone: "text-cyan" },
  { label: "Knowledge gaps", value: "9", tone: "text-navy" },
];

export function ProblemSection() {
  const reduce = usePrefersReducedMotion();

  return (
    <section id="product" className="relative py-20 sm:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The blind spot"
          title="You know what pages people visit. But do you know what they're actually asking?"
          description="Traditional website analytics show clicks, traffic and page views. Fathom makes the questions themselves visible."
        />

        <div className="mx-auto mt-10 max-w-3xl space-y-3 text-center text-sm text-muted sm:text-base">
          <p>But they don&apos;t tell you:</p>
          <ul className="mx-auto grid max-w-2xl gap-2 text-left sm:grid-cols-2">
            {[
              "What visitors are trying to find out.",
              "Which questions your website fails to answer.",
              "Which subjects matter most to prospective customers.",
              "What AI agents are trying to discover about your business.",
            ].map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-white/70 px-4 py-3 ring-1 ring-black/5"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl bg-slate-100/80 p-6 ring-1 ring-black/5 sm:p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Traditional analytics
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-slate-500">
                  Traffic & clicks
                </h3>
              </div>
              <span className="rounded-full bg-slate-200 px-2.5 py-1 text-[10px] font-semibold text-slate-500">
                Muted signal
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {TRADITIONAL.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl bg-white/60 p-4 grayscale ring-1 ring-black/[0.04]"
                >
                  <p className="text-xs text-slate-400">{m.label}</p>
                  <p className="mt-2 font-display text-2xl font-semibold text-slate-500">
                    {m.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 h-24 rounded-2xl bg-gradient-to-t from-slate-200/80 to-transparent opacity-60" />
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.1, duration: 0.55 }}
            className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-[0_30px_80px_rgba(37,99,235,0.12)] ring-1 ring-blue/10 sm:p-8"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-6 h-36 w-36 rounded-full bg-cyan/20 blur-3xl" />
            <div className="relative mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
                  Fathom
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-navy">
                  Question intelligence
                </h3>
              </div>
              <span className="rounded-full bg-blue/10 px-2.5 py-1 text-[10px] font-semibold text-blue">
                Demo data
              </span>
            </div>
            <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3">
              {FATHOM.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  whileHover={reduce ? undefined : { y: -3 }}
                  className="rounded-2xl bg-slate-50/90 p-4 ring-1 ring-black/[0.04] transition"
                >
                  <p className="text-[11px] text-muted">{m.label}</p>
                  <p className={`mt-2 font-display text-2xl font-semibold ${m.tone}`}>
                    {m.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
