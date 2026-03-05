"use client";

import { useState, useEffect } from "react";

const titles = [
  "Senior Software Engineer",
  "Full-Stack Developer",
  "AI Engineer",
  "Tech Lead",
];

export default function TypingEffect() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < current.length) {
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setDeleting(true), 1500);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex(charIndex - 1);
          } else {
            setDeleting(false);
            setTitleIndex((titleIndex + 1) % titles.length);
          }
        }
      },
      deleting ? 30 : 60
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex]);

  return (
    <span>
      {titles[titleIndex].slice(0, charIndex)}
      <span className="inline-block w-[2px] h-[1em] bg-brand-500 ml-0.5 animate-pulse align-middle" />
    </span>
  );
}
