import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CTABand } from "@/components/shared";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Nos Créations | Latitude Organisation",
  description:
    "Découvrez les concepts originaux imaginés par Latitude Organisation : Murder Party Galerie des Lumières, Archéo Concept, So British, À la Ferme.",
  alternates: {
    canonical: "https://www.latitude-organisation.com/nouveautes",
  },
  openGraph: {
    title: "Nos Créations | Latitude Organisation",
    description: "Découvrez les concepts originaux imaginés par Latitude Organisation : Murder Party, Archéo Concept, So British.",
    url: "https://www.latitude-organisation.com/nouveautes",
    type: "website",
  },
};

const concepts = [
  {
    id: "murder-galerie",
    year: "2026",
    badge: "Nouveau",
    title: "Murder Party",
    subtitle: "La Galerie des Lumières — Scénario 2026",
    description:
      "Plongez vos équipes dans un scénario inédit signé Latitude Organisation : une nuit de vernissage tourne au drame dans une galerie d'art contemporain. Témoins, suspects, enquêteurs — chaque collaborateur tient un rôle. Comédiens professionnels, décors immersifs et faux indices distillés tout au long de la soirée.",
    highlights: ["Comédiens professionnels", "Scénario exclusif 2026", "10 à 100 participants", "Indoor"],
    mainImage: "/images/murder-presentation-atelier-2.webp",
    secondaryImages: [
      "/images/murder-sergio.webp",
      "/images/murder-party-2.webp",
      "/images/murder-party.webp",
      "/images/murder-party-3.pdf",
    ],
    gallery: [],
    dark: true,
  },
  {
    id: "archeo",
    year: "2025",
    badge: "Création 2025",
    title: "Archéo Concept",
    subtitle: "Fouilles, énigmes & esprit de découverte",
    description:
      "Une création originale Latitude Organisation qui transforme vos équipes en archéologues en herbe. Sur un site authentique du patrimoine français, vos collaborateurs fouillent, analysent et reconstituent des vestiges pour percer un mystère historique. Un team-building intellectuel, ludique et spectaculaire qui mêle culture, cohésion et dépassement de soi en plein air.",
    highlights: ["Sites patrimoniaux authentiques", "Création Latitude", "20 à 200 participants", "Outdoor"],
    mainImage: "/images/archeo-rochefort.webp",
    secondaryImages: ["/images/archeo-rochefort-2.webp", "/images/archeo-bilboquet.webp"],
    gallery: [
      "/images/archeo-rochefort-3.webp",
      "/images/archeo-rochefort-4.webp",
      "/images/archeo-rochefort-5.webp",
      "/images/archeo-rochefort-6.webp",
      "/images/archeo-tir-arc.webp",
      "/images/archeo-jerome.webp",
      "/images/archeo-famille-2.webp",
      "/images/MEDIEVAL FANTASY 2.HEIC.jpg"
    ],
    dark: false,
  },
  {
    id: "so-british",
    year: "2025",
    badge: "Concept 2025",
    title: "So British",
    subtitle: "L'élégance anglaise revisitée",
    description:
      "Un concept signé Latitude Organisation qui plonge vos équipes dans l'univers raffiné et décalé de l'Angleterre. Croquet sur pelouse, tea time animé, quiz Beatles, course de plateau de thé, défis fléchettes… Un parcours en stations où l'humour britannique et la compétition bienveillante font bon ménage.",
    highlights: ["Format demi-journée", "Création originale", "15 à 150 participants", "Outdoor"],
    mainImage: "/images/so-british-croquet.webp",
    secondaryImages: ["/images/so-british-the.webp", "/images/so-british-flechettes.webp"],
    gallery: [],
    dark: true,
  },
  {
    id: "ferme",
    year: "2023",
    badge: "Concept 2023",
    title: "À la Ferme",
    subtitle: "Retour aux sources, cohésion garantie",
    description:
      "Latitude Organisation réinvente le team-building rural avec ce concept décalé et joyeux. Brouette race, concours de labour, atelier fabrication de beurre, quiz animaux de la ferme, olympiades champêtres : vos équipes redécouvrent le plaisir simple du travail en commun dans un cadre verdoyant et dépaysant.",
    highlights: ["Accessible à tous", "Format convivial", "20 à 250 participants", "Outdoor"],
    mainImage: "/images/jeux-ferme.webp",
    secondaryImages: ["/images/jeux-ferme-2.webp", "/images/jeux-ferme-brouette.webp"],
    gallery: [
      "/images/famille-animation.webp",
      "/images/famille-animation-2.webp",
    ],
    dark: false,
  },
];

