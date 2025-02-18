import React from "react";
import { AccordionDemo } from "@/components/accordion";

function FAQs() {
    return (
      <div className="h-screen">
        <div className="max-w-7xl mx-auto max-xl:px-6 py-8 mt-32 max-md:mt-12">
          <div className="flex justify-between w-full max-md:flex-wrap">
            <div className="w-1/4 max-md:w-full pb-10">
              {/* <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold max-md:text-center">FAQs</h2> */}
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-Libre font-semibold max-md:text-center">FAQs</h2>
            </div>
            <div className="w-[70%] max-md:w-full">
              <AccordionDemo />
            </div>
          </div>
        </div>
      </div>
    );
}
export default FAQs;