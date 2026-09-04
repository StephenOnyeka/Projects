import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GiSpookyHouse } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import Navbar from "./Navbar";
import Footer from "./Footer";

// AOS is initialised once for the whole app in components/aos-provider.js, so
// there is no per-page init here any more. Anything in the first viewport uses
// the CSS-only .enter-* classes instead, because AOS holds [data-aos] elements
// at opacity 0 until it hydrates - which made the hero flash blank on load.

const services = [
  {
    title: "Interior painting",
    body: "Beautiful, durable finishes for every room.",
    src: "/icons/4099285.svg",
  },
  {
    title: "Variety of colors",
    body: "Endless color possibilities for your perfect project.",
    src: "/icons/6168373.svg",
  },
  {
    title: "Qualified workers",
    body: "Skilled professionals for flawless results.",
    src: "/icons/wk.svg",
  },
  {
    title: "Exterior painting",
    body: "Perfect exterior look with our customized painting solutions",
    icon: GiSpookyHouse,
  },
];

const brandLogos = [1, 2, 3, 4, 5, 6];

function HoMe() {
  return (
    <div className=" ">
      <Navbar />
      <div className=" pt-10 mx-auto max-w-7xl">
        <section className="px-8 flex max-sm:flex-wrap items-center justify-between  w-full">
          <div className="w-full md:w-1/2 enter-rise">
            <p className="text-xs font-bold text-primary tracking-[2px] pb-2">
              ADD COLOR TO YOUR LIFE
            </p>
            <p className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary pb-4 ">
              {/* ProRange: <br /> */}
              AdorationPaintszz: <br />
              premium painting company
            </p>
            <Link href="/services">
              <button className="text-sm bg-orange-400 text-white px-8 py-4 font-bold transition-colors duration-200 hover:bg-orange-500">
                View All Services
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 enter-fade">
            <Image
              className="h-auto lg:w-[600px]"
              src={"/images/homebg.webp"}
              width={700}
              height={700}
              alt="Painter finishing an interior wall"
              priority
            />
          </div>
        </section>
      </div>

      <section className="my-10 py-16 bg-[#f1f2f3] ">
        <div className="text-center" data-aos="fade-up">
          <p className="text-xs font-bold text-primary tracking-[2px] pb-2">
            WHAT WE OFFER
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary pb-4">
            Our painting services
          </p>
        </div>
        {/* Each card reveals on its own so the row builds up left to right. One
            data-aos on the grid fired the moment its top edge appeared, which
            "revealed" cards that were still well below the fold. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center  px-4 py-4 mx-auto max-w-7xl w-full">
          {services.map(({ title, body, src, icon: Icon }, i) => (
            <div
              key={title}
              className="flex flex-col items-center w-full bg-white text-center group py-12 px-4 transition-shadow duration-300 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={i * 100 || undefined}
            >
              {Icon ? (
                <Icon className="w-56 h-16 text-[#4159EE]" />
              ) : (
                <Image src={src} width={70} height={70} alt="" />
              )}
              <br />
              <p className="text-primary text-xl font-bold">{title}</p>
              <p className="text-slate-400 mb-2">{body}</p>
              <BsThreeDots
                size={30}
                className="text-slate-400 transition-colors duration-200 group-hover:text-[#4159EE]"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-4 mx-auto max-w-7xl">
        <div className="flex max-md:flex-wrap items-center content-center justify-between gap-0 sm:gap-10 md:gap-14 lg:gap-20 xl:gap-28">
          {/* The two halves come in from their own side instead of the whole
              row sliding up as one block. */}
          <div
            className="p-10 md:p-0 flex items-center justify-center max-sm:justify-start w-full md:w-1/2"
            data-aos="fade-right"
          >
            <div className="h-auto w-[70%] max-md:w-[50%] max-sm:w-[70%] relative">
              <Image
                className="w-full h-full"
                src={"/images/home-image1(1).jpg"}
                width={250}
                height={500}
                alt="Freshly painted interior wall"
              />
              <Image
                // className=" -mt-40 -ml-20 w-[90%] "
                className=" -mt-[70%] ml-[45%] w-[80%] "
                src={"/images/home-image1(2).jpg"}
                width={250}
                height={500}
                alt="Painter at work with a roller"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <p className="text-sm font-bold text-primary tracking-[2px] pb-2">
              PREMIUM QUALITY
            </p>
            <p className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary pb-4">
              Bringing your dreams to life
            </p>
            <p className="text-slate-500 text-md">
              We're dedicated to providing exceptional quality and service. From
              color selection to the final brushstroke, we'll ensure your
              project is a success."
            </p>
            <br />
            <p className="text-sm font-medium text-primary tracking-[2px] pb-2">
              MON-FRI: 9AM-10PM
            </p>
            <p className="text-sm font-medium text-primary tracking-[2px]">
              SATURDAY: 9AM-6PM
            </p>
            <br />
            <Link href="/services">
              <button className="text-sm bg-orange-400 text-white px-8 py-3 font-bold transition-colors duration-200 hover:bg-orange-500">
                Our Services
              </button>
            </Link>
          </div>
        </div>
        <br />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center py-10 px-6 w-full">
          {/* data-aos sits on a wrapper, not on the image: AOS's
              `[data-aos^=fade][data-aos^=fade].aos-animate` rule wins on
              specificity over Tailwind's opacity utilities, so putting it on the
              image itself would pin it at opacity 1 and kill the dim/hover
              effect. */}
          {brandLogos.map((n, i) => (
            <div key={n} data-aos="fade-up" data-aos-delay={i * 50 || undefined}>
              <Image
                src={`/images/logo${n}.webp`}
                className="opacity-30 transition-opacity duration-300 ease-out hover:opacity-100"
                width={180}
                height={100}
                alt=""
              />
            </div>
          ))}
        </div>
      </section>

      <section className=" px-4 py-8 md:py-16 bg-[#4159EE] ">
        {/* <div className="flex flex-1 h-full border"> */}
        <div className="flex max-md:flex-wrap justify-between items-center max-md:gap-6 max-w-7xl mx-auto h-full">
          <div className="w-full md:w-1/2" data-aos="fade-up">
            <p className="text-white text-xl md:text-2xl xl:text-4xl leading-7 max:sm:leading-6 font-semibold">
              Schedule an appointment to meet or email us your questions
            </p>
          </div>
          <div
            className="flex gap-5 w-full md:w-1/2 justify-end max-md:justify-start"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <button className="bg-orange-400 text-white max-sm:text-sm font-semibold px-6 py-3 transition-colors duration-200 hover:bg-orange-500">
              Request a Quote
            </button>
            <Link href="/contact">
              <button className="px-7 py-3 border-2 max-sm:border max-sm:text-sm text-white font-semibold transition-colors duration-200 hover:bg-white hover:text-[#4159EE]">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        {/* </div> */}
      </section>

      <section className="px-4 py-10 bg-[#f1f2f3] h-full">
        <div className="mx-auto max-w-7xl">
          {/* This was a <span>, which stays display:inline even with block <p>
              children - and transforms do not apply to inline boxes, so the
              heading only faded while everything around it rose. */}
          <div className="text-center" data-aos="fade-up">
            <p className="text-xs font-bold text-primary tracking-[2px] pb-2">
              TESTIMONIALS
            </p>
            <p className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary pb-4">
              Our customers say
            </p>
          </div>
          <br />
          {/* Two reveal decisions here. The row used to carry a single
              data-aos with anchor-placement="center-bottom", so nothing moved
              until the row's own centre had cleared the viewport bottom - on
              cards this tall you were already looking at them. And a full
              fade-up starts 100px low, which on a card this tall sweeps up
              through the footer; fade-up-short (styles/globals.css) travels
              32px instead. */}
          <div className="flex max-md:flex-wrap gap-8">
            <div
              className="p-6 lg:p-10 bg-white w-full h-full"
              data-aos="fade-up-short"
            >
              <p className="lg:text-lg xl:text-xl text-primary leading-7 xl:leading-8 pb-4">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1.1"
                  viewBox="0 0 16 16"
                  // height="1em"
                  // width="1em"
                  className="w-6 text-orange-400 pb-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.548-0.043zM12.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.549-0.043z"></path>
                </svg>
                I've partnered with Adoration Paints on several high-end
                residential projects, and they consistently deliver outstanding
                results. Their expertise in paint selection, surface
                preparation, and application is unparalleled. They make my
                designs look their absolute best.
              </p>
              <div className="flex items-center gap-4">
                <Image
                  className="rounded-full"
                  src={"/images/1.jpg"}
                  width={55}
                  height={55}
                  alt=""
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
            <div
              className="p-6 lg:p-10 bg-white w-full h-full"
              data-aos="fade-up-short"
              data-aos-delay="100"
            >
              <p className="lg:text-lg xl:text-xl text-primary leading-7 xl:leading-8 pb-4">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1.1"
                  viewBox="0 0 16 16"
                  // height="1em"
                  // width="1em"
                  className="w-6 text-orange-400 pb-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.548-0.043zM12.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.549-0.043z"></path>
                </svg>
                Adoration Paints is my secret weapon for getting properties
                ready to sell quickly and for top price. Their painting services
                are fast, affordable, and they make a huge impact on the overall
                appearance of a home. I highly recommend them to any agent
                looking to give their listings a competitive edge.
              </p>
              <div className="flex items-center gap-4">
                <Image
                  className="rounded-full"
                  src={"/images/2.jpg"}
                  width={55}
                  height={55}
                  alt=""
                />
                <div className="flex flex-col">
                  <span className="text-primary font-bold">Felicia Garret</span>
                  <span className="text-slate-400"> Real Estate Agent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HoMe;
