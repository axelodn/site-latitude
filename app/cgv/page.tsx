import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageHero, Breadcrumb } from "@/components/shared";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Latitude Organisation",
  description:
    "Conditions Générales de Vente de Latitude Organisation - Engagement de services événementiels",
  alternates: {
    canonical: "https://www.latitude-organisation.com/cgv",
  },
  robots: { index: false, follow: true },
};

const breadcrumbs = [
  { label: "Accueil", href: "/" },
  { label: "Conditions Générales de Vente", href: "/cgv", current: true },
];

export default function CGV() {
  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbs} />

      <PageHero
        title="Conditions Générales de Vente"
        subtitle="Termes et conditions de nos services événementiels"
      />

      <article className="py-20 lg:py-32 bg-latitude-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-12 font-inter text-white/80 leading-relaxed">
            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                1. Objet
              </h2>
              <p>
                Ces Conditions Générales de Vente (CGV) régissent les services
                d&apos;organisation d&apos;événements fournis par Latitude Organisation à
                ses clients. Elles s&apos;appliquent à toute relation commerciale.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                2. Services proposés
              </h2>
              <p>
                Latitude Organisation propose:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Organisation de séminaires et incentives</li>
                <li>Organisation de soirées événementielles</li>
                <li>Programmes de team-building</li>
              </ul>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                3. Devis et commande
              </h2>
              <p>
                Tout projet débute par un devis détaillé. La signature du devis ou la
                commande écrite constitue l&apos;acceptation des présentes CGV. Aucune
                prestation ne sera effectuée sans acceptation préalable par écrit du client.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                4. Prix et facturation
              </h2>
              <p>
                Les prix sont indiqués en euros, TVA comprise, sauf indication contraire.
                Un acompte de 30% est requis à la signature du contrat. Le solde est
                facturé avant l&apos;événement ou selon les modalités convenues.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                5. Paiement
              </h2>
              <p>
                Le paiement s&apos;effectue selon les délais convenus (net 30 jours par
                défaut). Les retards de paiement entraîneront des pénalités légales. En cas
                de non-paiement, Latitude Organisation peut suspendre l&apos;organisation de
                l&apos;événement.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                6. Modification et annulation
              </h2>
              <p>
                Modifications jusqu&apos;à 60 jours avant l&apos;événement: sans frais.
              </p>
              <p className="mt-2">
                Annulation:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Plus de 60 jours: restitution de l&apos;acompte moins 10%</li>
                <li>30-60 jours: restitution de l&apos;acompte moins 25%</li>
                <li>Moins de 30 jours: acompte conservé intégralement</li>
              </ul>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                7. Force majeure
              </h2>
              <p>
                En cas d&apos;événements indépendants de notre volonté (catastrophe naturelle,
                épidémie, restrictions gouvernementales), Latitude Organisation ne sera pas
                responsable. Nous proposerons de reporter l&apos;événement ou rembourserons
                l&apos;acompte.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                8. Responsabilité
              </h2>
              <p>
                Latitude Organisation s&apos;engage à fournir des services de qualité.
                Cependant, sa responsabilité est limitée au montant payé pour la prestation.
                Nous ne serons pas responsables des dommages indirects ou imprévus.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                9. Propriété intellectuelle
              </h2>
              <p>
                Tous les contenus créés (design, photos, vidéos) demeurent la propriété de
                Latitude Organisation sauf accord contraire écrit. Le client a le droit
                d&apos;utiliser les contenus relatifs à son événement.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                10. Confidentialité
              </h2>
              <p>
                Latitude Organisation s&apos;engage à respecter la confidentialité des
                informations fournies par le client. Nous ne divulguerons pas de détails à
                des tiers sans autorisation.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                11. Litiges
              </h2>
              <p>
                En cas de différend, les parties s&apos;efforceront de trouver une solution
                amiable. À défaut, le litige sera réglé selon la loi française et les
                juridictions compétentes.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                12. Modification des CGV
              </h2>
              <p>
                Latitude Organisation se réserve le droit de modifier ces CGV à tout moment.
                Les modifications s&apos;appliqueront aux nouveaux projets, sauf disposition
                contraire convenue par écrit.
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