export default function Nouveautes() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section
        className="relative pt-40 pb-24 overflow-hidden"
        style={{ background: "#08080A" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/murder-presentation-atelier-2.webp"
            alt="Nos créations"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(8,8,10,0.6) 0%, rgba(8,8,10,0.95) 100%)" }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles size={16} style={{ color: "#C9A961" }} />
            <p className="font-inter text-xs tracking-[0.4em] uppercase" style={{ color: "#C9A961" }}>
              Exclusivités Latitude Organisation
            </p>
          </div>
          <h1 className="font-playfair font-bold text-white text-5xl md:text-7xl leading-tight mb-6">
            Nos <span className="italic font-normal">Créations</span>
          </h1>
          <p className="font-inter text-white/60 text-xl leading-relaxed max-w-2xl">
            Des concepts originaux imaginés et développés en interne par notre équipe.
            Des expériences que vous ne trouverez nulle part ailleurs.
          </p>
        </div>
      </section>

      {/* Concepts */}
      {concepts.map((concept, index) => (
        <div key={concept.id}>
          <section
            className="relative overflow-hidden"
            style={{ background: concept.dark ? "#08080A" : "#0D0C09", borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${index % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>

                {/* Images bloc */}
                <div className={`relative ${index % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                  {/* Main image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={concept.mainImage}
                      alt={concept.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.2) 0%, transparent 60%)" }} />
                  </div>

                  {/* 2 secondary images */}
                  {concept.secondaryImages.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 mt-3">
                      {concept.secondaryImages.map((img, i) => (
                        <div key={i} className="relative aspect-video overflow-hidden">
                          <Image
                            src={img}
                            alt={`${concept.title} ${i + 2}`}
                            fill
                            className="object-cover"
                            sizes="25vw"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Year badge */}
                  <div
                    className="absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center font-playfair font-bold text-sm z-10"
                    style={{ background: "#C9A961", color: "#08080A" }}
                  >
                    {concept.year}
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                  <span
                    className="inline-block font-inter text-xs font-medium tracking-[0.3em] uppercase px-4 py-2 border mb-6"
                    style={{ borderColor: "#C9A961", color: "#C9A961" }}
                  >
                    {concept.badge}
                  </span>

                  <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold leading-tight mb-2">
                    {concept.title}
                  </h2>
                  <p className="font-playfair italic text-white/50 text-xl mb-8">
                    {concept.subtitle}
                  </p>

                  <p className="font-inter text-white/70 text-lg leading-relaxed mb-8">
                    {concept.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-3 mb-10">
                    {concept.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#C9A961" }} />
                        <span className="font-inter text-sm text-white/60">{h}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 font-inter text-sm font-medium px-8 py-4 border transition-all duration-300 group hover:bg-latitude-gold hover:border-latitude-gold hover:text-black"
                    style={{ borderColor: "#C9A961", color: "#C9A961" }}
                  >
                    Demander un devis pour ce concept
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </div>
      ))}

      <CTABand
        title="Un concept vous inspire ?"
        subtitle="Nos équipes adaptent chaque création à votre culture d'entreprise et vos objectifs."
        buttonLabel="Parlons de votre projet"
        buttonHref="/contact"
      />

      <Footer />
    </>
  );
}
