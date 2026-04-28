"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Logo } from "./Logo";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
  { label: "Expertises", href: "/expertises" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    // If it's a hash anchor on the same page
    if (href.startsWith("#")) {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Otherwise, Link component will handle navigation
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/95 backdrop-blur-sm shadow-sm shadow-black/20"
            : "bg-black/30 backdrop-blur-sm"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group"
              aria-label="Latitude Organisation - Retour à l'accueil"
            >
              <Logo height={64} />
            </Link>

            {/* Desktop Nav */}
            <nav
              role="navigation"
              aria-label="Navigation principale"
              className="hidden md:flex items-center gap-8"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-inter text-sm font-medium tracking-wide transition-colors duration-300 hover:text-latitude-gold ${
                    scrolled ? "text-white/90" : "text-white/90"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                className="font-inter text-sm font-medium px-6 py-2.5 border border-latitude-gold text-latitude-gold hover:bg-latitude-gold hover:text-white transition-all duration-300 tracking-wide"
                aria-label="Demander un devis pour votre événement"
              >
                Demander un devis
              </Link>
            </div>

            {/* Burger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 z-60"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled || mobileOpen ? "bg-white" : "bg-white"
                } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled || mobileOpen ? "bg-white" : "bg-white"
                } ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled || mobileOpen ? "bg-white" : "bg-white"
                } ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Fullscreen */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Menu de navigation mobile"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-latitude-black flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="font-playfair text-4xl text-white hover:text-latitude-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 + 0.3 }}
                className="mt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-block font-inter text-sm font-medium px-8 py-3 bg-latitude-gold text-white hover:bg-latitude-gold/90 transition-all duration-300 tracking-wide"
                >
                  Demander un devis
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
