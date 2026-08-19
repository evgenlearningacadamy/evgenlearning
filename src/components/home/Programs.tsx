import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MonitorPlay, PlayCircle, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookDemoDialog } from "@/components/site/LeadForm";
import { CourseGrid } from "@/components/site/CourseCards";
import { Reveal } from "@/components/site/Reveal";
import { Eyebrow, Section, SectionLead, SectionTitle } from "@/components/site/Section";
import { comparisonRows } from "@/lib/site-data";
import practicalTwoWheeler from "@/assets/practical-two-wheeler.jpg";
import practicalBattery from "@/assets/practical-battery.jpg";

export function CourseDiscovery() {
  return (
    <Section id="programs" tone="muted">
      <Eyebrow>Learning Paths</Eyebrow>
      <SectionTitle>Choose your EV learning path.</SectionTitle>
      <SectionLead>
        From your first EV skill to advanced technology, choose the program that matches where you
        are today.
      </SectionLead>
      <div className="mt-8 flex flex-wrap items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {["Start", "Build", "Advance", "Flexible"].map((stage, i) => (
          <span key={stage} className="flex items-center gap-3">
            {i > 0 ? <span className="text-primary">→</span> : null}
            {stage}
          </span>
        ))}
      </div>
      <CourseGrid />
    </Section>
  );
}

export function FourWeekExperience() {
  const cards = [
    {
      big: "24 Days",
      title: "Live Interactive Classes",
      text: "Learn directly through instructor-led online sessions.",
      icon: MonitorPlay,
    },
    {
      big: "2 Days",
      title: "Offline Practical Training",
      text: "Get hands-on exposure to EV two-wheelers, battery checking and troubleshooting.",
      icon: Wrench,
    },
    {
      big: "Lifetime",
      title: "Recorded Class Access",
      text: "Revisit the lessons whenever you need them.",
      icon: PlayCircle,
    },
  ];

  return (
    <Section tone="ink">
      <div className="pointer-events-none absolute inset-0 grid-lines-ink opacity-50" aria-hidden="true" />
      <div className="relative">
        <Eyebrow tone="ink">4 Week Program Experience</Eyebrow>
        <SectionTitle>Learn live. Practice for real. Revisit anytime.</SectionTitle>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 90}
              className="rounded-2xl border border-ink-border bg-ink-card p-8 transition-colors hover:border-primary/60"
            >
              <card.icon className="size-6 text-primary" />
              <p className="mt-8 font-display text-4xl font-bold uppercase leading-none">{card.big}</p>
              <h3 className="mt-4 font-display text-base font-semibold uppercase tracking-wide">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{card.text}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 rounded-2xl border border-ink-border p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Clock className="size-6 text-primary" />
            <div>
              <p className="font-display text-2xl font-bold">8:00 PM – 10:00 PM</p>
              <p className="mt-2 max-w-xl text-sm text-ink-muted">
                Designed for students and working professionals who want focused EV learning without
                disrupting their regular schedule.
              </p>
            </div>
          </div>
          <BookDemoDialog defaultProgram="4 Week Online EV Skill Upgrade">
            <Button variant="hero" size="xl" className="uppercase">
              Book Free Demo
            </Button>
          </BookDemoDialog>
        </div>
      </div>
    </Section>
  );
}

