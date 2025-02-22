import React from 'react'

function Loading() {
  return (
    <div className="h-screen flex justify-center items-center animate-pulse">
      {/* <div className="bg-[url('/images/AP2.jpg')] w-full h-40 rounded-full bg-contain bg-no-repeat bg-center ">
      </div> */}
      <div className="bg-[url(/lenis.png)] bg-contain bg-center bg-no-repeat w-full h-10 max-md:w-full max-md:h-8"></div>
    </div>
  );
}

export default Loading
