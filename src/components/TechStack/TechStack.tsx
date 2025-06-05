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
    <section className="py-20 bg-white overflow-hidden w-full" id="tech-stack">
      <div className="mx-auto w-full flex flex-col items-center">
        <HighlightText
          text="Tech Stack"
          className="text-3xl font-thin-200 text-center mb-12 text-black"
        />
        <div className="relative w-full overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            className="flex whitespace-nowrap"
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full mx-4"
              >
                <div className="w-6 h-6 relative">
                  <Image
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <span className="font-medium text-black">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
