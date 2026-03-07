import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["ABOUT ME", "EXPERIENCE", "PROJECTS", "CONTACT"];

  return (
    // <header className="relative z-50 flex justify-between items-center px-4 md:px-12 py-4 md:py-10 text-[11px] tracking-[0.2em] md:tracking-[0.25em] font- uppercase">
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
        <button
          className="md:hidden z-50 flex flex-col gap-1.5 p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 origin-center ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 origin-center ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></div>
        </button>

        {/* Mobile Fullscreen Nav Overlay */}
        <div
          className={`fixed inset-0 bg-black z-40 transition-transform duration-500 ease-in-out flex flex-col px-10 py-24 ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
        >
          <div className="flex flex-col gap-4 items-start">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-6xl font-semibold tracking-tight leading-tight hover:opacity-70 transition-opacity capitalize text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.toLowerCase().replace("about me", "About me")}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Footer Info */}
          <div className="mt-auto space-y-6 text-white">
            <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 font-medium text-white">
              BASED IN NIGERIA.
            </p>
            <div className="space-y-1">
              <p className="text-[14px] tracking-[0.1em] uppercase font-bold opacity-90 text-white">
                SOFTWARE DEVELOPER - DESIGN SYSTEMS & AI
              </p>
              <p className="text-[14px] tracking-[0.1em] uppercase font-bold opacity-90 text-white">
                SPECIALIST
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
