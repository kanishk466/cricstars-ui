import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { Academy } from '@/types';

interface AcademyCardProps {
  academy: Academy;
}

const AcademyCard = ({ academy }: AcademyCardProps) => {
  return (
    <div className="card-sports flex flex-col h-full">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-foreground mb-2">{academy.name}</h3>
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <MapPin size={16} className="text-primary" />
          <span>{academy.location}</span>
        </div>
      </div>
      <p className="text-muted-foreground flex-1 mb-6">{academy.shortDescription}</p>
      <Link
        to={`/academies/${academy.id}`}
        className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
      >
        View Details
        <ArrowRight size={18} />
      </Link>
    </div>
  );
};

export default AcademyCard;
