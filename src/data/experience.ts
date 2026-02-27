import type { Experience } from "@/domains/types";

export const experiences: Experience[] = [
  {
    id: "techey-solution",
    title: "Backend Developer",
    company: "Techey Solution",
    location: "Phnom Penh, Cambodia",
    startDate: "2025-12",
    endDate: "Present",
    description:
      "Building scalable backend systems using DDD principles and microservices architecture for enterprise clients.",
    highlights: [
      "Architecting backend systems using Laravel and FastAPI with DDD patterns",
      "Designing and optimizing PostgreSQL databases for high-performance applications",
      "Implementing RBAC and security best practices across all projects",
      "Setting up Docker-based development and deployment workflows",
      "Configuring Nginx reverse proxy with SSL and load balancing",
      "Collaborating with frontend team on Vue.js dashboard integration",
    ],
    stack: ["Laravel", "FastAPI", "PostgreSQL", "Vue.js", "Docker", "Nginx"],
  },
  {
    id: "freelance",
    title: "Freelance Frontend Developer",
    company: "Self-Employed",
    location: "Remote",
    startDate: "2024-01",
    endDate: "2025-11",
    description:
      "Delivered production-ready web applications for clients using modern frontend technologies.",
    highlights: [
      "Built 2 production web applications using Next.js and TypeScript",
      "Integrated third-party APIs and payment gateways",
      "Implemented responsive designs with Tailwind CSS",
      "Optimized applications for Core Web Vitals and SEO",
      "Managed client relationships and project timelines",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "REST APIs"],
  },
  {
    id: "nicc-intern",
    title: "Full-Stack Developer Intern",
    company: "NICC",
    location: "Phnom Penh, Cambodia",
    startDate: "2025-01",
    endDate: "2025-03",
    description:
      "Developed an inventory management system as part of a 3-month internship program.",
    highlights: [
      "Built complete inventory management system from scratch",
      "Developed React.js frontend with modern UI/UX patterns",
      "Created Laravel REST API with comprehensive documentation",
      "Implemented PostgreSQL database with optimized queries",
      "Participated in code reviews and agile ceremonies",
    ],
    stack: ["React.js", "Laravel", "PostgreSQL", "REST API"],
  },
  {
    id: "stem-trainer",
    title: "STEM Trainer",
    company: "Avishkaar Training Program",
    location: "Phnom Penh, Cambodia",
    startDate: "2023-06",
    endDate: "2024-12",
    description:
      "Taught robotics, Python programming, and IoT concepts to students as part of STEM education initiative.",
    highlights: [
      "Developed curriculum for robotics and Python programming",
      "Trained 50+ students in IoT and embedded systems",
      "Created hands-on projects using Raspberry Pi and sensors",
      "Mentored students in problem-solving and computational thinking",
      "Organized robotics competitions and showcases",
    ],
    stack: ["Python", "Raspberry Pi", "Arduino", "IoT", "Robotics"],
  },
];

export function getExperienceById(id: string): Experience | undefined {
  return experiences.find((exp) => exp.id === id);
}

export function getCurrentExperience(): Experience | undefined {
  return experiences.find((exp) => exp.endDate === "Present");
}
