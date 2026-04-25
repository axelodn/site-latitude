import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageHero, Breadcrumb, CTABand, SectionHeader } from "@/components/shared";
import { expertiseDetails } from "@/lib/content";
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
  const expertise = expertiseDetails.find((e) => e.slug === slug);

  if (!expertise) {
    return {};
  }

  return {
    title: expertise.metaTitle,
    description: expertise.metaDescription,
    keywords: expertise.keywords,
    openGraph: {
      title: expertise.metaTitle,
      description: expertise.metaDescription,
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
              className="lg:col-span-2 space-y-8"
            >
              {expertise.sections.map((section, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                    {section.title}
                  </h2>
                  <p className="font-inter text-white/70 text-lg leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              ))}

              {/* CTA Section */}
              <motion.div
                variants={fadeInUp}
                className="mt-12 pt-8 border-t border-white/10"
              >
                <h3 className="font-playfair text-xl font-bold text-white mb-4">
                  {expertise.ctaText}
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
              className="lg:col-span-1"
            >
              {/* FAQ */}
              <motion.div
                variants={fadeInUp}
                className="bg-white/5 border border-white/10 p-8 mb-8"
              >
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
              </motion.div>

              {/* Related Expertises */}
              <motion.div variants={fadeInUp}>
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
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

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