export function ThreeMonthExperience() {
  const cards = [
    {
      big: "1 Month",
      title: "Live Learning",
      text: "Structured instructor-led sessions covering EV technology fundamentals to systems.",
      icon: MonitorPlay,
    },
    {
      big: "2 Months",
      title: "Offline Practical Training",
      text: "Extended hands-on practice on real vehicles, battery systems and diagnostics.",
      icon: Wrench,
    },
    {
      big: "2W · 3W · 4W",
      title: "Full Vehicle Exposure",
      text: "Work across two, three and four wheeler EV platforms.",
      icon: PlayCircle,
    },
  ];

  return (
    <Section tone="ink">
      <div className="pointer-events-none absolute inset-0 grid-lines-ink opacity-50" aria-hidden="true" />
      <div className="relative">
        <Eyebrow tone="ink">3 Month Program Experience</Eyebrow>
        <SectionTitle>One month live. Two months hands-on. Full vehicle exposure.</SectionTitle>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 90}
              className="rounded-2xl border border-ink-border bg-ink-card p-8 transition-colors hover:border-primary/60"
            >
              <card.icon className="size-6 text-primary" />
              <p className="mt-8 font-display text-4xl font-bold uppercase leading-none">{card.big}</p>
              <h3 className="mt-4 font-display text-base font-semibold uppercase tracking-wide">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{card.text}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 rounded-2xl border border-ink-border p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Clock className="size-6 text-primary" />
            <div>
              <p className="font-display text-2xl font-bold">3 Months · Deep Practical Learning</p>
              <p className="mt-2 max-w-xl text-sm text-ink-muted">
                Built for learners who want extended workshop time, broader vehicle coverage and
                career-ready practical confidence.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <BookDemoDialog defaultProgram="3 Month EV Technology Program">
              <Button variant="hero" size="xl" className="uppercase">
                Book Free Demo
              </Button>
            </BookDemoDialog>
            <Button variant="outlineInk" size="xl" asChild>
              <Link to="/courses/$slug" params={{ slug: "3-month-ev-technology-program" }}>
                Program Details <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function PracticalSection() {
  const days = [
    {
      day: "Day 01",
      title: "EV Two-Wheeler Practical",
      image: practicalTwoWheeler,
      alt: "EV two-wheeler components laid out on a workbench during a practical session",
      points: [
        "Dismantling",
        "Component identification",
        "Reassembling",
        "Practical system understanding",
      ],
    },
    {
      day: "Day 02",
      title: "Battery & Diagnostics Practical",
      image: practicalBattery,
      alt: "Battery pack being tested with a multimeter and diagnostic equipment",
      points: ["Battery checking", "Battery diagnosis", "EV troubleshooting", "Vehicle diagnosis"],
    },
  ];

  return (
    <Section>
      <Eyebrow>Practical Learning</Eyebrow>
      <SectionTitle>Don't just learn EV. Experience it.</SectionTitle>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {days.map((day, i) => (
          <Reveal
            key={day.day}
            delay={i * 90}
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]"
          >
            <div className="overflow-hidden">
              <img
                src={day.image}
                alt={day.alt}
                loading="lazy"
                width={1200}
                height={900}
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-7">
              <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {day.day}
              </span>
              <h3 className="mt-4 text-xl font-bold uppercase">{day.title}</h3>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {day.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function ComparisonTable() {
  const columns = ["4 Week Online", "3 Month", "6 Month Advanced", "Recorded"];
  return (
    <Section tone="muted">
      <Eyebrow>Compare</Eyebrow>
      <SectionTitle>Find the right fit.</SectionTitle>
      <SectionLead>
        A side-by-side view of the four EVGEN learning paths. Contact admissions for anything not
        listed here.
      </SectionLead>

      <div className="mt-12 overflow-x-auto rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
        <table className="w-full min-w-[46rem] border-collapse text-left">
          <caption className="sr-only">Comparison of EVGEN EV learning programs</caption>
          <thead>
            <tr className="border-b border-border">
              <th scope="col" className="p-5 font-display text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Program
              </th>
              {columns.map((column) => (
                <th key={column} scope="col" className="p-5 font-display text-sm font-bold uppercase">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.label} className="border-b border-border last:border-0 hover:bg-secondary/60">
                <th scope="row" className="p-5 align-top font-display text-sm font-semibold">
                  {row.label}
                </th>
                {row.values.map((value, i) => (
                  <td key={`${row.label}-${i}`} className="p-5 align-top text-sm text-muted-foreground">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <BookDemoDialog>
          <Button variant="hero" size="lg" className="uppercase">
            Not sure? Book a free demo <ArrowRight />
          </Button>
        </BookDemoDialog>
      </div>
    </Section>
  );
}
