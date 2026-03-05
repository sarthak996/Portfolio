"use client";

import { skills } from "@/data/resume";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-surface-100/50 dark:bg-surface-900/50">
      <div className="max-w-5xl mx-auto px-6">
        <AnimateOnScroll>
          <h2 className="text-sm font-mono text-brand-700 dark:text-brand-400 mb-2">Skills</h2>
          <p className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-12">Technologies I Work With</p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], ci) => (
            <AnimateOnScroll key={category} delay={ci * 0.1}>
              <div className="group">
                <h3 className="text-sm font-semibold text-surface-900 dark:text-surface-100 uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <div key={skill.name} className="group/skill relative">
                      <div className="px-3 py-1.5 text-sm bg-surface-200 dark:bg-surface-800 text-surface-700 dark:text-surface-300 rounded-lg hover:bg-brand-50 dark:hover:bg-brand-900/20 hover:text-brand-800 dark:hover:text-brand-300 transition-all cursor-default">
                        <span>{skill.name}</span>
                        <div className="overflow-hidden max-h-0 group-hover/skill:max-h-2 transition-all duration-300 mt-0 group-hover/skill:mt-1.5">
                          <div className="w-full h-1.5 bg-surface-300 dark:bg-surface-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-brand-500 rounded-full transition-all duration-500"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
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
