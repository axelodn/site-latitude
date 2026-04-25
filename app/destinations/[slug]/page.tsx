"use client";

import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageHero, Breadcrumb, CTABand } from "@/components/shared";
import { destinationsDetails } from "@/lib/content";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const destination = destinationsDetails.find((d) => d.slug === slug);

  if (!destination) {
    return {};
  }

  return {
    title: `${destination.name} | Latitude Organisation`,
    description: destination.description.substring(0, 160),
    keywords: [
      destination.name,
      destination.country,
      "événement",
      "séminaire",
      "destination",
    ],
    openGraph: {
      title: `${destination.name} | Latitude Organisation`,
      description: destination.description.substring(0, 160),
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return destinationsDetails.map((destination) => ({
    slug: destination.slug,
  }));
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const destination = destinationsDetails.find((d) => d.slug === slug);

  if (!destination) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-latitude-black flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-playfair text-4xl font-bold text-white mb-4">
              Page non trouvée
            </h1>
            <Link href="/destinations" className="text-latitude-gold hover:underline">
              Retour aux destinations
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Destinations", href: "/destinations" },
    { label: destination.name, href: `/destinations/${slug}`, current: true },
  ];

  // Get other destinations for sidebar
  const otherDestinations = destinationsDetails
    .filter((d) => d.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbs} />

      {/* Hero */}
      <PageHero
        eyebrow={destination.country.toUpperCase()}
        title={destination.name}
        subtitle={destination.description.substring(0, 150)}
      />

      {/* Main Content */}
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="lg:col-span-2"
            >
              <motion.div variants={fadeInUp} className="mb-8">
                <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                  À propos
                </h2>
                <p className="font-inter text-white/70 text-lg leading-relaxed">
                  {destination.description}
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="mb-8">
                <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                  Pourquoi choisir {destination.name} ?
                </h2>
                <ul className="space-y-3">
                  {destination.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-latitude-gold font-bold">✓</span>
                      <span className="font-inter text-white/70">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} className="mb-8">
                <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                  Recommandations événementielles
                </h2>
                <div className="space-y-4">
                  {destination.recommendations.map((rec, i) => (
                    <div key={i} className="border-l-2 border-latitude-gold pl-4">
                      <p className="font-inter font-medium text-white mb-1">
                        {rec.title}
                      </p>
                      <p className="font-inter text-white/70 text-sm">
                        {rec.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                variants={fadeInUp}
                className="mt-12 pt-8 border-t border-white/10"
              >
                <h3 className="font-playfair text-xl font-bold text-white mb-4">
                  Intéressé par {destination.name} ?
                </h3>
                <Link
                  href="/contact"
                  className="inline-block font-inter text-sm font-medium px-8 py-4 text-white transition-all duration-400 tracking-widest uppercase"
                  style={{ background: "#C9A961" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#b8943f")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#C9A961")}
                >
                  Demander un devis
                </Link>
              </motion.div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="lg:col-span-1 space-y-8"
            >
              {/* Quick Facts */}
              <motion.div
                variants={fadeInUp}
                className="bg-white/5 border border-white/10 p-8"
              >
                <h3 className="font-playfair text-lg font-bold text-white mb-6">
                  Informations pratiques
                </h3>
                <div className="space-y-4">
                  <div className="border-b border-white/10 pb-4">
                    <p className="font-inter text-sm text-white/60 mb-1">
                      Fuseau horaire
                    </p>
                    <p className="font-playfair font-bold text-white">
                      {destination.timezone}
                    </p>
                  </div>
                  <div className="border-b border-white/10 pb-4">
                    <p className="font-inter text-sm text-white/60 mb-1">
                      Meilleure période
                    </p>
                    <p className="font-playfair font-bold text-white">
                      {destination.bestPeriod}
                    </p>
                  </div>
                  <div>
                    <p className="font-inter text-sm text-white/60 mb-1">
                      Langue officielle
                    </p>
                    <p className="font-playfair font-bold text-white">
                      {destination.language}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Other Destinations */}
              <motion.div variants={fadeInUp}>
                <h3 className="font-playfair text-lg font-bold text-white mb-4">
                  Autres destinations
                </h3>
                <div className="space-y-3">
                  {otherDestinations.map((dest) => (
                    <Link
                      key={dest.slug}
                      href={`/destinations/${dest.slug}`}
                      className="block p-4 border border-white/10 hover:border-latitude-gold/50 hover:bg-white/5 transition-all duration-300"
                    >
                      <p className="font-inter text-white text-sm font-medium">
                        {dest.name}
                      </p>
                      <p className="font-inter text-white/50 text-xs mt-1">
                        {dest.country}
                      </p>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        title={`Organisons votre événement à ${destination.name}`}
        subtitle="Nos équipes connaissent la destination et réaliseront votre vision"
        buttonLabel="Demander un devis"
        buttonHref="/contact"
      />

      <Footer />
    </>
  );
}
