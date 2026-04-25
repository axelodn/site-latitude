"use client";

import { motion } from "framer-motion";
import { fadeInUp, heroContentVariants } from "@/lib/animations";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  cta,
}: PageHeroProps) {
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20"
      aria-label={title}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-latitude-black" aria-hidden="true" />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"
        aria-hidden="true"
      />

      {/* Decorative golden line */}
      <motion.div
        className="absolute top-1/3 left-0 right-0 h-px opacity-20"
        style={{ background: "linear-gradient(90deg, transparent, #C9A961, transparent)" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {eyebrow && (
          <motion.p
            custom={0}
            variants={heroContentVariants}
            initial="hidden"
            animate="visible"
            className="font-inter text-xs font-medium tracking-[0.4em] uppercase mb-6 text-white/60"
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h1
          custom={1}
          variants={heroContentVariants}
          initial="hidden"
          animate="visible"
          className="font-playfair font-bold text-white leading-[1.05] mb-6"
          style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)" }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            custom={2}
            variants={heroContentVariants}
            initial="hidden"
            animate="visible"
            className="font-inter font-light text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {cta && (
          <motion.div
            custom={3}
            variants={heroContentVariants}
            initial="hidden"
            animate="visible"
          >
            {cta.href ? (
              <a
                href={cta.href}
                className="inline-block font-inter text-sm font-medium px-8 py-4 text-white transition-all duration-400 tracking-widest uppercase cursor-pointer"
                style={{ background: "#C9A961" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#b8943f")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#C9A961")}
              >
                {cta.label}
              </a>
            ) : (
              <button
                onClick={cta.onClick}
                className="font-inter text-sm font-medium px-8 py-4 text-white transition-all duration-400 tracking-widest uppercase cursor-pointer"
                style={{ background: "#C9A961" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#b8943f")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#C9A961")}
              >
                {cta.label}
              </button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
