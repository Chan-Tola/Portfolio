import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Container } from "./Container";
import { siteConfig } from "@/shared/config/site";

const socialLinks = [
  {
    name: "GitHub",
    href: siteConfig.links.github,
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: Linkedin,
  },
  {
    name: "Email",
    href: `mailto:${siteConfig.links.email}`,
    icon: Mail,
  },
];

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
  { label: "Resume", href: "/resume" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary/30">
      <Container>
        <div className="py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <Link
                href="/"
                className="text-xl font-bold tracking-tight"
              >
                {siteConfig.author.name}
              </Link>
              <p className="mt-2 text-sm text-muted">
                {siteConfig.title}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary text-muted hover:text-foreground hover:bg-secondary/80 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center text-sm text-muted">
            <p>© {currentYear} {siteConfig.author.name}. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
