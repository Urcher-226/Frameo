import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import Marquee from "../components/Marquee";
import { twMerge } from "tailwind-merge";
const BASE_URL = import.meta.env.BASE_URL;

const projects = [
  {
    id: 1,
    title: "Coaching Institute Promo",
    category: "Video Editing",
    image: `${BASE_URL}assets/projects/vid1.png`,
    video: `${BASE_URL}assets/projects/compressed1080/vid1-web.mp4`,
    type: "video",
  },
  {
    id: 2,
    title: "Sports Content Edit",
    category: "Video Editing",
    image: `${BASE_URL}assets/projects/vid3.png`,
    video: `${BASE_URL}assets/projects/compressed1080/vid3-web.mp4`,
    type: "video",
  },
  {
    id: 3,
    title: "Scorpio Cinematic Edit",
    category: "Automotive Video",
    image: `${BASE_URL}assets/projects/vid4.png`,
    video: `${BASE_URL}assets/projects/vid4.mp4`,
    type: "video",
  },
  {
    id: 4,
    title: "Footwear Product Promo",
    category: "Product Commercial",
    image: `${BASE_URL}assets/projects/vid5.png`,
    video: `${BASE_URL}assets/projects/compressed1080/vid5-web.mp4`,
    type: "video",
  },
  {
    id: 5,
    title: "Fortuner Cinematic Edit",
    category: "Automotive Video",
    image: `${BASE_URL}assets/projects/vid6.png`,
    video: `${BASE_URL}assets/projects/compressed1080/vid6-web.mp4`,
    type: "video",
  },
  {
    id: 6,
    title: "Fitness Influencer Edit",
    category: "Fitness Content",
    image: `${BASE_URL}assets/projects/vid7.png`,
    video: `${BASE_URL}assets/projects/compressed1080/vid7-web.mp4`,
    type: "video",
  },
  {
    id: 7,
    title: "Ego Lifting Edit",
    category: "Fitness Content",
    image: `${BASE_URL}assets/projects/vid8.png`,
    video: `${BASE_URL}assets/projects/compressed1080/vid8-web.mp4`,
    type: "video",
  },
  {
    id: 8,
    title: "Athlete Motivation Edit",
    category: "Fitness Content",
    image: `${BASE_URL}assets/projects/vid9.png`,
    video: `${BASE_URL}assets/projects/compressed1080/vid9-web.mp4`,
    type: "video",
  },
  {
    id: 9,
    title: "Defence Training Promo",
    category: "Institute Promotion",
    image: `${BASE_URL}assets/projects/vid10.png`,
    video: `${BASE_URL}assets/projects/compressed1080/vid10-web.mp4`,
    type: "video",
  },
  {
    id: 10,
    title: "Coaching Promo Edit",
    category: "Education Content",
    image: `${BASE_URL}assets/projects/vid11.png`,
    video: `${BASE_URL}assets/projects/compressed1080/vid11-web.mp4`,
    type: "video",
  },
  {
    id: 11,
    title: "Protein Shop Promo",
    category: "Product Promotion",
    image: `${BASE_URL}assets/projects/vid12.png`,
    video: `${BASE_URL}assets/projects/compressed1080/vid12-web.mp4`,
    type: "video",
  },
  {
    id: 12,
    title: "ASUS TUF Cinematic Edit",
    category: "Tech & Product",
    image: `${BASE_URL}assets/projects/vid13.png`,
    video: `${BASE_URL}assets/projects/vid13.mp4`,
    type: "video",
  },
  {
    id: 13,
    title: "When Relatives Visit",
    category: "Meme & Comedy",
    image: `${BASE_URL}assets/projects/vid14.png`,
    video: `${BASE_URL}assets/projects/compressed1080/vid14-web.mp4`,
    type: "video",
  },
  {
    id: 14,
    title: "Gym Motivation Edit",
    category: "Fitness Content",
    image: `${BASE_URL}assets/projects/vid15.png`,
    video: `${BASE_URL}assets/projects/compressed1080/vid15-web.mp4`,
    type: "video",
  },
  {
    id: 15,
    title: "Nature Travel Edit",
    category: "Travel Content",
    image: `${BASE_URL}assets/projects/vid16.png`,
    video: `${BASE_URL}assets/projects/compressed1080/vid16-web.mp4`,
    type: "video",
  },
  {
    id: 17,
    title: "Travel Photo Edit",
    category: "Photo Editing",
    image: `${BASE_URL}assets/projects/img1.jpg`,
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
    setPreview({
      image,
      video,
    });
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
  onMouseLeave={() => setPreview(null)}
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
        Creative editing, engaging visuals and storytelling that bring every idea to life.
      </p>
    </div>
  </div>
</figure>
  );
};

