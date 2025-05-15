import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaLinkedin,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiGit,
  SiExpo,
} from "react-icons/si";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

function HeroAnimatedCard() {
  const [typeEffect] = useTypewriter({
    words: [
      "Software Developer",
      "Fullstack Dev",
      "Web Developer",
      "Mobile App Developer",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 40,
  });
  return (
    <div
      className="rounded-3xl shadow-2xl p-10 md:p-16 flex flex-col items-center text-center gap-6 animate-fadeIn"
      data-aos="fade-up"
    >
      <h1
        className="text-5xl md:text-7xl text-center font-bold text-white mb-2 font-Georgia "
        data-aos="fade-up"
        data-aos-delay="0"
      >
        {/* Hi, I'm <span className="name">Stephen Onyeka</span> */}
        My name is <span className="name italic">Stephen Onyeka</span>
      </h1>
      <p
        className="text-xl md:text-2xl text-purple-200 font-Georgia tracking-widest mb-2"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Building impactful digital experiences.
      </p>
      <p
        className="text-2xl md:text-3xl text-purple-100 font-Georgia italic mb-4 text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        I'm a <span className="text-purple-300">{typeEffect}</span>
        <span>
          <Cursor cursorStyle="|" />
        </span>
      </p>
      <div className="flex gap-6 items-center justify-center mt-2">
        <Link href="#Portfolio">
          <button className="shiny-button text-white border-2 px-8 py-2 font-Georgia italic tracking-[4px] text-2xl md:text-4xl focus:bg-white focus:text-[#0b001a] shadow-lg hover:scale-105 transition-transform duration-200">
            Explore
          </button>
        </Link>
        <Link href="https://github.com/StephenOnyeka/">
          <FaGithub className="size-8 lg:size-10 text-white hover:text-purple-400 transition-colors duration-200" />
        </Link>
      </div>
    </div>
  );
}

export default function ModernFullPreview() {
  // Initialize AOS for scroll animations
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Contact form state and handler for EmailJS
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus(null);
    try {
      // Replace these with your actual EmailJS service/template/user IDs
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "ejeanobionyeka@gmail.com",
      };
      await emailjs.send(serviceId, templateId, templateParams, userId);
      setFormStatus({ success: true, message: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setFormStatus({
        success: false,
        message: "Failed to send message. Please try again.",
      });
    }
  };
  // Project filter state for tabs
  const [projectFilter, setProjectFilter] = useState("all");

  // Project data
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
      name: "Lenis",
      image: "/images/Screenshot 2025-02-19 010607.png",
      tech: ["Next.js", "JSON", "Tailwind"],
      // desc: "Ecommerce platform demo with cart and auth.",
      desc: "A skincare brand website demo that solves skin your problems by using their product and connects you with a dermatologist.",
      demo: "https://lenis-beryl.vercel.app/",
      github: "https://github.com/StephenOnyeka/Projects/tree/main/beauty-site",
    },
    {
      id: 3,
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
      id: 4,
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
      id: 5,
      type: "web",
      name: "COLOR",
      image: "/images/projects/Screenshot 2025-02-13 040455.png",
      tech: ["HTML", "CSS", "Javascript"],
      desc: "A portfolio website built with main focus on color gradience",
      demo: "https://stephenonyeka.github.io/lan-page/#home",
      github: "https://github.com/StephenOnyeka/lan-page",
    },
    {
      id: 6,
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

  // Filtered projects
  const filteredProjects =
    projectFilter === "all"
      ? projects
      : projects.filter((p) => p.type === projectFilter);

  return (
    <>
      <div className="w-full z-30 sticky top-0 py-4 bg-[#0b001a]/80 backdrop-blur-sm shadow-sm">
        <Navbar />
      </div>
      <div className="min-h-screen w-full bg-[#0b001a] flex flex-col font-Montserrat">
        {/* NAVBAR */}
        {/* <div className="w-full z-30 sticky top-0 bg-[#0b001a]/80 backdrop-blur-lg shadow-sm">
        <Navbar />
      </div> */}
        {/* HERO SECTION */}
        <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            muted
          >
            <source src="/vids/PinGrab_1739448372792.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay for readability */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-indigo-950/80 to-purple-900/60 backdrop-blur-sm z-10"></div> */}
          <div className="absolute inset-0 bg-[#0b001a]/70 backdrop-blur-sm z-10"></div>
          {/* Hero Content */}
          <div className="relative z-20 w-full flex flex-col items-center justify-center h-full">
            <div className="mx-auto max-w-3xl w-full flex flex-col items-center justify-center">
              <HeroAnimatedCard />
              {/* Animated scroll indicator */}
              <div className="mt-4 flex flex-col items-center">
                <span className="animate-bounce text-purple-400 text-3xl">
                  ↓
                </span>
                <span className="text-white text-xs tracking-widest mt-1">
                  SCROLL
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section
          id="Services"
          className="w-full flex flex-col items-center justify-center py-20 px-4"
        >
          <h2
            className="text-3xl font-bold text-white mb-10 tracking-widest font-Georgia"
            data-aos="fade-up"
          >
            My <span className="text-purple-500">Services</span>
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="flex flex-col items-center text-center text-white p-8 gap-6 rounded-2xl shadow-lg bg-gradient-to-br from-purple-800 to-indigo-900 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div
                className="bg-indigo-700 p-4 rounded-full mb-2"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <HiMiniArrowTopRightOnSquare className="text-3xl text-white" />
              </div>
              <h3
                className="font-semibold text-lg tracking-widest font-Georgia"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Web Maintenance
              </h3>
              <p
                className="text-gray-300 text-sm font-Georgia italic"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Keeping your site running smoothly, secure, and up-to-date.
              </p>
            </div>
            <div
              className="flex flex-col items-center text-center text-white p-8 gap-6 rounded-2xl shadow-lg bg-gradient-to-br from-purple-800 to-indigo-900 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div
                className="bg-indigo-700 p-4 rounded-full mb-2"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <HiMiniArrowTopRightOnSquare className="text-3xl text-white" />
              </div>
              {/* <h3 className="font-semibold text-lg tracking-widest font-Georgia" data-aos="fade-right" data-aos-delay="300">UI/UX Design</h3> */}
              <h3
                className="font-semibold text-lg tracking-widest font-Georgia"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                Mobile Dev
              </h3>
              <p
                className="text-gray-300 text-sm font-Georgia italic"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                {/* Crafting beautiful, user-friendly interfaces for web and mobile. */}
                Crafting beautiful, user-friendly mobile applications for both
                Android and IOS.
              </p>
            </div>
            <div
              className="flex flex-col items-center text-center text-white p-8 gap-6 rounded-2xl shadow-lg bg-gradient-to-br from-purple-800 to-indigo-900 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                className="bg-indigo-700 p-4 rounded-full mb-2"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <HiMiniArrowTopRightOnSquare className="text-3xl text-white" />
              </div>
              <h3
                className="font-semibold text-lg tracking-widest font-Georgia"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                Fullstack Development
              </h3>
              <p
                className="text-gray-300 text-sm font-Georgia italic"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Building scalable, performant applications from frontend to
                backend.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION (from Home.js) */}
        <section
          id="About"
          className="h-auto flex flex-col justify-center max-lg:px-4 py-20"
        >
          <h1
            className="text-white tracking-widest text-3xl font-bold text-center py-20 font-Georgia"
            data-aos="fade-up"
          >
            About <span className="name">Me</span>
          </h1>
          {/* <h2 className="text-3xl font-bold text-white mb-10 tracking-widest font-Georgia">About <span className="text-purple-500">Me</span></h2> */}
          <div className="max-w-7xl mx-auto" data-aos="fade-left">
            <div className="flex max-sm:flex-wrap items-center justify-between gap-10 p-2">
              <div className="w-full sm:w-1/2 flex items-center justify-center">
                <div className="aspect-[3/4] w-[70%] border-4 gradient-border ">
                  <div className="bg-[url('/images/Me.jpg')] bg-top bg-no-repeat bg-cover aspect-[3/4] bottom-[5%] left-[7%] relative"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2 font-Georgia">
                <div className="w-full">
                  <p className="text-white text-lg max-sm:text-[1rem] font-Montserrat">
                    I'm a software developer with a proven track record of
                    building successful web and mobile applications.
                    <br />
                    <br />
                    My expertise spans the full development lifecycle, from
                    concept and design to development, testing, and deployment.
                    I'm proficient in React, Nextjs, Nodejs, MongoDB,
                    ReactNative etc. I'm passionate about clean code, efficient
                    architecture, and creating seamless user experiences.
                    <br />
                    <br />
                    I'm eager to tackle new challenges and collaborate with
                    clients to deliver exceptional results.
                    <br />
                    <br />
                    <span className="text-md font-semibold font-Georgia">
                      Stephen Onyeka.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES SECTION */}
        <section
          id="Technologies"
          className="w-full flex flex-col items-center justify-center py-20 px-4"
          data-aos="fade-up"
        >
          {/* <h2
            className="text-3xl font-bold text-white mb-10 tracking-widest font-Georgia"
            data-aos="fade-up"
          >
            Technologies <span className="text-purple-500">I Use</span>
          </h2> */}
          <p
            className="name racking-widest text-3xl max-sm:text-2xl font-bold italic text-center mb-10 font-Georgia"
            data-aos="fade-up"
          >
            Here are some of the technologies that I use...
          </p>
          <div className="max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 sm:gap-16">
            {/* Animate each tech icon with staggered delay */}
            {/* HTML5 */}
            <div
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="0"
            >
              <FaHtml5 size={56} color="#e34c26" className="drop-shadow-lg" />
              {/* <span className="text-white text-xs mt-2 font-Georgia">HTML5</span> */}
            </div>
            {/* CSS3 */}
            <div
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <FaCss3Alt size={56} color="#1572b6" className="drop-shadow-lg" />
              {/* <span className="text-white text-xs mt-2 font-Georgia">CSS3</span> */}
            </div>
            {/* JavaScript */}
            <div
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <FaJs size={56} color="#f7df1e" className="drop-shadow-lg" />
              {/* <span className="text-white text-xs mt-2 font-Georgia">JavaScript</span> */}
            </div>
            {/* GitHub */}
            <div
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <FaGithub
                size={56}
                color="#fff"
                className="drop-shadow-lg bg-black rounded-full p-2"
              />
              {/* <span className="text-white text-xs mt-2 font-Georgia">GitHub</span> */}
            </div>
            {/* Tailwind CSS */}
            <div
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <SiTailwindcss
                size={56}
                color="#38bdf8"
                className="drop-shadow-lg"
              />
              {/* <span className="text-white text-xs mt-2 font-Georgia">Tailwind CSS</span> */}
            </div>
            {/* Next.js */}
            <div
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <SiNextdotjs
                size={56}
                color="#000000"
                className="drop-shadow-lg bg-white rounded-full p-2"
              />
              {/* <span className="text-white text-xs mt-2 font-Georgia">Next.js</span> */}
            </div>
            {/* MongoDB */}
            <div
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <SiMongodb size={56} color="#3c873a" className="drop-shadow-lg" />
              {/* <span className="text-white text-xs mt-2 font-Georgia">MongoDB</span> */}
            </div>

            {/* React */}
            <div
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <FaReact size={56} color="#61dafb" className="drop-shadow-lg" />
              {/* <span className="text-white text-xs mt-2 font-Georgia">React</span> */}
            </div>
            {/* Node.js */}
            <div
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              <FaNodeJs size={56} color="#3c873a" className="drop-shadow-lg" />
              {/* <span className="text-white text-xs mt-2 font-Georgia">Node.js</span> */}
            </div>
            {/* TypeScript */}
            <div
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="900"
            >
              <SiTypescript
                size={56}
                color="#3178c6"
                className="drop-shadow-lg"
              />
              {/* <span className="text-white text-xs mt-2 font-Georgia">TypeScript</span> */}
            </div>
            {/* Git */}
            <div
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="1000"
            >
              <SiGit size={56} color="#f05032" className="drop-shadow-lg" />
              {/* <span className="text-white text-xs mt-2 font-Georgia">Git</span> */}
            </div>
            {/* Figma */}
            <div
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="1100"
            >
              <img
                src="/images/5968705.png"
                alt="Figma"
                className="w-14 h-14 drop-shadow-lg rounded-md object-contain"
              />
              {/* <span className="text-white text-xs mt-2 font-Georgia">Figma</span> */}
            </div>
            {/* Expo */}
            <div
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="1200"
            >
              <img
                src="/images/banner.png"
                alt="Expo"
                className="w-14 h-14 drop-shadow-lg rounded-md object-contain"
              />
              {/* <span className="text-white text-xs mt-2 font-Georgia">Expo</span> */}
            </div>
          </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section
          id="Portfolio"
          className="w-full flex flex-col items-center justify-center py-20 px-4"
          data-aos="fade-up"
        >
          <h2
            className="text-3xl font-bold text-white mb-10 tracking-widest font-Georgia"
            data-aos="fade-up"
          >
            Recent <span className="text-purple-500">Projects</span>
          </h2>
          {/* Filter Tabs */}
          <div className="flex gap-4 mb-8" data-aos="fade-up">
            <button
              className={`px-6 py-2 rounded-full font-Georgia text-white bg-purple-700/80 hover:bg-purple-900 transition-colors ${
                projectFilter === "web" ? "ring-2 ring-purple-400" : ""
              }`}
              onClick={() => setProjectFilter("web")}
              // data-aos="fade-up"
            >
              Web
            </button>
            <button
              className={`px-6 py-2 rounded-full font-Georgia text-white bg-purple-700/80 hover:bg-purple-900 transition-colors ${
                projectFilter === "mobile" ? "ring-2 ring-purple-400" : ""
              }`}
              onClick={() => setProjectFilter("mobile")}
              // data-aos="fade-up"
            >
              Mobile
            </button>
            <button
              className={`px-6 py-2 rounded-full font-Georgia text-white bg-purple-700/80 hover:bg-purple-900 transition-colors ${
                projectFilter === "all" ? "ring-2 ring-purple-400" : ""
              }`}
              onClick={() => setProjectFilter("all")}
              // data-aos="fade-up"
            >
              All
            </button>
          </div>
          {/* Projects grid (filtered) */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col items-center bg-white/10 rounded-2xl shadow-lg p-6 transition-transform hover:scale-105 hover:shadow-2xl duration-300"
              >
                <Image
                  src={project.image}
                  width={project.type === "web" ? 400 : 240}
                  height={project.type === "web" ? 220 : 480}
                  alt={`${project.name} ${project.type} preview`}
                  className={
                    project.type === "web"
                      ? "rounded-lg border-2 border-purple-400 mb-4"
                      : "rounded-2xl border-2 border-purple-400 mb-4 shadow-lg object-contain"
                  }
                  loading="lazy"
                />
                <div className="flex justify-between items-center w-full mt-2">
                  <p className="text-lg font-bold text-white font-Georgia">
                    {project.name}
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href={project.demo}
                      className="bg-purple-700 hover:bg-purple-900 text-white rounded-full p-2 transition-colors duration-200"
                    >
                      <HiMiniArrowTopRightOnSquare size={20} color="white" />
                    </Link>
                    <Link
                      href={project.github}
                      className="bg-purple-700 hover:bg-purple-900 text-white rounded-full p-2 transition-colors duration-200"
                    >
                      <FaGithub size={20} color="white" />
                    </Link>
                  </div>
                </div>
                {/* <div className="flex flex-wrap gap-2 mt-2 mb-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className={
                        tech === "React Native" || tech === "React"
                          ? "bg-indigo-800 text-white px-3 py-1 rounded-full text-xs font-semibold font-Georgia"
                          : "bg-purple-700 text-white px-3 py-1 rounded-full text-xs font-semibold font-Georgia"
                      }
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}
                <div className="flex flex-wrap gap-2 mt-2 mb-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className={
                        tech === "React Native" || tech === "React"
                          ? "bg-indigo-800 text-white px-3 py-1 rounded-full text-xs font-semibold font-Georgia"
                          : tech === "Next.js"
                          ? "bg-black/80 text-white px-3 py-1 rounded-full text-xs font-semibold font-Georgia"
                          : tech === "Node.js"
                          ? "bg-[#3c873a] text-white px-3 py-1 rounded-full text-xs font-semibold font-Georgia"
                          : tech === "JSON"
                          ? "bg-[#f7df1e] text-black px-3 py-1 rounded-full text-xs font-semibold font-Georgia"
                          : tech === "Javascript"
                          ? "bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold font-Georgia"
                          : tech === "HTML"
                          ? "bg-[#e34c26] text-black px-3 py-1 rounded-full text-xs font-semibold font-Georgia"
                          : tech === "CSS"
                          ? "bg-[#1572b6] text-black px-3 py-1 rounded-full text-xs font-semibold font-Georgia"
                          : tech === "Tailwind"
                          ? "bg-[#38bdf8] text-black px-3 py-1 rounded-full text-xs font-semibold font-Georgia"
                          : tech === "Expo"
                          ? "bg-[#000020] text-white px-3 py-1 rounded-full text-xs font-semibold font-Georgia"
                          : "bg-purple-700 text-white px-3 py-1 rounded-full text-xs font-semibold font-Georgia"
                      }
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="italic text-sm text-gray-300 mt-2 font-Georgia">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BLOGS SECTION */}
        <section
          id="Blogs"
          className="w-full flex flex-col items-center justify-center py-20 px-4 "
          data-aos="fade-up"
        >
          <h2
            className="text-3xl font-bold text-white mb-10 tracking-widest font-Georgia"
            data-aos="fade-up"
          >
            Latest <span className="text-purple-500">Blogs</span>
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 content-center items-center">
            {/* <div className="max-w-7xl mx-auto flex justify-between gap-8 border "> */}
            {[
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
            ].map((blog, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-white/10 rounded-2xl shadow-lg p-6 transition-transform hover:scale-105 hover:shadow-2xl duration-300"
              >
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex flex-col items-center"
                >
                  <div className="relative w-[98%] h-[220px] rounded-lg border-2 border-purple-400 mb-4 overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col w-full mt-2">
                    <p
                      className="text-lg font-bold text-white font-Georgia mb-2"
                      data-aos="fade-up"
                    >
                      {blog.title}
                    </p>
                    <p
                      className="text-gray-300 text-sm font-Georgia mb-4 italic"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      {blog.summary}
                    </p>
                    <a
                      className="shiny-button px-6 py-2 font-Georgia text-white bg-purple-700 hover:bg-purple-900 rounded-xl transition-colors duration-200 text-center"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                      href={blog.link}
                    >
                      Read More
                    </a>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT ME SECTION */}
        <section
          id="Contact"
          className="w-full flex flex-col items-center justify-center py-20 px-4 "
        >
          <div
            className="max-w-lg w-full mx-auto flex flex-col items-center gap-8 rounded-3xl shadow-2xl bg-white/10 backdrop-blur-lg p-8 md:p-12"
            data-aos="fade-up"
          >
            <h2
              className="text-3xl md:text-4xl font-bold tracking-widest mb-4 text-white font-Georgia"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Contact{" "}
              <span
                className="text-purple-400"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Me
              </span>
            </h2>
            <form
              className="w-full flex flex-col gap-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-semibold mb-2 font-Georgia"
                  data-aos="fade-up"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 font-Georgia"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-semibold mb-2 font-Georgia"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 font-Georgia"
                  placeholder="you@email.com"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-semibold mb-2 font-Georgia"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 font-Georgia"
                  placeholder="Type your message here..."
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>
              {formStatus && (
                <div
                  className={`text-center text-sm font-semibold mt-2 ${
                    formStatus.success ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
              {/* <button
                type="submit"
                className="mt-4 shiny-button border-2 border-purple-700 text-white text-center font-bold px-8 py-3 rounded-xl bg-purple-700 hover:bg-purple-900 transition-colors duration-200 font-Georgia text-xl tracking-widest shadow-lg w-full flex justify-center"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                Send Message
              </button> */}
              <button
                type="submit"
                className="mt-4 shiny-button text-white text-center font px-8 py-3 font-bold rounded-xl bg-purple-700 hover:bg-purple-900 transition-colors duration-100 font-Georgia text-xl tracking-widest shadow-lg w-full flex justify-center"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}

// import React, { useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useTypewriter, Cursor } from "react-simple-typewriter";
// import Navbar from "@/components/Navbar";
// import ScrollDiv from "@/components/Scroll";
// 
// import Footer from "./Footer";
// // import Footer from ""
// 
// import AOS from "aos";
// import "aos/dist/aos.css";
// 
// import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
// import { RiGithubLine } from "react-icons/ri";
// import { FaGithub } from "react-icons/fa";
// 
// function HOme() {
//   const [typeEffect] = useTypewriter({
//     words: [
//       "Software Developer",
//       "Fullstack Dev",
//       "Web Developer",
//       "Mobile App Developer",
//     ],
//     loop: {},
//     typeSpeed: 120,
//     deleteSpeed: 40,
//   });
// 
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration
//       easing: "ease-in",
//     });
// 
//     // return () => {
//     //   AOS.refresh();
//     // };
//   }, []);
//   return (
//     <div className="overflow-x-hidden">
//       {/* <Navbar /> */}
//       <ScrollDiv />
//       <section
//         id="Home"
//         className="relative w-screen h-screen overflow-hidden flex items-center justify-center"
//       >
//         {/* Background Video */}
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover z-0"
//           autoPlay
//           loop
//           muted
//         >
//           <source src="/vids/PinGrab_1739448372792.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         {/* Overlay for readability */}
//         <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-indigo-950/80 to-purple-900/60 z-10"></div>
//         {/* Hero Content */}
//         <div className="relative z-20 w-full flex flex-col items-center justify-center h-full">
//           <Navbar />
//           <div className="mx-auto max-w-3xl w-full flex flex-col items-center justify-center">
//             <div
//               className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 md:p-16 flex flex-col items-center gap-6 animate-fadeIn"
//               data-aos="fade-up"
//             >
//               <h1 className="text-6xl md:text-8xl font-bold tracking-wider text-white mb-2">
//                 Hi, I'm <span className="text-purple-400">Stephen O.</span>
//               </h1>
//               <p className="text-2xl md:text-4xl text-purple-100 font-medium mb-2">
//                 I'm a <span className="text-purple-300">{typeEffect}</span>
//                 <span>
//                   <Cursor cursorStyle="|" />
//                 </span>
//               </p>
//               <div className="flex gap-6 items-center justify-center mt-4">
//                 <Link href="#Portfolio">
//                   <button className="shiny-button border-2 px-8 py-2 font-Georgia italic tracking-[4px] text-2xl md:text-4xl focus:bg-white focus:text-[#0b001a] shadow-lg hover:scale-105 transition-transform duration-200">
//                     Explore
//                     <HiMiniArrowTopRightOnSquare className="ml-2" />
//                   </button>
//                 </Link>
//                 <Link href="https://github.com/StephenOnyeka/">
//                   <FaGithub className="size-8 lg:size-10 hover:text-purple-400 transition-colors duration-200" />
//                 </Link>
//                 <Link href="https://www.linkedin.com/in/stephen-onyeka-7b4a63207/">
//                   <Image
//                     src="/images/linkedin.png"
//                     width={30}
//                     height={30}
//                     alt="LinkedIn"
//                     className="hover:text-purple-400 transition-colors duration-200"
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
// 
//       <section
//         id="Services"
//         className="h-full flex flex-col justify-center max-lg:px-4 py-4 lg:py-16"
//       >
//         <h1 className="text-white tracking-widest text-3xl font-bold text-center py-8 ">
//           My <span className="text-purple-500">Services</span>
//         </h1>
//         <div className="max-w-7xl mx-auto">
//           <div
//             data-aos="fade-up"
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-2 h-auto justify-items-center"
//           >
//             {/* Web Maintenance */}
//             <div className="flex flex-col items-center justify-center text-center text-white p-8 gap-6 rounded-2xl shadow-lg bg-gradient-to-br from-purple-800 to-indigo-900 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
//               <div className="bg-indigo-700 p-4 rounded-full mb-2">
//                 <HiMiniArrowTopRightOnSquare className="text-3xl text-white" />
//               </div>
//               <h3 className="font-semibold text-lg tracking-widest">
//                 Web Maintenance
//               </h3>
//               <p className="text-gray-300 text-sm">
//                 I test websites for usability and offer maintenance services for
//                 faulty sites. I make them browser compatible and easy to work
//                 with.
//               </p>
//             </div>
// 
//             {/* Responsive Design */}
//             <div className="flex flex-col items-center justify-center text-center text-white p-8 gap-6 rounded-2xl shadow-lg bg-gradient-to-br from-purple-800 to-indigo-900 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
//               <div className="bg-indigo-700 p-4 rounded-full mb-2">
//                 <RiGithubLine className="text-3xl text-white" />
//               </div>
//               <h3 className="font-semibold text-lg tracking-widest">
//                 Responsive Design
//               </h3>
//               <p className="text-gray-300 text-sm">
//                 I build websites that are appealing and user-friendly, ensuring
//                 flawless function on desktops, smartphones, and tablets.
//               </p>
//             </div>
// 
//             {/* Fullstack Development */}
//             <div className="flex flex-col items-center justify-center text-center text-white p-8 gap-6 rounded-2xl shadow-lg bg-gradient-to-br from-purple-800 to-indigo-900 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
//               <div className="bg-indigo-700 p-4 rounded-full mb-2">
//                 <FaGithub className="text-3xl text-white" />
//               </div>
//               <h3 className="font-semibold text-lg tracking-widest">
//                 Fullstack Development
//               </h3>
//               <p className="text-gray-300 text-sm">
//                 Bring your web application vision to life with expert full-stack
//                 development. I handle everything from intuitive UI to robust
//                 server infrastructure and databases.
//               </p>
//             </div>
// 
//             {/* Mobile App Maintenance */}
//             <div className="flex flex-col items-center justify-center text-center text-white p-8 gap-6 rounded-2xl shadow-lg bg-gradient-to-br from-purple-800 to-indigo-900 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
//               <div className="bg-indigo-700 p-4 rounded-full mb-2">
//                 <HiMiniArrowTopRightOnSquare className="text-3xl text-white" />
//               </div>
//               <h3 className="font-semibold text-lg tracking-widest">
//                 Mobile App Maintenance
//               </h3>
//               <p className="text-gray-300 text-sm">
//                 I craft mobile applications and also offer mobile app
//                 maintenance services for faulty applications, making them
//                 platform compatible and easy to work with.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
// 
//       <div
//         id="Portfolio"
//         className="h-full w-full flex flex-col justify-center items-center content-center max-lg:px-4 py-32"
//       >
//         <h1 className="text-white tracking-widest text-3xl font-medium text-center py-8">
//           RECENT <span className="name">PROJECTS</span>
//         </h1>
//         <div className="max-w-7xl mx-auto" data-aos="fade-up">
//           {" "}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-sm:gap-16 p-2 h-auto justify-items-center ">
//             {/* <div className="border "> */}
//             {/* <div className="flex flex-col gap-4 font-Georgia text-purple-200/90"> */}
//             <div
//               className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-6 m-2 transition-transform hover:scale-105 hover:shadow-2xl duration-300 w-full max-w-xs"
//               data-aos="fade-up"
//             >
//               <Link href="https://paint-site-p.vercel.app/">
//                 <Image
//                   src={"/images/projects/Screenshot 2025-02-07 040251.png"}
//                   width={400}
//                   height={220}
//                   // className="rounded-xl shadow-md border-2 border-purple-700 mb-4 object-cover w-full h-48"
//                   className="aspect-auto border p-2 gradient-border"
//                   alt="Adoration Paints Project Preview"
//                 />
//               </Link>
//               <div className="flex justify-between items-center w-full pt-4">
//                 <p className="text-lg font-bold text-white">
//                   {" "}
//                   Adoration Paints
//                 </p>
//                 <div className="flex gap-2">
//                   <Link
//                     className="bg-purple-700 hover:bg-purple-900 text-white rounded-full p-2 transition-colors duration-200"
//                     href="https://paint-site-p.vercel.app/"
//                   >
//                     <HiMiniArrowTopRightOnSquare size={20} color={"white"} />
//                   </Link>
//                   <Link
//                     className="bg-purple-700 hover:bg-purple-900 text-white rounded-full p-2 transition-colors duration-200"
//                     href="https://github.com/StephenOnyeka/Projects/tree/main/paint-site"
//                   >
//                     <RiGithubLine size={20} color={"white"} />
//                   </Link>
//                 </div>
//               </div>
//               <p className="italic text-sm text-gray-300 mt-2">
//                 Adoration Paints is a premium painting company. I created this
//                 using NextJS, TailwindCSS and Nodejs.
//               </p>
//             </div>
//             <div
//               className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-6 m-2 transition-transform hover:scale-105 hover:shadow-2xl duration-300 w-full max-w-xs"
//               data-aos="fade-up"
//             >
//               <Link
//                 className="shiny-button"
//                 href="https://lenis-beryl.vercel.app/"
//               >
//                 <Image
//                   src={"/images/Screenshot 2025-02-19 010607.png"}
//                   width={500}
//                   height={300}
//                   className="aspect-auto border p-2 gradient-border"
//                 />
//               </Link>
//               <div className="flex justify-between items-center w-full mt-2">
//                 <p className="text-lg font-bold text-white"> Lenis</p>
//                 <div className="flex gap-2">
//                   <Link
//                     className="bg-purple-700 hover:bg-purple-900 text-white rounded-full p-2 transition-colors duration-200"
//                     href="https://lenis-beryl.vercel.app/"
//                   >
//                     <HiMiniArrowTopRightOnSquare size={20} color={"white"} />
//                   </Link>
//                   <Link
//                     className="bg-purple-700 hover:bg-purple-900 text-white rounded-full p-2 transition-colors duration-200"
//                     href="https://github.com/StephenOnyeka/Projects/tree/main/beauty-site"
//                   >
//                     <RiGithubLine size={20} color={"white"} />
//                   </Link>
//                 </div>
//               </div>
//               <p className="italic text-sm text-gray-300 mt-2">
//                 Lenis is a skin care company that focuses on beauty standard
//                 with nature and also Offer skin consultation with
//                 dermatologists. Brought to life using TailwindCSS and NextJS
//               </p>
//             </div>
//             <div
//               className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-6 m-2 transition-transform hover:scale-105 hover:shadow-2xl duration-300 w-full max-w-xs"
//               data-aos="fade-up"
//             >
//               <Link
//                 className="shiny-button"
//                 href="https://demo-ajci.vercel.app/"
//               >
//                 <Image
//                   src={"/images/Screenshot 2025-02-19 010423.png"}
//                   width={500}
//                   height={300}
//                   className="aspect-auto border p-2 gradient-border"
//                 />
//               </Link>
//               <div className="flex justify-between items-center w-full mt-2">
//                 <p className="text-lg font-bold text-white"> AJCI Foods</p>
//                 <div className="flex gap-2">
//                   <Link
//                     className="bg-purple-700 hover:bg-purple-900 text-white rounded-full p-2 transition-colors duration-200"
//                     href="https://demo-ajci.vercel.app/"
//                   >
//                     <HiMiniArrowTopRightOnSquare size={20} color={"white"} />
//                   </Link>
//                   <Link
//                     className="bg-purple-700 hover:bg-purple-900 text-white rounded-full p-2 transition-colors duration-200"
//                     href="https://github.com/StephenOnyeka/Projects/tree/main/nextjs-shopify-demo"
//                   >
//                     <RiGithubLine size={20} color={"white"} />
//                   </Link>
//                 </div>
//               </div>
//               <p className="italic text-sm text-gray-300 mt-2">
//                 AJCI Foods is a company that brings foods and snacks to market.
//                 Organically raised from farm to table. Built with Nextjs and
//                 TailwindCSS.
//               </p>
//             </div>
// 
//             <div
//               className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-6 m-2 transition-transform hover:scale-105 hover:shadow-2xl duration-300 w-full max-w-xs"
//               data-aos="fade-up"
//             >
//               <Link
//                 href="https://business-app-don.vercel.app/"
//                 className="shiny-button"
//               >
//                 {" "}
//                 <Image
//                   src={"/images/projects/Screenshot 2025-02-12 221629.png"}
//                   width={500}
//                   height={300}
//                   className="aspect-auto border p-2 gradient-border"
//                 />
//               </Link>
//               <div className="flex justify-between items-center w-full mt-2">
//                 <p className="text-lg font-bold text-white"> DNK-commerce</p>
//                 <div className="flex gap-2">
//                   <Link
//                     className="bg-purple-700 hover:bg-purple-900 text-white rounded-full p-2 transition-colors duration-200"
//                     href="https://business-app-don.vercel.app/"
//                   >
//                     {" "}
//                     <HiMiniArrowTopRightOnSquare size={20} color={"white"} />
//                   </Link>
//                   <Link
//                     className="bg-purple-700 hover:bg-purple-900 text-white rounded-full p-2 transition-colors duration-200"
//                     href="https://github.com/StephenOnyeka/Projects/tree/main/my-business-app"
//                   >
//                     <RiGithubLine size={20} color={"white"} />
//                   </Link>
//                 </div>
//               </div>
//               <p className="italic text-sm text-gray-300 mt-2">
//                 DNK is an e-commerce website I created using ReactJS. I ended up
//                 embedding a security dialogue. Implemented json files in stead
//                 of API calls.
//               </p>
//             </div>
//             {/* <div className="flex flex-col gap-4 font-Georgia text-purple-200/90"> */}
//             <div
//               className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-6 m-2 transition-transform hover:scale-105 hover:shadow-2xl duration-300 w-full max-w-xs"
//               data-aos="fade-up"
//             >
//               <Link
//                 className="shiny-button"
//                 href="https://stephenonyeka.github.io/lan -page/#home"
//               >
//                 <Image
//                   src={"/images/projects/Screenshot 2025-02-13 040455.png"}
//                   width={500}
//                   height={300}
//                   className="aspect-auto border p-2 gradient-border "
//                 />
//               </Link>
//               <div className="flex justify-between items-center w-full mt-2">
//                 <p className="text-lg font-bold text-white"> COLOR Page</p>
//                 <div className="flex gap-2">
//                   <Link
//                     className="bg-purple-700 hover:bg-purple-900 text-white rounded-full p-2 transition-colors duration-200"
//                     href="https://stephenonyeka.github.io/lan-page/#home"
//                   >
//                     <HiMiniArrowTopRightOnSquare size={20} color={"white"} />
//                   </Link>
//                   <Link
//                     className="bg-purple-700 hover:bg-purple-900 text-white rounded-full p-2 transition-colors duration-200"
//                     href="https://github.com/StephenOnyeka/lan-page"
//                   >
//                     <RiGithubLine size={20} color={"white"} />
//                   </Link>
//                 </div>
//               </div>
//               <p className="italic text-sm text-gray-300 mt-2">
//                 A landing page website I created using html, css and vanilla
//                 javascript that mainly focus on use and how colors can be
//                 manupulated
//               </p>
//             </div>
//             {/* <div className="flex flex-col gap-4 font-Georgia text-purple-200/90"> */}
//             <div
//               className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-6 m-2 transition-transform hover:scale-105 hover:shadow-2xl duration-300 w-full max-w-xs"
//               data-aos="fade-up"
//             >
//               <Link
//                 className="shiny-button"
//                 href="https://kingster.vercel.app/"
//               >
//                 <Image
//                   src={"/images/projects/Screenshot 2025-02-12 222317.png"}
//                   width={500}
//                   height={300}
//                   className="aspect-auto border p-2 gradient-border"
//                 />
//               </Link>
//               <div className="flex justify-between items-center w-full mt-2">
//                 <p className="text-lg font-bold text-white"> Kingster</p>
//                 <div className="flex gap-2">
//                   <Link
//                     className="bg-purple-700 hover:bg-purple-900 text-white rounded-full p-2 transition-colors duration-200"
//                     href="https://kingster.vercel.app/"
//                   >
//                     <HiMiniArrowTopRightOnSquare size={20} color={"white"} />
//                   </Link>
//                   <Link
//                     className="bg-purple-700 hover:bg-purple-900 text-white rounded-full p-2 transition-colors duration-200"
//                     href="https://github.com/StephenOnyeka/Projects/tree/main/kingster-project"
//                   >
//                     <RiGithubLine size={20} color={"white"} />
//                   </Link>
//                 </div>
//               </div>
//               <p className="italic text-sm text-gray-300 mt-2">
//                 Kingster is a college page website I built using NextJS and
//                 TailwindCSS to prove mastery of the technologies involved.
//               </p>
//             </div>
//             {/* <div className="flex flex-col gap-4 font-Georgia text-purple-200/90"> */}
//           </div>
//         </div>
//       </div>
//       <section
//         id="About"
//         className="h-auto  flex flex-col justify-center max-lg:px-4 py-20"
//       >
//         <h1 className="text-white tracking-widest text-3xl font-medium text-center py-20">
//           ABOUT <span className="name">ME</span>
//         </h1>
//         <div className="max-w-7xl mx-auto" data-aos="fade-left">
//           <div className="flex max-sm:flex-wrap items-center justify-between gap-10 p-2">
//             <div className="w-full  sm:w-1/2   flex items-center justify-center">
//               <div className="aspect-[3/4] w-[70%] border-4 gradient-border ">
//                 <div className="bg-[url('/images/Me.jpg')] bg-top bg-no-repeat bg-cover aspect-[3/4] bottom-[5%] left-[7%] relative"></div>
//               </div>
//             </div>
//             <div className="w-full md:w-1/2">
//               <div className="w-full">
//                 <p className="text-white text-lg max-sm:text-[1rem] ">
//                   I'm a software developer with a proven track record of
//                   building successful web and mobile applications.
//                   <br />
//                   <br />
//                   My expertise spans the full development lifecycle, from
//                   concept and design to development, testing, and deployment.
//                   I'm proficient in React, Nextjs, Nodejs, MongoDB, ReactNative
//                   etc. I'm passionate about clean code, efficient architecture,
//                   and creating seamless user experiences.
//                   <br />
//                   <br />
//                   I'm eager to tackle new challenges and collaborate with
//                   clients to deliver exceptional results.
//                   <br />
//                   <br />
//                   <span className="text-md font-semibold">Stephen Onyeka.</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="h-auto flex flex-col justify-center max-lg:px-4 py-20">
//         <p className="name racking-widest text-3xl max-sm:text-2xl font-bold italic text-center py-20 font-Georgia ">
//           Here are some of the technologies that I use...
//         </p>
//         <div className="max-w-7xl mx-auto" data-aos="fade-up">
//           <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 justify-between gap-16 sm:gap-28 px-2">
//             <Image
//               src={"/images/919827.png"}
//               width={100}
//               height={100}
//               className="max-sm:w-[70px] max-sm:h-[70px]  rounded-full"
//             />
//             <Image
//               src={"/images/download.png"}
//               width={100}
//               height={100}
//               className="max-sm:w-[70px] max-sm:h-[70px]  rounded-full"
//             />
//             <Image
//               src={"/images/download (1).png"}
//               width={100}
//               height={100}
//               className="max-sm:w-[70px] max-sm:h-[70px]  "
//             />
//             <Image
//               src={"/images/Typescript (2).png"}
//               width={100}
//               height={100}
//               className="max-sm:w-[70px] max-sm:h-[70px]  "
//             />
//             <Image
//               src={"/images/GitHub-Mark.png"}
//               width={100}
//               height={100}
//               className="max-sm:w-[70px] max-sm:h-[70px]  "
//             />
//             <Image
//               src={"/images/React-icon.svg.png"}
//               width={100}
//               height={100}
//               className="max-sm:w-[70px] max-sm:h-[70px] "
//             />
//             <Image
//               src={"/images/225996.webp"}
//               width={100}
//               height={100}
//               className="max-sm:w-[70px] max-sm:h-[70px]  rounded-full"
//             />
//             <Image
//               src={"/images/download (2).png"}
//               width={100}
//               height={100}
//               className="max-sm:w-[70px] max-sm:h-[70px]  rounded-full"
//             />
//             <Image
//               src={"/images/5968705.png"}
//               width={100}
//               height={100}
//               className="max-sm:w-[70px] max-sm:h-[70px] "
//             />
//             <Image
//               src={"/images/free-mongodb-3-1175138 (1).webp"}
//               width={100}
//               height={100}
//               className="max-sm:w-[70px] max-sm:h-[70px]  "
//             />
//             <Image
//               src={"/images/nodejs-logo.png"}
//               width={100}
//               height={100}
//               className="max-sm:w-[70px] max-sm:h-[70px]  "
//             />
//             <Image
//               src={"/images/banner.png"}
//               width={100}
//               height={100}
//               className="max-sm:w-[70px] max-sm:h-[70px]  "
//             />
//           </div>
//         </div>
//       </section>
//       <section
//         id="Contact"
//         className="min-h-[60vh] flex flex-col justify-center items-center py-20 px-4 bg-gradient-to-br from-purple-950 to-indigo-900/80"
//       >
//         <div
//           className="max-w-3xl w-full mx-auto rounded-3xl shadow-2xl bg-white/10 backdrop-blur-lg p-8 md:p-16 flex flex-col items-center"
//           data-aos="fade-up"
//         >
//           <h1 className="text-white tracking-widest text-3xl font-bold text-center mb-8">
//             CONTACT <span className="name text-purple-400">ME</span>
//           </h1>
//           <div className="max-w-7xl mx-auto text-center space-y-6 text-white">
//             <div className="flex flex-col gap-4 tracking-widest">
//               <p className="text-2xl max-sm:text-xl font-medium">
//                 WANT TO COLLABORATE? SEND ME AN E-MAIL
//               </p>
//               <p className="text-lg max-sm:text-sm font-medium">
//                 I AM VERY RESPONSIVE TO MESSAGES
//               </p>
//             </div>
//             <br />
//             <br />
//             <Link href="mailto:https://ejeanobionyeka@gmail.com">
//               <button className="shiny-button font-Georgia italic border px-6 py-3 tracking-widest">
//                 Write a Mail
//               </button>
//             </Link>
//           </div>{" "}
//           {/* End of Contact inner content */}
//         </div>{" "}
//         {/* End of Contact card wrapper */}
//       </section>
//       <Footer />
//     </div>
//   );
// }
// 
// export default HOme;
