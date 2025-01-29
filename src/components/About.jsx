import React from "react";

import line1 from "/assets/line2.svg";
import line2 from "/assets/line2.svg";
import line3 from "/assets/line2.svg";
import PropTypes from "prop-types";

import "../styles/ScrollingText.css";

export const ScrollingText = ({ className, no, direction = "up" }) => {
  return (
    <div
      className={`relative w-[1024px] h-[35px] overflow-hidden ${className}`}
    >
      <p
        className={`absolute text-[29px] ${
          no ? "text-[#fafafa]" : "text-[#161616]"
        } font-avantgarde leading-[35px] whitespace-nowrap  ${
          direction === "up" ? "animate-scroll-left" : "animate-scroll-left"
        }`}
      >
        TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx
        CET - TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx CET -
        TEDx CET - TEDx CET - TEDx CET -
      </p>
    </div>
  );
};

ScrollingText.propTypes = {
  className: PropTypes.string,
  no: PropTypes.bool,
  direction: PropTypes.oneOf(["up", "down"]),
};

export const About = () => {
  return (
    <div className="relative w-[1440px] h-[1024px]">
      <div className="absolute left-0 top-[-7px] w-[765px] h-[1031px]">
        <div className="relative h-[1031px] overflow-hidden">
          <div className="absolute left-0 top-[7px] w-[720px] h-[1024px] bg-[#161616]" />
          <div className="absolute left-[102px] top-[25px] text-[123px] text-[#fafafa] font-vanguard leading-[148px] font-extrabold font-weight-700">
            ABOUT
          </div>
          <ScrollingText
            className="absolute left-[179px] top-[494px] transform -rotate-90"
            property1="frame-2"
            no={true}
            direction="up"
          />

          <p className="absolute left-[102px] top-[223px] w-[510px] text-[29px] text-[#fafafa] font-avantgarde leading-[35px] tracking-[0.87px]">
            TEDxCUSAT is a dynamic platform where the brightest minds of Cochin
            University of Science And Technology come together to share ideas
            that have the power to inspire meaningful change. This year's event,
            centered around the theme "Kaleidoscope: Alchemy of Voices," offers
            a blend of live talks and curated videos designed to spark
            thought-provoking conversations. TEDxCUSAT goes beyond the
            traditional format of talks; it's about creating a space where ideas
            can be transformed into actions that lead to real-world impact. Our
            goal is to make these ideas accessible and to inspire our community
            to turn them into catalysts for positive change.
          </p>
          <ScrollingText
            className="absolute left-[230px] top-[468px] transform rotate-90"
            property1="frame-2"
            no={false}
            direction="down"
          />
        </div>
      </div>

      <div className="absolute left-[829px] top-[55px] w-[449px] h-[914px]">
        <div className="absolute left-[174px] top-[-38px] w-[142px] h-[207px]">
          <div className="absolute left-[23px] top-0 w-[111px] h-[148px]">
            <div className="absolute left-0 top-0 text-9xl font-vanguard font-extrabold  leading-[148px] bg-gradient-to-b from-[#E31C25] to-[#BB000E] bg-clip-text text-transparent">
              5
            </div>
            <div className="absolute left-[59px] top-[33px] text-[80px] text-[#161616] font-extrabold font-Helvetica Compressed text-center">
              +
            </div>
          </div>
          <div className="absolute left-0 top-[116px] text-[76px] text-[#161616] font-vanguard font-medium text-center whitespace-nowrap">
            Events
          </div>
        </div>

        <div className="absolute left-[142px] top-[210px] w-[198px] h-[207px]">
          <div className="absolute left-[29px] top-0 w-[163px] h-[148px]">
            <div className="absolute left-0 top-0 text-9xl font-vanguard font-extrabold leading-[148px] bg-gradient-to-b from-[#E31C25] to-[#BB000E] bg-clip-text text-transparent">
              50
            </div>
            <div className="absolute left-[111px] top-[33px] text-[80px] text-[#161616] font-extrabold font-Helvetica Compressed text-center">
              +
            </div>
          </div>
          <div className="absolute left-0 top-[116px] text-[76px] text-[#161616] font-vanguard font-medium  text-center whitespace-nowrap">
            Speakers
          </div>
        </div>

        <div className="absolute left-[81px] top-[458px] w-[346px] h-[207px]">
          <div className="absolute left-[70px] top-0 w-[202px] h-[148px]">
            <div className="absolute left-0 top-0 text-9xl text-center font-vanguard font-extrabold leading-[148px] bg-gradient-to-b from-[#E31C25] to-[#BB000E] bg-clip-text text-transparent">
              100
            </div>
            <div className="absolute left-[150px] top-[32px] text-[80px] text-[#161616] font-extrabold font-Helvetica Compressed text-center">
              +
            </div>
          </div>
          <div className="absolute left-0 top-[132px] text-[76px] text-[#161616] font-vanguard font-medium  leading-[75px] text-center whitespace-nowrap">
            Active Members
          </div>
        </div>

        <div className="absolute left-[29px] top-[706px] w-[449px] h-[207px]">
          <div className="absolute left-[141px] top-0 w-[164px] h-[148px]">
            <div className="absolute left-0 top-0 text-9xl font-vanguard font-extrabold leading-[148px] bg-gradient-to-b from-[#E31C25] to-[#BB000E] bg-clip-text text-transparent">
              50
            </div>
            <div className="absolute left-[112px] top-[33px] text-[80px] text-[#161616]  font-extrabold font-Helvetica Compressed text-center">
              +
            </div>
          </div>
          <div className="absolute left-0 top-[132px] text-7xl font-medium text-[#161616] font-vanguard  leading-[75px] text-center whitespace-nowrap">
            Community Members
          </div>
        </div>

        <img
          className="absolute left-[108px] top-[202px] w-[292px] h-[2px]"
          alt="Line"
          src={line1 || "/placeholder.svg"}
        />
        <img
          className="absolute left-[108px] top-[450px] w-[292px] h-[2px]"
          alt="Line"
          src={line2 || "/placeholder.svg"}
        />
        <img
          className="absolute left-[108px] top-[704px] w-[292px] h-[2px]"
          alt="Line"
          src={line3 || "/placeholder.svg"}
        />
      </div>
    </div>
  );
};
