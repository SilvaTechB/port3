
import React from 'react';
import { 
  Server, 
  Cpu, 
  MessageSquare, 
  Globe, 
  Wifi, 
  Code, 
  ShieldCheck, 
  Zap,
  TrendingUp,
  Award,
  BookOpen
} from 'lucide-react';
import { Service, Project, BlogPost, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'hosting',
    title: 'Pterodactyl Panel Solutions',
    description: 'Enterprise-grade hosting management for high-performance applications.',
    icon: 'server',
    category: 'hosting',
    benefits: ['Automated Deployment', 'DDoS Protection', 'Resource Optimization', '24/7 Monitoring'],
    longDescription: 'Silva Tech Nexus provides specialized Pterodactyl panel installations and maintenance. We focus on latency reduction for East African users, ensuring your gaming servers or applications run with peak performance.'
  },
  {
    id: 'whatsapp-bots',
    title: 'WhatsApp Automation',
    description: 'Custom intelligent bots for business communication and customer support.',
    icon: 'message',
    category: 'automation',
    benefits: ['24/7 Availability', 'Seamless CRM Integration', 'Interactive Menus', 'Automated Ticketing'],
    longDescription: 'Leverage the power of AI on the worlds most popular messaging platform. Our bots handle everything from sales inquiries to complex database lookups, giving your brand a human-like digital presence.'
  },
  {
    id: 'web-systems',
    title: 'Full-Stack Web Systems',
    description: 'Scalable web applications built with modern frameworks for modern needs.',
    icon: 'globe',
    category: 'web',
    benefits: ['Responsive Design', 'SEO Optimized', 'API First Architecture', 'High Security'],
    longDescription: 'From corporate landing pages to complex e-commerce engines, we build web solutions that solve real business problems. We specialize in React, Next.js, and high-performance backend systems.'
  },
  {
    id: 'networking',
    title: 'Network & Wi-Fi Solutions',
    description: 'Optimized network architecture for homes, offices, and large-scale facilities.',
    icon: 'wifi',
    category: 'networking',
    benefits: ['Zero Dead Zones', 'Managed Security', 'High Bandwidth', 'Scalable Mesh'],
    longDescription: 'We design and deploy robust networking solutions using Mikrotik and Ubiquiti hardware. Whether it is a home mesh system or an ISP-grade deployment, we ensure reliability is the baseline.'
  }
];

export interface DetailedProject extends Project {
  problem: string;
  solution: string;
  results: string[];
}

export const PROJECTS: DetailedProject[] = [
  {
    id: 'p1',
    title: 'Nexus Cloud Dashboard',
    category: 'Cloud Management',
    description: 'A centralized dashboard for managing multiple server instances with real-time analytics.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'Node.js', 'Redis', 'Docker'],
    problem: 'Clients had fragmented server management across different providers with no central view of metrics.',
    solution: 'Built a unified API-driven dashboard using Docker monitoring tools and real-time socket communication.',
    results: ['40% reduction in management time', 'Instant alerting on resource spikes', 'Unified billing system']
  },
  {
    id: 'p2',
    title: 'SilvaBot Pro',
    category: 'Automation',
    description: 'The premier WhatsApp automation tool for Kenyan retailers, handling 10k+ messages daily.',
    imageUrl: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800',
    tech: ['TypeScript', 'Puppeteer', 'OpenAI', 'PostgreSQL'],
    problem: 'Local retailers were overwhelmed by customer inquiries on WhatsApp, leading to missed sales.',
    solution: 'Developed a custom WhatsApp-web automation engine integrated with OpenAI for natural language handling.',
    results: ['95% automation of initial inquiries', '20% increase in lead conversion', 'Seamless handoff to human agents']
  },
  {
    id: 'p3',
    title: 'TechHub Mesh',
    category: 'Networking',
    description: 'A large-scale Wi-Fi deployment for a multi-story innovation hub in Nairobi.',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
    tech: ['Mikrotik', 'Ubiquiti', 'Fiber Optics'],
    problem: 'Frequent dropouts and dead zones in a 5-story building housing 50+ startups.',
    solution: 'Designed a hybrid mesh-star topology using Mikrotik routers and Ubiquiti AC-Pro access points.',
    results: ['Zero dead zones reported', '500+ concurrent user support', 'Segmented guest/admin networks']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Future of Pterodactyl Hosting in Kenya',
    slug: 'future-pterodactyl-kenya',
    excerpt: 'How localized server clusters are changing the landscape for Kenyan developers.',
    date: '2024-05-15',
    author: 'Sylivanus Momanyi',
    content: 'Full article content here about low latency and local server management. We are deploying specialized nodes in Nairobi to ensure under 20ms latency for local applications.'
  },
  {
    id: 'b2',
    title: 'Why Your Business Needs a WhatsApp Bot in 2024',
    slug: 'whatsapp-bot-2024',
    excerpt: 'Automation is no longer a luxury; it is a necessity for scaling customer service.',
    date: '2024-05-10',
    author: 'Sylivanus Momanyi',
    content: 'In the fast-paced Kenyan market, response time is everything. Our latest bots use advanced NLP to categorize inquiries and resolve common issues instantly.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Kevin Omolo',
    role: 'CTO',
    company: 'Nairobi Gaming Hub',
    content: 'The Pterodactyl setup provided by Silva Tech Nexus is flawless. Latency dropped by 60%, and the automation saved us countless hours.',
    avatar: 'https://i.pravatar.cc/150?u=kevin'
  },
  {
    id: 't2',
    name: 'Sarah Wambui',
    role: 'Operations Manager',
    company: 'Soko Digital',
    content: 'Our WhatsApp bot handles thousands of inquiries monthly now. The integration was seamless and the support is world-class.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  }
];

export const ICONS = {
  server: <Server className="w-6 h-6" />,
  message: <MessageSquare className="w-6 h-6" />,
  globe: <Globe className="w-6 h-6" />,
  wifi: <Wifi className="w-6 h-6" />,
  cpu: <Cpu className="w-6 h-6" />,
  code: <Code className="w-6 h-6" />,
  shield: <ShieldCheck className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
  trending: <TrendingUp className="w-6 h-6" />,
  award: <Award className="w-6 h-6" />,
  book: <BookOpen className="w-6 h-6" />
};
