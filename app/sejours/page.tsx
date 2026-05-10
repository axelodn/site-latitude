import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CTABand } from "@/components/shared";
import { ArrowRight, Sun, Snowflake, MapPin, Users, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Séjours Sur-Mesure | Latitude Organisation",
  description:
    "Séjours incentive et team-building sur-mesure été comme hiver. Montagne, mer, campagne ou étranger : Latitude Organisation conçoit l'expérience parfaite pour vos équipes.",
  alternates: {
    canonical: "https://www.latitude-organisation.com/sejours",
  },
  openGraph: {
    title: "Séjours Sur-Mesure | Latitude Organisation",
    description: "Séjours incentive et team-building sur-mesure été comme hiver en France et à l'international.",
    url: "https://www.latitude-organisation.com/sejours",
    type: "website",
  },
};

const sejours_ete = [
  {
    title: "Corse",
    lieu: "Corse, France",
    duree: "3 à 5 jours",
    participants: "10 – 80 pers.",
    description: "Entre mer et montagne, terre de rencontres et de traditions où la lumière d'une simple bougie éclaire son monde.",
    image: "/images/sejour-corse.webp",
    tags: ["Mer", "Montagne", "Traditions"],
  },
  {
    title: "Vercors",
    lieu: "Vercors, France",
    duree: "2 à 4 jours",
    participants: "10 – 80 pers.",
    description: "Été comme hiver, 12 années de vie passée sur ce plateau perché, pour redécouvrir l'essentiel. L'effort au service d'une randonnée pour prendre de la hauteur et côtoyer ses propres sommets.",
    image: "/images/sejour-vercors.webp",
    tags: ["Randonnée", "Nature", "Altitude"],
  },
  {
    title: "Ardèche",
    lieu: "Ardèche, France",
    duree: "2 à 4 jours",
    participants: "8 – 60 pers.",
    description: "Profonde et solennelle, le temps n'y a pas de prises. Ardèche des Gorges ou des collines, du nord où la cuisine est au beurre quand le sud chante sous les oliviers.",
    image: "/images/sejour-ardeche.webp",
    tags: ["Gorges", "Nature", "Authenticité"],
  },
];

const sejours_hiver = [
  {
    title: "Ski & Olympiades en Station",
    lieu: "Alpes françaises",
    duree: "2 à 4 jours",
    participants: "20 – 150 pers.",
    description: "Géant parallèle, biathlon laser, chasse aux trésors sur les pistes, soirée raclette en chalet privatisé. La montagne comme vous ne l'avez jamais vécue en équipe.",
    image: "/images/sejour-ski-olympiades.webp",
    tags: ["Ski", "Compétition", "Montagne"],
  },
  {
    title: "Igloo & Grand Nord",
    lieu: "Laponie / Dolomites",
    duree: "3 à 5 jours",
    participants: "10 – 60 pers.",
    description: "Construction d'igloos, randonnée en raquettes, chiens de traîneaux et bain nordique sous les aurores boréales. Une aventure polaire inoubliable.",
    image: "/images/sejour-igloo-grand-nord.webp",
    tags: ["Expédition", "Grand Nord", "Immersion"],
  },
  {
    title: "Spéléologie & Aventure Souterraine",
    lieu: "Vercors / Ardèche",
    duree: "1 à 2 jours",
    participants: "8 – 40 pers.",
    description: "Progression dans des grottes millénaires, rappels verticaux, découverte de concrétions féeriques. Un défi qui teste la confiance et la solidarité.",
    image: "/images/speleo.webp",
    tags: ["Spéléo", "Exploration", "Challenge"],
  },
];

