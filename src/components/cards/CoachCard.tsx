import { Link } from 'react-router-dom';
import { Briefcase, Target, ArrowRight } from 'lucide-react';
import { Coach } from '@/types';

interface CoachCardProps {
  coach: Coach;
}

const CoachCard = ({ coach }: CoachCardProps) => {
  return (
    <div className="card-sports flex flex-col h-full">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-foreground mb-3">{coach.name}</h3>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Briefcase size={16} className="text-primary" />
            <span>{coach.experience} experience</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Target size={16} className="text-primary" />
            <span>{coach.specialization}</span>
          </div>
        </div>
      </div>
      <p className="text-muted-foreground flex-1 mb-6">{coach.shortBio}</p>
      <Link
        to={`/coaches/${coach.id}`}
        className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
      >
        View Profile
        <ArrowRight size={18} />
      </Link>
    </div>
  );
};

export default CoachCard;
