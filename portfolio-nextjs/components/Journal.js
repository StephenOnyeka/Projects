import React, { useState } from 'react';
import Image from 'next/image';
import { HiMiniArrowTopRightOnSquare } from 'react-icons/hi2';
import { motion, AnimatePresence } from 'framer-motion';

const blogs = [
  {
    title: "The Developer Who Tried to Outsmart a Button",
    summary:
      "There was once a developer named Daniel who believed two things: 1. Every problem had a logical solution. 2. No Button should..",
    image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fe16v3pjqfc2wz8b4f9rp.png",
    link: "https://dev.to/don_mizzy/the-developer-who-tried-to-outsmart-a-button-2lom",
  },
  {
    title: "Why LCP and INP Matter for Every Developer",
    summary:
      "As a software developer, you might focus on writing clean code...  have you ever thought about how fast your website actually feels to users?",
    image: "/images/projects/DevImg5.png",
    link: "https://dev.to/don_mizzy/why-lcp-and-inp-matter-for-every-developer-hk0",
  },
  {
    title: "From Junior to Senior: Why Your Front-End Skills Need to Grow Beyond the Framework",
    summary:
      "Modern front-end devs need back-end awareness to thrive. Lessons from my journey + actionable tips..",
    image: "/images/projects/DevImg4.jpg",
    link: "https://dev.to/don_mizzy/from-junior-to-senior-why-your-front-end-skills-need-to-grow-beyond-the-framework-16ng",
  },
  {
    title: "The Caffeine Chronicles: What Happens When a Developer is Always High on Coffee",
    summary:
      "Know why coffee boosts your code today but sabotages it tomorrow... how to find the sweet spot.",
    image: "/images/projects/DevImg3.jpg",
    link: "https://dev.to/don_mizzy/the-caffeine-chronicles-what-happens-when-a-developer-is-always-high-on-coffee-3omm",
  },
  {
    title: "How to fix Nodemon running error",
    summary:
      "A step-by-step guide to fixing an error in the terminal if encounter a common problem from nodemon in Node.js",
    image: "/images/projects/DevImg2.png",
    link: "https://dev.to/don_mizzy/nodemon-running-error-fixed-28l0",
  },
  {
    title: "What is the Fate of Technology?",
    summary:
      "Understand the futuristic view and predictions of technological advancement in 2024.",
    image: "/images/projects/DevImg.jpg",
    link: "https://dev.to/don_mizzy/what-is-the-fate-of-technology-2024-3eel",
  },
];

const ITEMS_PER_PAGE = 5;

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
  exit: {
    opacity: 0,
    x: -30,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

function Journal() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentBlogs = blogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="w-full flex flex-col mb-16 relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          className="w-full flex flex-col gap-10"
          variants={listVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {currentBlogs.map((blog, idx) => (
            <motion.div
              key={`${currentPage}-${idx}`}
              className="flex flex-col-reverse md:flex-row h-auto md:h-[200px] items-start md:items-center overflow-hidden border-b-[0.2px] border-white/20 hover:border-white/30 transition-colors duration-500 group shadow-2xl hover:shadow-blue-900/10 cursor-pointer"
              variants={itemVariants}
              onClick={() => window.open(blog.link, '_blank')}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
            >
              <div className="p-4 md:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start w-full mb-4">
                  <h3 className="text-xl md:text-3xl mr-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <span className="hidden md:block text-white/30 group-hover:text-blue-400 transition-colors duration-300">{`--->`}</span>
                </div>

                <p className="text-sm text-white/60 line-clamp-2 mt-auto group-hover:text-white transition-colors duration-300">
                  {blog.summary}
                </p>
              </div>

              <motion.div
                className="relative overflow-hidden aspect-[16/9] md:aspect-[6/4] w-full md:w-[200px]"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={blog.image}
                  fill
                  alt={`${blog.title} preview`}
                  className="object-cover transition-all duration-700 group-hover:scale-110 grayscale-[0.8] group-hover:grayscale-0"
                  loading="lazy"
                  unoptimized={blog.image.startsWith('http')}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute bottom-4 right-4">
                  <div className="p-2.5 rounded-full bg-white/10 hover:bg-blue-400 text-white transition-all duration-300 border border-white/10 hover:border-blue-400">
                    <HiMiniArrowTopRightOnSquare size={18} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-12 px-0">
          <motion.button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`text-xs md:text-sm tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${
              currentPage === 1
                ? 'opacity-20 cursor-not-allowed text-white'
                : 'hover:text-blue-400 cursor-pointer'
            }`}
            whileHover={currentPage !== 1 ? { x: -4 } : {}}
            whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
          >
            {'<'} Previous
          </motion.button>

          <div className="text-[10px] tracking-[0.3em] uppercase opacity-40 font-medium text-white">
            Page {currentPage} of {totalPages}
          </div>

          <motion.button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`text-xs md:text-sm tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${
              currentPage === totalPages
                ? 'opacity-20 cursor-not-allowed text-white'
                : 'hover:text-blue-400 cursor-pointer'
            }`}
            whileHover={currentPage !== totalPages ? { x: 4 } : {}}
            whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
          >
            Next {'>'}
          </motion.button>
        </div>
      )}
    </div>
  );
}

export default Journal;