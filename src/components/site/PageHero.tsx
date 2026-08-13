import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink px-5 py-20 text-ink-foreground sm:px-8 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines-ink opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl">
        <p className="eyebrow flex items-center gap-3 text-ink-muted">
          <span className="inline-block h-px w-8 bg-primary" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-4xl text-balance text-4xl font-bold uppercase leading-[1.03] sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {lead ? <p className="mt-6 max-w-2xl text-lg text-ink-muted">{lead}</p> : null}
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
