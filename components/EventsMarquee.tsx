"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { viewportConfig } from "@/lib/animations";

const images = [
  {
    src: "/images/animation-soiree-groupe.webp",
    alt: "Animation soirée dansante d'entreprise",
    label: "Soirée",
  },
  {
    src: "/images/casino-roulette.webp",
    alt: "Animation casino roulette en soirée",
    label: "Casino",
  },
  {
    src: "/images/rando-vercors.webp",
    alt: "Randonnée en montagne dans le Vercors",
    label: "Randonnée",
  },
  {
    src: "/images/canyoning.webp",
    alt: "Canyoning team-building outdoor",
    label: "Canyoning",
  },
  {
    src: "/images/igloo-team.webp",
    alt: "Construction d'igloo en équipe",
    label: "Team-Building",
  },
  {
    src: "/images/masque-venitien.webp",
    alt: "Soirée à thème vénitien",
    label: "Soirée vénitienne",
  },
  {
    src: "/images/speleo.webp",
    alt: "Spéléologie team-building aventure",
    label: "Spéléologie",
  },
  {
    src: "/images/koh-lanta-groupe.webp",
    alt: "Les Aventuriers team-building en plein air",
    label: "Les Aventuriers",
  },
];

// Double the array for seamless loop
const doubled = [...images, ...images];

export default function EventsMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-latitude-black py-20 overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.7 }}
        className="text-center mb-12 px-6"
      >
        <p
          className="font-inter text-xs font-medium tracking-[0.4em] uppercase mb-4"
          style={{ color: "#C9A961" }}
        >
          Nos réalisations
        </p>
        <h2 className="font-playfair font-normal text-white text-4xl md:text-5xl tracking-wide">
          Nos événements en images
        </h2>
      </motion.div>

      {/* Marquee track */}
      <div className="relative w-full" aria-hidden="true">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0a0a0a, transparent)" }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0a0a0a, transparent)" }}
        />

        <div
          ref={trackRef}
          className="flex gap-4 w-max"
          style={{
            animation: "marquee 40s linear infinite",
          }}
        >
          {doubled.map((img, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-72 h-48 md:w-96 md:h-60 overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 288px, 384px"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-400 flex items-end p-4 opacity-0 group-hover:opacity-100">
                <span
                  className="font-inter text-xs font-medium tracking-[0.3em] uppercase text-white px-3 py-1.5"
                  style={{ background: "rgba(201,169,97,0.9)" }}
                >
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
