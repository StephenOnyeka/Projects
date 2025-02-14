import { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

import AOS from "aos";
import "aos/dist/aos.css";

const ImageCarousel = () => {
  const images = [
    { src: "/images/portfolio-004-copyright.jpg", alt: "Image 1" },
    { src: "/images/product-image6-co.jpg", alt: "Image 2" },
    { src: "/images/portfolio-image5.jpg", alt: "Image 3" },
    { src: "/images/portfolio-image6.jpg", alt: "Image 4" },
    { src: "/images/portfolio-002.jpg", alt: "Image 5" },
    { src: "/images/product-image20.jpg", alt: "Image 6" },
    { src: "/images/portfolio-image7.jpg", alt: "Image 7" },
    { src: "/images/portfolio-image8.jpg", alt: "Image 8" },
    { src: "/images/service-image2-.jpg", alt: "Image 9" },

    // Add more images as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      //   if (window.innerWidth >= 1024) {
      //     setSlidesToShow(2);
      //   } else
      if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + slidesToShow) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - slidesToShow;
      return newIndex >= 0 ? newIndex : images.length + newIndex;
    });
  };

    useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      // once: true, // Whether to animate only once
      // ... other AOS options
    });
  }, []);

  return (
    <div className=""  data-aos="fade-up">
      <div className="flex justify-between gap-16 max-sm:gap-4 max-sm:flex-wrap content-center items-center py-4 px-4">
        <div className="w-full ">
          {/* <div className="w-full"> */}
          <p className="text-sm font-bold tracking-[2px] pb-2">OUR PORTFOLIO</p>
          <p className="text-4xl lg:text-5xl xl:text-5xl font-bold pb-4">
            Work examples
          </p>
          <p className="text-slate-500 text-md md:text-lg">
            See how we've helped our clients achieve their vision. Our portfolio
            demonstrates the impact of our expertise, showcasing the
            before-and-after transformations we've created.
          </p>
          {/* </div> */}
        </div>
        <div className=" ">
          <div className="flex gap-2">
            <button
              className="bg-white flex items-center justify-center w-10 h-10 p-2 border rounded-full shadow-lg "
              onClick={prevSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
            </button>
            <button
              className=" bg-white flex items-center justify-center w-10 h-10 p-2 border rounded-full shadow-lg"
              onClick={nextSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {images
            .slice(currentIndex, currentIndex + slidesToShow)
            .map((image, index) => (
              <div key={index} className="relative w-full h-72 md:h-96">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-500 "
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
        </div>
        {/* <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
            onClick={prevSlide}
          >
            {"<"}
          </button>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
            onClick={nextSlide}
          >
            {">"}
          </button> */}
      </div>
    </div>
  );
};

export default ImageCarousel;
