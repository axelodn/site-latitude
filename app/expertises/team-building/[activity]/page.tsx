import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Breadcrumb, CTABand } from "@/components/shared";
import { activities } from "@/lib/content";
import ImageCarousel from "@/components/ImageCarousel";
import { generateActivitySchema } from "@/lib/schema";

type Props = {
  params: Promise<{ activity: string }>;
};

export async function generateStaticParams() {
  return activities.map((a) => ({ activity: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).activity;
  const activity = activities.find((a) => a.slug === slug);
  if (!activity) return {};

  return {
    title: `${activity.name} | Team-Building | Latitude Organisation`,
    description: activity.excerpt,
    keywords: [
      activity.name,
      "team building",
      activity.category === "interieur" ? "team building intérieur" : "team building extérieur",
      "cohésion équipe",
      "activité entreprise",
    ],
    alternates: {
      canonical: `https://www.latitude-organisation.com/expertises/team-building/${slug}`,
    },
    openGraph: {
      title: `${activity.name} | Team-Building Latitude`,
      description: activity.excerpt,
      url: `https://www.latitude-organisation.com/expertises/team-building/${slug}`,
      type: "article",
      images: activity.image ? [activity.image] : undefined,
    },
  };
}

export default async function ActivityPage({ params }: Props) {
  const slug = (await params).activity;
  const activity = activities.find((a) => a.slug === slug);

  if (!activity) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Expertises", href: "/expertises" },
    { label: "Team-Building", href: "/expertises/team-building" },
    { label: activity.name, href: `/expertises/team-building/${slug}`, current: true },
  ];

  // Suggest 3 related activities (same category, excluding current)
  const related = activities
    .filter((a) => a.category === activity.category && a.slug !== activity.slug)
    .slice(0, 3);

  const categoryLabel = activity.category === "interieur" ? "Activité Intérieur" : "Activité Extérieur";
  const activitySchema = generateActivitySchema({
    name: activity.name,
    description: activity.description,
    slug: activity.slug,
    category: categoryLabel,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(activitySchema) }}
      />
      <Navigation />
      <Breadcrumb items={breadcrumbs} />

      {/* Hero with image */}
      <section className="relative bg-latitude-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <Link
            href="/expertises/team-building"
            className="inline-flex items-center gap-2 font-inter text-sm text-white/60 hover:text-latitude-gold transition-colors mb-8"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Toutes les activités team-building
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="font-inter text-[10px] font-medium tracking-[0.3em] uppercase px-3 py-1.5"
                  style={{ background: "rgba(201,169,97,0.15)", color: "#C9A961", border: "1px solid rgba(201,169,97,0.4)" }}
                >
                  {categoryLabel}
                </span>
                {activity.isLatitudeOriginal && (
                  <span
                    className="inline-flex items-center gap-1.5 font-inter text-[10px] font-medium tracking-[0.2em] uppercase px-3 py-1.5"
                    style={{ background: "#C9A961", color: "#0A0A0A" }}
                  >
                    <span aria-hidden="true" style={{ fontSize: "10px", lineHeight: 1 }}>★</span>
                    Création Latitude
                  </span>
                )}
              </div>

              <h1 className="font-playfair font-bold text-white text-4xl lg:text-5xl mb-6">
                {activity.name}
              </h1>

              <p className="font-inter text-white/70 text-lg leading-relaxed mb-8">
                {activity.excerpt}
              </p>

              {/* Quick info */}
              <div className="flex flex-wrap gap-6 mb-8">
                {activity.duration && (
                  <div className="flex items-center gap-2 text-white/80">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-latitude-gold" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <span className="font-inter text-sm">{activity.duration}</span>
                  </div>
                )}
                {activity.participants && (
                  <div className="flex items-center gap-2 text-white/80">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-latitude-gold" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    <span className="font-inter text-sm">{activity.participants} participants</span>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="inline-block font-inter text-sm font-medium px-8 py-4 text-white transition-all duration-400 tracking-widest uppercase"
                style={{ background: "#C9A961" }}
              >
                Demander un devis
              </Link>
            </div>

            {/* Image carousel */}
            <ImageCarousel
              images={activity.images}
              name={activity.name}
              className="aspect-[4/3]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 lg:py-28 bg-latitude-black border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold text-white mb-8">
            En quoi consiste cette activité ?
          </h2>
          <p className="font-inter text-white/75 text-lg leading-relaxed">
            {activity.description}
          </p>

          {activity.isLatitudeOriginal && (
            <div className="mt-12 border-l-4 pl-6 py-4" style={{ borderColor: "#C9A961", background: "rgba(201,169,97,0.05)" }}>
              <div className="flex items-center gap-2 mb-2">
                <span aria-hidden="true" style={{ color: "#C9A961", fontSize: "16px", lineHeight: 1 }}>★</span>
                <span className="font-inter text-xs font-medium tracking-[0.2em] uppercase text-latitude-gold">
                  Création Latitude
                </span>
              </div>
              <p className="font-inter text-white/70 text-sm leading-relaxed">
                Cette activité est un concept original imaginé et développé par Latitude Organisation.
                Vous ne la trouverez nulle part ailleurs — c'est notre signature.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Related activities */}
      {related.length > 0 && (
        <section className="py-20 lg:py-28 bg-latitude-black border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-playfair text-3xl font-bold text-white mb-12 text-center">
              Autres activités {activity.category === "interieur" ? "intérieur" : "extérieur"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/expertises/team-building/${r.slug}`}
                  className="group relative aspect-[4/3] overflow-hidden block"
                >
                  {r.images[0] ? (
                    <Image
                      src={r.images[0]}
                      alt={r.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)", border: "1px solid rgba(201,169,97,0.2)" }} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  {r.isLatitudeOriginal && (
                    <div className="absolute top-3 right-3 inline-flex items-center gap-1 font-inter text-[9px] font-medium tracking-[0.2em] uppercase px-2 py-1" style={{ background: "#C9A961", color: "#0A0A0A" }}>
                      <span aria-hidden="true" style={{ fontSize: "8px", lineHeight: 1 }}>★</span> Création
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-playfair text-xl font-bold text-white group-hover:text-latitude-gold transition-colors duration-300">
                      {r.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand
        title="Cette activité vous intéresse ?"
        subtitle="Parlons de votre projet et concevons ensemble votre team-building sur mesure."
        buttonLabel="Demander un devis"
        buttonHref="/contact"
      />

      <Footer />
    </>
  );
}
