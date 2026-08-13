import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "light" | "muted" | "ink";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative px-5 py-20 sm:px-8 md:py-28",
        tone === "light" && "bg-background text-foreground",
        tone === "muted" && "bg-card text-foreground",
        tone === "ink" && "bg-ink text-ink-foreground",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "ink" }) {
  return (
    <p
      className={cn(
        "eyebrow flex items-center gap-3",
        tone === "ink" ? "text-ink-muted" : "text-muted-foreground",
      )}
    >
      <span className="inline-block h-px w-8 bg-primary" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "mt-5 max-w-4xl text-balance text-3xl font-bold uppercase leading-[1.05] sm:text-4xl md:text-5xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function SectionLead({
  children,
  className,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "ink";
}) {
  return (
    <p
      className={cn(
        "mt-5 max-w-2xl text-base leading-relaxed sm:text-lg",
        tone === "ink" ? "text-ink-muted" : "text-muted-foreground",
        className,
      )}
    >
      {children}
    </p>
  );
}
