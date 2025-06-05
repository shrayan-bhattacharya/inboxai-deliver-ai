
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
