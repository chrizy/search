"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Bot, Globe2, MessageSquare } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const CHANNELS = [
  {
    icon: MessageSquare,
    title: "Humans — Website search and chat",
    body: "Visitors can search and ask natural-language questions directly on the company's website.",
    accent: "from-blue/20 to-blue/5",
    iconColor: "text-blue bg-blue/10",
  },
  {
    icon: Bot,
    title: "AI agents — MCP and API",
    body: "Make approved company information accessible through Ask API, Model Context Protocol (MCP), and structured knowledge retrieval for compatible agents and applications.",
    accent: "from-violet/20 to-violet/5",
    iconColor: "text-violet bg-violet/10",
  },
  {
    icon: Globe2,
    title: "Browser agents — WebMCP",
    body: "Expose supported website tools to compatible browser agents through WebMCP, so agents can discover approved capabilities and interact in a structured way.",
    accent: "from-cyan/20 to-cyan/5",
    iconColor: "text-cyan bg-cyan/10",
  },
];

export function AgentsSection() {
  const reduce = usePrefersReducedMotion();

  return (
    <section id="for-ai-agents" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 mesh-gradient opacity-60" />
      <div className="section-pad relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="One knowledge layer"
          title="One knowledge layer. Every way people and AI interact with your business."
          description="Fathom is built for humans and AI agents — without implying universal agent or browser compatibility."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {CHANNELS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={reduce ? undefined : { y: -4 }}
              className={`rounded-3xl bg-gradient-to-b ${c.accent} p-6 ring-1 ring-white/60 backdrop-blur transition`}
            >
              <span
                className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl ${c.iconColor}`}
              >
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-semibold text-navy">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-10 overflow-hidden rounded-[28px] bg-navy p-6 text-white sm:p-10"
        >
          <div className="pointer-events-none absolute -right-20 top-0 h-56 w-56 rounded-full bg-violet/30 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-blue/30 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {[
              { label: "Human", detail: "Asks on your site" },
              { label: "AI agent", detail: "Queries Ask API / MCP" },
              { label: "Browser agent", detail: "Calls WebMCP tool" },
            ].map((node, i) => (
              <div key={node.label} className="contents">
                <div className="rounded-2xl bg-white/5 p-4 text-center ring-1 ring-white/10">
                  <p className="font-display text-base font-semibold">{node.label}</p>
                  <p className="mt-1 text-xs text-white/55">{node.detail}</p>
                </div>
                {i < 2 && (
                  <div className="hidden justify-center lg:flex" aria-hidden>
                    <div className="h-px w-10 bg-gradient-to-r from-white/10 via-cyan/60 to-white/10" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="relative mt-8 flex justify-center">
            <div className="rounded-full bg-gradient-to-r from-blue via-violet to-cyan px-6 py-3 text-sm font-semibold shadow-[0_0_40px_rgba(124,58,237,0.35)]">
              Shared Company Knowledge Layer
            </div>
          </div>
          <p className="relative mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-white/55">
            Capabilities depend on the connected agent and browser support. Fathom does
            not claim universal AI agent or WebMCP compatibility.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
