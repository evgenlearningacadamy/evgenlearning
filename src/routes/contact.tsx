import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/site/LeadForm";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { FaqSection } from "@/components/site/FaqSection";
import { FinalCta } from "@/components/site/FinalCta";
import { site, whatsappLink } from "@/lib/site-data";

const title = "Contact EVGEN Learning Academy — EV Training in Calicut";
const description =
  "Visit or contact EVGEN Learning Academy at Beach Complex, Silk Street, Calicut, Kerala. Call +91 94468 87914 or send an enquiry about our EV programs.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: site.name,
          telephone: site.phone,
          email: site.email,
          url: `https://${site.domain}/contact`,
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the EVGEN admissions team."
        lead="Questions about programs, batches or which path fits your background? We're here."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-2xl font-bold uppercase">{site.name}</h2>
            <ul className="mt-8 grid gap-6">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <address className="not-italic leading-relaxed text-muted-foreground">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.city}, {site.address.state} – {site.address.pin}
                  <br />
                  {site.address.country}
                </address>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-0.5 size-5 shrink-0 text-primary" />
                <a href={site.phoneHref} className="font-display text-lg font-semibold hover:text-primary">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
                <a href={`mailto:${site.email}`} className="break-all text-muted-foreground hover:text-primary">
                  {site.email}
                </a>
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-2">
              <Button variant="hero" size="lg" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle /> Chat on WhatsApp
                </a>
              </Button>
              <Button variant="outlineDark" size="lg" asChild>
                <a href={site.phoneHref}>
                  <Phone /> Call Now
                </a>
              </Button>
            </div>

            <div className="mt-10">
              <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Follow EVGEN
              </h3>
              <div className="mt-4 flex gap-2">
                <Social href={site.social.instagram} label="Instagram">
                  <Instagram className="size-4" />
                </Social>
                <Social href={site.social.linkedin} label="LinkedIn">
                  <Linkedin className="size-4" />
                </Social>
                <Social href={site.social.facebook} label="Facebook">
                  <Facebook className="size-4" />
                </Social>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] sm:p-9">
            <h2 className="font-display text-xl font-bold uppercase">Send an enquiry</h2>
            <ContactForm className="mt-6" />
          </div>
        </div>
      </Section>

      <FaqSection />
      <FinalCta />
    </>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex size-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
    >
      {children}
    </a>
  );
}
