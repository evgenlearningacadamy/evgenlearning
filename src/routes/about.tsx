import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Eyebrow, Section, SectionLead, SectionTitle } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import {
  AcademyLife,
  Certification,
  FounderMessage,
  LearningExperience,
  TrainersSection,
  WhyEvgen,
} from "@/components/home/Proof";
import { Ecosystem } from "@/components/site/Ecosystem";
import { FaqSection } from "@/components/site/FaqSection";
import { FinalCta } from "@/components/site/FinalCta";

const title = "About EVGEN Learning Academy — EV Skill Development in Kerala";
const description =
  "EVGEN Learning Academy focuses on practical, structured and industry-focused EV education in Calicut, Kerala. Our mission, vision and learning philosophy.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About EVGEN"
        title="More than an academy. A starting point for your EV journey."
        lead="EVGEN Learning Academy focuses on practical, structured and industry-focused EV education."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>Core Philosophy</Eyebrow>
            <SectionTitle>Skill → Confidence → Opportunity</SectionTitle>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg lg:pt-4">
            <p>
              Electric mobility is reshaping how vehicles are built, serviced and diagnosed. That
              shift creates demand for people who genuinely understand the technology.
            </p>
            <p>
              EVGEN was built around that need. Every program moves from clear explanation to
              structured practice on real EV systems, so learners build confidence they can carry
              into the industry.
            </p>
            <p>
              We keep our claims honest: we teach skills, guide careers and support placement. What
              a learner does with that foundation is the part we help them prepare for.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Mission
            </h3>
            <p className="mt-5 text-lg leading-relaxed">
              To make practical EV skill development accessible to aspiring professionals and help
              bridge the gap between learning and industry requirements.
            </p>
          </Reveal>
          <Reveal
            delay={90}
            className="rounded-2xl border border-ink-border bg-ink p-8 text-ink-foreground"
          >
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Vision
            </h3>
            <p className="mt-5 text-lg leading-relaxed">
              To build a future-ready generation of EV professionals who can contribute to India's
              growing electric mobility ecosystem.
            </p>
          </Reveal>
        </div>
      </Section>

      <LearningExperience />
      <WhyEvgen />
      <FounderMessage />
      <TrainersSection />
      <AcademyLife />
      <Certification />
      <Ecosystem />
      <FaqSection />
      <FinalCta />
    </>
  );
}
