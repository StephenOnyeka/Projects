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
        {/* <div className="bg-[#0A0300]"> */}
        <div className="bg-[#69422F]">
          <div className="pt-16 pb-8 max-w-7xl mx-auto max-lg:px-8 max-sm:px-4">
            {/* <div className="flex justify-center items-center text-white/50 gap-10 max-md:flex-wrap max-sm:gap-10 "> */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center text-white/50 gap-10  max-sm:gap-10 ">
              <div className="box w-full text-white/80">
                <div className="bg-[url(/lenis.jpg)] bg-cover max-sm:bg-contain bg-left bg-no-repeat w-40 h-12"></div>

                <br />
                <p className="font-medium text-lg max-sm:text-base font-Libre italic">
                  Rich skin care ...
                </p>
              </div>
              <div className="box w-full text-white/80">
                <p className="text-white text-lg font-semibold">Office</p>
                <br />
                <ul className="font-light leading-7 max-sm:leading-7 max-sm:text-xs">
                  <li>
                    The USA - <br /> 785 15h Street, Office 478
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
                    {/* +1 323 468 45 70 */}
                    +234 916 234 26 03
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
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Shop</a>
                  </li>
                  <li>
                    <a href="">Book an appointment</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="box w-full">
                <div>
                  <p className="text-white text-lg font-semibold">
                    Get in Touch
                  </p>
                  <br />
                  <div className="flex text-white gap-2 max-sm:gap-1">
                    <a
                      href=""
                      className="border border-white/30 p-2.5 max-sm:p-2 rounded-full  hover:bg-white/50"
                    >
                      <FaFacebookF
                        size={15}
                        className="hover:text-white/50 transition-all duration-100 ease-in"
                      />
                    </a>
                    <a
                      href=""
                      className="border border-white/30 p-2.5 max-sm:p-2 rounded-full  hover:bg-white/50"
                    >
                      <FaLinkedin
                        size={15}
                        className="hover:text-white/50 transition-all duration-100 ease-in"
                      />
                    </a>
                    <a
                      href=""
                      className="border border-white/30 p-2.5 max-sm:p-2 rounded-full  hover:bg-white/50"
                    >
                      <FaXTwitter
                        size={15}
                        className="hover:text-white/50 transition-all duration-100 ease-in"
                      />
                    </a>
                    <a
                      href=""
                      className="border border-white/30 p-2.5 max-sm:p-2 rounded-full  hover:bg-white/50"
                    >
                      <FaInstagram
                        size={15}
                        className="hover:text-white/50 transition-all duration-100 ease-in"
                      />
                    </a>
                  </div>
                </div>
                <br />
                <br />
                <div>
                  <p className="text-white text-lg font-semibold">
                    Subscribe to Newsletter
                  </p>
                  <br/>
                  <div className="flex gap-4 items-center max-sm:flex-wrap">
                    <div><input type="text" placeholder='Enter your e-mail' className='p-2 text-sm text-black' /></div>
                    <button className='px-4 py-1.5 border font-semibold text-white text-sm hover:bg-white/50'>
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="border-t border-white/30 pt-8">
              <p className="text-white/90 font-light max-sm:text-xs">
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