import Hero from "/components/Hero";
import About from "/components/About";
import Projects from "/components/Projects";
import Experience from "/components/Experience";
import Certifications from "/components/Certifications";
import Skills from "/components/Skills";
import Education from "/components/Education";
import Blog from "/components/Blog";
import Contact from "/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      {/* <Experience /> */}
      <Certifications />
      <Skills />
      <Education />
      {/* <Blog /> */}
      <Contact />
    </main>
  );
}
