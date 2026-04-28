import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageHero, Breadcrumb, CTABand } from "@/components/shared";
import { realisationsDetails } from "@/lib/content";



type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const realisation = realisationsDetails.find((r) => r.slug === slug);

  if (!realisation) {
    return {};
  }

  return {
    title: `${realisation.title} | Latitude Organisation`,
    description: realisation.description,
    keywords: [
      realisation.category,
      "étude de cas",
      "réalisation événement",
      realisation.title,
    ],
    openGraph: {
      title: `${realisation.title} | Latitude Organisation`,
      description: realisation.description,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return realisationsDetails.map((realisation) => ({
    slug: realisation.slug,
  }));
}

export default async function RealisationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const realisation = realisationsDetails.find((r) => r.slug === slug);

  if (!realisation) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-latitude-black flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-playfair text-4xl font-bold text-white mb-4">
              Page non trouvée
            </h1>
            <Link href="/realisations" className="text-latitude-gold hover:underline">
              Retour aux réalisations
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Réalisations", href: "/realisations" },
    { label: realisation.title, href: `/realisations/${slug}`, current: true },
  ];

  // Get other realisations for sidebar
  const otherRealisations = realisationsDetails.filter((r) => r.slug !== slug).slice(0, 3);

  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbs} />

      {/* Hero */}
      <PageHero
        eyebrow={realisation.category.toUpperCase()}
        title={realisation.title}
        subtitle={realisation.description.substring(0, 150)}
      />

      {/* Main Content */}
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                  Le contexte
                </h2>
                <p className="font-inter text-white/70 text-lg leading-relaxed">
                  {realisation.description}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                  Les défis
                </h2>
                <div className="space-y-4">
                  {realisation.challenges.map((challenge, i) => (
                    <p key={i} className="font-inter text-white/70 text-lg leading-relaxed">
                      • {challenge}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                  Nos solutions
                </h2>
                <div className="space-y-4">
                  {realisation.solutions.map((solution, i) => (
                    <p key={i} className="font-inter text-white/70 text-lg leading-relaxed">
                      • {solution}
                    </p>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="font-playfair text-xl font-bold text-white mb-4">
                  Inspiré par ce projet ?
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
              {/* Key Stats */}
              <div className="bg-white/5 border border-white/10 p-8">
                <h3 className="font-playfair text-lg font-bold text-white mb-6">
                  Chiffres clés
                </h3>
                <div className="space-y-4">
                  <div className="border-b border-white/10 pb-4">
                    <p className="font-inter text-sm text-white/60 mb-1">
                      Participants
                    </p>
                    <p className="font-playfair text-2xl font-bold text-latitude-gold">
                      {realisation.participants}
                    </p>
                  </div>
                  <div className="border-b border-white/10 pb-4">
                    <p className="font-inter text-sm text-white/60 mb-1">
                      Durée
                    </p>
                    <p className="font-playfair text-2xl font-bold text-latitude-gold">
                      {realisation.duree}
                    </p>
                  </div>
                  <div>
                    <p className="font-inter text-sm text-white/60 mb-1">
                      Lieu
                    </p>
                    <p className="font-playfair text-2xl font-bold text-latitude-gold">
                      {realisation.lieu}
                    </p>
                  </div>
                </div>
              </div>

              {/* Other Realisations */}
              <div>
                <h3 className="font-playfair text-lg font-bold text-white mb-4">
                  Autres réalisations
                </h3>
                <div className="space-y-3">
                  {otherRealisations.map((real) => (
                    <Link
                      key={real.slug}
                      href={`/realisations/${real.slug}`}
                      className="block p-4 border border-white/10 hover:border-latitude-gold/50 hover:bg-white/5 transition-all duration-300"
                    >
                      <p className="font-inter text-white text-sm font-medium">
                        {real.title}
                      </p>
                      <p className="font-inter text-white/50 text-xs mt-1">
                        {real.category}
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
        title="Prêt à créer votre événement mémorable ?"
        subtitle="Parlons de votre prochain projet"
        buttonLabel="Demander un devis"
        buttonHref="/contact"
      />

      <Footer />
    </>
  );
}
