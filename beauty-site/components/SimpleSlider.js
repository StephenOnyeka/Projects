import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
      speed: 500,
      autoPlay: true,
      autoPlaySpeed: 2000,
      pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="bg-[url('/images/about/bbt.jpeg')] bg-cover bg-no-repeat bg-center ">
            <div className="h-screen p-8 max-sm:px-4 flex items-center max-md:h-screen/2 ">
              <div className="w-0 md:w-full "></div>
              <div className="w-full flex justify-end ">
                <div className="flex flex-col w-4/5 max-md:w-full gap-4 lg:gap-4 xl:gap-8 max-md:text-center ">
                  <p className="text-2xl max-md:text-2xl text-black/70">
                    Radiant Beauty
                  </p>
                  <p className="text-4xl md:text-6xl font-[600] font-Libre max-md:flex max-md:justify-center max-md:gap-1 ">
                    Nourish <span className="pt-2 max-md:pt-0">Your Skin</span>
                  </p>
                  <p className=" leading-8 max-sm:text-lg text-black/60">
                    At our skin care brand, we believe in providing
                    high-quality, natural body lotions that nourish and hydrate
                    your skin. Our extensive range of products caters to
                    different skin types and concerns, ensuring you find the
                    perfect solution for your beauty needs
                  </p>
                  {/* <button className="px-10 py-3.5 bg-black text-white rounded-lg text-sm font-medium"> */}
                  <button className="w-60 py-3.5 max-md:w-full bg-black text-white text-sm font-medium">
                    Explore Our Collection
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
        <div>
          <div className="bg-[url('/images/about/bbt.jpeg')] bg-cover bg-no-repeat bg-center ">
            <div className="h-screen p-8 max-sm:px-4 flex items-center max-md:h-screen/2 ">
              <div className="w-0 md:w-full "></div>
              <div className="w-full flex justify-end ">
                <div className="flex flex-col w-4/5 max-md:w-full gap-4 lg:gap-4 xl:gap-8 max-md:text-center ">
                  <p className="text-2xl max-md:text-2xl text-black/70">
                    Radiant Beauty
                  </p>
                  <p className="text-4xl md:text-6xl font-[600] font-Libre max-md:flex max-md:justify-center max-md:gap-1 ">
                    Nourish <span className="pt-2 max-md:pt-0">Your Skin</span>
                  </p>
                  <p className=" leading-8 max-sm:text-lg text-black/60">
                    At our skin care brand, we believe in providing
                    high-quality, natural body lotions that nourish and hydrate
                    your skin. Our extensive range of products caters to
                    different skin types and concerns, ensuring you find the
                    perfect solution for your beauty needs
                  </p>
                  {/* <button className="px-10 py-3.5 bg-black text-white rounded-lg text-sm font-medium"> */}
                  <button className="w-60 py-3.5 max-md:w-full bg-black text-white text-sm font-medium">
                    Explore Our Collection
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
        <div>
          <div className="bg-[url('/images/about/bbt.jpeg')] bg-cover bg-no-repeat bg-center ">
            <div className="h-screen p-8 max-sm:px-4 flex items-center max-md:h-screen/2 ">
              <div className="w-0 md:w-full "></div>
              <div className="w-full flex justify-end ">
                <div className="flex flex-col w-4/5 max-md:w-full gap-4 lg:gap-4 xl:gap-8 max-md:text-center ">
                  <p className="text-2xl max-md:text-2xl text-black/70">
                    Radiant Beauty
                  </p>
                  <p className="text-4xl md:text-6xl font-[600] font-Libre max-md:flex max-md:justify-center max-md:gap-1 ">
                    Nourish <span className="pt-2 max-md:pt-0">Your Skin</span>
                  </p>
                  <p className=" leading-8 max-sm:text-lg text-black/60">
                    At our skin care brand, we believe in providing
                    high-quality, natural body lotions that nourish and hydrate
                    your skin. Our extensive range of products caters to
                    different skin types and concerns, ensuring you find the
                    perfect solution for your beauty needs
                  </p>
                  {/* <button className="px-10 py-3.5 bg-black text-white rounded-lg text-sm font-medium"> */}
                  <button className="w-60 py-3.5 max-md:w-full bg-black text-white text-sm font-medium">
                    Explore Our Collection
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
        <div>
          <div className="bg-[url('/images/about/bbt.jpeg')] bg-cover bg-no-repeat bg-center ">
            <div className="h-screen p-8 max-sm:px-4 flex items-center max-md:h-screen/2 ">
              <div className="w-0 md:w-full "></div>
              <div className="w-full flex justify-end ">
                <div className="flex flex-col w-4/5 max-md:w-full gap-4 lg:gap-4 xl:gap-8 max-md:text-center ">
                  <p className="text-2xl max-md:text-2xl text-black/70">
                    Radiant Beauty
                  </p>
                  <p className="text-4xl md:text-6xl font-[600] font-Libre max-md:flex max-md:justify-center max-md:gap-1 ">
                    Nourish <span className="pt-2 max-md:pt-0">Your Skin</span>
                  </p>
                  <p className=" leading-8 max-sm:text-lg text-black/60">
                    At our skin care brand, we believe in providing
                    high-quality, natural body lotions that nourish and hydrate
                    your skin. Our extensive range of products caters to
                    different skin types and concerns, ensuring you find the
                    perfect solution for your beauty needs
                  </p>
                  {/* <button className="px-10 py-3.5 bg-black text-white rounded-lg text-sm font-medium"> */}
                  <button className="w-60 py-3.5 max-md:w-full bg-black text-white text-sm font-medium">
                    Explore Our Collection
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
        <div>
          <div className="bg-[url('/images/about/bbt.jpeg')] bg-cover bg-no-repeat bg-center ">
            <div className="h-screen p-8 max-sm:px-4 flex items-center max-md:h-screen/2 ">
              <div className="w-0 md:w-full "></div>
              <div className="w-full flex justify-end ">
                <div className="flex flex-col w-4/5 max-md:w-full gap-4 lg:gap-4 xl:gap-8 max-md:text-center ">
                  <p className="text-2xl max-md:text-2xl text-black/70">
                    Radiant Beauty
                  </p>
                  <p className="text-4xl md:text-6xl font-[600] font-Libre max-md:flex max-md:justify-center max-md:gap-1 ">
                    Nourish <span className="pt-2 max-md:pt-0">Your Skin</span>
                  </p>
                  <p className=" leading-8 max-sm:text-lg text-black/60">
                    At our skin care brand, we believe in providing
                    high-quality, natural body lotions that nourish and hydrate
                    your skin. Our extensive range of products caters to
                    different skin types and concerns, ensuring you find the
                    perfect solution for your beauty needs
                  </p>
                  {/* <button className="px-10 py-3.5 bg-black text-white rounded-lg text-sm font-medium"> */}
                  <button className="w-60 py-3.5 max-md:w-full bg-black text-white text-sm font-medium">
                    Explore Our Collection
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
        <div>
          <div className="bg-[url('/images/about/bbt.jpeg')] bg-cover bg-no-repeat bg-center ">
            <div className="h-screen p-8 max-sm:px-4 flex items-center max-md:h-screen/2 ">
              <div className="w-0 md:w-full "></div>
              <div className="w-full flex justify-end ">
                <div className="flex flex-col w-4/5 max-md:w-full gap-4 lg:gap-4 xl:gap-8 max-md:text-center ">
                  <p className="text-2xl max-md:text-2xl text-black/70">
                    Radiant Beauty
                  </p>
                  <p className="text-4xl md:text-6xl font-[600] font-Libre max-md:flex max-md:justify-center max-md:gap-1 ">
                    Nourish <span className="pt-2 max-md:pt-0">Your Skin</span>
                  </p>
                  <p className=" leading-8 max-sm:text-lg text-black/60">
                    At our skin care brand, we believe in providing
                    high-quality, natural body lotions that nourish and hydrate
                    your skin. Our extensive range of products caters to
                    different skin types and concerns, ensuring you find the
                    perfect solution for your beauty needs
                  </p>
                  {/* <button className="px-10 py-3.5 bg-black text-white rounded-lg text-sm font-medium"> */}
                  <button className="w-60 py-3.5 max-md:w-full bg-black text-white text-sm font-medium">
                    Explore Our Collection
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
