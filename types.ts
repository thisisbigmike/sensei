
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  longDescription?: string;
  link?: string;
  tags: string[];
  imageUrl: string;
  demoImage?: string;
  gallery?: string[];
}

export interface Service {
  id: string;
  title: string;
  items: string[];
  icon: 'growth' | 'team' | 'viral' | 'engagement';
}

export interface SocialLink {
  platform: string;
  handle: string;
  url: string;
  icon: 'twitter' | 'discord' | 'telegram';
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  imageUrl?: string;
  link?: string;
  tags?: string[];
  stats: string[];
  highlight?: boolean;
  demoImage?: string;
  gallery?: string[];
}

export interface Testimonial {
  id?: string;
  name?: string;
  role?: string;
  company?: string;
  content: string;
  image?: string;
  testimonialImage?: string;
}
