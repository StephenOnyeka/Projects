import React from "react";

function responsiveVideo() {
  return (
    <>
      {/* This is the best way for rendering a responsive video, very responsive.*/}
      <div className="relative w-full h-0" style={{ paddingTop: "56.25%" }}>
        <video
          className="absolute top-0 left-0 w-full h-full"
          // controls
          autoPlay
          loop
          muted
          src="/video/PinGrab_1733449187884.mp4"
          type="video/mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* This is a responsive video using tailwindcss method of rendering, aspect ratio for videos, aspect-video */}
      <div className="aspect-video w-full">
        <video
          className="w-full h-full"
          // controls
          autoPlay
          loop
          muted
          src="/video/PinGrab_1733449187884.mp4"
          type="video/mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* This is a responsive video using manual  height rendering according to screen sizes */}
      <div className="relative w-full h-screen/4 sm:h-screen/3 md:h-screen/2  overflow-hidden rounded-lg">
        <div className="aspect-video w-full h-full">
          <video
            className="absolute top-0 left-0 object-cover w-full h-full"
            autoPlay
            loop
            muted
          >
            <source src="/video/PinGrab_1733449187884.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}

export default responsiveVideo;
