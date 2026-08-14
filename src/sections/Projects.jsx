import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import Marquee from "../components/Marquee";
import { twMerge } from "tailwind-merge";

const projects = [
  {
    id: 1,
    title: "Brand Commercial1111",
    category: "Commercial",
    image: "/assets/projects/vid1.png",
    video: "/assets/projects/compressed1080/vid1-web.mp4",
    type: "video",
  },
  {
    id: 2,
    title: "Brand Commercial2",
    category: "Commercial",
    image: "/assets/projects/vid3.png",
    video: "/assets/projects/compressed1080/vid3-web.mp4",
    type: "video",
  },
  {
    id: 3,
    title: "Brand Commercial3",
    category: "Commercial",
    image: "/assets/projects/vid4.png",
    video: "/assets/projects/vid4.mp4",
    type: "video",
  },
  {
    id: 4,
    title: "Brand Commercial4",
    category: "Commercial",
    image: "/assets/projects/vid5.png",
    video: "/assets/projects/compressed1080/vid5-web.mp4",
    type: "video",
  },
  {
    id: 5,
    title: "Brand Commercial5",
    category: "Commercial",
    image: "/assets/projects/vid6.png",
    video: "/assets/projects/compressed1080/vid6-web.mp4",
    type: "video",
  },
  {
    id: 6,
    title: "Brand Commercial6",
    category: "Commercial",
    image: "/assets/projects/vid7.png",
    video: "/assets/projects/compressed1080/vid7-web.mp4",
    type: "video",
  },
  {
    id: 7,
    title: "Brand Commercial7",
    category: "Commercial",
    image: "/assets/projects/vid8.png",
    video: "/assets/projects/compressed1080/vid8-web.mp4",
    type: "video",
  },
  {
    id: 8,
    title: "Brand Commercial8",
    category: "Commercial",
    image: "/assets/projects/vid9.png",
    video: "/assets/projects/compressed1080/vid9-web.mp4",
    type: "video",
  },
  {
    id: 9,
    title: "Brand Commercial9",
    category: "Commercial",
    image: "/assets/projects/vid10.png",
    video: "/assets/projects/compressed1080/vid10-web.mp4",
    type: "video",
  },
  {
    id: 10,
    title: "Brand Commercial10",
    category: "Commercial",
    image: "/assets/projects/vid11.png",
    video: "/assets/projects/compressed1080/vid11-web.mp4",
    type: "video",
  },
  {
    id: 11,
    title: "Brand Commercial11",
    category: "Commercial",
    image: "/assets/projects/vid12.png",
    video: "/assets/projects/compressed1080/vid12-web.mp4",
    type: "video",
  },
  {
    id: 12,
    title: "Brand Commercial12",
    category: "Commercial",
    image: "/assets/projects/vid13.png",
    video: "/assets/projects/vid13.mp4",
    type: "video",
  },
  {
    id: 13,
    title: "Brand Commercial13",
    category: "Commercial",
    image: "/assets/projects/vid14.png",
    video: "/assets/projects/compressed1080/vid14-web.mp4",
    type: "video",
  },
  {
    id: 14,
    title: "Brand Commercial14",
    category: "Commercial",
    image: "/assets/projects/vid15.png",
    video: "/assets/projects/compressed1080/vid15-web.mp4",
    type: "video",
  },
  {
    id: 15,
    title: "Brand Commercial15",
    category: "Commercial",
    image: "/assets/projects/vid16.png",
    video: "/assets/projects/compressed1080/vid16-web.mp4",
    type: "video",
  },
  {
    id: 17,
    title: "My Creative Work",
    category: "Photography",
    image: "/assets/projects/img1.jpg",
    type: "image",
  },
];

const firstRow = projects.slice(0, Math.ceil(projects.length / 2));
const secondRow = projects.slice(Math.ceil(projects.length / 2));

const PlayPauseToggle = ({ isPlaying, setIsPlaying }) => {
  return (
    <div className="relative z-30 flex justify-end mt-2 px-2">
  <button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsPlaying((prev) => !prev);
    }}
    onPointerDown={(e) => e.stopPropagation()}
    onTouchStart={(e) => e.stopPropagation()}
    className="pointer-events-auto relative z-30 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-sm hover:bg-white/10 transition"
  >
    {isPlaying ? "⏸ Pause" : "▶ Play"}
  </button>
