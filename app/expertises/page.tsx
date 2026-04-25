import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageHero, Breadcrumb, CTABand, SectionHeader } from "@/components/shared";
import { expertiseDetails } from "@/lib/content";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export const metadata: Metadata = {
  title: "Nos Expertises | Latitude Organisation",
  description:
    "Découvrez nos 6 domaines d'expertise en organisation événementielle : séminaires, congrès, soirées, team-building, coaching et production vidéo.",
  keywords: [
    "expertises événementiel",
    "séminaires entreprise",
    "congrès organisation",
    "team-building",
    "soirées événementielles",
  ],
  openGraph: {
    title: "Nos Expertises | Latitude Organisation",
    description:
      "6 domaines d'expertise pour tous vos événements professionnels",
    type: "website",
  },
};

export default function ExpertisesIndex() {
  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Expertises", href: "/expertises", current: true },
  ];

  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbs} />

      {/* Hero */}
      <PageHero
        eyebrow="NOS DOMAINES"
        title="6 expertises au service de vos événements"
        subtitle="Séminaires, congrès, soirées, team-building, coaching ou production vidéo — nous maîtrisons tous les formats."
      />

      {/* Expertises Grid */}
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="VOIR NOS DOMAINES"
            title="Une expertise pour chaque type d'événement"
            centered={true}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          >
            {expertiseDetails.map((expertise) => (
              <motion.div
                key={expertise.slug}
                variants={fadeInUp}
              >
                <Link
                  href={`/expertises/${expertise.slug}`}
                  className="group block h-full"
                >
                  <div className="h-full border border-white/10 bg-white/2 p-8 hover:border-latitude-gold/50 hover:bg-white/5 transition-all duration-300">
                    <h3 className="font-playfair text-2xl font-bold text-white mb-3 group-hover:text-latitude-gold transition-colors duration-300">
                      {expertise.h1.split(" — ")[0]}
                    </h3>
                    <p className="font-inter text-white/70 leading-relaxed mb-6">
                      {expertise.sections[0].content.substring(0, 150)}...
                    </p>
                    <span className="inline-block font-inter text-sm font-medium text-latitude-gold group-hover:underline">
                      En savoir plus →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="POURQUOI NOUS CHOISIR"
            title="L'approche Latitude Organisation"
            centered={true}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-6 mt-12"
          >
            {[
              {
                title: "Un interlocuteur unique",
                desc: "Une seule personne pour piloter votre projet du début à la fin. Pas de changement d'interlocuteur, pas de perte d'information.",
              },
              {
                title: "Une prestation sur mesure",
                desc: "Pas de catalogue. Chaque événement est conçu pour vous, avec vos objectifs, votre budget, votre style.",
              },
              {
                title: "20 ans d'expérience",
                desc: "500+ événements organisés, des PME aux entreprises du CAC 40, en France et à l'international.",
              },
              {
                title: "Zéro stress",
                desc: "Nous gérons tous les détails. Vous vous concentrez sur vos objectifs métier, nous nous concentrons sur l'excellence opérationnelle.",
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
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        title="Découvrez comment nous pouvons vous aider"
        subtitle="Parlons de votre prochain événement"
        buttonLabel="Demander une consultation"
        buttonHref="/contact"
      />

      <Footer />
    </>
  );
}
