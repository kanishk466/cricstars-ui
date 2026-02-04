import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface CarouselItem {
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

const carouselItems: CarouselItem[] = [
  {
    title: 'Premium Academies',
    description: 'Access to state-of-the-art training facilities with modern equipment and infrastructure.',
    stat: '50+',
    statLabel: 'Verified Academies',
  },
  {
    title: 'Expert Coaches',
    description: 'Learn from certified professionals with years of experience in international cricket.',
    stat: '100+',
    statLabel: 'Professional Coaches',
  },
  {
    title: 'Competitive Tournaments',
    description: 'Participate in various levels of tournaments from local to regional championships.',
    stat: '30+',
    statLabel: 'Annual Tournaments',
  },
  {
    title: 'Success Stories',
    description: 'Join the community of players who have elevated their game through CricStars.',
    stat: '5000+',
    statLabel: 'Active Players',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const ref = useScrollAnimation();

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <div
          ref={ref}
          className="scroll-fade-up relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Content */}
          <div className="relative overflow-hidden rounded-2xl bg-surface-elevated border border-border">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselItems.map((item, index) => (
                <div
                  key={index}
                  className="min-w-full p-8 md:p-12"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-display text-foreground mb-4">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-lg">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-center p-6 rounded-xl bg-primary/10 min-w-[150px]">
                      <div className="text-4xl md:text-5xl font-display text-primary mb-1">
                        {item.stat}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.statLabel}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 border border-border hover:bg-card transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 border border-border hover:bg-card transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="text-foreground" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-6'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
