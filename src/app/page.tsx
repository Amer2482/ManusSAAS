import { Suspense } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import WithWithout from "@/components/WithWithout";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import NewsletterSignup from "@/components/NewsletterSignup";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <FeaturesAccordion />
      <WithWithout />
      <Pricing />
      <Testimonials />
      <FAQ />
      <NewsletterSignup />
      <CTA />
      <Footer />
    </main>
  );
}