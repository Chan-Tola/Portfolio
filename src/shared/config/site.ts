export const siteConfig = {
  name: "Portfolio",
  title: "Backend-Focused Full-Stack Developer",
  description:
    "Fourth-year IT student specializing in backend development with production experience in Laravel, FastAPI, PostgreSQL, and modern DevOps practices.",
  url: "https://yourportfolio.com",
  ogImage: "/og.png",
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "your.email@example.com",
  },
  author: {
    name: "Your Name",
    role: "Backend-Focused Full-Stack Developer",
    location: "Phnom Penh, Cambodia",
    university: "Royal University of Phnom Penh (RUPP)",
    graduationYear: "2026",
  },
} as const;

export type SiteConfig = typeof siteConfig;
