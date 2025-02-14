
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";  


import { FaXTwitter } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();


  return (
    <div className="bg-transparent">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
      >
        {/* <div className="flex lg:flex-1"> */}
        {/* <div className=""> */}
        <Link href="/" className="-m-1.5 p-1.5">
          <div className="bg-[url('/images/AP3.jpg')] w-52 h-10  bg-contain bg-no-repeat bg-left "></div>
        </Link>
        {/* </div> */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-10" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className={`text-sm/6 font-semibold text-gray-900 ${
              pathname === "/"
                ? "border-primary border-b-2 "
                : "hover:border-primary hover:border-b-2 transition[ltr] duration-100 ease-in"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm/6 font-semibold text-gray-900 ${
              pathname === "/about"
                ? "border-primary border-b-2 "
                : "hover:border-primary hover:border-b-2 transition[ltr] duration-100 ease-in"
            }`}
          >
            About
          </Link>
          <Link
            href="/services"
            // className="text-sm/6 font-semibold text-gray-900"
            className={`text-sm/6 font-semibold text-gray-900 ${
              pathname === "/services"
                ? "border-primary border-b-2 "
                : "hover:border-primary hover:border-b-2 transition[ltr] duration-100 ease-in"
            }`}
          >
            Services
          </Link>
          <Link
            href="/FAQs"
            className={`text-sm/6 font-semibold text-gray-900 ${
              pathname === "/FAQs"
                ? "border-primary border-b-2 "
                : "hover:border-primary hover:border-b-2 transition[ltr] duration-100 ease-in"
            }`}
          >
            FAQs
          </Link>
          <Link
            href="/shop"
            className={`text-sm/6 font-semibold text-gray-900 ${
              pathname === "/shop"
                ? "border-primary border-b-2 "
                : "hover:border-primary hover:border-b-2 transition[ltr] duration-100 ease-in"
            }`}
          >
            Shop Now
          </Link>
          <Link
            href="/contact"
            className={`text-sm/6 font-semibold text-gray-900 ${
              pathname === "/contact"
                ? "border-primary border-b-2 "
                : "hover:border-primary hover:border-b-2 transition[ltr] duration-100 ease-in"
            }`}
          >
            Contact
          </Link>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              {/* <span className="text-4xl italic">Logo</span> */}
              <div className="bg-[url('/images/AP3.jpg')] w-52 h-10  bg-contain bg-no-repeat bg-left "></div>
              {/* <Image
                alt=""
                src={"/logo/400_64e8d39d62e76.webp"}
                className="h-8 w-auto"
                width={32}
                height={32}
              /> */}
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-10" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Services
                </Link>
                <Link
                  href="/FAQs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  FAQs
                </Link>
                <Link
                  href="/shop"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  ShopNow
                </Link>
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>
              <div className="py-6">
                {/* <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link> */}
                <div className="box rounded-lg p-3">
                  <p className=" text-lg font-semibold">Get in Touch</p>
                  <br />
                  <div className="flex text-primary gap-2">
                    <a
                      href=""
                      className="border border-black p-2.5 rounded-full"
                    >
                      <FaFacebookF
                        size={15}
                        className="hover:text-white/50 transition-all duration-100 ease-in"
                      />
                    </a>
                    <a
                      href=""
                      className="border border-black p-2.5 rounded-full"
                    >
                      <FaLinkedin
                        size={15}
                        className="hover:text-white/50 transition-all duration-100 ease-in"
                      />
                    </a>
                    <a
                      href=""
                      className="border border-black p-2.5 rounded-full"
                    >
                      <FaXTwitter
                        size={15}
                        className="hover:text-white/50 transition-all duration-100 ease-in"
                      />
                    </a>
                    <a
                      href=""
                      className="border border-black p-2.5 rounded-full"
                    >
                      <FaInstagram
                        size={15}
                        className="hover:text-white/50 transition-all duration-100 ease-in"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
