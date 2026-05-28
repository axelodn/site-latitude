"use client";

import { useForm, ValidationError } from "@formspree/react";

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

export default function ContactForm() {
  const [state, handleSubmit] = useForm("maqkazve");

  return (
    <div className="grid lg:grid-cols-2 gap-16">
      {/* Coordonnées */}
      <div>
        <h2 className="font-playfair text-3xl font-bold text-white mb-8">Nos coordonnées</h2>
        <div className="space-y-8">
          {[
            { icon: PhoneIcon, label: "Téléphone", value: "06 86 70 65 20", href: "tel:+33686706520" },
            { icon: MailIcon, label: "Email", value: "jerome@latitude-organisation.com", href: "mailto:jerome@latitude-organisation.com" },
          ].map(({ icon: Icon, label, value, href }, i) => (
            <a key={i} href={href} className="flex gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 border border-latitude-gold rounded-full flex items-center justify-center group-hover:bg-latitude-gold/10 transition-all duration-300 text-latitude-gold">
                <Icon />
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

        {state.succeeded ? (
          <div className="bg-latitude-gold/10 border border-latitude-gold p-8 text-center">
            <p className="font-playfair text-2xl font-bold text-latitude-gold mb-2">Merci !</p>
            <p className="font-inter text-white/70">Nous avons reçu votre message et reviendrons vers vous très bientôt.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-inter text-sm font-medium text-white/80 mb-2">Votre nom</label>
              <input type="text" id="name" name="name" required
                className="w-full bg-white/5 border border-white/10 text-white font-inter px-4 py-3 focus:outline-none focus:border-latitude-gold transition-colors duration-300 placeholder:text-white/20"
                placeholder="Nom complet" />
            </div>

            <div>
              <label htmlFor="email" className="block font-inter text-sm font-medium text-white/80 mb-2">Email</label>
              <input type="email" id="email" name="email" required
                className="w-full bg-white/5 border border-white/10 text-white font-inter px-4 py-3 focus:outline-none focus:border-latitude-gold transition-colors duration-300 placeholder:text-white/20"
                placeholder="votre@email.com" />
              <ValidationError field="email" errors={state.errors} className="font-inter text-red-400 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="phone" className="block font-inter text-sm font-medium text-white/80 mb-2">Téléphone</label>
              <input type="tel" id="phone" name="phone"
                className="w-full bg-white/5 border border-white/10 text-white font-inter px-4 py-3 focus:outline-none focus:border-latitude-gold transition-colors duration-300 placeholder:text-white/20"
                placeholder="+33 (0)X XX XX XX XX" />
            </div>

            <div>
              <label htmlFor="company" className="block font-inter text-sm font-medium text-white/80 mb-2">Entreprise</label>
              <input type="text" id="company" name="company"
                className="w-full bg-white/5 border border-white/10 text-white font-inter px-4 py-3 focus:outline-none focus:border-latitude-gold transition-colors duration-300 placeholder:text-white/20"
                placeholder="Nom de votre entreprise" />
            </div>

            <div>
              <label htmlFor="subject" className="block font-inter text-sm font-medium text-white/80 mb-2">Sujet de votre demande</label>
              <select id="subject" name="subject" required
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
              <textarea id="message" name="message" required rows={6}
                className="w-full bg-white/5 border border-white/10 text-white font-inter px-4 py-3 focus:outline-none focus:border-latitude-gold transition-colors duration-300 placeholder:text-white/20 resize-none"
                placeholder="Décrivez votre projet..." />
              <ValidationError field="message" errors={state.errors} className="font-inter text-red-400 text-sm mt-1" />
            </div>

            <ValidationError errors={state.errors} className="font-inter text-red-400 text-sm text-center" />

            <button type="submit" disabled={state.submitting}
              className="w-full font-inter text-sm font-medium px-8 py-4 text-white transition-all duration-300 tracking-widest uppercase cursor-pointer hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: "#C9A961" }}>
              {state.submitting ? "Envoi en cours..." : "Envoyer ma demande"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
