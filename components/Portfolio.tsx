"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio, portfolioCategories, type PortfolioCategory } from "@/lib/data";
import { MapPin, Users } from "lucide-react";
import { staggerContainerFast, scaleIn, viewportConfig } from "@/lib/animations";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] =
    useState<PortfolioCategory>("Tous");

  const filtered =
    activeFilter === "Tous"
      ? portfolio
      : portfolio.filter((p) => p.category === activeFilter);

  return (
    <section
      id="realisations"
      className="bg-latitude-cream py-24 md:py-32"
      aria-labelledby="portfolio-title"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p
            className="font-inter text-xs font-medium tracking-[0.4em] uppercase mb-4"
            style={{ color: "#C9A961" }}
          >
            Notre portfolio
          </p>
          <h2
            id="portfolio-title"
            className="font-playfair font-bold text-latitude-black text-4xl md:text-5xl mb-4 leading-tight"
          >
            Nos réalisations événementielles
          </h2>
          <p className="font-inter text-latitude-gray-dark text-lg max-w-2xl mx-auto">
            Un aperçu de nos derniers événements d&apos;entreprise organisés en
            France et à l&apos;international.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
          role="group"
          aria-label="Filtrer les réalisations par catégorie"
        >
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-inter text-sm px-6 py-2.5 border transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? "bg-latitude-black text-white border-latitude-black"
                  : "bg-transparent text-latitude-gray-dark border-latitude-gray-light hover:border-latitude-black"
              }`}
              aria-pressed={activeFilter === cat}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          variants={staggerContainerFast}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.article
                key={item.id}
                layout
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`group relative overflow-hidden cursor-default ${
                  item.size === "large"
                    ? "sm:col-span-2 aspect-[16/9]"
                    : item.size === "medium"
                    ? "aspect-[4/3]"
                    : "aspect-square"
                }`}
                aria-label={`Réalisation : ${item.title} — ${item.category} à ${item.lieu}`}
              >
                {/* TODO: Replace with real event photos — file naming: seminaire-[client]-[lieu].jpg */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-700 group-hover:scale-105`}
                  role="img"
                  aria-label={item.alt}
                />

                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className="font-inter text-[10px] font-medium tracking-[0.3em] uppercase px-3 py-1.5"
                    style={{ background: "rgba(201,169,97,0.9)", color: "white" }}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-6">
                  <h3 className="font-playfair font-bold text-white text-xl mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-4 text-white/80">
                    <span className="flex items-center gap-1.5 font-inter text-xs">
                      <MapPin size={12} aria-hidden="true" />
                      {item.lieu}
                    </span>
                    <span className="flex items-center gap-1.5 font-inter text-xs">
                      <Users size={12} aria-hidden="true" />
                      {item.participants} participants
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="text-center mt-14"
        >
          <p className="font-inter text-latitude-gray-dark mb-6">
            Votre prochain événement pourrait figurer ici.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-inter text-sm font-medium px-8 py-4 border border-latitude-black text-latitude-black hover:bg-latitude-black hover:text-white transition-all duration-300 tracking-widest uppercase cursor-pointer"
            aria-label="Nous contacter pour organiser votre événement d'entreprise"
          >
            Organiser votre événement
          </button>
        </motion.div>
      </div>
    </section>
  );
}
