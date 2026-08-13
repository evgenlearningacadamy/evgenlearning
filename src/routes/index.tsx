import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { CareerOpportunities, WhoCanStart, WhyEv } from "@/components/home/WhyEv";
import {
  ComparisonTable,
  CourseDiscovery,
  FourWeekExperience,
  PracticalSection,
} from "@/components/home/Programs";
import {
  AcademyLife,
  Certification,
  FeaturedTransformation,
  FounderMessage,
  LearningExperience,
  PlacementSection,
  StudentStoriesSection,
  TrainersSection,
  WhyEvgen,
} from "@/components/home/Proof";
import { Ecosystem } from "@/components/site/Ecosystem";
import { FaqSection } from "@/components/site/FaqSection";
import { FinalCta } from "@/components/site/FinalCta";
import { site } from "@/lib/site-data";

const title = "EVGEN Learning Academy — EV Course & Training in Calicut, Kerala";
const description =
  "Practical EV skill development in Calicut, Kerala. Live classes, hands-on EV two-wheeler and battery training, career guidance and placement support. Book a free demo.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: site.name,
          url: `https://${site.domain}`,
          email: site.email,
          telephone: site.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: `${site.address.line1}, ${site.address.line2}`,
            addressLocality: site.address.city,
            addressRegion: site.address.state,
            postalCode: site.address.pin,
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <WhyEv />
      <CareerOpportunities />
      <WhoCanStart />
      <CourseDiscovery />
      <FourWeekExperience />
      <PracticalSection />
      <ComparisonTable />
      <LearningExperience />
      <WhyEvgen />
      <Ecosystem />
      <PlacementSection />
      <StudentStoriesSection limit={3} />
      <FeaturedTransformation />
      <TrainersSection />
      <AcademyLife />
      <Certification />
      <FounderMessage />
      <FaqSection />
      <FinalCta />
    </>
  );
}
