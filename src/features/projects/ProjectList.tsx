"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/domains/types";
import { cn } from "@/shared/lib/utils";

interface ProjectListProps {
  projects: Project[];
}

const ALL_STATUS = "All";

export function ProjectList({ projects }: ProjectListProps) {
  const [activeFilter, setActiveFilter] = useState<string>(ALL_STATUS);
  
  const statuses = [ALL_STATUS, ...Array.from(new Set(projects.map((p) => p.status)))];
  
  const filteredProjects = activeFilter === ALL_STATUS 
    ? projects 
    : projects.filter((p) => p.status === activeFilter);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => setActiveFilter(status)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
              activeFilter === status
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            {status}
          </button>
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-12 text-muted">
          No projects found for the selected filter.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
