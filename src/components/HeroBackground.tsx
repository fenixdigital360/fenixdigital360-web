"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  "/assets/hero/hero-1.jpg",
  "/assets/hero/hero-2.jpg",
  "/assets/hero/hero-3.jpg",
];

export default function HeroBackground() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div aria-hidden className="absolute inset-0 -z-20 overflow-hidden bg-bg">
      {SLIDES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-[2000ms] ease-in-out ${
            i === active ? "opacity-80" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/10 via-bg/55 to-bg" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 20%, rgba(0,12,96,0.55), transparent 45%), radial-gradient(circle at 82% 12%, rgba(128,1,166,0.4), transparent 40%)",
        }}
      />
    </div>
  );
}
