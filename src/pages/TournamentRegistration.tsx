import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { tournaments } from '@/data/mockData';
import { ArrowLeft, CheckCircle, Send } from 'lucide-react';
import tournamentsBanner from '@/assets/tournaments-banner.jpg';

const registrationSchema = z.object({
  fullName: z.string().trim().nonempty('Full name is required').max(100, 'Max 100 characters'),
  mobile: z
    .string()
    .trim()
    .min(7, 'Invalid mobile number')
    .max(20, 'Max 20 characters')
    .regex(/^[0-9+\-\s()]+$/, 'Invalid mobile number'),
  email: z.string().trim().email('Invalid email address').max(255),
  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the terms & conditions' }),
  }),
});

const TournamentRegistration = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const tournament = tournaments.find((t) => t.id === id);

  const [form, setForm] = useState({
    fullName: '',
    mobile: '',
    email: '',
    acceptTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

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

  const update = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) => {
    setForm((p) => ({ ...p, [k]: v }));
    if (errors[k as string]) setErrors((p) => ({ ...p, [k as string]: '' }));
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

    try {
      const key = `tournament_registrations_${tournament.id}`;
      const existing = JSON.parse(localStorage.getItem(key) || '[]');
      existing.push({
        fullName: result.data.fullName,
        mobile: result.data.mobile,
        email: result.data.email,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem(key, JSON.stringify(existing));
    } catch {
      // ignore
    }

    setShowSuccess(true);
    setForm({ fullName: '', mobile: '', email: '', acceptTerms: false });
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

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left: YouTube video */}
            <div className="rounded-xl overflow-hidden border border-border bg-card">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Tournament Highlights"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-display text-foreground mb-1">
                  {tournament.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Watch the highlights and get a feel for the tournament before you register.
                </p>
              </div>
            </div>

            {/* Right: Registration form */}
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-xl bg-card border border-border space-y-6"
              noValidate
            >
              <div>
                <h2 className="text-2xl font-display text-foreground mb-1">Register Now</h2>
                <p className="text-muted-foreground text-sm">
                  Fill in your details and our team will reach out to you shortly.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={form.fullName}
                  onChange={(e) => update('fullName', e.target.value)}
                  placeholder="Your full name"
                  maxLength={100}
                />
                {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile *</Label>
                <Input
                  id="mobile"
                  type="tel"
                  value={form.mobile}
                  onChange={(e) => update('mobile', e.target.value)}
                  placeholder="+91 98765 43210"
                  maxLength={20}
                />
                {errors.mobile && <p className="text-sm text-destructive">{errors.mobile}</p>}
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
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="acceptTerms"
                    checked={form.acceptTerms}
                    onCheckedChange={(c) => update('acceptTerms', c === true)}
                    className="mt-1"
                  />
                  <Label htmlFor="acceptTerms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    I agree to the{' '}
                    <span className="text-primary font-medium">Terms &amp; Conditions</span> and
                    consent to be contacted regarding this tournament.
                  </Label>
                </div>
                {errors.acceptTerms && (
                  <p className="text-sm text-destructive">{errors.acceptTerms}</p>
                )}
              </div>

              <Button type="submit" size="lg" className="w-full gap-2">
                <Send size={18} />
                Submit Registration
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent>
          <DialogHeader>
            <div className="mx-auto mb-2">
              <CheckCircle size={56} className="text-primary" />
            </div>
            <DialogTitle className="text-center text-2xl font-display">
              Registration Successful!
            </DialogTitle>
            <DialogDescription className="text-center text-base pt-2">
              Thank you for registering for{' '}
              <span className="text-foreground font-medium">{tournament.name}</span>. Our team will
              contact you soon with the next steps.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center gap-2">
            <Button variant="outline" onClick={() => setShowSuccess(false)}>
              Close
            </Button>
            <Button
              onClick={() => {
                setShowSuccess(false);
                navigate(`/tournaments/${tournament.id}`);
              }}
            >
              Back to Tournament
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default TournamentRegistration;
