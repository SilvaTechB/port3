
import React from 'react';
import { GraduationCap, Brain, Rocket, Heart, Terminal } from 'lucide-react';
import { SEO } from '../components/SEO';

const SkillTag: React.FC<{ name: string }> = ({ name }) => (
  <span className="px-4 py-2 bg-slate-900 border border-white/5 rounded-full text-xs font-bold text-slate-400 uppercase tracking-widest hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
    {name}
  </span>
);

export const Founder: React.FC = () => {
  return (
    <div className="w-full pt-40 pb-32">
      <SEO 
        title="Sylivanus Momanyi | Founder of Silva Tech Nexus" 
        description="Learn more about Sylivanus Momanyi, a technical visionary specializing in system architecture, automation, and high-performance hosting."
      />
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Bio */}
          <div className="flex flex-col md:flex-row gap-20 items-center mb-32">
            <div className="w-full md:w-1/2 relative">
               <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/30 to-blue-600/30 blur-2xl rounded-[3rem] opacity-50"></div>
               <img 
                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                 alt="Sylivanus Momanyi" 
                 loading="lazy"
                 className="w-full h-[600px] object-cover rounded-[3rem] border border-white/10 relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
            <div className="w-full md:w-1/2">
               <h1 className="text-7xl lg:text-8xl font-black mb-6 tracking-tighter">Sylivanus <br/><span className="text-cyan-500">Momanyi</span></h1>
               <div className="flex items-center space-x-3 text-slate-500 font-black tracking-[0.3em] uppercase text-xs mb-10">
                 <Terminal size={14} className="text-cyan-500" />
                 <span>Principal Systems Architect</span>
               </div>
               <p className="text-xl text-slate-300 leading-relaxed font-light mb-12">
                 Resilience is the cornerstone of great engineering. Sylivanus combines technical precision with an innovative mindset to build systems that don't just work—they evolve.
               </p>
               <div className="flex flex-wrap gap-3">
                 <SkillTag name="Pterodactyl Expert" />
                 <SkillTag name="AI Automations" />
                 <SkillTag name="Kernel Optimization" />
                 <SkillTag name="Next.js / TypeScript" />
                 <SkillTag name="Mikrotik Certified" />
               </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
             <div>
               <h2 className="text-4xl font-black mb-12 tracking-tight flex items-center">
                 <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-500 mr-4">
                   <GraduationCap />
                 </div>
                 Technical Lineage
               </h2>
               <div className="space-y-12">
                 {[
                   { year: '2016', title: 'Network Fundamentals', desc: 'Mastering the low-level protocols that power the internet.' },
                   { year: '2019', title: 'Conversation AI Pivot', desc: 'Deploying custom bot ecosystems for the emerging African market.' },
                   { year: '2023', title: 'Nexus Infrastructure', desc: 'Consolidating hosting and automation into Silva Tech Nexus.' }
                 ].map((step, i) => (
                   <div key={i} className="group relative pl-12 border-l-2 border-white/5 pb-2">
                     <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-500 group-hover:scale-125 transition-transform"></div>
                     <span className="text-xs font-black text-cyan-500 mb-2 block">{step.year} // SYSTEM_INIT</span>
                     <h4 className="text-2xl font-bold mb-3 tracking-tight">{step.title}</h4>
                     <p className="text-slate-400 font-medium">{step.desc}</p>
                   </div>
                 ))}
               </div>
             </div>

             <div className="p-12 bg-slate-900/50 backdrop-blur-3xl rounded-[3rem] border border-white/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 blur-[80px] rounded-full"></div>
               <h2 className="text-4xl font-black mb-10 tracking-tight">Ethos</h2>
               <div className="space-y-8">
                 {[
                   { icon: <Brain />, title: 'Autonomous Reasoning', desc: 'Designing systems that think for themselves, reducing human overhead.' },
                   { icon: <Rocket />, title: 'Rapid Deployment', desc: 'Speed without sacrificing stability. Moving at the pace of business.' },
                   { icon: <Heart />, title: 'Ethical Engineering', desc: 'Building tech that serves humanity and promotes digital equity.' }
                 ].map((ethos, i) => (
                   <div key={i} className="flex gap-6">
                     <div className="text-cyan-400 mt-1">{ethos.icon}</div>
                     <div>
                       <h4 className="text-xl font-bold mb-2">{ethos.title}</h4>
                       <p className="text-sm text-slate-400 leading-relaxed font-medium">{ethos.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
