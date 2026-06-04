import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';
import heroBanner2 from '@/assets/hero-banner-2.jpg';
import heroBanner3 from '@/assets/hero-banner-3.jpg';
import tournamentPoster from '@/assets/tournament-2026-banner.jpg.asset.json';

const slides = [
  { src: tournamentPoster.url, alt: 'All India Open Age Group Tournament 2026', fit: 'cover' as const },
  { src: heroBanner, alt: 'Cricket stadium', fit: 'cover' as const },
  { src: heroBanner2, alt: 'Cricket batsman', fit: 'cover' as const },
  { src: heroBanner3, alt: 'Cricket bowler', fit: 'cover' as const },
];

const HeroSection = () => {
  const titleRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();
  const buttonsRef = useScrollAnimation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const goTo = (i: number) => setCurrent((i + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel with Overlay */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slide.fit === 'contain' && (
              <img
                src={slide.src}
                alt=""
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-60"
              />
            )}
            <img
              src={slide.src}
              alt={slide.alt}
              className={`absolute inset-0 w-full h-full ${
                slide.fit === 'contain' ? 'object-contain' : 'object-cover'
              }`}
            />
          </div>
        ))}
        {slides[current].fit === 'cover' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
          </>
        )}
      </div>

      {/* Carousel Controls */}
      <button
        onClick={() => goTo(current - 1)}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/40 hover:bg-background/70 border border-border backdrop-blur-sm transition-colors"
      >
        <ChevronLeft size={24} className="text-foreground" />
      </button>
      <button
        onClick={() => goTo(current + 1)}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/40 hover:bg-background/70 border border-border backdrop-blur-sm transition-colors"
      >
        <ChevronRight size={24} className="text-foreground" />
      </button>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'bg-primary w-8' : 'bg-muted-foreground/40 hover:bg-muted-foreground/60 w-2'
            }`}
          />
        ))}
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
