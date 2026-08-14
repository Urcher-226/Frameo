import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Cinematic", "Engaging", "Creative"];

  const variants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div className="relative z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      
      {/* Desktop View */}
      <div className="hidden md:block">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Rio
        </motion.h1>

        <motion.p
          className="text-5xl font-medium text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          A Video Editor <br /> Dedicated to Crafting
        </motion.p>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
          className="text-5xl font-medium text-neutral-300"
        >
          <FlipWords 
          words={words}
          className="font-black text-white text-8xl"
          />
        </motion.div>

        <motion.p
          className="text-4xl font-medium text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          Video Content
        </motion.p>
      </div>

      {/* Mobile View */}
      <div className="block flex- flex-col space-y-1 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Rio
        </motion.p>

        <motion.p
          className="text-5xl font-black text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          Creating
        </motion.p>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
          className="text-4xl font-black text-neutral-300"
        >
          <FlipWords 
          words={words}
          className="font-bold text-white text-6xl"
          />
        </motion.div>

        <motion.p
          className="text-4xl font-black text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          Video Content
        </motion.p>
      </div>

    </div>
  );
};

export default HeroText;