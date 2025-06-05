"use client";

import { motion } from "framer-motion";
import { HighlightText } from "../ui/highlightText";
import type { TimelineItem } from "./types";
import { timelineData } from "./timelineData";

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
  <section className="py-20 bg-white" id="timeline">
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
