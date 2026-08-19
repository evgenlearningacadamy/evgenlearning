import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookDemoDialog } from "@/components/site/LeadForm";
import { courses, navLinks, site } from "@/lib/site-data";
import evgenLogoLight from "@/assets/evgen-logo-light.png.asset.json";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink px-5 pb-24 pt-20 text-ink-foreground sm:px-8 md:pb-14">
      <div className="pointer-events-none absolute inset-0 grid-lines-ink opacity-60" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <img
            src={evgenLogoLight.url}
            alt="EVGEN Learning Academy"
            className="h-12 w-auto object-contain"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted">
            Building future-ready EV professionals through practical, industry-focused skill
            development.
          </p>
          <div className="mt-6 flex gap-2">
            <SocialLink href={site.social.instagram} label="Instagram">
              <Instagram className="size-4" />
            </SocialLink>
            <SocialLink href={site.social.linkedin} label="LinkedIn">
              <Linkedin className="size-4" />
            </SocialLink>
            <SocialLink href={site.social.facebook} label="Facebook">
              <Facebook className="size-4" />
            </SocialLink>
          </div>
          <BookDemoDialog>
            <Button variant="hero" className="mt-7 uppercase">
              Book Free Demo
            </Button>
          </BookDemoDialog>
        </div>

        <FooterCol title="Quick Links">
          {navLinks.map((link) => (
            <FooterLink key={link.to} to={link.to}>
              {link.label}
            </FooterLink>
          ))}
        </FooterCol>

        <div className="grid gap-10">
          <FooterCol title="Programs">
            {courses.map((course) => (
              <FooterLink key={course.slug} to="/courses/$slug" params={{ slug: course.slug }}>
                {course.stage === "START"
                  ? "4 Week Online"
                  : course.stage === "BUILD"
                    ? "3 Month Program"
                    : course.stage === "ADVANCE"
                      ? "6 Month Advanced"
                      : "Recorded Program"}
              </FooterLink>
            ))}
          </FooterCol>
          <FooterCol title="Resources">
            <FooterLink to="/about" hash="faq">
              FAQs
            </FooterLink>
            <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink to="/terms">Terms &amp; Conditions</FooterLink>
          </FooterCol>
        </div>

        <FooterCol title="Contact">
          <li className="flex gap-3 text-sm text-ink-muted">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.city}, {site.address.state} – {site.address.pin}
            </span>
          </li>
          <li className="flex gap-3 text-sm">
            <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
            <a href={site.phoneHref} className="text-ink-muted hover:text-primary">
              {site.phone}
            </a>
          </li>
          <li className="flex gap-3 text-sm">
            <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
            <a href={`mailto:${site.email}`} className="break-all text-ink-muted hover:text-primary">
              {site.email}
            </a>
          </li>
        </FooterCol>
      </div>

      <div className="relative mx-auto mt-14 flex max-w-6xl flex-col gap-2 border-t border-ink-border pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p>{site.domain}</p>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground">
        {title}
      </h3>
      <ul className="mt-5 grid gap-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  to,
  params,
  hash,
  children,
}: {
  to: string;
  params?: Record<string, string>;
  hash?: string;
  children: React.ReactNode;
}) {
  const linkProps = { to, params, hash } as unknown as React.ComponentProps<typeof Link>;
  return (
    <li>
      <Link {...linkProps} className="text-sm text-ink-muted transition-colors hover:text-primary">
        {children}
      </Link>
    </li>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex size-9 items-center justify-center rounded-md border border-ink-border text-ink-muted transition-colors hover:border-primary hover:text-primary"
    >
      {children}
    </a>
  );
}
