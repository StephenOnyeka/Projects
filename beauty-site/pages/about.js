// 
// 
// import React from "react";
// import Navbar from "@/components/Navbar";
// import Image from "next/image";
// import SimpleSlider from "@/components/SimpleSlider";
// 
// import { PiShootingStarFill } from "react-icons/pi";
// 
// function About() {
//   return (
//     <div>
//       {/* <div className="overflow-hidden"> */}
//       <div className=" ">
//         <div className="bg-[url('/images/about/bbt.jpeg')] bg-cover bg-no-repeat bg-center ">
//           <div className="h-screen p-8 max-sm:px-4 flex items-center max-md:h-full max-md:py-24 max-md:bg-white/20">
//             <div className="w-0 md:w-full "></div>
//             <div className="w-full flex justify-end ">
//               <div className="flex flex-col w-4/5 max-md:w-full gap-4 lg:gap-8 max-md:text-center ">
//                 <p className="text-2xl max-md:text-2xl text-black/70">
//                   Radiant Beauty
//                 </p>
//                 {/* <p className="text-3xl sm:text-4xl md:text-6xl font-[600] font-Libre max-md:flex max-md:justify-center max-md:gap-1">
//                   Nourish{" "}
//                   <span className="pt-0 md:pt-2">Your Skin</span>
//                 </p> */}
//                 <p className="text-3xl sm:text-4xl md:text-6xl font-[600] font-Libre ">
//                   Nourish Your Skin
//                 </p>
//                 <p className="leading-8 text-lg md:text-xl md:leading-10 text-black/90 font-Libre italic">
//                   At our skin care brand, we believe in providing high-quality,
//                   natural body lotions that nourish and hydrate your skin. Our
//                   extensive range of products caters to different skin types and
//                   concerns, ensuring you find the perfect solution for your
//                   beauty needs
//                 </p>
//                 <button className="hover:opacity-70 w-60 py-3.5 max-md:w-full bg-black text-white text-sm font-medium">
//                   Explore Our Collection
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="bg-[#DFC7B4] px-8 py-10 max-sm:px-8 max-sm:py-6 flex justify-center w-full">
//           <div className="w-full md:w-5/6 flex flex-col items-center">
//             <p className="text-4xl lg:text-5xl font-[600] font-Libre text-center py-8">
//               Experience the Difference
//             </p>
//             {/* <p className="text-md leading-8 text-center text-black/60"> */}
//             <p className="text-md leading-8 md:text-lg md:leading-10 text-center max-sm:text-justify text-black/60">
//               Unlock the secret to glowing, radiant skin with our premium body
//               lotions. Crafted with the finest natural ingredients, our products
//               are designed to deeply moisturize, soothe, and rejuvenate your
//               skin from head to toe. Whether you have dry, sensitive, or
//               combination skin, our versatile formulas will leave you feeling
//               refreshed, revitalized, and confident in your own skin
//             </p>
//             <button className="hover:opacity-70 w-40 py-3.5 my-8 bg-[#69422F] text-white rounded-lg text-sm font-medium">
//               Shop Now
//             </button>
//           </div>
//         </div>
//         <div className="bg-[#FDF4E8] bg-no-repeat bg-center flex max-sm:flex-wrap gap-8 lg:gap-0 items center w-full px-8  py-24 h-auto">
//           <div className="w-full flex justify-center items-center ">
//             <div className="flex flex-col text-left justify-center gap-6 ">
//               <div className="text-4xl lg:text-5xl font-[600] font-Libre">
//                 Elevate Your <br />{" "}
//                 <span className="pt-4">Skincare Routine</span>
//               </div>
//               <p className="text-md leading-8 md:text-lg md:leading-10 text-black/60">
//                 Explore our wide range of skincare products, from gentle
//                 cleansers to luxurious face creams, all designed to address your
//                 unique skin concerns and leave you with a flawless complexion
//               </p>
//               {/* <button className="hover:opacity-70 px-10 py-3.5 bg-black text-white rounded-lg text-sm font-medium"> */}
//               <button className="hover:opacity-70 w-40 py-3.5 bg-black text-white rounded-lg text-sm font-medium">
//                 Explore More
//               </button>
//             </div>
//           </div>
//           <div className="flex items-center justify-center w-full">
//             <div className=" ">
//               <Image
//                 src={"/images/about/nana.webp"}
//                 width={500}
//                 height={250}
//                 className="h-full w-full"
//               />
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="px-8 py-8 ">
//             <div className="py-8 max-w-7xl mx-auto">
//               <div className="text-4xl  font-[600] font-Libre text-center pb-8">
//                 <p>Transform Your Skin's Beauty</p>
//                 <p className="text-sm md:text-lg pt-2">
//                   Embrace the Power of Natural Skincare
//                 </p>
//               </div>
//               {/* <div className="flex justify-evenly  w-full"> */}
//               <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 items-center justify-center justify-items-center content-center gap-8 lg:gap-12 w-full">
//                 <div className="w-full text-center flex flex-col items-center gap-4 ">
//                   <div className=" h-14 w-14 rounded-full bg-[#69422F] flex justify-center items-center border-black">
//                     <PiShootingStarFill size={34} color="#DFC7B4" />
//                   </div>
//                   <div>
//                     <p className="font-Libre text-lg md:text-xl font-semibold">
//                       Nourish
//                     </p>
//                     {/* <p className="text-black/60 text-sm leadilg-6 lg:8ext-md lg:leading-7"> */}
//                     <p className="text-black/60 text-sm leading-6 md:text-base md:leading-8 md:pt-2">
//                       Discover the Transformative Power of Our Premium Body
//                       Lotions. Enriched with Powerful Natural Extracts, Our
//                       Formulas Deliver Unparalleled{" "}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="w-full text-center flex flex-col items-center gap-4 ">
//                   <div className=" h-14 w-14 rounded-full bg-[#69422F] flex justify-center items-center border-black">
//                     <PiShootingStarFill size={34} color="#DFC7B4" />
//                   </div>
//                   <div>
//                     <p className="font-Libre text-lg md:text-xl font-semibold">
//                       Replenish
//                     </p>
//                     <p className="text-black/60 text-sm leading-6 md:text-base md:leading-8 md:pt-2">
//                       Unveil the Secret to Glowing, Healthy Skin with Our
//                       Exceptional Body Lotions. Crafted with the Finest Natural
//                       Ingredients
//                     </p>
//                   </div>
//                 </div>
//                 <div className="w-full text-center flex flex-col items-center gap-4">
//                   <div className=" h-14 w-14 rounded-full bg-[#69422F] flex justify-center items-center border-black">
//                     <PiShootingStarFill size={34} color="#DFC7B4" />
//                   </div>
//                   <div>
//                     <p className="font-Libre text-lg md:text-xl font-semibold">
//                       Elevate Your Skincare
//                     </p>
//                     <p className="text-black/60 text-sm leading-6 md:text-base md:leading-8 md:pt-2">
//                       Discover the Secret to Healthy, Luminous Skin with Our
//                       Exceptional Body Lotions. Crafted with the Finest Natural
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="bg-[#FDF4E8] flex max-sm:flex-wrap gap-8 lg:gap-0 items center w-full px-8  py-24 h-auto">
//             <div className="w-full flex justify-center items-center ">
//               <div className="flex flex-col text-left justify-center gap-6 ">
//                 <div className="text-4xl lg:text-5xl font-[600] font-Libre">
//                   Get in Touch with <br />{" "}
//                   <span className="pt-4">Dermatologists</span>
//                 </div>
//                 {/* <p className="text-md leading-7 text-black/60"> */}
//                 <p className="text-md leading-8 md:text-lg md:leading-10 text-black/60">
//                   Book sessions with certified dermatologists on your skin
//                   problems. Suggestions for the best creams that suit your skin.
//                   As well as advice on how to use other skin products and how to
//                   care for your skin.
//                 </p>
//                 <button className="hover:opacity-70 w-52 py-3.5 bg-black text-white rounded-lg text-sm font-medium">
//                   Book a consultation
//                 </button>
//               </div>
//             </div>
//             <div className="flex items-center justify-center w-full">
//               <div className=" ">
//                 <Image
//                   src={"/images/about/Dr.jpeg"}
//                   width={500}
//                   height={250}
//                   className="h-full w-full"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default About;


