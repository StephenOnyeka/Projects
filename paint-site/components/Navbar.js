import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "FAQs", href: "/FAQs" },
  { name: "Shop Now", href: "/shop" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  { name: "Facebook", icon: FaFacebookF },
  { name: "LinkedIn", icon: FaLinkedin },
  { name: "X", icon: FaXTwitter },
  { name: "Instagram", icon: FaInstagram },
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
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-10" />
          </button>
        </div>
        {/* The underline is a border that is always present and only changes
            colour, so hovering can no longer nudge the layout - and
            `transition-colors` actually fades it in. The previous
            `transition[ltr]` was not a real Tailwind class, so nothing about
            these links animated at all. */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`border-b-2 pb-0.5 text-sm/6 font-semibold text-gray-900 transition-colors duration-200 ease-out ${
                pathname === link.href
                  ? "border-primary"
                  : "border-transparent hover:border-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="relative z-50 lg:hidden"
      >
        {/* `transition` hands the enter/leave states to Headless UI as
            data-closed, so the drawer slides in and out instead of popping. */}
        <DialogBackdrop
          transition
          className="fixed inset-0 z-10 bg-black/30 transition-opacity duration-300 ease-out data-[closed]:opacity-0"
        />
        <DialogPanel
          transition
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 transition duration-300 ease-out data-[closed]:translate-x-full sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="-m-1.5 p-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="bg-[url('/images/AP3.jpg')] w-52 h-10  bg-contain bg-no-repeat bg-left "></div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-10" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold transition-colors duration-200 ${
                      pathname === link.href
                        ? "bg-gray-50 text-primary"
                        : "text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <div className="box rounded-lg p-3">
                  <p className=" text-lg font-semibold">Get in Touch</p>
                  <br />
                  <div className="flex text-primary gap-2">
                    {socials.map(({ name, icon: Icon }) => (
                      <a
                        key={name}
                        href=""
                        aria-label={name}
                        className="group border border-black/40 p-2.5 rounded-full transition-colors duration-200 hover:border-primary hover:bg-primary"
                      >
                        <Icon
                          size={15}
                          className="transition-colors duration-200 group-hover:text-white"
                        />
                      </a>
                    ))}
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
