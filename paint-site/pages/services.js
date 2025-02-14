import React, { useEffect } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";

import { FiPhoneCall } from "react-icons/fi";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiAlarmClock } from "react-icons/gi";
import { PiFileLockLight } from "react-icons/pi";
import { PiHandshakeLight } from "react-icons/pi";

import CenterMode from "@/components/centerMode";

function Services() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 3,
    speed: 500,
  };

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
      <div className="bg-[#f1f2f3] ">
        <Navbar />
        <div className="pt-12">
          <p className="text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
            Our Services
          </p>
        </div>
        <section className="px-4 py-16 mx-auto max-w-7xl" data-aos="fade-up">
          <div className="flex max-md:flex-wrap items-center justify-between ">
            <div className="w-full md:w-1/2">
              {/* <div className="w-full"> */}
              <p className="text-sm font-bold tracking-[2px] pb-2">
                RENOVATION IDEAS
              </p>
              <p className="text-4xl lg:text-5xl xl:text-6xl font-bold pb-4">
                Wallpaper ideas for your interiors
              </p>
              <p className="text-md pb-4 lg:text-lg italic">
                Expert Guidance for Your Home
              </p>
              <p className="text-slate-500 text-md">
                Our team of design specialists can help you navigate the world
                of wallpaper, offering expert advice on color, texture, and
                application. We'll ensure a flawless finish that enhances the
                beauty of your interiors.
              </p>
              <br />
              {/* <div className="flex gap-4 max-sm:gap-0 max-sm:justify-between"> */}
              <div className="flex gap-4 max-sm:flex-wrap">
                <Link href="/about">
                  <button className="text-sm bg-orange-400 text-white px-8 py-4 font-bold">
                    About Us
                  </button>
                </Link>
                {/* <br /> */}
                <button className="text-sm bg-transparent px-8 py-3 max-sm:px-6 font-bold border border-black">
                  <span className="flex items-center gap-4 max-sm:gap-2">
                    <FiPhoneCall className="bg-white" />
                    <p className="text-lg max-sm:text-sm">0 803 26 17 586</p>
                  </span>
                </button>
              </div>
            </div>
            <div className="p-10 md:p-0 flex items-center justify-center md:justify-end max-[500px]:justify-end w-full md:w-1/2">
              <div className=" h-auto w-[70%] max-md:w-[50%] max-sm:w-[70%] relative">
                <Image
                  className="w-full h-full"
                  src={"/images/image3.jpg"}
                  width={250}
                  height={500}
                  content="responsive"
                />
                <Image
                  // className=" -mt-40 -ml-20 w-[90%] "
                  className=" -mt-[70%] -ml-[20%] w-[80%] "
                  src={"/images/image2.jpg"}
                  width={250}
                  height={500}
                  content="responsive"
                />
              </div>
            </div>
          </div>
          <br />
        </section>
      </div>
      <section className="px-4 py-16">
        <p className="text-sm font-bold tracking-[2px] pb-2 text-center">
          PREMIUM QUALITY
        </p>
        <p className="text-4xl lg:text-5xl xl:text-6xl font-bold pb-4 text-center">
          Our services make your <br /> life comfortable
        </p>
        <div data-aos="fade-up">
          <div className="max-w-7xl mx-auto">
            {/* <div className="flex justify-betw content-center gap-4 items-center max-sm:flex-wrap"> */}
            <div className="grid grid-cols-3 content-center gap-4 items-center max-md:grid-cols-2 max-sm:grid-cols-1">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-[url('/images/service-image4.jpg')] bg-cover bg-no-repeat bg-center w-40 h-40 lg:w-48 lg:h-48 max-sm:w-56 max-sm:h-56 rounded-full mb-2"></div>
                <p className="text-gray-400"> Renovation</p>
                <p className="text-xl font-bold">Bedroom renovation</p>
                <p className="text-md text-gray-400">
                  Custom-designed bedroom solutions to maximize space and style.
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-[url('/images/service-image5.jpg')] bg-cover bg-no-repeat bg-center w-40 h-40 lg:w-48 lg:h-48 max-sm:w-56 max-sm:h-56 rounded-full mb-2"></div>
                <p className="text-gray-400"> Renovation</p>
                <p className="text-xl font-bold">Hall renovation</p>
                <p className="text-md text-gray-400">
                  Welcome guests in style. Transform your hallway into a
                  beautiful and inviting space
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-[url('/images/service-image7.jpg')] bg-cover bg-no-repeat bg-center w-40 h-40 lg:w-48 lg:h-48 max-sm:w-56 max-sm:h-56 rounded-full mb-2"></div>
                <p className="text-gray-400"> Renovation</p>
                <p className="text-xl font-bold">Bathroom renovation</p>
                <p className="text-md text-gray-400">
                  Indulge in a spa-like experience every day. Our bathroom
                  renovation services will create a sanctuary you'll love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" px-6 py-8 md:py-16 bg-orange-700 ">
        {/* <div className="flex flex-1 h-full"> */}
        <div className="flex max-md:flex-wrap justify-between items-center max-md:gap-6 max-w-7xl mx-auto h-full">
          <div className="w-full md:w-1/2">
            <p className="text-xl md:text-2xl xl:text-4xl leading-7 text-black max:sm:leading-6 font-semibold">
              Schedule an appointment to meet or email us your questions
            </p>
          </div>
          <div className="flex gap-5 w-full md:w-1/2 justify-end max-md:justify-start">
            <button className="bg-black text-white max-sm:text-sm font-semibold px-6 py-3 hover:bg-black/90">
              Request a Quote
            </button>
            <Link href="/contact">
              <button className="px-7 py-3 border-2 border-black max-sm:border max-sm:text-sm text-black hover:text-white font-semibold hover:bg-black">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        {/* </div> */}
      </section>
      <section className="px-4 py-4 mt-8 mx-auto max-w-7xl" data-aos="fade-up">
        <div className="flex max-md:flex-wrap items-center justify-between gap-10">
          <div className="p-10 md:p-0 max-sm:p-4 flex items-center justify-between max-md:justify-start w-full md:w-1/2 ">
            <div className="h-auto w-[50%] relative flex justify-between gap-[5%]">
              <Image
                className="w-full h-auto"
                src={"/images/portfolio-image1.jpg"}
                width={250}
                height={500}
                content="responsive"
              />
              <Image
                className=" w-full h-auto "
                // className=" -mt-[70%] ml-[42%] w-[80%] "
                src={"/images/portfolio-image8.jpg"}
                width={250}
                height={500}
                content="responsive"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            {/* <div className="w-full"> */}
            <p className="text-sm font-bold tracking-[2px] pb-2">
              MODERN SOLUTIONS
            </p>
            <p className="text-4xl lg:text-5xl xl:text-6xl font-bold pb-4">
              Exclusive Taste of Royalty
            </p>
            <p className="text-slate-500 text-md">
              We craft premium paints designed for lasting beauty. Our
              commitment to quality ensures a rich, vibrant finish that enhances
              any space and stands the test of time.
            </p>
            <br />
            <Link href="/shop">
              <button className="text-sm bg-orange-400 text-white px-8 py-3 font-bold">
                Visit Our Store
              </button>
            </Link>
          </div>
        </div>
        <br />
        <div className="grid grid-cols md:grid-cols-3 gap-8 justify-items-center py-10 px-6 w-full">
          <div className="flex flex-col gap-1 items-center text-center">
            <CiDeliveryTruck className="size-20 text-orange-600" />
            <p className="text-xl font-bold pb-2">Worldwide shipping</p>
            <p className="text-md text-gray-400">
              We offer worldwide shipping to make our products available to you,
              no matter where you are.
            </p>
          </div>
          <div className="flex flex-col gap-1 items-center text-center">
            <PiFileLockLight className="size-20 text-orange-600" />
            <p className="text-xl font-bold pb-2">Buyer protection</p>
            <p className="text-md text-gray-400">
              Your security is our priority. We offer comprehensive buyer
              protection to give you confidence in every purchase.
            </p>
          </div>
          <div className="flex flex-col gap-1 items-center text-center">
            {/* <GiAlarmClock className="size-20 text-orange-600" /> */}
            <PiHandshakeLight className="size-20 text-orange-600" />
            <p className="text-xl font-bold pb-2">Customer support</p>
            <p className="text-md text-gray-400">
              Experience exceptional customer service. We're here to help you
              every step of the way.
            </p>
          </div>
        </div>
      </section>
      {/* <section className="my-8 max-w-7xl mx-auto">
        <CenterMode/>
      </section> */}
      <Footer />
    </div>
  );
}

export default Services;
