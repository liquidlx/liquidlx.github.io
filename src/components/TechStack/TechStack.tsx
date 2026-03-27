"use client";

import Image from "next/image";
import type { TechItem } from "./types";
import { HighlightText } from "../ui/highlightText";
import { motion } from "framer-motion";

const techStack: TechItem[] = [
  { name: "Typescript", icon: "/assets/icons/typescript.svg" },
  { name: "Javascript", icon: "/assets/icons/javascript.svg" },
  { name: "Node.js", icon: "/assets/icons/nodejs.svg" },
  { name: "React.js", icon: "/assets/icons/react.svg" },
  { name: "NestJS", icon: "/assets/icons/nestjs.svg" },
  { name: "Prisma", icon: "/assets/icons/prisma.svg" },
  { name: "MySQL", icon: "/assets/icons/mysql.svg" },
  { name: "PostgreSQL", icon: "/assets/icons/postgresql.svg" },
  { name: "MongoDB", icon: "/assets/icons/mongodb.svg" },
  { name: "Redis", icon: "/assets/icons/redis.svg" },
  { name: "AWS", icon: "/assets/icons/aws.svg" },
  { name: "Docker", icon: "/assets/icons/docker.svg" },
  { name: "Github Actions", icon: "/assets/icons/github.svg" },
];

const TechStack = () => {
  return (
    <section
      className="border-t border-[var(--border)] bg-[var(--bg-muted)] py-20"
      id="stack"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 sm:px-6">
        <p className="section-label mb-3">Inventory</p>
        <HighlightText
          text="Tech stack"
          className="mb-12 text-center text-3xl font-semibold tracking-[-0.02em] sm:text-4xl"
        />
        <div className="relative w-full overflow-hidden mask-[linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            className="flex w-max whitespace-nowrap"
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          >
            {[...techStack, ...techStack, ...techStack].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="mx-3 flex items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-5 py-2.5 shadow-[var(--shadow)]"
              >
                <div className="relative h-6 w-6 shrink-0">
                  <Image
                    src={tech.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-[var(--fg)]">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
