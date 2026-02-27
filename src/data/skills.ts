import type { SkillCategory } from "@/domains/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    icon: "server",
    skills: [
      { name: "Laravel", level: "Advanced" },
      { name: "FastAPI", level: "Advanced" },
      { name: "Node.js", level: "Intermediate" },
      { name: "Python", level: "Advanced" },
      { name: "PHP", level: "Advanced" },
      { name: "REST APIs", level: "Expert" },
      { name: "GraphQL", level: "Intermediate" },
    ],
  },
  {
    category: "Frontend",
    icon: "layout",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "Vue.js", level: "Intermediate" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "HTML/CSS", level: "Expert" },
      { name: "JavaScript", level: "Advanced" },
    ],
  },
  {
    category: "Database",
    icon: "database",
    skills: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "Redis", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Database Design", level: "Advanced" },
      { name: "Query Optimization", level: "Advanced" },
    ],
  },
  {
    category: "DevOps & Infrastructure",
    icon: "cloud",
    skills: [
      { name: "Docker", level: "Advanced" },
      { name: "Nginx", level: "Advanced" },
      { name: "Linux", level: "Advanced" },
      { name: "Git", level: "Expert" },
      { name: "CI/CD", level: "Intermediate" },
      { name: "Jenkins", level: "Beginner" },
      { name: "Ansible", level: "Beginner" },
      { name: "Terraform", level: "Beginner" },
    ],
  },
  {
    category: "Architecture & Patterns",
    icon: "boxes",
    skills: [
      { name: "DDD", level: "Advanced" },
      { name: "Microservices", level: "Intermediate" },
      { name: "RBAC", level: "Advanced" },
      { name: "Clean Architecture", level: "Advanced" },
      { name: "API Design", level: "Advanced" },
      { name: "System Design", level: "Intermediate" },
    ],
  },
];

export function getSkillsByCategory(
  category: string,
): SkillCategory | undefined {
  return skillCategories.find((cat) => cat.category === category);
}

export function getAllSkillNames(): string[] {
  return skillCategories.flatMap((cat) =>
    cat.skills.map((skill) => skill.name),
  );
}
