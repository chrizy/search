"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { DEMO_QUESTIONS, type DemoQuestion, type QuestionSource, type QuestionStatus } from "@/lib/data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, User, X } from "lucide-react";
import { useMemo, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Filter = "all" | "human" | "ai" | "unanswered";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All questions" },
  { id: "human", label: "Human visitors" },
  { id: "ai", label: "AI agents" },
  { id: "unanswered", label: "Unanswered" },
];

function StatusBadge({ status }: { status: QuestionStatus }) {
  const map = {
    answered: "bg-success/10 text-success",
    partial: "bg-warning/10 text-warning",
    unanswered: "bg-danger/10 text-danger",
  };
  const label = {
    answered: "Answered",
    partial: "Partial",
    unanswered: "Unanswered",
  };
  return (
    <span className={cn("rounded-full px-2.5 py-1 text-[11px] font-semibold", map[status])}>
      {label[status]}
    </span>
  );
}

function SourceBadge({ source, label }: { source: QuestionSource; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-muted">
      {source === "human" ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
      {label}
    </span>
  );
}

function DetailDrawer({
  question,
  onClose,
}: {
  question: DemoQuestion;
  onClose: () => void;
}) {
  const reduce = usePrefersReducedMotion();
  return (
    <motion.aside
      initial={reduce ? false : { x: 40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={reduce ? undefined : { x: 40, opacity: 0 }}
      className="absolute inset-y-0 right-0 z-20 flex w-full max-w-md flex-col border-l border-black/5 bg-white shadow-2xl"
      role="dialog"
      aria-label="Question detail"
    >
      <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
          Question detail
        </p>
        <button
          onClick={onClose}
          className="rounded-xl p-2 text-muted hover:bg-black/5 hover:text-navy"
          aria-label="Close detail"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="flex-1 space-y-5 overflow-y-auto px-5 py-5">
        <div>
          <p className="text-xs font-medium text-muted">Original question</p>
          <p className="mt-1 font-display text-lg font-semibold text-navy">
            {question.question}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <SourceBadge source={question.source} label={question.sourceLabel} />
          <StatusBadge status={question.status} />
        </div>
        <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-black/5">
          <p className="text-xs font-medium text-muted">Answer generated</p>
          <p className="mt-2 text-sm leading-relaxed text-navy/85">{question.answer}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-muted">Source content used</p>
          <p className="mt-1 text-sm text-navy">{question.sourceContent}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-muted">Answer quality</p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className={cn(
                "h-full rounded-full",
                question.quality >= 80
                  ? "bg-success"
                  : question.quality >= 50
                    ? "bg-warning"
                    : "bg-danger",
              )}
              style={{ width: `${question.quality}%` }}
            />
          </div>
          <p className="mt-1 text-sm font-semibold text-navy">{question.quality}/100</p>
        </div>
        <div>
          <p className="text-xs font-medium text-muted">Found useful?</p>
          <p className="mt-1 text-sm text-navy">
            {question.useful === true
              ? "Yes"
              : question.useful === false
                ? "No"
                : "Not rated"}
          </p>
        </div>
        <p className="rounded-xl bg-blue/[0.04] px-3 py-2 text-[11px] leading-relaxed text-muted">
          Visibility is based on conversations routed through the website widget and
          connected interfaces — not private chats inside third-party AI products.
        </p>
      </div>
    </motion.aside>
  );
}

export function QuestionsSection() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<DemoQuestion | null>(null);
  const reduce = usePrefersReducedMotion();

  const rows = useMemo(() => {
    return DEMO_QUESTIONS.filter((q) => {
      if (filter === "human") return q.source === "human";
      if (filter === "ai") return q.source === "ai";
      if (filter === "unanswered") return q.status === "unanswered";
      return true;
    });
  }, [filter]);

  return (
    <section id="questions" className="relative bg-white py-20 sm:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Question stream"
          title="Every question. One place."
          description="See what visitors and connected AI agents are asking about your company, products and services."
        />

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative mt-12 overflow-hidden rounded-[28px] bg-[#0b1220] p-1 shadow-[0_40px_100px_rgba(11,18,32,0.25)]"
        >
          <div className="overflow-hidden rounded-[24px] bg-white">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/5 px-4 py-4 sm:px-6">
              <div>
                <p className="font-display text-base font-semibold text-navy">
                  Questions dashboard
                </p>
                <p className="text-xs text-muted">Illustrative demo data</p>
              </div>
              <div
                className="flex flex-wrap gap-1 rounded-2xl bg-slate-100 p-1"
                role="tablist"
                aria-label="Filter questions"
              >
                {FILTERS.map((f) => (
                  <button
                    key={f.id}
                    role="tab"
                    aria-selected={filter === f.id}
                    onClick={() => setFilter(f.id)}
                    className={cn(
                      "rounded-xl px-3 py-1.5 text-xs font-semibold transition",
                      filter === f.id
                        ? "bg-white text-navy shadow-sm"
                        : "text-muted hover:text-navy",
                    )}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative min-h-[420px]">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-left">
                  <thead>
                    <tr className="border-b border-black/5 text-[11px] uppercase tracking-[0.12em] text-muted">
                      <th className="px-6 py-3 font-semibold">Question</th>
                      <th className="px-4 py-3 font-semibold">Source</th>
                      <th className="px-6 py-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <AnimatePresence mode="popLayout">
                      {rows.map((q) => (
                        <motion.tr
                          key={q.id}
                          layout
                          initial={reduce ? false : { opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={reduce ? undefined : { opacity: 0 }}
                          onClick={() => setSelected(q)}
                          className={cn(
                            "cursor-pointer border-b border-black/[0.04] transition hover:bg-blue/[0.03]",
                            q.status === "unanswered" && "bg-danger/[0.03]",
                          )}
                        >
                          <td className="px-6 py-4 text-sm font-medium text-navy">
                            {q.question}
                          </td>
                          <td className="px-4 py-4">
                            <SourceBadge source={q.source} label={q.sourceLabel} />
                          </td>
                          <td className="px-6 py-4">
                            <StatusBadge status={q.status} />
                          </td>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>

              <AnimatePresence>
                {selected && (
                  <DetailDrawer question={selected} onClose={() => setSelected(null)} />
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
