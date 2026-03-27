"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import type { HighlightData } from "./types";

type HighlightCardProps = {
  onClick?: () => void;
} & HighlightData;

const HighlightCard = ({
  title,
  description,
  technologies,
  imageUrl,
  onClick,
}: HighlightCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.5 }}
    className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-8 pt-14 shadow-[var(--shadow)] transition-shadow hover:shadow-[0_16px_48px_-28px_rgba(24,24,27,0.1)]"
    onClick={onClick}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick?.();
      }
    }}
    tabIndex={0}
    role="button"
    whileHover={{ y: -3 }}
    whileTap={{ scale: 0.995 }}
  >
    <span className="absolute left-6 top-0 h-0.5 w-12 bg-[var(--fg)]" />
    {imageUrl && (
      <div className="absolute -top-10 left-1/2 z-10 -translate-x-1/2">
        <Image
          width={96}
          height={96}
          src={imageUrl}
          alt={title}
          className="h-24 w-24 rounded-full border-4 border-[var(--bg-elevated)] object-cover shadow-md"
        />
      </div>
    )}
    <h3 className="mt-2 text-center text-lg font-semibold tracking-tight text-[var(--fg)] transition-colors group-hover:text-[var(--fg-muted)]">
      {title}
    </h3>
    <p className="mb-4 mt-3 line-clamp-3 text-center text-sm leading-relaxed text-[var(--fg-muted)]">
      {description}
    </p>
    <div className="mb-2 flex flex-wrap justify-center gap-2">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-[var(--border)] bg-[var(--bg-muted)] px-3 py-1 text-xs font-medium text-[var(--fg-muted)]"
        >
          {tech}
        </span>
      ))}
    </div>
    <span className="mt-auto pt-2 text-center text-xs font-medium text-[var(--fg)] underline decoration-[var(--border)] underline-offset-4 transition-colors group-hover:decoration-[var(--fg-muted)]">
      Open story
    </span>
  </motion.div>
);

export default HighlightCard;
