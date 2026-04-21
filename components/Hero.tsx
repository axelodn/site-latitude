"use client";

import { motion } from "framer-motion";
import { heroContentVariants } from "@/lib/animations";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToPortfolio = () => {
    document
      .getElementById("realisations")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="accueil"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
      aria-label="Agence événementielle Latitude Organisation"
    >
      {/* TODO: Replace with looping video background — mp4 + webm, muted, autoPlay, loop, playsInline */}
      <div className="absolute inset-0 bg-latitude-black" aria-hidden="true" />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"
        aria-hidden="true"
      />

      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Decorative golden horizontal line */}
      <motion.div
        className="absolute top-1/2 left-0 right-0 h-px opacity-20"
        style={{ background: "linear-gradient(90deg, transparent, #C9A961, transparent)" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          custom={0}
          variants={heroContentVariants}
          initial="hidden"
          animate="visible"
          className="font-inter text-xs font-medium tracking-[0.4em] uppercase mb-8 text-white/60"
        >
          Agence Événementielle · France & International · Depuis 2004
        </motion.p>

        {/* H1 */}
        <motion.h1
          custom={1}
          variants={heroContentVariants}
          initial="hidden"
          animate="visible"
          className="font-playfair font-bold text-white leading-[1.05] mb-8"
          style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)" }}
        >
          Des événements qui{" "}
          <em className="not-italic" style={{ color: "#C9A961" }}>
            marquent
          </em>
          .<br />
          Des équipes qui se{" "}
          <em className="not-italic" style={{ color: "#C9A961" }}>
            souviennent
          </em>
          .
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2}
          variants={heroContentVariants}
          initial="hidden"
          animate="visible"
          className="font-inter font-light text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          20 ans d&apos;expertise en organisation de séminaires, congrès,
          soirées et team-building. France &amp; International.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={heroContentVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToPortfolio}
            className="group font-inter text-sm font-medium px-8 py-4 border border-white text-white hover:bg-white hover:text-latitude-black transition-all duration-400 tracking-widest uppercase cursor-pointer min-w-[240px]"
            aria-label="Découvrir nos réalisations événementielles"
          >
            Découvrir nos réalisations
          </button>
          <button
            onClick={scrollToContact}
            className="group font-inter text-sm font-medium px-8 py-4 text-white transition-all duration-400 tracking-widest uppercase cursor-pointer min-w-[240px]"
            style={{ background: "#C9A961" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#b8943f")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#C9A961")}
            aria-label="Parler de votre projet événementiel avec nos équipes"
          >
            Parler de votre projet
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-white/40">
          Défiler
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
