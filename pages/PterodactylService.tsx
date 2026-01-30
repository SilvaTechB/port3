
import React from 'react';
import { Server, Shield, Zap, Cpu, Terminal, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';

export const PterodactylService: React.FC = () => {
  return (
    <div className="w-full pt-40 pb-32 relative overflow-hidden">
      <SEO 
        title="Pterodactyl Panel Solutions" 
        description="High-performance Pterodactyl hosting in Kenya. Automated deployments, DDoS protection, and expert server management by Silva Tech Nexus." 
      />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-block px-4 py-1 bg-cyan-500/10 rounded-full text-cyan-400 text-[10px] font-black tracking-widest mb-6 uppercase border border-cyan-500/20">
            Enterprise Server Management
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none uppercase">
            Pterodactyl <br/><span className="text-slate-500">Infrastructure</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            Unleash the power of Docker-based hosting with a professional management layer. Built for performance, security, and absolute control.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: <Shield size={32} />, title: 'Hardened Security', desc: 'Isolated Docker containers ensure that one instance never affects another. Multi-layer firewall included.' },
            { icon: <Zap size={32} />, title: 'Zero Latency', desc: 'Optimized server locations in Kenya to ensure the lowest possible ping for East African users.' },
            { icon: <Layers size={32} />, title: 'Scalable Nodes', desc: 'Easily expand your resources as your user base grows. Instant RAM and CPU allocation upgrades.' }
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-all group">
              <div className="text-cyan-500 mb-6 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm font-medium">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Technical Specs Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <h2 className="text-4xl font-black tracking-tight mb-8">System Architecture</h2>
            <div className="space-y-4">
              {[
                'Docker-Powered Application Isolation',
                'Custom Wings Integration & Maintenance',
                'Advanced SFTP & Database Access',
                'Automated Off-site Backups',
                'Resource Monitoring & Analytics'
              ].map((spec, i) => (
                <div key={i} className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="font-bold text-slate-300">{spec}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-950 rounded-[3rem] p-1 border border-white/10 shadow-2xl relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-600/10 blur-[60px] rounded-full"></div>
            <div className="bg-slate-900 rounded-[2.8rem] overflow-hidden">
               <div className="flex items-center space-x-2 px-6 py-4 bg-white/5 border-b border-white/5">
                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 <span className="text-[10px] text-slate-500 ml-4 font-mono uppercase tracking-widest">wings_node_status.log</span>
               </div>
               <div className="p-8 font-mono text-xs text-cyan-400/80 leading-loose overflow-hidden">
                 <p>[INFO] Starting Wings v1.11.3...</p>
                 <p>[INFO] Successfully loaded configuration.</p>
                 <p>[INFO] Connected to internal Docker socket.</p>
                 <p className="text-cyan-400">[INFO] Node status: ONLINE (Latency: 12ms)</p>
                 <p>[INFO] Monitoring 24 active containers.</p>
                 <p>[INFO] CPU: 12% | RAM: 42% | NET: 8.2Gbps</p>
                 <div className="h-4"></div>
                 <p className="animate-pulse">_</p>
               </div>
            </div>
          </div>
        </div>

        {/* Pricing/CTA */}
        <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Deploy Your Infrastructure Today</h2>
          <p className="text-xl text-cyan-50 max-w-2xl mx-auto mb-12 opacity-90">
            Professional setups starting from $15/month. High-availability clusters, custom eggs, and full maintenance included.
          </p>
          <a href="#/contact" className="inline-flex items-center space-x-4 px-12 py-6 bg-white text-slate-900 rounded-2xl font-black shadow-2xl hover:scale-105 transition-transform">
             <span>Request Setup Access</span>
             <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
