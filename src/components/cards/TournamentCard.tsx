import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Tournament } from '@/types';

interface TournamentCardProps {
  tournament: Tournament;
}

const TournamentCard = ({ tournament }: TournamentCardProps) => {
  return (
    <div className="card-sports flex flex-col h-full">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-foreground mb-3">{tournament.name}</h3>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Calendar size={16} className="text-primary" />
            <span>{tournament.date}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin size={16} className="text-primary" />
            <span>{tournament.location}</span>
          </div>
        </div>
      </div>
      <p className="text-muted-foreground flex-1 mb-6">{tournament.shortDescription}</p>
      <Link
        to={`/tournaments/${tournament.id}`}
        className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
      >
        View Details
        <ArrowRight size={18} />
      </Link>
    </div>
  );
};

export default TournamentCard;
