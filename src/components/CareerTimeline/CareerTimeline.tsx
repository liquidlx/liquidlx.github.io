"use client";

import { motion } from "framer-motion";
import { HighlightText } from "../ui/highlightText";
import type { TimelineItem } from "./types";

const timelineData: TimelineItem[] = [
  {
    company: "Everest Systems",
    companyUrl: "https://www.everest-systems.com/",
    role: "Senior Software Engineer",
    period: "Jan 2023 – Present",
    description:
      "Working on core platform services for a large-scale ERP system, focusing on extensible architecture and automation tools.",
    achievements: [
      "Co-led development of a centralized status management tool with rule-based transitions and automated task execution",
      "Enhanced workflow builder for complex business automation, including Employee Expense processes",
      "Maintained and evolved a real-time UI presentation framework responsible for rendering dynamic views via WebSocket connections",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "React",
      "Socket.io",
      "Docker",
      "Kubernetes",
      "AWS",
      "Jest",
      "GitHub Actions",
    ],
  },
  {
    company: "Globant (Autodesk Project)",
    companyUrl: "https://www.globant.com/",
    role: "Backend Software Engineer",
    period: "Oct 2021 – Jan 2023",
    description:
      "Modernized a legacy markup system used by thousands on Autodesk’s BIM 360 platform, ensuring reliability and scalability.",
    achievements: [
      "Rewrote legacy Ruby on Rails service using Node.js, NestJS, and Prisma",
      "Built full test coverage with Jest, including unit and E2E tests integrated into Jenkins pipelines",
      "Designed and maintained database schemas and handled integration with multiple internal services",
      "Improved React components in collaboration with frontend and UX teams",
    ],
    technologies: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "BullMQ",
      "Docker",
      "Jenkins",
      "Jest",
      "React",
    ],
  },
  {
    company: "Alright Media",
    companyUrl: "http://alright.com.br/",
    role: "Founding Fullstack Engineer",
    period: "Feb 2018 – Oct 2021",
    description:
      "Led the core product development at a startup focused on ad monetization, infrastructure, and product strategy.",
    achievements: [
      "Built and led development of a JavaScript library that increased client ad revenue by 30% and reduced implementation time by 5x",
      "Maintained client dashboard and backend services using React, PHP, and Node.js",
      "Managed cloud infrastructure on AWS (EC2, S3, Route 53) to ensure uptime and scalability",
      "Acted as Tech Lead, overseeing sprints, task assignments, and team velocity",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "React",
      "PHP",
      "AWS (EC2, S3, Route53)",
    ],
  },
];

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
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative pl-8 pb-12 last:pb-0"
  >
    {/* Timeline line */}
    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200" />

    {/* Timeline dot */}
    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-white border-4 border-blue-500 -translate-x-1/2" />

    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{item.role}</h3>
          <a
            href={item.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium"
          >
            {item.company}
          </a>
        </div>
        <span className="text-sm text-gray-500 mt-1 md:mt-0">
          {item.period}
        </span>
      </div>

      <p className="text-gray-700 mb-4">{item.description}</p>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">
          Key Achievements:
        </h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {item.achievements.map((achievement, i) => (
            <li key={i} className="text-sm">
              {achievement}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {item.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const CareerTimeline = () => (
  <section className="py-20" id="timeline">
    <div className="container mx-auto px-4 flex flex-col items-center vg">
      <HighlightText
        text="Career Timeline"
        className="text-3xl font-thin-200 text-center mb-12 text-black"
      />
      <div className="max-w-3xl mx-auto">
        {timelineData.map((item, index) => (
          <TimelineItem key={item.company} item={item} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default CareerTimeline;
