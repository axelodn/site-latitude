"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio, portfolioCategories, type PortfolioCategory } from "@/lib/data";
import { staggerContainerFast, scaleIn, viewportConfig } from "@/lib/animations";

const INITIAL_COUNT = 9;

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>("Tous");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    activeFilter === "Tous"
      ? portfolio
      : portfolio.filter((p) => p.category === activeFilter);

  const displayed = showAll || activeFilter !== "Tous" ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = activeFilter === "Tous" && !showAll && filtered.length > INITIAL_COUNT;

  return (
    <section
      id="realisations"
      className="py-24 md:py-32"
      style={{ background: "#0A0A0A", borderTop: "1px solid rgba(255,255,255,0.05)" }}
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
            className="font-playfair font-bold text-white text-4xl md:text-5xl mb-4 leading-tight"
          >
            Nos réalisations événementielles
          </h2>
          <p className="font-inter text-white/50 text-lg max-w-2xl mx-auto">
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
              onClick={() => { setActiveFilter(cat); setShowAll(false); }}
              className={`font-inter text-sm px-6 py-2.5 border transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? "bg-white text-latitude-black border-white"
                  : "bg-transparent text-white/50 border-white/20 hover:border-white/50"
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
          className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 [grid-auto-flow:dense]"
        >
          <AnimatePresence mode="popLayout">
            {displayed.map((item) => (
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
                    ? "col-span-1 aspect-[4/3] lg:col-span-2 lg:aspect-[16/9]"
                    : item.size === "medium"
                    ? "col-span-1 aspect-[4/3]"
                    : "col-span-1 aspect-[4/3]"
                }`}
                aria-label={`Réalisation : ${item.title} — ${item.category} à ${item.lieu}`}
              >
                {/* Real event photo */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Permanent dark overlay for readability */}
                  <div className="absolute inset-0 bg-black/20" />
                </div>

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
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {item.lieu}
                    </span>
                    <span className="flex items-center gap-1.5 font-inter text-xs">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                      {item.participants} participants
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Voir plus */}
        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="font-inter text-sm font-medium px-8 py-4 border border-white/30 text-white hover:bg-white hover:text-latitude-black transition-all duration-300 tracking-widest uppercase cursor-pointer"
            >
              Voir plus
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
