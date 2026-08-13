import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { CourseGrid } from "@/components/site/CourseCards";
import { ComparisonTable, FourWeekExperience, PracticalSection } from "@/components/home/Programs";
import { LearningExperience } from "@/components/home/Proof";
import { FaqSection } from "@/components/site/FaqSection";
import { FinalCta } from "@/components/site/FinalCta";
import { courses } from "@/lib/site-data";

const title = "EV Courses in Calicut, Kerala — EVGEN Learning Academy";
const description =
  "Four EV learning paths: 4 week online EV skill upgrade, 3 month EV technology, 6 month advanced EV technology and a recorded program. Compare and choose your path.";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/courses" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: courses.map((course, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: course.title,
            url: `https://evgenlearningacademy.com/courses/${course.slug}`,
          })),
        }),
      },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Choose your EV learning path."
        lead="From your first EV skill to advanced technology, choose the program that matches where you are today."
      />
      <Section>
        <div className="flex flex-wrap items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {["Start", "Build", "Advance", "Flexible"].map((stage, i) => (
            <span key={stage} className="flex items-center gap-3">
              {i > 0 ? <span className="text-primary">→</span> : null}
              {stage}
            </span>
          ))}
        </div>
        <CourseGrid />
      </Section>
      <ComparisonTable />
      <FourWeekExperience />
      <PracticalSection />
      <LearningExperience />
      <FaqSection />
      <FinalCta />
    </>
  );
}
