import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { activities, type Activity } from "@/lib/content";

function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <Link
      href={`/expertises/team-building/${activity.slug}`}
      className="group relative aspect-square overflow-hidden block"
      aria-label={`Découvrir l'activité ${activity.name}`}
    >
      {/* Image or placeholder */}
      {activity.images[0] ? (
        <Image
          src={activity.images[0]}
          alt={activity.name}
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
            style={{ color: "rgba(201,169,97,0.4)", fontSize: "1.5rem" }}
          >
            {activity.name}
          </p>
        </div>
      )}

      {/* Dark gradient overlay (always visible at bottom) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

      {/* Hover gold tint */}
      <div className="absolute inset-0 bg-latitude-gold/0 group-hover:bg-latitude-gold/10 transition-all duration-400" />

      {/* Création Latitude badge */}
      {activity.isLatitudeOriginal && (
        <div
          className="absolute top-3 right-3 inline-flex items-center gap-1.5 font-inter text-[9px] font-medium tracking-[0.2em] uppercase px-2.5 py-1.5 z-10"
          style={{ background: "#C9A961", color: "#0A0A0A" }}
          title="Création originale Latitude Organisation"
        >
          <Star size={9} fill="currentColor" />
          Création Latitude
        </div>
      )}

      {/* Title at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-playfair text-lg lg:text-xl font-bold text-white leading-tight group-hover:text-latitude-gold transition-colors duration-300">
          {activity.name}
        </h3>
        <p className="font-inter text-xs text-white/60 mt-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          Découvrir →
        </p>
      </div>
    </Link>
  );
}

export default function ActivitiesGrid() {
  const indoor = activities.filter((a) => a.category === "interieur");
  const outdoor = activities.filter((a) => a.category === "exterieur");

  return (
    <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-inter text-xs font-medium tracking-[0.4em] uppercase mb-4"
            style={{ color: "#C9A961" }}
          >
            NOS ACTIVITÉS
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Choisissez votre team-building
          </h2>
          <p className="font-inter text-white/60 text-lg max-w-2xl mx-auto">
            Plus de 35 activités originales en intérieur et extérieur. Cliquez sur une fiche pour découvrir l'activité en détail.
          </p>
        </div>

        {/* OUTDOOR */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1" style={{ background: "rgba(201,169,97,0.3)" }} />
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white">
              Team-Building Extérieur
            </h3>
            <span className="font-inter text-sm text-white/40">
              {outdoor.length} activités
            </span>
            <div className="h-px flex-1" style={{ background: "rgba(201,169,97,0.3)" }} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
            {outdoor.map((activity) => (
              <ActivityCard key={activity.slug} activity={activity} />
            ))}
          </div>
        </div>

        {/* INDOOR */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1" style={{ background: "rgba(201,169,97,0.3)" }} />
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white">
              Team-Building Intérieur
            </h3>
            <span className="font-inter text-sm text-white/40">
              {indoor.length} activités
            </span>
            <div className="h-px flex-1" style={{ background: "rgba(201,169,97,0.3)" }} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
            {indoor.map((activity) => (
              <ActivityCard key={activity.slug} activity={activity} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
