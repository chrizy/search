"use client";

import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const LINKS = [
  { href: "#product", label: "Product" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#for-ai-agents", label: "For AI agents" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar({ onAddWebsite }: { onAddWebsite: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="section-pad mx-auto max-w-7xl">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 transition-all duration-300 sm:px-5",
            scrolled
              ? "glass h-14 shadow-[0_12px_40px_rgba(15,23,42,0.08)]"
              : "h-16 bg-transparent",
          )}
        >
          <Logo />

          <div className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition hover:text-navy"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#signin"
              className="px-2 text-sm font-medium text-muted transition hover:text-navy"
            >
              Sign in
            </a>
            <Button onClick={onAddWebsite} className="!py-2.5 !text-[13px]">
              Add your website
            </Button>
          </div>

          <button
            className="rounded-xl p-2 text-navy md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            className="section-pad absolute inset-x-0 top-full md:hidden"
          >
            <div className="glass mt-2 overflow-hidden rounded-3xl p-4 shadow-xl">
              <div className="flex flex-col gap-1">
                {LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-navy hover:bg-black/[0.03]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-3 border-t border-black/5 pt-3">
                <a
                  href="#signin"
                  className="mb-2 block rounded-xl px-4 py-3 text-sm font-medium text-muted"
                  onClick={() => setOpen(false)}
                >
                  Sign in
                </a>
                <Button
                  className="w-full"
                  onClick={() => {
                    setOpen(false);
                    onAddWebsite();
                  }}
                >
                  Add your website
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
