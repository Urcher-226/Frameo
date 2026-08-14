import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import { Particles } from "../components/Particles";
const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space z-10 section-spacing relative pt-10 md:pt-14" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-6 md:auto-rows-[16rem] mt-10">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/editing.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Niladri Mondal</p>
            <p className="subtext">
              I specialize in video editing, motion graphics, and visual storytelling, creating engaging content that turns ideas into compelling visual experiences.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-2 p-6 bg-gradient-to-b from-storm to-indigo rounded-2xl">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full "
          >
            <p className="flex items-end text-5xl text-neutral-400 ">
              Editing is an Art <br /> AND I am the Artist
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="CUT"
              containerRef={grid2Container}
            />

            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="COLOR"
              containerRef={grid2Container}
            />

            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="MOTION"
              containerRef={grid2Container}
            />

            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="STORY"
              containerRef={grid2Container}
            />

            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="TIMING"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/davinci.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/premeir_pro.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/after_effects.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in India, collaborating with brands and creators worldwide.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-5 p-6 bg-gradient-to-b from-storm to-indigo rounded-2xl">
          <div className="z-10 w-[50%]">
            <p className="headText">Editing Tools</p>
            <p className="subtext">
              Blending AI-powered tools with traditional editing techniques to
              create faster, smarter, and more compelling visual stories.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
