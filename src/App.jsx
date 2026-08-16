import React, { useEffect, useState } from "react";
import GlobalLoader from "./components/GlobalLoader";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { Particles } from "./components/Particles";

const App = () => {
  const [loadedModels, setLoadedModels] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);

  const handleModelLoaded = React.useCallback((modelName) => {
    console.log("MODEL LOADED:", modelName);

    setLoadedModels((prev) => {
      if (prev.has(modelName)) {
        return prev;
      }

      const next = new Set(prev);
      next.add(modelName);

      console.log("LOADED MODELS:", next.size);

      return next;
    });
  }, []);

  useEffect(() => {
    if (loadedModels.size >= 2) {
      setIsLoading(false);
    }
  }, [loadedModels]);

  useEffect(() => {
    if (!isLoading) return;

    const previousOverflow = document.body.style.overflow;
    const previousTouchAction = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.touchAction = previousTouchAction;
    };
  }, [isLoading]);

  const progress = loadedModels.size * 50;

  const status =
    loadedModels.size === 0
      ? "LOADING 3D WORLD"
      : loadedModels.size === 1
        ? "LOADING FINAL ASSET"
        : "READY";
  return (
    <div className="relative w-full bg-black">
      {isLoading && <GlobalLoader progress={progress} status={status} />}

      <Navbar />

      {/* HERO */}
      <section className="relative z-10">
        <Hero onLoaded={handleModelLoaded} />
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
          <Contact onLoaded={handleModelLoaded} />
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
