"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// GSAP chargé dynamiquement pour réduire le bundle initial
import {
  staggerContainer,
  fadeInUp,
  slideInLeft,
  slideInRight,
  viewportConfig,
} from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Conception",
    content:
      "Nous écoutons, analysons et conceptualisons votre événement sur mesure. Chaque détail est pensé pour servir votre objectif — qu'il s'agisse de fédérer vos équipes, de convaincre vos partenaires ou de célébrer vos succès. Un brief, un concept, une vision unique.",
  },
  {
    number: "02",
    title: "Orchestration",
    content:
      "De la mise en place au départ du dernier participant, votre interlocuteur unique vous accompagne à chaque étape. Sites exclusifs, prestataires triés sur le volet, logistique millimétrée : vous pouvez vous concentrer sur l'essentiel, nous gérons le reste.",
  },
  {
    number: "03",
    title: "Impact",
    content:
      "L'événement est terminé, mais son effet ne fait que commencer. Cohésion renforcée, souvenirs partagés, dynamiques nouvelles : nous mesurons avec vous les bénéfices concrets et vous accompagnons pour ancrer durablement ce que vous avez vécu ensemble.",
  },
];

export default function Approach() {
  const imgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!imgRef.current || !sectionRef.current) return;
    const img = imgRef.current;
    const section = sectionRef.current;
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(img, {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="approche"
      className="py-24 md:py-32 overflow-hidden"
      style={{ background: "#0A0A0A", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      aria-labelledby="approche-title"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="font-inter text-xs font-medium tracking-[0.4em] uppercase mb-4 text-center"
          style={{ color: "#C9A961" }}
        >
          Notre méthode
        </motion.p>

        <motion.h2
          id="approche-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-playfair font-bold text-white text-4xl md:text-5xl mb-16 text-center leading-tight"
        >
          Une méthode éprouvée pour organiser
          <br className="hidden md:block" /> vos événements d&apos;entreprise
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image placeholder */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative"
          >
            <div
              className="w-full aspect-[4/5] relative overflow-hidden"
              role="img"
              aria-label="Soirée gala d'entreprise organisée par Latitude Organisation"
            >
              <div ref={imgRef} className="absolute inset-0 will-change-transform" style={{ top: "-15%", bottom: "-15%" }}>
              <Image
                src="/images/speleo.png"
                alt="Team-building spéléologie organisé par Latitude Organisation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              </div>
              {/* Dark gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -right-6 bg-latitude-gold p-6 shadow-xl hidden md:block"
              style={{ background: "#C9A961" }}
            >
              <p className="font-playfair text-3xl font-bold text-white">120+</p>
              <p className="font-inter text-xs text-white/80 tracking-wide mt-1">
                Centres partenaires
              </p>
            </div>
          </motion.div>

          {/* Steps */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-12"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                custom={i}
                className="flex gap-8 items-start group"
              >
                {/* Step number */}
                <div className="flex-shrink-0">
                  <span
                    className="font-playfair font-bold leading-none select-none"
                    style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", color: "#C9A961", opacity: 0.3 }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="font-playfair font-bold text-white text-2xl mb-3">
                    {step.number} — {step.title}
                  </h3>
                  <p className="font-inter text-white/60 leading-relaxed text-[0.95rem]">
                    {step.content}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group font-inter text-sm font-medium px-8 py-4 border border-white/30 text-white hover:bg-white hover:text-latitude-black transition-all duration-300 tracking-widest uppercase cursor-pointer"
                aria-label="Demander un devis pour votre événement d'entreprise"
              >
                Démarrer votre projet
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
