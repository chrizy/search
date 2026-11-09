"use client";

import { Button } from "@/components/ui/Button";
import { isValidUrl, normalizeUrl } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Loader2, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Step = "url" | "connecting" | "email" | "done";

export function AddWebsiteModal({
  open,
  onClose,
  initialUrl = "",
}: {
  open: boolean;
  onClose: () => void;
  initialUrl?: string;
}) {
  const reduce = usePrefersReducedMotion();
  const titleId = useId();
  const [step, setStep] = useState<Step>("url");
  const [url, setUrl] = useState(initialUrl);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) {
      setUrl(initialUrl);
      setStep("url");
      setEmail("");
      setError("");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, initialUrl]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const startConnect = () => {
    if (!isValidUrl(url)) {
      setError("Enter a valid website address, for example yourcompany.com");
      return;
    }
    setError("");
    setStep("connecting");
    window.setTimeout(() => setStep("email"), reduce ? 200 : 1600);
  };

  const submitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@") || !email.includes(".")) {
      setError("Enter a valid email address to join early access.");
      return;
    }
    setError("");
    setStep("done");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            className="absolute inset-0 bg-navy/50 backdrop-blur-sm"
            aria-label="Close dialog"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5"
          >
            <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue">
                  Early access · Demo flow
                </p>
                <h3 id={titleId} className="font-display text-lg font-semibold text-navy">
                  Add your website
                </h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-xl p-2 text-muted transition hover:bg-black/5 hover:text-navy"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="px-6 py-6">
              {step === "url" && (
                <div className="space-y-4">
                  <p className="text-sm leading-relaxed text-muted">
                    Enter your website URL to start the early-access onboarding flow.
                    No crawl is performed until a live backend is connected.
                  </p>
                  <label className="block text-sm font-medium text-navy" htmlFor="modal-url">
                    Website URL
                  </label>
                  <input
                    id="modal-url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && startConnect()}
                    placeholder="https://www.yourcompany.com"
                    className="w-full rounded-2xl border border-black/10 bg-slate-50 px-4 py-3 text-sm outline-none ring-blue/30 transition focus:bg-white focus:ring-2"
                  />
                  {error && <p className="text-sm text-danger">{error}</p>}
                  <Button onClick={startConnect} className="w-full">
                    Continue <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              )}

              {step === "connecting" && (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                  <Loader2 className="h-8 w-8 animate-spin text-blue" />
                  <div>
                    <p className="font-display text-lg font-semibold text-navy">
                      Preparing connection…
                    </p>
                    <p className="mt-2 text-sm text-muted">
                      Validating {normalizeUrl(url)}
                    </p>
                  </div>
                </div>
              )}

              {step === "email" && (
                <form onSubmit={submitEmail} className="space-y-4">
                  <div className="rounded-2xl bg-blue/[0.05] px-4 py-3 text-sm text-navy/80 ring-1 ring-blue/10">
                    Next step: install the Fathom snippet on{" "}
                    <span className="font-semibold">{normalizeUrl(url)}</span>. Join
                    early access to receive setup instructions.
                  </div>
                  <label className="block text-sm font-medium text-navy" htmlFor="modal-email">
                    Work email
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full rounded-2xl border border-black/10 bg-slate-50 px-4 py-3 text-sm outline-none ring-blue/30 transition focus:bg-white focus:ring-2"
                  />
                  {error && <p className="text-sm text-danger">{error}</p>}
                  <Button type="submit" className="w-full">
                    Request early access <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              )}

              {step === "done" && (
                <div className="flex flex-col items-center gap-4 py-4 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10 text-success">
                    <Check className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-display text-xl font-semibold text-navy">
                      You&apos;re on the list
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      This is a demo early-access flow. Your website has not been crawled
                      or connected yet. We&apos;ll email setup instructions when your
                      access is ready.
                    </p>
                  </div>
                  <Button onClick={onClose} variant="secondary" className="w-full">
                    Back to page
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
