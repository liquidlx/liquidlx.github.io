"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HighlightText } from "../ui/highlightText";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-black"
      id="hero"
    >
      <div className="w-full max-w-xl px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6"
        >
          <HighlightText text="Backend Software Engineer" />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-100 mb-8"
        >
          Hi, I&apos;m{" "}
          <motion.span
            animate={{
              textShadow: [
                "0 0 8px #3b82f6, 0 0 16px #a21caf",
                "0 0 16px #3b82f6, 0 0 32px #a21caf",
                "0 0 8px #3b82f6, 0 0 16px #a21caf",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="font-bold font-mono text-white"
          >
            Leonardo
          </motion.span>
          . I&apos;m a software engineer with over 7 years of experience
          crafting robust and scalable backend solutions, with a customer-driven
          mindset solving real-world problems with creativity and innovation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-8 text-gray-400 mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="relative items-center justify-center w-10 h-10"
          >
            <a
              href="https://www.linkedin.com/in/leonardo-collatto/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <Image
                src="/assets/icons/linkedin.svg"
                alt="LinkedIn icon"
                fill
                className="object-contain"
              />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="relative items-center justify-center w-10 h-10"
          >
            <a
              href="https://github.com/liquidlx"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <Image
                src="/assets/icons/github_white.svg"
                alt="LinkedIn icon"
                fill
                className="object-contain"
              />
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8"
        >
          <motion.a
            href="#tech-stack"
            className="border border-white text-white px-8 py-3 rounded-full text-base sm:text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Check Highlights
          </motion.a>
          <motion.a
            href="Leonardo Collatto - Senior Software Engineer CV.pdf"
            download
            className="bg-white text-gray-900 px-8 py-3 rounded-full text-base sm:text-lg font-medium hover:bg-gray-200 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
