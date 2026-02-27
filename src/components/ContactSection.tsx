import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-3">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Get in Touch
          </h2>
          <p className="text-muted-foreground">
            Ready to transform your clinic? Book a demo or reach out to our team.
          </p>
        </div>

        <form
          className="bg-secondary rounded-2xl p-8 border border-border space-y-4"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Input placeholder="First name" className="bg-background" />
            <Input placeholder="Last name" className="bg-background" />
          </div>
          <Input type="email" placeholder="Email address" className="bg-background" />
          <Input placeholder="Clinic / Organisation" className="bg-background" />
          <Textarea
            placeholder="How can we help you?"
            rows={4}
            className="bg-background resize-none"
          />
          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary text-primary-foreground font-bold shadow-green hover:bg-primary/90 transition-all duration-200"
          >
            {sent ? "Message Sent ✓" : "Book A Demo"}
          </Button>
        </form>
      </div>
    </section>
  );
}
