import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Target, Users, Trophy } from 'lucide-react';

const WhatIsCricStars = () => {
  const textRef = useScrollAnimation();
  const iconsRef = useScrollAnimation();

  return (
    <section className="section-padding bg-surface">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="scroll-fade-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6">
              What is <span className="text-primary">CricStars</span>?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              CricStars is a comprehensive cricket platform designed to bridge the gap between
              aspiring cricketers and the resources they need to succeed. Whether you're a beginner
              looking for your first academy or a seasoned player seeking advanced coaching,
              we've got you covered.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our platform connects players with verified academies, experienced coaches, and
              competitive tournaments across the region. Start your cricket journey with us today.
            </p>
          </div>

          <div ref={iconsRef} className="scroll-fade-right">
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: Target,
                  title: 'Find Your Academy',
                  description: 'Browse through verified cricket academies near you',
                },
                {
                  icon: Users,
                  title: 'Connect with Coaches',
                  description: 'Get trained by experienced professional coaches',
                },
                {
                  icon: Trophy,
                  title: 'Join Tournaments',
                  description: 'Participate in exciting cricket tournaments',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border"
                >
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsCricStars;
