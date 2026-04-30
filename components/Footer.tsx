"use client";

import Link from "next/link";
import { Logo } from "./Logo";

const expertiseLinks = [
  { label: "Séminaires & Incentives", href: "/expertises/seminaires-incentives" },
  { label: "Soirées Événementielles", href: "/expertises/soirees-evenementielles" },
  { label: "Team-Building", href: "/expertises/team-building" },
];

const quickLinks = [
  { label: "Accueil", href: "/" },
  { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
  { label: "Blog", href: "/blog" },
  { label: "Contact & Devis", href: "/contact" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "CGV", href: "/cgv" },
];

export default function Footer() {
  return (
    <footer className="bg-latitude-black border-t border-white/5" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Logo height={52} />
            </div>
            <p className="font-inter text-sm text-white/50 leading-relaxed">
              Agence événementielle B2B française spécialisée dans
              l&apos;organisation de séminaires, soirées et team-building. 20 ans
              d&apos;expertise au service de vos événements d&apos;entreprise.
            </p>
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
