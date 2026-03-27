"use client";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-muted)] py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <p className="text-lg font-semibold tracking-tight text-[var(--fg)]">
          Leonardo Collatto
        </p>
        <p className="max-w-md text-sm leading-relaxed text-[var(--fg-muted)]">
          Thanks for scrolling. If you&apos;re hiring, building something
          ambitious, or just want to compare notes on backends — reach out on
          LinkedIn.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <a
            href="https://www.linkedin.com/in/leonardo-collatto/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--fg)] underline decoration-[var(--border)] underline-offset-4 transition-colors hover:decoration-[var(--fg-muted)]"
          >
            LinkedIn
          </a>
          <span className="text-[var(--border)]">·</span>
          <a
            href="https://github.com/liquidlx"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--fg)] underline decoration-[var(--border)] underline-offset-4 transition-colors hover:decoration-[var(--fg-muted)]"
          >
            GitHub
          </a>
          <span className="text-[var(--border)]">·</span>
          <a
            href="#hero"
            className="text-[var(--fg-muted)] transition-colors hover:text-[var(--fg)]"
          >
            Back to top
          </a>
        </div>
        <p className="text-xs text-[var(--fg-muted)]">
          © {new Date().getFullYear()} · Built with Next.js
        </p>
      </div>
    </footer>
  );
}
