
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors font-medium text-sm tracking-wide py-2 px-1"
  >
    {children}
  </a>
);

interface NavigationProps {
  theme?: 'light' | 'dark';
  toggleTheme?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#/' },
    { name: 'Founder', href: '#/founder' },
    { name: 'The Nexus', href: '#/nexus' },
    { name: 'Services', href: '#/services' },
    { name: 'Projects', href: '#/projects' },
    { name: 'Updates', href: '#/updates' },
    { name: 'Contact', href: '#/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-white/5 shadow-xl' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <span className="font-extrabold text-xl text-white">S</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">Silva Tech Nexus</span>
            <span className="text-[10px] text-cyan-600 dark:text-cyan-400 uppercase tracking-[0.2em] font-semibold">Innovation Hub</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a 
            href="#/contact" 
            className="bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-cyan-900/20 transition-all hover:-translate-y-0.5"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button 
            className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </NavLink>
            ))}
            <a 
              href="#/contact" 
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-cyan-600 text-center text-white py-3 rounded-xl font-bold"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
