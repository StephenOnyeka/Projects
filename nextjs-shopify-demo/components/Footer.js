import React from "react";

import { FaXTwitter } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="font-Poppins">
        <div className="py-20 px-12 bg-black/90 max-sm:px-6">
          <div className="flex justify-center text-white/50 gap-10 max-sm:flex-wrap max-sm:gap-10 ">
            <div className="box w-full text-white leading-9">
              <span className="flex flex-wrap gap-4 items-center">
                <div className="bg-[url('/logo/400_64e8d39d62e76.webp')] w-10 h-10 rounded-full bg-cover bg-center"></div>
                <p className="text-2xl font-bold font-Playfair max-sm:text-xl">
                  AJCI <span className="font-normal"> Foods.Inc</span>
                </p>
              </span>
              <div className="text-white/60 py-4 mt-6 leading-7 max-sm:text-sm max-sm:leading-6">
                <p>43 Soun Ajagungbade Ave, Ibadan 200285, Oyo</p>
              </div>
              <p className="text-white max-sm:text-sm">+234-1234567890</p>
              <ul>
                <li>
                  <Link href="" className="max-sm:text-sm">
                    info@ajcifoods.com
                  </Link>
                </li>
              </ul>
              <hr className="border border-green-500 mt-4" />
            </div>

            <div className="box w-full">
              <p className="text-white font-semibold">En-lists</p>
              <hr className="border border-green-500 mt-3 mb-5" />
              <ul className="font-light leading-9 max-sm:leading-7 max-sm:text-sm">
                <li className="hover:text-white transition-all duration-200 ease-in">
                  <Link href="/marketplace">Products</Link>
                </li>
                <li className="hover:text-white transition-all duration-200 ease-in">
                  <Link href="/marketplace">Features</Link>
                </li>
                <li className="hover:text-white transition-all duration-200 ease-in">
                  <Link href="/marketplace">Marketplace</Link>
                </li>
                <li className="hover:text-white transition-all duration-200 ease-in">
                  <Link href="company">Company</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-black/85">
          <div className="flex justify-between items-center p-10 max-sm:flex-wrap max-sm:justify-center max-sm:text-center max-sm:gap-8">
            <p className="text-white/50 text-sm font-light max-sm:text-xs">
              Copyright All Right Reserved 2024, AJCI-Foods.Inc
            </p>
            <span>
              {/* <div className="social-contact"> */}
              <div className="flex items-center justify-center text-primary gap-5">
                <Link href="">
                  <FaFacebook className="h-5 w-5 text-green-500 hover:text-white transition-all duration-100 ease-in" />
                </Link>
                <Link href="">
                  <FaLinkedin className="h-5 w-5 text-green-500 hover:text-white transition-all duration-100 ease-in" />
                </Link>
                <Link href="">
                  <FaSkype className="h-5 w-5 text-green-500 hover:text-white transition-all duration-100 ease-in" />
                </Link>
                <Link href="">
                  <FaXTwitter className="h-5 w-5 text-green-500 hover:text-white transition-all duration-100 ease-in" />
                </Link>
                <Link href="">
                  <FaInstagram className="h-5 w-5 text-green-500 hover:text-white transition-all duration-100 ease-in" />
                </Link>
              </div>
              {/* </div> */}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