export default function Sejours() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden" style={{ background: "#08080A" }}>
        <div className="absolute inset-0">
          <Image
            src="/images/4x4-5.webp"
            alt="Séjours sur-mesure"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,8,10,1) 0%, rgba(8,8,10,0.5) 50%, rgba(8,8,10,0.3) 100%)" }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pb-20 w-full">
          <p className="font-inter text-xs tracking-[0.4em] uppercase mb-6" style={{ color: "#C9A961" }}>
            Licence Agence de Voyage N°026-09-001
          </p>
          <h1 className="font-playfair font-bold text-white text-5xl md:text-7xl leading-tight mb-6">
            Séjours <span className="italic font-normal">Sur-Mesure</span>
          </h1>
          <p className="font-inter text-white/70 text-xl leading-relaxed max-w-2xl mb-10">
            Été comme hiver, en France ou à l'international — nous concevons des séjours incentive
            et team-building qui marquent durablement les esprits de vos équipes.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#ete" className="inline-flex items-center gap-2 px-6 py-3 font-inter text-sm font-medium transition-all duration-300 hover:opacity-80" style={{ background: "#C9A961", color: "#08080A" }}>
              <Sun size={16} /> Séjours Été
            </a>
            <a href="#hiver" className="inline-flex items-center gap-2 px-6 py-3 font-inter text-sm font-medium border border-white/30 text-white transition-all duration-300 hover:bg-white/10">
              <Snowflake size={16} /> Séjours Hiver
            </a>
          </div>
        </div>
      </section>

      {/* Été */}
      <section id="ete" className="py-20 lg:py-28" style={{ background: "#0D0C09", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(201,169,97,0.15)" }}>
              <Sun size={22} style={{ color: "#C9A961" }} />
            </div>
            <div>
              <p className="font-inter text-xs tracking-[0.3em] uppercase mb-1" style={{ color: "#C9A961" }}>Saison chaude</p>
              <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold">Séjours <em className="font-normal">Été</em></h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {sejours_ete.map((sejour) => (
              <div key={sejour.title} className="group relative overflow-hidden flex flex-col" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <Image
                    src={sejour.image}
                    alt={sejour.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
                  <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                    {sejour.tags.map((tag) => (
                      <span key={tag} className="font-inter text-xs px-2 py-1" style={{ background: "rgba(201,169,97,0.9)", color: "#08080A", fontWeight: 600 }}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-playfair text-xl font-bold text-white mb-2">{sejour.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="flex items-center gap-1.5 font-inter text-xs text-white/50">
                      <MapPin size={12} /> {sejour.lieu}
                    </span>
                    <span className="flex items-center gap-1.5 font-inter text-xs text-white/50">
                      <Calendar size={12} /> {sejour.duree}
                    </span>
                    <span className="flex items-center gap-1.5 font-inter text-xs text-white/50">
                      <Users size={12} /> {sejour.participants}
                    </span>
                  </div>
                  <p className="font-inter text-sm text-white/60 leading-relaxed flex-1">{sejour.description}</p>
                </div>

                <div className="h-px w-0 group-hover:w-full transition-all duration-500" style={{ background: "linear-gradient(90deg, #C9A961, transparent)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiver */}
      <section id="hiver" className="py-20 lg:py-28" style={{ background: "#08080A", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(201,169,97,0.15)" }}>
              <Snowflake size={22} style={{ color: "#C9A961" }} />
            </div>
            <div>
              <p className="font-inter text-xs tracking-[0.3em] uppercase mb-1" style={{ color: "#C9A961" }}>Saison froide</p>
              <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold">Séjours <em className="font-normal">Hiver</em></h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {sejours_hiver.map((sejour) => (
              <div key={sejour.title} className="group relative overflow-hidden flex flex-col" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <Image
                    src={sejour.image}
                    alt={sejour.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
                  <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                    {sejour.tags.map((tag) => (
                      <span key={tag} className="font-inter text-xs px-2 py-1" style={{ background: "rgba(201,169,97,0.9)", color: "#08080A", fontWeight: 600 }}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-playfair text-xl font-bold text-white mb-2">{sejour.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="flex items-center gap-1.5 font-inter text-xs text-white/50">
                      <MapPin size={12} /> {sejour.lieu}
                    </span>
                    <span className="flex items-center gap-1.5 font-inter text-xs text-white/50">
                      <Calendar size={12} /> {sejour.duree}
                    </span>
                    <span className="flex items-center gap-1.5 font-inter text-xs text-white/50">
                      <Users size={12} /> {sejour.participants}
                    </span>
                  </div>
                  <p className="font-inter text-sm text-white/60 leading-relaxed flex-1">{sejour.description}</p>
                </div>

                <div className="h-px w-0 group-hover:w-full transition-all duration-500" style={{ background: "linear-gradient(90deg, #C9A961, transparent)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Votre séjour idéal, on le construit ensemble"
        subtitle="Devis personnalisé sous 48h — Licence Agence de Voyage N°026-09-001"
        buttonLabel="Demander un devis"
        buttonHref="/contact"
      />

      <Footer />
    </>
  );
}
