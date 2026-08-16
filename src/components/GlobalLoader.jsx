const GlobalLoader = ({
  progress = 0,
  status = "LOADING 3D WORLD",
}) => {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black text-white">
      <div className="w-[min(420px,80vw)] text-center">

        <div className="mb-10">
          <h1 className="text-3xl font-semibold tracking-[0.35em]">
            FRAMEO
          </h1>

          <div className="mt-3 text-[10px] tracking-[0.45em] text-white/40">
            DIGITAL EXPERIENCE
          </div>
        </div>

        <div className="mb-4 flex items-end justify-between">
          <span className="text-xs tracking-[0.25em] text-white/50">
            {status}
          </span>

          <span className="text-2xl font-light tabular-nums">
            {Math.round(progress)}%
          </span>
        </div>

        <div className="h-[2px] w-full overflow-hidden bg-white/10">
          <div
            className="h-full bg-white transition-[width] duration-500 ease-out"
            style={{
              width: `${Math.min(Math.max(progress, 0), 100)}%`,
            }}
          />
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="h-1 w-1 animate-pulse rounded-full bg-white/80" />
          <span className="h-1 w-1 animate-pulse rounded-full bg-white/50 [animation-delay:150ms]" />
          <span className="h-1 w-1 animate-pulse rounded-full bg-white/30 [animation-delay:300ms]" />
        </div>

      </div>
    </div>
  );
};

export default GlobalLoader;