import React from "react";
import line1 from "/assets/line2.svg";
import "../styles/ScrollingText.css";

export const ScrollingText = ({ className = "", dark = false, direction = "left" }) => {
  const text = "TEDx CET - ";
  const repeatedText = Array(40).fill(text).join(" "); // Ensure it's long enough

  return (
    <div className={`scrolling-text-container ${className}`}>
      <div
        className={`scrolling-text ${dark ? "text-[#fafafa]" : "text-[#161616]"} ${direction}`}
        data-text={repeatedText}
      >
        {repeatedText}
        {repeatedText}
        {repeatedText}
         {/* Render text multiple times to prevent gaps */}
      </div>
    </div>
  );
};

export const About = () => {
  const stats = [
    { number: "5", text: "Events" },
    { number: "50", text: "Speakers" },
    { number: "100", text: "Active Members" },
    { number: "50", text: "Community Members" },
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen border-[#161616] border-2 overflow-hidden" >
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full h-full lg:min-h-screen">
        {/* Left Section */}
        <div className="  w-full bg-[#161616] flex-1 gap-7  items-start px-10 sm:pl-16 lg:pl-28   min-h-screen pb-20
         lg:mb-0 overflow-hidden">
          <div className="flex flex-col gap-4 lg:mt-4 items-center lg:items-start ">
            <div className="mb-4 text-8xl sm:text-8xl lg:text-9xl text-[#fafafa] font-vanguard leading-tight lg:leading-[148px] font-extrabold">
              ABOUT
            </div>
            <p className="w-full max-w-[99%] md:max-w-[510px] text-xl md:text-3xl text-[#fafafa] font-avantgarde leading-[1.8rem] sm:leading-[2.2rem] tracking-wide text-center lg:text-left">
              TEDxCUSAT is a dynamic platform where the brightest minds of Cochin University of Science And Technology
              come together to share ideas that have the power to inspire meaningful change. This year's event, centered
              around the theme "Kaleidoscope: Alchemy of Voices," offers a blend of live talks and curated videos
              designed to spark thought-provoking conversations. TEDxCUSAT goes beyond the traditional format of talks;
              it’s about creating a space where ideas can be transformed into actions that lead to real-world impact. Our
              goal is to make these ideas accessible and to inspire our community to turn them into catalysts for
              positive change.
            </p>
          </div>
        </div>
        {/* Middle Section */}
        <div className="flex flex-col lg:flex-row w-[100%] lg:w-20 h-[80px] lg:h-screen items-center justify-center flex-shrink-0">
          <div className="w-[100%] lg:w-[15%] lg:min-h-screen flex-1 flex  bg-[#161616] border-[#fafafa] border-t-2 lg:border-l-2 lg:border-t-0 overflow-hidden items-center justify-center">
            <ScrollingText className="lg:min-w-screen  lg:transform lg:-rotate-90 " dark direction="left" />
          </div>
          <div className="w-[100%] lg:w-[15%] lg:h-screen flex-1 flex border-[#161616] bg-[#fafafa] border-b-2 lg:border-r-2 lg:border-b-0 overflow-hidden items-center justify-center">
            <ScrollingText className="lg:min-w-screen  lg:transform lg:-rotate-90 " direction="right" />
          </div>
        </div>
        {/* Right Section (Stats) */}
        <div className="flex-1 items-center justify-center p-6 lg:p-14 bg-[#FAFAFA]">
          <div className="flex flex-col items-center justify-center w-full max-w-[600px] gap-4 lg:gap-4">
            {stats.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-end justify-center">
                    <span className="text-[100px] sm:text-[120px] lg:text-[100px] font-vanguard font-extrabold leading-none bg-gradient-to-b from-[#E31C25] to-[#BB000E] bg-clip-text text-transparent">
                      {stat.number}
                    </span>
                    <span className="text-[50px] sm:text-[70px] lg:text-[80px] text-[#161616] mb-4 lg:mb-5 font-extrabold font-['Helvetica Compressed'] leading-none pl-1">
                      +
                    </span>
                  </div>
                  <span className="text-[40px] sm:text-[50px] lg:text-[60px] text-[#161616] font-vanguard font-medium text-center whitespace-nowrap mt-[-10px] lg:mt-[-20px]">
                    {stat.text}
                  </span>
                </div>
                {index < stats.length - 1 && (
                  <div className="w-full max-w-[292px] my-2 lg:my-4">
                    <img src={line1 || "/placeholder.svg"} alt="Divider" className="w-full h-[2px]" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};