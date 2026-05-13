import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageHero, Breadcrumb, CTABand, SectionHeader } from "@/components/shared";
import { expertiseDetails } from "@/lib/content";
import DejaFaitPourVous from "@/components/DejaFaitPourVous";

export const metadata: Metadata = {
  title: "Séminaires & Incentives d'Entreprise - Agence Spécialisée | Latitude Organisation",
  description:
    "Organisez un séminaire ou voyage incentive d'exception. Expertise, destinations variées, service sur mesure depuis 2004. Devis gratuit sous 24h.",
  alternates: {
    canonical: "https://www.latitude-organisation.com/expertises/seminaires-incentives",
  },
  openGraph: {
    title: "Séminaires & Incentives d'Entreprise | Latitude Organisation",
    description: "Organisez un séminaire ou voyage incentive d'exception. Service sur mesure depuis 2004.",
    url: "https://www.latitude-organisation.com/expertises/seminaires-incentives",
    type: "website",
  },
};

export default function SeminairesIncentivesPage() {
  const expertise = expertiseDetails.find((e) => e.slug === "seminaires-incentives")!;

  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Expertises", href: "/expertises" },
    { label: "Séminaires & Incentives", href: "/expertises/seminaires-incentives", current: true },
  ];

  const otherExpertises = expertiseDetails.filter((e) => e.slug !== "seminaires-incentives").slice(0, 3);

  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbs} />

      <PageHero
        eyebrow={expertise.h1.split(" — ")[1] || "EXPERTISE"}
        title={expertise.h1.split(" — ")[0]}
        subtitle={expertise.metaDescription}
        imageSrc={expertise.heroImage}
      />

      <DejaFaitPourVous />

      {/* Main Content */}
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

      {/* Photo Gallery */}
      {expertise.gallery && expertise.gallery.length > 0 && (
        <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionHeader
              eyebrow="NOS RÉALISATIONS"
              title="Quelques images de nos événements"
              centered={true}
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12">
              {expertise.gallery.map((photo, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden group">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
