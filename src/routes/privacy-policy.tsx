import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { LegalBody } from "@/components/site/LegalBody";
import { site } from "@/lib/site-data";

const title = "Privacy Policy — EVGEN Learning Academy";
const description =
  "How EVGEN Learning Academy collects, uses and protects the information you share through our website and enquiry forms.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <Section>
        <LegalBody>
          <h2>Information we collect</h2>
          <p>
            When you submit an enquiry or demo request, we collect the details you provide: your
            name, phone number, email address, the program you are interested in and your current
            educational or professional background.
          </p>
          <h2>How we use your information</h2>
          <p>
            Your information is used to respond to your enquiry, share program and batch details,
            arrange demo classes and provide admissions and learner support. We do not sell your
            personal information.
          </p>
          <h2>Communication</h2>
          <p>
            By submitting an enquiry you agree to be contacted by EVGEN Learning Academy by phone,
            WhatsApp, SMS or email regarding our programs. You can ask us to stop contacting you at
            any time.
          </p>
          <h2>Data retention and security</h2>
          <p>
            Enquiry information is retained only as long as needed for admissions and learner
            support, and reasonable measures are taken to protect it from unauthorised access.
          </p>
          <h2>Third-party services</h2>
          <p>
            The website may use standard analytics and communication tools. Any data shared with
            these services is limited to what is required to operate the website and respond to
            enquiries.
          </p>
          <h2>Your choices</h2>
          <p>
            You may request access to, correction of, or deletion of the information you have shared
            with us by contacting us at {site.email} or {site.phone}.
          </p>
          <h2>Contact</h2>
          <p>
            {site.name}, {site.address.line1}, {site.address.line2}, {site.address.city},{" "}
            {site.address.state} – {site.address.pin}.
          </p>
        </LegalBody>
      </Section>
    </>
  );
}
