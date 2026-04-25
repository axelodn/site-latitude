"use client";

import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageHero, Breadcrumb, CTABand, SectionHeader } from "@/components/shared";
import { destinationsDetails } from "@/lib/content";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export const metadata: Metadata = {
  title: "Destinations événementiel | Latitude Organisation",
  description:
    "Découvrez 10 destinations premium pour vos événements en France et à l'international. Paris, Lyon, Chamonix, Marrakech, Barcelone, Rome et plus.",
  keywords: [
    "destinations événementiel",
    "séminaire Paris",
    "événement Lyon",
    "team building Chamonix",
    "incentive Marrakech",
  ],
  openGraph: {
    title: "Destinations événementiel | Latitude Organisation",
    description:
      "Destinations premium pour vos événements professionnels en France et à l'international",
    type: "website",
  },
};

export default function DestinationsIndex() {
  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Destinations", href: "/destinations", current: true },
  ];

  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbs} />

      {/* Hero */}
      <PageHero
        eyebrow="OÙ ORGANISER"
        title="10 destinations premium pour vos événements"
        subtitle="Paris, Lyon, Nice, Chamonix, Marrakech, Lisbonne, Barcelone, Rome, Genève, Montréal — trouvez la destination parfaite pour votre projet."
      />

      {/* Destinations Grid */}
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="EXPLOREZ LES DESTINATIONS"
            title="Lieux d'exception pour vos événements"
            centered={true}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16"
          >
            {destinationsDetails.map((destination) => (
              <motion.div
                key={destination.slug}
                variants={fadeInUp}
              >
                <Link
                  href={`/destinations/${destination.slug}`}
                  className="group block h-full"
                >
                  <div className="h-full border border-white/10 bg-white/2 p-6 hover:border-latitude-gold/50 hover:bg-white/5 transition-all duration-300 flex flex-col">
                    <p className="font-playfair text-sm text-latitude-gold uppercase tracking-wider mb-2">
                      {destination.country}
                    </p>
                    <h3 className="font-playfair text-xl font-bold text-white mb-3 group-hover:text-latitude-gold transition-colors duration-300">
                      {destination.name}
                    </h3>
                    <p className="font-inter text-white/70 text-sm leading-relaxed mb-6 flex-1">
                      {destination.description.substring(0, 80)}...
                    </p>
                    <span className="inline-block font-inter text-xs font-medium text-latitude-gold group-hover:underline">
                      Découvrir →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why These Destinations */}
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="NOS AVANTAGES"
            title="Partenariats exclusifs et expertise locale"
            centered={true}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          >
            {[
              {
                title: "Partenaires de confiance",
                desc: "Nous collaborons avec les meilleurs fournisseurs locaux : hôtels, restaurants, salles, transporteurs.",
              },
              {
                title: "Tarifs négociés",
                desc: "Grâce à nos volumes et relations long terme, nous obtenons les meilleurs tarifs pour vous.",
              },
              {
                title: "Expertise locale",
                desc: "Nos équipes sur place connaissent chaque destination et peuvent anticiper les défis.",
              },
              {
                title: "Logistique optimisée",
                desc: "Transports, hébergement, repas, activités — nous orchestrons tout pour zéro stress.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="border-l-2 border-latitude-gold pl-6"
              >
                <h3 className="font-playfair text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="font-inter text-white/70">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        title="Prêt à explorer une nouvelle destination ?"
        subtitle="Nos experts vous aideront à choisir et organiser votre événement"
        buttonLabel="Demander une consultation"
        buttonHref="/contact"
      />

      <Footer />
    </>
  );
}
