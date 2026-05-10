import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageHero, Breadcrumb, CTABand } from "@/components/shared";
import { blogArticles } from "@/lib/content";
import { generateArticleSchema } from "@/lib/schema";



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
    alternates: {
      canonical: `https://www.latitude-organisation.com/blog/${slug}`,
    },
    openGraph: {
      title: `${article.title} | Blog Latitude Organisation`,
      description: article.excerpt,
      url: `https://www.latitude-organisation.com/blog/${slug}`,
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
  const date = new Date(article.date);
  const formattedDate = date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const articleSchema = generateArticleSchema(article);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
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
          <div className="prose prose-invert max-w-none">
            {/* Meta */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10">
              <span className="font-inter text-sm text-white/60">
                {formattedDate}
              </span>
              <span className="font-inter text-sm text-white/60">•</span>
              <span className="font-inter text-sm text-latitude-gold">
                {article.author}
              </span>
              <span className="font-inter text-sm text-white/60">•</span>
              <span className="font-inter text-sm text-white/60">
                {Math.ceil(article.content.reduce((acc, section) => acc + section.paragraphs.join(" ").split(" ").length + (section.bullets?.join(" ").split(" ").length || 0), 0) / 200)} min de lecture
              </span>
            </div>

            {/* Content */}
            <div className="font-inter text-white/80 text-lg leading-relaxed space-y-6 mb-12">
              {article.content.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h3 className="font-playfair text-xl font-bold text-white mb-4 mt-6">
                      {section.heading}
                    </h3>
                  )}
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph, j) => (
                      <p key={j}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="list-disc list-inside space-y-2 mt-4">
                      {section.bullets.map((bullet, j) => (
                        <li key={j}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="font-playfair text-xl font-bold text-white mb-4">
                Besoin de conseils personnalisés ?
              </h3>
              <Link
                href="/contact"
                className="inline-block font-inter text-sm font-medium px-8 py-4 text-white transition-all duration-400 tracking-widest uppercase"
                style={{ background: "#C9A961" }}
              >
                Demander une consultation
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-20 pt-12 border-t border-white/10">
              <h2 className="font-playfair text-2xl font-bold text-white mb-8">
                Articles similaires
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <div
                    key={relatedArticle.slug}
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
                  </div>
                ))}
              </div>
            </div>
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
