import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Globe = dynamic(() => import("@/components/Globe"), { ssr: false });

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function History() {
  const experience = [
    {
      year: "Now",
      title: "Frontend Software Engineer",
      company: "Cuoral",
      link: "https://cuoral.com/",
    },
    {
      year: "2025",
      title: "Frontend Software Developer",
      company: "OurPropertyNG",
      link: "https://ourproperty.ng/",
    },
    {
      year: "2024",
      title: "Frontend Software Engineer",
      company: "SFCollab",
      link: "https://sfcollab.com/",
    },
    {
      year: "2024",
      title: "Frontend Software Engineer",
      company: "CanadianNewsHub",
      link: "https://canadiannewshub.ca/",
    },
    {
      year: "2023",
      title: "Frontend Software Developer",
      company: "Innobyte Services",
      link: "https://www.innobyteservices.com/",
    },
    {
      year: "2022",
      title: "Frontend Engineer (Internship)",
      company: "Innobyte Services",
      link: "https://www.innobyteservices.com/",
    },
  ];

  const [globeSize, setGlobeSize] = useState(500);

  useEffect(() => {
    const update = () => setGlobeSize(window.innerWidth < 768 ? 280 : 500);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
      <div
        className="relative w-full overflow-hidden rounded-3xl group text-white"
        style={{ clipPath: "inset(0)" }}
      >
        {/* Background Globe */}
        <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
          <Globe size={globeSize} />
        </div>

        <motion.div
          className="relative z-10 flex flex-col px-8 md:px-32 py-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experience.map((item) => (
            <motion.div
              key={item.year + item.company}
              className="flex md:flex-row md:justify-between items-start md:items-center gap-4 border-b-[0.2px] border-white/20 py-8 px-4 -mx-4"
              variants={rowVariants}
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.05)",
                x: 6,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
            >
              <div className="flex flex-col">
                <p className="text-2xl md:text-4xl pb-1">{item.title}</p>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base md:text-xl font-light underline opacity-70 hover:opacity-100 transition-opacity"
                >
                  {item.company}{" "}
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden md:block text-white/30">{`--->`}</span>
                <p className="text-xl md:text-2xl font-medium">{item.year}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default History;
