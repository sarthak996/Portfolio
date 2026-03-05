"use client";

import { personalInfo } from "@/data/resume";
import { motion } from "framer-motion";
import TypingEffect from "./TypingEffect";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          {/* Profile photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24 rounded-full overflow-hidden mb-6 ring-4 ring-brand-200 dark:ring-brand-900/50"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/portfolio/profile.jpeg" alt="Sarthak Sethi" className="w-full h-full object-cover" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-brand-700 dark:text-brand-400 font-mono text-sm mb-4"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold text-surface-900 dark:text-surface-100 mb-4"
          >
            {personalInfo.name}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl font-semibold text-surface-400 dark:text-surface-500 mb-6"
          >
            <TypingEffect />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-surface-600 dark:text-surface-400 leading-relaxed mb-8 max-w-xl"
          >
            {personalInfo.summary}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#experience"
              className="inline-flex items-center px-6 py-3 bg-surface-900 dark:bg-surface-100 text-white dark:text-surface-900 text-sm font-medium rounded-lg hover:bg-surface-800 dark:hover:bg-surface-200 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-surface-300 dark:border-surface-700 text-surface-700 dark:text-surface-300 text-sm font-medium rounded-lg hover:border-surface-400 dark:hover:border-surface-600 hover:bg-surface-100 dark:hover:bg-surface-900 transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-5 mt-10"
          >
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-surface-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors" aria-label="LinkedIn">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-surface-400 hover:text-surface-900 dark:hover:text-surface-100 transition-colors" aria-label="GitHub">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-surface-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors" aria-label="Email">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            <span className="text-surface-400 text-sm ml-2">
              {personalInfo.location}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
