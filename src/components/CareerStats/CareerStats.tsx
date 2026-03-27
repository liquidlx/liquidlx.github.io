"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "8+",
    label: "Years of experience",
    description: "From startups to scaleups to enterprise.",
  },
  {
    value: "6+",
    label: "Countries & regions",
    description:
      "USA, Germany, UK, Colombia, Mexico, Brazil, and more — async-first.",
  },
  {
    value: "5+",
    label: "Industries",
    description:
      "HR, ERP, SaaS, AdTech, construction tech, developer tools, and more.",
  },
];

const CareerStats = () => (
  <section className="border-t border-[var(--border)] bg-[var(--bg)] py-20 sm:py-24">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <p className="section-label mb-3 text-center sm:text-left">
        By the numbers
      </p>
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] md:grid-cols-3">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="flex flex-col items-center bg-[var(--bg-elevated)] p-10 text-center md:items-start md:text-left"
          >
            <div className="text-5xl font-semibold tabular-nums tracking-tight text-[var(--fg)] md:text-6xl">
              {stat.value}
            </div>
            <div className="mt-3 text-sm font-medium text-[var(--fg)]">
              {stat.label}
            </div>
            <div className="mt-2 max-w-xs text-sm leading-relaxed text-[var(--fg-muted)]">
              {stat.description}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CareerStats;
