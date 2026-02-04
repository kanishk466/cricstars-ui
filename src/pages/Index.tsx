import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import WhatIsCricStars from '@/components/home/WhatIsCricStars';
import FeaturesSection from '@/components/home/FeaturesSection';
import Carousel from '@/components/home/Carousel';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhatIsCricStars />
      <Carousel />
      <FeaturesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
