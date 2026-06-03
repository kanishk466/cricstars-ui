import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { tournaments } from '@/data/mockData';
import { ArrowLeft, CheckCircle, Calendar, MapPin, Send, Trophy, Users } from 'lucide-react';
import tournamentsBanner from '@/assets/tournaments-banner.jpg';

const registrationSchema = z.object({
  teamName: z.string().trim().nonempty('Team name is required').max(100, 'Max 100 characters'),
  captainName: z.string().trim().nonempty('Captain name is required').max(100, 'Max 100 characters'),
  email: z.string().trim().email('Invalid email address').max(255),
  phone: z.string().trim().min(7, 'Invalid phone number').max(20, 'Max 20 characters'),
  city: z.string().trim().nonempty('City is required').max(100),
  playerCount: z.coerce.number().int().min(1, 'At least 1 player').max(30, 'Max 30 players'),
  category: z.string().nonempty('Please select a category'),
  experience: z.string().nonempty('Please select experience level'),
  notes: z.string().trim().max(1000, 'Max 1000 characters').optional(),
});

type RegistrationData = z.infer<typeof registrationSchema>;

const TournamentRegistration = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const tournament = tournaments.find((t) => t.id === id);

  const [form, setForm] = useState({
    teamName: '',
    captainName: '',
    email: '',
    phone: '',
    city: '',
    playerCount: '11',
    category: '',
    experience: '',
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

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

  const update = (k: keyof typeof form, v: string) => {
    setForm((p) => ({ ...p, [k]: v }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = registrationSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      toast({
        title: 'Please fix the errors',
        description: 'Some fields need your attention.',
        variant: 'destructive',
      });
      return;
    }

    // Persist locally as a mock backend
    try {
      const key = `tournament_registrations_${tournament.id}`;
      const existing: RegistrationData[] = JSON.parse(localStorage.getItem(key) || '[]');
      existing.push(result.data);
      localStorage.setItem(key, JSON.stringify(existing));
    } catch {
      // ignore storage errors
    }

    setSubmitted(true);
    toast({
      title: 'Registration submitted!',
      description: `Your team has been registered for ${tournament.name}.`,
    });
  };

  return (
    <Layout>
      <PageHeader
        title={`Register: ${tournament.name}`}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Tournaments', path: '/tournaments' },
          { label: tournament.name, path: `/tournaments/${tournament.id}` },
          { label: 'Register' },
        ]}
        bannerImage={tournamentsBanner}
      />

      <section className="section-padding">
        <div className="container mx-auto">
          <Link
            to={`/tournaments/${tournament.id}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Tournament
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="p-10 rounded-xl bg-card border border-border text-center">
                  <CheckCircle size={64} className="text-primary mx-auto mb-4" />
                  <h2 className="text-3xl font-display text-foreground mb-3">Registration Confirmed!</h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    Your team has been registered for <span className="text-foreground font-medium">{tournament.name}</span>.
                    The organizer will contact you shortly with next steps.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button onClick={() => navigate(`/tournaments/${tournament.id}`)} variant="outline">
                      Back to Tournament
                    </Button>
                    <Button onClick={() => navigate('/tournaments')}>Browse More Tournaments</Button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-6 md:p-8 rounded-xl bg-card border border-border space-y-6"
                  noValidate
                >
                  <div>
                    <h2 className="text-2xl font-display text-foreground mb-1">Team Registration</h2>
                    <p className="text-muted-foreground text-sm">
                      Fill in the details below to register your team for this tournament.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="teamName">Team Name *</Label>
                      <Input
                        id="teamName"
                        value={form.teamName}
                        onChange={(e) => update('teamName', e.target.value)}
                        placeholder="e.g. Mumbai Strikers"
                        maxLength={100}
                      />
                      {errors.teamName && <p className="text-sm text-destructive">{errors.teamName}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="captainName">Captain Name *</Label>
                      <Input
                        id="captainName"
                        value={form.captainName}
                        onChange={(e) => update('captainName', e.target.value)}
                        placeholder="Full name"
                        maxLength={100}
                      />
                      {errors.captainName && <p className="text-sm text-destructive">{errors.captainName}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder="you@example.com"
                        maxLength={255}
                      />
                      {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        placeholder="+91 98765 43210"
                        maxLength={20}
                      />
                      {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={form.city}
                        onChange={(e) => update('city', e.target.value)}
                        placeholder="Your city"
                        maxLength={100}
                      />
                      {errors.city && <p className="text-sm text-destructive">{errors.city}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="playerCount">Number of Players *</Label>
                      <Input
                        id="playerCount"
                        type="number"
                        min={1}
                        max={30}
                        value={form.playerCount}
                        onChange={(e) => update('playerCount', e.target.value)}
                      />
                      {errors.playerCount && <p className="text-sm text-destructive">{errors.playerCount}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select value={form.category} onValueChange={(v) => update('category', v)}>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-15">Under 15</SelectItem>
                          <SelectItem value="under-19">Under 19</SelectItem>
                          <SelectItem value="open">Open</SelectItem>
                          <SelectItem value="veterans">Veterans</SelectItem>
                          <SelectItem value="women">Women</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.category && <p className="text-sm text-destructive">{errors.category}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Experience Level *</Label>
                      <Select value={form.experience} onValueChange={(v) => update('experience', v)}>
                        <SelectTrigger id="experience">
                          <SelectValue placeholder="Select experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                          <SelectItem value="professional">Professional</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.experience && <p className="text-sm text-destructive">{errors.experience}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      value={form.notes}
                      onChange={(e) => update('notes', e.target.value)}
                      placeholder="Any special requirements or questions..."
                      rows={4}
                      maxLength={1000}
                    />
                    {errors.notes && <p className="text-sm text-destructive">{errors.notes}</p>}
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
                    <Send size={18} />
                    Submit Registration
                  </Button>
                </form>
              )}
            </div>

            {/* Sidebar - Tournament Summary */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-xl font-display text-foreground mb-4">Tournament Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <Trophy size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground font-medium">{tournament.name}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{tournament.date}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{tournament.location}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{tournament.format}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">Registration Deadline</p>
                    <p className="text-foreground font-medium">{tournament.registrationDeadline}</p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-primary/10 border border-primary/20">
                  <p className="text-sm text-foreground">
                    Need help? Contact the organizer at{' '}
                    <span className="text-primary font-medium">{tournament.organizer.contact}</span>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TournamentRegistration;
