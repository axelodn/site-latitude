"use client";

import Link from "next/link";

const expertiseLinks = [
  { label: "Séminaires & Incentives", href: "#expertises" },
  { label: "Congrès & Forums", href: "#expertises" },
  { label: "Soirées Événementielles", href: "#expertises" },
  { label: "Team-Building", href: "#expertises" },
  { label: "Management & Coaching", href: "#expertises" },
  { label: "Production Vidéo", href: "#expertises" },
];

const quickLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Notre approche", href: "#approche" },
  { label: "Contact & Devis", href: "#contact" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "CGV", href: "/cgv" },
];

const socialLinks = [
  {
    label: "LinkedIn de Latitude Organisation",
    href: "https://www.linkedin.com/company/latitude-organisation",
    name: "in",
  },
  {
    label: "Instagram de Latitude Organisation",
    href: "https://www.instagram.com/latitude_organisation",
    name: "ig",
  },
  {
    label: "YouTube de Latitude Organisation",
    href: "https://www.youtube.com/@latitudeorganisation",
    name: "yt",
  },
];

export default function Footer() {
  return (
    <footer className="bg-latitude-black border-t border-white/5" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-playfair text-2xl font-bold text-white tracking-tight">
                Latitude
              </span>
              <br />
              <span
                className="font-inter text-xs font-light tracking-[0.3em] uppercase"
                style={{ color: "#C9A961" }}
              >
                Organisation
              </span>
            </div>
            <p className="font-inter text-sm text-white/50 leading-relaxed mb-6">
              Agence événementielle B2B française spécialisée dans
              l&apos;organisation de séminaires, congrès et soirées. 20 ans
              d&apos;expertise au service de vos événements d&apos;entreprise.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, name }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/40 hover:text-latitude-gold hover:border-latitude-gold/50 transition-all duration-300"
                >
                  <span className="font-inter text-[10px] font-bold uppercase" aria-hidden="true">{name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Expertises */}
          <div>
            <h3 className="font-inter text-xs font-medium tracking-[0.3em] uppercase text-white/50 mb-5">
              Nos Expertises
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {expertiseLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-inter text-sm text-white/50 hover:text-latitude-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-inter text-xs font-medium tracking-[0.3em] uppercase text-white/50 mb-5">
              Liens Rapides
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-inter text-sm text-white/50 hover:text-latitude-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-inter text-xs font-medium tracking-[0.3em] uppercase text-white/50 mb-5">
              Restez informé
            </h3>
            <p className="font-inter text-sm text-white/50 mb-4 leading-relaxed">
              Inspirations événementielles, tendances et actualités du secteur,
              directement dans votre boîte mail.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
              aria-label="S'inscrire à la newsletter de Latitude Organisation"
            >
              <input
                type="email"
                placeholder="Votre email"
                aria-label="Votre adresse email pour la newsletter"
                required
                className="flex-1 bg-white/5 border border-white/10 text-white font-inter text-sm px-3 py-2.5 focus:outline-none focus:border-latitude-gold transition-colors duration-300 placeholder:text-white/20 min-w-0"
              />
              <button
                type="submit"
                className="px-4 py-2.5 font-inter text-xs text-white tracking-wider cursor-pointer transition-all duration-300 flex-shrink-0"
                style={{ background: "#C9A961" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#b8943f")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#C9A961")
                }
                aria-label="S'abonner à la newsletter"
              >
                OK
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-inter text-xs text-white/30 text-center sm:text-left">
            © <time dateTime="2026">2026</time> Latitude Organisation — Tous
            droits réservés · Licence Agence de Voyage N°026-09-001
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/sitemap.xml"
              className="font-inter text-xs text-white/30 hover:text-white/60 transition-colors duration-300"
              aria-label="Consulter le plan du site"
            >
              Plan du site
            </a>
            <a
              href="/mentions-legales"
              className="font-inter text-xs text-white/30 hover:text-white/60 transition-colors duration-300"
            >
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
