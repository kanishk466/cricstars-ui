import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionTitle from '@/components/ui/SectionTitle';
import { GraduationCap, Users, Trophy } from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: 'Academies',
    description:
      'Discover top-rated cricket academies with professional training facilities and experienced coaching staff.',
    link: '/academies',
    linkText: 'View Academies',
  },
  {
    icon: Users,
    title: 'Coaches',
    description:
      'Connect with certified cricket coaches who can help you improve your technique and game strategy.',
    link: '/coaches',
    linkText: 'Find Coaches',
  },
  {
    icon: Trophy,
    title: 'Tournaments',
    description:
      'Find and participate in cricket tournaments ranging from local leagues to regional championships.',
    link: '/tournaments',
    linkText: 'Browse Tournaments',
  },
];

const FeaturesSection = () => {
  const cardsRef = useScrollAnimation();

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionTitle
          title="What We Offer"
          subtitle="Everything you need to excel in cricket, all in one place"
        />

        <div ref={cardsRef} className="scroll-fade-up grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-sports flex flex-col"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="p-4 rounded-xl bg-primary/10 w-fit mb-6">
                <feature.icon size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground flex-1 mb-6">{feature.description}</p>
              <Link
                to={feature.link}
                className="text-primary font-medium hover:underline underline-offset-4"
              >
                {feature.linkText} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
