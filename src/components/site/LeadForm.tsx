import { useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { backgroundOptions, programOptions } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const selectClass =
  "h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-ring";

export function LeadForm({
  className,
  compact = false,
  defaultProgram,
  onDone,
}: {
  className?: string | undefined;
  compact?: boolean | undefined;
  defaultProgram?: string | undefined;
  onDone?: (() => void) | undefined;
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    toast.success("Thank you. Our admissions team will contact you shortly.");
    onDone?.();
  }

  if (submitted) {
    return (
      <div className={cn("rounded-xl border border-primary/40 bg-primary/10 p-8 text-center", className)}>
        <p className="font-display text-lg font-semibold">
          Thank you. Our admissions team will contact you shortly.
        </p>
        <Button variant="outlineDark" className="mt-5" onClick={() => setSubmitted(false)}>
          Submit another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("grid gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="lead-name">Full Name</Label>
        <Input id="lead-name" name="name" required placeholder="Your full name" className="h-11" />
      </div>
      <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
        <div className="grid gap-2">
          <Label htmlFor="lead-phone">Phone Number</Label>
          <Input
            id="lead-phone"
            name="phone"
            type="tel"
            required
            placeholder="+91"
            className="h-11"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="lead-email">Email</Label>
          <Input
            id="lead-email"
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            className="h-11"
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="lead-program">Interested Program</Label>
        <select
          id="lead-program"
          name="program"
          defaultValue={defaultProgram ?? programOptions[0]}
          className={selectClass}
        >
          {programOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="lead-background">Current Background</Label>
        <select id="lead-background" name="background" defaultValue={backgroundOptions[0]} className={selectClass}>
          {backgroundOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <Button type="submit" variant="hero" size="xl" className="mt-1 w-full uppercase">
        Book Free Demo
      </Button>
      <p className="text-xs text-muted-foreground">
        By submitting, you agree to be contacted by EVGEN Learning Academy about programs and demo
        classes.
      </p>
    </form>
  );
}

export function ContactForm({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className={cn("rounded-xl border border-primary/40 bg-primary/10 p-8 text-center", className)}>
        <p className="font-display text-lg font-semibold">
          Thank you. Our admissions team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
        toast.success("Thank you. Our admissions team will contact you shortly.");
      }}
      className={cn("grid gap-4", className)}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="c-name">Name</Label>
          <Input id="c-name" required className="h-11" placeholder="Your name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="c-phone">Phone</Label>
          <Input id="c-phone" type="tel" required className="h-11" placeholder="+91" />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="c-email">Email</Label>
        <Input id="c-email" type="email" required className="h-11" placeholder="you@email.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="c-program">Program Interested In</Label>
        <select id="c-program" defaultValue={programOptions[0]} className={selectClass}>
          {programOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="c-message">Message</Label>
        <Textarea id="c-message" rows={5} placeholder="How can we help?" />
      </div>
      <Button type="submit" variant="hero" size="xl" className="w-full">
        Send Enquiry
      </Button>
    </form>
  );
}

export function BookDemoDialog({
  children,
  defaultProgram,
}: {
  children: ReactNode;
  defaultProgram?: string | undefined;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl uppercase">Book a Free Demo</DialogTitle>
          <DialogDescription>
            Tell us where you are today and our admissions team will guide you to the right EV
            learning path.
          </DialogDescription>
        </DialogHeader>
        <LeadForm compact defaultProgram={defaultProgram} />
      </DialogContent>
    </Dialog>
  );
}
