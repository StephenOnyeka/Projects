import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

import { FiPhoneCall } from "react-icons/fi";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { BsEnvelope } from "react-icons/bs";
import { IoMdPaperPlane } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { BsInfoCircle } from "react-icons/bs";
import { GoPencil } from "react-icons/go";
import { TfiPencil } from "react-icons/tfi";

function Contact() {
  return (
    <div>
      <div className="bg-[#f1f2f3] ">
        <section className="px-4 py-16 pt-52 max-md:pt-32 max-sm:pt-10 mx-auto max-w-7xl">
          <div className="flex max-md:flex-wrap items-center justify-between gap-4 max-md:gap-8">
            <div className="w-full md:w-1/2 flex flex-col gap-4 lg:gap-6">
              <div>
              <p className="text-2xl max-md:text-2xl text-black/70">
                Contact Us
              </p>
              <div className="text-4xl lg:text-5xl xl:text-6xl font-semibold py-4 max-sm:py-2 font-Libre">
                Have questions? <br />
                <div className="pt-2">Get in touch!</div>
              </div></div>
              {/* <p className="text-gray-500 text-md leading-8 "> */}
              <p className="text-gray-500 text-md leading-8 md:text-lg md:leading-10">
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim.
              </p>
              <div className="flex flex-col gap-2 text-black/60">
                <span className="flex items-center gap-4">
                  <IoLocationOutline className="size-5 text-orange-400" />
                  <p className="text-md">785 15h Street, Office 478 Boston</p>
                </span>
                <span className="flex items-center gap-4">
                  <HiOutlineDevicePhoneMobile className="size-5 text-orange-400" />
                  <p className="text-md text-black">+1 323 468 45 70</p>
                </span>
                <span className="flex items-center gap-4">
                  <BsEnvelope className="size-5 text-orange-400" />
                  <p className="text-md">info@gmail.com</p>
                </span>
              </div>
            </div>
            <form className="w-full md:w-1/2 ">
              <div className="flex flex-col justify-items-center ">
                {/* <div className="w-full"> */}
                <div className=" ">
                  <div className="flex justify-between items-center gap-6 max-sm:flex-wrap">
                    <span className="flex items-center gap-4 border-b border-black pb-2 w-full">
                      <RxAvatar className="size-8" />
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full placeholder:text-black bg-transparent outline-none"
                      />
                    </span>
                    <span className="flex items-center gap-4 border-b border-black pb-2 w-full">
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
                    <span className="flex items-center gap-4 border-b border-black pb-2 w-full">
                      <LiaPhoneVolumeSolid className="size-8" />
                      <input
                        type="text"
                        placeholder="Phone"
                        className="w-full placeholder:text-black bg-transparent outline-none"
                      />
                    </span>
                    <span className="flex items-center gap-4 border-b border-black pb-2 w-full">
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
                  <span className="flex gap-2 border-b border-black">
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
                  <button className="flex items-center gap-2 text-sm bg-black rounded-lg text-white px-8 py-4 hover:bg-black/70">
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
        <div className="h-screen/2 lg:h-screen/1.5 xl:h-screen/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d79473.25101719813!2d-0.119545!3d51.503325!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDMwJzEyLjAiTiAwwrAwNycxMC40Ilc!5e0!3m2!1sen!2sus!4v1736831401784!5m2!1sen!2sus"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
export default Contact;
