import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import TournamentCard from '@/components/cards/TournamentCard';
import { tournaments } from '@/data/mockData';
import { useMultipleScrollAnimations } from '@/hooks/useScrollAnimation';
 import tournamentsBanner from '@/assets/tournaments-banner.jpg';

const Tournaments = () => {
  useMultipleScrollAnimations('.tournament-card');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <PageHeader
        title="Cricket Tournaments"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Tournaments' },
        ]}
         bannerImage={tournamentsBanner}
      />

      <section className="section-padding">
        <div className="container mx-auto">
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">
            Find and participate in cricket tournaments ranging from local leagues to regional
            championships. Showcase your skills and compete with the best.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {tournaments.map((tournament, index) => (
              <div
                key={tournament.id}
                className="tournament-card scroll-fade-up"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <TournamentCard tournament={tournament} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tournaments;
