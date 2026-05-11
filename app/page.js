import Skills from "./components/Skils";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact"




export default function Home() {
  return (
    <div className="flex flex-col gap-20 md:gap:40 pb-20">
      <section id="home">
        <Hero/>
      </section>
      <section id="skills" className="px-6">
        <Skills/>
      </section>
      <section id="projects" className="px-6">
        <Projects/>
      </section>
      <section id="contact" className="px-6">
        <Contact/>
      </section>

      

      
    </div>
  );
}
                                                                                                                                                                                     