import { ProjectList } from "@/features/projects/ProjectList";
import { Container } from "@/shared/components/Container";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of my recent production systems, freelance work, and personal projects.",
};

export default function ProjectsPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Projects
          </h1>
          <p className="text-lg text-muted max-w-2xl">
            A showcase of my recent production systems, freelance work, and 
            personal projects focusing on backend architecture and full-stack development.
          </p>
        </div>
        
        <ProjectList projects={projects} />
      </Container>
    </div>
  );
}
