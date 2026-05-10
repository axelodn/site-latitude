import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageHero, Breadcrumb, CTABand, SectionHeader } from "@/components/shared";
import { expertiseDetails } from "@/lib/content";
import ActivitiesGrid from "@/components/ActivitiesGrid";
import SoireesGrid from "@/components/SoireesGrid";
import DejaFaitPourVous from "@/components/DejaFaitPourVous";



type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const expertise = expertiseDetails.find((e) => e.slug === slug);

  if (!expertise) {
    return {};
  }

  return {
    title: expertise.metaTitle,
    description: expertise.metaDescription,
    keywords: expertise.keywords,
    alternates: {
      canonical: `https://www.latitude-organisation.com/expertises/${slug}`,
    },
    openGraph: {
      title: expertise.metaTitle,
      description: expertise.metaDescription,
      url: `https://www.latitude-organisation.com/expertises/${slug}`,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return expertiseDetails.map((expertise) => ({
    slug: expertise.slug,
  }));
}

export default async function ExpertisePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const expertise = expertiseDetails.find((e) => e.slug === slug);

  if (!expertise) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-latitude-black flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-playfair text-4xl font-bold text-white mb-4">
              Page non trouvée
            </h1>
            <Link href="/expertises" className="text-latitude-gold hover:underline">
              Retour aux expertises
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Expertises", href: "/expertises" },
    { label: expertise.h1.split(" — ")[0], href: `/expertises/${slug}`, current: true },
  ];

  // Get other expertise cards for sidebar
  const otherExpertises = expertiseDetails.filter((e) => e.slug !== slug).slice(0, 3);

  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbs} />

      {/* Hero */}
      <PageHero
        eyebrow={expertise.h1.split(" — ")[1] || "EXPERTISE"}
        title={expertise.h1.split(" — ")[0]}
        subtitle={expertise.metaDescription}
        imageSrc={expertise.heroImage}
      />

      {/* Déjà fait pour vous (séminaires only) */}
      {slug === "seminaires-incentives" && <DejaFaitPourVous />}

      {/* Activities Grid (team-building only) */}
      {slug === "team-building" && <ActivitiesGrid />}

      {/* Soirées Grid (soirees-evenementielles only) */}
      {slug === "soirees-evenementielles" && <SoireesGrid />}

      {/* Main Content — sections + FAQ + sidebar (all expertises) */}
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {expertise.sections.map((section, index) => {
                const isStep = /^0[0-9] —/.test(section.title);
                return (
                  <div key={index} className={isStep ? "border-l-2 pl-8" : ""} style={isStep ? { borderColor: "#C9A961" } : {}}>
                    <h2 className={`font-playfair font-bold text-white mb-4 ${isStep ? "text-xl" : "text-2xl"}`}>
                      {section.title}
                    </h2>
                    <p className="font-inter text-white/65 text-base leading-relaxed mb-4">
                      {section.content}
                    </p>
                    {section.items && section.items.length > 0 && (
                      <ul className="space-y-3 mt-4">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 font-inter text-white/70 text-sm leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#C9A961" }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}

              {/* CTA Section */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="font-playfair text-xl font-bold text-white mb-4">
                  {expertise.ctaText}
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
            <div className="lg:col-span-1">
              {/* FAQ */}
              <div className="bg-white/5 border border-white/10 p-8 mb-8">
                <h3 className="font-playfair text-xl font-bold text-white mb-6">
                  Questions fréquentes
                </h3>
                <div className="space-y-6">
                  {expertise.faq.map((item, i) => (
                    <div key={i}>
                      <p className="font-inter font-medium text-white mb-2 text-sm">
                        {item.question}
                      </p>
                      <p className="font-inter text-white/60 text-sm">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Expertises */}
              <div>
                <h3 className="font-playfair text-xl font-bold text-white mb-4">
                  Autres expertises
                </h3>
                <div className="space-y-3">
                  {otherExpertises.map((exp) => (
                    <Link
                      key={exp.slug}
                      href={`/expertises/${exp.slug}`}
                      className="block p-4 border border-white/10 hover:border-latitude-gold/50 hover:bg-white/5 transition-all duration-300"
                    >
                      <p className="font-inter text-white text-sm font-medium">
                        {exp.h1.split(" — ")[0]}
                      </p>
                      <p className="font-inter text-white/50 text-xs mt-1">
                        Découvrir →
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery (other expertises) */}
      {slug !== "team-building" && slug !== "soirees-evenementielles" && expertise.gallery && expertise.gallery.length > 0 && (
        <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionHeader
              eyebrow="NOS RÉALISATIONS"
              title="Quelques images de nos événements"
              centered={true}
            />
            <div className="columns-2 md:columns-3 lg:columns-4 gap-3 mt-12 space-y-3">
              {expertise.gallery.map((photo, i) => (
                <div key={i} className="break-inside-avoid overflow-hidden">
                  <div className="relative overflow-hidden group">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTABand
        title="Prêt à créer votre événement sur mesure ?"
        subtitle={expertise.ctaText}
        buttonLabel="Demander un devis"
        buttonHref="/contact"
      />

      <Footer />
    </>
  );
}
