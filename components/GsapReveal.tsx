"use client";

import { useEffect, useRef } from "react";

interface GsapRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function GsapReveal({ children, delay = 0, className }: GsapRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = innerRef.current;
    const trigger = wrapperRef.current;
    if (!el || !trigger) return;

    // Lazy-load GSAP seulement quand le composant est monté
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
          el,
          { yPercent: 105, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    });
  }, [delay]);

  return (
    <div ref={wrapperRef} style={{ overflow: "hidden" }} className={className}>
      <div ref={innerRef}>{children}</div>
    </div>
  );
}
