import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer>
        <div className="bg-[#0A0300]">
          <div className="pt-16 pb-8 max-w-7xl mx-auto max-xl:px-8">
            <div className="flex justify-center text-white/50 gap-10 max-sm:flex-wrap max-sm:gap-10 ">
              <div className="box w-full text-white/80">
                <div className="mb-10">
                  <div className="bg-[url('/images/AP3.jpg')] w-full h-10  bg-contain bg-no-repeat bg-left ">
                    {/* <div className="bg-[url('/images/AP3.jpg')] w-full h-40  bg-contain bg-no-repeat bg-center max-md:w-16 max-md:h-16 max-sm:w-12 max-sm:h-12"> */}
                    {/* <Image src="" width={50} height={50} className="rounded-full" /> */}
                  </div>
                </div>
                <p className="text-white text-lg font-semibold">
                  Working Hours
                </p>
                <br />
                <ul className="font-light leading-8 max-sm:leading-7 max-sm:text-xs">
                  <li>
                    <a href="">Mon-Fri: 9 AM – 6 PM</a>
                  </li>
                  <li>
                    <a href="">Saturday: 9 AM – 4 PM</a>
                  </li>
                  <li>
                    <a href="">Sunday: Closed</a>
                  </li>
                </ul>
              </div>
              <div className="box w-full text-white/80">
                <p className="text-white text-lg font-semibold">Office</p>
                <br />
                <ul className="font-light leading-7 max-sm:leading-7 max-sm:text-xs">
                  <li>
                    Nigeria - <br /> 785 15h Street, Office 478
                  </li>
                  <li>Boston, MD 02130</li>
                  {/* <br /> */}
                  <li className="pt-4 pb-7">
                    <a href="" className="border-b pb-2">
                      info@email.com
                    </a>
                    {/* <hr /> */}
                  </li>
                  <li className="font-medium text-lg max-sm:text-sm text-white">
                    {/* +1 800 555 25 69 */}
                    +234 803 261 75 86 <br/> +234 906 123 10 29
                  </li>
                </ul>
              </div>
              <div className="box w-full text-white/80">
                <p className="text-white text-lg font-semibold">Links</p>
                <br />
                <ul className="font-light leading-9 max-sm:leading-7 max-sm:text-xs">
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">Services</a>
                  </li>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Shop</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="box w-full">
                <p className="text-white text-lg font-semibold">Get in Touch</p>
                <br />
                <div className="flex text-white gap-1">
                  <a
                    href=""
                    className="border border-white/30 p-2.5 rounded-full"
                  >
                    <FaFacebookF
                      size={15}
                      className="hover:text-white/50 transition-all duration-100 ease-in"
                    />
                  </a>
                  <a
                    href=""
                    className="border border-white/30 p-2.5 rounded-full"
                  >
                    <FaLinkedin
                      size={15}
                      className="hover:text-white/50 transition-all duration-100 ease-in"
                    />
                  </a>
                  <a
                    href=""
                    className="border border-white/30 p-2.5 rounded-full"
                  >
                    <FaXTwitter
                      size={15}
                      className="hover:text-white/50 transition-all duration-100 ease-in"
                    />
                  </a>
                  <a
                    href=""
                    className="border border-white/30 p-2.5 rounded-full"
                  >
                    <FaInstagram
                      size={15}
                      className="hover:text-white/50 transition-all duration-100 ease-in"
                    />
                  </a>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="border-t border-white/30 pt-8">
              <p className="text-white/90 font-light max-sm:text-xs">
                {/* Copyright All Right Reserved 2025 */}
                Steve's © 2025. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer