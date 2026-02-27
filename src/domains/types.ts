export interface Project {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  stack: string[];
  highlights: string[];
  problem: string;
  solution: string;
  architecture: string[];
  screenshots: string[];
  links: {
    github?: string;
    demo?: string;
    youtube?: string;
  };
  date: string;
  status: "Production" | "Freelance" | "Internship" | "Personal";
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  highlights: string[];
  stack?: string[];
}

export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}
