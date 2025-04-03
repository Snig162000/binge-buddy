import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-10 md:px-20 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:block py-6 text-lg w-1/4">{overview}</p>
      <div className="md:mt-0 mt-[3%]">
        <button className="bg-white text-black p-2 md:p-4 px-6 md:px-12 text-base md:text-xl rounded-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="bg-gray-500 text-white hidden md:inline-block p-4 px-12 text-xl bg-opacity-50 rounded-lg mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
