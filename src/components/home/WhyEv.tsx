import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { Eyebrow, Section, SectionLead, SectionTitle } from "@/components/site/Section";
import { audiences, careerPaths } from "@/lib/site-data";

export function WhyEv() {
  return (
    <Section id="ev-shift">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow>The EV Shift</Eyebrow>
          <SectionTitle>The industry is changing. Are your skills ready?</SectionTitle>
        </div>
        <div className="lg:pt-4">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Electric mobility is changing how vehicles are designed, serviced, diagnosed and
              maintained.
            </p>
            <p>
              As the EV ecosystem develops, new technical skills and career opportunities are
              emerging.
            </p>
            <p>
              EVGEN helps learners understand the technology and develop practical skills through
              structured learning programs.
            </p>
          </div>
          <Button variant="outlineDark" size="lg" className="mt-8" asChild>
            <a href="#ev-careers">
              Explore EV Opportunities <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}

export function CareerOpportunities() {
  return (
    <Section id="ev-careers" tone="muted">
      <Eyebrow>Career Directions</Eyebrow>
      <SectionTitle>Where can EV skills take you?</SectionTitle>
      <SectionLead>
        Possible directions across the electric mobility ecosystem. Roles and requirements vary by
        employer.
      </SectionLead>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {careerPaths.map((career, i) => (
          <Reveal
            key={career.title}
            delay={(i % 4) * 60}
            className="group bg-card p-7 transition-colors hover:bg-secondary"
          >
            <span className="font-display text-xs font-semibold tracking-[0.2em] text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 font-display text-lg font-bold leading-snug">{career.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{career.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function WhoCanStart() {
  return (
    <Section>
      <Eyebrow>Who can learn EV</Eyebrow>
      <SectionTitle>You don't have to be an EV expert to start.</SectionTitle>
      <SectionLead>Start with your interest. Build the skills. Grow from there.</SectionLead>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {audiences.map((audience, i) => (
          <Reveal
            key={audience.title}
            delay={(i % 3) * 70}
            className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[var(--shadow-lift)]"
          >
            <h3 className="font-display text-xl font-bold">{audience.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{audience.text}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-10">
        <Button variant="outlineDark" size="lg" asChild>
          <Link to="/courses">
            See the learning paths <ArrowRight />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
