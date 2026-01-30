
import React, { useState, useEffect } from 'react';
import { Send, Phone, MessageSquare, Mail, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [isTouched, setIsTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Errors = {};
    if (formState.name.length < 2) newErrors.name = 'Name is too short (min 2 chars).';
    if (!/^\S+@\S+\.\S+$/.test(formState.email)) newErrors.email = 'Invalid email address.';
    if (formState.message.length < 10) newErrors.message = 'Please provide more details (min 10 chars).';
    setErrors(newErrors);
  };

  useEffect(() => {
    validate();
  }, [formState]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setIsTouched({});
    } else {
      setIsTouched({ name: true, email: true, message: true });
    }
  };

  const handleBlur = (field: string) => {
    setIsTouched(prev => ({ ...prev, [field]: true }));
  };

  return (
    <div className="w-full pt-40 pb-32">
      <SEO 
        title="Contact Silva Tech Nexus" 
        description="Connect with Sylivanus Momanyi for professional tech solutions in Kenya. Inquire about hosting, automation, and system architecture." 
      />
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase">Initiate <br/><span className="text-cyan-400">Connection.</span></h1>
              <p className="text-xl text-slate-400 mb-12 font-light leading-relaxed">
                Whether you have a specific project in mind or just want to explore the possibilities of tech automation, our systems are ready to receive your transmission.
              </p>

              <div className="space-y-8">
                {[
                  { icon: <Mail />, title: 'Direct Protocol', info: 'hello@silvatechnexus.com', sub: 'Primary encrypted channel' },
                  { icon: <MessageSquare />, title: 'WhatsApp Node', info: '+254 700 000 000', sub: 'Real-time automation support' },
                  { icon: <MapPin />, title: 'Base Location', info: 'Nairobi, Kenya', sub: 'Regional Innovation Hub' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-6 group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-cyan-400 border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-slate-500 mb-1">{item.title}</h4>
                      <p className="text-white text-2xl font-black mb-1">{item.info}</p>
                      <p className="text-slate-500 text-sm font-medium">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 border border-white/5 p-10 md:p-14 rounded-[40px] shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-600/5 blur-[50px] rounded-full"></div>
               
               {submitted ? (
                 <div className="h-[500px] flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
                   <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-8 border border-green-500/20">
                     <CheckCircle2 size={48} />
                   </div>
                   <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">Transmission Successful</h3>
                   <p className="text-slate-400 font-medium">Sylivanus will process your inquiry and respond via the provided protocol within 12 cycles.</p>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-1">Identity</label>
                       <input 
                         type="text" 
                         required
                         onBlur={() => handleBlur('name')}
                         className={`w-full bg-white/5 border ${isTouched.name && errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-2xl py-5 px-6 text-sm focus:outline-none focus:border-cyan-500 transition-all font-bold`}
                         placeholder="Your Name"
                         value={formState.name}
                         onChange={(e) => setFormState({...formState, name: e.target.value})}
                       />
                       {isTouched.name && errors.name && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1 flex items-center"><AlertCircle size={10} className="mr-1"/> {errors.name}</p>}
                     </div>
                     <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-1">Email Node</label>
                       <input 
                         type="email" 
                         required
                         onBlur={() => handleBlur('email')}
                         className={`w-full bg-white/5 border ${isTouched.email && errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-2xl py-5 px-6 text-sm focus:outline-none focus:border-cyan-500 transition-all font-bold`}
                         placeholder="email@example.com"
                         value={formState.email}
                         onChange={(e) => setFormState({...formState, email: e.target.value})}
                       />
                       {isTouched.email && errors.email && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1 flex items-center"><AlertCircle size={10} className="mr-1"/> {errors.email}</p>}
                     </div>
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-1">Priority Subject</label>
                     <select 
                       className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-sm focus:outline-none focus:border-cyan-500 transition-all appearance-none font-bold text-slate-300"
                       value={formState.subject}
                       onChange={(e) => setFormState({...formState, subject: e.target.value})}
                     >
                       <option value="" className="bg-slate-900">Select Department</option>
                       <option value="hosting" className="bg-slate-900">Pterodactyl & Server Architecture</option>
                       <option value="bots" className="bg-slate-900">WhatsApp AI Automation</option>
                       <option value="web" className="bg-slate-900">Full-Stack Development</option>
                       <option value="networking" className="bg-slate-900">Enterprise Networking</option>
                     </select>
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-1">Technical Brief</label>
                     <textarea 
                       required
                       rows={6}
                       onBlur={() => handleBlur('message')}
                       className={`w-full bg-white/5 border ${isTouched.message && errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-2xl py-5 px-6 text-sm focus:outline-none focus:border-cyan-500 transition-all font-bold`}
                       placeholder="Describe your requirements..."
                       value={formState.message}
                       onChange={(e) => setFormState({...formState, message: e.target.value})}
                     ></textarea>
                     {isTouched.message && errors.message && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1 flex items-center"><AlertCircle size={10} className="mr-1"/> {errors.message}</p>}
                   </div>
                   <button 
                     type="submit" 
                     className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-black py-6 rounded-2xl shadow-xl transition-all flex items-center justify-center space-x-4 group uppercase tracking-widest text-sm"
                   >
                     <span>Send Message</span>
                     <Send size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                   </button>
                 </form>
               )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
