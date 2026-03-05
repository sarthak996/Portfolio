"use client";

import { achievements } from "@/data/resume";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <AnimateOnScroll>
          <h2 className="text-sm font-mono text-brand-700 dark:text-brand-400 mb-2">Achievements</h2>
          <p className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-12">Notable Work</p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="p-6 bg-white dark:bg-surface-900/50 rounded-xl border border-surface-200 dark:border-surface-800 hover:border-brand-300 dark:hover:border-brand-800 hover:shadow-sm transition-all">
                <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">{item.title}</h3>
                <p className="text-surface-600 dark:text-surface-400 text-[15px] leading-relaxed mb-4">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
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
