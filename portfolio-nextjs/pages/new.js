import Tech from '@/components/Tech'
import Navbar from '@/components/Navbar'
import React from 'react'
import About, { Blogs, Experience, Projects } from '@/components/About'
import History from '@/components/History'
import Portfolio from '@/components/Portfolio'
import Journal from '@/components/Journal'
import Contribution from '@/components/Contribution'
import Connect from '@/components/Connect'
import FadeUp from '@/components/FadeUp'

function New() {
  return (
    <><FadeUp>
      <div className="relative min-h-screen w-full bg-black text-white font-Inter overflow-hidden flex flex-col">
        {/* Background Image */}
        
        
        <div 
          className="absolute inset-0 z-0 bg-[url('/images/img.jpeg')] md:bg-[url('/images/Gem.png')] bg-cover bg-no-repeat bg-center md:bg-top"
        >
          <div className="bg-gradient-to-b from-black/10 to-black/80 md:from-black/15 md:to-black/70 h-screen px-8 pt-8 max-sm:px-4 w-full text-white grid grid-cols-1"></div>
        </div>
        
        

        {/* Navbar Component */}
        <Navbar />
        {/* Main Hero Content - Marquee */}
        <main className="relative z-10 flex-grow flex items-center justify-center overflow-hidden">
          <div className="marquee-container w-full whitespace-nowrap pointer-events-none select-none">
            <div className="marquee-content flex items-center">
              {[...Array(4)].map((_, i) => (
                <h1 key={i} className="text-[16rem] sm:text-[10rem] md:text-[20rem] leading-none font-medium max-sm:tracking-tight flex items-center pr-12 md:pr-20 opacity-80">
                  <span className="inline-block">Stephen</span>
                  <span className="inline-block mx-[4rem]">Onyeka</span>
                  <span className="text-[4rem] sm:text-[6rem] md:text-[12vw] flex-shrink-0">•</span>
                </h1>
              ))}
            </div>
          </div>
        </main>

        {/* Footer Text */}
        <div className="relative z-20 px-6 md:px-12 pb-10 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-6 md:gap-0 mt-auto">
          <div className="order-1">
             <p className="text-[10px] md:text-[12px] tracking-[0.2em] md:tracking-[0.3em] uppercase font-medium">BASED IN NIGERIA.</p>
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
            @media (max-width: 768px){
              animation: marquee 20s linear infinite;
            }
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
       
      </div>
       </FadeUp>

      <section id="about" className="bg-black h-full py-12 md:py-20 px-6 md:px-20">
        <FadeUp>
          <div className=''>            
              <p className="text-[14px] tracking-[0.1em] uppercase text-blue-400 font-medium"> - ABOUT ME</p>
              <br/>
          </div>
            <About />
            <Tech />
        </FadeUp>
      </section>
      <section id="experience" className="bg-black h-full py-12 md:py-20">
        <FadeUp>
          <div className=' px-4 md:px-20'>            
              <p className="text-[14px] tracking-[0.1em] uppercase text-blue-400 font-medium"> - EXPERIENCE</p>
              <br/>
          </div>
          <div className=' px-4 md:px-20 '>
            <Experience />            
          </div>
          <History />
        </FadeUp>
      </section>
      <section id="projects" className="bg-black h-full py-12 md:py-20 px-6 md:px-20">
        <FadeUp>
          <div className=''>  
              <p className="text-[14px] tracking-[0.1em] uppercase text-blue-400 font-normal"> {'-'} PROJECTS</p>
              <br/>
          </div>
            <Projects />
            <Portfolio />
        </FadeUp>
      </section>
      <section id="blogs" className="bg-black h-full py-12 md:py-20 px-6 md:px-20">
        <FadeUp>
          <div className=''> 
              <p className="text-[14px] tracking-[0.1em] uppercase text-blue-400 font-normal"> {'-'} BLOGS</p>

              <br/>
          </div>
            <Blogs />
            <Journal />
        </FadeUp>
      </section>
      <section id="contribution" className="bg-black h-full py-12 md:py-20 px-4 md:px-20">
        <FadeUp>
          <div className=''> 
              <p className="text-[14px] tracking-[0.1em] uppercase text-blue-400 font-normal"> {'-'} CONTRIBUTION</p>
              <br/>
          </div>
            <Contribution />
        </FadeUp>
      </section>
      <section id="contact" className="bg-black h-full py-12 md:py-20 px-6 md:px-20 border-t border-white/5">
        <FadeUp>
          <div className=''> 
              <p className="text-[14px] tracking-[0.1em] uppercase text-blue-400 font-medium"> {'-'} CONTACT </p>
              <br/>
          </div>
            <Connect />
        </FadeUp>
      </section>
    </>
  )
}

export default New