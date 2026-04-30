"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  name: string;
  className?: string;
  priority?: boolean;
}

export default function ImageCarousel({
  images,
  name,
  className = "",
  priority = false,
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || index === current) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [current, isAnimating]
  );

  const prev = useCallback(() => {
    goTo((current - 1 + images.length) % images.length);
  }, [current, images.length, goTo]);

  const next = useCallback(() => {
    goTo((current + 1) % images.length);
  }, [current, images.length, goTo]);

  // Auto-play
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((i) => (i + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prev, next]);

  if (images.length === 0) {
    return (
      <div
        className={`relative overflow-hidden flex items-center justify-center ${className}`}
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
          border: "1px solid rgba(201,169,97,0.2)",
        }}
      >
        <div className="text-center px-8">
          <p className="font-playfair text-3xl text-latitude-gold mb-2">{name}</p>
          <p className="font-inter text-xs text-white/40 uppercase tracking-[0.3em]">
            Photo à venir
          </p>
        </div>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={images[0]}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden group/carousel ${className}`}>
      {/* Images stack */}
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-500"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <Image
            src={src}
            alt={`${name} — photo ${i + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={priority && i === 0}
          />
        </div>
      ))}

      {/* Gradient at bottom for controls visibility */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent z-10" />

      {/* Prev / Next buttons */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300"
        style={{
          background: "rgba(0,0,0,0.6)",
          border: "1px solid rgba(201,169,97,0.4)",
        }}
        aria-label="Image précédente"
      >
        <ChevronLeft size={20} color="#C9A961" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300"
        style={{
          background: "rgba(0,0,0,0.6)",
          border: "1px solid rgba(201,169,97,0.4)",
        }}
        aria-label="Image suivante"
      >
        <ChevronRight size={20} color="#C9A961" />
      </button>

      {/* Dot indicators + counter */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex flex-col items-center gap-2">
        {/* Counter */}
        <span
          className="font-inter text-[10px] tracking-[0.2em] uppercase"
          style={{ color: "rgba(201,169,97,0.7)" }}
        >
          {current + 1} / {images.length}
        </span>
        {/* Dots */}
        <div className="flex items-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-300"
              style={{
                width: i === current ? "20px" : "6px",
                height: "6px",
                background: i === current ? "#C9A961" : "rgba(255,255,255,0.35)",
                borderRadius: i === current ? "3px" : "50%",
              }}
              aria-label={`Aller à l'image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
