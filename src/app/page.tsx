"use client";
import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import TestimonialSection from "@/components/sections/testimonial";
import ControlSection from "@/components/sections/control";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import CTAFooter from "@/components/sections/cta-footer";
// import WhyChooseUs from "@/components/sections/whyChooseUs";
import FAQs from "@/components/sections/FAQs";
import Socials from "@/components/sections/Socials";
import dynamic from "next/dynamic";

const WhyChooseUs = dynamic(
  () => import("../components/sections/whyChooseUs"),
  { ssr: false }
);

export default function Home() {
  
  return (
    <main className="min-h-screen bg-black selection:bg-white/20">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <Socials />
      {/* <JourneySection /> */}
      <TestimonialSection />
      <ControlSection />
      <TestimonialsCarousel />
      <FAQs />
      <CTAFooter />
    </main>
  );
}
