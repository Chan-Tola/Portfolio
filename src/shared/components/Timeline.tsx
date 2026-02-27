import { cn } from "@/shared/lib/utils";
import { type ReactNode } from "react";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  children: ReactNode;
  isLast?: boolean;
}

export function TimelineItem({
  title,
  subtitle,
  date,
  children,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8">
      {!isLast && (
        <div className="absolute left-[11px] top-6 h-full w-px bg-border" />
      )}
      <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 border-accent bg-background" />
      <div className="space-y-2">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-muted">{subtitle}</p>
          </div>
          <span className="text-sm text-muted whitespace-nowrap">{date}</span>
        </div>
        <div className="text-sm text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

interface TimelineProps {
  children: ReactNode;
  className?: string;
}

export function Timeline({ children, className }: TimelineProps) {
  return <div className={cn("relative", className)}>{children}</div>;
}
