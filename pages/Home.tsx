
import React from 'react';
import { ArrowRight, ChevronRight, CheckCircle2, Quote } from 'lucide-react';
import { SERVICES, ICONS, TESTIMONIALS } from '../constants';
import { SEO } from '../components/SEO';

export const Home: React.FC = () => {
  return (
    <div className="w-full relative">
      <SEO 
        title="Leading Tech Solutions in Kenya" 
        description="Silva Tech Nexus offers specialized Pterodactyl hosting, WhatsApp automation, and robust web systems. Join the Nexus for future-ready infrastructure."
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-8">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-cyan-600 dark:text-cyan-400">Next-Gen Digital Infrastructure</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-9xl font-black mb-8 leading-[0.95] tracking-tighter uppercase text-slate-900 dark:text-white">
              BEYOND <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-glow">LIMITS.</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl leading-relaxed font-light">
              Silva Tech Nexus engineers high-performance hosting environments and intelligent automated ecosystems for visionaries who demand technical reliability.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#/services" className="w-full sm:w-auto px-10 py-5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-2xl font-black flex items-center justify-center transition-all group shadow-2xl shadow-cyan-900/40 hover:-translate-y-1">
                Access Infrastructure
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a href="#/contact" className="w-full sm:w-auto px-10 py-5 bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-900 dark:text-white rounded-2xl font-black flex items-center justify-center transition-all">
                Connect with Nexus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="group p-8 rounded-[2rem] bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/5 hover:border-cyan-500/50 transition-all hover:scale-[1.02] relative overflow-hidden flex flex-col min-h-[350px] shadow-sm hover:shadow-xl">
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-cyan-500/10 blur-[30px] rounded-full group-hover:bg-cyan-500/20"></div>
                <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-500 dark:text-cyan-400 mb-8 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                  {(ICONS as any)[service.icon]}
                </div>
                <h4 className="text-2xl font-bold mb-4 tracking-tight uppercase leading-none text-slate-900 dark:text-white">{service.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium">{service.description}</p>
                <div className="mt-auto">
                  <a href={service.id === 'hosting' ? '#/services/pterodactyl' : `#/services/${service.id}`} className="text-xs uppercase tracking-widest font-black text-cyan-600 dark:text-cyan-500 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 flex items-center">
                    Learn Protocol <ChevronRight size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-slate-100 dark:bg-slate-900/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-cyan-600 dark:text-cyan-400 mb-4">Social Proof</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white">Trusted by <span className="text-slate-500">Industry Leaders.</span></h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-10 rounded-[3rem] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 shadow-sm relative overflow-hidden group">
                <Quote className="absolute -top-4 -right-4 w-24 h-24 text-cyan-500/10 group-hover:text-cyan-500/20 transition-colors" />
                <p className="text-xl text-slate-700 dark:text-slate-300 font-light leading-relaxed mb-8 italic relative z-10">
                  "{t.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all border-2 border-cyan-500/20" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{t.name}</h4>
                    <p className="text-xs font-bold text-cyan-600 dark:text-cyan-500 uppercase tracking-widest">{t.role} @ {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
             {/* Placeholder Logo Icons */}
             <div className="flex items-center space-x-2 font-black text-2xl text-slate-900 dark:text-white"><div className="w-8 h-8 bg-slate-900 dark:bg-white rounded-lg"></div><span>TECHHUB</span></div>
             <div className="flex items-center space-x-2 font-black text-2xl text-slate-900 dark:text-white"><div className="w-8 h-8 bg-cyan-600 rounded-lg"></div><span>SOKODIGI</span></div>
             <div className="flex items-center space-x-2 font-black text-2xl text-slate-900 dark:text-white"><div className="w-8 h-8 bg-blue-600 rounded-lg"></div><span>CLOUDKE</span></div>
          </div>
        </div>
      </section>

      {/* Founder Teaser */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="w-full lg:w-1/2 relative">
               <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full scale-110"></div>
               <div className="relative z-10 p-2 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-[3rem] border border-slate-200 dark:border-white/10 shadow-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
                   alt="Sylivanus Momanyi - Tech Innovator" 
                   loading="lazy"
                   className="w-full h-[500px] rounded-[2.5rem] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                 />
                 <div className="absolute top-8 right-8 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 text-xs font-bold text-cyan-600 dark:text-cyan-400 shadow-lg">
                    S. MOMANYI // FOUNDER
                 </div>
               </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="inline-block px-4 py-1 bg-cyan-500/10 rounded-full text-cyan-600 dark:text-cyan-400 text-[10px] font-black tracking-widest mb-6 uppercase border border-cyan-500/20">
                Biological Node: Human
              </div>
              <h3 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none uppercase text-slate-900 dark:text-white">THE ARCHITECT OF <span className="text-slate-500">SILVA NEXUS.</span></h3>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed font-light">
                Sylivanus Momanyi doesn't just build systems; he engineers digital resilience. With a deep focus on Pterodactyl hosting and AI-driven automation, he is redefining what it means to scale tech in Kenya.
              </p>
              <a href="#/founder" className="group flex items-center space-x-4">
                <div className="w-16 h-16 bg-slate-200 dark:bg-white/5 rounded-full flex items-center justify-center border border-slate-300 dark:border-white/10 group-hover:bg-cyan-600 transition-all duration-500 group-hover:border-cyan-400 group-hover:text-white shadow-sm">
                   <ArrowRight />
                </div>
                <span className="text-xl font-bold tracking-tight uppercase tracking-widest text-slate-900 dark:text-white">Read Profile Document</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
