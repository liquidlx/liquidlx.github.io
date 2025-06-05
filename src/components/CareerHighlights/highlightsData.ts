import { HighlightData } from "./types";

export const highlightsData: HighlightData[] = [
  {
    title: "Intelligent Ad Monetization Library - Alright",
    description:
      "Led the development of a lightweight JavaScript library aimed at increasing ad revenue for publisher websites struggling with standard monetization solutions. The project increased the company revenue by 20% and sped up the time to market by 5 times.",
    details: [
      "Significantly contributed in the entire development process from ideation to deployment.",
      "Responsible to report directly to the CEO and CTO.",
      "Created a modular, client-specific JS library that dynamically integrated multiple ad providers.",
      "Deployed the library on AWS S3 and CloudFront to enable quick deployment per client.",
      "Integrated third-party APIs and optimized bid requests using Prebid.js.",
      "Created a dashboard to monitor the performance of the library and the ad providers using PHP and MySQL.",
    ],
    technologies: ["Javascript", "AWS", "PHP", "MySQL"],
  },
  {
    title: "ERP Presentation Engine – Everest",
    description:
      "Maintained an engine to streamline and standardize frontend-backend communication in Everest’s ERP platform by allowing developers to define application behavior through declarative JSON schemas and implementation files. Used by 70+ developers.",
    details: [
      "Implemented a custom JSON schema to define the application behavior and data bindings.",
      "Centralized permission handling, data access, and action dispatching within the engine.",
      "Handled real-time updates and page lifecycle events through WebSocket protocol.",
      "Standardized application development across teams and significantly reduced page setup and development time.",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "WebSocket",
      "Socket.io",
      "PostgreSQL",
      "React",
      "Jest",
    ],
  },
  {
    title: "2D Markup Service Migration – Autodesk BIM 360",
    description:
      "Contributed to a high-impact annotation system used by thousands of users in Autodesk's BIM 360 platform. Focused on modernizing a legacy service to improve performance, maintainability, and security.",
    details: [
      "Rewrote a legacy Ruby on Rails markup service into a modern, scalable backend using Node.js (NestJS) and Prisma ORM.",
      "Improved test coverage and reliability by implementing robust unit tests with Jest and integrating E2E tests into the CI pipeline via Jenkins.",
      "Designed and evolved database schemas in Prisma with PostgreSQL to support changing business logic.",
      "Integrated multiple internal APIs to streamline data flow and communication across distributed services.",
      "Maintained and updated React components to align the UI with new backend logic in close collaboration with frontend and design teams.",
    ],
    technologies: [
      "Node.js",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Ruby on Rails",
      "React",
      "Jest",
      "Jenkins",
    ],
  },
];
