import React from "react";
import { IoRocket } from "react-icons/io5";

function Logo() {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center gap-6 content-center">
        <div className="border border-black h-[500px] w-[500px] flex flex-col gap-8 justify-center items-center">
          <div className="space-x-10 flex justify-center items-center">
            <div className="border-4 border-indigo-600 h-24 w-24 rounded-full relative">
              <IoRocket className="size-20 text-indigo-600 absolute -top-2 left-4" />
            </div>
            <div className="bg-indigo-700 border-4 border-indigo-700 p-4 rounded-xl">
              <div className="border-8 border-white h-24 w-24 rounded-full relative">
                <IoRocket className="size-20 text-white absolute -top-4 left-3.5" />
              </div>
            </div>
          </div>
          <br />
          <div className="space-x-10 flex justify-center items-center">
            {/* <div className="bg-indigo-700 border-4 border-indigo-700 p-4 rounded-xl">
              <div className="border-4 border-white p-4 rounded-full">
                <IoRocket className="size-12 text-white" />
              </div>
            </div> */}
            <div className="bg-indigo-700 border-4 border-indigo-700 p-4 rounded-full">
              <IoRocket className="size-16 text-white" />
            </div>
            <div className="bg-indigo-700 border-4 border-indigo-700 p-4 rounded-3xl">
              <IoRocket className="size-16 text-white" />
            </div>
            <div className="p-2 border-2 border-indigo-600 bg-indigo-600 rounded-2xl">
              {/* <div className="p-4 rounded-full border-2 border-indigo-600 bg-indigo-100 "> */}
              <div className="p-4 rounded-full border-2 border-indigo-600 bg-white">
                <IoRocket className="size-12 text-indigo-600" />
              </div>
            </div>
          </div>
          <div className="space-x-10 flex justify-center items-center">
            <div className="border border-indigo-700 p-6 rounded-full">
              <IoRocket className="size-16 text-indigo-700" />
            </div>
            <div className="bg-indigo-100 border border-indigo-700 p-4 rounded-3xl">
              <IoRocket className="size-16 text-indigo-700" />
            </div>
            <div className="p-2 border-2 border-indigo-600 bg-indigo-600 rounded-2xl">
              {/* <div className="p-4 rounded-full border-2 border-indigo-600 bg-indigo-100 "> */}
              <div className="p-4 rounded-full border-2 border-indigo-600 bg-white">
                <IoRocket className="size-12 text-indigo-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
