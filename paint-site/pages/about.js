import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import ImageSlider from "@/components/image-slider";

// import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import AOS from "aos";
import "aos/dist/aos.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function About() {
  useEffect(() => {
  AOS.init({
    duration: 1000, // Animation duration
    easing: 'ease-in-out', // Animation easing
    // once: true, // Whether to animate only once
    // ... other AOS options
  });
    
    return () => {
      AOS.refresh(); // Refresh AOS on component unmount or when dependencies change. Important!
    };
}, []);
  return (
    <div>
      <Navbar />
      {/* <h1>About Page</h1> */}
      <div className="py-16">
        <p className="text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
          About Us
        </p>
      </div>
      <section className="px-4 py-4 mx-auto max-w-7xl">
        <div
          className="flex max-md:flex-wrap items-center justify-between gap-10"
          data-aos="fade-up"
        >
          <div className="p-10 md:p-0 flex items-center md:justify-start justify-center max-[500px]:justify-start w-full md:w-1/2">
            <div className="h-auto w-[70%] max-md:w-[50%] max-sm:w-[70%] relative">
              <Image
                className="w-full h-full"
                src={"/images/pt.jpg"}
                width={250}
                height={500}
                content="responsive"
              />
              <Image
                // className=" -mt-40 -ml-20 w-[90%] "
                className=" -mt-[70%] ml-[42%] w-[80%] "
                src={"/images/ptman.jpg"}
                width={250}
                height={500}
                content="responsive"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            {/* <div className="w-full"> */}
            <p className="text-sm font-bold tracking-[2px] pb-2">
              PREMIUM QUALITY
            </p>
            <p className="text-4xl lg:text-5xl xl:text-6xl font-bold pb-4">
              Uncover a spectrum of possibilities
            </p>
            <p className="text-slate-500 text-md">
              Beyond decoration, we manufacture and produce paints. Our paints
              are designed to enhance and enrich the spaces they adorn. We
              believe that true luxury lies in the enduring quality of materials
              and the artistry of their application..
            </p>
            <br />
            <p className="text-sm font-medium tracking-[2px] pb-2">
              MON-FRI: 9AM-6PM
            </p>
            <p className="text-sm font-medium tracking-[2px]">
              SATURDAY: 9AM-4PM
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center py-10 px-6 w-full">
          <div>
            <p className="font-bold text-center pb-2">Offices</p>
            <p className="text-4xl md:text-5xl tracking-widest font-bold ">
              90+
            </p>
          </div>
          <div>
            <p className="font-bold text-center pb-2">Happy Clients</p>
            <p className="text-4xl md:text-5xl tracking-widest font-bold ">
              2548+
            </p>
          </div>
          <div>
            <p className="font-bold text-center pb-2">Years</p>
            <p className="text-4xl md:text-5xl tracking-widest font-bold ">
              25+
            </p>
          </div>
          <div>
            <p className="font-bold text-center pb-2">Projects</p>
            <p className="text-4xl md:text-5xl tracking-widest font-bold ">
              256
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4">
        <ImageSlider />
      </section>
      <section className="max-w-7xl mx-auto ">
        <div className="py-8">
          <p className="text-2xl font-bold text-center md:hidden">
            We work with the best brands
          </p>
          <br />
          <div className="flex items-center content-center justify-between px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 justify-items-center w-full md:w-3/4">
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
            </div>
            <div className="">
              <p className="text-2xl font-bold transition duration-100 ease-in hidden md:block text-right">
                We work with the best brands
              </p>
            </div>
          </div>
        </div>
      </section>
      <br />
      <Footer />
    </div>
  );
}
