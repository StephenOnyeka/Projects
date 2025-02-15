import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IoIosNotifications } from "react-icons/io";

const ScrollDiv = () => {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > document.documentElement.scrollHeight / 12) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  const mustTrue = () => setShowDiv(true);
  // })

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      {/* <div className="max-md:opacity-0"> */}
      <nav className="navbar">
        <ul
          className="sidebar text-white"
          style={{ display: isOpen ? "flex" : "none" }}
        >
          <span className="tog ">
            <li onClick={toggleMenu} className="m-8">
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
              href="/"
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

      <div
        className={`fixed top-0 bg-contingentColor text-white px-8 pt-4 pb-4 max-md:py-3 max-sm:px-6 w-full z-10 ${
          showDiv ? "block" : "hidden"
        }`}
        // style={{maxWidth: mustTrue ?  }}
      >
        <div className="flex justify-between items-center justify-items-center">
          <div className="logo">
            <div className=""></div>
          </div>
          
            <span
              className="menu-button"
              onClick={toggleMenu}
              style={{ display: isOpen ? "none" : "flex" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                fill="#ffffff"
                className="max-lg:w-10 "
              >
                <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
              </svg>
              {/* </Link> */}
            </span>
        </div>
      </div>
    </div>
  );
};

export default ScrollDiv;
