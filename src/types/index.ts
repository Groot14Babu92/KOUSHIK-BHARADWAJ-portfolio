export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  subtext: string;
}

export interface ExpertiseCard {
  id: string;
  number: string;
  title: string;
  iconName: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  competencies: string[];
}

export interface ResearchItem {
  id: string;
  title: string;
  topic: string;
  description: string;
  conferences: {
    name: string;
    year: string;
  }[];
  capabilities: string[];
  paperLinkPlaceholder: string;
  abstract: string;
  tcadDetails: string;
}

export interface SkillCategory {
  title: string;
  description?: string;
  skills: {
    name: string;
    proficiency?: 'Basic' | 'Medium' | 'Good' | 'Intermediate';
    note?: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  focus: string[];
  outcomes: string[];
  tools: string[];
  iconName: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  period: string;
  grade: string;
  highlights?: string[];
}
