import Link from "next/link";
import Image from "next/image";
import { incentiveItems } from "@/lib/content";

export default function DejaFaitPourVous() {
  const sorted = [...incentiveItems].sort((a, b) => (b.image ? 1 : 0) - (a.image ? 1 : 0));

  return (
    <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-inter text-xs font-medium tracking-[0.4em] uppercase mb-4"
            style={{ color: "#C9A961" }}
          >
            RÉFÉRENCES
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Déjà fait pour vous
          </h2>
          <p className="font-inter text-white/60 text-lg max-w-2xl mx-auto">
            {incentiveItems.length} expériences vécues et maîtrisées de bout en bout — cliquez sur une carte pour en savoir plus.
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1" style={{ background: "rgba(201,169,97,0.3)" }} />
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white">
            Séminaires & Incentives
          </h3>
          <span className="font-inter text-sm text-white/40">
            {incentiveItems.length} activités
          </span>
          <div className="h-px flex-1" style={{ background: "rgba(201,169,97,0.3)" }} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {sorted.map((item) => (
            <Link
              key={item.slug}
              href={`/expertises/seminaires-incentives/${item.slug}`}
              className="group relative aspect-square overflow-hidden block"
              aria-label={`Découvrir ${item.name}`}
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              ) : (
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #1f1f1f 0%, #0a0a0a 100%)",
                    border: "1px solid rgba(201,169,97,0.15)",
                  }}
                >
                  <p
                    className="font-playfair font-bold text-center px-4"
                    style={{ color: "rgba(201,169,97,0.4)", fontSize: "1.1rem" }}
                  >
                    {item.name}
                  </p>
                </div>
              )}

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

              {/* Hover gold tint */}
              <div className="absolute inset-0 bg-latitude-gold/0 group-hover:bg-latitude-gold/10 transition-all duration-400" />

              {/* Title at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-playfair text-lg lg:text-xl font-bold text-white leading-tight group-hover:text-latitude-gold transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="font-inter text-xs text-white/60 mt-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Découvrir →
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
