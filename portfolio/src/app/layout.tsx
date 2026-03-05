import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import CursorSpotlight from "@/components/CursorSpotlight";

export const metadata: Metadata = {
  title: "Sarthak Sethi — Senior Software Engineer",
  description:
    "Portfolio of Sarthak Sethi — Senior Software Engineer with 7+ years of experience in React, Node.js, Python, and cloud platforms.",
  keywords: ["Sarthak Sethi", "Software Engineer", "React", "Node.js", "Portfolio", "Dublin"],
  icons: {
    icon: "/portfolio/favicon.svg",
  },
  openGraph: {
    title: "Sarthak Sethi — Senior Software Engineer",
    description: "Full-stack engineer building scalable solutions with modern web technologies.",
    type: "website",
    images: [{ url: "/portfolio/og-image.svg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-surface-50 dark:bg-surface-950 text-surface-900 dark:text-surface-100 antialiased">
        <ThemeProvider>
          {/* Background blobs */}
          <div className="blob w-72 h-72 bg-stone-400 top-0 left-[10%]" style={{ animationDelay: "0s" }} />
          <div className="blob w-72 h-72 bg-stone-300 top-[40%] right-[10%]" style={{ animationDelay: "2s" }} />
          <div className="blob w-72 h-72 bg-stone-400 bottom-[10%] left-[30%]" style={{ animationDelay: "4s" }} />

          <CursorSpotlight />
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
