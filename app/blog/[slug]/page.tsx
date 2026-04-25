"use client";

import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageHero, Breadcrumb, CTABand } from "@/components/shared";
import { blogArticles } from "@/lib/content";
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
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | Blog Latitude Organisation`,
    description: article.excerpt,
    keywords: [
      article.category,
      "blog",
      "conseils événementiel",
      article.title,
    ],
    openGraph: {
      title: `${article.title} | Blog Latitude Organisation`,
      description: article.excerpt,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-latitude-black flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-playfair text-4xl font-bold text-white mb-4">
              Article non trouvé
            </h1>
            <Link href="/blog" className="text-latitude-gold hover:underline">
              Retour au blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: article.title, href: `/blog/${slug}`, current: true },
  ];

  // Get related articles
  const relatedArticles = blogArticles
    .filter((a) => a.category === article.category && a.slug !== slug)
    .slice(0, 3);

  // Format date
  const date = new Date(article.publishDate);
  const formattedDate = date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbs} />

      {/* Hero */}
      <PageHero
        eyebrow={article.category.toUpperCase()}
        title={article.title}
        subtitle={article.excerpt}
      />

      {/* Article Content */}
      <article className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="prose prose-invert max-w-none"
          >
            {/* Meta */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10"
            >
              <span className="font-inter text-sm text-white/60">
                {formattedDate}
              </span>
              <span className="font-inter text-sm text-white/60">•</span>
              <span className="font-inter text-sm text-latitude-gold">
                {article.author}
              </span>
              <span className="font-inter text-sm text-white/60">•</span>
              <span className="font-inter text-sm text-white/60">
                {Math.ceil(article.content.split(" ").length / 200)} min de lecture
              </span>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={fadeInUp}
              className="font-inter text-white/80 text-lg leading-relaxed space-y-6 mb-12"
            >
              {article.content.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 pt-8 border-t border-white/10"
            >
              <h3 className="font-playfair text-xl font-bold text-white mb-4">
                Besoin de conseils personnalisés ?
              </h3>
              <Link
                href="/contact"
                className="inline-block font-inter text-sm font-medium px-8 py-4 text-white transition-all duration-400 tracking-widest uppercase"
                style={{ background: "#C9A961" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#b8943f")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#C9A961")
                }
              >
                Demander une consultation
              </Link>
            </motion.div>
          </motion.div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="mt-20 pt-12 border-t border-white/10"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-playfair text-2xl font-bold text-white mb-8"
              >
                Articles similaires
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <motion.div
                    key={relatedArticle.slug}
                    variants={fadeInUp}
                  >
                    <Link
                      href={`/blog/${relatedArticle.slug}`}
                      className="block p-6 border border-white/10 hover:border-latitude-gold/50 hover:bg-white/5 transition-all duration-300"
                    >
                      <p className="font-inter text-xs text-latitude-gold uppercase tracking-wider mb-2">
                        {relatedArticle.category}
                      </p>
                      <p className="font-playfair font-bold text-white text-sm mb-3 line-clamp-2">
                        {relatedArticle.title}
                      </p>
                      <p className="font-inter text-xs text-white/50">
                        Lire la suite →
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </article>

      {/* CTA */}
      <CTABand
        title="Vos événements méritent l'excellence"
        subtitle="Nos équipes sont prêtes à transformer vos idées"
        buttonLabel="Demander un devis"
        buttonHref="/contact"
      />

      <Footer />
    </>
  );
}
