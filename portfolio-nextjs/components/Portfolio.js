import React, { useState, useEffect } from 'react'
import Image from "next/image";
import Link from "next/link";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Portfolio() {
  const [projectFilter, setProjectFilter] = useState("all");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const projects = [
    {
      id: 1,
      type: "web",
      name: "Adoration Paints",
      image: "/images/projects/Screenshot 2025-02-13 042438.png",
      tech: ["React", "Next.js", "Tailwind"],
      desc: "Adoration Paints is a premium painting company that produces paints and  offers diverse painting services.",
      demo: "https://paint-site-p.vercel.app/",
      github: "https://github.com/StephenOnyeka/Projects/tree/main/paint-site",
    },
    {
      id: 2,
      type: "web",
      name: "DNK",
      image: "/images/projects/Screenshot 2025-02-12 221629.png",
      tech: ["React", "JSON", "Node.js"],
      desc: "Ecommerce platform demo with cart and auth.",
      demo: "https://business-app-don.vercel.app/",
      github:
        "https://github.com/StephenOnyeka/Projects/tree/main/my-business-app",
    },
    {
      id: 3,
      type: "web",
      name: "Lenis",
      image: "/images/Screenshot 2025-02-19 010607.png",
      tech: ["Next.js", "JSON", "Tailwind"],
      desc: "A skincare brand website demo that solves skin your problems by using their product and connects you with a dermatologist.",
      demo: "https://lenis-beryl.vercel.app/",
      github: "https://github.com/StephenOnyeka/Projects/tree/main/beauty-site",
    },
    {
      id: 4,
      type: "web",
      name: "Kingster",
      image: "/images/projects/Screenshot 2025-02-12 222317.png",
      tech: ["Next.js", "Tailwind"],
      desc: "A unique school website with modern UI/UX.",
      demo: "https://kingster.vercel.app/",
      github:
        "https://github.com/StephenOnyeka/Projects/tree/main/kingster-project",
    },
    {
      id: 5,
      type: "web",
      name: "AJCI Foods",
      image: "/images/Screenshot 2025-02-19 010423.png",
      tech: ["React", "JSON"],
      desc: "A unique platform that vouches for healthy living; From farm to table.",
      demo: "https://demo-ajci.vercel.app/",
      github:
        "https://github.com/StephenOnyeka/Projects/tree/main/nextjs-shopify-demo",
    },
    {
      id: 6,
      type: "web",
      name: "COLOR",
      image: "/images/projects/Screenshot 2025-02-13 040455.png",
      tech: ["HTML", "CSS", "Javascript"],
      desc: "A portfolio website built with main focus on color gradience",
      demo: "https://stephenonyeka.github.io/lan-page/#home",
      github: "https://github.com/StephenOnyeka/lan-page",
    },
    {
      id: 7,
      type: "mobile",
      name: "Serumu",
      image: "/images/projects/Black-Titanium.png",
      tech: ["React Native", "Expo"],
      desc: "A product mobile application demo for a serum company",
      demo: "#",
      github: "#",
    },
    {
      id: 8,
      type: "mobile",
      name: "MedicSphere",
      image: "/images/projects/my-Medic app.png",
      tech: ["React Native", "Expo", "Firebase"],
      desc: "Real-time chat and medical info app; Connects you with doctors who offer their services based on category of field",
      demo: "#",
      github: "#",
    },
    {
      id: 9,
      type: "mobile",
      name: "Leafy",
      image: "/images/projects/iPhone 16 (4).png",
      tech: ["React Native", "Expo", "JSON"],
      desc: "Ecommerce for plants demo; for selling unique plants for deco based on category",
      demo: "#",
      github: "https://github.com/StephenOnyeka/Plants-app",
    },
  ];

  const filteredProjects =
    projectFilter === "all"
      ? projects
      : projects.filter((p) => p.type === projectFilter);

  return (
    <div
      className="w-full flex flex-col items-center justify-center pt-10"
      data-aos="fade-up"
    >
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 sticky top-0 z-30 bg-black/50 backdrop-blur-md md:pt-20 py-4 w-full">
        {["web", "mobile", "all"].map((filter) => (
          <button
            key={filter}
            className={`py-2 font-Inter text-xs md:text-sm tracking-widest uppercase transition-all duration-300 ${
              projectFilter === filter 
                ? "text-white border-b border-white" 
                : "text-white/40 hover:text-white/80"
            }`}
            onClick={() => setProjectFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="w-full flex flex-col gap-10 mb-16">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col-reverse md:flex-row h-auto md:h-[200px] overflow-hidden border-b-[0.2px] border-white/20 hover:border-white/30 transition-all duration-500 group shadow-2xl hover:shadow-blue-900/10"
          >
            {/* <div className="px-4 md:px-8 p-8 flex flex-col flex-grow"> */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start w-full mb-4">
                <h3 className="text-3xl text-white group-hover:text-white transition-colors">
                  {project.name}
                </h3>
                <span className="hidden md:block text-white/30">{`--->`}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase border border-white/10 text-white/60 bg-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm text-white mt-auto">
                {project.desc}
              </p>
            </div>

            <div className="relative overflow-hidden aspect-[4/3] md:aspect-[4/4] w-full md:w-[300px]">
               <Image
                src={project.image}
                fill
                alt={`${project.name} preview`}
                className="object-contain object-top transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
              <div className="flex gap-3 absolute bottom-4 right-4">
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 border border-white/10 hover:border-white/20"
                  >
                    <HiMiniArrowTopRightOnSquare size={18} />
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 border border-white/10 hover:border-white/20"
                  >
                    <FaGithub size={18} />
                  </Link>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
