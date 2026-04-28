import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageHero, Breadcrumb, CTABand, SectionHeader } from "@/components/shared";
import { realisationsDetails } from "@/lib/content";



export const metadata: Metadata = {
  title: "Nos Réalisations | Latitude Organisation",
  description:
    "Découvrez 8 études de cas d'événements réussis : conventions, séminaires, soirées gala, incentives et team-building organisés par Latitude.",
  keywords: [
    "réalisations événementiel",
    "études de cas événements",
    "portfolio agence événementielle",
    "conventions réussies",
  ],
  openGraph: {
    title: "Nos Réalisations | Latitude Organisation",
    description: "Découvrez nos projets et études de cas",
    type: "website",
  },
};

export default function RealisationsIndex() {
  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Réalisations", href: "/realisations", current: true },
  ];

  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbs} />

      {/* Hero */}
      <PageHero
        eyebrow="NOTRE PORTFOLIO"
        title="8 réalisations qui ont marqué les esprits"
        subtitle="Des événements conçus sur mesure pour des entreprises et des publics variés. Nos succès sont vos succès."
        imageSrc="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=80"
      />

      {/* Portfolio Grid */}
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="VOIR NOS PROJETS"
            title="Événements et réalisations"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {realisationsDetails.map((realisation) => (
              <div
                key={realisation.slug}
              >
                <Link
                  href={`/realisations/${realisation.slug}`}
                  className="group block h-full"
                >
                  <div className="h-full border border-white/10 bg-white/2 p-6 hover:border-latitude-gold/50 hover:bg-white/5 transition-all duration-300">
                    <h3 className="font-playfair text-lg font-bold text-white mb-2 group-hover:text-latitude-gold transition-colors duration-300">
                      {realisation.title}
                    </h3>
                    <p className="font-inter text-xs text-latitude-gold mb-3">
                      {realisation.category}
                    </p>
                    <p className="font-inter text-white/70 text-sm leading-relaxed mb-4">
                      {realisation.description.substring(0, 100)}...
                    </p>
                    <span className="inline-block font-inter text-xs font-medium text-latitude-gold group-hover:underline">
                      Lire le cas →
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="NOS GARANTIES"
            title="Pourquoi nous faire confiance"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                number: "500+",
                label: "Événements organisés",
              },
              {
                number: "98%",
                label: "Taux de satisfaction",
              },
              {
                number: "50+",
                label: "Experts dans l'équipe",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center"
              >
                <p className="font-playfair text-4xl font-bold text-latitude-gold mb-2">
                  {item.number}
                </p>
                <p className="font-inter text-white/70">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        title="Prêt à créer votre événement mémorable ?"
        subtitle="Nos équipes sont prêtes à concevoir votre prochain succès"
        buttonLabel="Demander un devis"
        buttonHref="/contact"
      />

      <Footer />
    </>
  );
}
