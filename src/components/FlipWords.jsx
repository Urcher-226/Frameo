// "use client";
// import React, { useCallback, useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { twMerge } from "tailwind-merge";
// export const FlipWords = ({ words, duration = 3000, className }) => {
//   const [currentWord, setCurrentWord] = useState(words[0]);
//   const [isAnimating, setIsAnimating] = useState(false);

//   // thanks for the fix Julian - https://github.com/Julian-AT
//   const startAnimation = useCallback(() => {
//     const word = words[words.indexOf(currentWord) + 1] || words[0];
//     setCurrentWord(word);
//     setIsAnimating(true);
//   }, [currentWord, words]);

//   useEffect(() => {
//     if (!isAnimating)
//       setTimeout(() => {
//         startAnimation();
//       }, duration);
//   }, [isAnimating, duration, startAnimation]);

//   return (
//     <AnimatePresence
//       onExitComplete={() => {
//         setIsAnimating(false);
//       }}
//     >
//       <motion.div
//         initial={{
//           opacity: 0,
//           y: 10,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 100,
//           damping: 10,
//         }}
//         exit={{
//           opacity: 0,
//           y: -40,
//           x: 40,
//           filter: "blur(8px)",
//           scale: 2,
//           position: "absolute",
//         }}
//         className={twMerge("z-10 inline-block relative text-left", className)}
//         key={currentWord}
//       >
//         {/* edit suggested by Sajal: https://x.com/DewanganSajal */}
//         {currentWord.split(" ").map((word, wordIndex) => (
//           <motion.span
//             key={word + wordIndex}
//             initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
//             animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//             transition={{
//               delay: wordIndex * 0.3,
//               duration: 0.3,
//             }}
//             className="inline-block whitespace-nowrap"
//           >
//             {word.split("").map((letter, letterIndex) => (
//               <motion.span
//                 key={word + letterIndex}
//                 initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
//                 animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//                 transition={{
//                   delay: wordIndex * 0.3 + letterIndex * 0.05,
//                   duration: 0.2,
//                 }}
//                 className="inline-block"
//               >
//                 {letter}
//               </motion.span>
//             ))}
//             <span className="inline-block">&nbsp;</span>
//           </motion.span>
//         ))}
//       </motion.div>
//     </AnimatePresence>
//   );
// };









import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

export const FlipWords = ({
  words,
  duration = 3000,
  className = "",
}) => {
  const [index, setIndex] = useState(0);

  const nextWord = useCallback(() => {
    setIndex((prev) => (prev + 1) % words.length);
  }, [words.length]);

  useEffect(() => {
    const timer = setTimeout(nextWord, duration);
    return () => clearTimeout(timer);
  }, [index, duration, nextWord]);

  return (
    <span
      className={twMerge(
        "relative inline-grid align-baseline",
        className
      )}
    >
      {/* Invisible sizing layer — position stable rakhe */}
      <span
        className="invisible col-start-1 row-start-1 whitespace-nowrap"
        aria-hidden="true"
      >
        {words.reduce(
          (longest, word) =>
            word.length > longest.length ? word : longest,
          ""
        )}
      </span>

      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className="col-start-1 row-start-1 whitespace-nowrap"
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -40,
            x: 40,
            filter: "blur(8px)",
            scale: 1.35,
          }}
          transition={{
            opacity: {
              duration: 0.25,
            },
            y: {
              type: "spring",
              stiffness: 100,
              damping: 10,
            },
            x: {
              duration: 0.35,
              ease: "easeInOut",
            },
            scale: {
              duration: 0.35,
              ease: "easeInOut",
            },
            filter: {
              duration: 0.25,
            },
          }}
        >
          {words[index].split("").map((letter, letterIndex) => (
            <motion.span
              key={`${words[index]}-${letterIndex}`}
              className="inline-block"
              initial={{
                opacity: 0,
                y: 10,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                delay: letterIndex * 0.05,
                duration: 0.2,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};