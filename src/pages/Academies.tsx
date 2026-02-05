import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import AcademyCard from '@/components/cards/AcademyCard';
import { academies } from '@/data/mockData';
import { useMultipleScrollAnimations } from '@/hooks/useScrollAnimation';
import academiesBanner from '@/assets/academies-banner.jpg';

const Academies = () => {
  useMultipleScrollAnimations('.academy-card');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <PageHeader
        title="Cricket Academies"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Academies' },
        ]}
        bannerImage={academiesBanner}
      />

      <section className="section-padding">
        <div className="container mx-auto">
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">
            Discover top-rated cricket academies with professional training facilities,
            experienced coaching staff, and proven track records of developing cricket talent.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {academies.map((academy, index) => (
              <div
                key={academy.id}
                className="academy-card scroll-fade-up"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <AcademyCard academy={academy} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Academies;
