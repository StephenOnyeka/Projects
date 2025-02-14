import React, { Component } from "react";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CenterMode() {
  const settings = {
    dots: true,
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <div className="lg:p-10 bg-white w-full h-full">
              <p className="lg:text-lg xl:text-xl text-primary leading-7 xl:leading-8 pb-4">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.1"
                  viewBox="0 0 16 16"
                  className="w-6 text-orange-400 pb-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.548-0.043zM12.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.549-0.043z"></path>
                </svg>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi cons
                equatur uis dolorem.
              </p>
              <div className="flex items-center gap-4">
                <Image
                  className="rounded-full"
                  src={"/images/1.jpg"}
                  width={55}
                  height={55}
                />
                <div className="flex flex-col">
                  <span className="text-primary font-bold">
                    {" "}
                    Gillian Caldwell
                  </span>
                  <span className="text-slate-400"> Designer</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="border">2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default CenterMode;

// import React from "react";
// import Slider from "react-slick";
//
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
//
// function CenterMode() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//       <div className="slider-container">
//
//           <Slider {...settings} className="h-[30%] center">
//         <div className="border border-red-500 p-20 ">
//           <div className="bg-green-400 ">
//             <h3 className="text-lg text-red-400">1</h3>
//           </div>
//         </div>
//         <div className="border border-red-500 ">
//           <div className="bg-green-400 ">
//             <h3 className="text-lg text-red-400">2</h3>
//           </div>
//         </div>
//         <div className="border border-red-500 ">
//           <div className="bg-green-400 ">
//             <h3 className="text-lg text-red-400">3</h3>
//           </div>
//         </div>
//         <div className="border border-red-500 ">
//           <div className="bg-green-400 ">
//             <h3 className="text-lg text-red-400">4</h3>
//           </div>
//         </div>
//         <div className="border border-red-500 ">
//           <div className="bg-green-400 ">
//             <h3 className="text-lg text-red-400">5</h3>
//           </div>
//         </div>
//       </Slider>
//     </div>
//   );
// }
//
// export default CenterMode;
