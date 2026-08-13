import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { LegalBody } from "@/components/site/LegalBody";
import { site } from "@/lib/site-data";

const title = "Terms & Conditions — EVGEN Learning Academy";
const description =
  "The terms that apply to using the EVGEN Learning Academy website and enrolling in our EV skill development programs.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <Section>
        <LegalBody>
          <h2>Use of this website</h2>
          <p>
            Content on this website is provided for information about {site.name} and its programs.
            Program structure, schedules and batch details may be updated from time to time.
          </p>
          <h2>Programs and enrolment</h2>
          <p>
            Enrolment is confirmed only after completion of the admission process communicated by
            our admissions team. Eligibility, duration, format and practical components vary by
            program as described on the relevant program page.
          </p>
          <h2>Career guidance and placement support</h2>
          <p>
            EVGEN provides career guidance and placement support. This is support toward relevant
            opportunities and is not a guarantee of employment, salary or a specific role.
          </p>
          <h2>Certification</h2>
          <p>
            Certification is issued upon successful completion of the applicable program, subject to
            attendance and program requirements.
          </p>
          <h2>Company names and trademarks</h2>
          <p>
            Any company or brand names shown on this website belong to their respective owners and
            are referenced only to describe the electric mobility ecosystem. They do not imply
            partnership, endorsement or recruitment relationships.
          </p>
          <h2>Intellectual property</h2>
          <p>
            Course material, recordings and website content are the property of {site.name} and may
            not be reproduced or redistributed without written permission.
          </p>
          <h2>Contact</h2>
          <p>
            For any questions about these terms, contact {site.email} or {site.phone}.
          </p>
        </LegalBody>
      </Section>
    </>
  );
}
