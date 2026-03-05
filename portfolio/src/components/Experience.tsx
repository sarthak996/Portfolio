"use client";

import { experience } from "@/data/resume";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface-100/50 dark:bg-surface-900/50">
      <div className="max-w-5xl mx-auto px-6">
        <AnimateOnScroll>
          <h2 className="text-sm font-mono text-brand-700 dark:text-brand-400 mb-2">Experience</h2>
          <p className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-12">Where I&apos;ve Worked</p>
        </AnimateOnScroll>

        <div className="space-y-12">
          {experience.map((job, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="relative pl-8 border-l-2 border-surface-300 dark:border-surface-700">
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-surface-50 dark:bg-surface-950 border-2 border-brand-500" />

                <div className="mb-2">
                  <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100">{job.role}</h3>
                  <p className="text-brand-700 dark:text-brand-400 font-medium">
                    {job.company}
                    <span className="text-surface-500 font-normal"> — {job.location}</span>
                  </p>
                  <p className="text-sm text-surface-500 font-mono mt-1">{job.period}</p>
                </div>

                <ul className="mt-4 space-y-3">
                  {job.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-surface-600 dark:text-surface-400 text-[15px] leading-relaxed">
                      <span className="text-brand-500 mt-1.5 shrink-0">▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-mono bg-brand-50 dark:bg-brand-900/20 text-brand-800 dark:text-brand-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
