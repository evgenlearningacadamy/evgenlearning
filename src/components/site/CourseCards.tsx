import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookDemoDialog } from "@/components/site/LeadForm";
import { Reveal } from "@/components/site/Reveal";
import { courses, type Course } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const stageAccent: Record<Course["stage"], string> = {
  START: "text-primary",
  BUILD: "text-foreground",
  ADVANCE: "text-primary",
  FLEXIBLE: "text-foreground",
};

export function CourseCard({ course, index = 0 }: { course: Course; index?: number }) {
  const advanced = course.stage === "ADVANCE";
  return (
    <Reveal
      delay={index * 80}
      className={cn(
        "group flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1",
        advanced
          ? "border-ink-border bg-ink text-ink-foreground hover:shadow-[var(--shadow-lift)]"
          : "border-border bg-card shadow-[var(--shadow-card)] hover:border-primary/60 hover:shadow-[var(--shadow-lift)]",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={cn(
            "font-display text-xs font-semibold uppercase tracking-[0.2em]",
            stageAccent[course.stage],
          )}
        >
          {course.index} — {course.stage}
        </span>
        {course.badge ? (
          <span
            className={cn(
              "rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest",
              advanced ? "bg-primary text-primary-foreground" : "bg-foreground text-background",
            )}
          >
            {course.badge}
          </span>
        ) : null}
      </div>

      <h3 className="mt-6 text-2xl font-bold uppercase leading-tight">{course.title}</h3>
      <p
        className={cn(
          "mt-4 text-sm leading-relaxed",
          advanced ? "text-ink-muted" : "text-muted-foreground",
        )}
      >
        {course.summary}
      </p>

      <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-current/10">
        {course.meta.slice(0, 4).map((item) => (
          <div
            key={item.label}
            className={cn("p-3", advanced ? "bg-ink-card" : "bg-secondary")}
          >
            <dt className={cn("text-[0.65rem] uppercase tracking-widest", advanced ? "text-ink-muted" : "text-muted-foreground")}>
              {item.label}
            </dt>
            <dd className="mt-1 font-display text-sm font-semibold">{item.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-7 flex flex-wrap gap-2 pt-1">
        <Button variant={advanced ? "hero" : "hero"} asChild>
          <Link to="/courses/$slug" params={{ slug: course.slug }}>
            Explore Program <ArrowRight />
          </Link>
        </Button>
        <BookDemoDialog defaultProgram={course.title}>
          <Button variant={advanced ? "outlineInk" : "outlineDark"}>Book Free Demo</Button>
        </BookDemoDialog>
      </div>
    </Reveal>
  );
}

export function CourseGrid() {
  return (
    <div className="mt-14 grid gap-6 md:grid-cols-2">
      {courses.map((course, i) => (
        <CourseCard key={course.slug} course={course} index={i} />
      ))}
    </div>
  );
}