import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import SimpleSlider from "@/components/SimpleSlider";

import { PiShootingStarFill } from "react-icons/pi";

function About() {
  return (
    <div>
      <div className="overflow-hidden">
      {/* <div className=" "> */}
        <div className="bg-[url('/images/about/bbt.jpeg')] bg-cover bg-no-repeat bg-center ">
          <div className="h-screen p-8 max-sm:px-4 flex items-center max-md:h-full max-md:py-24 max-md:bg-white/20">
            <div className="w-0 md:w-full "></div>
            <div className="w-full flex justify-end ">
              {/* <div className="flex flex-col w-4/5 max-md:w-full gap-4 lg:gap-8 max-md:text-center "> */}
              <div className="flex flex-col w-full md:w-4/5 gap-4 lg:gap-8 max-md:text-center ">
                <p className="text-2xl max-md:text-2xl text-black/70">
                  Radiant Beauty
                </p>
                {/* <p className="text-3xl sm:text-4xl md:text-6xl font-[600] font-Libre max-md:flex max-md:justify-center max-md:gap-1">
                  Nourish{" "}
                  <span className="pt-0 md:pt-2">Your Skin</span>
                </p> */}
                <p className="text-3xl sm:text-4xl md:text-6xl font-[600] font-Libre ">
                  Nourish Your Skin
                </p>
                <p className="leading-8 text-lg md:text-xl md:leading-10 text-black/90 font-Libre italic">
                  At our skin care brand, we believe in providing high-quality,
                  natural body lotions that nourish and hydrate your skin. Our
                  extensive range of products caters to different skin types and
                  concerns, ensuring you find the perfect solution for your
                  beauty needs
                </p>
                <button className="hover:opacity-70 w-60 py-3.5 max-md:w-full bg-black text-white text-sm font-medium">
                  Explore Our Collection
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#DFC7B4] px-8 py-10 max-sm:px-8 max-sm:py-6 flex justify-center w-full">
          <div className="w-full md:w-5/6 flex flex-col items-center">
            <p className="text-4xl lg:text-5xl font-[600] font-Libre text-center py-8">
              Experience the Difference
            </p>
            {/* <p className="text-md leading-8 text-center text-black/60"> */}
            <p className="text-md leading-8 md:text-lg md:leading-10 text-center max-sm:text-justify text-black/60">
              Unlock the secret to glowing, radiant skin with our premium body
              lotions. Crafted with the finest natural ingredients, our products
              are designed to deeply moisturize, soothe, and rejuvenate your
              skin from head to toe. Whether you have dry, sensitive, or
              combination skin, our versatile formulas will leave you feeling
              refreshed, revitalized, and confident in your own skin
            </p>
            <button className="hover:opacity-70 w-40 py-3.5 my-8 bg-[#69422F] text-white rounded-lg text-sm font-medium">
              Shop Now
            </button>
          </div>
        </div>
        <div className="bg-[#FDF4E8] bg-no-repeat bg-center flex max-sm:flex-wrap gap-8 lg:gap-0 items center w-full px-8  py-24 h-auto">
          <div className="w-full flex justify-center items-center ">
            <div className="flex flex-col text-left justify-center gap-6 ">
              <div className="text-4xl lg:text-5xl font-[600] font-Libre">
                Elevate Your <br />{" "}
                <span className="pt-4">Skincare Routine</span>
              </div>
              <p className="text-md leading-8 md:text-lg md:leading-10 text-black/60">
                Explore our wide range of skincare products, from gentle
                cleansers to luxurious face creams, all designed to address your
                unique skin concerns and leave you with a flawless complexion
              </p>
              {/* <button className="hover:opacity-70 px-10 py-3.5 bg-black text-white rounded-lg text-sm font-medium"> */}
              <button className="hover:opacity-70 w-40 py-3.5 bg-black text-white rounded-lg text-sm font-medium">
                Explore More
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className=" ">
              <Image
                src={"/images/about/nana.webp"}
                width={500}
                height={250}
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="px-8 py-8 ">
            <div className="py-8 max-w-7xl mx-auto">
              <div className="text-4xl  font-[600] font-Libre text-center pb-8">
                <p>Transform Your Skin's Beauty</p>
                <p className="text-sm md:text-lg pt-2">
                  Embrace the Power of Natural Skincare
                </p>
              </div>
              {/* <div className="flex justify-evenly  w-full"> */}
              <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 items-center justify-center justify-items-center content-center gap-8 lg:gap-12 w-full">
                <div className="w-full text-center flex flex-col items-center gap-4 ">
                  <div className=" h-14 w-14 rounded-full bg-[#69422F] flex justify-center items-center border-black">
                    <PiShootingStarFill size={34} color="#DFC7B4" />
                  </div>
                  <div>
                    <p className="font-Libre text-lg md:text-xl font-semibold">
                      Nourish
                    </p>
                    {/* <p className="text-black/60 text-sm leadilg-6 lg:8ext-md lg:leading-7"> */}
                    <p className="text-black/60 text-sm leading-6 md:text-base md:leading-8 md:pt-2">
                      Discover the Transformative Power of Our Premium Body
                      Lotions. Enriched with Powerful Natural Extracts, Our
                      Formulas Deliver Unparalleled{" "}
                    </p>
                  </div>
                </div>
                <div className="w-full text-center flex flex-col items-center gap-4 ">
                  <div className=" h-14 w-14 rounded-full bg-[#69422F] flex justify-center items-center border-black">
                    <PiShootingStarFill size={34} color="#DFC7B4" />
                  </div>
                  <div>
                    <p className="font-Libre text-lg md:text-xl font-semibold">
                      Replenish
                    </p>
                    <p className="text-black/60 text-sm leading-6 md:text-base md:leading-8 md:pt-2">
                      Unveil the Secret to Glowing, Healthy Skin with Our
                      Exceptional Body Lotions. Crafted with the Finest Natural
                      Ingredients
                    </p>
                  </div>
                </div>
                <div className="w-full text-center flex flex-col items-center gap-4">
                  <div className=" h-14 w-14 rounded-full bg-[#69422F] flex justify-center items-center border-black">
                    <PiShootingStarFill size={34} color="#DFC7B4" />
                  </div>
                  <div>
                    <p className="font-Libre text-lg md:text-xl font-semibold">
                      Elevate Your Skincare
                    </p>
                    <p className="text-black/60 text-sm leading-6 md:text-base md:leading-8 md:pt-2">
                      Discover the Secret to Healthy, Luminous Skin with Our
                      Exceptional Body Lotions. Crafted with the Finest Natural
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#FDF4E8] flex max-sm:flex-wrap gap-8 lg:gap-0 items center w-full px-8  py-24 h-auto">
            <div className="w-full flex justify-center items-center ">
              <div className="flex flex-col text-left justify-center gap-6 ">
                <div className="text-4xl lg:text-5xl font-[600] font-Libre">
                  Get in Touch with <br />{" "}
                  <span className="pt-4">Dermatologists</span>
                </div>
                {/* <p className="text-md leading-7 text-black/60"> */}
                <p className="text-md leading-8 md:text-lg md:leading-10 text-black/60">
                  Book sessions with certified dermatologists on your skin
                  problems. Suggestions for the best creams that suit your skin.
                  As well as advice on how to use other skin products and how to
                  care for your skin.
                </p>
                <button className="hover:opacity-70 w-52 py-3.5 bg-black text-white rounded-lg text-sm font-medium">
                  Book a consultation
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
              <div className=" ">
                <Image
                  src={"/images/about/Dr.jpeg"}
                  width={500}
                  height={250}
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;



// // import React from "react";
// // import Navbar from "@/components/Navbar";
// // import Image from "next/image";
// // import SimpleSlider from "@/components/SimpleSlider";
// //
// // import { PiShootingStarFill } from "react-icons/pi";
// //
// // function About() {
// //   return (
// //     <div>
// //       <div className="overflow-hidden">
// //         ...
// //         <div className="bg-[url('/images/about/bbt.jpeg')] bg-cover bg-no-repeat bg-center overflow-hidden">
// //           <div className="h-screen p-8 max-sm:px-4 flex items-center max-md:h-full max-md:py-24 max-md:bg-white/20">
// //             <div className="w-0 md:w-full "></div>
// //             <div className="w-full flex justify-end ">
// //               <div className="flex flex-col w-4/5 max-md:w-full gap-4 lg:gap-8 max-md:text-center ">
// //                 <p className="text-2xl max-md:text-2xl text-black/70">
// //                   Radiant Beauty
// //                 </p>
// //                 <p className="text-3xl sm:text-4xl md:text-6xl font-[600] font-Libre max-md:flex max-md:justify-center max-md:gap-1">
// //                   Nourish{" "}
// //                   <span className="pt-2 max-md:pt-0 bg-none">Your Skin</span>
// //                 </p>
// //                 <p className="leading-8 text-lg md:text-xl md:leading-10 text-black/90 font-Libre italic">
// //                   At our skin care brand, we believe in providing high-quality,
// //                   natural body lotions that nourish and hydrate your skin. Our
// //                   extensive range of products caters to different skin types and
// //                   concerns, ensuring you find the perfect solution for your
// //                   beauty needs
// //                 </p>
// //                 <button className="hover:opacity-70 w-60 py-3.5 max-md:w-full bg-black text-white text-sm font-medium">
// //                   Explore Our Collection
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         ...
// //         <div className="bg-[#DFC7B4] px-8 py-10 max-sm:px-8 max-sm:py-6 flex justify-center w-full">
// //           <div className="w-full md:w-5/6 flex flex-col items-center">
// //             <p className="text-4xl lg:text-5xl font-[600] font-Libre text-center py-8">
// //               Experience the Difference
// //             </p>
// //             {/* <p className="text-md leading-8 text-center text-black/60"> */}
// //             <p className="text-md leading-8 md:text-lg md:leading-10 text-center max-sm:text-justify text-black/60">
// //               Unlock the secret to glowing, radiant skin with our premium body
// //               lotions. Crafted with the finest natural ingredients, our products
// //               are designed to deeply moisturize, soothe, and rejuvenate your
// //               skin from head to toe. Whether you have dry, sensitive, or
// //               combination skin, our versatile formulas will leave you feeling
// //               refreshed, revitalized, and confident in your own skin
// //             </p>
// //             <button className="hover:opacity-70 w-40 py-3.5 my-8 bg-[#69422F] text-white rounded-lg text-sm font-medium">
// //               Shop Now
// //             </button>
// //           </div>
// //         </div>
// //         <div className="bg-[#FDF4E8] bg-no-repeat bg-center flex max-sm:flex-wrap gap-8 lg:gap-0 items center w-full px-8  py-24 h-auto">
// //           <div className="w-full flex justify-center items-center ">
// //             <div className="flex flex-col text-left justify-center gap-6 ">
// //               <div className="text-4xl lg:text-5xl font-[600] font-Libre">
// //                 Elevate Your <br />{" "}
// //                 <span className="pt-4">Skincare Routine</span>
// //               </div>
// //               <p className="text-md leading-8 md:text-lg md:leading-10 text-black/60">
// //                 Explore our wide range of skincare products, from gentle
// //                 cleansers to luxurious face creams, all designed to address your
// //                 unique skin concerns and leave you with a flawless complexion
// //               </p>
// //               {/* <button className="hover:opacity-70 px-10 py-3.5 bg-black text-white rounded-lg text-sm font-medium"> */}
// //               <button className="hover:opacity-70 w-40 py-3.5 bg-black text-white rounded-lg text-sm font-medium">
// //                 Explore More
// //               </button>
// //             </div>
// //           </div>
// //           <div className="flex items-center justify-center w-full">
// //             <div className=" ">
// //               <Image
// //                 src={"/images/about/nana.webp"}
// //                 width={500}
// //                 height={250}
// //                 className="h-full w-full"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //         <div>
// //           <div className="px-8 py-8 ">
// //             <div className="py-8 max-w-7xl mx-auto">
// //               <div className="text-4xl  font-[600] font-Libre text-center pb-8">
// //                 <p>Transform Your Skin's Beauty</p>
// //                 <p className="text-sm md:text-lg pt-2">
// //                   Embrace the Power of Natural Skincare
// //                 </p>
// //               </div>
// //               {/* <div className="flex justify-evenly  w-full"> */}
// //               <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 items-center justify-center justify-items-center content-center gap-8 lg:gap-12 w-full">
// //                 <div className="w-full text-center flex flex-col items-center gap-4 ">
// //                   <div className=" h-14 w-14 rounded-full bg-[#69422F] flex justify-center items-center border-black">
// //                     <PiShootingStarFill size={34} color="#DFC7B4" />
// //                   </div>
// //                   <div>
// //                     <p className="font-Libre text-lg md:text-xl font-semibold">
// //                       Nourish
// //                     </p>
// //                     {/* <p className="text-black/60 text-sm leadilg-6 lg:8ext-md lg:leading-7"> */}
// //                     <p className="text-black/60 text-sm leading-6 md:text-base md:leading-8 md:pt-2">
// //                       Discover the Transformative Power of Our Premium Body
// //                       Lotions. Enriched with Powerful Natural Extracts, Our
// //                       Formulas Deliver Unparalleled{" "}
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <div className="w-full text-center flex flex-col items-center gap-4 ">
// //                   <div className=" h-14 w-14 rounded-full bg-[#69422F] flex justify-center items-center border-black">
// //                     <PiShootingStarFill size={34} color="#DFC7B4" />
// //                   </div>
// //                   <div>
// //                     <p className="font-Libre text-lg md:text-xl font-semibold">
// //                       Replenish
// //                     </p>
// //                     <p className="text-black/60 text-sm leading-6 md:text-base md:leading-8 md:pt-2">
// //                       Unveil the Secret to Glowing, Healthy Skin with Our
// //                       Exceptional Body Lotions. Crafted with the Finest Natural
// //                       Ingredients
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <div className="w-full text-center flex flex-col items-center gap-4">
// //                   <div className=" h-14 w-14 rounded-full bg-[#69422F] flex justify-center items-center border-black">
// //                     <PiShootingStarFill size={34} color="#DFC7B4" />
// //                   </div>
// //                   <div>
// //                     <p className="font-Libre text-lg md:text-xl font-semibold">
// //                       Elevate Your Skincare
// //                     </p>
// //                     <p className="text-black/60 text-sm leading-6 md:text-base md:leading-8 md:pt-2">
// //                       Discover the Secret to Healthy, Luminous Skin with Our
// //                       Exceptional Body Lotions. Crafted with the Finest Natural
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         <div>
// //           <div className="bg-[#FDF4E8] flex max-sm:flex-wrap gap-8 lg:gap-0 items center w-full px-8  py-24 h-auto">
// //             <div className="w-full flex justify-center items-center ">
// //               <div className="flex flex-col text-left justify-center gap-6 ">
// //                 <div className="text-4xl lg:text-5xl font-[600] font-Libre">
// //                   Get in Touch with <br />{" "}
// //                   <span className="pt-4">Dermatologists</span>
// //                 </div>
// //                 {/* <p className="text-md leading-7 text-black/60"> */}
// //                 <p className="text-md leading-8 md:text-lg md:leading-10 text-black/60">
// //                   Book sessions with certified dermatologists on your skin
// //                   problems. Suggestions for the best creams that suit your skin.
// //                   As well as advice on how to use other skin products and how to
// //                   care for your skin.
// //                 </p>
// //                 <button className="hover:opacity-70 w-52 py-3.5 bg-black text-white rounded-lg text-sm font-medium">
// //                   Book a consultation
// //                 </button>
// //               </div>
// //             </div>
// //             <div className="flex items-center justify-center w-full">
// //               <div className=" ">
// //                 <Image
// //                   src={"/images/about/Dr.jpeg"}
// //                   width={500}
// //                   height={250}
// //                   className="h-full w-full"
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// // export default About;
// 
// import React from "react";
// import Navbar from "@/components/Navbar";
// import Image from "next/image";
// import SimpleSlider from "@/components/SimpleSlider";
// 
// import { PiShootingStarFill } from "react-icons/pi";
// 
// function About() {
//   return (
//     <div>
//       {/* <div className="overflow-hidden"> */}
//       <div className=" ">
//         <div className="bg-[url('/images/about/bbt.jpeg')] bg-cover bg-no-repeat bg-center ">
//           <div className="h-screen p-8 max-sm:px-4 flex items-center max-md:h-full max-md:py-24 max-md:bg-white/20 overflow-hidden">
//             <div className="w-0 md:w-full "></div>
//             <div className="w-full flex justify-end ">
//               <div className="flex flex-col w-4/5 max-md:w-full gap-4 lg:gap-8 max-md:text-center ">
//                 <p className="text-2xl max-md:text-2xl text-black/70">
//                   Radiant Beauty
//                 </p>
//                 {/* <p className="text-3xl sm:text-4xl md:text-6xl font-[600] font-Libre max-md:flex max-md:justify-center max-md:gap-1">
//                   Nourish{" "}
//                   <span className="pt-0 md:pt-2">Your Skin</span>
//                 </p> */}
//                 <p className="text-3xl sm:text-4xl md:text-6xl font-[600] font-Libre ">
//                   Nourish Your Skin
//                 </p>
//                 <p className="leading-8 text-lg md:text-xl md:leading-10 text-black/90 font-Libre italic">
//                   At our skin care brand, we believe in providing high-quality,
//                   natural body lotions that nourish and hydrate your skin. Our
//                   extensive range of products caters to different skin types and
//                   concerns, ensuring you find the perfect solution for your
//                   beauty needs
//                 </p>
//                 <button className="hover:opacity-70 w-60 py-3.5 max-md:w-full bg-black text-white text-sm font-medium">
//                   Explore Our Collection
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="bg-[#DFC7B4] px-8 py-10 max-sm:px-8 max-sm:py-6 flex justify-center w-full">
//           <div className="w-full md:w-5/6 flex flex-col items-center">
//             <p className="text-4xl lg:text-5xl font-[600] font-Libre text-center py-8">
//               Experience the Difference
//             </p>
//             {/* <p className="text-md leading-8 text-center text-black/60"> */}
//             <p className="text-md leading-8 md:text-lg md:leading-10 text-center max-sm:text-justify text-black/60">
//               Unlock the secret to glowing, radiant skin with our premium body
//               lotions. Crafted with the finest natural ingredients, our products
//               are designed to deeply moisturize, soothe, and rejuvenate your
//               skin from head to toe. Whether you have dry, sensitive, or
//               combination skin, our versatile formulas will leave you feeling
//               refreshed, revitalized, and confident in your own skin
//             </p>
//             <button className="hover:opacity-70 w-40 py-3.5 my-8 bg-[#69422F] text-white rounded-lg text-sm font-medium">
//               Shop Now
//             </button>
//           </div>
//         </div>
//         <div className="bg-[#FDF4E8] bg-no-repeat bg-center flex max-sm:flex-wrap gap-8 lg:gap-0 items center w-full px-8  py-24 h-auto">
//           <div className="w-full flex justify-center items-center ">
//             <div className="flex flex-col text-left justify-center gap-6 ">
//               <div className="text-4xl lg:text-5xl font-[600] font-Libre">
//                 Elevate Your <br />{" "}
//                 <span className="pt-4">Skincare Routine</span>
//               </div>
//               <p className="text-md leading-8 md:text-lg md:leading-10 text-black/60">
//                 Explore our wide range of skincare products, from gentle
//                 cleansers to luxurious face creams, all designed to address your
//                 unique skin concerns and leave you with a flawless complexion
//               </p>
//               {/* <button className="hover:opacity-70 px-10 py-3.5 bg-black text-white rounded-lg text-sm font-medium"> */}
//               <button className="hover:opacity-70 w-40 py-3.5 bg-black text-white rounded-lg text-sm font-medium">
//                 Explore More
//               </button>
//             </div>
//           </div>
//           <div className="flex items-center justify-center w-full">
//             <div className=" ">
//               <Image
//                 src={"/images/about/nana.webp"}
//                 width={500}
//                 height={250}
//                 className="h-full w-full"
//               />
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="px-8 py-8 ">
//             <div className="py-8 max-w-7xl mx-auto">
//               <div className="text-4xl  font-[600] font-Libre text-center pb-8">
//                 <p>Transform Your Skin's Beauty</p>
//                 <p className="text-sm md:text-lg pt-2">
//                   Embrace the Power of Natural Skincare
//                 </p>
//               </div>
//               {/* <div className="flex justify-evenly  w-full"> */}
//               <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 items-center justify-center justify-items-center content-center gap-8 lg:gap-12 w-full">
//                 <div className="w-full text-center flex flex-col items-center gap-4 ">
//                   <div className=" h-14 w-14 rounded-full bg-[#69422F] flex justify-center items-center border-black">
//                     <PiShootingStarFill size={34} color="#DFC7B4" />
//                   </div>
//                   <div>
//                     <p className="font-Libre text-lg md:text-xl font-semibold">
//                       Nourish
//                     </p>
//                     {/* <p className="text-black/60 text-sm leadilg-6 lg:8ext-md lg:leading-7"> */}
//                     <p className="text-black/60 text-sm leading-6 md:text-base md:leading-8 md:pt-2">
//                       Discover the Transformative Power of Our Premium Body
//                       Lotions. Enriched with Powerful Natural Extracts, Our
//                       Formulas Deliver Unparalleled{" "}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="w-full text-center flex flex-col items-center gap-4 ">
//                   <div className=" h-14 w-14 rounded-full bg-[#69422F] flex justify-center items-center border-black">
//                     <PiShootingStarFill size={34} color="#DFC7B4" />
//                   </div>
//                   <div>
//                     <p className="font-Libre text-lg md:text-xl font-semibold">
//                       Replenish
//                     </p>
//                     <p className="text-black/60 text-sm leading-6 md:text-base md:leading-8 md:pt-2">
//                       Unveil the Secret to Glowing, Healthy Skin with Our
//                       Exceptional Body Lotions. Crafted with the Finest Natural
//                       Ingredients
//                     </p>
//                   </div>
//                 </div>
//                 <div className="w-full text-center flex flex-col items-center gap-4">
//                   <div className=" h-14 w-14 rounded-full bg-[#69422F] flex justify-center items-center border-black">
//                     <PiShootingStarFill size={34} color="#DFC7B4" />
//                   </div>
//                   <div>
//                     <p className="font-Libre text-lg md:text-xl font-semibold">
//                       Elevate Your Skincare
//                     </p>
//                     <p className="text-black/60 text-sm leading-6 md:text-base md:leading-8 md:pt-2">
//                       Discover the Secret to Healthy, Luminous Skin with Our
//                       Exceptional Body Lotions. Crafted with the Finest Natural
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="bg-[#FDF4E8] flex max-sm:flex-wrap gap-8 lg:gap-0 items center w-full px-8  py-24 h-auto">
//             <div className="w-full flex justify-center items-center ">
//               <div className="flex flex-col text-left justify-center gap-6 ">
//                 <div className="text-4xl lg:text-5xl font-[600] font-Libre">
//                   Get in Touch with <br />{" "}
//                   <span className="pt-4">Dermatologists</span>
//                 </div>
//                 {/* <p className="text-md leading-7 text-black/60"> */}
//                 <p className="text-md leading-8 md:text-lg md:leading-10 text-black/60">
//                   Book sessions with certified dermatologists on your skin
//                   problems. Suggestions for the best creams that suit your skin.
//                   As well as advice on how to use other skin products and how to
//                   care for your skin.
//                 </p>
//                 <button className="hover:opacity-70 w-52 py-3.5 bg-black text-white rounded-lg text-sm font-medium">
//                   Book a consultation
//                 </button>
//               </div>
//             </div>
//             <div className="flex items-center justify-center w-full">
//               <div className=" ">
//                 <Image
//                   src={"/images/about/Dr.jpeg"}
//                   width={500}
//                   height={250}
//                   className="h-full w-full"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default About;
