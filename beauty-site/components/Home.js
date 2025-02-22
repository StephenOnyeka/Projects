import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HOme() {
  return (
    <div>
      <div>
        {/* <div className="bg-[url('/images/GkSafmo9dVaGFHi4c0IfpI-4096x4096.webp')] bg-cover bg-no-repeat bg-center "> */}
        <div className="bg-[url('/images/about/aboutbg.jpeg')] bg-cover bg-no-repeat bg-center max ">
          <div className=" h-screen p-8 max-sm:px-4 w-full grid grid-col items-center max-md:h-full max-md:py-24 max-md:bg-white/20 max-md:pt-52">
            <div className="flex flex-col items-start gap-8 max-md:items-center max-md:text-center">
              <div className="text-5xl md:text-6xl font-[600] font-Libre">
                Moisturizing <br /> <div className="pt-2">Body</div>
              </div>
              <p className="text-xl md:text-2xl text-black font-Libre italic">
                Indulge in the rich, creamy texture of our premium body lotions
              </p>
              {/* <button className="hover:opacity-70 px-10 py-3.5 bg-black text-white rounded-lg text-sm font-medium"> */}
              <button className="hover:opacity-70 w-40 py-3.5 bg-black text-white rounded-lg text-sm font-medium ">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 py-16 max-sm:px-4 max-sm:py-8 ">
        <div className="bg-[url('/images/GKudBMCgWi4GpAad3anjgj-4096x4096.webp')] bg-cover bg-no-repeat bg-left h-screen/1.5 w-full p-8 max-sm:px-4 flex border rounded-xl">
          <div className="w-0 md:w-full"></div>
          <div className="w-full flex items-center ">
            <div className="flex flex-col text-left justify-end gap-4 md:gap-8 ">
              <div className="text-4xl md:text-5xl font-[600] font-Libre">
                Discover Our <br /> <span className="pt-4">Skincare</span>
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
        </div>
      </div>
      <div>
        <div className="bg-[url('/images/Fy6UYLEt3GHF93yadMoDqG-4096x4096.webp')] bg-cover bg-no-repeat bg-center w-full flex">
          <div className="h-screen/1.5 p-8 w-full grid grid-col items-center">
            <div className="flex flex-col items-start gap-8 w-4/5 max-md:w-full">
              <div className="text-4xl md:text-5xl font-[600] font-Libre">
                Elevate Your <br />{" "}
                <div className="pt-2 max-md:pt-0">Beauty Routine</div>
              </div>
              <p className="text-md leading-8 md:text-lg md:leading-10 text-black/60 ">
                Elevate your beauty routine with our diverse range of body care
                products, each formulated to nourish{" "}
              </p>
              <div className="flex gap-4">
                <button className="hover:opacity-70 px-8 py-3.5 bg-transparent border border-black/50 text-black/60  rounded-full font-bold max-md:text-sm max-md:px-6 max-sm:py-3">
                  Shop Body Care
                </button>
                <button className="hover:opacity-70 px-14 py-3.5 bg-black text-white/80 rounded-full font-bold max-md:text-sm max-sm:px-6 max-sm:py-2">
                  Learn More
                </button>
              </div>
            </div>
          </div>{" "}
          {/* <div className="w-0 md:w-full"></div> */}
        </div>
      </div>
      <div className="p-8 max-sm:space-y-20">
        <div className="flex justify-between gap-8 lg:gap-16 max-sm:flex-wrap">
          <div className="w-full">
            <Image
              src={"/images/FZe7pTuySTkIcbb8sqxN2L-4096x4096.webp"}
              width={500}
              height={250}
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center ">
            <div className="flex flex-col text-left justify-end gap-6">
              <div className="text-3xl lg:text-5xl font-[600] font-Libre leading-10 ">
                Experience the{" "}
                <div className="py-0 lg:py-2">Transformative</div> Power of Our
              </div>
              <p className="text-md leading-8 md:text-lg md:leading-10 text-black/60">
                Discover our premium shampoo collection, expertly crafted to
                cleanse, nourish, and revitalize your hair, leaving it soft,
                silky, and full of life
              </p>
              {/* <button className="hover:opacity-70 px-10 py-3.5 bg-black text-white rounded-lg text-sm font-medium"> */}
              <button className="hover:opacity-70 w-40 py-3.5 bg-black text-white rounded-full text-sm font-medium">
                Explore Now
              </button>
            </div>
          </div>
        </div>
        <br />
        <div className="flex justify-evenly max-sm:flex-wrap-reverse max-sm:gap-8 ">
          <div className="w-full flex items-center ">
            <div className="flex flex-col gap-6 w-5/6 max-sm:w-full">
              <div className="text-3xl lg:text-5xl font-[600] font-Libre leading-10 ">
                Radiant Skin Starts Here
              </div>
              <p className="text-md leading-8 md:text-lg md:leading-10 text-black/60">
                Pamper your skin with our comprehensive range of body lotions
                and creams, designed to hydrate, soothe, and rejuvenate your
                body from head to toe
              </p>
              {/* <button className="hover:opacity-70 px-10 py-3.5 bg-black text-white rounded-lg text-sm font-medium"> */}
              {/* <button className="hover:opacity-70 w-48 py-3.5 bg-transparent border border-black/50 text-black/50 rounded-full text-sm font-semibold"> */}
              {/* <button className="hover:opacity-70 w-48 max-sm:w-40 py-3.5 bg-transparent border border-black/50 text-black/50 rounded-full text-sm font-semibold"> */}
              <button className="hover:opacity-70 w-48 max-sm:w-40 py-3.5 bg-transparent border border-black/50 text-black/70 rounded-full text-sm font-medium">
                Shop Body Care
              </button>
            </div>
          </div>
          <div className="w-full">
            <Image
              src={"/images/EPdc4OMhX9qJlwy0bzppKB-4096x4096.webp"}
              width={500}
              height={250}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="px-8 py-16 ">
        <div className="bg-[url('/images/JY2bVyMV5nrGvLv82Lt0br-4096x4096.webp')] bg-cover bg-no-repeat  bg-left-center h-screen/1.8 w-full p-8 max-sm:px-4 flex">
          <div className="w-0 lg:w-full"></div>
          <div className="w-full flex items-center justify-center ">
            <div className="w-5/6">
              <div className="flex flex-col text-left justify-end gap-6 ">
                {/* <div className="text-4xl font-[600] font-Libre"> */}
                <div className="text-3xl lg:text-5xl font-[600] font-Libre leading-10">
                  Refresh and Revive
                </div>
                {/* <p className="leading-8 text-[#F1E1D1] max-md:text-black/60"> */}
                <p className="text-md leading-8 md:text-lg md:leading-10 text-[#F1E1D1] max-lg:text-black/60">
                  Revitalize your skin with our refreshing body care products,
                  formulated to leave you feeling clean
                </p>
                {/* <button className="hover:opacity-70 px-10 py-3.5 bg-black text-white rounded-lg text-sm font-medium"> */}
                <button className="hover:opacity-70 w-52 max-sm:w-44 py-3.5 bg-[#69422F] text-white rounded-lg font-medium text-sm">
                  Explore Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FCF9F3] px-8 py-2">
        <div className=" p-2 pt-4">
          <div className="text-3xl lg:text-5xl font-[600] font-Libre leading-10 text-center py-4">
            Explore Our Products
          </div>
          {/* <div className="flex justify-between content-center items-center gap-8 max-sm:flex-wrap w-full"> */}
          <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 items-center gap-8 w-full">
            <div className="w-full text-center">
              <div className="bg-[url('/images/CPNlm0XZUm2GEQdptsJABs-4096x4096.webp')] bg-contain bg-no-repeat bg-center h-full w-full aspect-square "></div>
              {/* <div className="flex flex-col"></div> */}
              <p className="font-Libre text-lg font-semibold">
                Nourishing Hair Care
              </p>
              <p className="text-black/60">Revitalize Your Locks</p>
              <button className="hover:opacity-70 px-6 py-2 mt-4 bg-transparent border border-black/50 text-black/50 rounded-full text-sm font-semibold ">
                Shop Now
              </button>
            </div>
            <div className="w-full text-center">
              <div className="bg-[url('/images/FLhhzBmjo1kJd2WOb0VMi8-4096x4096.webp')] bg-contain bg-no-repeat bg-center h-full w-full aspect-square "></div>

              <p className="font-Libre text-lg font-semibold">
                Luxurious Body Care
              </p>
              <p className="text-black/60">Indulge in Moisture</p>
              <button className="hover:opacity-70 px-6 py-2 mt-4 bg-transparent border border-black/50 text-black/50 rounded-full text-sm font-semibold">
                Learn More
              </button>
            </div>
            <div className="w-full text-center">
              <div className="bg-[url('/images/GAaMK9A3zETF0dz7ZrPnFx-4096x4096.webp')] bg-contain bg-no-repeat bg-center h-full w-full aspect-square "></div>

              <p className="font-Libre text-lg font-semibold">
                Radiant Skin Solutions
              </p>
              <p className="text-black/60">Reveal Your Glow</p>
              <button className="hover:opacity-70 px-6 py-2 mt-4 bg-transparent border border-black/50 text-black/50 rounded-full text-sm font-semibold">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HOme;
