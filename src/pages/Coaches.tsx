import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import CoachCard from '@/components/cards/CoachCard';
import { coaches } from '@/data/mockData';
import { useMultipleScrollAnimations } from '@/hooks/useScrollAnimation';

const Coaches = () => {
  useMultipleScrollAnimations('.coach-card');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <PageHeader
        title="Cricket Coaches"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Coaches' },
        ]}
      />

      <section className="section-padding">
        <div className="container mx-auto">
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">
            Connect with certified cricket coaches who can help you improve your technique,
            develop your skills, and reach your full potential as a cricketer.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {coaches.map((coach, index) => (
              <div
                key={coach.id}
                className="coach-card scroll-fade-up"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <CoachCard coach={coach} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Coaches;
