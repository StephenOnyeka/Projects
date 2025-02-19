import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Navbar from "@/components/Navbar";
import ScrollDiv from "@/components/Scroll";

import Footer from "./Footer";
// import Footer from ""

import AOS from "aos";
import "aos/dist/aos.css";

import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { RiGithubLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

function HOme() {
  const [typeEffect] = useTypewriter({
    words: ["Software Developer", "Front-end Dev", "Web Developer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 40,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in",
    });

    // return () => {
    //   AOS.refresh();
    // };
  }, []);
  return (
    <div className="overflow-x-hidden">
      {/* <Navbar /> */}
      <ScrollDiv />
      <section id="Home" className="">
        <div className="relative w-screen h-screen overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src="/vids/PinGrab_1739448372792.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute bg-black/90 px-8 pt-4 w-screen font-Poppins text-white h-full text-center ">
            <Navbar />

            <div className=" flex content-center justify-center ">
              <div className="absolute w-full text-white h-full text-center flex items-center justify-center">
                <div className="text-5xl lg:text-6xl space-y-12 max-sm:space-y-8 max-sm:text-3xl w-full">
                  My name is{" "}
                  <span className="font-bold tracking-wider italic text-6xl lg:text-7xl name font-Georgia">
                    Stephen O.
                  </span>
                  <p className="text-2xl md:text-3xl lg:text-5xl">
                    I'm a <span>{typeEffect}</span>
                    <span>
                      <Cursor cursorStyle="|" />
                    </span>
                  </p>
                  <div className="flex gap-6 items-center justify-center">
                    <Link href="#Portfolio">
                      <button className="shiny-button border-2 px-8 py-2 font-Georgia italic tracking-[4px] text-4xl max-sm:text-2xl focus:bg-white focus:text-[#0b001a]">
                        Explore
                      </button>
                    </Link>
                    <Link href="https://github.com/StephenOnyeka/StephenOnyeka">
                      <FaGithub className="size-8 lg:size-10" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="Services"
        className="h-full flex flex-col justify-center max-lg:px-4 py-4 lg:py-16"
      >
        <h1 className="text-white tracking-widest text-3xl font-medium text-center py-8 ">
          SERV<span className="text-purple-500">I</span>CES
        </h1>
        <div className="max-w-7xl mx-auto">
          <div
            data-aos="fade-up"
            // className="flex justify-between content-center gap-4 max-sm:flex-wrap"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 max-md:gap-4 max-sm:gap-6 p-2 h-auto justify-items-center"
          >
            <div className="border flex flex-col items-center justify-center text-center text-white p-4 gap-6 max-sm:gap-4 h-auto w-full rounded-lg  bg-gradient-to-r from-purple-700 to-purple-500 hover:transition hover:duration-300 hover:ease-in hover:shadow-lg hover:shadow-gray-400 ">
              <div id="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-code-slash"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                </svg>
              </div>
              <h3 className="italic font-medium text-xl max-sm:text-lg tracking-widest">
                WEB MAINTENANCE
              </h3>
              <p className="max-sm:text-sm max-sm:leading-6">
                I test websites for usability and offer maintenance services for
                faulty sites. I make them browser compatible and easy to work
                with.
              </p>
            </div>

            <div className="border flex flex-col items-center justify-center text-center text-white p-4 gap-6 max-sm:gap-4 h-auto w-full rounded-lg  bg-gradient-to-r from-purple-700 to-purple-500 hover:transition hover:duration-300 hover:ease-in hover:shadow-lg hover:shadow-gray-400 ">
              <div id="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-laptop-code"
                >
                  <path d="M128 96h384v256h64V80C576 53.63 554.4 32 528 32h-416C85.63 32 64 53.63 64 80V352h64V96zM624 384h-608C7.25 384 0 391.3 0 400V416c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16C640 391.3 632.8 384 624 384zM365.9 286.2C369.8 290.1 374.9 292 380 292s10.23-1.938 14.14-5.844l48-48c7.812-7.813 7.812-20.5 0-28.31l-48-48c-7.812-7.813-20.47-7.813-28.28 0c-7.812 7.813-7.812 20.5 0 28.31l33.86 33.84l-33.86 33.84C358 265.7 358 278.4 365.9 286.2zM274.1 161.9c-7.812-7.813-20.47-7.813-28.28 0l-48 48c-7.812 7.813-7.812 20.5 0 28.31l48 48C249.8 290.1 254.9 292 260 292s10.23-1.938 14.14-5.844c7.812-7.813 7.812-20.5 0-28.31L240.3 224l33.86-33.84C281.1 182.4 281.1 169.7 274.1 161.9z" />
                </svg>
              </div>

              <h3 className="italic font-medium text-xl max-sm:text-lg tracking-widest">
                RESPONSIVE DESIGN
              </h3>
              <p className="max-sm:text-sm max-sm:leading-6">
                I build websites that are appealing and user-friendly; Ensuring
                that your websites functions flawlessly on other devices as
                desktops, smartphones and tablets.
              </p>
            </div>
            <div className="border flex flex-col items-center justify-center text-center text-white p-4 gap-6 max-sm:gap-4 h-auto w-full rounded-lg  bg-gradient-to-r from-purple-700 to-purple-500 hover:transition hover:duration-300 hover:ease-in hover:shadow-lg hover:shadow-gray-400 ">
              <div id="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-palette-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </div>
              <h3 className="italic font-medium text-xl max-sm:text-lg tracking-widest">
                FULLSTACK
              </h3>
              <p className="max-sm:text-sm max-sm:leading-6">
                Bring your web application vision to life with expert full-stack
                development. I handle every aspect of the process, from
                designing intuitive user interfaces (front-end) to building
                robust server infrastructure and databases (back-end)
              </p>
            </div>

            <div className="border flex flex-col items-center justify-center text-center text-white p-4 gap-6 max-sm:gap-4 h-auto w-full rounded-lg  bg-gradient-to-r from-purple-700 to-purple-500 hover:transition hover:duration-300 hover:ease-in hover:shadow-lg hover:shadow-gray-400 ">
              <div id="icon">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-puzzle"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.112 3.645A1.5 1.5 0 0 1 4.605 2H7a.5.5 0 0 1 .5.5v.382c0 .696-.497 1.182-.872 1.469a.459.459 0 0 0-.115.118.113.113 0 0 0-.012.025L6.5 4.5v.003l.003.01c.004.01.014.028.036.053a.86.86 0 0 0 .27.194C7.09 4.9 7.51 5 8 5c.492 0 .912-.1 1.19-.24a.86.86 0 0 0 .271-.194.213.213 0 0 0 .039-.063v-.009a.112.112 0 0 0-.012-.025.459.459 0 0 0-.115-.118c-.375-.287-.872-.773-.872-1.469V2.5A.5.5 0 0 1 9 2h2.395a1.5 1.5 0 0 1 1.493 1.645L12.645 6.5h.237c.195 0 .42-.147.675-.48.21-.274.528-.52.943-.52.568 0 .947.447 1.154.862C15.877 6.807 16 7.387 16 8s-.123 1.193-.346 1.638c-.207.415-.586.862-1.154.862-.415 0-.733-.246-.943-.52-.255-.333-.48-.48-.675-.48h-.237l.243 2.855A1.5 1.5 0 0 1 11.395 14H9a.5.5 0 0 1-.5-.5v-.382c0-.696.497-1.182.872-1.469a.459.459 0 0 0 .115-.118.113.113 0 0 0 .012-.025L9.5 11.5v-.003a.214.214 0 0 0-.039-.064.859.859 0 0 0-.27-.193C8.91 11.1 8.49 11 8 11c-.491 0-.912.1-1.19.24a.859.859 0 0 0-.271.194.214.214 0 0 0-.039.063v.003l.001.006a.113.113 0 0 0 .012.025c.016.027.05.068.115.118.375.287.872.773.872 1.469v.382a.5.5 0 0 1-.5.5H4.605a1.5 1.5 0 0 1-1.493-1.645L3.356 9.5h-.238c-.195 0-.42.147-.675.48-.21.274-.528.52-.943.52-.568 0-.947-.447-1.154-.862C.123 9.193 0 8.613 0 8s.123-1.193.346-1.638C.553 5.947.932 5.5 1.5 5.5c.415 0 .733.246.943.52.255.333.48.48.675.48h.238l-.244-2.855zM4.605 3a.5.5 0 0 0-.498.55l.001.007.29 3.4A.5.5 0 0 1 3.9 7.5h-.782c-.696 0-1.182-.497-1.469-.872a.459.459 0 0 0-.118-.115.112.112 0 0 0-.025-.012L1.5 6.5h-.003a.213.213 0 0 0-.064.039.86.86 0 0 0-.193.27C1.1 7.09 1 7.51 1 8c0 .491.1.912.24 1.19.07.14.14.225.194.271a.213.213 0 0 0 .063.039H1.5l.006-.001a.112.112 0 0 0 .025-.012.459.459 0 0 0 .118-.115c.287-.375.773-.872 1.469-.872H3.9a.5.5 0 0 1 .498.542l-.29 3.408a.5.5 0 0 0 .497.55h1.878c-.048-.166-.195-.352-.463-.557-.274-.21-.52-.528-.52-.943 0-.568.447-.947.862-1.154C6.807 10.123 7.387 10 8 10s1.193.123 1.638.346c.415.207.862.586.862 1.154 0 .415-.246.733-.52.943-.268.205-.415.39-.463.557h1.878a.5.5 0 0 0 .498-.55l-.001-.007-.29-3.4A.5.5 0 0 1 12.1 8.5h.782c.696 0 1.182.497 1.469.872.05.065.091.099.118.115.013.008.021.01.025.012a.02.02 0 0 0 .006.001h.003a.214.214 0 0 0 .064-.039.86.86 0 0 0 .193-.27c.14-.28.24-.7.24-1.191 0-.492-.1-.912-.24-1.19a.86.86 0 0 0-.194-.271.215.215 0 0 0-.063-.039H14.5l-.006.001a.113.113 0 0 0-.025.012.459.459 0 0 0-.118.115c-.287.375-.773.872-1.469.872H12.1a.5.5 0 0 1-.498-.543l.29-3.407a.5.5 0 0 0-.497-.55H9.517c.048.166.195.352.463.557.274.21.52.528.52.943 0 .568-.447.947-.862 1.154C9.193 5.877 8.613 6 8 6s-1.193-.123-1.638-.346C5.947 5.447 5.5 5.068 5.5 4.5c0-.415.246-.733.52-.943.268-.205.415-.39.463-.557H4.605z" />
                </svg>
              </div>
              <h3 className="italic font-medium text-xl max-sm:text-lg tracking-widest">
                MOBILE APP MAINTENANCE
              </h3>
              <p className="max-sm:text-sm max-sm:leading-6">
                I craft mobile applications and also Offer mobile app
                maintenance services for faulty applications. Making them
                platform compatible and easy to work with.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        id="Portfolio"
        className="h-full w-full flex flex-col justify-center items-center content-center max-lg:px-4 py-32"
      >
        <h1 className="text-white tracking-widest text-3xl font-medium text-center py-8">
          RECENT <span className="name">PROJECTS</span>
        </h1>
        <div className="max-w-7xl mx-auto" data-aos="fade-up">
          {" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-sm:gap-16 p-2 h-auto justify-items-center ">
            {/* <div className="border "> */}
            {/* <div className="flex flex-col gap-4 font-Georgia text-purple-200/90"> */}
            <div className="flex flex-col gap-4 font-Georgia bname">
              <Link
                className="shiny-button"
                href="https://paint-site-p.vercel.app/"
              >
                <Image
                  src={"/images/projects/Screenshot 2025-02-07 040251.png"}
                  width={500}
                  height={300}
                  className="aspect-auto border p-2 gradient-border"
                />
              </Link>
              <div className="flex justify-between">
                <p className="text-xl font-bold"> Adoration Paints</p>
                <div className="flex gap-4">
                  <Link
                    className="hover:border hover:rounded-full p-2"
                    href="https://paint-site-p.vercel.app/"
                  >
                    <HiMiniArrowTopRightOnSquare size={20} color={"white"} />
                  </Link>
                  <Link
                    className="hover:border hover:rounded-full p-2"
                    href="https://github.com/StephenOnyeka/Projects/tree/main/paint-site"
                  >
                    <RiGithubLine size={20} color={"white"} />
                  </Link>
                </div>
              </div>
              <p className="italic text-lg max-sm:text-md">
                Adoration Paints is a premium painting company. I created this
                using NextJS, TailwindCSS and Nodejs.
              </p>
            </div>
            <div className="flex flex-col gap-4 font-Georgia bname">
              <Link
                className="shiny-button"
                href="https://demo-ajci.vercel.app/"
              >
                <Image
                  src={"/images/Screenshot 2025-02-19 010607.png"}
                  width={500}
                  height={300}
                  className="aspect-auto border p-2 gradient-border"
                />
              </Link>
              <div className="flex justify-between">
                <p className="text-xl font-bold"> Lenis</p>
                <div className="flex gap-4">
                  <Link
                    className="hover:border hover:rounded-full p-2"
                    href="https://demo-ajci.vercel.app/"
                  >
                    <HiMiniArrowTopRightOnSquare size={20} color={"white"} />
                  </Link>
                  <Link
                    className="hover:border hover:rounded-full p-2"
                    href="https://github.com/StephenOnyeka/Projects/tree/main/nextjs-shopify-demo"
                  >
                    <RiGithubLine size={20} color={"white"} />
                  </Link>
                </div>
              </div>
              <p className="italic text-lg max-sm:text-md">
                Lenis is a skin care company to focuses on beauty standard with
                nature and also Offer skin consultation with dermatologists. Brought to life uisng TailwindCSS and NextJS
              </p>
            </div>
            <div className="flex flex-col gap-4 font-Georgia bname">
              <Link
                className="shiny-button"
                href="https://demo-ajci.vercel.app/"
              >
                <Image
                  src={"/images/Screenshot 2025-02-19 010423.png"}
                  width={500}
                  height={300}
                  className="aspect-auto border p-2 gradient-border"
                />
              </Link>
              <div className="flex justify-between">
                <p className="text-xl font-bold"> AJCI Foods</p>
                <div className="flex gap-4">
                  <Link
                    className="hover:border hover:rounded-full p-2"
                    href="https://demo-ajci.vercel.app/"
                  >
                    <HiMiniArrowTopRightOnSquare size={20} color={"white"} />
                  </Link>
                  <Link
                    className="hover:border hover:rounded-full p-2"
                    href="https://github.com/StephenOnyeka/Projects/tree/main/nextjs-shopify-demo"
                  >
                    <RiGithubLine size={20} color={"white"} />
                  </Link>
                </div>
              </div>
              <p className="italic text-lg max-sm:text-md">
                AJCI Foods is a company that brings foods and snacks to market.
                Organically raised from farm to table. Built with Nextjs and
                TailwindCSS.
              </p>
            </div>

            <div className="flex flex-col gap-4 font-Georgia bname">
              <Link
                href="https://business-app-don.vercel.app/"
                className="shiny-button"
              >
                {" "}
                <Image
                  src={"/images/projects/Screenshot 2025-02-12 221629.png"}
                  width={500}
                  height={300}
                  className="aspect-auto border p-2 gradient-border"
                />
              </Link>
              <div className="flex justify-between">
                <p className="text-xl font-bold"> DNK-commerce</p>
                <div className="flex gap-4">
                  <Link
                    className="hover:border hover:rounded-full p-2"
                    href="https://business-app-don.vercel.app/"
                  >
                    {" "}
                    <HiMiniArrowTopRightOnSquare size={20} color={"white"} />
                  </Link>
                  <Link
                    className="hover:border hover:rounded-full p-2"
                    href="https://github.com/StephenOnyeka/Projects/tree/main/my-business-app"
                  >
                    <RiGithubLine size={20} color={"white"} />
                  </Link>
                </div>
              </div>
              <p className="italic text-lg max-sm:text-md">
                DNK is an e-commerce website I created using ReactJS. I ended up
                embedding a security dialogue. Implemented json files in stead
                of API calls.
              </p>
            </div>
            {/* <div className="flex flex-col gap-4 font-Georgia text-purple-200/90"> */}
            <div className="flex flex-col gap-4 font-Georgia bname">
              <Link
                className="shiny-button"
                href="https://stephenonyeka.github.io/lan -page/#home"
              >
                <Image
                  src={"/images/projects/Screenshot 2025-02-13 040455.png"}
                  width={500}
                  height={300}
                  className="aspect-auto border p-2 gradient-border "
                />
              </Link>
              <div className="flex justify-between">
                <p className="text-xl font-bold"> COLOR Page</p>
                <div className="flex gap-4">
                  <Link
                    className="hover:border hover:rounded-full p-2"
                    href="https://stephenonyeka.github.io/lan-page/#home"
                  >
                    <HiMiniArrowTopRightOnSquare size={20} color={"white"} />
                  </Link>
                  <Link
                    className="hover:border hover:rounded-full p-2"
                    href="https://github.com/StephenOnyeka/lan-page"
                  >
                    <RiGithubLine size={20} color={"white"} />
                  </Link>
                </div>
              </div>
              <p className="italic text-lg max-sm:text-md">
                A landing page website I created using html, css and vanilla
                javascript that mainly focus on use and how colors can be
                manupulated
              </p>
            </div>
            {/* <div className="flex flex-col gap-4 font-Georgia text-purple-200/90"> */}
            <div className="flex flex-col gap-4 font-Georgia bname">
              <Link
                className="shiny-button"
                href="https://kingster.vercel.app/"
              >
                <Image
                  src={"/images/projects/Screenshot 2025-02-12 222317.png"}
                  width={500}
                  height={300}
                  className="aspect-auto border p-2 gradient-border"
                />
              </Link>
              <div className="flex justify-between">
                <p className="text-xl font-bold"> Kingster</p>
                <div className="flex gap-4">
                  <Link
                    className="hover:border hover:rounded-full p-2"
                    href="https://kingster.vercel.app/"
                  >
                    <HiMiniArrowTopRightOnSquare size={20} color={"white"} />
                  </Link>
                  <Link
                    className="hover:border hover:rounded-full p-2"
                    href="https://github.com/StephenOnyeka/Projects/tree/main/kingster-project"
                  >
                    <RiGithubLine size={20} color={"white"} />
                  </Link>
                </div>
              </div>
              <p className="italic text-lg max-sm:text-md">
                Kingster is a college page website I built using NextJS and
                TailwindCSS to prove mastery of the technologies involved.
              </p>
            </div>
            {/* <div className="flex flex-col gap-4 font-Georgia text-purple-200/90"> */}
          </div>
        </div>
      </div>
      <section
        id="About"
        className="h-auto  flex flex-col justify-center max-lg:px-4 py-20"
      >
        <h1 className="text-white tracking-widest text-3xl font-medium text-center py-20">
          ABOUT <span className="name">ME</span>
        </h1>
        <div className="max-w-7xl mx-auto" data-aos="fade-left">
          <div className="flex max-sm:flex-wrap items-center justify-between gap-10 p-2">
            <div className="w-full  sm:w-1/2   flex items-center justify-center">
              <div className="aspect-[3/4] w-[70%] border-4 gradient-border ">
                <div className="bg-[url('/images/Me.jpg')] bg-top bg-no-repeat bg-cover aspect-[3/4] bottom-[5%] left-[7%] relative"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full">
                <p className="text-white text-lg max-sm:text-[1rem] ">
                  I'm a software developer with a proven track record of
                  building successful web and mobile applications.
                  <br />
                  <br />
                  My expertise spans the full development lifecycle, from
                  concept and design to development, testing, and deployment.
                  I'm proficient in React, Nextjs, Nodejs, MongoDB, ReactNative
                  etc. I'm passionate about clean code, efficient architecture,
                  and creating seamless user experiences.
                  <br />
                  <br />
                  I'm eager to tackle new challenges and collaborate with
                  clients to deliver exceptional results.
                  <br />
                  <br />
                  <span className="text-md font-semibold">Stephen Onyeka.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-auto flex flex-col justify-center max-lg:px-4 py-20">
        <p className="name racking-widest text-3xl max-sm:text-2xl font-bold italic text-center py-20 font-Georgia ">
          Here are some of the technologies that I use...
        </p>
        <div className="max-w-7xl mx-auto" data-aos="fade-up">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-between gap-16 sm:gap-28 px-2">
            <Image
              src={"/images/919827.png"}
              width={100}
              height={100}
              className="max-sm:w-[70px] max-sm:h-[70px]  rounded-full"
            />
            <Image
              src={"/images/download.png"}
              width={100}
              height={100}
              className="max-sm:w-[70px] max-sm:h-[70px]  rounded-full"
            />
            <Image
              src={"/images/download (1).png"}
              width={100}
              height={100}
              className="max-sm:w-[70px] max-sm:h-[70px]  "
            />
            <Image
              src={"/images/GitHub-Mark.png"}
              width={100}
              height={100}
              className="max-sm:w-[70px] max-sm:h-[70px]  "
            />
            <Image
              src={"/images/React-icon.svg.png"}
              width={100}
              height={100}
              className="max-sm:w-[70px] max-sm:h-[70px] "
            />
            <Image
              src={"/images/225996.webp"}
              width={100}
              height={100}
              className="max-sm:w-[70px] max-sm:h-[70px]  rounded-full"
            />
            <Image
              src={"/images/download (2).png"}
              width={100}
              height={100}
              className="max-sm:w-[70px] max-sm:h-[70px]  rounded-full"
            />
            <Image
              src={"/images/5968705.png"}
              width={100}
              height={100}
              className="max-sm:w-[70px] max-sm:h-[70px] "
            />
            <Image
              src={"/images/free-mongodb-3-1175138 (1).webp"}
              width={100}
              height={100}
              className="max-sm:w-[70px] max-sm:h-[70px]  "
            />
            <Image
              src={"/images/nodejs-logo.png"}
              width={100}
              height={100}
              className="max-sm:w-[70px] max-sm:h-[70px]  "
            />
          </div>
        </div>
      </section>
      <section
        id="Contact"
        className="h-screen  flex flex-col justify-center max-lg:px-4 "
      >
        <h1 className="text-white tracking-widest text-3xl font-medium text-center py-12">
          CONTACT <span className="name">ME</span>
        </h1>
        <div className="max-w-7xl mx-auto text-center space-y-6 text-white">
          <div className="flex flex-col gap-4 tracking-widest">
            <p className="text-2xl max-sm:text-xl font-medium">
              WANT TO COLLABORATE? SEND ME AN E-MAIL
            </p>
            <p className="text-lg max-sm:text-sm font-medium">
              I AM VERY RESPONSIVE TO MESSAGES
            </p>
          </div>
          <br />
          <br />
          <Link href="mailto:https://ejeanobionyeka@gmail.com">
            <button className="shiny-button font-Georgia italic border px-6 py-3 tracking-widest">
              Write a Mail
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HOme;
