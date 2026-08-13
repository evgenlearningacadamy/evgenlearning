import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BookDemoDialog } from "@/components/site/LeadForm";
import { Eyebrow, Section, SectionTitle } from "@/components/site/Section";
import { faqs } from "@/lib/site-data";

export function FaqSection() {
  return (
    <Section id="faq" tone="muted">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Eyebrow>Questions</Eyebrow>
          <SectionTitle>Everything you might be wondering</SectionTitle>
          <BookDemoDialog>
            <Button variant="hero" size="lg" className="mt-8 uppercase">
              Book Free Demo
            </Button>
          </BookDemoDialog>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.q} value={`faq-${i}`}>
              <AccordionTrigger className="text-left font-display text-base font-semibold">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
