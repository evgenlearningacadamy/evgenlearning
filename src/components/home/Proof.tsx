import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { Eyebrow, Section, SectionLead, SectionTitle } from "@/components/site/Section";
import {
  academyExperiences,
  learningJourney,
  placementPosters,
  studentStories,
  trainers,
  whyEvgen,
} from "@/lib/site-data";
import founderPhoto from "@/assets/founder.png";
import communityLab from "@/assets/community-lab.jpg";
import ctdsAuthorisation from "@/assets/certs/ctds-authorisation.jpg";

export function LearningExperience() {
  return (
    <Section>
      <Eyebrow>The Learning Experience</Eyebrow>
      <SectionTitle>From knowledge to confidence.</SectionTitle>

      <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-5">
        {learningJourney.map((item, i) => (
          <Reveal
            key={item.step}
            as="li"
            delay={i * 70}
            className="bg-card p-7 transition-colors hover:bg-secondary"
          >
            <span className="font-display text-3xl font-bold text-primary">{item.step}</span>
            <h3 className="mt-5 font-display text-base font-bold uppercase tracking-wide">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export function WhyEvgen() {
  return (
    <Section tone="muted">
      <Eyebrow>Why EVGEN</Eyebrow>
      <SectionTitle>What makes EVGEN different?</SectionTitle>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whyEvgen.map((item, i) => (
          <Reveal
            key={item.title}
            delay={(i % 4) * 60}
            className="rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[var(--shadow-lift)]"
          >
            <h3 className="font-display text-base font-bold uppercase leading-snug">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function PlacementSection({ withCta = true }: { withCta?: boolean }) {
  return (
    <Section>
      <Eyebrow>Placement Support</Eyebrow>
      <SectionTitle>Learning that moves toward opportunity.</SectionTitle>
      <SectionLead>
        EVGEN provides career guidance and placement support to help learners take their next step
        into the EV industry.
      </SectionLead>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {placementPosters.map((poster, i) => (
          <Reveal
            key={poster.id}
            delay={(i % 4) * 60}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-ink text-ink-foreground"
          >
            <img
              src={poster.image}
              alt={`${poster.name}, placed as ${poster.role} at ${poster.company}`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink to-transparent"
              aria-hidden="true"
            />
            <div className="relative flex h-full flex-col justify-end p-5">
              <p className="font-display text-base font-bold uppercase leading-tight">
                {poster.name}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink-muted">
                {poster.role}
              </p>
              <p className="mt-1 text-xs font-semibold text-primary">{poster.company}</p>
            </div>
          </Reveal>
        ))}
      </div>


      {withCta ? (
        <div className="mt-10">
          <Button variant="hero" size="lg" asChild>
            <Link to="/placements">
              Explore Placement Support <ArrowRight />
            </Link>
          </Button>
        </div>
      ) : null}
    </Section>
  );
}

export function StudentStoriesSection({ limit }: { limit?: number }) {
  const list = limit ? studentStories.slice(0, limit) : studentStories;
  return (
    <Section tone="muted">
      <Eyebrow>Student Stories</Eyebrow>
      <SectionTitle>Real learners. Real journeys.</SectionTitle>
      <SectionLead>
        Short journeys shared by EVGEN learners: the problem they faced, the decision they made,
        what they learned and where it took them.
      </SectionLead>

      <div className="mt-14 flex snap-x gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
        {list.map((story, i) => (
          <Reveal
            key={story.id}
            delay={i * 80}
            className="w-[85%] shrink-0 snap-start rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] md:w-auto"
          >
            <Quote className="size-6 text-primary" />
            <h3 className="mt-6 font-display text-lg font-bold leading-snug">{story.name}</h3>
            <dl className="mt-5 grid gap-3 text-sm">
              <StoryRow label="Problem" value={story.problem} />
              <StoryRow label="Decision" value={story.decision} />
              <StoryRow label="Learning" value={story.learning} />
              <StoryRow label="Result" value={story.result} />
            </dl>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function StoryRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-primary">{label}</dt>
      <dd className="mt-1 leading-relaxed text-muted-foreground">{value}</dd>
    </div>
  );
}

export function FeaturedTransformation() {
  const steps = [
    "Started as a Gulf Lift Technician",
    "Recognized the EV Opportunity",
    "Joined EVGEN",
    "Built EV Knowledge & Confidence",
    "Started His Own EV Service Centre",
  ];

  return (
    <Section tone="ink">
      <div className="pointer-events-none absolute inset-0 grid-lines-ink opacity-50" aria-hidden="true" />
      <div className="relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <Eyebrow tone="ink">Featured Transformation</Eyebrow>
          <SectionTitle>From Gulf technician to EV entrepreneur.</SectionTitle>
          <SectionLead tone="ink">
            One learner's path from a technical job abroad to running an EV service centre of his
            own.
          </SectionLead>
        </div>
        <ol className="relative border-l border-ink-border pl-8">
          {steps.map((step, i) => (
            <Reveal key={step} as="li" delay={i * 90} className="relative pb-8 last:pb-0">
              <span
                className="absolute -left-[2.15rem] top-1.5 size-3 rounded-full bg-primary"
                aria-hidden="true"
              />
              <p className="font-display text-base font-semibold sm:text-lg">{step}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export function TrainersSection() {
  return (
    <Section>
      <Eyebrow>Trainers</Eyebrow>
      <SectionTitle>Learn from industry-focused trainers.</SectionTitle>
      <SectionLead>
        Our EV technology trainers guide every session, from core concepts to hands-on practice.
      </SectionLead>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {trainers.map((trainer, i) => (
          <Reveal
            key={`${trainer.designation}-${i}`}
            delay={i * 80}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]"
          >
            {trainer.photo ? (
              <img
                src={trainer.photo}
                alt={`${trainer.name}, ${trainer.designation} at EVGEN Learning Academy`}
                loading="lazy"
                className="h-72 w-full bg-secondary object-cover object-top"
              />
            ) : (
              <div className="flex h-52 items-center justify-center bg-secondary text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Photograph to be added
              </div>
            )}
            <div className="p-7">
              <h3 className="font-display text-lg font-bold">{trainer.name}</h3>
              <p className="mt-1 text-sm text-primary">{trainer.designation}</p>
              <p className="mt-4 text-sm text-muted-foreground">{trainer.experience}</p>
              <p className="mt-2 text-sm text-muted-foreground">Expertise: {trainer.expertise}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function AcademyLife() {
  return (
    <Section tone="muted">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <Eyebrow>Academy Experience</Eyebrow>
          <SectionTitle>Learning beyond the classroom.</SectionTitle>
          <SectionLead>
            EVGEN learning happens around real vehicles, real tools and a community of people
            entering the same industry.
          </SectionLead>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {academyExperiences.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 2) * 60}
                className="rounded-xl border border-border bg-card p-5"
              >
                <h3 className="font-display text-sm font-bold uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="overflow-hidden rounded-2xl border border-border">
          <img
            src={communityLab}
            alt="Learners and a trainer gathered around an electric scooter during an EVGEN practical session"
            loading="lazy"
            width={1600}
            height={1000}
            className="h-full w-full object-cover"
          />
        </Reveal>
      </div>
    </Section>
  );
}

export function Certification() {
  const certificates = [
    {
      id: "authorisation",
      src: ctdsAuthorisation,
      alt: "CTDS certificate of authorisation naming EVGEN Learning Academy an authorized training partner",
    },
  ];

  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <Eyebrow>Certification</Eyebrow>
          <SectionTitle>Recognize your learning.</SectionTitle>
          <SectionLead>
            EVGEN Learning Academy is an authorized training partner of CTDS — Council for Technical
            Development Continuing Academic Educational and Scientific Studies, registered under
            NITI Aayog, Govt. of India. Learners receive a CTDS certificate on successful completion
            of the applicable program.
          </SectionLead>
          <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
            <Award className="size-5 text-primary" />
            Registered MSME, Govt. of India · ISO 9001:2015 certified body
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          {certificates.map((cert, i) => (
            <Reveal
              key={cert.id}
              delay={i * 90}
              className="overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)]"
            >
              <img
                src={cert.src}
                alt={cert.alt}
                loading="lazy"
                className="h-full w-full rounded-lg object-contain"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function FounderMessage() {
  return (
    <Section tone="muted">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <Reveal className="overflow-hidden rounded-2xl border border-border bg-card">
          <img
            src={founderPhoto}
            alt="Founder of EVGEN Learning Academy"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </Reveal>
        <div>
          <Eyebrow>Founder</Eyebrow>
          <SectionTitle>A message from our founder.</SectionTitle>
          <blockquote className="mt-8 border-l-2 border-primary pl-6 text-lg leading-relaxed text-foreground sm:text-xl">
            "The EV industry is creating a new generation of skills, careers and opportunities.
            EVGEN was created to help learners understand this technology and build the practical
            skills needed to move forward."
          </blockquote>
          <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              EVGEN began with a simple observation: electric vehicles were arriving faster than the
              skills needed to service and support them. Learners were interested, but there was no
              structured, practical way to enter the field.
            </p>
            <p>
              That gap is why practical learning sits at the centre of every EVGEN program. Concepts
              are explained clearly, then applied on real EV systems, so learners leave with
              understanding and confidence — not just notes.
            </p>
            <p>
              Our commitment is to keep the learning honest, industry-focused and accessible to
              anyone genuinely interested in electric mobility.
            </p>
          </div>
          <p className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Founder, EVGEN Learning Academy
          </p>
        </div>
      </div>
    </Section>
  );
}
