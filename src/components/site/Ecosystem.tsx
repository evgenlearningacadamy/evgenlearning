import { Eyebrow, Section, SectionLead, SectionTitle } from "@/components/site/Section";
import { ecosystemBrands } from "@/lib/site-data";

/** Marquee of EV ecosystem companies. These are not stated as partners or recruiters. */
export function Ecosystem() {
  const row = [...ecosystemBrands, ...ecosystemBrands];
  return (
    <Section tone="ink" className="overflow-hidden">
      <Eyebrow tone="ink">EV Industry Connections</Eyebrow>
      <SectionTitle>Connected to the EV ecosystem</SectionTitle>
      <SectionLead tone="ink">
        Build skills relevant to the technologies shaping electric mobility.
      </SectionLead>

      <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track flex w-max gap-3">
          {row.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="flex h-16 items-center whitespace-nowrap rounded-xl border border-ink-border bg-ink-card px-7 font-display text-sm font-semibold uppercase tracking-wide text-ink-foreground"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-8 max-w-3xl text-xs leading-relaxed text-ink-muted">
        Company names are listed to indicate the technologies and vehicle platforms shaping the
        electric mobility ecosystem. They are not stated as recruiters, placement partners or
        official partners of EVGEN Learning Academy.
      </p>
    </Section>
  );
}
