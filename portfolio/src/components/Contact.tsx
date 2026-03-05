"use client";

import { useState, FormEvent } from "react";
import { personalInfo } from "@/data/resume";
import AnimateOnScroll from "./AnimateOnScroll";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-sm font-mono text-brand-700 dark:text-brand-400 mb-2">Contact</h2>
            <p className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-4">Get In Touch</p>
            <p className="text-surface-500 dark:text-surface-400 max-w-md mx-auto leading-relaxed">
              I&apos;m always open to new opportunities and interesting conversations.
              Whether you have a question or just want to say hi, feel free to reach out.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto space-y-4 mb-10"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-surface-300 dark:border-surface-700 bg-white dark:bg-surface-900 text-surface-900 dark:text-surface-100 placeholder-surface-400 dark:placeholder-surface-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors text-sm"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-surface-300 dark:border-surface-700 bg-white dark:bg-surface-900 text-surface-900 dark:text-surface-100 placeholder-surface-400 dark:placeholder-surface-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors text-sm"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-surface-300 dark:border-surface-700 bg-white dark:bg-surface-900 text-surface-900 dark:text-surface-100 placeholder-surface-400 dark:placeholder-surface-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-6 py-3 bg-surface-900 dark:bg-surface-100 text-white dark:text-surface-900 text-sm font-medium rounded-lg hover:bg-surface-800 dark:hover:bg-surface-200 transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent!" : "Send Message"}
            </button>
            {status === "error" && (
              <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
            )}
          </form>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center px-6 py-3 border border-surface-300 dark:border-surface-700 text-surface-700 dark:text-surface-300 text-sm font-medium rounded-lg hover:border-surface-400 dark:hover:border-surface-600 hover:bg-surface-100 dark:hover:bg-surface-900 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email Directly
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-surface-300 dark:border-surface-700 text-surface-700 dark:text-surface-300 text-sm font-medium rounded-lg hover:border-surface-400 dark:hover:border-surface-600 hover:bg-surface-100 dark:hover:bg-surface-900 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
          <p className="text-surface-500 text-sm mt-6 text-center">{personalInfo.email}</p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
