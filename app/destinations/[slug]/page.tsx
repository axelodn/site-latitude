import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageHero, Breadcrumb, CTABand } from "@/components/shared";
import { destinationsDetails } from "@/lib/content";



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
    title: destination.metaTitle,
    description: destination.metaDescription,
    keywords: destination.keywords,
    openGraph: {
      title: destination.metaTitle,
      description: destination.metaDescription,
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
        title={destination.h1}
        subtitle={destination.intro.substring(0, 150)}
      />

      {/* Main Content */}
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                  À propos
                </h2>
                <p className="font-inter text-white/70 text-lg leading-relaxed">
                  {destination.intro}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                  Pourquoi choisir {destination.name} ?
                </h2>
                <ul className="space-y-3">
                  {destination.why.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-latitude-gold font-bold">✓</span>
                      <span className="font-inter text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                  Informations pratiques
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-inter font-bold text-white mb-2">Climat</h3>
                    <p className="font-inter text-white/70">{destination.climat}</p>
                  </div>
                  <div>
                    <h3 className="font-inter font-bold text-white mb-2">Meilleure saison</h3>
                    <p className="font-inter text-white/70">{destination.bestSeason}</p>
                  </div>
                  <div>
                    <h3 className="font-inter font-bold text-white mb-2">Lieux d'intérêt</h3>
                    <ul className="space-y-2">
                      {destination.lieux.slice(0, 4).map((lieu, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-latitude-gold">•</span>
                          <span className="font-inter text-white/70">{lieu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="font-playfair text-xl font-bold text-white mb-4">
                  Intéressé par {destination.name} ?
                </h3>
                <Link
                  href="/contact"
                  className="inline-block font-inter text-sm font-medium px-8 py-4 text-white transition-all duration-400 tracking-widest uppercase"
                  style={{ background: "#C9A961" }}
                >
                  Demander un devis
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Other Destinations */}
              <div>
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
              </div>
            </div>
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
