"use client";

import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageHero, Breadcrumb, CTABand } from "@/components/shared";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Témoignages | Latitude Organisation",
  description:
    "Découvrez ce que nos clients disent de nos services d'organisation d'événements. 98% de satisfaction client.",
  keywords: [
    "témoignages événementiel",
    "avis clients",
    "satisfaction client",
    "agence événementielle",
  ],
  openGraph: {
    title: "Témoignages | Latitude Organisation",
    description:
      "Ce que nos clients disent de nous - 98% de satisfaction",
    type: "website",
  },
};

const testimonials = [
  {
    name: "Sophie Martin",
    company: "TechCorp",
    role: "Directrice des Ressources Humaines",
    text: "Latitude Organisation a organisé notre convention annuelle de 400 personnes. Une prestation impeccable, du début à la fin. Nous les rengageons d'année en année.",
    rating: 5,
  },
  {
    name: "Jean-Marc Dubois",
    company: "Pharma Solutions",
    role: "Responsable Événements",
    text: "Un interlocuteur unique, une vraie écoute, des solutions innovantes. C'est rare de trouver une agence aussi professionnelle et attentive. Bravo !",
    rating: 5,
  },
  {
    name: "Marie Chen",
    company: "Finance Global",
    role: "VP Marketing",
    text: "Notre séminaire de management à Chamonix a dépassé nos attentes. Ambiance, logistique, animations - tout était parfait. Merci Latitude !",
    rating: 5,
  },
  {
    name: "Pierre Leclerc",
    company: "Consulting Plus",
    role: "Associé Fondateur",
    text: "20 ans de partenariat avec Latitude Organisation. Ils connaissent nos enjeux, nos objectifs. Une confiance totale pour nos événements critiques.",
    rating: 5,
  },
  {
    name: "Laura Rossi",
    company: "Luxury Retail",
    role: "Directrice de Projet",
    text: "Une soirée gala de 250 personnes à Paris. Décoration, catering, entertainment - chaque détail était soigné. Un vrai succès.",
    rating: 5,
  },
  {
    name: "Thomas Müller",
    company: "Industrial Engineering",
    role: "HR Manager",
    text: "Organiser un forum international avec 2000 délégués n'est pas simple. Latitude a orchestré parfaitement logistique, traduction, hébergement. Impressionnant.",
    rating: 5,
  },
];

const breadcrumbs = [
  { label: "Accueil", href: "/" },
  { label: "Témoignages", href: "/testimonials", current: true },
];

export default function TestimonialsPage() {
  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbs} />

      {/* Hero */}
      <PageHero
        eyebrow="CE QUE DISENT NOS CLIENTS"
        title="Ils nous font confiance"
        subtitle="Depuis 20 ans, nos clients nous choisissent pour la qualité de nos services et notre engagement envers l'excellence."
      />

      {/* Stats */}
      <section className="py-16 lg:py-24 bg-latitude-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { number: "98%", label: "Taux de satisfaction" },
              { number: "500+", label: "Événements organisés" },
              { number: "20+", label: "Années d'expérience" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center">
                <p className="font-playfair text-4xl font-bold text-latitude-gold mb-2">
                  {stat.number}
                </p>
                <p className="font-inter text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="border border-white/10 bg-white/5 p-8 hover:border-latitude-gold/50 hover:bg-white/10 transition-all duration-300"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-latitude-gold text-latitude-gold"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="font-inter text-white/80 text-lg leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-white/10">
                  <p className="font-playfair font-bold text-white mb-1">
                    {testimonial.name}
                  </p>
                  <p className="font-inter text-latitude-gold text-sm mb-1">
                    {testimonial.role}
                  </p>
                  <p className="font-inter text-white/50 text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-playfair text-3xl lg:text-4xl font-bold text-white mb-12 text-center"
            >
              Pourquoi choisir Latitude Organisation
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Un interlocuteur unique",
                  desc: "Une seule personne pour piloter votre projet du début à la fin. Pas de changement, pas de perte d'information.",
                },
                {
                  title: "20 ans d'expérience",
                  desc: "Des PME aux entreprises du CAC 40. Nous avons organisé tous les types d'événements, en France et à l'international.",
                },
                {
                  title: "Équipe dédiée",
                  desc: "50+ experts en événementiel : logistique, catering, production, animation. Tous passionnés par l'excellence.",
                },
                {
                  title: "Solutions sur mesure",
                  desc: "Pas de catalogue. Chaque événement est conçu pour vous, avec vos objectifs, votre budget, votre style.",
                },
                {
                  title: "Qualité garantie",
                  desc: "98% de satisfaction client. Nous gérons chaque détail pour zéro stress et un résultat impeccable.",
                },
                {
                  title: "Budget maîtrisé",
                  desc: "Tarifs négociés grâce à nos partenariats long terme. Transparence totale, pas de surprises.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="border-l-2 border-latitude-gold pl-6"
                >
                  <h3 className="font-playfair text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="font-inter text-white/70">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        title="Rejoignez nos clients satisfaits"
        subtitle="Parlons de votre prochain événement"
        buttonLabel="Demander un devis"
        buttonHref="/contact"
      />

      <Footer />
    </>
  );
}
