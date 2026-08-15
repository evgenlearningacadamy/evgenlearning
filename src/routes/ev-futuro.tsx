import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookDemoDialog } from "@/components/site/LeadForm";
import { Eyebrow, Section, SectionLead, SectionTitle } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { site, whatsappLink } from "@/lib/site-data";
import evFuturoLogo from "@/assets/ev-futuro-logo.png.asset.json";

const title = "EV FUTURO | College EV Career & Entrepreneurship Initiative | EVGEN";
const description =
  "EV FUTURO by EVGEN helps college students understand the EV industry, discover career opportunities, build future-ready skills and explore EV entrepreneurship.";

export const Route = createFileRoute("/ev-futuro")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ev-futuro" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ev-futuro" }],
  }),
  component: EvFuturoPage,
});

const domains = [
  "Electric Vehicles",
  "Battery Technology",
  "BMS",
  "Power Electronics",
  "Charging Infrastructure",
  "EV Diagnostics",
  "Embedded Systems",
  "EV Software",
  "EV Service",
  "EV Manufacturing",
  "EV Entrepreneurship",
];

const journey = [
  { no: "01", title: "Awareness", text: "Understand the EV revolution and where the industry is heading." },
  { no: "02", title: "Careers", text: "Discover emerging EV careers, job roles and industry opportunities." },
  { no: "03", title: "Skills", text: "Understand the importance of industry-relevant EV skills." },
  { no: "04", title: "EVGEN Programs", text: "Move toward structured EV skill development." },
  { no: "05", title: "EV Professionals", text: "Build the skills needed to enter the EV workforce." },
  { no: "06", title: "EV Entrepreneurs", text: "Explore how EV knowledge can lead to businesses and new opportunities." },
];

const careers = [
  {
    title: "EV Engineering",
    items: ["EV Design Engineer", "Battery Engineer", "BMS Engineer", "Power Electronics Engineer"],
  },
  {
    title: "Technical",
    items: ["EV Technician", "EV Diagnostic Technician", "Battery Technician", "Service Specialist"],
  },
  {
    title: "Digital & Technology",
    items: ["Embedded Systems", "EV Software", "IoT & Connected Mobility", "Data & Analytics"],
  },
  {
    title: "Business",
    items: ["EV Sales", "Operations", "Charging Infrastructure", "EV Consulting"],
  },
];

const ventures = [
  "EV Service Centres",
  "Battery Services",
  "Battery Refurbishment",
  "Charging Solutions",
  "EV Diagnostics",
  "EV Conversion",
  "EV Spare Parts",
  "Fleet Solutions",
  "EV Software",
  "EV Training & Consulting",
];

const learning = [
  { title: "Learn", text: "Understand EV technology and the industry." },
  { title: "Practice", text: "Develop practical understanding." },
  { title: "Build", text: "Build future-ready skills." },
  { title: "Work", text: "Move toward career and industry opportunities." },
];

const ecosystemFlow = [
  "EV FUTURO",
  "Awareness",
  "Careers",
  "Skills",
  "EVGEN Programs",
  "EV Professionals",
  "EV Entrepreneurs",
];

function EvFuturoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink px-5 py-20 text-ink-foreground sm:px-8 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines-ink opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl">
          <p className="eyebrow flex items-center gap-3 text-ink-muted">
            <span className="inline-block h-px w-8 bg-primary" aria-hidden="true" />
            EVGEN | EV Skill Development Academy
          </p>
          <img
            src={evFuturoLogo.url}
            alt="EV FUTURO — Charge your skills, power the future"
            className="mt-8 w-full max-w-xs rounded-2xl border border-ink-border"
            loading="eager"
          />
          <h1 className="mt-8 text-5xl font-bold uppercase leading-[1.02] sm:text-6xl md:text-7xl">
            EV Futuro
          </h1>
          <p className="mt-4 font-display text-xl font-semibold uppercase tracking-tight text-primary sm:text-2xl">
            Charge Your Skills. Power the Future.
          </p>
          <p className="mt-6 max-w-2xl font-display text-base uppercase tracking-[0.12em] text-ink-muted">
            A College EV Career &amp; Entrepreneurship Initiative by EVGEN
          </p>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted">
            Helping students understand the EV industry, discover career opportunities, build
            future-ready skills and explore entrepreneurship.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="hero" size="xl" className="uppercase" asChild>
              <a href="#why-ev-futuro">
                Explore EV FUTURO <ArrowRight />
              </a>
            </Button>
            <Button variant="outlineInk" size="xl" asChild>
              <a href={site.phoneHref}>
                <Phone /> Talk to EVGEN
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Section id="why-ev-futuro">
        <Eyebrow>Why EV FUTURO</Eyebrow>
        <SectionTitle>The EV revolution is creating a new generation of opportunities.</SectionTitle>
        <SectionLead>
          The EV industry is creating opportunities far beyond vehicle manufacturing — across
          engineering, technology, service and business.
        </SectionLead>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((d, i) => (
            <Reveal
              key={d}
              delay={i * 40}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold">{d}</h3>
            </Reveal>
          ))}
        </div>
        <p className="mt-12 font-display text-xl font-semibold uppercase leading-tight sm:text-2xl">
          The future of mobility needs people with the right skills.
        </p>
      </Section>

      <Section tone="ink" className="overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-lines-ink opacity-60" aria-hidden="true" />
        <div className="relative">
          <Eyebrow tone="ink">The Journey</Eyebrow>
          <SectionTitle>The EV FUTURO journey.</SectionTitle>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {journey.map((step, i) => (
              <Reveal
                key={step.no}
                delay={i * 60}
                className="rounded-2xl border border-ink-border bg-ink-card p-7"
              >
                <span className="font-display text-3xl font-bold text-primary">{step.no}</span>
                <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <Eyebrow>Career Opportunities</Eyebrow>
        <SectionTitle>Where can an EV career take you?</SectionTitle>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {careers.map((cat, i) => (
            <Reveal
              key={cat.title}
              delay={i * 60}
              className="rounded-2xl border border-border bg-background p-8 shadow-[var(--shadow-card)]"
            >
              <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {cat.title}
              </h3>
              <ul className="mt-5 grid gap-3">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base">
                    <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <p className="mt-12 font-display text-xl font-semibold uppercase sm:text-2xl">
          One industry. Multiple career possibilities.
        </p>
      </Section>

      <Section>
        <Eyebrow>Entrepreneurship</Eyebrow>
        <SectionTitle>Don't only build a career. Build an EV business.</SectionTitle>
        <SectionLead>The EV revolution will create not only jobs — but businesses.</SectionLead>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ventures.map((v, i) => (
            <Reveal
              key={v}
              delay={i * 40}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <h3 className="font-display text-base font-semibold">{v}</h3>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <Eyebrow>Learning Journey</Eyebrow>
        <SectionTitle>Learn. Practice. Build. Work.</SectionTitle>
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {learning.map((step, i) => (
            <Reveal
              key={step.title}
              delay={i * 70}
              className="rounded-2xl border border-border bg-background p-7 shadow-[var(--shadow-card)]"
            >
              <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Step {i + 1}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold uppercase">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="ink" className="overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-lines-ink opacity-60" aria-hidden="true" />
        <div className="relative">
          <Eyebrow tone="ink">EV FUTURO + EVGEN Ecosystem</Eyebrow>
          <SectionTitle>Awareness is the beginning. Skills create the future.</SectionTitle>
          <SectionLead tone="ink">
            EV FUTURO introduces students to the EV industry, career possibilities, skill
            development and entrepreneurship, while EVGEN provides structured pathways for continued
            skill development.
          </SectionLead>
          <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystemFlow.map((node, i) => (
              <li
                key={node}
                className="flex items-center gap-3 rounded-xl border border-ink-border bg-ink-card px-5 py-4"
              >
                <span className="font-display text-xs font-semibold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-sm font-semibold uppercase tracking-[0.12em]">
                  {node}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold uppercase leading-[1.05] sm:text-4xl md:text-5xl">
            Don't just know about EVs. Build your future in EV.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Understand the industry. Discover opportunities. Build skills. Create your future.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <BookDemoDialog>
              <Button variant="hero" size="xl" className="uppercase">
                Explore EV FUTURO
              </Button>
            </BookDemoDialog>
            <Button variant="outlineDark" size="xl" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle /> Contact EVGEN
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
