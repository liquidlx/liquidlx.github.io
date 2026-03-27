"use client";

import { motion } from "framer-motion";
import ProjectShowcase from "./ProjectShowcase";
import { sideProjects } from "./projectsData";

export default function SideProjects() {
  return (
    <section
      id="labs"
      className="relative border-t border-[var(--border)] bg-[var(--bg-elevated)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <p className="section-label mb-4">Side projects</p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[var(--fg)] sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
            Things I build{" "}
            <span className="font-normal text-[var(--fg-muted)]">
              after hours
            </span>
            .
          </h2>
          <p className="mt-5 text-base leading-[1.65] text-[var(--fg-muted)]">
            Product-shaped experiments. Building things people want.
          </p>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          {sideProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <ProjectShowcase project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
