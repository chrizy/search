"use client";

import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy text-white shadow-[0_10px_30px_rgba(11,18,32,0.22)] hover:bg-[#152038] hover:-translate-y-0.5",
  secondary:
    "bg-white/80 text-navy ring-1 ring-black/8 hover:bg-white hover:ring-black/12 hover:-translate-y-0.5",
  ghost: "bg-transparent text-navy/80 hover:text-navy hover:bg-black/[0.03]",
  dark: "bg-white text-navy shadow-[0_12px_40px_rgba(0,0,0,0.25)] hover:bg-white/95 hover:-translate-y-0.5",
};

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
