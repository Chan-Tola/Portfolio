import { Hero } from "@/features/home/Hero";
import { About } from "@/features/home/About";
import { Skills } from "@/features/home/Skills";
import { FeaturedProjects } from "@/features/home/FeaturedProjects";
import { Experience } from "@/features/home/Experience";
import { ContactCTA } from "@/features/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <ContactCTA />
    </>
  );
}
