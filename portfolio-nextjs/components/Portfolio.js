import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMiniArrowTopRightOnSquare } from 'react-icons/hi2';
import { FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const filterVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ProjectCard = ({ project, rowVariants }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const words = project.desc.split(' ');
  const isLongDescription = words.length > 30;
  
  const displayDesc = isExpanded || !isLongDescription
    ? project.desc
    : words.slice(0, 15).join(' ') + '...';

  return (
    <motion.div
      className="flex flex-col-reverse md:flex-row h-auto overflow-hidden border-b-[0.2px] border-white/20 hover:border-white/30 transition-colors duration-500 group shadow-2xl hover:shadow-blue-900/10"
      variants={rowVariants}
      whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
    >
      <div className="p-8 max-sm:p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start w-full mb-4">
          <h3 className="text-3xl text-white group-hover:text-white transition-colors">
            {project.name}
          </h3>
          <span className="hidden md:block text-white/30">{`--->`}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
        {/* <div className="flex flex-wrap gap-2 mb-0"> */}
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase border border-white/10 text-white/60 bg-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <p className="text-sm max-sm:text-sm text-white inline">{displayDesc}</p>
          {isLongDescription && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-white/60 hover:text-white text-sm ml-2 font-medium focus:outline-none underline decoration-white/30 underline-offset-2"
            >
              {isExpanded ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>
      </div>

      <motion.div
        // className="relative overflow-hidden aspect-[4/3] md:aspect-[4/4] w-full md:w-[300px] shrink-0"
        className="relative overflow-hidden aspect-[4/3] md:aspect-[4/3] w-full md:w-[250px] shrink-0"
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={project.image}
          fill
          alt={`${project.name} preview`}
          className="object-contain object-top transition-all duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
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
      </motion.div>
    </motion.div>
  );
};

function Portfolio() {
  const [projectFilter, setProjectFilter] = useState('all');

  // const projects = [
  //   {
  //     id: 1,
  //     type: 'web',
  //     name: 'Adoration Paints',
  //     image: '/images/projects/Screenshot 2025-02-13 042438.png',
  //     tech: ['React', 'Next.js', 'Tailwind'],
  //     desc: 'Adoration Paints is a premium painting company that produces paints and  offers diverse painting services.',
  //     demo: 'https://paint-site-p.vercel.app/',
  //     github: 'https://github.com/StephenOnyeka/Projects/tree/main/paint-site',
  //   },
  //   {
  //     id: 2,
  //     type: 'web',
  //     name: 'DNK',
  //     image: '/images/projects/Screenshot 2025-02-12 221629.png',
  //     tech: ['React', 'JSON', 'Node.js'],
  //     desc: 'Ecommerce platform demo with cart and auth.',
  //     demo: 'https://business-app-don.vercel.app/',
  //     github: 'https://github.com/StephenOnyeka/Projects/tree/main/my-business-app',
  //   },
  //   {
  //     id: 3,
  //     type: 'web',
  //     name: 'Lenis',
  //     image: '/images/Screenshot 2025-02-19 010607.png',
  //     tech: ['Next.js', 'JSON', 'Tailwind'],
  //     desc: 'A skincare brand website demo that solves skin your problems by using their product and connects you with a dermatologist.',
  //     demo: 'https://lenis-beryl.vercel.app/',
  //     github: 'https://github.com/StephenOnyeka/Projects/tree/main/beauty-site',
  //   },
  //   {
  //     id: 4,
  //     type: 'web',
  //     name: 'Kingster',
  //     image: '/images/projects/Screenshot 2025-02-12 222317.png',
  //     tech: ['Next.js', 'Tailwind'],
  //     desc: 'A unique school website with modern UI/UX.',
  //     demo: 'https://kingster.vercel.app/',
  //     github: 'https://github.com/StephenOnyeka/Projects/tree/main/kingster-project',
  //   },
  //   {
  //     id: 5,
  //     type: 'web',
  //     name: 'AJCI Foods',
  //     image: '/images/Screenshot 2025-02-19 010423.png',
  //     tech: ['React', 'JSON'],
  //     desc: 'A unique platform that vouches for healthy living; From farm to table.',
  //     demo: 'https://demo-ajci.vercel.app/',
  //     github: 'https://github.com/StephenOnyeka/Projects/tree/main/nextjs-shopify-demo',
  //   },
  //   {
  //     id: 6,
  //     type: "web",
  //     name: "Bons",
  //     image: "/images/projects/Bons.png",
  //     tech: ["HTML", "CSS", "Javascript"],
  //     desc: "A landing page for a Pure Table Water; Mineral-balanced water drawn from protected springs and triple-filtered for a cool taste.",
  //     demo: "https://stephenonyeka.github.io/Bons/",
  //     github: "https://github.com/StephenOnyeka/Bons",
  //   },
  //   {
  //     id: 7,
  //     type: 'mobile',
  //     name: 'Serumu',
  //     image: '/images/projects/Black-Titanium.png',
  //     tech: ['React Native', 'Expo'],
  //     desc: 'A product mobile application demo for a serum company',
  //     demo: '#',
  //     github: '#',
  //   },
  //   {
  //     id: 8,
  //     type: 'mobile',
  //     name: 'MedicSphere',
  //     image: '/images/projects/my-Medic app.png',
  //     tech: ['React Native', 'Expo', 'Firebase'],
  //     desc: 'Real-time chat and medical info app; Connects you with doctors who offer their services based on category of field',
  //     demo: '#',
  //     github: '#',
  //   },
  //   {
  //     id: 9,
  //     type: 'mobile',
  //     name: 'Leafy',
  //     image: '/images/projects/iPhone 16 (4).png',
  //     tech: ['React Native', 'Expo', 'JSON'],
  //     desc: 'Ecommerce for plants demo; for selling unique plants for deco based on category',
  //     demo: '#',
  //     github: 'https://github.com/StephenOnyeka/Plants-app',
  //   },
  // ];

  const projects = [
    {
      id: 1,
      type: "web",
      name: "Adoration Paints",
      image: "/images/projects/Screenshot 2025-02-13 042438.png",
      tech: ["React", "Next.js", "Tailwind"],
      desc: "A marketing site for a paint manufacturer selling both product and service — retail paint alongside professional application/consulting. Built with Next.js for fast, SEO-friendly catalog pages and Tailwind for a clean, brand-led visual system. Structured the catalog and service-booking sections as separate flows so each buyer type finds what they need without wading through the other.",
      demo: "https://paint-site-p.vercel.app/",
      github: "https://github.com/StephenOnyeka/Projects/tree/main/paint-site",
    },
    {
      id: 2,
      type: "web",
      name: "DNK",
      image: "/images/projects/Screenshot 2025-02-12 221629.png",
      tech: ["React", "JSON", "Node.js"],
      desc: "A full ecommerce flow — auth, cart, and checkout — built to handle state across a multi-step purchase path rather than a single page. Cart state persists across routes using React Context, and checkout is gated behind auth to keep order data tied to a real user session. Backend built with Node.js.",
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
      desc: "A skincare site combining a product catalog with a dermatologist-matching flow — two products in one: ecommerce plus a lightweight consultation path. Users answer a short skin-concern quiz that filters and recommends both matching products and relevant dermatologists. Built with Next.js and Tailwind for fast, responsive browsing.",
      demo: "https://lenis-beryl.vercel.app/",
      github: "https://github.com/StephenOnyeka/Projects/tree/main/beauty-site",
    },
    {
      id: 4,
      type: "web",
      name: "Kingster",
      image: "/images/projects/Screenshot 2025-02-12 222317.png",
      tech: ["Next.js", "Tailwind"],
      desc: "A school website rebuilt around information architecture rather than visuals alone — organizing admissions, academics, staff, and events into a navigation structure that stays usable as content depth grows. Built with Next.js and Tailwind, with attention to page-load speed and mobile responsiveness for parents browsing on the go.",
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
      desc: "Farm-to-table food platform structured around product provenance — each listing traces origin from source to buyer, not just a standard catalog grid. Built with React, with a component structure designed to scale as more suppliers and products are added.",
      demo: "https://demo-ajci.vercel.app/",
      github:
        "https://github.com/StephenOnyeka/Projects/tree/main/nextjs-shopify-demo",
    },

    {
      id: 6,
      type: "web",
      name: "Bons",
      image: "/images/projects/Bons.png",
      tech: ["HTML", "CSS", "Javascript"],
      desc: "A single-page product landing site for a bottled water brand, built in vanilla HTML, CSS, and JavaScript with no framework. Kept intentionally in the portfolio to demonstrate strong fundamentals — clean, semantic markup and hand-written responsive layout without relying on a UI library.",
      demo: "https://stephenonyeka.github.io/Bons/",
      github: "https://github.com/StephenOnyeka/Bons",
    },

    {
      id: 7,
      type: "mobile",
      name: "Serumu",
      image: "/images/projects/Black-Titanium.png",
      tech: ["React Native", "Expo"],
      desc: "A mobile app concept for a serum/skincare brand, prototyped in React Native with Expo. Covers product browsing and a routine-building flow for users assembling a skincare regimen.",
      demo: "#",
      github: "#",
    },
    {
      id: 8,
      type: "mobile",
      name: "MedicSphere",
      image: "/images/projects/my-Medic app.png",
      tech: ["React Native", "Expo", "Firebase"],
      desc: "A healthcare app connecting users to doctors by specialty, with real-time chat for consultations. Built with React Native, Expo, and Firebase for live messaging and data sync. This is your most technically ambitious project — real-time chat plus category-based doctor matching — so it deserves a working demo link more than any other project on the site.",
      demo: "#",
      github: "#",
    },
    {
      id: 9,
      type: "mobile",
      name: "Leafy",
      image: "/images/projects/iPhone 16 (4).png",
      tech: ["React Native", "Expo", "JSON"],
      desc: "An ecommerce app for plant sales, organized by decor category (e.g., low-light, statement, pet-safe) rather than a flat product list. Built with React Native and Expo.",
      demo: "#",
      github: "https://github.com/StephenOnyeka/Plants-app",
    },
  ];

  const filteredProjects =
    projectFilter === 'all'
      ? projects
      : projects.filter((p) => p.type === projectFilter);

  return (
    <div className="w-full flex flex-col items-center justify-center pt-10">
      {/* Filter Tabs */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 sticky top-0 z-30 bg-black/50 backdrop-blur-md pt-12 md:pt-20 py-4 w-full"
        variants={filterVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {['web', 'mobile', 'all'].map((filter) => (
          <motion.button
            key={filter}
            className={`py-2 font-Inter text-xs md:text-sm tracking-widest uppercase transition-colors duration-300 ${
              projectFilter === filter
                ? 'text-white border-b border-white'
                : 'text-white/40 hover:text-white/80'
            }`}
            onClick={() => setProjectFilter(filter)}
            whileHover={{ opacity: 0.8 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter}
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={projectFilter}
          className="w-full flex flex-col gap-10 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} rowVariants={rowVariants} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Portfolio;
