"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { expertises } from "@/lib/data";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";

const IconSVG = ({ name }: { name: string }) => {
  const props = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "#C9A961", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (name === "Mountain") return <svg {...props}><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>;
  if (name === "Sparkles") return <svg {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3z"/></svg>;
  if (name === "Users") return <svg {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
  return null;
};

export default function Expertises() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="expertises"
      className="py-24 md:py-32"
      style={{ background: "#F5F3EE" }}
      aria-labelledby="expertises-title"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16 md:mb-20"
        >
          <motion.p
            variants={fadeInUp}
            className="font-inter text-xs font-medium tracking-[0.4em] uppercase mb-4"
            style={{ color: "#C9A961" }}
          >
            Nos domaines d&apos;expertise
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            id="expertises-title"
            className="font-playfair font-bold text-latitude-black text-4xl md:text-5xl mb-6 leading-tight"
          >
            Notre savoir-faire en organisation
            <br className="hidden md:block" /> d&apos;événements professionnels
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-inter text-latitude-black/60 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            3 domaines d&apos;excellence pour orchestrer vos événements
            d&apos;entreprise, de la conception à la réalisation, en France et à
            l&apos;international.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {expertises.map((expertise) => {
            return (
              <motion.article
                key={expertise.id}
                variants={fadeInUp}
                className="group relative overflow-hidden flex flex-col min-h-[420px] hover:-translate-y-1 transition-transform duration-400"
                aria-label={`Service : ${expertise.title}`}
              >
                <Link href={`/expertises/${expertise.id}`} className="absolute inset-0 z-20" aria-label={`Voir ${expertise.title}`} />

                {/* Background image */}
                {expertise.image && (
                  <Image
                    src={expertise.image}
                    alt={expertise.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}

                {/* Dark gradient overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-400"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.25) 100%)" }}
                />
                {/* Gold hover tint */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: "rgba(201,169,97,0.12)" }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col flex-1 p-8 justify-end">
                  {/* Icon */}
                  <div
                    className="w-11 h-11 mb-5 flex items-center justify-center border"
                    style={{ borderColor: "rgba(201,169,97,0.7)" }}
                  >
                    <IconSVG name={expertise.icon} />
                  </div>

                  {/* Title */}
                  <h3 className="font-playfair font-bold text-white text-2xl mb-2 leading-tight">
                    {expertise.title}
                  </h3>

                  {/* Subtitle */}
                  <p
                    className="font-inter text-sm font-medium mb-4 tracking-wide"
                    style={{ color: "#C9A961" }}
                  >
                    {expertise.subtitle}
                  </p>

                  {/* Description */}
                  <p className="font-inter text-sm text-white/70 leading-relaxed mb-5">
                    {expertise.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "#C9A961" }}>
                    <span className="font-inter tracking-wide">En savoir plus</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A961" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
