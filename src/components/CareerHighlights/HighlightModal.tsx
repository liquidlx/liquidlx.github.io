import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import type { HighlightData } from "./types";

type HighlightModalProps = {
  open: boolean;
  onClose: () => void;
  highlight: HighlightData | null;
};

const HighlightModal = ({ open, onClose, highlight }: HighlightModalProps) => {
  useEffect(() => {
    if (open) {
      // Disable scroll on the body
      document.body.style.overflow = "hidden";
      // Add padding to prevent layout shift
      document.body.style.paddingRight = "var(--scrollbar-width)";
    } else {
      // Re-enable scroll on the body
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    // Cleanup function to ensure scroll is re-enabled if component unmounts
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  if (!open || !highlight) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative bg-white shadow-2xl rounded-2xl p-8 max-w-2xl w-full flex flex-col overflow-hidden md:max-h-[90vh] h-full md:h-auto md:mx-4"
          initial={{ scale: 0.95, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 40 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Scrollable content */}
          <div className="overflow-y-auto h-full md:max-h-[calc(90vh-4rem)] pr-2">
            {highlight.imageUrl && (
              <Image
                width={100}
                height={100}
                src={highlight.imageUrl}
                alt={highlight.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}
            <h3 className="text-2xl font-bold mb-3 text-black">
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
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-black"
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
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HighlightModal;
