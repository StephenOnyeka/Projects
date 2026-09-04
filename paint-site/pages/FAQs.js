import React from "react";
import { AccordionDemo } from "@/components/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// AOS is initialised once for the whole app in components/aos-provider.js.

function FAQs() {
    return (
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto max-xl:px-6 py-16">
          {/* All of this sits in the first viewport, so it uses the CSS-only
              entrance classes. Under AOS it was held at opacity 0 until
              hydration, and the fade-left/fade-right pair fired on init anyway
              - there was never anything to scroll to. */}
          <div className="flex justify-between w-full max-md:flex-wrap">
            <div className="w-1/4 max-md:w-full pb-10 enter-rise">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold max-md:text-center">
                FAQs
              </h2>
            </div>
            <div
              className="w-[70%] max-md:w-full enter-rise"
              style={{ animationDelay: "120ms" }}
            >
              <AccordionDemo />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}
export default FAQs;