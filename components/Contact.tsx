"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { viewportConfig, staggerContainer, fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

const eventTypes = [
  "Séminaire",
  "Soirée événementielle",
  "Team-building",
  "Convention",
  "Autre",
];
const participantRanges = [
  "Moins de 50",
  "50 - 100",
  "100 - 250",
  "250 - 500",
  "500 - 1000",
  "Plus de 1000",
];

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Wire to API route or form service (e.g., Resend, SendGrid, Netlify Forms)
    setFormStatus("sent");
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#0A0A0A", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      aria-labelledby="contact-title"
    >
      {/* Subtle gold radial halo */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "800px",
          height: "500px",
          background: "radial-gradient(ellipse at center, rgba(201,169,97,0.10) 0%, rgba(201,169,97,0.04) 40%, transparent 70%)",
          filter: "blur(20px)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
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
            Contact & Devis
          </p>
          <h2
            id="contact-title"
            className="font-playfair font-bold text-white text-4xl md:text-5xl mb-4 leading-tight"
          >
            Parlons de votre prochain
            <br className="hidden md:block" /> événement d&apos;entreprise
          </h2>
          <p className="font-inter text-white/60 text-lg max-w-xl mx-auto">
            Chaque projet mérite une réponse personnalisée. Racontez-nous le
            vôtre.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-3"
          >
            {formStatus === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-16 text-center"
              >
                <div
                  className="w-16 h-16 mb-6 flex items-center justify-center border-2"
                  style={{ borderColor: "#C9A961" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A961" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
                </div>
                <h3 className="font-playfair text-white text-2xl font-bold mb-3">
                  Message envoyé !
                </h3>
                <p className="font-inter text-white/60 max-w-sm">
                  Notre équipe vous contactera sous 24h pour discuter de votre
                  projet.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                aria-label="Formulaire de demande de devis événementiel"
                noValidate
              >
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="prenom"
                    className="font-inter text-xs text-white/50 tracking-widest uppercase"
                  >
                    Prénom *
                  </label>
                  <input
                    id="prenom"
                    name="prenom"
                    type="text"
                    required
                    autoComplete="given-name"
                    aria-required="true"
                    className="bg-white/5 border border-white/10 text-white font-inter text-sm px-4 py-3 focus:outline-none focus:border-latitude-gold transition-colors duration-300 placeholder:text-white/20"
                    placeholder="Jean"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="nom"
                    className="font-inter text-xs text-white/50 tracking-widest uppercase"
                  >
                    Nom *
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    autoComplete="family-name"
                    aria-required="true"
                    className="bg-white/5 border border-white/10 text-white font-inter text-sm px-4 py-3 focus:outline-none focus:border-latitude-gold transition-colors duration-300 placeholder:text-white/20"
                    placeholder="Dupont"
                  />
                </div>

                {/* Company/Role */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="entreprise"
                    className="font-inter text-xs text-white/50 tracking-widest uppercase"
                  >
                    Entreprise
                  </label>
                  <input
                    id="entreprise"
                    name="entreprise"
                    type="text"
                    autoComplete="organization"
                    className="bg-white/5 border border-white/10 text-white font-inter text-sm px-4 py-3 focus:outline-none focus:border-latitude-gold transition-colors duration-300 placeholder:text-white/20"
                    placeholder="Votre entreprise"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="fonction"
                    className="font-inter text-xs text-white/50 tracking-widest uppercase"
                  >
                    Fonction
                  </label>
                  <input
                    id="fonction"
                    name="fonction"
                    type="text"
                    autoComplete="organization-title"
                    className="bg-white/5 border border-white/10 text-white font-inter text-sm px-4 py-3 focus:outline-none focus:border-latitude-gold transition-colors duration-300 placeholder:text-white/20"
                    placeholder="Directeur RH"
                  />
                </div>

                {/* Email/Phone */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-inter text-xs text-white/50 tracking-widest uppercase"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    aria-required="true"
                    className="bg-white/5 border border-white/10 text-white font-inter text-sm px-4 py-3 focus:outline-none focus:border-latitude-gold transition-colors duration-300 placeholder:text-white/20"
                    placeholder="jean@entreprise.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="telephone"
                    className="font-inter text-xs text-white/50 tracking-widest uppercase"
                  >
                    Téléphone
                  </label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    autoComplete="tel"
                    className="bg-white/5 border border-white/10 text-white font-inter text-sm px-4 py-3 focus:outline-none focus:border-latitude-gold transition-colors duration-300 placeholder:text-white/20"
                    placeholder="+33 6 00 00 00 00"
                  />
                </div>

                {/* Event type */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="type-evenement"
                    className="font-inter text-xs text-white/50 tracking-widest uppercase"
                  >
                    Type d&apos;événement
                  </label>
                  <select
                    id="type-evenement"
                    name="type-evenement"
                    className="bg-white/5 border border-white/10 text-white font-inter text-sm px-4 py-3 focus:outline-none focus:border-latitude-gold transition-colors duration-300 cursor-pointer appearance-none"
                    defaultValue=""
                    aria-label="Sélectionner le type d'événement"
                  >
                    <option value="" disabled className="bg-latitude-black">
                      Choisir...
                    </option>
                    {eventTypes.map((t) => (
                      <option key={t} value={t} className="bg-latitude-black">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Participants */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="participants"
                    className="font-inter text-xs text-white/50 tracking-widest uppercase"
                  >
                    Nombre de participants
                  </label>
                  <select
                    id="participants"
                    name="participants"
                    className="bg-white/5 border border-white/10 text-white font-inter text-sm px-4 py-3 focus:outline-none focus:border-latitude-gold transition-colors duration-300 cursor-pointer appearance-none"
                    defaultValue=""
                    aria-label="Sélectionner le nombre de participants"
                  >
                    <option value="" disabled className="bg-latitude-black">
                      Choisir...
                    </option>
                    {participantRanges.map((r) => (
                      <option key={r} value={r} className="bg-latitude-black">
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label
                    htmlFor="date"
                    className="font-inter text-xs text-white/50 tracking-widest uppercase"
                  >
                    Date envisagée
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    className="bg-white/5 border border-white/10 text-white/70 font-inter text-sm px-4 py-3 focus:outline-none focus:border-latitude-gold transition-colors duration-300"
                    aria-label="Date envisagée pour votre événement"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="font-inter text-xs text-white/50 tracking-widest uppercase"
                  >
                    Votre projet en quelques mots
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="bg-white/5 border border-white/10 text-white font-inter text-sm px-4 py-3 focus:outline-none focus:border-latitude-gold transition-colors duration-300 resize-none placeholder:text-white/20"
                    placeholder="Décrivez votre événement : objectifs, contexte, attentes particulières..."
                    aria-label="Description de votre projet événementiel"
                  />
                </div>

                {/* Submit */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full font-inter text-sm font-medium py-4 text-white transition-all duration-300 tracking-widest uppercase cursor-pointer"
                    style={{ background: "#C9A961" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#b8943f")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "#C9A961")
                    }
                    aria-label="Envoyer votre demande de devis événementiel"
                  >
                    Envoyer ma demande
                  </button>
                  <p className="font-inter text-xs text-white/30 text-center mt-3">
                    Réponse garantie sous 24h ouvrées · Devis gratuit et sans engagement
                  </p>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div>
              <p className="font-playfair text-white text-xl font-bold mb-6">
                Nos coordonnées
              </p>

              <address
                className="not-italic flex flex-col gap-6"
                aria-label="Coordonnées de Latitude Organisation"
              >
                <a
                  href="tel:+33686706520"
                  className="flex items-start gap-4 group"
                  aria-label="Appeler Latitude Organisation au 06 86 70 65 20"
                >
                  <div
                    className="w-10 h-10 flex-shrink-0 flex items-center justify-center border mt-0.5"
                    style={{ borderColor: "#C9A961" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A961" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <p className="font-inter text-xs text-white/40 tracking-widest uppercase mb-1">
                      Téléphone
                    </p>
                    <p className="font-inter text-white group-hover:text-latitude-gold transition-colors duration-300">
                      06 86 70 65 20
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:jerome@latitude-organisation.com"
                  className="flex items-start gap-4 group"
                  aria-label="Envoyer un email à Latitude Organisation"
                >
                  <div
                    className="w-10 h-10 flex-shrink-0 flex items-center justify-center border mt-0.5"
                    style={{ borderColor: "#C9A961" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A961" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <p className="font-inter text-xs text-white/40 tracking-widest uppercase mb-1">
                      Email
                    </p>
                    <p className="font-inter text-white group-hover:text-latitude-gold transition-colors duration-300 break-all">
                      jerome@latitude-organisation.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex-shrink-0 flex items-center justify-center border mt-0.5"
                    style={{ borderColor: "#C9A961" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A961" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <p className="font-inter text-xs text-white/40 tracking-widest uppercase mb-1">
                      Horaires
                    </p>
                    <p className="font-inter text-white">
                      Lundi – Vendredi
                      <br />
                      <time dateTime="09:00">9h00</time> –{" "}
                      <time dateTime="18:00">18h00</time>
                    </p>
                  </div>
                </div>
              </address>
            </div>

            {/* Separator */}
            <div
              className="w-full h-px"
              style={{ background: "rgba(201,169,97,0.2)" }}
              aria-hidden="true"
            />

            {/* Credentials */}
            <div>
              <p className="font-inter text-xs text-white/40 tracking-widest uppercase mb-3">
                Habilitations
              </p>
              <p className="font-inter text-sm text-white/60">
                Licence Agence de Voyage{" "}
                <strong className="text-white/80">N°026-09-001</strong>
              </p>
              <p className="font-inter text-sm text-white/60 mt-1">
                Membre ATOUT France · Garantie financière
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

