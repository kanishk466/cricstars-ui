import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  breadcrumbs: { label: string; path?: string }[];
  bannerImage?: string;
}

const PageHeader = ({ title, breadcrumbs, bannerImage }: PageHeaderProps) => {
  return (
    <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden">
      {/* Background */}
      {bannerImage ? (
        <div className="absolute inset-0">
          <img
            src={bannerImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-hero-gradient" />
      )}

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-primary transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-foreground">{crumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && <ChevronRight size={16} />}
            </div>
          ))}
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default PageHeader;
