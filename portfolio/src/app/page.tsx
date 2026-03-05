import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <section id="about" className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <AnimateOnScroll>
              <h2 className="text-sm font-mono text-brand-700 dark:text-brand-400 mb-2">About</h2>
              <p className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-8">A Bit About Me</p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="md:col-span-2 space-y-4 text-surface-600 dark:text-surface-400 leading-relaxed">
                  <p>
                    I&apos;m a Senior Software Engineer based in Dublin, Ireland, with a passion for
                    building products that make a real difference. Over the past 7+ years, I&apos;ve
                    worked across the full stack — from crafting intuitive frontends to designing
                    scalable backend architectures and cloud infrastructure.
                  </p>
                  <p>
                    Most recently, I&apos;ve been deep into AI/ML territory — building autonomous agents,
                    RAG pipelines, and LLM-powered analytics tools. I love the intersection of
                    engineering and AI, and I&apos;m always looking for the next interesting problem to solve.
                  </p>
                  <p>
                    When I&apos;m not writing code, you&apos;ll find me mentoring junior developers,
                    exploring new technologies, or thinking about how to make software that
                    scales elegantly.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-surface-900 dark:text-surface-100 uppercase tracking-wider">
                    Quick Facts
                  </h3>
                  <ul className="space-y-2 text-sm text-surface-600 dark:text-surface-400">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-500 mt-0.5">▹</span>
                      <span>7+ years of engineering experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-500 mt-0.5">▹</span>
                      <span>Masters in Computing from DCU</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-500 mt-0.5">▹</span>
                      <span>Led teams building AI-powered platforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-500 mt-0.5">▹</span>
                      <span>Built systems serving 1M+ daily users</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-500 mt-0.5">▹</span>
                      <span>Based in Dublin, Ireland</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
