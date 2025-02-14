import React, {useEffect} from "react";
import { AccordionDemo } from "@/components/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

function FAQs() {
  useEffect(() => {
  AOS.init({
    duration: 1000, // Animation duration
    easing: 'ease-in-out', // Animation easing
    // once: true, // Whether to animate only once
    // ... other AOS options
  });
    
    return () => {
      AOS.refresh(); // Refresh AOS on component unmount or when dependencies change. Important!
    };
}, []);
    return (
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto max-xl:px-6 py-16">
          <div className="flex justify-between w-full max-md:flex-wrap">
            <div className="w-1/4 max-md:w-full pb-10" data-aos="fade-right">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold max-md:text-center">
                FAQs
              </h2>
            </div>
            <div className="w-[70%] max-md:w-full" data-aos="fade-left">
              <AccordionDemo />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}
export default FAQs;