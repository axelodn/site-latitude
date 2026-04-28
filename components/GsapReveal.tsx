"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface GsapRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Wraps content in a clip-path reveal : le texte monte de derrière un masque.
 * Effet visible : plus dramatique qu'un simple fade.
 */
export function GsapReveal({ children, delay = 0, className }: GsapRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = innerRef.current;
    if (!el) return;

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
          trigger: wrapperRef.current,
          start: "top 88%",
          once: true,
        },
      }
    );
  }, [delay]);

  return (
    <div ref={wrapperRef} style={{ overflow: "hidden" }} className={className}>
      <div ref={innerRef}>{children}</div>
    </div>
  );
}
