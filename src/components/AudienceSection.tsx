"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Briefcase, Building2, ShoppingBag, Layers } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const AUDIENCES = [
  {
    icon: Layers,
    title: "SaaS companies",
    body: "Understand which product features, integrations and capabilities customers want to know about.",
    color: "text-blue bg-blue/10",
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce",
    body: "Identify questions about products, availability, shipping and returns.",
    color: "text-violet bg-violet/10",
  },
  {
    icon: Briefcase,
    title: "Professional services",
    body: "Understand what potential clients need to know before contacting or hiring you.",
    color: "text-cyan bg-cyan/10",
  },
  {
    icon: Building2,
    title: "B2B businesses",
    body: "See the information prospects and AI agents need to understand your products and services.",
    color: "text-navy bg-navy/5",
  },
];

export function AudienceSection() {
  const reduce = usePrefersReducedMotion();

  return (
    <section className="relative bg-white py-20 sm:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Who it's for"
          title="Every business has questions worth answering."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((a, i) => (
            <motion.article
              key={a.title}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              whileHover={reduce ? undefined : { y: -4 }}
              className="group rounded-3xl bg-slate-50 p-6 ring-1 ring-black/5 transition hover:bg-white hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
            >
              <span
                className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl transition group-hover:scale-105 ${a.color}`}
              >
                <a.icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-semibold text-navy">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{a.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
