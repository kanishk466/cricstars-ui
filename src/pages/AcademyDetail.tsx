import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import { academies } from '@/data/mockData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, Phone, Mail, Award, BookOpen, ArrowLeft } from 'lucide-react';

const AcademyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const academy = academies.find((a) => a.id === id);

  const aboutRef = useScrollAnimation();
  const programsRef = useScrollAnimation();
  const achievementsRef = useScrollAnimation();
  const contactRef = useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!academy) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display text-foreground mb-4">Academy Not Found</h1>
            <Link to="/academies" className="text-primary hover:underline">
              Back to Academies
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader
        title={academy.name}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Academies', path: '/academies' },
          { label: academy.name },
        ]}
      />

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          {/* Back Link */}
          <Link
            to="/academies"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Academies
          </Link>

          {/* Location */}
          <div className="flex items-center gap-2 text-muted-foreground mb-8">
            <MapPin size={20} className="text-primary" />
            <span className="text-lg">{academy.location}</span>
          </div>

          {/* About */}
          <div ref={aboutRef} className="scroll-fade-up mb-12">
            <h2 className="text-2xl font-display text-foreground mb-4">About the Academy</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {academy.fullDescription}
            </p>
          </div>

          {/* Programs */}
          <div ref={programsRef} className="scroll-fade-up mb-12">
            <h2 className="text-2xl font-display text-foreground mb-6 flex items-center gap-3">
              <BookOpen size={24} className="text-primary" />
              Training Programs
            </h2>
            <div className="grid gap-4">
              {academy.programs.map((program, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{program.name}</h3>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {program.level}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{program.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div ref={achievementsRef} className="scroll-fade-up mb-12">
            <h2 className="text-2xl font-display text-foreground mb-6 flex items-center gap-3">
              <Award size={24} className="text-primary" />
              Achievements
            </h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {academy.achievements.map((achievement, index) => (
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
                <span className="text-foreground">{academy.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-primary" />
                <span className="text-foreground">{academy.contact.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1" />
                <span className="text-foreground">{academy.contact.address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AcademyDetail;
