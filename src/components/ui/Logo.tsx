import { cn } from "@/lib/utils";

export function Logo({
  className,
  markOnly = false,
  light = false,
}: {
  className?: string;
  markOnly?: boolean;
  light?: boolean;
}) {
  return (
    <a
      href="#top"
      className={cn(
        "inline-flex items-center gap-2.5 font-display text-[1.05rem] font-semibold tracking-tight",
        light ? "text-white" : "text-navy",
        className,
      )}
      aria-label="Fathom home"
    >
      <span
        className={cn(
          "relative flex h-8 w-8 items-center justify-center rounded-xl",
          light
            ? "bg-white/10 ring-1 ring-white/20"
            : "bg-gradient-to-br from-blue to-violet shadow-[0_8px_20px_rgba(37,99,235,0.35)]",
        )}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path
            d="M2.5 8c2.2-3.2 4.3-4.8 5.5-4.8S11.3 4.8 13.5 8c-2.2 3.2-4.3 4.8-5.5 4.8S4.7 11.2 2.5 8Z"
            stroke="white"
            strokeWidth="1.4"
          />
          <circle cx="8" cy="8" r="1.6" fill="white" />
        </svg>
      </span>
      {!markOnly && <span className="font-semibold">Fathom</span>}
    </a>
  );
}
