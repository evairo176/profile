import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface TimelineItem {
  id: string | number;
  date: string;
  title: string;
  company: string;
  description: string;
  technologies?: string[];
  image?: string;
  status?: "current" | "past";
  icon?: React.ReactNode;
  statusLabels?: {
    current: string;
    previous: string;
  };
  technologiesLabel?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({ items, className }) => {
  return (
    <div className={cn("relative", className)}>
      {/* Timeline Line */}
      <div className="bg-primary absolute top-0 bottom-0 left-4 w-0.5 transform md:left-1/2 md:-translate-x-1/2"></div>

      {/* Timeline Items */}
      <div className="space-y-8">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={cn(
                "relative flex items-start",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
              )}
            >
              {/* Timeline Dot with Icon */}
              <div className="bg-primary border-background absolute left-4 z-10 flex h-12 w-12 -translate-x-1/2 transform items-center justify-center rounded-full border-4 md:left-1/2">
                {item.icon ? (
                  <div className="text-background flex items-center justify-center">
                    {item.icon} {/* ✅ langsung render node */}
                  </div>
                ) : (
                  <div className="bg-primary/60 absolute inset-1 animate-pulse rounded-full"></div>
                )}
              </div>

              {/* Content */}
              <div
                className={cn(
                  "ml-12 flex-1 md:ml-0",
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8",
                )}
              >
                <Card className="border-border border pt-0 shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  {item.image && (
                    <div className="relative h-48 w-full overflow-hidden md:rounded-t-lg">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <Badge
                        variant={
                          item.status === "current" ? "default" : "secondary"
                        }
                      >
                        {item.status === "current"
                          ? item.statusLabels?.current || "Current"
                          : item.statusLabels?.previous || "Previous"}
                      </Badge>
                      <span className="text-muted-foreground text-sm font-medium">
                        {item.date}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      {item.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    {item.technologies && item.technologies.length > 0 && (
                      <div>
                        <h4 className="mb-2 text-sm font-semibold">
                          {item.technologiesLabel || "Technologies:"}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden flex-1 md:block"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Timeline, type TimelineItem };
