
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SERVICES, ICONS } from '../constants';
import { SEO } from '../components/SEO';
import { ArrowLeft, CheckCircle2, Zap } from 'lucide-react';

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) return <Navigate to="/services" />;

  return (
    <div className="w-full pt-40 pb-32">
      <SEO 
        title={`${service.title} Details`} 
        description={`In-depth look at ${service.title} provided by Silva Tech Nexus. Scalable ${service.category} solutions for Kenya.`} 
      />
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <a href="#/services" className="inline-flex items-center text-cyan-500 font-bold mb-12 group">
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Catalog
          </a>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <div className="w-20 h-20 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-500 mb-8 border border-cyan-500/20">
                {(ICONS as any)[service.icon]}
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-none">{service.title}</h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-10">
                {service.longDescription}
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl rounded-[3rem]"></div>
              <img 
                src={`https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800&seed=${service.id}`} 
                alt={service.title} 
                className="w-full h-auto rounded-[3rem] border border-slate-200 dark:border-white/10 relative z-10 shadow-2xl" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-10 rounded-[2.5rem] bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Zap className="text-cyan-500 mr-3" /> Technical Benefits
              </h3>
              <div className="space-y-4">
                {service.benefits.map((b, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <CheckCircle2 className="text-cyan-500 shrink-0" size={18} />
                    <span className="font-bold text-slate-700 dark:text-slate-300">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-10 rounded-[2.5rem] bg-cyan-600 text-white flex flex-col justify-center items-center text-center">
              <h3 className="text-3xl font-black mb-4">Ready to Deploy?</h3>
              <p className="mb-8 opacity-90">Start your transformation with a dedicated technical partner.</p>
              <a href="#/contact" className="px-10 py-5 bg-white text-cyan-600 rounded-2xl font-black hover:scale-105 transition-transform shadow-xl">
                Initiate Protocol
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
