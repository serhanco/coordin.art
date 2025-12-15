import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface Certification {
  id: string;
  name: string;
}