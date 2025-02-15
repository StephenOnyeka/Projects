import React from "react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp  } from "react-icons/fa";
import { FaGithub  } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="bg-[#0A0300] py-10">
        <div className="px-12 max-sm:px-4 flex max-sm:flex-wrap max-sm:gap-y-2 max-sm:justify-center max-sm:text-center justify-between items-center">
          <div className="w-full">
            <p className="text-white/90 font-light max-sm:text-sm">
              Steve's © 2025. All Rights Reserved.
            </p>
          </div>
          <div className="w-full flex items-center gap-4 justify-end">
            <p className="text-white text-lg font-semibold">Get in Touch</p>
            <div className="flex text-white gap-2">
              <Link
                href="https://wa.me/09162342603"
                className="shiny-button border border-white/30 p-2.5 rounded-full"
              >
                <FaWhatsapp 
                  size={15}
                  className="hover:text-white/50 transition-all duration-100 ease-in"
                />
              </Link>
              <Link
                href=""
                className="shiny-button border border-white/30 p-2.5 rounded-full"
              >
                <FaLinkedin
                  size={15}
                  className="hover:text-white/50 transition-all duration-100 ease-in"
                />
              </Link>
              <Link
                href=""
                className="shiny-button border border-white/30 p-2.5 rounded-full"
              >
                <FaXTwitter
                  size={15}
                  className="hover:text-white/50 transition-all duration-100 ease-in"
                />
              </Link>
              <Link
                href=""
                className="shiny-button border border-white/30 p-2.5 rounded-full"
              >
                <FaGithub 
                  size={15}
                  className="hover:text-white/50 transition-all duration-100 ease-in"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
