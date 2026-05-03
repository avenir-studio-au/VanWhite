import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutSnippet from "@/components/AboutSnippet";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutSnippet />
      <Testimonials />
      <CTABanner />
    </>
  );
}
