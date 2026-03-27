import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import type { HighlightData } from "./types";

type HighlightModalProps = {
  open: boolean;
  onClose: () => void;
  highlight: HighlightData | null;
};

const HighlightModal = ({ open, onClose, highlight }: HighlightModalProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "var(--scrollbar-width)";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && highlight ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--fg)]/25 p-4 backdrop-blur-[2px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative flex max-h-[min(90vh,720px)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] shadow-[0_24px_80px_-24px_rgba(24,24,27,0.2)]"
            initial={{ scale: 0.98, y: 16 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.98, y: 16 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full border border-[var(--border)] bg-[var(--bg-muted)] p-2 text-[var(--fg-muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--fg)]"
              aria-label="Close"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="overflow-y-auto p-6 pb-8 pt-14 sm:p-8 sm:pt-16">
              {highlight.imageUrl && (
                <Image
                  width={100}
                  height={100}
                  src={highlight.imageUrl}
                  alt={highlight.title}
                  className="mb-4 h-48 w-full rounded-lg border border-[var(--border)] object-cover"
                />
              )}
              <h3 className="mb-4 text-2xl font-semibold tracking-tight text-[var(--fg)]">
                {highlight.title}
              </h3>

              <div className="mb-6">
                <h4 className="section-label mb-2">Description</h4>
                <p className="text-sm leading-relaxed text-[var(--fg-muted)]">
                  {highlight.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="section-label mb-2">Technical details</h4>
                <ul className="list-inside list-disc space-y-2 text-sm text-[var(--fg-muted)]">
                  {highlight.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto border-t border-[var(--border)] pt-6">
                <h4 className="section-label mb-3">Tech stack</h4>
                <div className="mb-4 flex flex-wrap gap-2">
                  {highlight.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--border)] bg-[var(--bg-muted)] px-3 py-1 text-xs font-medium text-[var(--fg)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {highlight.demoLink && (
                  <a
                    href={highlight.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  >
                    View demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default HighlightModal;
