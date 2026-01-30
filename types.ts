
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  category: 'hosting' | 'automation' | 'web' | 'networking';
  longDescription: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tech: string[];
  link?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  slug: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}
