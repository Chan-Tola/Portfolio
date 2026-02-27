import type { Project } from "@/domains/types";

export const projects: Project[] = [
  {
    slug: "scan-attendance-system",
    title: "Scan Attendance System",
    tagline: "Real-time attendance tracking with QR code scanning for enterprise use",
    role: "Backend Developer",
    stack: ["Laravel", "FastAPI", "PostgreSQL", "Vue.js", "Docker", "Nginx"],
    highlights: [
      "Designed DDD-based architecture with clear bounded contexts",
      "Implemented RBAC with fine-grained permissions",
      "Built microservices communication layer",
      "Achieved 99.9% uptime in production",
      "Optimized database queries reducing response time by 60%",
    ],
    problem:
      "The client needed a scalable attendance system that could handle thousands of concurrent scans while maintaining data integrity and providing real-time reporting.",
    solution:
      "Built a microservices architecture using Laravel for the main API, FastAPI for real-time processing, and Vue.js dashboard. Implemented event-driven architecture for real-time updates and used PostgreSQL with optimized indexes for fast queries.",
    architecture: [
      "Laravel API Gateway with DDD structure",
      "FastAPI microservice for QR processing",
      "PostgreSQL with read replicas",
      "Redis for caching and session management",
      "Docker Compose for local development",
      "Nginx reverse proxy with SSL termination",
    ],
    screenshots: ["/images/projects/scan-attendance-1.png"],
    links: {
      github: "https://github.com/yourusername/scan-attendance",
      demo: "https://demo.scanattendance.com",
    },
    date: "2025-12",
    status: "Production",
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    tagline: "Full-featured online store with payment integration and inventory management",
    role: "Full-Stack Developer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    highlights: [
      "Built responsive storefront with Next.js App Router",
      "Integrated Stripe payment processing",
      "Implemented real-time inventory tracking",
      "SEO-optimized with dynamic meta tags",
      "Achieved 95+ Lighthouse performance score",
    ],
    problem:
      "Client needed a modern e-commerce solution that could handle high traffic during sales events while providing excellent user experience on all devices.",
    solution:
      "Developed a Next.js application with server-side rendering for SEO, integrated Stripe for secure payments, and built a custom inventory management system with real-time stock updates.",
    architecture: [
      "Next.js 14 with App Router",
      "PostgreSQL for data persistence",
      "Stripe webhooks for payment events",
      "Vercel Edge Functions for API routes",
      "Cloudinary for image optimization",
    ],
    screenshots: ["/images/projects/ecommerce-1.png"],
    links: {
      demo: "https://demo.ecommerce-project.com",
    },
    date: "2024-08",
    status: "Freelance",
  },
  {
    slug: "business-landing-page",
    title: "Business Landing Page",
    tagline: "High-converting landing page for a tech startup",
    role: "Frontend Developer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Designed and built pixel-perfect responsive UI",
      "Implemented smooth scroll animations",
      "Integrated contact form with email notifications",
      "Optimized Core Web Vitals scores",
      "Deployed with CI/CD pipeline",
    ],
    problem:
      "Startup needed a professional web presence that could effectively communicate their value proposition and convert visitors into leads.",
    solution:
      "Created a visually stunning landing page with attention-grabbing animations, clear CTAs, and optimized performance for fast loading times.",
    architecture: [
      "Next.js static generation",
      "Tailwind CSS for styling",
      "Framer Motion for animations",
      "Resend for email delivery",
      "Vercel for hosting",
    ],
    screenshots: ["/images/projects/landing-1.png"],
    links: {
      demo: "https://demo.business-landing.com",
    },
    date: "2024-05",
    status: "Freelance",
  },
  {
    slug: "inventory-management-system",
    title: "Inventory Management System",
    tagline: "Comprehensive inventory tracking for warehouse operations",
    role: "Full-Stack Developer (Intern)",
    stack: ["React.js", "Laravel", "PostgreSQL", "REST API"],
    highlights: [
      "Built complete CRUD operations for inventory items",
      "Implemented barcode scanning integration",
      "Created reporting dashboard with charts",
      "Developed role-based access control",
      "Wrote comprehensive API documentation",
    ],
    problem:
      "The organization needed to digitize their manual inventory tracking process to reduce errors and improve efficiency.",
    solution:
      "Developed a full-stack application with React frontend and Laravel backend, featuring real-time inventory updates, barcode scanning, and comprehensive reporting.",
    architecture: [
      "React.js SPA with Redux",
      "Laravel REST API",
      "PostgreSQL database",
      "JWT authentication",
      "Chart.js for visualizations",
    ],
    screenshots: ["/images/projects/inventory-1.png"],
    links: {
      github: "https://github.com/yourusername/inventory-system",
    },
    date: "2025-03",
    status: "Internship",
  },
  {
    slug: "iot-monitoring-dashboard",
    title: "IoT Monitoring Dashboard",
    tagline: "Real-time sensor data visualization for robotics projects",
    role: "Developer & Trainer",
    stack: ["Python", "Flask", "MQTT", "Chart.js", "Raspberry Pi"],
    highlights: [
      "Built real-time data streaming with MQTT",
      "Created interactive visualization dashboard",
      "Integrated multiple sensor types",
      "Developed training curriculum for students",
      "Deployed on Raspberry Pi edge devices",
    ],
    problem:
      "STEM education program needed a way to visualize sensor data from robotics projects in real-time for teaching purposes.",
    solution:
      "Created a lightweight Flask application that subscribes to MQTT topics from IoT devices and displays real-time charts, used as a teaching tool for robotics and IoT concepts.",
    architecture: [
      "Flask web server",
      "MQTT broker for IoT communication",
      "WebSocket for real-time updates",
      "Chart.js for visualizations",
      "Raspberry Pi deployment",
    ],
    screenshots: ["/images/projects/iot-dashboard-1.png"],
    links: {
      github: "https://github.com/yourusername/iot-dashboard",
    },
    date: "2024-02",
    status: "Personal",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(count: number = 4): Project[] {
  return projects.slice(0, count);
}

export function getProjectsByStatus(status: Project["status"]): Project[] {
  return projects.filter((project) => project.status === status);
}
