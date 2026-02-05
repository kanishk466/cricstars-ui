 import { useState } from 'react';
 import { Button } from '@/components/ui/button';
 import { Input } from '@/components/ui/input';
 import { Textarea } from '@/components/ui/textarea';
 import { Label } from '@/components/ui/label';
 import { Send, CheckCircle } from 'lucide-react';
 
 interface ContactFormProps {
   recipientName: string;
   recipientType: 'academy' | 'coach' | 'tournament';
 }
 
 const ContactForm = ({ recipientName, recipientType }: ContactFormProps) => {
   const [isSubmitted, setIsSubmitted] = useState(false);
 
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitted(true);
   };
 
   if (isSubmitted) {
     return (
       <div className="p-6 rounded-xl bg-card border border-border text-center">
         <CheckCircle size={48} className="text-primary mx-auto mb-4" />
         <h3 className="text-xl font-display text-foreground mb-2">Message Sent!</h3>
         <p className="text-muted-foreground">
           Thank you for contacting {recipientName}. They will get back to you soon.
         </p>
       </div>
     );
   }
 
   return (
     <form onSubmit={handleSubmit} className="p-6 rounded-xl bg-card border border-border space-y-5">
       <h3 className="text-xl font-display text-foreground mb-4">
         Contact {recipientType === 'academy' ? 'Academy' : recipientType === 'coach' ? 'Coach' : 'Organizer'}
       </h3>
       
       <div className="space-y-2">
         <Label htmlFor="name">Your Name</Label>
         <Input id="name" placeholder="Enter your name" required />
       </div>
       
       <div className="space-y-2">
         <Label htmlFor="email">Email Address</Label>
         <Input id="email" type="email" placeholder="Enter your email" required />
       </div>
       
       <div className="space-y-2">
         <Label htmlFor="phone">Phone Number</Label>
         <Input id="phone" type="tel" placeholder="Enter your phone number" />
       </div>
       
       <div className="space-y-2">
         <Label htmlFor="message">Message</Label>
         <Textarea 
           id="message" 
           placeholder={`Write your message to ${recipientName}...`}
           rows={4}
           required 
         />
       </div>
       
       <Button type="submit" className="w-full gap-2">
         <Send size={18} />
         Send Message
       </Button>
     </form>
   );
 };
 
 export default ContactForm;