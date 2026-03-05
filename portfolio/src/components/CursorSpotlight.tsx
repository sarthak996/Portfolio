"use client";

import { useEffect, useState } from "react";

export default function CursorSpotlight() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isPointerFine = window.matchMedia("(pointer: fine)").matches;
    if (!isPointerFine) return;

    setVisible(true);

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[60] pointer-events-none transition-opacity"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(131, 117, 98, 0.035), transparent 40%)`,
      }}
    />
  );
}
