import { Section } from "@/shared/components/Section";
import { Timeline, TimelineItem } from "@/shared/components/Timeline";
import { Badge } from "@/shared/components/Badge";
import { experiences } from "@/data/experience";

function formatDateRange(startDate: string, endDate: string | "Present"): string {
  const formatMonth = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };
  
  const start = formatMonth(startDate);
  const end = endDate === "Present" ? "Present" : formatMonth(endDate);
  
  return `${start} – ${end}`;
}

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="My professional journey"
      className="bg-secondary/30"
    >
      <div className="max-w-3xl mx-auto">
        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              title={exp.title}
              subtitle={`${exp.company} • ${exp.location}`}
              date={formatDateRange(exp.startDate, exp.endDate)}
              isLast={index === experiences.length - 1}
            >
              <p className="mb-3">{exp.description}</p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                {exp.highlights.slice(0, 4).map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
              {exp.stack && (
                <div className="flex flex-wrap gap-1.5">
                  {exp.stack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </Section>
  );
}
