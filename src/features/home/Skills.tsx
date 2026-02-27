import { Server, Layout, Database, Cloud, Boxes } from "lucide-react";
import { Section } from "@/shared/components/Section";
import { Badge } from "@/shared/components/Badge";
import { skillCategories } from "@/data/skills";
import { cn } from "@/shared/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  server: Server,
  layout: Layout,
  database: Database,
  cloud: Cloud,
  boxes: Boxes,
};

const levelColors: Record<string, string> = {
  Beginner: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  Intermediate: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Advanced: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  Expert: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
};

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills & Technologies"
      subtitle="Technologies I work with on a daily basis"
      className="bg-secondary/30"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => {
          const Icon = iconMap[category.icon] || Server;
          return (
            <div
              key={category.category}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-semibold">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className={cn(levelColors[skill.level])}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-purple-500" />
          Expert
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-500" />
          Advanced
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-500" />
          Intermediate
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gray-500" />
          Beginner
        </div>
      </div>
    </Section>
  );
}
