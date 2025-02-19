import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

function Company() {
  return (
    <div>
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 max-sm:pb-[250px] sm:py-40  lg:py-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h2 className="text-base/7 font-semibold text-green-600 ">
                About us
              </h2>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                On a mission bring nature{"'"}s healthy living to you
              </h1>
              <p className="mt-4 text-lg/8 lg:text-xl text-gray-500">
                This year, our new farms yields / products collection will
                shelter you from disease, boost your immune system and enhance
                your growth
              </p>
              <Link
                href="/products"
                className="inline-block rounded-md border border-transparent bg-green-600 mt-10 px-8 py-3 text-center font-medium text-white hover:bg-green-700"
              >
                Shop Collection
              </Link>
            </div>
            <div>
              <div className="mt-10 max-sm:mt-5">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8 ">
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 max-sm:h-44 max-sm:w-28 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <Image
                            width={176}
                            height={256}
                            alt=""
                            src="/images/agric/tractor.jpeg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 max-sm:h-44 max-sm:w-28 overflow-hidden rounded-lg">
                          <Image
                            width={176}
                            height={256}
                            alt=""
                            src="/images/agric/cow.jpeg"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 max-sm:h-44 max-sm:w-28 overflow-hidden rounded-lg">
                          <Image
                            width={176}
                            height={256}
                            alt=""
                            src="/images/agric/honey.jpeg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 max-sm:h-44 max-sm:w-28 overflow-hidden rounded-lg">
                          <Image
                            width={176}
                            height={256}
                            alt=""
                            src="/images/agric/corn.jpeg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 max-sm:h-44 max-sm:w-28 overflow-hidden rounded-lg">
                          <Image
                            width={176}
                            height={256}
                            alt=""
                            src="/images/agric/seed.jpeg"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 max-sm:h-44 max-sm:w-28 overflow-hidden rounded-lg">
                          <Image
                            width={176}
                            height={256}
                            alt=""
                            src="/images/agric/tomato.jpeg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 max-sm:h-44 max-sm:w-28 overflow-hidden rounded-lg">
                          <Image
                            width={176}
                            height={256}
                            alt=""
                            src="/images/agric/fish.jpeg"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-10 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div id="Contact_container-3" className="h-full bg-white pt-6 ">
          <form
            method="POST"
            action="/submitContact"
            className="flex flex-col content-center items-center bg-green-50 px-4 pt-16 pb-28"
          >
            <div className="text-center py-8">
              <p className="text-4xl font-bold pb-2 max-sm:text-2xl max-sm:py-2">
                Leave us your info
              </p>
              <p className="text-lg text-green-600 max-sm:text-sm">
                We will get back to you
              </p>
            </div>
            <div className="flex flex-col w-[700px] max-md:w-full max-sm:px-4 max-md:px-8">
              <input
                type="text"
                placeholder="Full Name*"
                className="h-14 text-sm px-4 bg-white max-sm:h-12 rounded"
                name="name"
                // value=" "
              />
              <br />
              <input
                type="email"
                placeholder="Email*"
                className="h-14 text-sm px-4 bg-white max-sm:h-12 rounded"
                name="email"
                // value=" "
              />
              <br />
              <input
                type="text"
                placeholder="Subject*"
                className="h-14 text-sm px-4 bg-white max-sm:h-12 rounded"
                name="subject"
                // value=" "
              />
              <br />
              <textarea
                name="message"
                placeholder="Message*"
                className="min-h-32 text-sm px-4 pt-4 "
                id=""
              ></textarea>
              <br />
              <button
                type="submit"
                className="bg-green-900 hover:bg-green-700 text-white text-xs font-bold tracking-wider py-4"
              >
                SUBMIT NOW
              </button>
            </div>
          </form>
        </div>
        <div className=" overflow-hidden h-screen/2 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15825.621326980885!2d3.915151!3d7.420314!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103993a26122a637%3A0xc2b14e5c4e04339d!2sNeighbourhood%20Market!5e0!3m2!1sen!2sng!4v1733441448338!5m2!1sen!2sng"
            // allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className=" w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Company;

// //The original code
// export default function Example() {
//   return (
//     <div className="relative overflow-hidden bg-white">
//       <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
//         <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
//           <div className="sm:max-w-lg">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
//               Summer styles are finally here
//             </h1>
//             <p className="mt-4 text-xl text-gray-500">
//               This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
//               if you live or die.
//             </p>
//           </div>
//           <div>
//             <div className="mt-10">
//               {/* Decorative image grid */}
//               <div
//                 aria-hidden="true"
//                 className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
//               >
//                 <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
//                   <div className="flex items-center space-x-6 lg:space-x-8">
//                     <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
//                       <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
//                         <img
//                           alt=""
//                           src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
//                           className="size-full object-cover"
//                         />
//                       </div>
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           alt=""
//                           src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
//                           className="size-full object-cover"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           alt=""
//                           src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
//                           className="size-full object-cover"
//                         />
//                       </div>
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           alt=""
//                           src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
//                           className="size-full object-cover"
//                         />
//                       </div>
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           alt=""
//                           src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
//                           className="size-full object-cover"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           alt=""
//                           src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
//                           className="size-full object-cover"
//                         />
//                       </div>
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           alt=""
//                           src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
//                           className="size-full object-cover"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <a
//                 href="#"
//                 className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
//               >
//                 Shop Collection
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
