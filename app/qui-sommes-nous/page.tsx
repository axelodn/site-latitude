import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageHero, Breadcrumb, CTABand, SectionHeader } from "@/components/shared";
import {
  team,
  valeurs,
  timeline,
  certifications,
} from "@/lib/content";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Qui sommes-nous | Latitude Organisation",
  description:
    "Découvrez l'histoire de Latitude Organisation, agence événementielle depuis 20 ans. Experts en séminaires, soirées et team-building en France et à l'international.",
  keywords: [
    "Latitude Organisation",
    "agence événementielle histoire",
    "équipe événementielle professionnelle",
    "20 ans expertise événementielle",
  ],
  alternates: {
    canonical: "https://www.latitude-organisation.com/qui-sommes-nous",
  },
  openGraph: {
    title: "Qui sommes-nous | Latitude Organisation",
    description: "20 ans d'expertise en organisation d'événements professionnels. Découvrez notre équipe et nos valeurs.",
    url: "https://www.latitude-organisation.com/qui-sommes-nous",
    type: "website",
  },
};

export default function QuiSommesNous() {
  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Qui sommes-nous", href: "/qui-sommes-nous", current: true },
  ];

  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbs} />

      {/* Hero */}
      <PageHero
        eyebrow="NOTRE HISTOIRE"
        title="Une agence événementielle avec une vraie histoire"
        subtitle="Depuis 2004, nous organisons des événements qui marquent les esprits et renforcent les liens au sein des entreprises."
        imageSrc="/images/so-british-staff.webp"
      />

      {/* About Section */}
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <SectionHeader
                title="L'ADN de Latitude Organisation"
                subtitle="Une approche personnalisée, un interlocuteur dédié, des solutions sur mesure."
                centered={false}
              />

              <p className="font-inter text-white/70 text-lg leading-relaxed mt-8 mb-6">
                Fondée en 2004 par des passionnés de l&apos;événementiel, Latitude Organisation
                est née de la conviction que chaque événement doit être unique et mémorable.
                Nous avons commencé modestement, avec une petite équipe motivée et une grande
                ambition.
              </p>

              <p className="font-inter text-white/70 text-lg leading-relaxed mb-6">
                Aujourd&apos;hui, nous sommes une équipe de 50+ experts, forte d&apos;une expérience de plus de
                20 ans, capable de concevoir et de piloter tous les types d&apos;événements professionnels,
                du séminaire d&apos;équipe de 30 personnes à la soirée de gala ou au team-building d&apos;envergure.
              </p>

              <p className="font-inter text-white/70 text-lg leading-relaxed mb-10">
                Nos clients? Des PME aux grandes entreprises du CAC 40, qui nous font confiance pour
                transformer leurs enjeux en événements d&apos;exception.
              </p>

              {/* Phrase fétiche */}
              <blockquote
                className="border-l-4 pl-6 py-2"
                style={{ borderColor: "#C9A961" }}
              >
                <p className="font-playfair italic text-white text-xl leading-relaxed">
                  &laquo;&nbsp;La bienveillance fait partie de notre ADN.&nbsp;&raquo;
                </p>
                <footer className="mt-3 font-inter text-xs tracking-[0.25em] uppercase" style={{ color: "#C9A961" }}>
                  Jérôme Aviotte, Fondateur
                </footer>
              </blockquote>
            </div>

            {/* Right: Stats */}
            <div className="space-y-8">
              {[
                { number: "20+", label: "Années d'expérience" },
                { number: "500+", label: "Événements organisés" },
                { number: "50+", label: "Experts dans l'équipe" },
                { number: "98%", label: "Taux de satisfaction client" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="border-l-2 border-latitude-gold pl-6"
                >
                  <p
                    className="font-playfair text-5xl font-bold text-latitude-gold mb-2"
                  >
                    {stat.number}
                  </p>
                  <p className="font-inter text-white/70 text-lg">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="NOTRE ÉVOLUTION"
            title="Une croissance constante depuis 2004"
            centered={true}
          />

          <div className="mt-16 space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className="flex gap-8 items-start"
              >
                <div className="flex-shrink-0 w-24">
                  <p className="font-playfair text-2xl font-bold text-latitude-gold">
                    {item.year}
                  </p>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-playfair text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="font-inter text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="NOTRE ÉQUIPE"
            title="Experts passionnés par l'événementiel"
            subtitle="Une équipe diversifiée, motivée, et dévouée à vos succès"
            centered={true}
          />

          <div className="flex justify-center mt-16">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white/5 border border-white/10 hover:border-latitude-gold/50 transition-all duration-300 w-full max-w-sm overflow-hidden"
              >
                {member.image && (
                  <div className="relative h-[480px] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      style={{ objectPosition: "50% 15%" }}
                    />
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-playfair text-2xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="font-inter text-sm text-latitude-gold mb-4 tracking-widest uppercase">
                    {member.role}
                  </p>
                  <p className="font-inter text-white/70 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="NOS VALEURS"
            title="Ce qui nous guide au quotidien"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
            {valeurs.map((valeur) => (
              <div
                key={valeur.titre}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full border-2 border-latitude-gold flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{valeur.icon}</span>
                </div>
                <h3 className="font-playfair text-lg font-bold text-white mb-3">
                  {valeur.titre}
                </h3>
                <p className="font-inter text-white/70 text-sm leading-relaxed">
                  {valeur.description}
                </p>
              </div>
            ))}
          </div>

          {/* Engagement patrimonial */}
          <div
            className="mt-20 border border-white/10 p-10 lg:p-14 relative overflow-hidden"
            style={{ background: "rgba(201,169,97,0.04)" }}
          >
            {/* Croix pattée des Templiers */}
            <div className="absolute top-8 right-10 select-none pointer-events-none" aria-hidden>
              <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <g fill="#d92828">
                  <path d="M30,144.097 C96.9686,223.907,195.815,270,300,270 C404.185,270,503.031,223.907,570,144.097 V455.903 C503.031,376.093,404.185,330,300,330 C195.815,330,96.9686,376.093,30,455.903Z" />
                  <path d="M455.903,30 C376.093,96.9686,330,195.815,330,300 C330,404.185,376.093,503.031,455.903,570 H144.097 C223.907,503.031,270,404.185,270,300 C270,195.815,223.907,96.9686,144.097,30Z" />
                </g>
              </svg>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <span
                  className="inline-block font-inter text-xs font-medium tracking-[0.3em] uppercase px-4 py-2 border mb-6"
                  style={{ borderColor: "#C9A961", color: "#C9A961" }}
                >
                  Engagement patrimonial
                </span>
                <h3 className="font-playfair text-3xl md:text-4xl text-white font-normal leading-tight mb-6">
                  Gardiens d&apos;un héritage{" "}
                  <span className="font-bold">vieux de huit siècles</span>
                </h3>
                <p className="font-inter text-white/70 text-lg leading-relaxed">
                  Au-delà de l&apos;événementiel, Latitude Organisation s&apos;engage dans la préservation
                  du patrimoine historique français. Nous participons activement à la restauration
                  de deux sites du <strong className="text-white/90">XII<sup>e</sup> siècle</strong>{" "}ayant
                  appartenu aux Chevaliers Templiers — témoins d&apos;une histoire millénaire que nous
                  nous devons de transmettre aux générations futures.
                </p>
              </div>
              <div className="space-y-6">
                <div className="relative overflow-hidden" style={{ height: "280px" }}>
                  <Image
                    src="/images/commanderie-templiers-restauration-patrimoine.webp"
                    alt="Commanderie des Chevaliers Templiers du XIIe siècle restaurée par Latitude Organisation"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ filter: "brightness(0.85)" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }}
                  />
                  <span
                    className="absolute bottom-4 left-4 font-inter text-xs font-medium tracking-[0.25em] uppercase text-white/80"
                    style={{ textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}
                  >
                    Site du XII<sup>e</sup> siècle
                  </span>
                </div>
                <div className="border-l-2 pl-6" style={{ borderColor: "#C9A961" }}>
                  <p className="font-inter text-white/60 text-sm leading-relaxed">
                    Cet engagement reflète nos valeurs profondes&nbsp;: le respect du temps long,
                    le soin du détail et la conviction que les lieux ont une âme. Les mêmes
                    valeurs que nous mettons au service de chaque événement que nous concevons.
                  </p>
                </div>
                <div className="border-l-2 pl-6" style={{ borderColor: "rgba(201,169,97,0.3)" }}>
                  <p className="font-inter text-white/60 text-sm leading-relaxed">
                    Parce que bâtir, restaurer et rassembler sont des actes qui participent
                    d&apos;un même idéal&nbsp;: laisser derrière soi ce qui nous semble être le plus beau.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="CERTIFICATIONS & AFFILIATIONS"
            title="Certifications qui valident notre expertise"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="border border-white/10 p-8 hover:border-latitude-gold/50 transition-all duration-300"
              >
                <h3 className="font-playfair text-lg font-bold text-white mb-2">
                  {cert.name}
                </h3>
                <p className="font-inter text-white/70 text-sm">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        title="Parlons de votre prochain événement"
        subtitle="Notre équipe est prête à concevoir une expérience sur mesure"
        buttonLabel="Demander un devis"
        buttonHref="/contact"
      />

      <Footer />
    </>
  );
}
