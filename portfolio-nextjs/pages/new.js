import Tech from "@/components/Tech";
import Navbar from "@/components/Navbar";
import React from "react";
import About, { Blogs, Experience, Projects } from "@/components/About";
import History from "@/components/History";
import Portfolio from "@/components/Portfolio";
import Journal from "@/components/Journal";
import Contribution from "@/components/Contribution";
import Connect from "@/components/Connect";
import FadeUp from "@/components/FadeUp";
import { motion } from "framer-motion";

const sectionLabelVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function New() {
  return (
    <>
      {/* ── HERO ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="relative min-h-screen w-full bg-black text-white font-Inter overflow-hidden flex flex-col">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 bg-[url('/images/img.jpeg')] md:bg-[url('/images/Gem.png')] bg-cover bg-no-repeat bg-center md:bg-top">
            <div className="bg-gradient-to-b from-black/10 to-black/80 md:from-black/15 md:to-black/70 h-screen px-8 pt-8 max-sm:px-4 w-full text-white grid grid-cols-1" />
          </div>

          {/* Navbar */}
          <Navbar />

          {/* Marquee */}
          <motion.main
            className="relative z-10 flex-grow flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="marquee-container w-full whitespace-nowrap pointer-events-none select-none">
              <div className="marquee-content flex items-center">
                {[...Array(4)].map((_, i) => (
                  <h1
                    key={i}
                    className="text-[16rem] sm:text-[10rem] md:text-[20rem] leading-none font-medium max-sm:tracking-tight flex items-center pr-12 md:pr-20 opacity-80"
                  >
                    <span className="inline-block">Stephen</span>
                    <span className="inline-block mx-[4rem]">Onyeka</span>
                    <span className="text-[4rem] sm:text-[6rem] md:text-[12vw] flex-shrink-0">
                      •
                    </span>
                  </h1>
                ))}
              </div>
            </div>
          </motion.main>

          {/* Hero Footer Text */}
          <motion.div
            className="relative z-20 px-6 md:px-12 pb-10 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-6 md:gap-0 mt-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="order-1">
              <p className="text-[10px] md:text-[12px] tracking-[0.2em] md:tracking-[0.3em] uppercase font-medium">
                BASED IN NIGERIA.
              </p>
            </div>
            <div className="text-left md:text-right leading-tight order-2">
              <motion.p
                className="text-[2rem] md:text-[3rem]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.75 }}
              >
                Software Engineer
              </motion.p>
              <motion.p
                className="text-[2rem] md:text-[3rem]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
              >
                Design Systems &amp; AI
              </motion.p>
            </div>
          </motion.div>

          <style jsx>{`
            .marquee-container {
              overflow: hidden;
              width: 100%;
            }
            .marquee-content {
              display: flex;
              width: fit-content;
              animation: marquee 35s linear infinite;
            }
            @media (max-width: 768px) {
              .marquee-content {
                animation: marquee 20s linear infinite;
              }
            }
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </div>
      </motion.div>

      {/* ── ABOUT ── */}
      <section id="about" className="bg-black h-full py-12 md:py-20 px-6 md:px-20">
        <FadeUp>
          <motion.div
            variants={sectionLabelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-[14px] tracking-[0.1em] uppercase text-blue-400 font-medium">
              {" "}- ABOUT ME
            </p>
            <br />
          </motion.div>
          <About />
          <Tech />
        </FadeUp>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="bg-black h-full py-12 md:py-20">
        <FadeUp>
          <motion.div
            className="px-4 md:px-20"
            variants={sectionLabelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-[14px] tracking-[0.1em] uppercase text-blue-400 font-medium">
              {" "}- EXPERIENCE
            </p>
            <br />
          </motion.div>
          <div className="px-4 md:px-20">
            <Experience />
          </div>
          <History />
        </FadeUp>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="bg-black h-full py-12 md:py-20 px-6 md:px-20">
        {/* <FadeUp> */}
          <motion.div
            variants={sectionLabelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-[14px] tracking-[0.1em] uppercase text-blue-400 font-normal">
              {" "}{"- PROJECTS"}
            </p>
            <br />
          </motion.div>
          <Projects />
          <Portfolio />
        {/* </FadeUp> */}
      </section>

      {/* ── BLOGS ── */}
      <section id="blogs" className="bg-black h-full py-12 md:py-20 px-6 md:px-20">
        <FadeUp>
          <motion.div
            variants={sectionLabelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-[14px] tracking-[0.1em] uppercase text-blue-400 font-normal">
              {" "}{"- BLOGS"}
            </p>
            <br />
          </motion.div>
          <Blogs />
          <Journal />
        </FadeUp>
      </section>

      {/* ── CONTRIBUTION ── */}
      <section id="contribution" className="bg-black h-full py-12 md:py-20 px-4 md:px-20">
        <FadeUp>
          <motion.div
            variants={sectionLabelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-[14px] tracking-[0.1em] uppercase text-blue-400 font-normal">
              {" "}{"- CONTRIBUTION"}
            </p>
            <br />
          </motion.div>
          <Contribution />
        </FadeUp>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        className="bg-black h-full py-12 md:py-20 px-6 md:px-20 border-t border-white/5"
      >
        <FadeUp>
          <motion.div
            variants={sectionLabelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-[14px] tracking-[0.1em] uppercase text-blue-400 font-medium">
              {" "}{"- CONTACT "}
            </p>
            <br />
          </motion.div>
          <Connect />
        </FadeUp>
      </section>
    </>
  );
}

export default New;
