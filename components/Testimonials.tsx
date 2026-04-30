"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";
import { viewportConfig } from "@/lib/animations";
import { GsapReveal } from "./GsapReveal";

export default function Testimonials() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "#0D0C09", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      aria-labelledby="testimonials-title"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <GsapReveal>
            <p
              className="font-inter text-xs font-medium tracking-[0.4em] uppercase mb-4"
              style={{ color: "#C9A961" }}
            >
              Témoignages
            </p>
          </GsapReveal>
          <GsapReveal delay={0.1}>
            <h2
              id="testimonials-title"
              className="font-playfair font-bold text-white text-4xl md:text-5xl leading-tight max-w-2xl"
            >
              Ce que nos clients disent de nous
            </h2>
          </GsapReveal>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-8 border border-white/8 hover:border-white/20 transition-all duration-500"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              {/* Large quote mark */}
              <span
                className="absolute top-6 right-8 font-playfair text-7xl leading-none select-none pointer-events-none"
                style={{ color: "rgba(201,169,97,0.15)" }}
                aria-hidden="true"
              >
                "
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-6" aria-label={`${t.rating} étoiles`}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="#C9A961" stroke="none" aria-hidden="true" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-8">
                <p className="font-playfair italic text-white/80 text-lg leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Initials avatar */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-inter text-xs font-bold"
                  style={{ background: "rgba(201,169,97,0.15)", color: "#C9A961" }}
                >
                  {t.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-inter font-medium text-white text-sm">{t.author}</p>
                  <p className="font-inter text-xs text-white/40 mt-0.5">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>

              {/* Gold bottom border on hover */}
              <div
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: "linear-gradient(90deg, #C9A961, transparent)" }}
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
