"use client";

import { motion } from "framer-motion";
import { destinations } from "@/lib/data";
import { viewportConfig, staggerContainerFast, fadeInUp } from "@/lib/animations";

export default function Destinations() {
  return (
    <section
      className="bg-latitude-black py-24 md:py-32 overflow-hidden"
      aria-labelledby="destinations-title"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="font-inter text-xs font-medium tracking-[0.4em] uppercase mb-4"
            style={{ color: "#C9A961" }}
          >
            Nos destinations
          </p>
          <h2
            id="destinations-title"
            className="font-playfair font-bold text-white text-4xl md:text-5xl mb-6 leading-tight"
          >
            Organisation d&apos;événements sous toutes les latitudes
          </h2>
          <p className="font-inter text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            De Paris à Marrakech, des Alpes aux Caraïbes, nous organisons vos
            événements d&apos;entreprise partout dans le monde.
          </p>
        </motion.div>

        {/* World Map SVG */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 1 }}
          className="relative w-full max-w-4xl mx-auto mb-16"
          role="img"
          aria-label="Carte des destinations événementielles de Latitude Organisation : France, Europe, Maroc, Île Maurice, Canada"
        >
          {/* Simplified world map using SVG paths */}
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-auto"
            aria-hidden="true"
          >
            {/* Background */}
            <rect width="1000" height="500" fill="transparent" />

            {/* Grid lines */}
            {[...Array(9)].map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={(i + 1) * 50}
                x2="1000"
                y2={(i + 1) * 50}
                stroke="#C9A961"
                strokeOpacity="0.06"
                strokeWidth="1"
              />
            ))}
            {[...Array(19)].map((_, i) => (
              <line
                key={`v-${i}`}
                x1={(i + 1) * 50}
                y1="0"
                x2={(i + 1) * 50}
                y2="500"
                stroke="#C9A961"
                strokeOpacity="0.06"
                strokeWidth="1"
              />
            ))}

            {/* Simplified continent blobs */}
            {/* Europe */}
            <ellipse cx="490" cy="170" rx="80" ry="60" fill="#2A2A2A" opacity="0.8" />
            {/* Africa */}
            <ellipse cx="480" cy="300" rx="60" ry="90" fill="#2A2A2A" opacity="0.8" />
            {/* North America */}
            <ellipse cx="200" cy="200" rx="110" ry="100" fill="#2A2A2A" opacity="0.8" />
            {/* South America */}
            <ellipse cx="250" cy="370" rx="55" ry="80" fill="#2A2A2A" opacity="0.8" />
            {/* Asia */}
            <ellipse cx="700" cy="190" rx="160" ry="100" fill="#2A2A2A" opacity="0.8" />
            {/* Oceania */}
            <ellipse cx="780" cy="360" rx="70" ry="50" fill="#2A2A2A" opacity="0.8" />

            {/* Destination pins */}
            {destinations.map((dest, i) => {
              const x = parseFloat(dest.x) * 10;
              const y = parseFloat(dest.y) * 5;
              return (
                <motion.g
                  key={dest.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.5, duration: 0.4 }}
                >
                  {/* Pulse ring */}
                  <motion.circle
                    cx={x}
                    cy={y}
                    r="12"
                    fill="none"
                    stroke="#C9A961"
                    strokeWidth="1"
                    animate={{ r: [8, 16], opacity: [0.5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      delay: i * 0.3,
                      ease: "easeOut",
                    }}
                  />
                  {/* Pin dot */}
                  <circle cx={x} cy={y} r="4" fill="#C9A961" />
                </motion.g>
              );
            })}
          </svg>

          {/* Legend */}
          <div className="absolute bottom-0 right-0 flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: "#C9A961" }}
              aria-hidden="true"
            />
            <span className="font-inter text-xs text-white/40 tracking-wide">
              Destinations actives
            </span>
          </div>
        </motion.div>

        {/* Destination pills */}
        <motion.div
          variants={staggerContainerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-wrap justify-center gap-3"
        >
          {destinations.map((dest) => (
            <motion.div
              key={dest.name}
              variants={fadeInUp}
              className="flex items-center gap-2 border border-white/10 px-4 py-2 hover:border-latitude-gold/50 transition-colors duration-300"
            >
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#C9A961" }}
                aria-hidden="true"
              />
              <span className="font-inter text-sm text-white/70">
                {dest.name}
              </span>
              <span className="font-inter text-xs text-white/30">
                {dest.country}
              </span>
            </motion.div>
          ))}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-2 border border-latitude-gold/30 px-4 py-2"
          >
            <span className="font-inter text-sm" style={{ color: "#C9A961" }}>
              + 30 pays
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
