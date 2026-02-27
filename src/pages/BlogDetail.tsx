import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import { blogPosts } from '@/data/blogData';
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from 'lucide-react';

const categoryColors: Record<string, string> = {
  'Academy News': 'bg-primary/20 text-primary',
  'Match Updates': 'bg-emerald-500/20 text-emerald-400',
  'Player Spotlight': 'bg-amber-500/20 text-amber-400',
  'Training Tips': 'bg-violet-500/20 text-violet-400',
  'Tournament News': 'bg-rose-500/20 text-rose-400',
};

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-display text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </div>
      </Layout>
    );
  }

  const related = blogPosts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 3);

  return (
    <Layout>
      <PageHeader
        title={post.title}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Blog', path: '/blog' },
          { label: post.category },
        ]}
      />

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <article className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category]}`}>
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar size={14} /> {post.date}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock size={14} /> {post.readTime}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <User size={14} /> {post.author}
                </span>
              </div>

              <div className="prose prose-invert max-w-none">
                {post.content.split('\n\n').map((para, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-4 text-base">
                    {para}
                  </p>
                ))}
              </div>

              <Link
                to="/blog"
                className="inline-flex items-center gap-2 mt-10 text-primary font-medium hover:gap-3 transition-all"
              >
                <ArrowLeft size={18} /> Back to all news
              </Link>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="card-sports sticky top-28">
                <h3 className="text-lg font-semibold text-foreground mb-4">Related Articles</h3>
                {related.length > 0 ? (
                  <div className="space-y-4">
                    {related.map(r => (
                      <Link key={r.id} to={`/blog/${r.id}`} className="block group">
                        <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                          {r.title}
                        </h4>
                        <span className="text-xs text-muted-foreground">{r.date}</span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">No related articles found.</p>
                )}

                <div className="border-t border-border mt-6 pt-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {Object.keys(categoryColors).map(cat => (
                      <span key={cat} className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[cat]}`}>
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;
