import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import HeroExpansion from "@/components/HeroExpansion";
import Stats from "@/components/Stats";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.latitude-organisation.com",
  },
};

const EventsMarquee    = dynamic(() => import("@/components/EventsMarquee"));
const FounderStatement = dynamic(() => import("@/components/FounderStatement"));
const TrustBand        = dynamic(() => import("@/components/TrustBand"));
const Expertises       = dynamic(() => import("@/components/Expertises"));
const Portfolio        = dynamic(() => import("@/components/Portfolio"));
const Testimonials     = dynamic(() => import("@/components/Testimonials"));
const FAQ              = dynamic(() => import("@/components/FAQ"));
const Contact          = dynamic(() => import("@/components/Contact"));
const Footer           = dynamic(() => import("@/components/Footer"));

export default function HomePage() {
  return (
    <>
      {/* Preload LCP images so the browser fetches them immediately */}
      <link rel="preload" as="image" href="/images/animation-soiree-groupe.webp" fetchPriority="high" />
      <link rel="preload" as="image" href="/images/hero-groupe-exterieur.webp" />
      <Navigation />
      <main id="main-content">
        <HeroExpansion />

        <EventsMarquee />
        <Stats />
        <FounderStatement />
        <TrustBand />
        <Expertises />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
