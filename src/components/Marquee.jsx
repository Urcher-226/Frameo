import { twMerge } from "tailwind-merge";
import { useRef } from "react";

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

  // Mouse drag
  const isDragging = useRef(false);
  const mouseStart = useRef(0);

  const moveMarquee = (amount) => {
    if (playing || !marqueeRef.current) return;

    const tracks = marqueeRef.current.querySelectorAll("[data-marquee-track]");

    tracks.forEach((track) => {
      const animations = track.getAnimations();

      animations.forEach((animation) => {
        if (animation.playState === "paused") {
          const currentTime = Number(animation.currentTime) || 0;

          animation.currentTime = currentTime + amount;
        }
      });
    });
  };

  // =========================
  // Mouse wheel
  // =========================

  const handleWheel = (e) => {
    if (playing || vertical) return;

    const amount = e.deltaX !== 0 ? e.deltaX : e.deltaY;

    moveMarquee(amount * 20);
  };

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

  // =========================
  // Mouse Drag / Desktop
  // =========================

  const handleMouseDown = (e) => {
    if (playing || vertical) return;

    if (e.target.closest("button, a")) return;

    isDragging.current = true;
    mouseStart.current = e.clientX;

    marqueeRef.current?.classList.add("cursor-grabbing");
  };

  const handleMouseMove = (e) => {
    if (
      playing ||
      vertical ||
      !isDragging.current
    )
      return;

    const difference = mouseStart.current - e.clientX;

    if (Math.abs(difference) > 0) {
      moveMarquee(difference * 12);
      mouseStart.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;

    marqueeRef.current?.classList.remove("cursor-grabbing");
  };

  const handleMouseLeave = () => {
    isDragging.current = false;

    marqueeRef.current?.classList.remove("cursor-grabbing");
  };





  return (
    <div
      ref={marqueeRef}
      {...props}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
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





