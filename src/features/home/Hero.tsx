import { ArrowRight, Download, Mail } from "lucide-react";
import { Container } from "@/shared/components/Container";
import { Button } from "@/shared/components/Button";
import { siteConfig } from "@/shared/config/site";

export function Hero() {
  return (
    <section className="relative py-20 md:py-32">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-accent mb-4">
            Hello, I&apos;m {siteConfig.author.name}
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {siteConfig.author.role}
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            Fourth-year IT student at {siteConfig.author.university} with production 
            experience in building scalable backend systems using{" "}
            <span className="text-foreground font-medium">Laravel</span>,{" "}
            <span className="text-foreground font-medium">FastAPI</span>, and{" "}
            <span className="text-foreground font-medium">PostgreSQL</span>. 
            Passionate about DDD, microservices, and clean architecture.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button as="link" href="/projects" size="lg">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button as="link" href="/cv.pdf" external variant="outline" size="lg">
              Download CV
              <Download className="h-4 w-4" />
            </Button>
            <Button as="link" href="/contact" variant="ghost" size="lg">
              Contact Me
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
