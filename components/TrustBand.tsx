"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { InfiniteSlider } from "./ui/infinite-slider";
import { ProgressiveBlur } from "./ui/progressive-blur";
import { GsapReveal } from "./GsapReveal";
import { viewportConfig } from "@/lib/animations";

const logos: { name: string; file: string; imgClass?: string }[] = [
  { name: "EDF",               file: "edf.webp" },
  { name: "Crédit Mutuel",     file: "credit-mutuel.webp" },
  { name: "Coca-Cola",         file: "coca-cola.webp" },
  { name: "BNP Paribas",       file: "bnp-paribas.webp" },
  { name: "L'Oréal",           file: "loreal.webp" },
  { name: "Volvo",             file: "volvo.webp" },
  { name: "LVMH",              file: "lvmh.webp" },
  { name: "Sanofi",            file: "sanofi.webp" },
  { name: "AXA",               file: "axa.webp" },
  { name: "Bouygues",          file: "bouygues.webp" },
  { name: "Eiffage",           file: "eiffage.webp" },
  { name: "Vinci",             file: "vinci.webp" },
  { name: "ENGIE",             file: "engie.webp" },
  { name: "TotalEnergies",     file: "totalenergies.webp" },
  { name: "Société Générale",  file: "societe-generale.webp" },
  { name: "SNCF",              file: "sncf.webp" },
  { name: "Renault",           file: "renault.webp" },
  { name: "Danone",            file: "danone.webp" },
  { name: "ManoMano",          file: "manomano.webp" },
  { name: "Stade Français",    file: "stade-francais.webp", imgClass: "max-h-12 w-auto" },
  { name: "Veolia",            file: "veolia.webp" },
  { name: "Thales",            file: "thales.webp" },
  { name: "Capgemini",         file: "capgemini.webp" },
  { name: "Air France",        file: "air-france.webp" },
];

export default function TrustBand() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: "#08080A" }}
    >
      {/* Top content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center mb-14">
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

      {/* Infinite slider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportConfig}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10"
      >
        <div className="relative">
          <InfiniteSlider gap={20} speed={50} className="py-4">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center px-6 py-3 transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.97)",
                  borderRadius: "6px",
                  minWidth: "140px",
                  height: "60px",
                }}
              >
                <Image
                  src={`/images/logos/${logo.file}`}
                  alt={logo.name}
                  width={120}
                  height={40}
                  className={`object-contain w-auto ${logo.imgClass ?? "max-h-9"}`}
                  unoptimized
                />
              </div>
            ))}
          </InfiniteSlider>

          {/* Progressive blur edges — desktop only */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-32 z-10">
            <ProgressiveBlur direction="left" blurIntensity={6} className="absolute inset-0" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #08080A 0%, transparent 100%)" }} />
          </div>
          <div className="hidden md:block absolute inset-y-0 right-0 w-32 z-10">
            <ProgressiveBlur direction="right" blurIntensity={6} className="absolute inset-0" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to left, #08080A 0%, transparent 100%)" }} />
          </div>
        </div>
      </motion.div>

      {/* Counter */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportConfig}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative z-10 font-inter text-white/25 text-xs tracking-[0.3em] uppercase text-center mt-6"
      >
        + 200 entreprises accompagnées depuis 2004 · CAC 40 · Leaders mondiaux
      </motion.p>
    </section>
  );
}
