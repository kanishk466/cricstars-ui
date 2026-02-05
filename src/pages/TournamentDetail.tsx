import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import { tournaments } from '@/data/mockData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Calendar, MapPin, Users, Clock, Mail, ArrowLeft } from 'lucide-react';
 import ContactForm from '@/components/forms/ContactForm';
 import tournamentsBanner from '@/assets/tournaments-banner.jpg';

const TournamentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const tournament = tournaments.find((t) => t.id === id);

  const aboutRef = useScrollAnimation();
  const detailsRef = useScrollAnimation();
  const organizerRef = useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!tournament) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display text-foreground mb-4">Tournament Not Found</h1>
            <Link to="/tournaments" className="text-primary hover:underline">
              Back to Tournaments
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader
        title={tournament.name}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Tournaments', path: '/tournaments' },
          { label: tournament.name },
        ]}
         bannerImage={tournamentsBanner}
      />

      <section className="section-padding">
         <div className="container mx-auto">
          {/* Back Link */}
          <Link
            to="/tournaments"
             className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Tournaments
          </Link>

           {/* Two Column Layout */}
           <div className="grid lg:grid-cols-3 gap-8">
             {/* Main Content */}
             <div className="lg:col-span-2 space-y-8">
               {/* Quick Info */}
               <div className="flex flex-wrap gap-6">
                 <div className="flex items-center gap-2 text-muted-foreground">
                   <Calendar size={20} className="text-primary" />
                   <span className="text-lg">{tournament.date}</span>
                 </div>
                 <div className="flex items-center gap-2 text-muted-foreground">
                   <MapPin size={20} className="text-primary" />
                   <span className="text-lg">{tournament.location}</span>
                 </div>
               </div>

               {/* About */}
               <div ref={aboutRef} className="scroll-fade-up">
                 <h2 className="text-2xl font-display text-foreground mb-4">About the Tournament</h2>
                 <p className="text-muted-foreground text-lg leading-relaxed">
                   {tournament.fullDescription}
                 </p>
               </div>

               {/* Tournament Details */}
               <div ref={detailsRef} className="scroll-fade-up">
                 <h2 className="text-2xl font-display text-foreground mb-6">Tournament Details</h2>
                 <div className="grid md:grid-cols-2 gap-4">
                   <div className="p-5 rounded-xl bg-card border border-border">
                     <div className="flex items-center gap-3 mb-2">
                       <Users size={20} className="text-primary" />
                       <span className="font-semibold text-foreground">Format</span>
                     </div>
                     <p className="text-muted-foreground">{tournament.format}</p>
                   </div>
                   <div className="p-5 rounded-xl bg-card border border-border">
                     <div className="flex items-center gap-3 mb-2">
                       <Clock size={20} className="text-primary" />
                       <span className="font-semibold text-foreground">Registration Deadline</span>
                     </div>
                     <p className="text-muted-foreground">{tournament.registrationDeadline}</p>
                   </div>
                </div>
              </div>

               {/* Organizer */}
               <div ref={organizerRef} className="scroll-fade-up">
                 <h2 className="text-2xl font-display text-foreground mb-6">Organizer Information</h2>
                 <div className="p-6 rounded-xl bg-card border border-border space-y-4">
                   <div className="flex items-center gap-3">
                     <Users size={20} className="text-primary" />
                     <span className="text-foreground font-medium">{tournament.organizer.name}</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <Mail size={20} className="text-primary" />
                     <span className="text-foreground">{tournament.organizer.contact}</span>
                   </div>
                </div>
              </div>
            </div>

             {/* Sidebar */}
             <div className="lg:col-span-1">
               <div className="sticky top-24">
                 <ContactForm recipientName={tournament.name} recipientType="tournament" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TournamentDetail;
