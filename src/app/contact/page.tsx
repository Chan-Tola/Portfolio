import { Container } from "@/shared/components/Container";
import { ContactForm } from "@/features/contact/ContactForm";
import { siteConfig } from "@/shared/config/site";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with me for freelance opportunities, job offers, or just to say hi.",
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-muted">
              Have a question or want to work together? Leave a message and
              I&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <div className="p-6 rounded-xl border border-border bg-card">
                <h2 className="font-semibold text-xl mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <a
                    href={`mailto:${siteConfig.links.email}`}
                    className="flex items-center gap-3 text-muted hover:text-foreground transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-secondary group-hover:bg-accent/10 transition-colors">
                      <Mail className="h-5 w-5 group-hover:text-accent" />
                    </div>
                    {siteConfig.links.email}
                  </a>

                  <div className="flex items-center gap-3 text-muted">
                    <div className="p-2 rounded-lg bg-secondary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    {siteConfig.author.location}
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="font-medium mb-4">Connect on Social</h3>
                  <div className="flex gap-4">
                    <a
                      href={siteConfig.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary text-muted hover:text-foreground hover:bg-secondary/80 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={siteConfig.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary text-muted hover:text-foreground hover:bg-secondary/80 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-xl mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
