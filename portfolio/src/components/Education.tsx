"use client";

import { education } from "@/data/resume";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-surface-100/50 dark:bg-surface-900/50">
      <div className="max-w-5xl mx-auto px-6">
        <AnimateOnScroll>
          <h2 className="text-sm font-mono text-brand-700 dark:text-brand-400 mb-2">Education</h2>
          <p className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-12">Academic Background</p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="p-6 bg-white dark:bg-surface-900/50 rounded-xl border border-surface-200 dark:border-surface-800">
                <p className="text-sm font-mono text-brand-700 dark:text-brand-400 mb-2">{edu.period}</p>
                <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100">{edu.degree}</h3>
                <p className="text-surface-600 dark:text-surface-400 mt-1">{edu.institution}</p>
                <p className="text-surface-500 text-sm mt-1">{edu.location}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
