"use client";

import { useRef, useEffect } from "react";

interface InfiniteSliderProps {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
  // kept for API compat but unused — CSS animation doesn't vary on hover
  speedOnHover?: number;
}

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 100,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const innerRef = useRef<HTMLDivElement>(null);

  // Compute CSS animation duration once after mount: duration = half-width / speed
  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    const compute = () => {
      const size =
        direction === "horizontal"
          ? inner.scrollWidth / 2
          : inner.scrollHeight / 2;
      if (size <= 0) return;
      const dur = size / speed;
      inner.style.setProperty("--slider-dur", `${dur}s`);
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(inner);
    return () => ro.disconnect();
  }, [direction, speed]);

  const isHorizontal = direction === "horizontal";
  const keyframe = isHorizontal ? "slide-h" : "slide-v";

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div
        ref={innerRef}
        className="flex will-change-transform"
        style={{
          flexDirection: isHorizontal ? "row" : "column",
          gap: `${gap}px`,
          width: isHorizontal ? "max-content" : undefined,
          animation: `${keyframe} var(--slider-dur, 80s) linear infinite ${
            reverse ? "reverse" : "normal"
          }`,
        }}
      >
        {children}
        {children}
      </div>
      <style>{`
        @keyframes slide-h {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes slide-v {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </div>
  );
}
