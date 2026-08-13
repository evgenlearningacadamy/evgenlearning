import type { ReactNode } from "react";

/** Shared typographic wrapper for legal pages. */
export function LegalBody({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:uppercase [&_h2]:text-foreground [&_h2:first-child]:mt-0">
      {children}
    </div>
  );
}
