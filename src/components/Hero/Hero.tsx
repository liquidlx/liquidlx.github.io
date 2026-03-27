"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const greetings = [
  { text: "Olá", lang: "PT" },
  { text: "Hello", lang: "EN" },
  { text: "Hola", lang: "ES" },
  { text: "Ciao", lang: "IT" },
];

const Hero = () => {
  return (
    <section
      className="hero-surface relative min-h-screen overflow-hidden px-4 pb-24 pt-28 sm:px-6 sm:pb-32 sm:pt-32"
      id="hero"
    >
      <div className="relative z-[1] mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-label mb-6"
          >
            Leonardo Collatto · Backend engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-[clamp(2rem,5.5vw,3.5rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-[var(--fg)]"
          >
            8 years building products that{" "}
            <span className="font-medium text-[var(--fg-muted)]">
              people need.
            </span>{" "}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-8 max-w-xl text-base leading-[1.65] text-[var(--fg-muted)] sm:text-[1.0625rem]"
          >
            Backend-heavy, customer-driven. Eight years shipping across ERP,
            SaaS, global payroll, and more — I care about catching problems
            before users do, shipping things that hold up under pressure, and
            building software people can rely on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#labs"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Explore labs
            </a>
            <a
              href="Leonardo Collatto - Senior Software Engineer CV.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-6 py-3 text-sm font-medium text-[var(--fg)] shadow-[var(--shadow)] transition-colors hover:bg-[var(--bg-muted)]"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-12 flex gap-5"
          >
            <a
              href="https://www.linkedin.com/in/leonardo-collatto/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-10 w-10 opacity-80 transition-opacity hover:opacity-100"
            >
              <Image
                src="/assets/icons/linkedin.svg"
                alt="LinkedIn"
                fill
                className="object-contain"
              />
            </a>
            <a
              href="https://github.com/liquidlx"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-10 w-10 opacity-80 transition-opacity hover:opacity-100"
            >
              <Image
                src="/assets/icons/github.svg"
                alt="GitHub"
                fill
                className="object-contain"
              />
            </a>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow)] sm:p-8">
            <p className="section-label mb-4">Global footprint</p>
            <div className="flex flex-wrap gap-2">
              {greetings.map((g, i) => (
                <motion.span
                  key={g.lang}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35 + i * 0.06 }}
                  className="rounded-full border border-[var(--border)] bg-[var(--bg-muted)] px-3 py-1 text-sm text-[var(--fg)]"
                >
                  <span className="font-medium">{g.text}</span>
                  <span className="ml-1.5 text-xs text-[var(--fg-muted)]">
                    {g.lang}
                  </span>
                </motion.span>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-[var(--fg-muted)]">
              Based in Brazil, collaborating with teams across the US, Europe,
              and Latin America. I translate fuzzy product goals into schemas,
              queues, and dashboards you can trust.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[var(--border)] pt-8">
              <div>
                <p className="text-2xl font-semibold tabular-nums tracking-tight text-[var(--fg)]">
                  8+
                </p>
                <p className="text-xs text-[var(--fg-muted)]">Years shipping</p>
              </div>
              <div>
                <p className="text-2xl font-semibold tabular-nums tracking-tight text-[var(--fg)]">
                  6+
                </p>
                <p className="text-xs text-[var(--fg-muted)]">Countries</p>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ delay: 1.2 }}
        aria-hidden
      >
        <div className="flex h-10 w-6 justify-center rounded-full border border-[var(--border)] pt-2">
          <motion.div
            className="h-1.5 w-1 rounded-full bg-[var(--fg-muted)]"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
