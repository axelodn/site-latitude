import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageHero, Breadcrumb, CTABand, SectionHeader } from "@/components/shared";
import { expertiseDetails } from "@/lib/content";



export const metadata: Metadata = {
  title: "Nos Expertises | Latitude Organisation",
  description:
    "Découvrez nos expertises en organisation événementielle : séminaires, soirées et team-building sur mesure en France et à l'international.",
  keywords: [
    "expertises événementiel",
    "séminaires entreprise",
    "team-building",
    "soirées événementielles",
  ],
  openGraph: {
    title: "Nos Expertises | Latitude Organisation",
    description:
      "Nos expertises pour tous vos événements professionnels",
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
        title="Nos expertises au service de vos événements"
        subtitle="Séminaires & incentives, soirées événementielles, team-building — des expériences sur mesure, orchestrées de A à Z."
        imageSrc="/images/rando-vercors.webp"
      />

      {/* Expertises Grid */}
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="VOIR NOS DOMAINES"
            title="Une expertise pour chaque type d'événement"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {expertiseDetails.map((expertise) => (
              <Link
                key={expertise.slug}
                href={`/expertises/${expertise.slug}`}
                className="group relative overflow-hidden block min-h-[420px]"
              >
                {/* Background image */}
                {expertise.heroImage && (
                  <Image
                    src={expertise.heroImage}
                    alt={expertise.h1.split(" — ")[0]}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.25) 100%)" }} />
                {/* Gold tint on hover */}
                <div className="absolute inset-0 bg-latitude-gold/0 group-hover:bg-latitude-gold/8 transition-all duration-400" />
                {/* Border */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-latitude-gold/50 transition-colors duration-300" />

                {/* Content pinned to bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-playfair text-2xl font-bold text-white mb-3 group-hover:text-latitude-gold transition-colors duration-300 leading-tight">
                    {expertise.h1.split(" — ")[0]}
                  </h3>
                  <p className="font-inter text-white/70 text-sm leading-relaxed mb-5">
                    {expertise.sections[0].content.substring(0, 120)}...
                  </p>
                  <span className="inline-block font-inter text-sm font-medium text-latitude-gold group-hover:underline">
                    En savoir plus →
                  </span>
                </div>
              </Link>
            ))}
          </div>
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

          <div className="space-y-6 mt-12">
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
              <div
                key={i}
                className="border-l-2 border-latitude-gold pl-6"
              >
                <h3 className="font-playfair text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="font-inter text-white/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
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
