export interface Project {
  slug: string;
  title: string;
  description: string;
  publishDate: Date;
  featured: boolean;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  technologies: string[];
}

export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  email: string;
  social: SocialLinks;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
}
