import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiSpookyHouse } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import Navbar from "./Navbar";
import Footer from "./Footer";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaXTwitter } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function HoMe() {
    useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      // once: true, // Whether to animate only once
      // ... other AOS options
    }); return () => {
          AOS.refresh(); // Refresh AOS on component unmount or when dependencies change. Important!
        };
  }, []);
  return (
    <div className=" ">
      <Navbar />
      <div className=" pt-10 mx-auto max-w-7xl">
        <section
          className="px-8 flex max-sm:flex-wrap items-center justify-between  w-full"
          data-aos="fade-up"
        >
          <div className="w-full md:w-1/2">
            <p className="text-xs font-bold text-primary tracking-[2px] pb-2">
              ADD COLOR TO YOUR LIFE
            </p>
            <p className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary pb-4 ">
              {/* ProRange: <br /> */}
              AdorationPaints: <br />
              premium painting company
            </p>
            <Link href="/services">
              <button className="text-sm bg-orange-400 text-white px-8 py-4 font-bold">
                View All Services
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              className="h-auto lg:w-[600px]"
              src={"/images/homebg.webp"}
              width={700}
              height={700}
              // layout="responsive"
            />
          </div>
        </section>
      </div>

      <section className="my-10 py-16 bg-[#f1f2f3] ">
        <div className="text-center">
          <p className="text-xs font-bold text-primary tracking-[2px] pb-2">
            WHAT WE OFFER
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary pb-4">
            Our painting services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center  px-4 py-4 mx-auto max-w-7xl w-full">
          <div className="flex flex-col items-center w-full bg-white text-center group py-12 px-4 ">
            <Image
              src={"/icons/4099285.svg"}
              className="text-blue-500"
              width={70}
              height={70}
            />
            <br />
            <p className="text-primary text-xl font-bold">Interior painting</p>
            <p className="text-slate-400 mb-2">
              Beautiful, durable finishes for every room.
            </p>
            <BsThreeDots
              size={30}
              className="text-slate-400 group-hover:text-[#4159EE]"
            />
          </div>
          <div className="flex flex-col items-center w-full bg-white text-center group py-12 px-4">
            <Image src={"/icons/6168373.svg"} width={70} height={70} />
            <br />
            <p className="text-primary text-xl font-bold">Variety of colors</p>
            <p className="text-slate-400">
              Endless color possibilities for your perfect project.
            </p>
            {/* <p className="text-slate-400">Beautiful walls guaranteed</p> */}
            <BsThreeDots
              size={30}
              className="text-slate-400 group-hover:text-[#4159EE]"
            />
          </div>
          <div className="flex flex-col items-center w-full bg-white text-center group py-12 px-4">
            <Image src={"/icons/wk.svg"} width={70} height={70} />
            <br />
            <p className="text-primary text-xl font-bold">Qualified workers</p>
            <p className="text-slate-400">
              Skilled professionals for flawless results.
            </p>
            <BsThreeDots
              size={30}
              className="text-slate-400 group-hover:text-[#4159EE]"
            />
          </div>
          <div className="flex flex-col items-center w-full bg-white text-center group py-12 px-4">
            <GiSpookyHouse className="w-56 h-16 text-[#4159EE]" /> <br />
            <p className="text-primary text-xl font-bold">Exterior painting</p>
            <p className="text-slate-400">
              Perfect exterior look with our customized painting solutions
            </p>
            <BsThreeDots
              size={30}
              className="text-slate-400 group-hover:text-[#4159EE]"
            />
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="px-4 py-4 mx-auto max-w-7xl">
        <div className="flex max-md:flex-wrap items-center content-center justify-between gap-0 sm:gap-10 md:gap-14 lg:gap-20 xl:gap-28">
          <div className="p-10 md:p-0 flex items-center justify-center max-sm:justify-start w-full md:w-1/2">
            <div className="h-auto w-[70%] max-md:w-[50%] max-sm:w-[70%] relative">
              <Image
                className="w-full h-full"
                src={"/images/home-image1(1).jpg"}
                width={250}
                height={500}
                content="responsive"
              />
              <Image
                // className=" -mt-40 -ml-20 w-[90%] "
                className=" -mt-[70%] ml-[45%] w-[80%] "
                src={"/images/home-image1(2).jpg"}
                width={250}
                height={500}
                content="responsive"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-sm font-bold text-primary tracking-[2px] pb-2">
              PREMIUM QUALITY
            </p>
            <p className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary pb-4">
              Bringing your dreams to life
            </p>
            <p className="text-slate-500 text-md">
              We're dedicated to providing exceptional quality and service. From
              color selection to the final brushstroke, we'll ensure your
              project is a success."
            </p>
            <br />
            <p className="text-sm font-medium text-primary tracking-[2px] pb-2">
              MON-FRI: 9AM-10PM
            </p>
            <p className="text-sm font-medium text-primary tracking-[2px]">
              SATURDAY: 9AM-6PM
            </p>
            <br />
            <Link href="/services">
              <button className="text-sm bg-orange-400 text-white px-8 py-3 font-bold">
                Our Services
              </button>
            </Link>
          </div>
        </div>
        <br />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center py-10 px-6 w-full">
          <Image
            src={"/images/logo1.webp"}
            className="opacity-30 hover:opacity-100 transition duration-100 ease-in"
            width={180}
            height={100}
          />
          <Image
            src={"/images/logo2.webp"}
            className="opacity-30 hover:opacity-100 transition duration-100 ease-in"
            width={180}
            height={100}
          />
          <Image
            src={"/images/logo3.webp"}
            className="opacity-30 hover:opacity-100 transition duration-100 ease-in"
            width={180}
            height={100}
          />
          <Image
            src={"/images/logo4.webp"}
            className="opacity-30 hover:opacity-100 transition duration-100 ease-in"
            width={180}
            height={100}
          />
          <Image
            src={"/images/logo5.webp"}
            className="opacity-30 hover:opacity-100 transition duration-100 ease-in"
            width={180}
            height={100}
          />
          <Image
            src={"/images/logo6.webp"}
            className="opacity-30 hover:opacity-100 transition duration-100 ease-in"
            width={180}
            height={100}
          />
        </div>
      </section>

      <section className=" px-4 py-8 md:py-16 bg-[#4159EE] ">
        {/* <div className="flex flex-1 h-full border"> */}
        <div className="flex max-md:flex-wrap justify-between items-center max-md:gap-6 max-w-7xl mx-auto h-full">
          <div className="w-full md:w-1/2">
            <p className="text-white text-xl md:text-2xl xl:text-4xl leading-7 max:sm:leading-6 font-semibold">
              Schedule an appointment to meet or email us your questions
            </p>
          </div>
          <div className="flex gap-5 w-full md:w-1/2 justify-end max-md:justify-start">
            <button className="bg-orange-400 text-white max-sm:text-sm font-semibold px-6 py-3">
              Request a Quote
            </button>
            <Link href="/contact">
              <button className="px-7 py-3 border-2 max-sm:border max-sm:text-sm text-white font-semibold hover:bg-white hover:text-[#4159EE]">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        {/* </div> */}
      </section>

      <section className="px-4 py-10 bg-[#f1f2f3] h-full">
        <div className="mx-auto max-w-7xl">
          <span className="text-center">
            <p className="text-xs font-bold text-primary tracking-[2px] pb-2">
              TESTIMONIALS
            </p>
            <p className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary pb-4">
              Our customers say
            </p>
          </span>
          <br />
          <div
            className="flex max-md:flex-wrap gap-8"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div className="p-6 lg:p-10 bg-white w-full h-full">
              <p className="lg:text-lg xl:text-xl text-primary leading-7 xl:leading-8 pb-4">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.1"
                  viewBox="0 0 16 16"
                  // height="1em"
                  // width="1em"
                  className="w-6 text-orange-400 pb-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.548-0.043zM12.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.549-0.043z"></path>
                </svg>
                I've partnered with Adoration Paints on several high-end
                residential projects, and they consistently deliver outstanding
                results. Their expertise in paint selection, surface
                preparation, and application is unparalleled. They make my
                designs look their absolute best.
              </p>
              <div className="flex items-center gap-4">
                <Image
                  className="rounded-full"
                  src={"/images/1.jpg"}
                  width={55}
                  height={55}
                />
                <div className="flex flex-col">
                  <span className="text-primary font-bold">
                    {" "}
                    Gillian Caldwell
                  </span>
                  <span className="text-slate-400"> Designer</span>
                </div>
              </div>
            </div>
            <div className="p-6 lg:p-10 bg-white w-full h-full">
              <p className="lg:text-lg xl:text-xl text-primary leading-7 xl:leading-8 pb-4">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.1"
                  viewBox="0 0 16 16"
                  // height="1em"
                  // width="1em"
                  className="w-6 text-orange-400 pb-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.548-0.043zM12.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.549-0.043z"></path>
                </svg>
                Adoration Paints is my secret weapon for getting properties
                ready to sell quickly and for top price. Their painting services
                are fast, affordable, and they make a huge impact on the overall
                appearance of a home. I highly recommend them to any agent
                looking to give their listings a competitive edge.
              </p>
              <div className="flex items-center gap-4">
                <Image
                  className="rounded-full"
                  src={"/images/2.jpg"}
                  width={55}
                  height={55}
                />
                <div className="flex flex-col">
                  <span className="text-primary font-bold">Felicia Garret</span>
                  <span className="text-slate-400"> Real Estate Agent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HoMe;
