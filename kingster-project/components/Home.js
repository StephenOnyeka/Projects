import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import ScrollDiv from "./Scroll";
import Navbar from "./Navbar";
import Topfile from "./Topfile";
import Footer from "./Footer";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/pagination';
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, FreeMode, Navigation } from "swiper/modules";

function Home1() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className=" ">
      <ScrollDiv />
      <div className="font-Poppins">
        <div id="Home" className="max-sm:overflow-hidden">
          <Topfile />

          <div className="bg-[url('/students-image.jpg')] bg-fixed bg-cover bg-no-repeat bg-center ">
            <div className="-mb-14 pt-4 px-4 text-white
            ">
                <Navbar />
              </div>
            <div
              id="Home_container-1"
              className="bg-gradient-to-b from-black/80 to-black/15 h-screen px-8 pt-8 max-sm:px-4 w-full text-white flex items-center content-center "
              // className="bg-black/60 h-screen px-8 pt-8 w-full text-white"
            >
              {/* <div className="">
                <Navbar />
              </div> */}
              {/* <div className="mt-40"> */}
              <div className="">
                <div className="flex flex-col items-start gap-5 max-sm:gap-3">
                  {" "}
                  {/*text-5xl*/}
                  <p className="font-Playfair italic text-5xl max-md:text-4xl max-sm:text-2xl max-sm:">
                    Welcome to{" "}
                  </p>
                  <p className="font-Playfair text-8xl max-sm:text-6xl max-md:text-7xl max-sm:tracking-wide">
                    {" "}
                    {/**/}
                    <span className="font-bold">Kingster</span> School
                  </p>
                  <button className="bg-primary text-white font-bold mt-2 px-8 py-4 max-sm:mt-6">
                    Take a Tour
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div id="Home_container-2">
            <div
              id="Home_container-2__content-1"
              className="flex w-full h-fit -mt-8 lg:px-4 max-md:px-4 max-md:flex-col max-md:items-center max-md:mb-8 max-lg:px-0 2xl:px-16 "
            >
              <div className=" w-1/3 h-fit max-md:w-4/6 max-sm:w-5/6 max-[500px]:w-11/12">
                <div className="bg-red-600 max-w-full flex items-center p-8 gap-4 text-white">
                  {/* Done just now */}
                  <Image
                    src="svgs/school-svgrepo-com.svg"
                    alt=""
                    color="white"
                    // layout="fill"
                    // objectFit="contain"

                    width="14"
                    height="14"
                    // className="w-14"
                    className="w-14"
                  />
                  <span>
                    <h3 className="font-bold">School Life</h3>
                    <p>Learn More</p>
                  </span>
                </div>
                <div className="max-w-full ">
                  <div className="bg-[url(/brick-building-with-sign-reading-college-business-front_839169-3907.avif)] w-full h-72 bg-cover bg-no-repeat bg-center max-sm:h-fit">
                    {/* <Image
                      src="/brick-building-with-sign-reading-college-business-front_839169-3907.avif"
                      alt=""
                      // layout="fill"
                      // objectFit="contain"
                      width="14"
                      height="72"
                      className="w-full h-72 max-sm:h-fit"
                    /> */}
                  </div>
                  <p className="py-8 pr-2 leading-6 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eum, sunt rem. Voluptatem vero nostrum tenetur suscipit
                    voluptates alias ea nisi dolore tempora cupiditate odio ut,
                    soluta voluptas eius officia laborum mollitia, esse facilis!
                  </p>
                </div>
              </div>

              <div className="w-1/3 h-96 max-md:w-4/6 max-md:h-fit max-sm:w-5/6 max-[500px]:w-11/12">
                <div className="bg-red-700 max-w-full flex items-center p-8 gap-4 text-white">
                  <Image
                    src="svgs/open-book-book-svgrepo-com.svg"
                    alt=""
                    color="white"
                    width={14}
                    height={14}
                    // className="w-14"
                    className="w-14 h-auto"
                  />
                  <span>
                    <h3 className="font-bold">Academics</h3>
                    <p>Learn More</p>
                  </span>
                </div>
                <div className="max-w-full">
                  <div className="bg-[url(/depositphotos_85888116-man-reading-a-book-in-the-office.jpg)] w-full h-72 bg-cover bg-no-repeat bg-center "></div>
                  <p className="py-8 pr-2 leading-6 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eum, sunt rem. Voluptatem vero nostrum tenetur suscipit
                    voluptates alias ea nisi dolore tempora cupiditate odio ut,
                    soluta voluptas eius officia laborum mollitia, esse facilis!
                  </p>
                </div>
              </div>

              <div className="w-1/3 h-96 max-md:w-4/6 max-md:h-fit max-sm:w-5/6 max-[500px]:w-11/12">
                <div className="bg-red-800 max-w-full flex items-center p-8 gap-4 text-white">
                  <Image
                    src="/svgs/sport-centre-svgrepo-com.svg"
                    alt=""
                    color="white"
                    width={14}
                    height={14}
                    className="w-14"
                  />
                  <span>
                    <h3 className="font-bold">Athletics</h3>
                    <p>Learn More</p>
                  </span>
                </div>
                <div className="max-w-full">
                  <div className="bg-[url(/studentAthlete.jpg)] w-full h-72 bg-cover bg-no-repeat bg-center "></div>

                  <p className="py-8 pr-2 leading-6 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eum, sunt rem. Voluptatem vero nostrum tenetur suscipit
                    voluptates alias ea nisi dolore tempora cupiditate odio ut,
                    soluta voluptas eius officia laborum mollitia, esse facilis!
                  </p>
                </div>
              </div>
            </div>

            <div id="Home_container-2__content-2" className="pb-24">
              <h2 className="text-center text-4xl max-sm:text-3xl  text-contingentText font-medium py-16 ">
                Kingster At A Glance
              </h2>
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <div>
                  {counterOn && (
                    <div className="flex justify-evenly content-center items-center text-center max-sm:gap-8 max-sm:px-2 max-sm:flex-wrap">
                      <div>
                        <p className="font-medium text-6xl max-sm:text-4xl max-md:text-5xl text-primary pb-5 max-sm:pb-2">
                          <CountUp start={0} end={800} duration={3} /> +
                        </p>
                        <p className="text-gray-500 max-sm:text-xs">
                          Active Students
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-6xl max-sm:text-4xl max-md:text-5xl text-primary pb-5 max-sm:pb-2">
                          <CountUp start={0} end={5000} duration={3} />+
                        </p>
                        <p className="text-gray-500 max-sm:text-xs">
                          Graduated Students
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-6xl max-sm:text-4xl max-md:text-5xl text-primary pb-5 max-sm:pb-2">
                          <CountUp start={0} end={100} duration={3} />+
                        </p>
                        <p className="text-gray-500 max-sm:text-xs">
                          Qualified Teachers
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollTrigger>
            </div>
          </div>

          <div id="Home_container-3" className="h-full ">
            <div
              id="Home_container-3__content-1"
              className="flex justify-end items-center content-center text-white h-5/6 -ml-16 bg-contain max-md:bg-cover max-md:content-center max-md:justify-center max-md:-ml-0 "
            >
              <div className="px-20 leading-7 w-1/2 max-md:w-5/6 py-28 max-sm:px-4">
                <div className="my-8 leading-8">
                  <p className="text-4xl font-bold pb-2">
                    {" "}
                    Apply for Admission
                  </p>
                  <p className="text-lg">
                    {" "}
                    Fall 2019 applications are now open
                  </p>
                </div>
                <p className="text-lg">
                  We don't just give students an education and experiences that
                  set them up for success in a career. We help them succeed in
                  their career- to discover a field they're passionate about and
                  dare to lead it.
                </p>
                <button className="bg-primary text-white font-bold mt-8 px-8 py-4">
                  Apply Now
                </button>
              </div>
            </div>

            <div id="Home_container-3__content-2" className="pt-16">
              <p className="text-4xl max-sm:text-3xl font-medium um text-center text-contingentText">
                Educational Affliations
              </p>
              <div className="my-10">
                <Swiper
                  speed={5000}
                  spaceBetween={30}
                  loop={true}
                  freeMode={true}
                  slidesPerView={4}
                  centeredSlides={true}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                  }}
                  // pagination={{
                  //   clickable: true,
                  // }}
                  // navigation={true}
                  modules={[Autoplay, Navigation, FreeMode]}
                  className="mySwiper border-green-800"
                >
                  <SwiperSlide className="-mx-3 p-6 max-sm:p-0 max-sm:-mx-0">
                    <Image
                      src="/swiper-images/15.webp"
                      alt=""
                      layout="fill"
                      // objectFit="contain"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="-mx-3 p-6 max-sm:p-0 max-sm:-mx-0">
                    <Image
                      src="/swiper-images/16.webp"
                      alt=""
                      layout="fill"
                      // objectFit="contain"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="-mx-3 p-6 max-sm:p-0 max-sm:-mx-0">
                    <Image
                      src="/swiper-images/17.webp"
                      alt=""
                      layout="fill"
                      // objectFit="contain"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="-mx-3 p-6 max-sm:p-0 max-sm:-mx-0">
                    <Image
                      src="/swiper-images/18.webp"
                      alt=""
                      layout="fill"
                      // objectFit="contain"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="-mx-3 p-6 max-sm:p-0 max-sm:-mx-0">
                    <Image
                      src="/swiper-images/15.webp"
                      alt=""
                      layout="fill"
                      // objectFit="contain"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="-mx-3 p-6 max-sm:p-0 max-sm:-mx-0">
                    <Image
                      src="/swiper-images/16.webp"
                      alt=""
                      layout="fill"
                      // objectFit="contain"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="-mx-3 p-6 max-sm:p-0 max-sm:-mx-0">
                    <Image
                      src="/swiper-images/17.webp"
                      alt=""
                      layout="fill"
                      // objectFit="contain"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="-mx-3 p-6 max-sm:p-0 max-sm:-mx-0">
                    <Image
                      src="/swiper-images/18.webp"
                      alt=""
                      layout="fill"
                      // objectFit="contain"
                    />
                  </SwiperSlide>
                  {/* <SwiperSlide><Image src="/swiper-images/15.webp" alt="" /></SwiperSlide> */}
                </Swiper>
              </div>

              <div id="facilities" className="my-16">
                <h1 className="max-sm:mt-24 text-4xl max-sm:text-3xl text-center text-contingentText font-medium ">
                  Kingster Facilities
                </h1>
                <div className="flex flex-col items-center justify-between ">
                  <span>
                    <button className="bg-primary hover:bg-blue-400 border rounded-lg text-white px-6 py-4 my-8 mb-20">
                      Visit Page
                    </button>
                  </span>

                  <span className="flex text-center gap-16 flex-wrap justify-center max-md:gap-10">
                    <div className="flex flex-col items-center justify-center gap-8 max-sm:gap-4 w-80 h-64 max-md:h-fit max-md:w-4/6">
                      <div className="bg-primary hover:bg-blue-50 border text-white hover:text-black w-fit h-fit rounded-full">
                        Icon
                      </div>
                      <div>
                        <h1 className="text-contingentColor text-xl font-medium pb-4 max-sm:text-lg">
                          Eco-Friendly Environment
                        </h1>
                        <p className="text-gray-500 leading-7 max-sm:text-sm">
                          We maintain the excellent standard in designing
                          eco-friendly structures and layout for healthy &
                          adaptive learning.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-8 max-sm:gap-4 w-80 h-64 max-md:h-fit max-md:w-4/6">
                      <div className="bg-primary hover:bg-blue-50 border text-white hover:text-black w-fit h-fit rounded-full">
                        Icon
                      </div>
                      <div>
                        <h1 className="text-contingentColor text-xl font-medium pb-4 max-sm:text-lg">
                          Innovative Classrooms
                        </h1>
                        <p className="text-gray-500 leading-7 max-sm:text-sm">
                          Our classrooms are designed to inspire learning and
                          support emotional and physical wellness excellently.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-8 max-sm:gap-4 w-80 h-64 max-md:h-fit max-md:w-4/6">
                      <div className="bg-primary hover:bg-blue-50 border text-white hover:text-black w-fit h-fit rounded-full">
                        Icon
                      </div>
                      <div>
                        <h1 className="text-contingentColor text-xl font-medium pb-4 max-sm:text-lg">
                          Relevant Amenities
                        </h1>
                        <p className="text-gray-500 leading-7 max-sm:text-sm">
                          From Health Centers to dedicated and furnished
                          laboratories, to sports centers and center for skill
                          acquisition.
                        </p>
                      </div>
                    </div>
                  </span>
                </div>
              </div>

              <div className="h-full">
                <div className="flex w-full gap-8 justify-center max-md:flex-wrap pb-28">
                  {/* <div id="Donor" className="bg-[url('/the-samford-clock-tower-jc-findley.jpg')] w-full p-10 min-h-max"> */}
                  <div id="Donor" className="w-full p-10  max-md:w-5/6">
                    <span className="flex items-center gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="white"
                        class="bi bi-link-45deg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z" />
                      </svg>
                      <p className="text-2xl font-bold text-white">
                        Quick Links
                      </p>
                    </span>

                    <br />
                    {/* <br /> */}
                    <ul className="text-base font-semibold text-white">
                      <li className="mt-4"> Alumni & Donors</li>
                      <br />
                      <hr />
                      <li className="mt-4"> Athletic Calendar</li>
                      <br /> <hr />
                      <li className="mt-4"> All Kingster's Events </li>
                      <br /> <hr />
                      <li className="mt-4"> Partnership & Out Reach </li>
                      <br /> <hr />
                      <li className="mt-4"> Academic Programs</li>
                      <br /> <hr />
                      <li className="mt-4"> Tuition And Fees </li>
                      <br /> <hr />
                    </ul>
                  </div>

                  <div className="w-full text-center flex flex-col items-center justify-center gap-8 h-fit max-md:w-5/6">
                    {/* <div className="flex flex-col items-center justify-center gap-8 w-80 h-64"> */}
                    <div className="mt-12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        // height="16"
                        fill="#C50227"
                        class="bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                      </svg>
                    </div>
                    <div className="px-8">
                      <h1 className="text-contingentColor text-xl font-bold pb-2">
                        Subscribe To Newsletter
                      </h1>
                      <p className="text-black pb-4">
                        Get updates to news & events
                      </p>
                      {/* <p className="text-gray-500 leading-6 text-sm px-12"> */}
                      <p className="text-gray-500 leading-6 text-sm">
                        The Campaign for the Kingster University is the largest
                        fundraising campaign in history. With a historic
                      </p>
                      <div className="">
                        <input
                          type="text"
                          className="bg-gray-200 p-4 w-full mt-10"
                        />
                        <button className="bg-primary p-4 w-full mt-4 text-white font-semibold">
                          Subscribe
                        </button>
                      </div>
                    </div>

                    {/* </div> */}
                  </div>

                  <div className="w-full flex flex-col items-center justify-center gap-8 h-fit max-md:w-5/6 ">
                    {/* <div className="flex flex-col items-center justify-center gap-8 w-80 h-64"> */}
                    <div className="">
                      <Image
                        src="/New-Grads.jpg"
                        width={500}
                        height={400}
                        className="w-full h-full"
                        alt=""
                      />
                    </div>
                    <div className="px-0">
                      <h1 className="text-contingentColor text-xl font-bold pb-2">
                        Donation helps us
                      </h1>
                      {/* <p className="text-gray-500 leading-6 text-sm px-12"> */}
                      <p className="text-gray-500 leading-6 text-sm">
                        The Campaign for the Kingster University is the{" "}
                        <span className="font-bold">
                          largest fundraising campaign in history.
                        </span>
                        With a historic $1 billion goal, the campaign is
                        expanding U of T's global leadership capacity.
                      </p>
                      <div className="">
                        <button className="bg-primary p-4 mt-4 text-white font-semibold">
                          <span className="flex items-center gap-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="white"
                              class="bi bi-heart-fill"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                              />
                            </svg>
                            <p className="text-sm">Become a donor</p>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1;
