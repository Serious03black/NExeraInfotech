
import React from 'react';
import SEO from '@/components/shared/SEO';
import HeroSection from '@/components/home/HeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import TrustSection from '@/components/home/TrustSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import TypographySection from '@/components/home/TypographySection';
import StatsSection from '@/components/home/StatsSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import CtaSection from '@/components/home/CtaSection';
import Services from '@/components/home/Services';
import { multilingualTexts, services, products, trustFactors } from '@/components/home/data/homeData';

const Home = () => {
  return (
    <>
      <SEO title="Home" />
      <HeroSection multilingualTexts={multilingualTexts} />
      <Services />
      <ProductsSection products={products} />
      <TrustSection trustFactors={trustFactors} />
      <AboutSection />
      <ServicesSection services={services} />
      <TypographySection />
      <StatsSection />
      <TestimonialSection />
      <CtaSection />
    </>
  );
};

export default Home;
