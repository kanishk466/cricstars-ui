import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = true }: SectionTitleProps) => {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`scroll-fade-up mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
