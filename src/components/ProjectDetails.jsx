import { motion } from "motion/react";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          type="button"
          aria-label="Close"
          onPointerDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
            closeModal();
          }}
          className="absolute z-[10000] top-3 right-3 sm:top-5 sm:right-5
             flex items-center justify-center
             w-10 h-10 rounded-full
             bg-black/70 border border-white/20
             cursor-pointer pointer-events-auto touch-manipulation"
        >
          <img
            src={`${import.meta.env.BASE_URL}assets/close.svg`}
            alt="Close"
            className="w-5 h-5 sm:w-6 sm:h-6 pointer-events-none"
          />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p className="mb-3 font-normal text-neutral-400">{subDesc}</p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
