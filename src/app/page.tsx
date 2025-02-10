
import Hero from "@/component/Hero";
import About from "@/component/About";
import Projects from "@/component/Projects";
import Skills from "@/component/Skills";
import Contact from "@/component/Contact";
import Experience from "@/component/Experience";

export default function Home() {
  
  return (
    <div className="min-h-screen">
      <main>
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
