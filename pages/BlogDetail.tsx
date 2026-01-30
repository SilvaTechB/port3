
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { SEO } from '../components/SEO';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

export const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) return <Navigate to="/updates" />;

  return (
    <div className="w-full pt-40 pb-32">
      <SEO 
        title={post.title} 
        description={post.excerpt} 
      />
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <a href="#/updates" className="inline-flex items-center text-cyan-500 font-bold mb-12 group">
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Updates
          </a>

          <article>
            <div className="flex items-center space-x-6 mb-8 text-sm text-slate-500 font-bold uppercase tracking-widest">
              <div className="flex items-center"><Calendar size={14} className="mr-2 text-cyan-500" /> {post.date}</div>
              <div className="flex items-center"><User size={14} className="mr-2 text-cyan-500" /> {post.author}</div>
              <div className="flex items-center"><Clock size={14} className="mr-2 text-cyan-500" /> 5 min read</div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter leading-none text-slate-900 dark:text-white uppercase">
              {post.title}
            </h1>

            <div className="aspect-video rounded-[3rem] overflow-hidden mb-16 border border-slate-200 dark:border-white/10">
              <img 
                src={`https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200&seed=${post.slug}`} 
                alt={post.title} 
                className="w-full h-full object-cover grayscale" 
              />
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-2xl text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-8 italic">
                {post.excerpt}
              </p>
              <div className="text-lg text-slate-700 dark:text-slate-400 leading-relaxed space-y-6">
                {post.content.split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
