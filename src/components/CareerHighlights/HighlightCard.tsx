"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import type { HighlightData } from "./types";

type HighlightCardProps = {
  onClick?: () => void;
} & HighlightData;

const HighlightCard = ({
  title,
  description,
  technologies,
  imageUrl,
  onClick,
}: HighlightCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.5 }}
    className="relative bg-white/60 backdrop-blur-md border border-gray-200/40 shadow-lg hover:shadow-2xl hover:border-blue-400/60 transition-all duration-300 flex flex-col items-center cursor-pointer rounded-2xl p-8 pt-16 group overflow-hidden"
    onClick={onClick}
    tabIndex={0}
    role="button"
    style={{ boxShadow: "0 4px 32px 0 rgba(0,0,0,0.08)" }}
    whileHover={{ scale: 1.035 }}
    whileTap={{ scale: 0.98 }}
  >
    {/* Accent gradient bar */}
    <span className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 via-fuchsia-400 to-pink-400 rounded-full opacity-80" />
    {/* Circular image, overlapping top */}
    {imageUrl && (
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10">
        <Image
          width={96}
          height={96}
          src={imageUrl}
          alt={title}
          className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md bg-white"
        />
      </div>
    )}
    <h3 className="text-lg font-semibold mb-2 text-center text-black mt-4 group-hover:text-blue-600 transition-colors duration-200">
      {title}
    </h3>
    <p className="text-gray-700 mb-4 text-center text-sm line-clamp-3 font-normal">
      {description}
    </p>
    <div className="flex flex-wrap gap-2 mb-2 justify-center">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 bg-white/70 border border-gray-200 rounded-full text-xs text-gray-700 font-medium shadow-sm"
        >
          {tech}
        </span>
      ))}
    </div>
    <span className="text-blue-500 text-xs mt-2 underline underline-offset-4 decoration-dotted group-hover:decoration-solid transition-all duration-200">
      Click for more
    </span>
  </motion.div>
);

export default HighlightCard;
