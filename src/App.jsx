import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { Particles } from "./components/Particles";

const App = () => {
  return (
    <div className="relative w-full bg-black">

      <Navbar />

      {/* HERO */}
      <section className="relative z-10">
        <Hero />
      </section>

      {/* MAIN CONTENT + PARTICLES */}
      <main className="relative w-full bg-black">

        {/* Particle Background */}
        <Particles
          className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-black"
          quantity={300}
          ease={80}
          color={"#ffffff"}
          refresh
        />

        {/* Content */}
        <div className="relative z-10">

          {/* ABOUT */}
          <div className="container mx-auto max-w-7xl">
            <About />
          </div>

          {/* PROJECTS */}
          <Projects />

          {/* EXPERIENCES */}
          <Experiences />

        </div>
      </main>

      {/* CONTACT + FOOTER */}
      <div className="relative z-10 w-full bg-black overflow-visible">

        {/* Contact background/model is allowed to overflow */}
        <div className="relative overflow-visible">
          <Contact />
        </div>

        {/* Footer */}
        <div className="relative z-10 ">
          <div className=" ">
            <Footer />
          </div>
        </div>

      </div>

    </div>
  );
};

export default App;