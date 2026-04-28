import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import ScrollExpandMedia from "@/components/ScrollExpandMedia";

// Sections above/near fold — chargées normalement
import EventsMarquee from "@/components/EventsMarquee";
import Stats from "@/components/Stats";

// Sections below fold — lazy-loadées pour alléger le bundle initial
const FounderStatement = dynamic(() => import("@/components/FounderStatement"));
const TrustBand        = dynamic(() => import("@/components/TrustBand"));
const Expertises       = dynamic(() => import("@/components/Expertises"));
const Approach         = dynamic(() => import("@/components/Approach"));
const Portfolio        = dynamic(() => import("@/components/Portfolio"));
const Testimonials     = dynamic(() => import("@/components/Testimonials"));
const Destinations     = dynamic(() => import("@/components/Destinations"));
const FAQ              = dynamic(() => import("@/components/FAQ"));
const Contact          = dynamic(() => import("@/components/Contact"));
const Footer           = dynamic(() => import("@/components/Footer"));

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <ScrollExpandMedia
          mediaType="image"
          mediaSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1280&h=720&fit=crop"
          bgImageSrc="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&h=1080&fit=crop"
          title="L'excellence événementielle depuis 2004"
          date="20 ans d'expertise"
          scrollToExpand="Scroll pour explorer"
          textBlend={false}
        />

        <EventsMarquee />
        <Stats />
        <FounderStatement />
        <TrustBand />
        <Expertises />
        <Approach />
        <Portfolio />
        <Testimonials />
        <Destinations />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
