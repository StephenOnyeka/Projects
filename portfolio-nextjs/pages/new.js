import Tech from '@/components/Tech'
import Navbar from '@/components/Navbar'
import React from 'react'
import About, { Blogs, Experience, Projects } from '@/components/About'
import History from '@/components/History'
import Portfolio from '@/components/Portfolio'
import Journal from '@/components/Journal'

import Contribution from '@/components/Contribution'

function New() {
  return (
    <>
      <div className="relative min-h-screen w-full bg-black text-white font-Inter overflow-hidden flex flex-col">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-center md:bg-top grayscale brightness-[0.55]"
          style={{ backgroundImage: "url('/images/Photoroom-20260302_140229325.png')" }}
        ></div>

        {/* Navbar Component */}
        <Navbar />

        {/* Main Hero Content - Marquee */}
        <main className="relative z-10 flex-grow flex items-center justify-center overflow-hidden">
          <div className="marquee-container w-full whitespace-nowrap pointer-events-none select-none">
            <div className="marquee-content flex items-center">
              {[...Array(4)].map((_, i) => (
                <h1 key={i} className="text-[10rem] md:text-[20rem] leading-none font-medium flex items-center pr-12 md:pr-20 opacity-80">
                  <span className="inline-block">Stephen</span>
                  <span className="mx-[4vw] text-[6rem] md:text-[12vw] flex-shrink-0">•</span>
                  <span className="inline-block">Onyeka</span>
                </h1>
              ))}
            </div>
          </div>
        </main>

        {/* Footer Text */}
        <div className="relative z-20 px-6 md:px-12 pb-10 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-6 md:gap-0 mt-auto">
          <div className="order-1">
             <p className="text-[10px] md:text-[12px] tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-60 font-medium">BASED IN LAGOS, NIGERIA.</p>
          </div>
          <div className="text-left md:text-right leading-tight order-2">
            <p className="text-[2rem] md:text-[3rem] ">Software Engineer</p>
            <p className="text-[2rem] md:text-[3rem] ">Design Systems & AI</p>
          </div>
        </div>

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
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      <section className="bg-black h-full py-20 px-8 md:px-20">
        <div className=''>            
            <p className="text-[14px] tracking-[0.2em] uppercase text-blue-400 font-medium"> - ABOUT ME</p>
            <br/>
            {/* <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 font-medium text-white">BASED IN LAGOS, NIGERIA.</p> */}
        </div>
          <About />
          <Tech />
        
      </section>
      <section className="bg-black h-full py-20 px-8 md:px-20">
        <div className=''>            
            <p className="text-[14px] tracking-[0.2em] uppercase text-blue-400 font-medium"> - EXPERIENCE</p>
            <br/>
        </div>
          <Experience />
          <History />
        
      </section>
      <section className="bg-black h-full py-20 px-8 md:px-20">
        <div className=''>  
            <p className="text-[14px] tracking-[0.1em] uppercase text-blue-400 font-normal"> {'-'} PROJECTS</p>
            <br/>
        </div>
          <Projects />
          <Portfolio />
        
      </section>
      <section className="bg-black h-full py-20 px-8 md:px-20">
        <div className=''> 
            <p className="text-[14px] tracking-[0.1em] uppercase text-blue-400 font-normal"> {'-'} BLOGS</p>

            <br/>
        </div>
          <Blogs />
          <Journal />
        
      </section>
      <section className="bg-black h-full py-20 px-8 md:px-20">
        <div className=''> 
            <p className="text-[14px] tracking-[0.1em] uppercase text-blue-400 font-normal"> {'-'} CONTRIBUTION</p>

            <br/>
        </div>
          <Contribution />
        
      </section>
    </>
  )
}

export default New