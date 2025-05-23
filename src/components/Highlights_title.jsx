import React from 'react';
import logo2 from '/public/assets/Logo-Black.png'; // Ensure the correct path

const Highlights_title = () => {
  return (
    <div className=" flex flex-col justify-center items-center md:pl-20 w-screen pl-10">
      {/* Title Section */}
      <div className="pl:5 gap-4 flex flex-row md:gap-8 justify-start md:w-full md:pl-4 w-full">
        <p className="font-vanguard text-5xl md:text-8xl text-black font-bold ">HIGHLIGHTS</p>
        <p className="font-vanguard text-5xl md:text-8xl text-red-600 font-bold">OF</p>
      </div>

      {/* Horizontal Line with Logo */}
      <div className=" w-full flex items-center md:w-full md:pl-1">
        <div className=" flex-grow border-t-4 border-black md:pl-20 pl-10"></div>
        <div className="mx-4 ">
          <img
            className="md:w-[770px]  object-contain md:h-20"
            src={logo2}
            alt="Design element 2"
          />
        </div>
        <div className="flex-grow border-t-4 border-black w-screen"></div>
      </div>
    </div>
  );
};

export default Highlights_title;
