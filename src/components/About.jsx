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
    { number: "3",  text:  "Events"},
    { number: "25", text: "Speakers" },
    { number: "50", text: "Community Members" },
    { number: "20", text: "Active Members" },
  ];

  return (
    <div id="about" className="flex flex-col lg:flex-row w-full min-h-screen lg:h-screen border-[#161616] border-2 overflow-hidden" >
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full h-full lg:min-h-screen">
        {/* Left Section */}
        <div className="  w-full bg-[#161616] flex-1 gap-7 h-full  items-start px-10 sm:pl-16 lg:pl-28  lg:px-4 min-h-screen pb-20 
         lg:mb-0 overflow-hidden">
          <div className="flex flex-col gap-4 lg:mt-4 items-center lg:items-start ">
            <div className="mb-4 text-8xl sm:text-8xl lg:text-9xl text-[#fafafa] font-vanguard leading-tight lg:leading-[148px] font-extrabold">
              ABOUT
            </div>
            <p className="w-full max-w-[100%] md:max-w-[630px] text-lg md:text-3xl text-[#fafafa] max-h-screen md:max-h-full font-avantgarde leading-[1.8rem] sm:leading-[2.2rem] tracking-wide text-center lg:text-left">
              TEDxCET is a locally organised independently run event. Rooted in the spirit of TED’s mission, it brings together thought leaders, innovators, and changemakers to share ideas worth spreading.
              At our illustrious event “ The Millenium” on 23rd February 2019, we curated a lineup of dynamic speakers such as Manju Sara Rajan, Sumesh Mangalassey, Nkihiya Shamsher,  Sreejesh Nair, Valmakry and P Radhakrishnan.
              Our next step was a “Paradigm Shift”. On May 6, 2023, we witnessed the remarkable and intriguing summit of distinctive personalities like Dr. Sulphi Noohu , Anjana Gopakumar, Neeraj Madhav ,Shubhi Agarwal and Manoj Raghavan.
              Let’s look forward to 8th March 2024, as we celebrate the power of storytelling with the theme "Butterfly Effect".

            </p>
          </div>
        </div>
        {/* Middle Section */}
        <div className="flex flex-col lg:flex-row w-[100%] lg:w-[5vw] h-[80px] lg:h-[100vh] items-center justify-center  ">
          <div className="w-[100%] lg:w-[15vw] lg:min-h-full flex-1 flex flex-shrink-0  bg-[#161616] border-[#fafafa] border-t-2 lg:border-l-2 lg:border-t-0 overflow-hidden items-center justify-center">
            <ScrollingText className="lg:min-w-screen  lg:transform flex-shrink-0 lg:-rotate-90 min-h-full " dark direction="left" />
          </div>
          <div className="w-[100%] lg:w-[15vw] lg:min-h-full flex-1 flex  flex-shrink-0 border-[#161616] bg-[#fafafa] border-b-2 lg:border-r-2 lg:border-b-0 overflow-hidden items-center justify-center">
            <ScrollingText className="lg:min-w-screen  lg:transform lg:-rotate-90 flex-shrink-0 lg:h-full" direction="right" />
          </div>
        </div>
        {/* Right Section (Stats) */}
        <div className="flex-1 h-full items-center justify-center p-6 lg:p-14 bg-[#FAFAFA]">
          <div className="flex flex-col items-center justify-center w-full max-w-[600px] gap-5 md:gap-1">
          {/* <div className="flex flex-col items-end justify-center md:h-[200px] h-[200px] ">
                    <span className=" pr-20 mr-12 text-[100px] h-[100px] md:h-[200px] md:mr-12 md:pr-20 md:text-[300px] sm:text-[120px] lg:text-[100px] font-sans font-extrabold leading-none bg-gradient-to-b from-[#E31C25] to-[#BB000E] bg-clip-text text-transparent">
                      4
                    </span>
                    <span className="pr-20 mr-10 md:pr-20 md:mr-5 text-[40px] sm:text-[50px] lg:text-[60px] text-[#161616] font-vanguard font-medium text-center whitespace-nowrap mt-[-10px] lg:mt-[-20px]">Events</span>
                    <div className="w-full max-w-[292px] my-2 lg:my-4">
                    <img src={line1 || "/placeholder.svg"} alt="Divider" className="w-full h-[2px]" />
                  </div>
                    </div> */}
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