"use client";

import { motion } from "framer-motion";
import { InfiniteSlider } from "./ui/infinite-slider";
import { ProgressiveBlur } from "./ui/progressive-blur";
import { GsapReveal } from "./GsapReveal";
import { viewportConfig } from "@/lib/animations";

const logos = [
  {
    name: "BNP Paribas",
    svg: (
      <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <rect width="120" height="40" rx="4" fill="none"/>
        <text x="60" y="26" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="currentColor" letterSpacing="0.5">BNP PARIBAS</text>
      </svg>
    ),
  },
  {
    name: "TotalEnergies",
    svg: (
      <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <circle cx="20" cy="20" r="8" fill="currentColor" opacity="0.7"/>
        <circle cx="20" cy="20" r="4" fill="currentColor"/>
        <text x="36" y="26" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="currentColor" letterSpacing="0.3">TotalEnergies</text>
      </svg>
    ),
  },
  {
    name: "Sanofi",
    svg: (
      <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <path d="M10 20 Q20 8 30 20 Q40 32 50 20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <text x="58" y="26" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" fill="currentColor">Sanofi</text>
      </svg>
    ),
  },
  {
    name: "Société Générale",
    svg: (
      <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <rect x="8" y="12" width="16" height="16" rx="2" fill="currentColor" opacity="0.8"/>
        <rect x="12" y="16" width="8" height="8" rx="1" fill="none" stroke="white" strokeWidth="1.5"/>
        <text x="32" y="26" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="currentColor" letterSpacing="0.2">Société Générale</text>
      </svg>
    ),
  },
  {
    name: "Capgemini",
    svg: (
      <svg viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <path d="M20 20 A10 10 0 1 1 20 19.99" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="42 10"/>
        <text x="38" y="26" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="currentColor" letterSpacing="0.3">Capgemini</text>
      </svg>
    ),
  },
  {
    name: "L'Oréal",
    svg: (
      <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <text x="50" y="26" textAnchor="middle" fontFamily="Georgia, serif" fontSize="15" fontWeight="700" fill="currentColor" letterSpacing="2">L'ORÉAL</text>
      </svg>
    ),
  },
  {
    name: "Air France",
    svg: (
      <svg viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <path d="M8 24 L22 12 L28 18 L18 24 Z" fill="currentColor" opacity="0.8"/>
        <path d="M14 28 L28 16 L32 22 L20 28 Z" fill="currentColor" opacity="0.5"/>
        <text x="40" y="26" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="currentColor" letterSpacing="0.3">Air France</text>
      </svg>
    ),
  },
  {
    name: "Engie",
    svg: (
      <svg viewBox="0 0 90 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <path d="M12 20 C12 14 18 10 24 12 C22 16 20 20 20 26 C14 26 12 24 12 20Z" fill="currentColor" opacity="0.8"/>
        <text x="34" y="26" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" fill="currentColor" letterSpacing="0.5">ENGIE</text>
      </svg>
    ),
  },
];

export default function TrustBand() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: "#08080A" }}
    >
      {/* Top content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center mb-14">
        <div>
          <GsapReveal>
            <p className="font-inter text-white/40 text-xs tracking-[0.3em] uppercase mb-5">
              Ils nous font confiance
            </p>
          </GsapReveal>
          <GsapReveal delay={0.1}>
            <h2 className="font-playfair font-normal text-white text-4xl md:text-5xl leading-tight mb-2">
              Reconnus par les experts.
            </h2>
          </GsapReveal>
          <GsapReveal delay={0.2}>
            <h2 className="font-playfair font-bold text-white text-4xl md:text-5xl leading-tight">
              Choisis par les leaders.
            </h2>
          </GsapReveal>
        </div>
      </div>

      {/* Infinite slider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportConfig}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10"
      >
        <div className="relative">
          <InfiniteSlider gap={48} speed={60} className="py-4">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center text-white/40 hover:text-white/80 transition-colors duration-300"
                style={{ minWidth: "140px" }}
              >
                {logo.svg}
              </div>
            ))}
          </InfiniteSlider>

          {/* Progressive blur edges */}
          <div className="absolute inset-y-0 left-0 w-32 z-10">
            <ProgressiveBlur direction="left" blurIntensity={6} className="absolute inset-0" />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, #08080A 0%, transparent 100%)",
              }}
            />
          </div>
          <div className="absolute inset-y-0 right-0 w-32 z-10">
            <ProgressiveBlur direction="right" blurIntensity={6} className="absolute inset-0" />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to left, #08080A 0%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Counter */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportConfig}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative z-10 font-inter text-white/25 text-xs tracking-[0.3em] uppercase text-center mt-4"
      >
        + 200 entreprises accompagnées depuis 2004
      </motion.p>
    </section>
  );
}
