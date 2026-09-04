import { useState, useEffect } from "react";
import Image from "next/image";

// AOS is initialised once for the whole app in components/aos-provider.js.

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

  // Paging is tracked as a page number instead of a raw index. The old
  // `currentIndex + slidesToShow` maths left the last window holding a single
  // image, and `% images.length` then skipped past the first one, so the
  // carousel drifted out of step after a lap - and again whenever slidesToShow
  // changed on resize.
  const [page, setPage] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [direction, setDirection] = useState(null);

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

  // Going from one slide to two would otherwise leave an odd page pointing at a
  // half-empty window.
  useEffect(() => {
    setPage(0);
  }, [slidesToShow]);

  const pageCount = Math.max(1, Math.ceil(images.length / slidesToShow));
  // Clamped so the final page is always full rather than showing one orphan.
  const start = Math.min(
    page * slidesToShow,
    Math.max(0, images.length - slidesToShow)
  );
  const visible = images.slice(start, start + slidesToShow);

  const nextSlide = () => {
    setDirection("next");
    setPage((prev) => (prev + 1) % pageCount);
  };

  const prevSlide = () => {
    setDirection("prev");
    setPage((prev) => (prev - 1 + pageCount) % pageCount);
  };

  // The reveal used to sit on the root below, which is the whole carousel -
  // heading, arrows and slides together are taller than a viewport on smaller
  // screens, so the slides were already revealed by the time you scrolled down
  // to them. The heading and the slides now trigger separately, each when it
  // actually arrives.
  return (
    <div>
      <div
        className="flex justify-between gap-16 max-sm:gap-4 max-sm:flex-wrap content-center items-center py-4 px-4"
        data-aos="fade-up"
      >
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
              type="button"
              aria-label="Previous work examples"
              className="bg-white flex items-center justify-center w-10 h-10 p-2 border rounded-full shadow-lg transition-colors duration-200 hover:bg-gray-100"
              onClick={prevSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next work examples"
              className=" bg-white flex items-center justify-center w-10 h-10 p-2 border rounded-full shadow-lg transition-colors duration-200 hover:bg-gray-100"
              onClick={nextSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Swapping the src alone had nothing to transition, so slides changed
            with a hard cut. Keying each slide on the page it belongs to remounts
            it, which replays the direction-aware entrance animation. */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4"
          data-aos="fade-up-short"
        >
          {visible.map((image, index) => (
            <div
              key={`${start}-${index}`}
              className={`relative w-full h-72 md:h-96 ${
                direction === "next"
                  ? "carousel-next"
                  : direction === "prev"
                  ? "carousel-prev"
                  : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
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
