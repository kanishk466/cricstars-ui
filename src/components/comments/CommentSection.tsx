import { useState, useEffect } from 'react';
import { MessageSquare, Send, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';

interface Comment {
  id: string;
  name: string;
  message: string;
  date: string;
}

interface CommentSectionProps {
  entityId: string;
  entityType: 'academy' | 'coach';
}

const CommentSection = ({ entityId, entityType }: CommentSectionProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const storageKey = `comments_${entityType}_${entityId}`;

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      setComments(JSON.parse(stored));
    }
  }, [storageKey]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedMessage) {
      toast({
        title: 'Missing fields',
        description: 'Please enter your name and comment.',
        variant: 'destructive',
      });
      return;
    }

    if (trimmedName.length > 100 || trimmedMessage.length > 1000) {
      toast({
        title: 'Input too long',
        description: 'Name must be under 100 and comment under 1000 characters.',
        variant: 'destructive',
      });
      return;
    }

    const newComment: Comment = {
      id: crypto.randomUUID(),
      name: trimmedName,
      message: trimmedMessage,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
    setName('');
    setMessage('');

    toast({
      title: 'Comment posted!',
      description: 'Your comment has been added successfully.',
    });
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-display text-foreground flex items-center gap-3">
        <MessageSquare size={24} className="text-primary" />
        Comments ({comments.length})
      </h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="p-6 rounded-xl bg-card border border-border space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Leave a Comment</h3>
        <Input
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={100}
        />
        <Textarea
          placeholder="Write your comment..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={1000}
          rows={4}
        />
        <Button type="submit" className="gap-2">
          <Send size={16} />
          Post Comment
        </Button>
      </form>

      {/* Comments List */}
      {comments.length === 0 ? (
        <p className="text-muted-foreground text-center py-8">
          No comments yet. Be the first to share your thoughts!
        </p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="p-5 rounded-xl bg-card border border-border flex gap-4"
            >
              <Avatar className="h-10 w-10 flex-shrink-0">
                <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
                  {comment.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-semibold text-foreground">{comment.name}</span>
                  <span className="text-sm text-muted-foreground">{comment.date}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{comment.message}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentSection;
