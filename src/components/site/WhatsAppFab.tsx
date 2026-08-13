import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookDemoDialog } from "@/components/site/LeadForm";
import { whatsappLink } from "@/lib/site-data";

/** Floating WhatsApp button plus a sticky mobile demo CTA. */
export function WhatsAppFab() {
  return (
    <>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with EVGEN Learning Academy on WhatsApp"
        className="fixed bottom-20 right-4 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:scale-105 hover:bg-primary-hover md:bottom-6"
      >
        <MessageCircle className="size-6" />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 p-3 backdrop-blur md:hidden">
        <BookDemoDialog>
          <Button variant="hero" size="lg" className="w-full uppercase">
            Book Free Demo
          </Button>
        </BookDemoDialog>
      </div>
    </>
  );
}
