import Navigation from "@/components/Navigation";
import ScrollExpandMedia from "@/components/ScrollExpandMedia";
import EventsMarquee from "@/components/EventsMarquee";
import FounderStatement from "@/components/FounderStatement";
import TrustBand from "@/components/TrustBand";
import Stats from "@/components/Stats";
import Expertises from "@/components/Expertises";
import Approach from "@/components/Approach";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Destinations from "@/components/Destinations";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
