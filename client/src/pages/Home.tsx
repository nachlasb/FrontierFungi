import HeroSection from "@/components/sections/HeroSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import FeaturedCultures from "@/components/sections/FeaturedCultures";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import WhatWeOffer from "@/components/sections/WhatWeOffer";
import LearnHowToGrow from "@/components/sections/LearnHowToGrow";
import StamBotSection from "@/components/sections/StamBotSection";
import Testimonials from "@/components/sections/Testimonials";
import NewsletterSignup from "@/components/sections/NewsletterSignup";
import SocialGallery from "@/components/sections/SocialGallery";
import ContactForm from "@/components/sections/ContactForm";
import FinalCTA from "@/components/sections/FinalCTA";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Frontier Fungi - Gourmet Mushroom Cultivation Supplies</title>
        <meta 
          name="description" 
          content="Discover premium gourmet mushroom cultivation supplies at Frontier Fungi. From spore to plate with ease: sustainable growing kits, cultures, and expert knowledge." 
        />
      </Helmet>
      
      <HeroSection />
      <FeaturedProducts />
      <FeaturedCultures />
      <WhyChooseUs />
      <WhatWeOffer />
      <LearnHowToGrow />
      <StamBotSection />
      <Testimonials />
      <NewsletterSignup />
      <SocialGallery />
      <ContactForm />
      <FinalCTA />
    </>
  );
}
