import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageHero, Breadcrumb } from "@/components/shared";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Latitude Organisation — Demande de devis événementiel",
  description:
    "Contactez Latitude Organisation pour organiser votre séminaire, soirée ou team-building. Réponse sous 24h. Devis gratuit et sur mesure.",
  keywords: ["contact agence événementielle", "demande devis séminaire", "organiser événement entreprise"],
  alternates: {
    canonical: "https://www.latitude-organisation.com/contact",
  },
  openGraph: {
    title: "Contact | Latitude Organisation",
    description: "Contactez-nous pour organiser votre prochain événement d'entreprise. Devis gratuit sous 24h.",
    url: "https://www.latitude-organisation.com/contact",
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Accueil", href: "/" },
  { label: "Contact", href: "/contact", current: true },
];

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbs} />
      <PageHero
        eyebrow="NOUS CONTACTER"
        title="Parlons de votre prochain événement"
        subtitle="Nos équipes sont disponibles pour discuter de vos projets et vous proposer des solutions sur mesure."
        imageSrc="/images/presentateurs.webp"
      />
      <section className="py-20 lg:py-32 bg-latitude-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
      <Footer />
    </>
  );
}
