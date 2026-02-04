import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import { coaches } from '@/data/mockData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Briefcase, Target, Phone, Mail, Award, ArrowLeft } from 'lucide-react';

const CoachDetail = () => {
  const { id } = useParams<{ id: string }>();
  const coach = coaches.find((c) => c.id === id);

  const aboutRef = useScrollAnimation();
  const achievementsRef = useScrollAnimation();
  const contactRef = useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!coach) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display text-foreground mb-4">Coach Not Found</h1>
            <Link to="/coaches" className="text-primary hover:underline">
              Back to Coaches
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader
        title={coach.name}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Coaches', path: '/coaches' },
          { label: coach.name },
        ]}
      />

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          {/* Back Link */}
          <Link
            to="/coaches"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Coaches
          </Link>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Briefcase size={20} className="text-primary" />
              <span className="text-lg">{coach.experience} experience</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Target size={20} className="text-primary" />
              <span className="text-lg">{coach.specialization}</span>
            </div>
          </div>

          {/* About */}
          <div ref={aboutRef} className="scroll-fade-up mb-12">
            <h2 className="text-2xl font-display text-foreground mb-4">About the Coach</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {coach.fullBio}
            </p>
          </div>

          {/* Achievements */}
          <div ref={achievementsRef} className="scroll-fade-up mb-12">
            <h2 className="text-2xl font-display text-foreground mb-6 flex items-center gap-3">
              <Award size={24} className="text-primary" />
              Achievements & Certifications
            </h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {coach.achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border"
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div ref={contactRef} className="scroll-fade-up">
            <h2 className="text-2xl font-display text-foreground mb-6">Contact Information</h2>
            <div className="p-6 rounded-xl bg-card border border-border space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-primary" />
                <span className="text-foreground">{coach.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-primary" />
                <span className="text-foreground">{coach.contact.email}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CoachDetail;
