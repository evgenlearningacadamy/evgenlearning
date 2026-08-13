import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta } from "@/components/site/FinalCta";
import { insightCategories, insights } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const title = "EV Insights — EV News, Technology & Career Guidance | EVGEN";
const description =
  "Articles on EV technology, battery systems, industry trends and career guidance for learners entering the electric vehicle industry in Kerala and across India.";

export const Route = createFileRoute("/ev-insights")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ev-insights" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ev-insights" }],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? insights : insights.filter((i) => i.category === active);

  return (
    <>
      <PageHero
        eyebrow="EV Insights"
        title="The EV industry is moving fast. Stay updated."
        lead="Short, practical reading on EV technology, batteries, industry trends and career direction."
      />

      <Section>
        <div className="flex flex-wrap gap-2">
          {["All", ...insightCategories].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                active === category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((insight, i) => (
            <Reveal
              key={insight.slug}
              delay={(i % 3) * 70}
              as="article"
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {insight.category}
              </span>
              <h2 className="mt-5 font-display text-xl font-bold leading-snug">{insight.title}</h2>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {insight.excerpt}
              </p>
              <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
                {new Date(insight.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}{" "}
                · {insight.readingTime}
              </p>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-12 text-sm text-muted-foreground">
            No articles in this category yet. New EV Insights are published regularly.
          </p>
        ) : null}
      </Section>

      <FinalCta />
    </>
  );
}
