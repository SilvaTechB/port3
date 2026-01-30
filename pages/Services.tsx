
import React from 'react';
import { CheckCircle2, Server, MessageSquare, Globe, Wifi, ArrowUpRight } from 'lucide-react';
import { SERVICES, ICONS } from '../constants';
import { SEO } from '../components/SEO';

export const Services: React.FC = () => {
  return (
    <div className="w-full pt-40 pb-32">
      <SEO 
        title="Our Services | Hosting, Bots, & Networking" 
        description="High-performance technical services including Pterodactyl hosting, WhatsApp bots, and network architecture by Silva Tech Nexus."
      />
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <div className="inline-block px-4 py-1 bg-cyan-500/10 rounded-full text-cyan-600 dark:text-cyan-400 text-xs font-black tracking-widest mb-6 uppercase border border-cyan-500/20">
            Service Catalog
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-slate-900 dark:text-white">Core <span className="text-slate-500">Infrastructure.</span></h1>
          <p className="text-2xl text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto">Scalable solutions engineered to handle the most demanding digital workloads.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group p-10 md:p-14 bg-white dark:bg-slate-900/50 backdrop-blur-md rounded-[3rem] border border-slate-200 dark:border-white/5 hover:border-cyan-500/50 transition-all flex flex-col relative overflow-hidden shadow-sm hover:shadow-2xl">
              <div className="absolute top-0 right-0 p-8">
                 <a href={service.id === 'hosting' ? '#/services/pterodactyl' : `#/services/${service.id}`} className="w-12 h-12 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                    <ArrowUpRight className="text-cyan-600 dark:text-cyan-500" />
                 </a>
              </div>
              <div className="w-20 h-20 bg-cyan-600/10 rounded-2xl flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-10 border border-cyan-500/20 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                {(ICONS as any)[service.icon]}
              </div>
              <h2 className="text-4xl font-black mb-6 tracking-tight text-slate-900 dark:text-white">{service.title}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
                {service.longDescription}
              </p>
              <div className="grid grid-cols-1 gap-4 mb-12">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                    <div className="w-5 h-5 bg-cyan-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle2 size={12} className="text-cyan-500" />
                    </div>
                    <span className="text-sm font-bold tracking-tight">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto">
                <a href={service.id === 'hosting' ? '#/services/pterodactyl' : `#/services/${service.id}`} className="block w-full text-center py-5 bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-2xl font-black text-slate-900 dark:text-white hover:bg-cyan-600 hover:border-cyan-600 hover:text-white transition-all uppercase tracking-widest text-xs">
                  Request Service Deployment
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
