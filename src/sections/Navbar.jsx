import { useState } from "react";
import { motion } from "motion/react";

const Navigation = ({ closeMenu }) => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Project", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];

  const navVariants = {
    open: {
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.07,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
    closed: {
      y: 30,
      opacity: 0,
      transition: {
        duration: 0.15,
      },
    },
  };

  return (
    <motion.ul
      variants={navVariants}
      className="flex flex-col gap-3 p-6 pt-24"
    >
      {links.map((link) => (
        <motion.li
          key={link.name}
          variants={itemVariants}
          whileHover={{ x: 8 }}
          whileTap={{ scale: 0.96 }}
        >
          <a
            href={link.href}
            onClick={closeMenu}
            className="block rounded-xl px-5 py-3 text-2xl font-medium text-neutral-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            {link.name}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

const MenuToggle = ({ isOpen, toggle }) => {
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="relative z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full outline-none"
    >
      <div className="relative flex h-6 w-6 flex-col items-center justify-center">

        {/* TOP LINE */}
        <motion.div
          className="absolute h-[2.5px] w-[19px] rounded-full bg-current"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 0 : -6.5,
          }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
          }}
        />

        {/* MIDDLE LINE */}
        <motion.div
          className="absolute h-[2.5px] w-[19px] rounded-full bg-current"
          animate={{
            opacity: isOpen ? 0 : 1,
            scaleX: isOpen ? 0.5 : 1,
          }}
          transition={{
            duration: 0.15,
            ease: "easeOut",
          }}
        />

        {/* BOTTOM LINE */}
        <motion.div
          className="absolute h-[2.5px] w-[19px] rounded-full bg-current"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? 0 : 6.5,
          }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
          }}
        />

      </div>
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto max-w-7xl c-space">
        <div className="relative flex items-center justify-between py-2 sm:py-0">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="relative z-50 text-xl font-bold text-neutral-400 transition-colors hover:text-white"
          >
            RIO
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex">
            <ul className="nav-ul">

              <li className="nav-li">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-li">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-li">
                <a className="nav-link" href="#project">
                  Projects
                </a>
              </li>

              <li className="nav-li">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>

            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="relative z-50 sm:hidden">
            <MenuToggle
              isOpen={isOpen}
              toggle={toggleMenu}
            />
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="absolute right-0 top-0 sm:hidden"
          >

            {/* Circular Background */}
            <motion.div
              className="absolute left-25 top-0 h-[15rem] w-[28rem] rounded-full bg-[#282b4b] shadow-2xl"
              variants={{
                open: {
                  scale: 2,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 70,
                    damping: 18,
                  },
                },

                closed: {
                  scale: 0.05,
                  opacity: 0,
                  transition: {
                    duration: 1,
                  },
                },
              }}
              style={{
                transformOrigin: "top right",
              }}
            />

            {/* Menu Items */}
            <motion.nav
              variants={{
                open: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delayChildren: 0.15,
                    staggerChildren: 0.07,
                  },
                },

                closed: {
                  y: 50,
                  opacity: 0,
                  transition: {
                    staggerChildren: 0.04,
                    staggerDirection: -1,
                  },
                },
              }}
              className="relative z-40 w-[18rem]"
            >
              <Navigation closeMenu={closeMenu} />
            </motion.nav>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;