"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const links = [
  { href: "#labs", label: "Labs" },
  { href: "#stack", label: "Stack" },
  { href: "#highlights", label: "Impact" },
  { href: "#timeline", label: "Timeline" },
];

export default function SiteNav() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const shellBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(250,250,250,0)", "rgba(255,255,255,0.82)"],
  );
  const shellBorder = useTransform(
    scrollY,
    [0, 60],
    ["rgba(228,228,231,0)", "rgba(228,228,231,1)"],
  );

  return (
    <header ref={ref} className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6">
      <motion.div
        className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 shadow-[var(--shadow)] backdrop-blur-md"
        style={{
          backgroundColor: shellBg,
          borderColor: shellBorder,
        }}
      >
        <a
          href="#hero"
          className="text-sm font-semibold tracking-tight text-[var(--fg)]"
        >
          LC.
        </a>
        <nav className="flex max-w-[55vw] items-center gap-0.5 overflow-x-auto sm:max-w-none sm:gap-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="shrink-0 rounded-full px-2.5 py-1.5 text-[11px] font-medium text-[var(--fg-muted)] transition-colors hover:bg-black/[0.04] hover:text-[var(--fg)] sm:px-3 sm:text-xs"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="https://www.linkedin.com/in/leonardo-collatto/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-1.5 text-xs font-medium text-[var(--fg)] transition-colors hover:bg-[var(--bg-muted)]"
        >
          Let&apos;s talk
        </a>
      </motion.div>
    </header>
  );
}
