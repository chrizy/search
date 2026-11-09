"use client";

import { Button } from "@/components/ui/Button";
import { isValidUrl } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function FinalCTA({ onAddWebsite }: { onAddWebsite: (url?: string) => void }) {
  const reduce = usePrefersReducedMotion();
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (!url.trim() || !isValidUrl(url)) {
      setError("Enter a valid website address to continue");
      return;
    }
    setError("");
    onAddWebsite(url);
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="section-pad mx-auto max-w-6xl">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[36px] bg-[#070b16] px-6 py-16 text-center shadow-[0_40px_120px_rgba(37,99,235,0.25)] sm:px-12 sm:py-20"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue/30 blur-3xl animate-pulse-glow" />
            <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-violet/30 blur-3xl animate-pulse-glow" />
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/20 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
          </div>

          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan/80">
              Ready when you are
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl md:text-5xl">
              What are people and AI trying to find out about your business?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65">
              Connect your website and discover the questions, opportunities and knowledge
              gaps you&apos;ve been missing.
            </p>

            <div className="mx-auto mt-8 max-w-xl">
              <div className="flex flex-col gap-3 rounded-2xl bg-white/10 p-2 ring-1 ring-white/15 backdrop-blur sm:flex-row sm:items-center">
                <input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && submit()}
                  placeholder="Enter your website URL"
                  aria-label="Website URL"
                  className="w-full flex-1 rounded-xl bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/40"
                />
                <Button variant="dark" onClick={submit} className="shrink-0">
                  Add your website <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              {error && <p className="mt-2 text-sm text-red-300">{error}</p>}
              <p className="mt-4 text-xs text-white/45">
                Simple installation. No website rebuild required.
              </p>
            </div>

            <p className="mt-8 text-sm font-medium text-white/70">
              Start understanding what humans and AI agents want to know about you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
