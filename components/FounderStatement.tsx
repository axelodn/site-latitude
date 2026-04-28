"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { viewportConfig } from "@/lib/animations";

export default function FounderStatement() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "#0D0C09", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Pitch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <span
              className="inline-block font-inter text-xs font-medium tracking-[0.3em] uppercase px-4 py-2 border mb-8"
              style={{ borderColor: "#C9A961", color: "#C9A961" }}
            >
              Notre philosophie
            </span>

            {/* Headline */}
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
              L&apos;exigence des grandes agences,{" "}
              <span className="font-bold">
                l&apos;agilité d&apos;un interlocuteur dédié.
              </span>
            </h2>

            {/* Body */}
            <p className="font-inter text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
              Un seul chef de projet de A à Z. Pas de sous-traitance cachée,
              pas de turnover en cours de route. Votre événement est entre les
              mêmes mains du brief au bilan — c&apos;est ça, notre différence.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-inter text-sm font-medium px-8 py-4 border border-white/30 text-white hover:bg-white hover:text-latitude-black transition-all duration-300 tracking-widest uppercase group"
            >
              Lancer mon projet
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Right — Founder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Quote */}
            <blockquote className="font-playfair italic text-white/70 text-xl leading-relaxed mb-10 max-w-md border-l-2 border-latitude-gold pl-6">
              &laquo;&nbsp;Je mobilise 20 ans d&apos;expertise pour que chaque
              événement devienne un levier stratégique pour votre entreprise.
              La direction de projet est assurée en direct, par moi.&nbsp;&raquo;
            </blockquote>

            {/* Photo */}
            <div className="relative w-40 h-40 mb-6">
              <div
                className="w-full h-full rounded-full overflow-hidden border-2"
                style={{ borderColor: "#C9A961" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
                  alt="Jérôme Aviotte, Directeur Général de Latitude Organisation"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Gold accent dot */}
              <div
                className="absolute bottom-2 right-2 w-5 h-5 rounded-full border-2 border-latitude-black"
                style={{ background: "#C9A961" }}
              />
            </div>

            {/* Name & Title */}
            <p className="font-playfair text-xl text-white font-normal mb-1">
              Jérôme <span className="font-bold">Aviotte</span>
            </p>
            <p
              className="font-inter text-xs font-medium tracking-[0.25em] uppercase"
              style={{ color: "#C9A961" }}
            >
              Fondateur & Directeur Général
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
