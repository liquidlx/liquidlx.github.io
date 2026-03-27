"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import type { SideProject } from "./projectsData";

function PocketPreview() {
  return (
    <div className="relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden bg-[#fafafa] p-6 sm:min-h-[260px]">
      <div className="pointer-events-none absolute -right-6 top-1/2 h-44 w-28 -translate-y-1/2 rounded-[1.75rem] border border-[var(--border)] bg-white shadow-lg" />
      <div className="relative z-[1] space-y-3">
        <p className="text-[10px] font-medium tracking-[0.2em] text-[var(--fg-muted)]">
          POCKET DEV · BETA
        </p>
        <h4 className="text-xl font-semibold leading-tight tracking-tight text-[var(--fg)] sm:text-2xl">
          Ship from anywhere.
        </h4>
        <p className="max-w-[15rem] text-xs leading-relaxed text-[var(--fg-muted)]">
          Your codebase, on your phone. Agents, managed from mobile.
        </p>
      </div>
      <div className="relative z-[1] flex items-center gap-2">
        <span className="rounded-full border border-[var(--border)] bg-white px-3 py-1 text-[10px] font-medium text-[var(--fg)]">
          Get started →
        </span>
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-emerald-600/70"
          animate={{ opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_50%,rgba(16,185,129,0.04)_100%)]" />
    </div>
  );
}

function ReforgePreview() {
  return (
    <div className="relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden bg-white p-6 sm:min-h-[260px]">
      <div className="pointer-events-none absolute left-6 right-6 top-16 space-y-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="h-1 rounded-full bg-[var(--border)]"
            initial={{ scaleX: 0.25, opacity: 0.35 }}
            animate={{ scaleX: [0.25, 0.75, 0.45], opacity: [0.3, 0.55, 0.4] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "left" }}
          />
        ))}
      </div>
      <div className="relative z-[1] max-w-[18rem] space-y-3">
        <p className="text-[10px] font-medium tracking-[0.18em] text-[var(--fg-muted)]">
          REFORGE
        </p>
        <h4 className="text-lg font-semibold leading-snug tracking-tight text-[var(--fg)] sm:text-xl">
          Before you get paged,
          <br />
          <span className="text-[var(--fg-muted)]">
            we&apos;re already working on it.
          </span>
        </h4>
      </div>
      <div className="relative z-[1] flex flex-wrap gap-2">
        {["Signals", "Runbooks", "Calm UI"].map((t) => (
          <span
            key={t}
            className="rounded-md border border-[var(--border)] bg-[var(--bg-muted)] px-2 py-0.5 text-[10px] font-medium text-[var(--fg-muted)]"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(244,63,94,0.03)_0%,transparent_45%)]" />
    </div>
  );
}

function PreviewBody({ project }: { project: SideProject }) {
  if (project.imageSrc) {
    return (
      <div className="relative h-full min-h-[220px] w-full sm:min-h-[260px]">
        <Image
          src={project.imageSrc}
          alt={`${project.name} preview`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }
  if (project.preview === "reforge") return <ReforgePreview />;
  return <PocketPreview />;
}

export default function ProjectShowcase({ project }: { project: SideProject }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring = { stiffness: 260, damping: 32, mass: 0.85 };
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), spring);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), spring);

  function onPointerMove(e: React.PointerEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function onPointerLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <article className="flex flex-col gap-5">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block outline-none focus-visible:ring-2 focus-visible:ring-[var(--fg)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
        aria-label={`Open ${project.name} live site`}
      >
        <motion.div
          ref={ref}
          className="relative perspective-[1200px]"
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        >
          <div
            className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] shadow-[0_20px_60px_-28px_rgba(24,24,27,0.12)] transition-shadow duration-500 group-hover:shadow-[0_28px_70px_-28px_rgba(24,24,27,0.18)]"
            style={{ transform: "translateZ(0)" }}
          >
            <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--bg-muted)] px-3 py-2.5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ec6a5e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f4bf4f]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#61c554]" />
              </div>
              <div className="mx-auto flex min-w-0 flex-1 items-center justify-center gap-2 rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-1 text-[10px] text-[var(--fg-muted)] sm:text-[11px]">
                <svg
                  className="h-3 w-3 shrink-0 text-[var(--fg-muted)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span className="truncate font-mono text-[11px] text-[var(--fg-muted)]">
                  {project.url.replace(/^https?:\/\//, "")}
                </span>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <PreviewBody project={project} />
              <div className="pointer-events-none absolute inset-0 rounded-b-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--fg)]/[0.06] to-transparent" />
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-1.5 text-xs font-medium text-[var(--fg)] shadow-sm">
                  Open live →
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </a>
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-lg font-semibold tracking-tight text-[var(--fg)] sm:text-xl">
          {project.name}
        </h3>
        {project.badge && (
          <span
            className="rounded-full border border-[var(--border)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--fg)]"
            style={{ backgroundColor: project.accent }}
          >
            {project.badge}
          </span>
        )}
      </div>
      <p className="text-sm font-medium text-[var(--fg)]">{project.tagline}</p>
      <p className="max-w-xl text-sm leading-relaxed text-[var(--fg-muted)]">
        {project.description}
      </p>
    </article>
  );
}
