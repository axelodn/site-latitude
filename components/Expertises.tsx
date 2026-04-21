"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  Presentation,
  Sparkles,
  Mountain,
  Target,
  Film,
  ArrowRight,
} from "lucide-react";
import { expertises } from "@/lib/data";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";

const iconMap = {
  Users,
  PresentationChart: Presentation,
  Sparkles,
  Mountain,
  Target,
  Film,
};

export default function Expertises() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="expertises"
      className="bg-latitude-cream py-24 md:py-32"
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
            className="font-inter text-latitude-gray-dark text-lg max-w-2xl mx-auto leading-relaxed"
          >
            6 domaines d&apos;excellence pour orchestrer vos événements
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
            const IconComponent =
              iconMap[expertise.icon as keyof typeof iconMap];
            return (
              <motion.article
                key={expertise.id}
                variants={fadeInUp}
                className="group bg-white border border-latitude-gray-light p-8 hover:shadow-xl transition-all duration-400 hover:-translate-y-1 cursor-default flex flex-col"
                aria-label={`Service : ${expertise.title}`}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 mb-6 flex items-center justify-center border"
                  style={{ borderColor: "#C9A961" }}
                >
                  {IconComponent && (
                    <IconComponent
                      size={22}
                      strokeWidth={1.5}
                      style={{ color: "#C9A961" }}
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Title */}
                <h3 className="font-playfair font-bold text-latitude-black text-xl mb-3 leading-tight">
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
                <p className="font-inter text-sm text-latitude-gray-dark leading-relaxed flex-1">
                  {expertise.description}
                </p>

                {/* CTA */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-latitude-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-inter tracking-wide">En savoir plus</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
