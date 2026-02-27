import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/shared/components/Section";
import { Button } from "@/shared/components/Button";
import { Badge } from "@/shared/components/Badge";
import { getFeaturedProjects } from "@/data/projects";

const statusColors: Record<string, "default" | "secondary" | "success" | "warning"> = {
  Production: "success",
  Freelance: "default",
  Internship: "warning",
  Personal: "secondary",
};

export function FeaturedProjects() {
  const projects = getFeaturedProjects(4);

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="A selection of projects I've worked on"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block p-6 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted">{project.role}</p>
              </div>
              <Badge variant={statusColors[project.status]}>
                {project.status}
              </Badge>
            </div>
            <p className="text-muted text-sm mb-4 line-clamp-2">
              {project.tagline}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.stack.length > 4 && (
                <Badge variant="secondary" className="text-xs">
                  +{project.stack.length - 4}
                </Badge>
              )}
            </div>
            <div className="flex items-center text-sm text-accent font-medium">
              View Details
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button as="link" href="/projects" variant="outline">
          View All Projects
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Section>
  );
}
