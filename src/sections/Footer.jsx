import { mySocials } from "../constants";

const Footer = () => {
  return (
    <footer className="relative w-full">
      <div className="relative z-10 mx-auto max-w-md md:mr-31 lg:mr-35 md:ml-auto">
        <section className="relative mx-auto flex w-[85%] max-w-sm flex-col gap-4 rounded-2xl border border-white/10 bg-black/1 px-5 py-4 text-sm text-neutral-400 backdrop-blur-sm md:mx-0 md:w-full md:max-w-md md:backdrop-blur-xl">
          {/* Smooth top line */}
          <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {/* Socials */}
          <div className="flex justify-center gap-4">
            {mySocials.map((social, index) => (
              <a
                href={social.href}
                key={index}
                className="transition duration-300 hover:scale-110 hover:opacity-100 opacity-70"
              >
                <img src={social.icon} className="h-5 w-5" alt={social.name} />
              </a>
            ))}
          </div>

          {/* Astronaut Model Attribution */}
          <p className="text-center text-[10px] leading-relaxed text-neutral-600">
            3D Model:{" "}
            <a
              href="https://sketchfab.com/3d-models/tenhun-falling-spaceman-fanart-9fd80b6a259f41fd99e6f56eee686dc5"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-neutral-400"
            >
              Tenhun Falling spaceman (FanArt) by wallmasterr
            </a>
            {" · "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-neutral-400"
            >
              CC BY 4.0
            </a>
            {" · Modified for this website"}
          </p>

          {/* 3D Model Attribution */}
          <p className="text-center text-[10px] leading-relaxed text-neutral-600">
            3D Model:{" "}
            <a
              href="https://sketchfab.com/3d-models/magical-abandoned-mine-7ae4754b0db74ba884072215b5d013f5"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-neutral-400"
            >
              Magical Abandoned Mine by WarderiiK
            </a>
            {" · "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-neutral-400"
            >
              CC BY 4.0
            </a>
            {" · Modified for this website"}
          </p>

          {/* Copyright */}
          <p className="text-center text-xs text-neutral-500">
            © 2025 Rio. All rights reserved.
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;