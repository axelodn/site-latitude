"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", subject: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-16">
      {/* Coordonnées */}
      <div>
        <h2 className="font-playfair text-3xl font-bold text-white mb-8">Nos coordonnées</h2>
        <div className="space-y-8">
          {[
            { icon: Phone, label: "Téléphone", value: "06 86 70 65 20", href: "tel:+33686706520" },
            { icon: Mail, label: "Email", value: "jerome@latitude-organisation.com", href: "mailto:jerome@latitude-organisation.com" },
          ].map(({ icon: Icon, label, value, href }, i) => (
            <a key={i} href={href} className="flex gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 border border-latitude-gold rounded-full flex items-center justify-center group-hover:bg-latitude-gold/10 transition-all duration-300">
                <Icon size={20} className="text-latitude-gold" />
              </div>
              <div>
                <p className="font-inter text-sm text-white/60 mb-1">{label}</p>
                <p className="font-inter text-lg text-white font-medium group-hover:text-latitude-gold transition-colors duration-300">{value}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="font-playfair text-lg font-bold text-white mb-4">Horaires de bureau</h3>
          <p className="font-inter text-white/70">Lundi - Vendredi: 9h - 18h</p>
          <p className="font-inter text-white/70">Samedi - Dimanche: Fermé</p>
        </div>
      </div>

      {/* Formulaire */}
      <div>
        <h2 className="font-playfair text-3xl font-bold text-white mb-8">Envoyez-nous un message</h2>
        {submitted ? (
          <div className="bg-latitude-gold/10 border border-latitude-gold p-8 text-center">
            <p className="font-playfair text-2xl font-bold text-latitude-gold mb-2">Merci !</p>
            <p className="font-inter text-white/70">Nous avons reçu votre message et reviendrons vers vous très bientôt.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { id: "name", label: "Votre nom", type: "text", placeholder: "Nom complet", required: true },
              { id: "email", label: "Email", type: "email", placeholder: "votre@email.com", required: true },
              { id: "phone", label: "Téléphone", type: "tel", placeholder: "+33 (0)X XX XX XX XX", required: false },
              { id: "company", label: "Entreprise", type: "text", placeholder: "Nom de votre entreprise", required: false },
            ].map(({ id, label, type, placeholder, required }) => (
              <div key={id}>
                <label htmlFor={id} className="block font-inter text-sm font-medium text-white/80 mb-2">{label}</label>
                <input type={type} id={id} name={id} value={formData[id as keyof typeof formData]} onChange={handleInputChange} required={required}
                  className="w-full bg-white/5 border border-white/10 text-white font-inter px-4 py-3 focus:outline-none focus:border-latitude-gold transition-colors duration-300 placeholder:text-white/20"
                  placeholder={placeholder} />
              </div>
            ))}
            <div>
              <label htmlFor="subject" className="block font-inter text-sm font-medium text-white/80 mb-2">Sujet de votre demande</label>
              <select id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required
                className="w-full bg-white/5 border border-white/10 text-white font-inter px-4 py-3 focus:outline-none focus:border-latitude-gold transition-colors duration-300">
                <option value="">Choisir un sujet</option>
                <option value="seminaire">Séminaire</option>
                <option value="soiree">Soirée événementielle</option>
                <option value="team-building">Team-building</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block font-inter text-sm font-medium text-white/80 mb-2">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6}
                className="w-full bg-white/5 border border-white/10 text-white font-inter px-4 py-3 focus:outline-none focus:border-latitude-gold transition-colors duration-300 placeholder:text-white/20 resize-none"
                placeholder="Décrivez votre projet..." />
            </div>
            <button type="submit"
              className="w-full font-inter text-sm font-medium px-8 py-4 text-white transition-all duration-300 tracking-widest uppercase cursor-pointer hover:opacity-80"
              style={{ background: "#C9A961" }}>
              Envoyer ma demande
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
