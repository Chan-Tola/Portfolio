import {
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/shared/components/Container";
import { Badge } from "@/shared/components/Badge";
import { Button } from "@/shared/components/Button";
import { formatDate } from "@/shared/lib/utils";
import type { Project } from "@/domains/types";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="py-16 md:py-24">
      <Container>
        <Link
          href="/projects"
          className="inline-flex items-center text-sm font-medium text-muted hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="success">{project.status}</Badge>
            <span className="text-sm text-muted flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              {formatDate(project.date)}
            </span>
            <span className="text-sm text-muted flex items-center">
              <Layers className="mr-1 h-4 w-4" />
              {project.role}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-muted max-w-3xl leading-relaxed">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            {project.links.demo && (
              <Button as="link" href={project.links.demo} external>
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            )}
            {project.links.github && (
              <Button
                as="link"
                href={project.links.github}
                external
                variant="outline"
              >
                <Github className="mr-2 h-4 w-4" />
                Source Code
              </Button>
            )}
          </div>
        </header>

        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">The Problem</h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">{project.problem}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Solution</h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">{project.solution}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                Key Features & Highlights
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Architecture</h2>
              <ul className="space-y-3">
                {project.architecture.map((arch, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-border flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">
                      {arch}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="p-6 rounded-xl bg-secondary/30 border border-border">
              <h3 className="font-semibold mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </article>
  );
}
