"use client";

import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageHero, Breadcrumb } from "@/components/shared";

export const metadata: Metadata = {
  title: "Mentions légales | Latitude Organisation",
  description: "Mentions légales de Latitude Organisation",
  robots: {
    index: true,
    follow: true,
  },
};

const breadcrumbs = [
  { label: "Accueil", href: "/" },
  { label: "Mentions légales", href: "/mentions-legales", current: true },
];

export default function MentionsLegales() {
  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbs} />

      <PageHero
        title="Mentions légales"
        subtitle="Informations légales et administratives"
      />

      <article className="py-20 lg:py-32 bg-latitude-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-12 font-inter text-white/80 leading-relaxed">
            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                1. Éditeur du site
              </h2>
              <p>
                <strong>Latitude Organisation</strong>
                <br />
                SARL au capital variable
                <br />
                Siège social: Paris, France
                <br />
                Numéro de SIRET: [À compléter]
                <br />
                Licence Agence de Voyage N°026-09-001
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                2. Directeur de la publication
              </h2>
              <p>
                Le directeur de la publication est [Nom du responsable].
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                3. Hébergement
              </h2>
              <p>
                Le site est hébergé par [Nom de l&apos;hébergeur]
                <br />
                Adresse: [Adresse de l&apos;hébergeur]
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                4. Responsabilité
              </h2>
              <p>
                Latitude Organisation s&apos;efforce de fournir des informations exactes et
                à jour sur ce site. Cependant, nous ne garantissons pas l&apos;exactitude,
                l&apos;exhaustivité ou l&apos;actualité de ces informations. Nous ne serons
                pas responsables des erreurs ou omissions éventuelles.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                5. Propriété intellectuelle
              </h2>
              <p>
                Tous les contenus du site (textes, images, logos, vidéos, etc.) sont la
                propriété exclusive de Latitude Organisation ou sont utilisés avec
                autorisation. Toute reproduction, distribution ou modification sans
                permission écrite est strictement interdite.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                6. Liens externes
              </h2>
              <p>
                Latitude Organisation ne contrôle pas les contenus des sites externes
                auxquels renvoient les liens présents sur son site. En cliquant sur ces
                liens, vous acceptez cette responsabilité.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                7. Données personnelles
              </h2>
              <p>
                Pour plus d&apos;informations sur le traitement de vos données personnelles,
                veuillez consulter notre <a href="/politique-confidentialite" className="text-latitude-gold hover:underline">Politique de Confidentialité</a>.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                8. Limitation de responsabilité
              </h2>
              <p>
                Latitude Organisation ne sera pas responsable des dommages directs ou
                indirects résultant de l&apos;utilisation ou de l&apos;impossibilité
                d&apos;utiliser ce site ou ses contenus.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                9. Droit applicable
              </h2>
              <p>
                Ces mentions légales sont régies par la loi française. Tout différend sera
                soumis aux juridictions compétentes.
              </p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
