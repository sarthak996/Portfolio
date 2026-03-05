import { personalInfo } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-surface-200 dark:border-surface-800">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-surface-500">
          Built by {personalInfo.name} with Next.js &amp; Tailwind CSS
        </p>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          Built for performance
        </span>
      </div>
    </footer>
  );
}
