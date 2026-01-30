
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Founder } from './pages/Founder';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { PterodactylService } from './pages/PterodactylService';
import { ProjectDetail } from './pages/ProjectDetail';
import { ServiceDetail } from './pages/ServiceDetail';
import { BlogDetail } from './pages/BlogDetail';
import { TechBackground } from './components/TechBackground';
import { SEO } from './components/SEO';
import { PROJECTS, BLOG_POSTS } from './constants';

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Pages
const Brand = () => (
  <div className="pt-48 pb-32 container mx-auto px-6">
    <SEO title="Our Brand" description="The story and evolution of Silva Tech Nexus. Innovation driven by technical mastery." />
    <div className="max-w-4xl">
      <h1 className="text-7xl md:text-9xl font-black mb-12 tracking-tighter uppercase leading-none text-slate-900 dark:text-white">The <br/><span className="text-cyan-500">Nexus.</span></h1>
      <div className="space-y-12 text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
        <p>Silva Tech Nexus was founded on a singular principle: <strong className="text-slate-900 dark:text-white font-black italic">Complexity Simplified.</strong></p>
        <p>In a world of rapidly evolving software, we saw a gap. Traditional IT was too slow, too rigid, and disconnected from the needs of the modern visionary. We built the Nexus to serve as an infrastructure bridge.</p>
        <p>Our values are rooted in open-source advocacy, technical resilience, and African innovation. We don't just host servers; we empower the next generation of builders.</p>
      </div>
    </div>
  </div>
);

const ProjectsListing = () => (
  <div className="pt-48 pb-32 container mx-auto px-6">
    <SEO title="Innovation Lab" description="Explore the technical projects and automation solutions deployed by Silva Tech Nexus." />
    <div className="mb-20">
      <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter uppercase leading-none text-slate-900 dark:text-white">Innovation <br/><span className="text-slate-500">Lab.</span></h1>
      <p className="text-2xl text-slate-600 dark:text-slate-400 font-light max-w-2xl">A showcase of successful deployments and technical breakthroughs.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {PROJECTS.map(project => (
        <a href={`#/projects/${project.id}`} key={project.id} className="group relative overflow-hidden rounded-[2.5rem] bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 hover:border-cyan-500/50 transition-all shadow-lg hover:shadow-cyan-500/10">
          <img 
            src={project.imageUrl} 
            loading="lazy"
            className="w-full h-[400px] object-cover opacity-80 dark:opacity-40 group-hover:scale-110 transition-transform duration-1000 grayscale hover:grayscale-0" 
            alt={project.title} 
          />
          <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-white dark:from-slate-950 via-transparent to-transparent">
            <h3 className="text-2xl font-bold mb-2 tracking-tight group-hover:text-cyan-400 transition-colors text-slate-900 dark:text-white">{project.title}</h3>
            <p className="text-[10px] text-cyan-600 dark:text-cyan-400 mb-4 tracking-[0.3em] uppercase font-black">{project.category} // View Case Study</p>
          </div>
        </a>
      ))}
    </div>
  </div>
);

const UpdatesListing = () => (
  <div className="pt-48 pb-32 container mx-auto px-6">
    <SEO title="System Updates" description="Latest technical insights, news, and maintenance logs from Silva Tech Nexus." />
    <h1 className="text-7xl md:text-9xl font-black mb-16 tracking-tighter uppercase leading-none text-slate-900 dark:text-white">System <br/><span className="text-cyan-500">Updates.</span></h1>
    <div className="space-y-12 max-w-4xl">
      {BLOG_POSTS.map((item, i) => (
        <a href={`#/updates/${item.slug}`} key={i} className="block p-10 rounded-[3rem] bg-slate-100 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/5 hover:bg-white dark:hover:bg-slate-900/80 transition-all cursor-pointer group shadow-sm">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-[10px] font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-[0.4em] px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20">LOG // 00{i+1}</span>
            <span className="text-slate-500 text-xs font-bold">{item.date} // 08:00 UTC</span>
          </div>
          <h3 className="text-4xl font-black mb-6 tracking-tight group-hover:text-cyan-400 transition-colors leading-none uppercase text-slate-900 dark:text-white">{item.title}</h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-light">{item.excerpt}</p>
          <div className="flex items-center text-slate-900 dark:text-white font-black text-xs uppercase tracking-widest">
            Execute Read <span className="ml-3 group-hover:translate-x-2 transition-transform duration-500">→</span>
          </div>
        </a>
      ))}
    </div>
  </div>
);

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
      if (typeof window !== 'undefined') {
          return localStorage.getItem('theme') as 'light' | 'dark' || 'dark';
      }
      return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative transition-colors duration-300">
        <TechBackground />
        <Navigation theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/nexus" element={<Brand />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/pterodactyl" element={<PterodactylService />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/projects" element={<ProjectsListing />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/updates" element={<UpdatesListing />} />
            <Route path="/updates/:slug" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
