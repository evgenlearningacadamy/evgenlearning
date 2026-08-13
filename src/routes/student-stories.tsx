import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FeaturedTransformation, StudentStoriesSection } from "@/components/home/Proof";
import { FinalCta } from "@/components/site/FinalCta";

const title = "Student Stories — EVGEN Learning Academy";
const description =
  "Real journeys from EVGEN learners: career transformation, EV skill development and moves into the electric vehicle industry.";

export const Route = createFileRoute("/student-stories")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/student-stories" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/student-stories" }],
  }),
  component: StudentStoriesPage,
});

function StudentStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Student Stories"
        title="Real learners. Real journeys."
        lead="Every story here follows the same shape: the problem, the decision, the learning and the result."
      />
      <FeaturedTransformation />
      <StudentStoriesSection />
      <FinalCta />
    </>
  );
}
