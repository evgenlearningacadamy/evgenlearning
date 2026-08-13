import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookDemoDialog, LeadForm } from "@/components/site/LeadForm";
import { PageHero } from "@/components/site/PageHero";
import { Eyebrow, Section, SectionLead, SectionTitle } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CourseCard } from "@/components/site/CourseCards";
import { FourWeekExperience, PracticalSection } from "@/components/home/Programs";
import { LearningExperience } from "@/components/home/Proof";
import { FaqSection } from "@/components/site/FaqSection";
import { FinalCta } from "@/components/site/FinalCta";
import { courses } from "@/lib/site-data";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = courses.find((item) => item.slug === params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Program not found — EVGEN Learning Academy" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.course.title} — EVGEN Learning Academy`;
    const description = loaderData.course.summary;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/courses/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/courses/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: loaderData.course.title,
            description: loaderData.course.description,
            provider: {
              "@type": "EducationalOrganization",
              name: "EVGEN Learning Academy",
              url: "https://evgenlearningacademy.com",
            },
          }),
        },
      ],
    };
  },
  component: CourseDetail,
});

function CourseDetail() {
  const { course } = Route.useLoaderData();
  const others = courses.filter((item) => item.slug !== course.slug);
  const isFourWeek = course.stage === "START";

  return (
    <>
      <PageHero
        eyebrow={`${course.index} — ${course.stage}`}
        title={course.title}
        lead={course.description}
      >
        <div className="flex flex-wrap gap-3">
          <BookDemoDialog defaultProgram={course.title}>
            <Button variant="hero" size="xl" className="uppercase">
              Book Free Demo
            </Button>
          </BookDemoDialog>
          <Button variant="outlineInk" size="xl" asChild>
            <Link to="/courses">
              Compare all programs <ArrowRight />
            </Link>
          </Button>
        </div>
        <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-border bg-ink-border sm:grid-cols-2 lg:grid-cols-3">
          {course.meta.map((item) => (
            <div key={item.label} className="bg-ink p-5">
              <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-ink-muted">
                {item.label}
              </dt>
              <dd className="mt-2 font-display text-base font-semibold">{item.value}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>What you get</Eyebrow>
            <SectionTitle>
              {isFourWeek ? "What you learn and how you learn it" : "Program highlights"}
            </SectionTitle>
            <SectionLead>
              {isFourWeek
                ? "Live instruction, structured practical exposure and support that continues after the classes end."
                : course.summary}
            </SectionLead>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {course.highlights.map((highlight, i) => (
                <Reveal
                  key={highlight}
                  as="li"
                  delay={(i % 4) * 50}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {highlight}
                </Reveal>
              ))}
            </ul>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <InfoCard title="Who it's for" text={course.audience} />
              <InfoCard title="Vehicle focus" text={course.vehicles} />
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-secondary p-6">
              <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Batch information
              </h3>
              <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                {course.batch.map((item) => (
                  <div key={item.label}>
                    <dt className="text-xs uppercase tracking-widest text-primary">{item.label}</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
              <h2 className="font-display text-xl font-bold uppercase">Book a free demo</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Our admissions team will help you decide if this program fits your background.
              </p>
              <LeadForm compact className="mt-6" defaultProgram={course.title} />
            </div>
          </div>
        </div>
      </Section>

      {isFourWeek ? (
        <>
          <FourWeekExperience />
          <PracticalSection />
        </>
      ) : null}

      <LearningExperience />

      <Section tone="muted">
        <Eyebrow>Other paths</Eyebrow>
        <SectionTitle>Explore the other EVGEN programs</SectionTitle>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {others.map((item, i) => (
            <CourseCard key={item.slug} course={item} index={i} />
          ))}
        </div>
      </Section>

      <FaqSection />
      <FinalCta />
    </>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}
