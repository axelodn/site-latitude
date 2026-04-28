"use client";

import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import { destinations } from "@/lib/data";
import { viewportConfig, staggerContainerFast, fadeInUp } from "@/lib/animations";

// Coordonnées réelles (longitude, latitude) pour chaque destination
const destinationCoords: Record<string, [number, number]> = {
  "Paris": [2.35, 48.85],
  "Lyon": [4.83, 45.75],
  "Nice": [7.27, 43.70],
  "Bordeaux": [-0.57, 44.84],
  "Chamonix": [6.87, 45.92],
  "Marrakech": [-7.99, 31.63],
  "Lisbonne": [-9.14, 38.72],
  "Barcelone": [2.17, 41.39],
  "Rome": [12.50, 41.90],
  "Genève": [6.14, 46.20],
  "Montréal": [-73.57, 45.50],
  "Île Maurice": [57.55, -20.20],
};

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

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

        {/* World Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 1 }}
          className="relative w-full max-w-5xl mx-auto mb-16"
          role="img"
          aria-label="Carte des destinations événementielles de Latitude Organisation"
        >
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 130,
              center: [15, 20],
            }}
            style={{ width: "100%", height: "auto" }}
            viewBox="0 0 800 450"
          >
            <ZoomableGroup zoom={1} disableZooming disablePanning>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#1a2e1a"
                      stroke="#C9A961"
                      strokeWidth={0.3}
                      strokeOpacity={0.4}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none", fill: "#243824" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {destinations.map((dest, i) => {
                const coords = destinationCoords[dest.name];
                if (!coords) return null;
                return (
                  <Marker key={dest.name} coordinates={coords}>
                    {/* Pulse ring animé */}
                    <motion.circle
                      r={8}
                      fill="none"
                      stroke="#C9A961"
                      strokeWidth={1}
                      initial={{ opacity: 0 }}
                      animate={{ r: [5, 14], opacity: [0.6, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.5,
                        delay: i * 0.25,
                        ease: "easeOut",
                      }}
                    />
                    {/* Point central */}
                    <motion.circle
                      r={4}
                      fill="#C9A961"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                    />
                    {/* Label */}
                    <motion.text
                      y={-10}
                      textAnchor="middle"
                      fontSize={6}
                      fill="#C9A961"
                      fillOpacity={0.85}
                      fontFamily="Inter, sans-serif"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.5 }}
                    >
                      {dest.name}
                    </motion.text>
                  </Marker>
                );
              })}
            </ZoomableGroup>
          </ComposableMap>

          {/* Legend */}
          <div className="flex items-center justify-end gap-2 mt-2">
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
