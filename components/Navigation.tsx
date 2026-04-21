"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Expertises", href: "#expertises" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Approche", href: "#approche" },
  { label: "Contact", href: "#contact" },
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
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="Latitude Organisation - Retour à l'accueil"
            >
              <span
                className={`font-playfair text-xl font-bold tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-latitude-black" : "text-white"
                }`}
              >
                Latitude
              </span>
              <span
                className="font-inter text-xs font-light tracking-[0.3em] uppercase transition-colors duration-300"
                style={{ color: "#C9A961" }}
              >
                Organisation
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav
              role="navigation"
              aria-label="Navigation principale"
              className="hidden md:flex items-center gap-8"
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-inter text-sm font-medium tracking-wide transition-colors duration-300 hover:text-latitude-gold cursor-pointer ${
                    scrolled ? "text-latitude-gray-dark" : "text-white/90"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => handleNavClick("#contact")}
                className="font-inter text-sm font-medium px-6 py-2.5 border border-latitude-gold text-latitude-gold hover:bg-latitude-gold hover:text-white transition-all duration-300 tracking-wide cursor-pointer"
                aria-label="Demander un devis pour votre événement"
              >
                Demander un devis
              </button>
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
                  scrolled || mobileOpen ? "bg-latitude-black" : "bg-white"
                } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled || mobileOpen ? "bg-latitude-black" : "bg-white"
                } ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled || mobileOpen ? "bg-latitude-black" : "bg-white"
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
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.2 }}
                  onClick={() => handleNavClick(link.href)}
                  className="font-playfair text-4xl text-white hover:text-latitude-gold transition-colors duration-300 cursor-pointer"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 + 0.3 }}
                onClick={() => handleNavClick("#contact")}
                className="mt-4 font-inter text-sm font-medium px-8 py-3 bg-latitude-gold text-white hover:bg-latitude-gold/90 transition-all duration-300 tracking-wide cursor-pointer"
              >
                Demander un devis
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
