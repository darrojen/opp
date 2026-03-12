
// src/config/landing.config.tsx
import type { FC } from 'react';

import Hero from '@/features/landing/components/Hero';
import Features from '@/features/landing/components/Features';
import Statistics from '@/features/landing/components/Statistics';
import TrendingOpportunities from '@/features/landing/components/TrendingOpportunities';
import FeaturedOpportunities from '@/features/landing/components/FeaturedOpportunities';
import CTASection from '@/features/landing/components/CTASection';
import Footer from '@/features/landing/components/Footer';
import Navbar from '@/features/landing/components/Navbar';
import Box from '@/components/ui/box';

export const LandingPageConfig: FC = () => {
  return (
    <>
      <Navbar />
      <Box as="main" className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        <Hero />
        <Features />
        <Statistics />
        <TrendingOpportunities />
        <FeaturedOpportunities />
        <CTASection />
        <Footer />
      </Box>
    </>
  );
};