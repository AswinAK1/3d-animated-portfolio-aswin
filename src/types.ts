export interface SkillItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags?: string[];
}

export type ServiceItem = SkillItem;

export interface SpecializedDomain {
  id: string;
  title: string;
  badge: string;
  description: string;
  skills: string[];
  icon: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  type: string;
  col1TopImage: string;
  col1BottomImage: string;
  col2Image: string;
  logo?: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
  highlights?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  period: string;
  location?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  label: string;
  iconName?: string;
}
