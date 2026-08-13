import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionTitle, Eyebrow, SectionLead } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { PlacementSection, StudentStoriesSection } from "@/components/home/Proof";
import { Ecosystem } from "@/components/site/Ecosystem";
import { FinalCta } from "@/components/site/FinalCta";

const title = "Placement Support — EVGEN Learning Academy, Calicut";
const description =
  "EVGEN provides career guidance and placement support to help EV learners take their next step into the electric mobility industry.";

const support = [
  { title: "Career Guidance", text: "Understand which EV roles match your background and interest." },
  { title: "Profile Preparation", text: "Guidance on presenting your EV skills and practical exposure." },
  { title: "Opportunity Sharing", text: "Support toward relevant opportunities as they come up." },
  { title: "Student Support", text: "Continued support from the EVGEN team after your program." },
];

export const Route = createFileRoute("/placements")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/placements" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/placements" }],
  }),
  component: PlacementsPage,
});

function PlacementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Placement Support"
        title="Learning that moves toward opportunity."
        lead="EVGEN provides career guidance and placement support to help learners take their next step into the EV industry."
      />

      <Section>
        <Eyebrow>How we support learners</Eyebrow>
        <SectionTitle>Support, not promises.</SectionTitle>
        <SectionLead>
          EVGEN offers placement support and career guidance. We do not guarantee employment, and we
          publish no placement percentages or salary claims.
        </SectionLead>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {support.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 4) * 70}
              className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]"
            >
              <h3 className="font-display text-base font-bold uppercase leading-snug">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <PlacementSection withCta={false} />
      <StudentStoriesSection />
      <Ecosystem />
      <FinalCta />
    </>
  );
}
