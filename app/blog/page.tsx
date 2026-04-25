import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageHero, Breadcrumb, CTABand, SectionHeader } from "@/components/shared";
import { blogArticles } from "@/lib/content";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export const metadata: Metadata = {
  title: "Blog | Latitude Organisation",
  description:
    "Conseils, tendances et actualités en organisation d'événements professionnels. Articles d'experts sur séminaires, team-building, congrès et plus.",
  keywords: [
    "blog événementiel",
    "conseils organisation événements",
    "tendances événementiel",
    "actualités séminaires",
  ],
  openGraph: {
    title: "Blog | Latitude Organisation",
    description:
      "Conseils et tendances en organisation d'événements professionnels",
    type: "website",
  },
};

export default function BlogIndex() {
  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Blog", href: "/blog", current: true },
  ];

  // Group articles by category
  const categories = Array.from(
    new Set(blogArticles.map((article) => article.category))
  );

  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbs} />

      {/* Hero */}
      <PageHero
        eyebrow="RESSOURCES"
        title="Le Blog de Latitude Organisation"
        subtitle="Conseils, tendances et insights d'experts en organisation d'événements professionnels."
      />

      {/* Articles Grid */}
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="LIRE NOS ARTICLES"
            title="Conseils et tendances événementiel"
            centered={true}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          >
            {blogArticles.map((article) => (
              <motion.div
                key={article.slug}
                variants={fadeInUp}
              >
                <Link
                  href={`/blog/${article.slug}`}
                  className="group block h-full"
                >
                  <div className="h-full border border-white/10 bg-white/2 p-8 hover:border-latitude-gold/50 hover:bg-white/5 transition-all duration-300 flex flex-col">
                    <p className="font-inter text-xs text-latitude-gold uppercase tracking-wider mb-2">
                      {article.category}
                    </p>
                    <h3 className="font-playfair text-xl font-bold text-white mb-3 group-hover:text-latitude-gold transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="font-inter text-white/70 text-sm leading-relaxed mb-6 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="font-inter text-xs text-white/50">
                        {article.author}
                      </span>
                      <span className="font-inter text-xs font-medium text-latitude-gold group-hover:underline">
                        Lire →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="CATÉGORIES"
            title="Parcourez par catégorie"
            centered={true}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-12"
          >
            {categories.map((category) => {
              const count = blogArticles.filter(
                (a) => a.category === category
              ).length;
              return (
                <motion.div key={category} variants={fadeInUp}>
                  <button className="w-full py-4 px-6 border border-white/10 hover:border-latitude-gold/50 hover:bg-white/5 transition-all duration-300 text-center">
                    <p className="font-playfair text-lg font-bold text-white">
                      {category}
                    </p>
                    <p className="font-inter text-xs text-white/50 mt-1">
                      {count} article{count > 1 ? "s" : ""}
                    </p>
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        title="Inspiré par nos articles ?"
        subtitle="Parlons de votre prochain projet événementiel"
        buttonLabel="Demander une consultation"
        buttonHref="/contact"
      />

      <Footer />
    </>
  );
}
