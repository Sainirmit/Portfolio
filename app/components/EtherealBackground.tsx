"use client";

import { useEffect, useState } from "react";

export default function EtherealBackground() {
  const [stars, setStars] = useState<
    { top: string; left: string; size: number; delay: string }[]
  >([]);

  useEffect(() => {
    const arr = Array.from({ length: 60 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: `${Math.random() * 4}s`,
    }));
    setStars(arr);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#06060c]" />
      <div className="absolute inset-0 grid-bg opacity-60" />

      <div
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl animate-blob"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.7), transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/3 -right-32 h-[600px] w-[600px] rounded-full opacity-30 blur-3xl animate-blob"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.6), transparent 70%)",
          animationDelay: "4s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full opacity-25 blur-3xl animate-blob"
        style={{
          background:
            "radial-gradient(circle, rgba(236,72,153,0.55), transparent 70%)",
          animationDelay: "8s",
        }}
      />

      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
}
