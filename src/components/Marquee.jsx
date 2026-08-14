import { twMerge } from "tailwind-merge";
import { useEffect, useRef } from "react";

export default function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  playing = true,
  ...props
}) {
  const marqueeRef = useRef(null);
  const touchStart = useRef(0);

const moveMarquee = (amount) => {
  if (playing || !marqueeRef.current) return;

  const tracks = marqueeRef.current.querySelectorAll(
    "[data-marquee-track]"
  );

  tracks.forEach((track) => {
    const animations = track.getAnimations();

    animations.forEach((animation) => {
      if (animation.playState !== "paused") return;

      const currentTime = Number(animation.currentTime) || 0;

      const duration = animation.effect?.getTiming()?.duration;

      // Keep the animation timeline inside one cycle.
      if (typeof duration === "number" && duration > 0) {
        const nextTime =
          ((currentTime + amount) % duration + duration) % duration;

        animation.currentTime = nextTime;
      } else {
        animation.currentTime = currentTime + amount;
      }
    });
  });
};

  // =========================
  // Mouse wheel
  // =========================



useEffect(() => {
  const marquee = marqueeRef.current;

  if (!marquee) return;

  const handleNativeWheel = (e) => {
    // Only when paused, horizontal, desktop
    if (playing || vertical || window.innerWidth < 768) return;

    const rect = marquee.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const sideZone = rect.width * 0.15;

    // LEFT / RIGHT 15% → normal page vertical scroll
    if (
      mouseX <= sideZone ||
      mouseX >= rect.width - sideZone
    ) {
      return;
    }

    // MIDDLE 70% → completely stop page scroll
    e.preventDefault();
    e.stopPropagation();

    const amount =
      e.deltaX !== 0 ? e.deltaX : e.deltaY;

    moveMarquee(amount * 20);
  };

  marquee.addEventListener("wheel", handleNativeWheel, {
    passive: false,
  });

  return () => {
    marquee.removeEventListener("wheel", handleNativeWheel);
  };
}, [playing, vertical]);

// useEffect(() => {
//   const marquee = marqueeRef.current;

//   if (!marquee) return;

//   const handleWheel = (e) => {
//     // Only paused horizontal marquees
//     if (playing || vertical) return;

//     // Desktop only
//     if (window.innerWidth < 768) return;

//     // STOP PAGE VERTICAL SCROLL
//     e.preventDefault();
//     e.stopPropagation();

//     // Convert mouse wheel movement into horizontal marquee movement
//     const amount = e.deltaX !== 0 ? e.deltaX : e.deltaY;

//     moveMarquee(amount * 20);
//   };

//   // IMPORTANT:
//   // passive:false is required so preventDefault() can
//   // actually stop the browser's page scrolling.
//   marquee.addEventListener("wheel", handleWheel, {
//     passive: false,
//   });

//   return () => {
//     marquee.removeEventListener("wheel", handleWheel);
//   };
// }, [playing, vertical]);

  // =========================
  // Touch / Mobile Swipe
  // =========================

  const handleTouchStart = (e) => {
    if (playing || vertical) return;

    // Don't start marquee dragging from buttons/links
    if (e.target.closest("button, a")) return;

    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (playing || vertical) return;

    if (e.target.closest("button, a")) return;

    const currentX = e.touches[0].clientX;
    const difference = touchStart.current - currentX;

    if (Math.abs(difference) > 0) {
      moveMarquee(difference * 12);
      touchStart.current = currentX;
    }
  };




  return (
    <div
      ref={marqueeRef}
      {...props}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className={twMerge(
        `group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] ${
          vertical ? "flex-col" : "flex-row"
        }`,
        !playing &&
          !vertical &&
          "touch-pan-y cursor-grab select-none",
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            data-marquee-track
            className={twMerge(
              "flex shrink-0 justify-around [gap:var(--gap)]",
              vertical
                ? "animate-marquee-vertical flex-col"
                : "animate-marquee flex-row",

              pauseOnHover &&
                "group-hover:[animation-play-state:paused]",

              !playing &&
                "[animation-play-state:paused]",

              reverse &&
                "[animation-direction:reverse]"
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}





