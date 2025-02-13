import React from "react";
import SocialIcons from "./SocialIcons";
import GoogleMapReact from 'google-map-react';
import { Copyright } from 'lucide-react'
import {ScrollingText} from './About'
import "../styles/ScrollingText.css";
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
    <div className=" w-screen h-full">  
        <div className="border-y-2 border-[#161616] overflow-hidden h-10 ">
        <ScrollingText className="w-full h-full overflow-hidden" direction="right" />
        </div>

      <div className="gap-20 w-[330px] pt-20 flex flex-col space-y-4 lg:flex-row lg:justify-center lg:items-center lg:gap-20 lg:w-[1536px] lg:h-[433px] lg:left-[152px] lg:top-[91px] mx-auto ">
        
        <div className=" flex flex-col justify-center items-center  h[400px] lg:w-full lg:h-[484px] rounded-[20px] overflow-hidden border-2 border-[#161616]">
          <div className="lg:flex lg:flex-col flex flex-col">
          <div className="h-[150px] pl-2 pt-3 lg:mb-2  lg:w-[400px] lg:h-[160px] text-center text-[#E31C25] text-[113px] font-bold font-vanguard overflow-hidden ">
            CONNECT
          </div>
          <div className="pl-2 h-[160px] lg:-mt-10  text-center text text-[#161616] text-[76px] font-bold font-[Vanguard] lg:h-[160px] ">
            WITH US ON
          </div>
          </div>
          <div className="justify-center items-center  pr-7 flex  gap-12 left-[23px] top-[400px] pl-8 pt-5 ">
            <SocialIcons />
          </div>
        </div>

        <div className=" w-full h-[484px] rounded-[20px] overflow-hidden bg-[#161616] border-2 border-[#161616]">
          <div className=" h-[120px] text-center text-[#E31C25] text-[80px] font-semibold font-[Vanguard] pt-8 justify-center items-center">
            QUESTIONS?  
          </div>
          <div className=" pt-1 text-center text-[#FAFAFA] text-[47px] font-semibold font-vanguard">
            WE<span className="font-bold font-avantgarde">'</span>RE HERE TO HELP<span className="font-bold font-avantgarde">!</span>
          </div>
          <div className=" pl-6 left-[46px] top-[229px] text-[#FAFAFA] text-[29px] font-bold font-[Microgramma]">
            AKHILJITH -
          </div>
          <div className=" left-[87px] top-[265px] text-right text-[#FAFAFA] text-[29px] font-bold font-[Microgramma]">
             <span className="pr-25 lg:pr-20 text-[#E31C25]">7907982102</span>
          </div>
          <div className="pl-6 left-[46px] top-[309px] text-[#FAFAFA] text-[29px] font-bold font-[Microgramma]">
            EPHREM -
          </div>
         
          <div className=" left-[90px] top-[338px] text-right text-[#FAFAFA] text-[29px] font-bold font-[Microgramma]">
            <span className="pr-30 lg:pr-20 text-[#E31C25]">9447434346</span>
          </div>
        </div>

        <div className=" w-full h-[484px] rounded-[20px] overflow-hidden border-2 border-[#161616] flex flex-col justify-start items-center">
          <GoogleMapReact 
            defaultCenter={{ lat: 8.545884830720146, lng: 76.90634321026491 }} 
            defaultZoom={11} 
            bootstrapURLKeys={{ key: "AIzaSyC8Nk_5APibqxRWHClK0-xBMrCxqWrGIws" }}
          />
        </div>
      </div>


      <div className=" h-[90px] w-screen border-1 border-[#161616] top-[15px]"></div>

        <div className="border-y-2 border-[#161616] overflow-hidden h-10 ">
             <ScrollingText className="w-full h-full overflow-hidden" direction="left" />
        </div>           
      <div className=" justify-center items-center *:p-35 h-[100px] pt-5">
        <div className="justify-center items-center left-[45px] top-[2px] flex flex-row">
           <Copyright className="w-10 h-16 " />
          <div className="text-[#E31C25] text-6xl font-bold font-[Vanguard] pl-4">TED</div>
          <div className="text-[#161616] text-6xl font-bold font-[Vanguard]">x CET</div>
        </div>
             
      </div>
    </div>
  );
};

export default Footer;