</div>
  );
};

const ProjectCard = ({
  title,
  category,
  image,
  video,
  type,
  setPreview,
  setSelectedProject,
}) => {
  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      setPreview(image);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setPreview(null);
    }
  };

const handleClick = () => {
  setPreview(null);

  setSelectedProject({
    title,
    category,
    image,
    video,
    type,
  });
};

  return (
    <figure
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  onClick={handleClick}
  className={twMerge(
    "group relative h-[240px] sm:h-[260px] w-[70vw] sm:w-[380px] cursor-pointer overflow-hidden rounded-xl border border-white/10 p-4"
  )}
>
  {/* Thumbnail Background */}
  <img
    src={image}
    alt=""
    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />

  {/* Content */}
  <div className="relative z-10 flex h-full flex-col justify-between">
    <div>
      <figcaption className="text-sm font-medium text-white">
        {title}
      </figcaption>

      <p className="text-xs font-medium text-white/50">
        {category}
      </p>
    </div>

    <div>
      <p className="text-sm text-white/70">
        Cinematic editing, visual storytelling and creative production.
      </p>
    </div>
  </div>
</figure>
  );
};

const Projects = () => {
  const [preview, setPreview] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // Play / Pause
  const [isPlaying, setIsPlaying] = useState(true);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    damping: 10,
    stiffness: 50,
  });

  const springY = useSpring(y, {
    damping: 10,
    stiffness: 50,
  });

  const handleMouseMove = (e) => {
    if (window.innerWidth <= 768) return;

    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <section
        onMouseMove={handleMouseMove}
        className="relative c-space mt-25 md:mt-25"
      >
        <h2 className="text-heading" id="project">
          My Projects
        </h2>

        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

        {/* Play / Pause */}
        <div className="relative z-30 flex justify-end mt-2 px-2">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsPlaying((prev) => !prev);
            }}
            onPointerDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            className="pointer-events-auto relative z-30 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-sm hover:bg-white/10 transition"
          >
            {isPlaying ? "⏸ Pause" : "▶ Play"}
          </button>
        </div>

        {/* Marquees */}
        <div className="relative flex flex-col items-center justify-center w-full mt-3 overflow-hidden">
          {/* ROW 1 */}
          <Marquee
            pauseOnHover
            playing={isPlaying}
            className="[--duration:20s]"
          >
            {firstRow.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                setPreview={setPreview}
                setSelectedProject={setSelectedProject}
              />
            ))}
          </Marquee>

          {/* ROW 2 */}
          <Marquee
            reverse
            pauseOnHover
            playing={isPlaying}
            className="[--duration:20s]"
          >
            {secondRow.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                setPreview={setPreview}
                setSelectedProject={setSelectedProject}
              />
            ))}
          </Marquee>

          {/* Fade */}

          <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-black to-transparent" />

          <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-black to-transparent" />
        </div>

        {/* Floating Preview */}

        {preview && (
          <motion.img
            className="fixed top-0 left-0 z-50 hidden md:block object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
            src={preview}
            alt=""
            style={{
              x: springX,
              y: springY,
            }}
          />
        )}
      </section>

      {/* Project Popup */}

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center w-full h-full p-4 overflow-y-auto bg-black/60 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/10 bg-[#101725] shadow-2xl"
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute z-20 p-2 rounded-full top-3 right-3 sm:top-5 sm:right-5 bg-black/60 hover:bg-gray-500 transition"
            >
              <img
                src="/assets/close.svg"
                alt="Close"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </button>

            {/* Project Video */}

            {selectedProject.type === "video" ? (
              <video
                src={selectedProject.video}
                controls
                autoPlay
                playsInline
                className="w-full max-h-[75vh] object-contain"
              />
            ) : (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full max-h-[75vh] object-contain"
              />
            )}

            {/* Project Info */}

            <div className="p-4 sm:p-6">
              <p className="text-sm uppercase text-cyan-400">
                {selectedProject.category}
              </p>

              <h3 className="mt-1 text-xl sm:text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Projects;



