import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookDemoDialog } from "@/components/site/LeadForm";
import { trustBar } from "@/lib/site-data";
import heroImageAsset from "@/assets/futuro/expert-team.jpg.asset.json";

const heroImage = heroImageAsset.url;

export function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="pointer-events-none absolute inset-0 grid-lines-ink opacity-50" aria-hidden="true" />
        <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-14 sm:px-8 md:pb-24 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative">
            <p className="eyebrow flex items-center gap-3 text-ink-muted">
              <span className="inline-block h-px w-8 bg-primary" aria-hidden="true" />
              EV Skill Development Academy
            </p>
            <h1 className="mt-6 text-4xl font-bold uppercase leading-[1.02] sm:text-5xl md:text-6xl lg:text-[4.2rem]">
              Build your future in the{" "}
              <span className="text-primary">EV industry.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Learn EV technology through practical, industry-focused programs designed to help you
              build skills for tomorrow's mobility industry.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <BookDemoDialog>
                <Button variant="hero" size="xl" className="uppercase">
                  Book Free Demo
                </Button>
              </BookDemoDialog>
              <Button variant="outlineInk" size="xl" asChild>
                <Link to="/courses">
                  Explore Programs <ArrowRight />
                </Link>
              </Button>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-ink-border pt-8">
              <HeroStat value="3 Months" label="Flagship program" />
              <HeroStat value="2 Months" label="Offline practical" />
              <HeroStat value="2W · 3W · 4W" label="Vehicle exposure" />
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" aria-hidden="true" />
            <img
              src={heroImage}
              alt="EVGEN Learning expert EV trainer team in branded uniforms"
              width={1600}
              height={1200}
              className="relative w-full rounded-2xl border border-ink-border object-cover shadow-[var(--shadow-lift)]"
            />
            <div className="absolute -bottom-5 left-5 rounded-xl border border-ink-border bg-ink-card px-5 py-4 shadow-[var(--shadow-lift)]">
              <p className="font-display text-xs uppercase tracking-[0.18em] text-primary">
                Practical Training
              </p>
              <p className="mt-1 font-display text-sm font-semibold">
                EV two-wheelers · Battery · Diagnostics
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-border bg-card">
        <ul className="mx-auto flex max-w-6xl snap-x gap-3 overflow-x-auto px-5 py-5 sm:px-8 lg:justify-between">
          {trustBar.map((item) => (
            <li
              key={item}
              className="flex shrink-0 snap-start items-center gap-2 whitespace-nowrap text-sm font-medium text-muted-foreground"
            >
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd>
        <span className="block font-display text-xl font-bold sm:text-2xl">{value}</span>
        <span className="mt-1 block text-xs uppercase tracking-widest text-ink-muted">{label}</span>
      </dd>
    </div>
  );
}
