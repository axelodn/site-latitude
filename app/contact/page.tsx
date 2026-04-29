"use client";

import { Metadata } from "next";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageHero, Breadcrumb } from "@/components/shared";


import { Mail, Phone, MapPin } from "lucide-react";

const breadcrumbs = [
  { label: "Accueil", href: "/" },
  { label: "Contact", href: "/contact", current: true },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Log form data (integrate with backend/email service)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbs} />

      {/* Hero */}
      <PageHero
        eyebrow="NOUS CONTACTER"
        title="Parlons de votre prochain événement"
        subtitle="Nos équipes sont disponibles pour discuter de vos projets et vous proposer des solutions sur mesure."
        imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
      />

      {/* Contact Section */}
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-white mb-8">
                Nos coordonnées
              </h2>

              <div className="space-y-8">
                {[
                  {
                    icon: Phone,
                    label: "Téléphone",
                    value: "06 86 70 65 20",
                    href: "tel:+33686706520",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "jerome@latitude-organisation.com",
                    href: "mailto:jerome@latitude-organisation.com",
                  },
                  {
                    icon: MapPin,
                    label: "Adresse",
                    value: "Paris, France",
                    href: "#",
                  },
                ].map(({ icon: Icon, label, value, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 border border-latitude-gold rounded-full flex items-center justify-center group-hover:bg-latitude-gold/10 transition-all duration-300">
                      <Icon size={20} className="text-latitude-gold" />
                    </div>
                    <div>
                      <p className="font-inter text-sm text-white/60 mb-1">
                        {label}
                      </p>
                      <p className="font-inter text-lg text-white font-medium group-hover:text-latitude-gold transition-colors duration-300">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Hours */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="font-playfair text-lg font-bold text-white mb-4">
                  Horaires de bureau
                </h3>
                <div className="space-y-2">
                  <p className="font-inter text-white/70">
                    Lundi - Vendredi: 9h - 18h
                  </p>
                  <p className="font-inter text-white/70">
                    Samedi - Dimanche: Fermé
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-white mb-8">
                Envoyez-nous un message
              </h2>

              {submitted ? (
                <div className="bg-latitude-gold/10 border border-latitude-gold p-8 text-center">
                  <p className="font-playfair text-2xl font-bold text-latitude-gold mb-2">
                    Merci !
                  </p>
                  <p className="font-inter text-white/70">
                    Nous avons reçu votre message et reviendrons vers vous très
                    bientôt.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-inter text-sm font-medium text-white/80 mb-2"
                    >
                      Votre nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border border-white/10 text-white font-inter px-4 py-3 focus:outline-none focus:border-latitude-gold transition-colors duration-300 placeholder:text-white/20"
                      placeholder="Nom complet"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-inter text-sm font-medium text-white/80 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border border-white/10 text-white font-inter px-4 py-3 focus:outline-none focus:border-latitude-gold transition-colors duration-300 placeholder:text-white/20"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-inter text-sm font-medium text-white/80 mb-2"
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 text-white font-inter px-4 py-3 focus:outline-none focus:border-latitude-gold transition-colors duration-300 placeholder:text-white/20"
                      placeholder="+33 (0)X XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block font-inter text-sm font-medium text-white/80 mb-2"
                    >
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 text-white font-inter px-4 py-3 focus:outline-none focus:border-latitude-gold transition-colors duration-300 placeholder:text-white/20"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block font-inter text-sm font-medium text-white/80 mb-2"
                    >
                      Sujet de votre demande
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border border-white/10 text-white font-inter px-4 py-3 focus:outline-none focus:border-latitude-gold transition-colors duration-300"
                    >
                      <option value="">Choisir un sujet</option>
                      <option value="seminaire">Séminaire</option>
                      <option value="congres">Congrès</option>
                      <option value="soiree">Soirée événementielle</option>
                      <option value="team-building">Team-building</option>
                      <option value="coaching">Coaching & Management</option>
                      <option value="video">Production vidéo</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-inter text-sm font-medium text-white/80 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 text-white font-inter px-4 py-3 focus:outline-none focus:border-latitude-gold transition-colors duration-300 placeholder:text-white/20 resize-none"
                      placeholder="Décrivez votre projet..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full font-inter text-sm font-medium px-8 py-4 text-white transition-all duration-400 tracking-widest uppercase cursor-pointer"
                    style={{ background: "#C9A961" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#b8943f")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "#C9A961")
                    }
                  >
                    Envoyer mon demande
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
