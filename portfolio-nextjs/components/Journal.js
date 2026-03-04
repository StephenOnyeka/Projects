import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2"

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
    title:
      "From Junior to Senior: Why Your Front-End Skills Need to Grow Beyond the Framework",
    summary:
      "Modern front-end devs need back-end awareness to thrive. Lessons from my journey + actionable tips..",
    image: "/images/projects/DevImg4.jpg",
    link: "https://dev.to/don_mizzy/from-junior-to-senior-why-your-front-end-skills-need-to-grow-beyond-the-framework-16ng",
  },
  {
    title:
      "The Caffeine Chronicles: What Happens When a Developer is Always High on Coffee",
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

function Journal() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentBlogs = blogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(newPage);
        setIsTransitioning(false);
      }, 300); // Match this with your animation duration
    }
  };

  return (
    <div className="w-full flex flex-col mb-16 relative">
      <div 
        className={`w-full flex flex-col gap-10 ${
          !isTransitioning ? 'fade-in-right' : 'opacity-0'
        }`}
      >
        {currentBlogs.map((blog, idx) => (
          <div
            key={`${currentPage}-${idx}`}
            className="flex flex-row h-[200px] items-center overflow-hidden border-b-[0.2px] border-white/20 hover:border-white/30 transition-all duration-500 group shadow-2xl hover:shadow-blue-900/10 cursor-pointer"
            onClick={() => window.open(blog.link, "_blank")}
          >
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start w-full mb-4">
                <h3 className="text-3xl mr-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {blog.title}
                </h3>
                <span className="hidden md:block text-white/30 group-hover:text-blue-400 transition-colors duration-300">{`--->`}</span>
              </div>

              <p className="text-sm text-white/60 line-clamp-2 mt-auto group-hover:text-white transition-colors duration-300">
                {blog.summary}
              </p>
            </div>

            <div className="relative overflow-hidden aspect-[4/4] w-[200px]">
               <Image
                src={blog.image}
                fill
                alt={`${blog.title} preview`}
                className="object-contain transition-transform duration-700 group-hover:scale-110 grayscale-[0.8] group-hover:grayscale-0"
                loading="lazy"
                unoptimized={blog.image.startsWith('http')}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
              <div className="absolute bottom-4 right-4">
                  <div className="p-2.5 rounded-full bg-white/10 hover:bg-blue-400 text-white transition-all duration-300 border border-white/10 hover:border-blue-400">
                    <HiMiniArrowTopRightOnSquare size={18} />
                  </div>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-12 px-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1 || isTransitioning}
            className={`text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 ${
              currentPage === 1 
                ? 'opacity-20 cursor-not-allowed text-white' 
                : 'hover:text-blue-400 cursor-pointer'
            }`}
          >
            {'<'} Previous
          </button>
          
          <div className="text-[10px] tracking-[0.3em] uppercase opacity-40 font-medium text-white">
            Page {currentPage} of {totalPages}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages || isTransitioning}
            className={`text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 ${
              currentPage === totalPages 
                ? 'opacity-20 cursor-not-allowed text-white' 
                : ' hover:text-blue-400 cursor-pointer'
            }`}
          >
            Next {'>'}
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .fade-in-right {
          animation: fadeInRight 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default Journal