"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const HUMAN_Q = "What integrations do you support?";
const AGENT_Q = "Does this company offer enterprise pricing?";

function TypeLine({ text, active }: { text: string; active: boolean }) {
  const reduce = usePrefersReducedMotion();
  const [shown, setShown] = useState(reduce ? text : "");

  useEffect(() => {
    if (!active) {
      setShown(reduce ? text : "");
      return;
    }
    if (reduce) {
      setShown(text);
      return;
    }
    let i = 0;
    setShown("");
    const id = window.setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, 28);
    return () => window.clearInterval(id);
  }, [active, text, reduce]);

  return (
    <span>
      {shown}
      {active && shown.length < text.length && (
        <span className="ml-0.5 inline-block h-3.5 w-[2px] animate-pulse bg-blue align-middle" />
      )}
    </span>
  );
}

export function HeroVisual() {
  const reduce = usePrefersReducedMotion();
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setCycle((c) => c + 1), 5200);
    return () => window.clearInterval(id);
  }, [reduce]);

  const humanActive = reduce || cycle % 2 === 0;
  const agentActive = reduce || cycle % 2 === 1;

  return (
    <div className="relative mx-auto w-full max-w-6xl">
      <p className="mb-3 text-center text-[11px] font-medium uppercase tracking-[0.16em] text-muted/80">
        Illustrative demo data
      </p>

      <div className="relative grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-2">
        {/* Left cards */}
        <div className="relative z-10 flex flex-col gap-3 lg:pr-4">
          <motion.div
            className="glass animate-float rounded-2xl p-4"
            initial={reduce ? false : { opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-muted">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue/10 text-blue">
                <User className="h-3.5 w-3.5" />
              </span>
              Human visitor
              <span className="ml-auto flex items-center gap-1 text-[10px] text-success">
                <span className="h-1.5 w-1.5 rounded-full bg-success animate-status" />
                Sending
              </span>
            </div>
            <p className="text-sm font-medium text-navy">
              <TypeLine text={HUMAN_Q} active={humanActive} />
            </p>
          </motion.div>

          <motion.div
            className="glass animate-float-delayed rounded-2xl p-4"
            initial={reduce ? false : { opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-muted">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet/10 text-violet">
                <Bot className="h-3.5 w-3.5" />
              </span>
              AI agent
              <span className="ml-auto flex items-center gap-1 text-[10px] text-violet">
                <span className="h-1.5 w-1.5 rounded-full bg-violet animate-status" />
                Querying
              </span>
            </div>
            <p className="text-sm font-medium text-navy">
              <TypeLine text={AGENT_Q} active={agentActive} />
            </p>
          </motion.div>
        </div>

        {/* Center hub */}
        <div className="relative z-10 mx-auto flex w-full max-w-xs flex-col items-center py-4 lg:max-w-[280px]">
          <svg
            className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[220px] w-[120%] -translate-x-1/2 -translate-y-1/2 lg:block"
            viewBox="0 0 400 220"
            fill="none"
            aria-hidden
          >
            <path
              d="M20 60 C120 60, 160 110, 200 110"
              stroke="url(#flowL)"
              strokeWidth="1.5"
              className="flow-line"
              opacity="0.7"
            />
            <path
              d="M20 160 C120 160, 160 110, 200 110"
              stroke="url(#flowL)"
              strokeWidth="1.5"
              className="flow-line"
              opacity="0.5"
            />
            <path
              d="M380 70 C280 70, 240 110, 200 110"
              stroke="url(#flowR)"
              strokeWidth="1.5"
              className="flow-line"
              opacity="0.7"
            />
            <path
              d="M380 150 C280 150, 240 110, 200 110"
              stroke="url(#flowR)"
              strokeWidth="1.5"
              className="flow-line"
              opacity="0.5"
            />
            <defs>
              <linearGradient id="flowL" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#3B82F6" stopOpacity="0.1" />
                <stop offset="1" stopColor="#7C3AED" />
              </linearGradient>
              <linearGradient id="flowR" x1="1" y1="0" x2="0" y2="0">
                <stop stopColor="#06B6D4" stopOpacity="0.1" />
                <stop offset="1" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
          </svg>

          <motion.div
            className="relative flex aspect-square w-[210px] flex-col items-center justify-center rounded-full sm:w-[230px]"
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue/25 via-violet/20 to-cyan/20 blur-2xl animate-pulse-glow" />
            <div className="absolute inset-3 rounded-full bg-white/70 shadow-[0_0_0_1px_rgba(255,255,255,0.8),0_30px_80px_rgba(37,99,235,0.18)] backdrop-blur-xl" />
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#0b1220] to-[#1e293b] shadow-inner" />
            <div className="relative z-10 px-6 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan/90">
                Company
              </p>
              <p className="mt-1 font-display text-sm font-semibold text-white">
                Knowledge Engine
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                {["Website", "FAQs", "Docs", "API", "MCP"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-medium text-white/80 ring-1 ring-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right dashboard */}
        <motion.div
          className="glass animate-float relative z-10 rounded-2xl p-4 lg:pl-4"
          initial={reduce ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold text-navy">Intelligence</p>
            <span className="rounded-full bg-blue/10 px-2 py-0.5 text-[10px] font-semibold text-blue">
              Live demo
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Questions asked", value: 1284 },
              { label: "Answered", value: 87, suffix: "%" },
              { label: "Unanswered", value: 46 },
              { label: "Trending", value: 12 },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-xl bg-slate-50/80 p-2.5 ring-1 ring-black/[0.04]"
              >
                <p className="text-[10px] font-medium text-muted">{m.label}</p>
                <p className="mt-1 font-display text-lg font-semibold text-navy">
                  <AnimatedCounter value={m.value} suffix={m.suffix ?? ""} />
                </p>
              </div>
            ))}
          </div>
          <div className="mt-3 space-y-2 border-t border-black/5 pt-3">
            {[
              { q: "Do you offer enterprise pricing?", s: "Answered", c: "text-success bg-success/10" },
              { q: "Do you integrate with Salesforce?", s: "Partial", c: "text-warning bg-warning/10" },
              { q: "What certifications do you hold?", s: "Unanswered", c: "text-danger bg-danger/10" },
            ].map((row) => (
              <div key={row.q} className="flex items-start justify-between gap-2">
                <p className="text-[11px] leading-snug text-navy/80">{row.q}</p>
                <span className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-semibold ${row.c}`}>
                  {row.s}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