const Projects = () => {
  const [preview, setPreview] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);


  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

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
        <div className="relative z-[100] flex justify-end sm:justify-end -mt-12 mb-4 px-2 pointer-events-none">
          <button
            type="button"
            aria-label={isPlaying ? "Pause projects" : "Play projects"}
            onPointerDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsPlaying((prev) => !prev);
            }}
            className="
      pointer-events-auto
      relative
      z-[100]
      w-[62px]
      h-[40px]
      p-[4px]
      rounded-full
      bg-[#32105a]
      border border-purple-400/10
      shadow-[0_4px_18px_rgba(0,0,0,0.35)]
      cursor-pointer
      select-none
      touch-manipulation
      overflow-hidden
      transition-transform duration-200
      hover:scale-105
      active:scale-95
    "
          >
            {/* Sliding circle */}
            <span
              className={`
        absolute
        left-[4px]
        top-[4px]
        z-10
        flex
        h-[30px]
        w-[30px]
        items-center
        justify-center
        rounded-full
        bg-[#9d12ff]
        text-white
        text-[10px]
        shadow-[0_0_16px_rgba(157,18,255,0.55)]
        will-change-transform
        transition-transform
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${isPlaying ? "translate-x-[23px]" : "translate-x-0"}
      `}
            >
              {isPlaying ? "❚❚" : "▶"}
            </span>
          </button>
        </div>

        {/* Marquees */}
        <div className="relative z-[1] isolate w-full overflow-visible">
          <Marquee pauseOnHover playing={isPlaying} className="project-marquee">
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

        {preview &&
          (preview.video ? (
            <motion.video
              key={preview.video}
              className="fixed top-0 left-0 z-50 hidden md:block object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
              src={preview.video}
              muted
              autoPlay
              playsInline
              preload="metadata"
              onLoadedMetadata={(e) => {
                e.currentTarget.currentTime = 0;
                e.currentTarget.play();

                setTimeout(() => {
                  e.currentTarget.pause();
                }, 3000);
              }}
              style={{
                x: springX,
                y: springY,
              }}
            />
          ) : (
            <motion.img
              key={preview.image}
              className="fixed top-0 left-0 z-50 hidden md:block object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
              src={preview.image}
              alt=""
              style={{
                x: springX,
                y: springY,
              }}
            />
          ))}
      </section>

      {/* Project Popup */}

      {selectedProject && (
        <div
          className="
    project-modal
    fixed inset-0
    z-[99999]
    isolate
    flex items-center justify-center
    p-3 sm:p-5
    bg-black/65
    backdrop-blur-md
    pointer-events-auto
    touch-none
  "
        >
          <motion.div
            className="
    project-modal-content
    relative
    z-[100000]
    pointer-events-auto
    w-full
    max-w-5xl
    max-h-[92vh]
    overflow-y-auto
    rounded-2xl
  "
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            onPointerDown={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              aria-label="Close project"
              onPointerDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onPointerUp={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelectedProject(null);
              }}
              className="
    project-close-button
    absolute
    top-3 right-3
    sm:top-5 sm:right-5
    z-[100001]
    pointer-events-auto
    touch-manipulation
    select-none
    cursor-pointer
    flex items-center justify-center
    w-10 h-10
    rounded-full
    bg-black/80
    border border-white/20
  "
            >
              <img
                src={`${BASE_URL}assets/close.svg`}
                alt="Close"
                className="w-5 h-5 pointer-events-none"
              />
            </button>

            {/* Media */}
            {selectedProject.type === "video" ? (
              <video
                key={selectedProject.video}
                src={selectedProject.video}
                controls
                playsInline
                preload="metadata"
                className="block w-full max-h-[70vh] object-contain bg-black"
                onPointerDown={(e) => e.stopPropagation()}
              />
            ) : (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="block w-full max-h-[70vh] object-contain"
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



