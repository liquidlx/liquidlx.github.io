"use client";

import { motion } from "framer-motion";
import { HighlightText } from "../ui/highlightText";
import type { TimelineItem } from "./types";
import { timelineData } from "./timelineData";

const TimelineItem = ({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="relative pb-14 pl-8 last:pb-0 md:pl-10"
  >
    <div className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-[var(--border)] via-[var(--border)] to-transparent md:left-[9px]" />
    <div className="absolute left-0 top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[var(--border)] bg-[var(--bg-elevated)] md:top-0.5">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--fg-muted)]" />
    </div>

    <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow)] transition-shadow hover:shadow-[0_16px_48px_-28px_rgba(24,24,27,0.08)]">
      <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-[var(--fg)]">
            {item.role}
          </h3>
          <a
            href={item.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--fg-muted)] underline decoration-[var(--border)] underline-offset-2 transition-colors hover:text-[var(--fg)] hover:decoration-[var(--fg-muted)]"
          >
            {item.company}
          </a>
        </div>
        <span className="shrink-0 text-xs tabular-nums text-[var(--fg-muted)]">
          {item.period}
        </span>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-[var(--fg-muted)]">
        {item.description}
      </p>

      <div className="mb-4">
        <h4 className="section-label mb-2">Impact</h4>
        <ul className="list-inside list-disc space-y-1.5 text-sm text-[var(--fg-muted)]">
          {item.achievements.map((achievement, i) => (
            <li key={i}>{achievement}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {item.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-[var(--border)] bg-[var(--bg-muted)] px-3 py-1 text-xs font-medium text-[var(--fg-muted)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const CareerTimeline = () => (
  <section
    className="border-t border-[var(--border)] bg-[var(--bg)] py-24"
    id="timeline"
  >
    <div className="mx-auto flex max-w-3xl flex-col px-4 sm:px-6">
      <p className="section-label mb-3 text-center">Experience</p>
      <HighlightText
        text="Career timeline"
        className="mb-4 text-center text-3xl font-semibold tracking-[-0.02em] sm:text-4xl"
      />
      <p className="mb-14 text-center text-sm leading-relaxed text-[var(--fg-muted)]">
        Roles where I owned services end-to-end — from schema to on-call.
      </p>
      <div>
        {timelineData.map((item, index) => (
          <TimelineItem key={item.company} item={item} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default CareerTimeline;
