import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CTASection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding bg-surface parallax-bg relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div ref={ref} className="scroll-fade-up container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6">
            Start Your Cricket Journey with{' '}
            <span className="text-primary">CricStars</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join thousands of cricket enthusiasts who have found their perfect academy,
            coach, or tournament through our platform.
          </p>
          <Link to="/academies" className="btn-hero inline-block">
            Explore Academies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
