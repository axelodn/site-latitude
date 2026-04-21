"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { viewportConfig } from "@/lib/animations";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      transition: { duration: 0.4 },
    }),
  };

  const t = testimonials[current];

  return (
    <section
      className="bg-white py-24 md:py-32"
      aria-labelledby="testimonials-title"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="font-inter text-xs font-medium tracking-[0.4em] uppercase mb-4"
            style={{ color: "#C9A961" }}
          >
            Ils nous font confiance
          </p>
          <h2
            id="testimonials-title"
            className="font-playfair font-bold text-latitude-black text-4xl md:text-5xl leading-tight"
          >
            Ce que disent nos clients de notre
            <br className="hidden md:block" /> agence événementielle
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          role="region"
          aria-label="Témoignages clients"
          aria-live="polite"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="text-center"
            >
              {/* Stars */}
              <div
                className="flex justify-center gap-1 mb-8"
                aria-label={`Note : ${t.rating} étoiles sur 5`}
              >
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#C9A961"
                    stroke="none"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-10">
                <p
                  className="font-playfair italic text-latitude-black leading-relaxed max-w-3xl mx-auto"
                  style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center gap-1">
                <div
                  className="w-10 h-px mb-4"
                  style={{ background: "#C9A961" }}
                  aria-hidden="true"
                />
                <p className="font-inter font-medium text-latitude-black text-sm">
                  {t.author}
                </p>
                <p className="font-inter text-xs text-latitude-gray-dark tracking-wide">
                  {t.role} · {t.company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 border border-latitude-gray-light flex items-center justify-center hover:border-latitude-black transition-colors duration-300 cursor-pointer"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>

            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Naviguer entre les témoignages">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Témoignage ${i + 1}`}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer"
                  style={{
                    background: i === current ? "#C9A961" : "#E8E8E3",
                    transform: i === current ? "scale(1.3)" : "scale(1)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-latitude-gray-light flex items-center justify-center hover:border-latitude-black transition-colors duration-300 cursor-pointer"
              aria-label="Témoignage suivant"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
