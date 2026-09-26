import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookDemoDialog } from "@/components/site/LeadForm";
import { navLinks, site, whatsappLink } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import evgenLogo from "@/assets/evgen-logo-dark.webp";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-xl"
          : "border-transparent bg-background",
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-5 sm:h-24 sm:px-8">
        <Link to="/" className="group flex items-center" aria-label={site.name}>
          <img
            src={evgenLogo}
            alt="EVGEN Learning Academy"
            className="h-14 w-auto object-contain sm:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "text-foreground after:w-full" }}
              className="relative px-3 py-2 text-sm font-medium text-muted-foreground transition-colors after:absolute after:bottom-1 after:left-3 after:h-px after:w-0 after:bg-primary after:transition-all hover:text-foreground hover:after:w-[calc(100%-1.5rem)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="hidden size-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-primary hover:text-primary sm:flex"
          >
            <MessageCircle className="size-5" />
          </a>
          <BookDemoDialog>
            <Button variant="hero" className="hidden sm:inline-flex">
              Book Free Demo
            </Button>
          </BookDemoDialog>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex size-10 items-center justify-center rounded-md border border-border lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto grid max-w-6xl gap-1 px-5 py-4 sm:px-8" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-foreground bg-secondary" }}
                className="rounded-md px-3 py-3 font-display text-base font-medium text-muted-foreground"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 grid gap-2">
              <BookDemoDialog>
                <Button variant="hero" size="lg" className="w-full uppercase">
                  Book Free Demo
                </Button>
              </BookDemoDialog>
              <Button variant="outlineDark" size="lg" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle /> Chat on WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
