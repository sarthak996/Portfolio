"use client";

import { projects } from "@/data/resume";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <AnimateOnScroll>
          <h2 className="text-sm font-mono text-brand-700 dark:text-brand-400 mb-2">Projects</h2>
          <p className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-12">Things I&apos;ve Built</p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <AnimateOnScroll key={project.name} delay={i * 0.1}>
              <div className="p-6 bg-white dark:bg-surface-900/50 rounded-xl border border-surface-200 dark:border-surface-800 hover:border-brand-300 dark:hover:border-brand-800 hover:shadow-sm transition-all h-full flex flex-col">
                <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">
                  {project.name}
                </h3>
                <p className="text-surface-600 dark:text-surface-400 text-[15px] leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono bg-brand-50 dark:bg-brand-900/20 text-brand-800 dark:text-brand-300 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-brand-700 dark:text-brand-400 hover:text-brand-800 dark:hover:text-brand-300 font-medium"
                  >
                    Visit Project
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
