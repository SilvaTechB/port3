
import React from 'react';
import { Twitter, Linkedin, Github, Send, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-cyan-600 rounded flex items-center justify-center font-bold text-white">S</div>
              <span className="font-bold text-xl">Silva Tech Nexus</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Pioneering intelligent tech solutions in Kenya. From robust hosting to seamless automation, we build the systems that power tomorrow.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Linkedin, Github, Send].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-100">Specializations</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#/services" className="hover:text-cyan-400 transition-colors">Pterodactyl Panels</a></li>
              <li><a href="#/services" className="hover:text-cyan-400 transition-colors">WhatsApp Bot Ecosystems</a></li>
              <li><a href="#/services" className="hover:text-cyan-400 transition-colors">Network Architecture</a></li>
              <li><a href="#/services" className="hover:text-cyan-400 transition-colors">Custom Web Platforms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-100">The Brand</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#/founder" className="hover:text-cyan-400 transition-colors">Founder Story</a></li>
              <li><a href="#/nexus" className="hover:text-cyan-400 transition-colors">Company Values</a></li>
              <li><a href="#/projects" className="hover:text-cyan-400 transition-colors">Latest Projects</a></li>
              <li><a href="#/updates" className="hover:text-cyan-400 transition-colors">Updates & News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-100">Stay Updated</h4>
            <p className="text-sm text-slate-400 mb-4">Join our tech newsletter for insights and discounts.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button className="absolute right-2 top-2 h-8 w-8 bg-cyan-600 rounded flex items-center justify-center text-white hover:bg-cyan-500 transition-colors">
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 text-xs text-slate-500 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Silva Tech Nexus. Built with precision by Sylivanus Momanyi.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
