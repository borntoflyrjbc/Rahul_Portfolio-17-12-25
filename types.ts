
// FIX: Import ReactNode to resolve the "Cannot find namespace 'React'" error.
import type { ReactNode } from 'react';

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  // FIX: Use imported ReactNode type.
  icon: ReactNode;
  skills: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Service {
  // FIX: Use imported ReactNode type.
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

export enum PortfolioCategory {
  ALL = 'All Work',
  VIDEO_MOTION = 'Video & Motion',
  GRAPHIC = 'Graphics & Design',
  AI = 'AI Creation',
}

export type TagCategory = 'real-estate' | 'event' | 'fashion' | 'corporate' | 'social' | 'motion';

export interface PortfolioProject {
  id: number;
  category: PortfolioCategory;
  image: string;
  title: string;
  description: string;
  tags: string[];
  duration?: string;
  videoUrl?: string;
  tagCategory?: TagCategory;
}
