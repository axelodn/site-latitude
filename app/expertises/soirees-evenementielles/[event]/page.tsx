import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Breadcrumb, CTABand } from "@/components/shared";
import { soireeEvents } from "@/lib/content";
import ImageCarousel from "@/components/ImageCarousel";
import { Clock, Users, ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{ event: string }>;
};

export async function generateStaticParams() {
  return soireeEvents.map((s) => ({ event: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).event;
  const soiree = soireeEvents.find((s) => s.slug === slug);
  if (!soiree) return {};

  return {
    title: `${soiree.name} | Soirées Événementielles | Latitude Organisation`,
    description: soiree.excerpt,
    keywords: [
      soiree.name,
      "soirée événementielle",
      "animation soirée entreprise",
      "soirée d'entreprise",
      "événementiel",
    ],
    openGraph: {
      title: `${soiree.name} | Soirées Événementielles Latitude`,
      description: soiree.excerpt,
      type: "article",
      images: soiree.images[0] ? [soiree.images[0]] : undefined,
    },
  };
}

export default async function SoireeEventPage({ params }: Props) {
  const slug = (await params).event;
  const soiree = soireeEvents.find((s) => s.slug === slug);

  if (!soiree) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Expertises", href: "/expertises" },
    { label: "Soirées Événementielles", href: "/expertises/soirees-evenementielles" },
    { label: soiree.name, href: `/expertises/soirees-evenementielles/${slug}`, current: true },
  ];

  // 3 related soirées (excluding current)
  const related = soireeEvents.filter((s) => s.slug !== soiree.slug).slice(0, 3);

  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbs} />

      {/* Hero */}
      <section className="relative bg-latitude-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <Link
            href="/expertises/soirees-evenementielles"
            className="inline-flex items-center gap-2 font-inter text-sm text-white/60 hover:text-latitude-gold transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Toutes les soirées événementielles
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="font-inter text-[10px] font-medium tracking-[0.3em] uppercase px-3 py-1.5"
                  style={{
                    background: "rgba(201,169,97,0.15)",
                    color: "#C9A961",
                    border: "1px solid rgba(201,169,97,0.4)",
                  }}
                >
                  Soirée Événementielle
                </span>
              </div>

              <h1 className="font-playfair font-bold text-white text-4xl lg:text-5xl mb-6">
                {soiree.name}
              </h1>

              <p className="font-inter text-white/70 text-lg leading-relaxed mb-8">
                {soiree.excerpt}
              </p>

              {/* Quick info */}
              <div className="flex flex-wrap gap-6 mb-8">
                {soiree.duration && (
                  <div className="flex items-center gap-2 text-white/80">
                    <Clock size={18} className="text-latitude-gold" />
                    <span className="font-inter text-sm">{soiree.duration}</span>
                  </div>
                )}
                {soiree.participants && (
                  <div className="flex items-center gap-2 text-white/80">
                    <Users size={18} className="text-latitude-gold" />
                    <span className="font-inter text-sm">{soiree.participants} participants</span>
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
              images={soiree.images}
              name={soiree.name}
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
            En quoi consiste cette soirée ?
          </h2>
          <p className="font-inter text-white/75 text-lg leading-relaxed">
            {soiree.description}
          </p>
        </div>
      </section>

      {/* Related soirées */}
      {related.length > 0 && (
        <section className="py-20 lg:py-28 bg-latitude-black border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-playfair text-3xl font-bold text-white mb-12 text-center">
              Autres soirées événementielles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/expertises/soirees-evenementielles/${r.slug}`}
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
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
                        border: "1px solid rgba(201,169,97,0.2)",
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
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
        title="Cette soirée vous intéresse ?"
        subtitle="Parlons de votre projet et concevons ensemble votre soirée sur mesure."
        buttonLabel="Demander un devis"
        buttonHref="/contact"
      />

      <Footer />
    </>
  );
}
