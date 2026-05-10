import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageHero, Breadcrumb } from "@/components/shared";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Latitude Organisation",
  description:
    "Politique de confidentialité de Latitude Organisation - Protection de vos données personnelles",
  alternates: {
    canonical: "https://www.latitude-organisation.com/politique-confidentialite",
  },
  robots: { index: false, follow: true },
};

const breadcrumbs = [
  { label: "Accueil", href: "/" },
  {
    label: "Politique de confidentialité",
    href: "/politique-confidentialite",
    current: true,
  },
];

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbs} />

      <PageHero
        title="Politique de confidentialité"
        subtitle="Comprendre comment nous protégeons vos données personnelles"
      />

      <article className="py-20 lg:py-32 bg-latitude-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-12 font-inter text-white/80 leading-relaxed">
            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                1. Introduction
              </h2>
              <p>
                Latitude Organisation est attachée à la protection de vos données
                personnelles. Cette politique explique comment nous collectons, utilisons,
                partageons et protégeons vos données conformément au RGPD.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                2. Données collectées
              </h2>
              <p className="mb-4">
                Nous collectons les données personnelles suivantes:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Nom, prénom, email, téléphone</li>
                <li>Entreprise, fonction professionnelle</li>
                <li>Informations de contact et de facturation</li>
                <li>Données relatives à votre projet événementiel</li>
                <li>Cookies et données de navigation</li>
              </ul>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                3. Base légale du traitement
              </h2>
              <p>
                Nous traitons vos données sur la base de votre consentement ou de l&apos;exécution
                d&apos;un contrat avec vous. Vous pouvez à tout moment retirer votre consentement.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                4. Utilisation de vos données
              </h2>
              <p className="mb-4">
                Vos données sont utilisées pour:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Gérer votre demande et nos relations commerciales</li>
                <li>Vous envoyer des communications marketing (avec consentement)</li>
                <li>Améliorer nos services et notre site</li>
                <li>Respecter les obligations légales</li>
              </ul>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                5. Partage de données
              </h2>
              <p>
                Nous ne partageons vos données qu&apos;avec:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Nos prestataires de services (hosting, email)</li>
                <li>Les autorités si la loi l&apos;exige</li>
              </ul>
              <p className="mt-4">
                Nous ne vendons jamais vos données à des tiers.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                6. Sécurité des données
              </h2>
              <p>
                Nous utilisons des mesures techniques et organisationnelles pour protéger
                vos données contre l&apos;accès non autorisé, l&apos;altération ou la
                destruction.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                7. Conservation des données
              </h2>
              <p>
                Nous conservons vos données aussi longtemps que nécessaire pour accomplir
                les objectifs pour lesquels elles ont été collectées, sauf si une période
                plus longue est requise par la loi.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                8. Vos droits
              </h2>
              <p className="mb-4">
                Vous avez les droits suivants concernant vos données personnelles:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Droit d&apos;accès: demander copie de vos données</li>
                <li>Droit de rectification: corriger des données inexactes</li>
                <li>Droit à l&apos;oubli: demander la suppression de vos données</li>
                <li>Droit à la portabilité: recevoir vos données dans un format lisible</li>
                <li>Droit d&apos;opposition: vous opposer au traitement</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à{" "}
                <a href="mailto:jerome@latitude-organisation.com" className="text-latitude-gold hover:underline">
                  jerome@latitude-organisation.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                9. Cookies
              </h2>
              <p>
                Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez
                contrôler les cookies via les paramètres de votre navigateur. Certains
                cookies sont essentiels au fonctionnement du site.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                10. Contact
              </h2>
              <p>
                Pour toute question concernant cette politique, contactez-nous:
              </p>
              <p className="mt-4">
                <strong>Latitude Organisation</strong>
                <br />
                Email: <a href="mailto:jerome@latitude-organisation.com" className="text-latitude-gold hover:underline">jerome@latitude-organisation.com</a>
                <br />
                Téléphone: 06 86 70 65 20
              </p>
            </section>

            <section>
              <p className="text-sm text-white/60">
                Dernière mise à jour: {new Date().toLocaleDateString("fr-FR")}
              </p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
