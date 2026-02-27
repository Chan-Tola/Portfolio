import { Section } from "@/shared/components/Section";
import { siteConfig } from "@/shared/config/site";

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl mx-auto">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-muted">
            I&apos;m a fourth-year Information Technology student at{" "}
            <strong className="text-foreground">{siteConfig.author.university}</strong>, 
            expected to graduate in {siteConfig.author.graduationYear}. My journey in 
            software development has been focused on building{" "}
            <strong className="text-foreground">production-ready backend systems</strong>{" "}
            that are scalable, maintainable, and secure.
          </p>
          <p className="text-lg leading-relaxed text-muted mt-4">
            Currently, I work as a <strong className="text-foreground">Backend Developer 
            at Techey Solution</strong>, where I architect systems using{" "}
            <strong className="text-foreground">Domain-Driven Design (DDD)</strong> principles 
            and microservices architecture. I work extensively with Laravel, FastAPI, 
            PostgreSQL, and Vue.js, while also handling DevOps tasks including Docker 
            containerization and Nginx configuration.
          </p>
          <p className="text-lg leading-relaxed text-muted mt-4">
            Beyond backend development, I have experience as a{" "}
            <strong className="text-foreground">freelance frontend developer</strong>, 
            delivering production web applications using Next.js and TypeScript. I&apos;ve 
            also worked as a <strong className="text-foreground">STEM trainer</strong>, 
            teaching robotics and Python programming to students, which has strengthened 
            my ability to communicate complex technical concepts clearly.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-lg bg-secondary">
            <div className="text-2xl font-bold text-accent">2+</div>
            <div className="text-sm text-muted">Years Experience</div>
          </div>
          <div className="p-4 rounded-lg bg-secondary">
            <div className="text-2xl font-bold text-accent">5+</div>
            <div className="text-sm text-muted">Projects Delivered</div>
          </div>
          <div className="p-4 rounded-lg bg-secondary">
            <div className="text-2xl font-bold text-accent">50+</div>
            <div className="text-sm text-muted">Students Trained</div>
          </div>
          <div className="p-4 rounded-lg bg-secondary">
            <div className="text-2xl font-bold text-accent">3</div>
            <div className="text-sm text-muted">Production Systems</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
