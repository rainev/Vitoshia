import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import TrustBar from "@/components/site/TrustBar";
import StorySection from "@/components/site/StorySection";
import FarmCycle from "@/components/site/FarmCycle";
import ServicesPreview from "@/components/site/ServicesPreview";
import ContactCta from "@/components/site/ContactCta";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TrustBar />
      <StorySection />
      <FarmCycle />
      <ServicesPreview />
      <ContactCta />
      <Footer />
    </>
  );
}
