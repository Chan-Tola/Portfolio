import { Mail, ArrowRight } from "lucide-react";
import { Section } from "@/shared/components/Section";
import { Button } from "@/shared/components/Button";
import { siteConfig } from "@/shared/config/site";

export function ContactCTA() {
  return (
    <Section id="contact-cta">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex p-3 rounded-full bg-accent/10 mb-6">
          <Mail className="h-6 w-6 text-accent" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-lg text-muted mb-8">
          I&apos;m currently open to new opportunities and interesting projects. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button as="link" href="/contact" size="lg">
            Get In Touch
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            as="link"
            href={`mailto:${siteConfig.links.email}`}
            external
            variant="outline"
            size="lg"
          >
            Send Email
            <Mail className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Section>
  );
}
