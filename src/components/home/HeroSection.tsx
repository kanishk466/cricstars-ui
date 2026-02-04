import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronDown } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

const HeroSection = () => {
  const titleRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();
  const buttonsRef = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Cricket stadium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      <div className="container mx-auto px-4 md:px-8 pt-20 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div ref={titleRef} className="scroll-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display leading-tight mb-6">
              Discover Cricket{' '}
              <span className="text-primary">Academies</span>,{' '}
              <span className="text-primary">Coaches</span> &{' '}
              <span className="text-primary">Tournaments</span>
            </h1>
          </div>

          <div ref={subtitleRef} className="scroll-fade-up" style={{ transitionDelay: '0.1s' }}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Your ultimate platform to find top cricket academies, connect with professional coaches,
              and participate in exciting tournaments near you.
            </p>
          </div>

          <div ref={buttonsRef} className="scroll-fade-up flex flex-col sm:flex-row gap-4 justify-center" style={{ transitionDelay: '0.2s' }}>
            <Link to="/academies" className="btn-hero">
              Explore Academies
            </Link>
            <Link to="/coaches" className="btn-hero-outline">
              Find Coaches
            </Link>
            <Link to="/tournaments" className="btn-hero-outline">
              View Tournaments
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
