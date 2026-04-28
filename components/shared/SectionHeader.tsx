"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={centered ? "text-center" : ""}
    >
      {eyebrow && (
        <motion.p
          variants={fadeInUp}
          className="font-inter text-xs font-medium tracking-[0.4em] uppercase mb-4 text-white/60"
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        variants={fadeInUp}
        className="font-playfair text-3xl lg:text-4xl font-bold text-white mb-4"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className="font-inter text-white/70 text-lg max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
