import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { LogoBar } from "@/components/logo-bar";
import { ValueProp } from "@/components/value-prop";
import { Solutions } from "@/components/solutions";
import { Platform } from "@/components/platform";
// import { Testimonials } from "@/components/testimonials";
import { Integrations } from "@/components/integrations";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoBar />
      <ValueProp />
      <Solutions />
      <Platform />
      {/* <Testimonials /> */}
      <Integrations />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
