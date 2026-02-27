# Portfolio - Backend-Focused Full-Stack Developer

This is my personal portfolio website showcasing my skills, experience, and projects as a backend-focused full-stack developer. Built with Next.js, TypeScript, and Tailwind CSS following DDD principles.

## About Me

I'm a fourth-year IT student at Royal University of Phnom Penh (RUPP) with production experience in building scalable backend systems using Laravel, FastAPI, PostgreSQL, and modern DevOps practices. This portfolio demonstrates my expertise in:

- **Backend Development**: Laravel, FastAPI, Node.js, REST APIs
- **Frontend Development**: React.js, Next.js, TypeScript, Tailwind CSS
- **Database**: PostgreSQL, MySQL, Redis, MongoDB
- **DevOps & Infrastructure**: Docker, Nginx, CI/CD, Linux
- **Architecture**: DDD, Microservices, Clean Architecture, System Design

## Getting Started

To run the development server:

```bash
npm run dev -- --port 3003
```

Open [http://localhost:3003](http://localhost:3003) with your browser to see the result.

## Project Structure

This project follows a DDD-inspired, feature-based folder structure:

```
src/
├── app/                # Routes only (thin pages)
├── domains/            # Domain models + types + domain logic
├── features/           # Feature modules (projects, experience, contact, home)
├── shared/             # Shared UI components, utilities, hooks, config
├── data/               # Static data sources (projects, experience, skills)
└── styles/             # Global styles
```

## Features

- **Responsive Design**: Works seamlessly on all devices
- **Dark Mode**: Toggle between light and dark themes
- **SEO Optimized**: Meta tags, sitemap, robots.txt, JSON-LD structured data
- **TypeScript**: Full type safety throughout the application
- **Performance**: Optimized images, lazy loading, Core Web Vitals
- **Accessibility**: Keyboard navigation, ARIA labels, good contrast ratios

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository on Vercel
3. Set environment variables if needed
4. Deploy automatically

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Theme**: next-themes
- **Deployment**: Vercel

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
