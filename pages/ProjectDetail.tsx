
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { SEO } from '../components/SEO';
import { ArrowLeft, CheckCircle2, Cpu, Code, Target, BarChart3 } from 'lucide-react';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) return <Navigate to="/projects" />;

  return (
    <div className="w-full pt-40 pb-32">
      <SEO 
        title={`${project.title} Case Study`} 
        description={`Detailed analysis of ${project.title} by Silva Tech Nexus. Solving ${project.category} challenges through innovation.`} 
      />
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <a href="#/projects" className="inline-flex items-center text-cyan-400 font-bold mb-12 group">
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Innovations
          </a>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
            <div>
              <div className="inline-block px-4 py-1 bg-cyan-500/10 rounded-full text-cyan-400 text-[10px] font-black tracking-widest mb-6 uppercase border border-cyan-500/20">
                Case Study: {project.category}
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">{project.title}</h1>
              <p className="text-xl text-slate-300 leading-relaxed font-light mb-12">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-900 border border-white/10 rounded-xl text-xs font-bold text-slate-400 tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
               <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl rounded-[3rem]"></div>
               <img 
                 src={project.imageUrl} 
                 alt={project.title} 
                 className="w-full h-[500px] object-cover rounded-[3rem] border border-white/10 relative z-10 shadow-2xl" 
               />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-slate-900/50 border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 mb-6">
                <Target />
              </div>
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{project.problem}</p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-slate-900/50 border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
                <Code />
              </div>
              <h3 className="text-2xl font-bold mb-4">The Deployment</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{project.solution}</p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-slate-900/50 border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 mb-6">
                <BarChart3 />
              </div>
              <h3 className="text-2xl font-bold mb-4">Key Results</h3>
              <div className="space-y-3">
                {project.results.map((r, i) => (
                  <div key={i} className="flex items-center space-x-3 text-xs text-slate-300 font-bold">
                    <CheckCircle2 size={14} className="text-green-500" />
                    <span>{r}</span>
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
