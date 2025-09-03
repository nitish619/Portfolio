import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import { HeroSection } from "@/components/hero-section-9";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary">
      <main>
        <HeroSection />
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Skills Section */}
        <Skills />

        {/* Contact Section */}
        <Contact />
      </main>
    </div>
  );
}
