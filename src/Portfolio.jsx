import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useScrollSpy from "./hooks/useScrollSpy";
import Education from "./components/Education";
export default function Portfolio() {
  const { activeSection, isScrolled, scrollToSection } = useScrollSpy();

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden relative">
      {/* Background glow */}
      <div className="fixed inset-0 -z-10 opacity-[0.06] bg-glow" />

      <Header
        activeSection={activeSection}
        isScrolled={isScrolled}
        scrollToSection={scrollToSection}
      />

      {/* pt-20 ensures header never overlaps content */}
      <main className="pt-20">
        <Hero scrollToSection={scrollToSection} />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
