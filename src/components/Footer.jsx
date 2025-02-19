import React from "react";
import SocialIcons from "./SocialIcons";
import GoogleMapReact from 'google-map-react';
import { Copyright } from 'lucide-react'
import { ScrollingText } from './About'
import "../styles/ScrollingText.css";
import logo2 from "/public/assets/Logo-Black.png"
// Use it in your component
// This will make it 40x40px to match your SVG
const SocialIcon = ({ children }) => (
  <div
    style={{
      width: 100,
      height: 102,
      padding: "9px 3px",
      background: "#FAFAFA",
      borderRadius: 10,
      overflow: "hidden",
      border: "1.50px #E31C25 solid",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >

    {children}
  </div>
);

const Footer = () => {
  return (
    <div id="contact" className=" w-screen h-full">
      <div className="border-y-2 border-[#161616] overflow-hidden h-10 ">
        <ScrollingText className="w-full h-full overflow-hidden" direction="right" />
      </div>

      <div className="md:gap-20 gap-10 w-[330px] pt-20 flex flex-col space-y-4 lg:flex-row lg:justify-center lg:items-center lg:gap-20 lg:w-[1536px] lg:h-[433px] lg:left-[152px] lg:top-[91px] mx-auto ">

        <div className=" flex flex-col justify-center items-center  h-[350px] lg:w-full lg:h-[484px] rounded-[20px] overflow-hidden border-2 border-[#161616]">
          <div className="lg:flex lg:flex-col flex flex-col">
            <div className="h-[110px] pl-2 pt-3 lg:mb-2  lg:w-[400px] lg:h-[180px] text-center text-[#E31C25] lg:text-[120px] text-[80px] font-bold font-vanguard overflow-hidden ">
              CONNECT
            </div>
            <div className="pl-2 h-[120px] lg:-mt-10  text-center text text-[#161616] text-[50px] md:text-[60px] font-bold font-[Vanguard] lg:h-[160px] ">
              WITH US ON
            </div>
          </div>
          <div className="justify-center items-center  pr-7 flex  gap-12 left-[23px] top-[400px] pl-8 pt-5 ">
            <SocialIcons />
          </div>
        </div>

        <div className=" w-full h-[350px] md:h-[484px] rounded-[20px] overflow-hidden bg-[#161616] border-2 border-[#161616]">
          <div className=" h-[100px] md:h-[130px] text-center text-[#E31C25] text-[60px] md:text-[80px] font-semibold font-[Vanguard] pt-8 justify-center items-center">
            QUESTIONS?
          </div>
          <div className="h-[60px] pt-1 text-center text-[#FAFAFA] text-[30px] md:text-[40px] font-semibold font-vanguard md:h-[100px]">
            WE<span className="font-bold font-avantgarde">'</span>RE HERE TO HELP<span className="font-bold font-avantgarde">!</span>
          </div>
          <div className="h-[25px] md:h-[50px] pl-16 left-[46px] top-[229px] text-[#FAFAFA] text-[19px] md:text-[29px] font-bold font-[Microgramma]">
            AKHILJITH -
          </div>
          <div className=" left-[87px] top-[265px] text-right text-[#FAFAFA] text-[19px] md:text-[29px] font-bold font-[Microgramma] h-[50px]">
            <span className="pr-20 lg:pr-20 text-[#E31C25] ">7907982102</span>
          </div>
          <div className="h-[25px] md:h-[50px] pl-16 left-[46px] text-[#FAFAFA] text-[19px] md:text-[29px] font-bold font-[Microgramma]">
            EPHREM -
          </div>

          <div className=" left-[90px] top-[338px] text-right text-[#FAFAFA] text-[19px] md:text-[29px] font-bold font-[Microgramma]">
            <span className="pr-20 lg:pr-20 text-[#E31C25]">9447434346</span>
          </div>
        </div>

        <div className=" w-full h-[350px] md:h-[484px] rounded-[20px] overflow-hidden border-2 border-[#161616] flex flex-col justify-start items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.5204101451295!2d76.90376577501328!3d8.545851291497474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bec79541c519%3A0x98324eb5aafb3778!2sCollege%20of%20Engineering%20Trivandrum%20(CET)!5e0!3m2!1sen!2sin!4v1739653118757!5m2!1sen!2sin"
            // width="480"
            // height="480"
            // style={{ border: 0 }}
            className=" md:h-[480px] md:w-[450px] border-0 h-[600px] w-[330px] "
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>


      <div className=" h-[90px] w-screen border-1 border-[#161616] top-[15px]"></div>

      <div className="border-y-2 border-[#161616] overflow-hidden h-10 ">
        <ScrollingText className="w-full h-full overflow-hidden" direction="left" />
      </div>
      <div className=" flex items-center justify-center  *:p-35 h-[100px] pt-5 text-3xl font-bold">
        ©<img
          className=" p-3 w-[170px] h-[50px]"
          src={logo2 || "/placeholder.svg"}
          alt="Design element 2"
        />


      </div>
    </div>
  );
};

export default Footer;