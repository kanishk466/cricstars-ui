import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import { blogPosts } from '@/data/blogData';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const categoryColors: Record<string, string> = {
  'Academy News': 'bg-primary/20 text-primary',
  'Match Updates': 'bg-emerald-500/20 text-emerald-400',
  'Player Spotlight': 'bg-amber-500/20 text-amber-400',
  'Training Tips': 'bg-violet-500/20 text-violet-400',
  'Tournament News': 'bg-rose-500/20 text-rose-400',
};

const FeaturedCard = ({ post }: { post: typeof blogPosts[0] }) => {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className="scroll-fade-up">
    <Link to={`/blog/${post.id}`} className="card-sports block group lg:col-span-1">
      <div className="flex flex-col h-full">
        <span className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-semibold mb-4 ${categoryColors[post.category]}`}>
          {post.category}
        </span>
        <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-3">
          {post.title}
        </h2>
        <p className="text-muted-foreground flex-1 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
          <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
        </div>
      </div>
    </Link>
    </div>
  );
};

const PostCard = ({ post }: { post: typeof blogPosts[0] }) => {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className="scroll-fade-up">
    <Link to={`/blog/${post.id}`} className="card-sports block group">
      <span className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-semibold mb-3 ${categoryColors[post.category]}`}>
        {post.category}
      </span>
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
        {post.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
        <span className="flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all">
          Read <ArrowRight size={14} />
        </span>
      </div>
    </Link>
    </div>
  );
};

const Blog = () => {
  const featured = blogPosts.filter(p => p.featured);
  const latest = blogPosts.filter(p => !p.featured);

  return (
    <Layout>
      <PageHeader
        title="Cricket News & Updates"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Blog' },
        ]}
      />

      <section className="section-padding">
        <div className="container mx-auto">
          {/* Featured */}
          {featured.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-display text-foreground mb-6 flex items-center gap-2">
                <Tag size={20} className="text-primary" /> Featured Stories
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {featured.map(post => (
                  <FeaturedCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          )}

          {/* Latest */}
          <h2 className="text-2xl font-display text-foreground mb-6">Latest News</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latest.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
