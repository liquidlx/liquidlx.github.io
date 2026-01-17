import type { TimelineItem } from "./types";

export const timelineData: TimelineItem[] = [
  {
    company: "Deel",
    companyUrl: "https://www.deel.com/",
    role: "Backend Engineer",
    period: "July 2025 – Present",
    description:
      "Working on backend services for time-off and payroll systems at Deel, focusing on performance optimization, real-time data processing and system reliability.",
    achievements: [
      "Prevented recurring deadlocks in the codebase using advisory lock technique in a reusable way",
      "Improved performance by 30% querying time off related data to payroll report",
      "Collaborated with team on time-off payroll optimization, creating features, tests, and improving performance",
      "Building a real-time data processing pipeline for payroll processing related to time-off data",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Jest",
    ],
  },
  {
    company: "Everest Systems",
    companyUrl: "https://www.everest-systems.com/",
    role: "Senior Software Engineer",
    period: "Jan 2023 – June 2025",
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
