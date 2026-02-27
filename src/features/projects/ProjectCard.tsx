import Link from "next/link";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Badge } from "@/shared/components/Badge";
import type { Project } from "@/domains/types";

const statusColors: Record<string, "default" | "secondary" | "success" | "warning"> = {
  Production: "success",
  Freelance: "default",
  Internship: "warning",
  Personal: "secondary",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col h-full rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all overflow-hidden">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="font-semibold text-xl group-hover:text-accent transition-colors">
              <Link href={`/projects/${project.slug}`}>
                {project.title}
              </Link>
            </h3>
            <p className="text-sm font-medium text-muted mt-1">{project.role}</p>
          </div>
          <Badge variant={statusColors[project.status]}>
            {project.status}
          </Badge>
        </div>
        
        <p className="text-muted text-sm mb-6 flex-1">
          {project.tagline}
        </p>

        <div className="space-y-6 mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.stack.length > 5 && (
              <Badge variant="secondary" className="text-xs">
                +{project.stack.length - 5}
              </Badge>
            )}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <Link 
              href={`/projects/${project.slug}`}
              className="inline-flex items-center text-sm text-accent font-medium hover:text-accent/80 transition-colors"
            >
              View Case Study
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <div className="flex items-center gap-3 text-muted-foreground">
              {project.links.github && (
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                  aria-label="View source on GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
              {project.links.demo && (
                <a 
                  href={project.links.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                  aria-label="View live demo"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
