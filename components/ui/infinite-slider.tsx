"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useAnimationFrame } from "framer-motion";

interface InfiniteSliderProps {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
}

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [isHovered, setIsHovered] = useState(false);
  const offset = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const sizeRef = useRef(0);

  // Measure once after mount and on resize — avoids reading scrollWidth every frame
  useEffect(() => {
    const measure = () => {
      const inner = innerRef.current;
      if (!inner) return;
      sizeRef.current =
        direction === "horizontal"
          ? inner.scrollWidth / 2
          : inner.scrollHeight / 2;
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (innerRef.current) ro.observe(innerRef.current);
    return () => ro.disconnect();
  }, [direction]);

  useAnimationFrame((_, delta) => {
    const currentSpeed = isHovered && speedOnHover !== undefined ? speedOnHover : speed;
    const px = (currentSpeed * delta) / 1000;
    offset.current = reverse ? offset.current - px : offset.current + px;

    const inner = innerRef.current;
    const size = sizeRef.current;
    if (!inner || size === 0) return;

    if (offset.current >= size) offset.current = 0;
    if (offset.current < 0) offset.current = size;

    if (direction === "horizontal") {
      inner.style.transform = `translateX(-${offset.current}px)`;
    } else {
      inner.style.transform = `translateY(-${offset.current}px)`;
    }
  });

  const isHorizontal = direction === "horizontal";

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${className ?? ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={innerRef}
        className="flex will-change-transform"
        style={{
          flexDirection: isHorizontal ? "row" : "column",
          gap: `${gap}px`,
          width: isHorizontal ? "max-content" : undefined,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
