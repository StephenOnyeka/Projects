import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// AOS is initialised once for the whole app in components/aos-provider.js.

import { LiaPhoneVolumeSolid } from "react-icons/lia";

import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { BsEnvelope } from "react-icons/bs";
import { IoMdPaperPlane } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { BsInfoCircle } from "react-icons/bs";
import { TfiPencil } from "react-icons/tfi";

function Contact() {
  return (
    <div>
      <div className="bg-[#f1f2f3] ">
        <Navbar />
        <div className="pt-12 enter-rise">
          <p className="text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
            Contact
          </p>
        </div>
        {/* First screenful - CSS entrance classes rather than AOS, which would
            hold it at opacity 0 until hydration. */}
        <section className="px-4 py-16 mx-auto max-w-7xl">
          <div className="flex max-md:flex-wrap items-center justify-between gap-4 max-md:gap-8">
            <div className="w-full md:w-1/2 enter-rise">
              {/* <div className="w-full"> */}
              <p className="text-sm font-bold tracking-[2px] pb-2">
                CONTACT US
              </p>
              <p className="text-4xl lg:text-5xl xl:text-6xl font-bold pb-4">
                Have questions? <br />
                Get in touch!
              </p>
              <p className="text-gray-500 text-md lg:text-lg">
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim.
              </p>
              <br />
              <span className="flex flex-col gap-2 text-gray-500">
                <span className="flex items-center gap-4">
                  <IoLocationOutline className="size-5 text-orange-400" />
                  <p className="text-md lg:text-lg">
                    785 15h Street, Office 478 Boston
                  </p>
                </span>
                <span className="flex items-center gap-4">
                  <HiOutlineDevicePhoneMobile className="size-5 text-orange-400" />
                  <p className="text-md lg:text-lg text-black">
                    +234 916 234 26 03, +234 705 493 54 29
                  </p>
                </span>
                <span className="flex items-center gap-4">
                  <BsEnvelope className="size-5 text-orange-400" />
                  <p className="text-md lg:text-lg">info@gmail.com</p>
                </span>
              </span>
            </div>
            <form
              className="w-full md:w-1/2 enter-rise"
              style={{ animationDelay: "120ms" }}
            >
              <div className="flex flex-col justify-items-center ">
                {/* <div className="w-full"> */}
                <div className=" ">
                  <div className="flex justify-between items-center gap-6 max-sm:flex-wrap">
                    <span className="flex items-center gap-4 border-b border-black pb-2 w-full transition-colors duration-200 focus-within:border-orange-400">
                      <RxAvatar className="size-8" />
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full placeholder:text-black bg-transparent outline-none"
                      />
                    </span>
                    <span className="flex items-center gap-4 border-b border-black pb-2 w-full transition-colors duration-200 focus-within:border-orange-400">
                      <BsEnvelope className="size-8" />
                      <input
                        type="text"
                        placeholder="Email Address"
                        className="w-full placeholder:text-black bg-transparent outline-none"
                      />
                    </span>
                  </div>
                  <br />
                  <div className="flex justify-between items-center gap-6 max-sm:flex-wrap">
                    <span className="flex items-center gap-4 border-b border-black pb-2 w-full transition-colors duration-200 focus-within:border-orange-400">
                      <LiaPhoneVolumeSolid className="size-8" />
                      <input
                        type="text"
                        placeholder="Phone"
                        className="w-full placeholder:text-black bg-transparent outline-none"
                      />
                    </span>
                    <span className="flex items-center gap-4 border-b border-black pb-2 w-full transition-colors duration-200 focus-within:border-orange-400">
                      <BsInfoCircle className="size-8" />
                      <input
                        type="text"
                        placeholder="Subject"
                        className="w-full placeholder:text-black bg-transparent outline-none"
                      />
                    </span>
                  </div>
                  <br />
                  <br />
                  {/* The inputs set outline-none, so without this the fields
                      gave no focus feedback at all. */}
                  <span className="flex gap-2 border-b border-black transition-colors duration-200 focus-within:border-orange-400">
                    <TfiPencil className="size-6" />
                    <textarea
                      name=""
                      id=""
                      rows="10"
                      cols="30"
                      className="w-full placeholder:text-black bg-transparent outline-none "
                      placeholder="How can we help you? Feel free to get in touch!"
                    ></textarea>
                  </span>
                  <br />
                  {/* <br /> */}
                  <button className="flex items-center gap-2 text-sm bg-orange-400 text-white px-8 py-4 font-bold transition-colors duration-200 hover:bg-orange-500">
                    <IoMdPaperPlane className="size-5" /> Get in Touch
                  </button>
                </div>
              </div>
            </form>
          </div>
          <br />
        </section>
      </div>
      <section>
        {/* The map is between half a viewport and one and a half tall, so a
            full fade-up's 100px start would still be travelling long after the
            top edge appeared. */}
        <div
          className="h-screen/2 lg:h-screen/1.5 xl:h-screen/2"
          data-aos="fade-up-short"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d79473.25101719813!2d-0.119545!3d51.503325!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDMwJzEyLjAiTiAwwrAwNycxMC40Ilc!5e0!3m2!1sen!2sus!4v1736831401784!5m2!1sen!2sus"
            title="Our office location on Google Maps"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Contact;
