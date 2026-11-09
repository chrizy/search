"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/** Safe for SSR — returns false until mounted so markup matches the server. */
export function usePrefersReducedMotion() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return false;
  return Boolean(reduce);
}
