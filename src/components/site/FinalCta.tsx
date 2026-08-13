import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookDemoDialog } from "@/components/site/LeadForm";
import { Section } from "@/components/site/Section";
import { site, whatsappLink } from "@/lib/site-data";

export function FinalCta() {
  return (
    <Section tone="ink" className="overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-lines-ink opacity-70" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="eyebrow justify-center text-ink-muted">Take the first step</p>
        <h2 className="mt-6 text-4xl font-bold uppercase leading-[1.03] sm:text-5xl md:text-6xl">
          Your EV journey can start here.
        </h2>
        <p className="mt-6 text-lg text-ink-muted">
          The industry is changing. Build the skills to be part of it.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <BookDemoDialog>
            <Button variant="hero" size="xl" className="uppercase">
              Book Free Demo
            </Button>
          </BookDemoDialog>
          <Button variant="outlineInk" size="xl" asChild>
            <a href={site.phoneHref}>
              <Phone /> Talk to an Advisor
            </a>
          </Button>
          <Button variant="outlineInk" size="xl" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle /> Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
