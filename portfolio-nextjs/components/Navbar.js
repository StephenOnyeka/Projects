import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const overlayVariants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: { duration: 0.4, ease: [0.55, 0, 0.1, 1] },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.07 + 0.15, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["ABOUT ME", "EXPERIENCE", "PROJECTS", "CONTACT"];

  return (
    <div className="fixed top-0 left-0 w-full z-50 ">
      <header className="relative z-50 flex justify-between items-center px-4 md:px-12 py-4 md:py-10 text-[11px] tracking-[0.2em] md:tracking-[0.25em] font- uppercase">
        <div className="hover:opacity-70 cursor-pointer transition-opacity z-50 text-white whitespace-nowrap">
          {" "}
          <Link href="/">STEPHEN ONYEKA </Link>{" "}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 whitespace-nowrap">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="hover:opacity-70 transition-opacity text-white whitespace-nowrap"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <motion.button
          className="md:hidden z-50 flex flex-col gap-1.5 p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          whileTap={{ scale: 0.85 }}
        >
          <motion.div
            className="w-6 h-0.5 bg-white origin-center"
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-white"
            animate={isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-white origin-center"
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        {/* Mobile Fullscreen Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-nav"
              className="fixed inset-0 bg-black z-40 flex flex-col px-10 py-24"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col gap-4 items-start">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item}
                    custom={i}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-6xl font-semibold tracking-tight leading-tight hover:opacity-70 transition-opacity capitalize text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.toLowerCase().replace("about me", "About me")}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Menu Footer Info */}
              <motion.div
                className="mt-auto space-y-6 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
              >
                <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 font-medium text-white">
                  BASED IN NIGERIA.
                </p>
                <div className="space-y-1">
                  <p className="text-[14px] tracking-[0.1em] uppercase font-bold opacity-90 text-white">
                    SOFTWARE DEVELOPER - DESIGN SYSTEMS &amp; AI
                  </p>
                  <p className="text-[14px] tracking-[0.1em] uppercase font-bold opacity-90 text-white">
                    SPECIALIST
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}

export default Navbar;
