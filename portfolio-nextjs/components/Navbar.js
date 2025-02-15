import React,{useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { IoIosNotifications } from "react-icons/io";

import { usePathname } from "next/navigation";  

function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [dropOpen, setDropOpen] = useState(false);
  const toggleDropOpen = () => {
    setDropOpen(!dropOpen);
  }

  return (
    <>
      <div className="text-white">
        <nav className="navbar">
          <ul
            className="sidebar bg-contingentColor text-white"
            style={{ display: isOpen ? "flex" : "none" }}
          >
            <span className="mt-4 ml-4">
              <li onClick={toggleMenu} className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // height="26"
                  viewBox="0 96 960 960"
                  width="40"
                  fill="#ffffff"
                  // className="mt-8"
                >
                  <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
                </svg>
              </li>
            </span>
            <li>
              <Link
                href="#Home"
                className={`text-white ${
                  pathname === "/"
                    ? "font-semibold border-primary border-b-2 text-xl bg-white/10"
                    : "hover:bg-white/10 hover:text-xl "
                }`}
              >
                Home
              </Link>{" "}
            </li>
            <li>
              <Link
                href="#Services"
                className={`text-white ${
                  pathname === "#Services"
                    ? "font-semibold border-primary border-b-2 text-xl bg-white/10"
                    : "hover:bg-white/10 hover:text-xl "
                }`}
              >
                Services
              </Link>{" "}
            </li>
            <li>
              <Link
                href="#Portfolio"
                className={`text-white ${
                  pathname === "#Portfolio"
                    ? "font-semibold border-primary border-b-2 text-xl bg-white/10"
                    : "hover:bg-white/10 hover:text-xl "
                }`}
              >
                Portfolio
              </Link>{" "}
            </li>
            <li>
              <Link
                href="#About"
                className={`text-white ${
                  pathname === "#About"
                    ? "font-semibold border-primary border-b-2 text-xl bg-white/10"
                    : "hover:bg-white/10 hover:text-xl "
                }`}
              >
                About
              </Link>{" "}
            </li>
            <li>
              <Link
                href="#Contact"
                className={`text-white ${
                  pathname === "#Contact"
                    ? "font-semibold border-primary border-b-2 text-xl bg-white/10"
                    : "hover:bg-white/10 hover:text-xl "
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="">
          <div className=" flex justify-center justify-items-center items-center max-lg:justify-end">
            <div className="flex space-x-5 gap-4 items-center justify-center">
              <span className="hideOnMobile">
                <Link
                  href="/"
                  className={` ${
                    pathname === "/"
                      ? "font-semibold border-primary border-b-2 pb-2.5"
                      : "border-white border-b-2 border-opacity-0 hover:border-opacity-100 pb-2.5 focus:font-semibold"
                  }`}
                >
                  Home
                </Link>{" "}
              </span>
              <span className="hideOnMobile">
                <Link
                  href="#Services"
                  className={` ${
                    pathname === "#Services"
                      ? "font-semibold border-primary border-b-2 pb-2.5"
                      : "border-white border-b-2 border-opacity-0 hover:border-opacity-100 pb-2.5 focus:font-semibold"
                  }`}
                >
                  Services
                </Link>{" "}
              </span>
              <span className="hideOnMobile">
                <Link
                  href="#Portfolio"
                  className={` ${
                    pathname === "#Portfolio"
                      ? "font-semibold border-primary border-b-2 pb-2.5"
                      : "border-white border-b-2 border-opacity-0 hover:border-opacity-100 pb-2.5 focus:font-semibold"
                  }`}
                >
                  Portfolio
                </Link>{" "}
              </span>
              <span className="hideOnMobile">
                <Link
                  href="About"
                  className={` ${
                    pathname === "About"
                      ? "font-semibold border-primary border-b-2 pb-2.5"
                      : "border-white border-b-2 border-opacity-0 hover:border-opacity-100 pb-2.5 focus:font-semibold"
                  }`}
                >
                  About
                </Link>{" "}
              </span>
              <span className="hideOnMobile">
                <Link
                  href="#Contact"
                  className={` ${
                    pathname === "#Contact"
                      ? "font-semibold border-primary border-b-2 pb-2.5"
                      : "border-white border-b-2 border-opacity-0 hover:border-opacity-100 pb-2.5 focus:font-semibold"
                  }`}
                >
                  Contact
                </Link>
              </span>
              {/* The toggle for mobile */}
              <span
                className="menu-button"
                onClick={toggleMenu}
                style={{ display: isOpen ? "none" : "flex" }}
              >
                <i className="lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    fill="#ffffff"
                    className="max-lg:w-10 text-white "
                  >
                    <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
                  </svg>
                </i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;