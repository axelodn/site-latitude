import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
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
        <Hero />
        <Stats />
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
