"use client";

import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageHero, Breadcrumb, CTABand, SectionHeader } from "@/components/shared";
import {
  team,
  valeurs,
  timeline,
  certifications,
} from "@/lib/content";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Qui sommes-nous | Latitude Organisation",
  description:
    "Découvrez l'histoire de Latitude Organisation, agence événementielle depuis 20 ans. Équipe de 50+ experts en séminaires, congrès et événements professionnels.",
  keywords: [
    "Latitude Organisation",
    "agence événementielle histoire",
    "équipe événementielle professionnelle",
    "20 ans expertise événementielle",
  ],
  openGraph: {
    title: "Qui sommes-nous | Latitude Organisation",
    description:
      "20 ans d'expertise en organisation d'événements professionnels. Découvrez notre équipe et nos valeurs.",
    type: "website",
  },
};

export default function QuiSommesNous() {
  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Qui sommes-nous", href: "/qui-sommes-nous", current: true },
  ];

  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbs} />

      {/* Hero */}
      <PageHero
        eyebrow="NOTRE HISTOIRE"
        title="Une agence événementielle avec une vraie histoire"
        subtitle="Depuis 2004, nous organisons des événements qui marquent les esprits et renforcent les liens au sein des entreprises."
      />

      {/* About Section */}
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <SectionHeader
                title="L'ADN de Latitude Organisation"
                subtitle="Une approche personnalisée, un interlocuteur dédié, des solutions sur mesure."
                centered={false}
              />

              <motion.p
                variants={fadeInUp}
                className="font-inter text-white/70 text-lg leading-relaxed mt-8 mb-6"
              >
                Fondée en 2004 par des passionnés de l&apos;événementiel, Latitude Organisation
                est née de la conviction que chaque événement doit être unique et mémorable.
                Nous avons commencé modestement, avec une petite équipe motivée et une grande
                ambition.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="font-inter text-white/70 text-lg leading-relaxed mb-6"
              >
                Aujourd&apos;hui, nous sommes une équipe de 50+ experts, forte d&apos;une expérience de plus de
                20 ans, capable de concevoir et de piloter tous les types d&apos;événements professionnels,
                du séminaire d&apos;équipe de 30 personnes au congrès international de 5 000 délégués.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="font-inter text-white/70 text-lg leading-relaxed"
              >
                Nos clients? Des PME aux grandes entreprises du CAC 40, qui nous font confiance pour
                transformer leurs enjeux en événements d&apos;exception.
              </motion.p>
            </motion.div>

            {/* Right: Stats */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="space-y-8"
            >
              {[
                { number: "20+", label: "Années d'expérience" },
                { number: "500+", label: "Événements organisés" },
                { number: "50+", label: "Experts dans l'équipe" },
                { number: "98%", label: "Taux de satisfaction client" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="border-l-2 border-latitude-gold pl-6"
                >
                  <p
                    className="font-playfair text-5xl font-bold text-latitude-gold mb-2"
                  >
                    {stat.number}
                  </p>
                  <p className="font-inter text-white/70 text-lg">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="NOTRE ÉVOLUTION"
            title="Une croissance constante depuis 2004"
            centered={true}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mt-16 space-y-12"
          >
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                variants={fadeInUp}
                className="flex gap-8 items-start"
              >
                <div className="flex-shrink-0 w-24">
                  <p className="font-playfair text-2xl font-bold text-latitude-gold">
                    {item.year}
                  </p>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-playfair text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="font-inter text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="NOTRE ÉQUIPE"
            title="Experts passionnés par l'événementiel"
            subtitle="Une équipe diversifiée, motivée, et dévouée à vos succès"
            centered={true}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          >
            {team.map((member) => (
              <motion.div
                key={member.id}
                variants={fadeInUp}
                className="bg-white/5 border border-white/10 p-8 hover:border-latitude-gold/50 transition-all duration-300"
              >
                {member.image && (
                  <div className="relative h-48 mb-6 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                )}
                <h3 className="font-playfair text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="font-inter text-sm text-latitude-gold mb-4">
                  {member.role}
                </p>
                <p className="font-inter text-white/70 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="NOS VALEURS"
            title="Ce qui nous guide au quotidien"
            centered={true}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16"
          >
            {valeurs.map((valeur) => (
              <motion.div
                key={valeur.id}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full border-2 border-latitude-gold flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{valeur.icon}</span>
                </div>
                <h3 className="font-playfair text-lg font-bold text-white mb-3">
                  {valeur.name}
                </h3>
                <p className="font-inter text-white/70 text-sm leading-relaxed">
                  {valeur.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="CERTIFICATIONS & AFFILIATIONS"
            title="Certifications qui valident notre expertise"
            centered={true}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={fadeInUp}
                className="border border-white/10 p-8 hover:border-latitude-gold/50 transition-all duration-300"
              >
                <h3 className="font-playfair text-lg font-bold text-white mb-2">
                  {cert.name}
                </h3>
                <p className="font-inter text-white/70 text-sm mb-3">
                  {cert.issuer}
                </p>
                <p className="font-inter text-white/50 text-xs">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        title="Parlons de votre prochain événement"
        subtitle="Notre équipe est prête à concevoir une expérience sur mesure"
        buttonLabel="Demander un devis"
        buttonHref="/contact"
      />

      <Footer />
    </>
  );
}
