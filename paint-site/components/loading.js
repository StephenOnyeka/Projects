import React from 'react'

function Loading() {
  return (
    <div className="h-screen flex justify-center items-center animate-pulse">
      {/* <div className="bg-[url('/images/AP2.jpg')] w-40 h-40 rounded-full bg-cover bg-center max-md:w-16 max-md:h-16 max-sm:w-12 max-sm:h-12">
      </div> */}
      <div className="bg-[url('/images/AP2.jpg')] w-full h-40 rounded-full bg-contain bg-no-repeat bg-center ">
      </div>
    </div>
  );
}

export default Loading
