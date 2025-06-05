import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { HighlightData } from "./types";

type HighlightModalProps = {
  open: boolean;
  onClose: () => void;
  highlight: HighlightData | null;
};

const HighlightModal = ({ open, onClose, highlight }: HighlightModalProps) => {
  if (!open || !highlight) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative bg-white shadow-2xl rounded-2xl p-12 max-w-2xl w-full flex flex-col overflow-hidden"
          initial={{ scale: 0.95, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 40 }}
          onClick={(e) => e.stopPropagation()}
          style={{ boxShadow: "0 4px 32px 0 rgba(0,0,0,0.08)" }}
        >
          {/* Accent gradient bar */}
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 via-fuchsia-400 to-pink-400 rounded-full opacity-80" />
          {/* Circular image, overlapping top */}
          {highlight.imageUrl && (
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10">
              <Image
                width={96}
                height={96}
                src={highlight.imageUrl}
                alt={highlight.title}
                className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md bg-white"
              />
            </div>
          )}
          <h3 className="text-2xl font-semibold mb-3 text-center text-black mt-4 group-hover:text-blue-600 transition-colors duration-200">
            {highlight.title}
          </h3>
          {/* Section 1: Description */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-1 text-gray-800">
              Description
            </h4>
            <p className="text-gray-700">{highlight.description}</p>
          </div>
          {/* Section 2: Technical Details */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2 text-gray-800">
              Technical Details
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {highlight.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
          {/* Section 3: Tech Stack */}
          <div className="mt-auto pt-4 border-t border-gray-200">
            <h4 className="text-lg font-semibold mb-2 text-gray-800">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {highlight.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/70 border border-gray-200 rounded-full text-xs text-gray-700 font-medium shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            {highlight.demoLink && (
              <a
                href={highlight.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                View Demo
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl"
            aria-label="Close"
          >
            &times;
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HighlightModal;
