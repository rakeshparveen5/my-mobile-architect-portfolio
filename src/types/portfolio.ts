export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  github?: string;
  linkedin?: string;
  stackoverflow?: string;
}

export interface Skill {
  name: string;
  category: 'native' | 'cross-platform' | 'language' | 'tools' | 'backend';
  icon?: string;
  years?: number;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export interface Project {
  name: string;
  description: string;
  period: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  pdpUrl?: string;
  playstoreUrl?: string;
  appStoreUrl?: string;
  webUrl?: string;
  image?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
  credentialId?: string;
}
