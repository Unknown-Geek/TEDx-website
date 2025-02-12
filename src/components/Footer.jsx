import React from "react";
import SocialIcons from "./SocialIcons";
import GoogleMapReact from 'google-map-react';
import { Copyright } from 'lucide-react'

// Use it in your component
 // This will make it 40x40px to match your SVG
const SocialIcon = ({ children }) => (
  <div
    style={{
      width: 60,
      height: 62,
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
    <div className="w-full h-full relative ">
      <div className="absolute flex justify-center items-center gap-14 w-[1236px] h-[433px] left-[152px] top-[91px]">
        <div className="relative w-[378px] h-[434px] rounded-[20px] overflow-hidden border-2 border-[#161616]">
          <div className="absolute w-[349px] left-[16px] top-[30px] text-center text-[#E31C25] text-[123px] font-bold font-[Vanguard] ">
            CONNECT
          </div>
          <div className="absolute left-[49px] top-[160px] text-center text-[#161616] text-[76px] font-bold font-[Vanguard] ">
            WITH US ON
          </div>
          <div className="absolute flex justify-start items-center gap-6 left-[23px] top-[300px] p-2">
            <SocialIcons />
          </div>
        </div>

        <div className="relative w-[378px] h-[434px] rounded-[20px] overflow-hidden bg-[#161616] border-2 border-[#161616]">
          <div className="absolute w-[289px] left-[46px] top-[50px] text-center text-[#E31C25] text-[80px] font-semibold font-[Vanguard]">
            QUESTIONS?
          </div>
          <div className="absolute left-[50px] top-[144px] text-center text-[#FAFAFA] text-[47px] font-semibold font-vanguard">
            WE<span className="font-bold font-avantgarde">'</span>RE HERE TO HELP<span className="font-bold font-avantgarde">!</span>
          </div>
          <div className="absolute left-[46px] top-[229px] text-[#FAFAFA] text-[29px] font-bold font-[Microgramma]">
            AKHILJITH -
          </div>
          <div className="absolute left-[46px] top-[309px] text-[#FAFAFA] text-[29px] font-bold font-[Microgramma]">
            EPHREM -
          </div>
          <div className="absolute left-[87px] top-[265px] text-right text-[#FAFAFA] text-[29px] font-bold font-[Microgramma]">
             <span className="text-[#E31C25]">7907982102</span>
          </div>
          <div className="absolute left-[90px] top-[338px] text-right text-[#FAFAFA] text-[29px] font-bold font-[Microgramma]">
            <span className="text-[#E31C25]">9447434346</span>
          </div>
        </div>

        <div className="relative w-[378px] h-[434px] rounded-[20px] overflow-hidden border-2 border-[#161616] flex flex-col justify-start items-center">
          <GoogleMapReact 
            defaultCenter={{ lat: 8.545884830720146, lng: 76.90634321026491 }} 
            defaultZoom={11} 
            bootstrapURLKeys={{ key: "AIzaSyC8Nk_5APibqxRWHClK0-xBMrCxqWrGIws" }}
          />
        </div>
      </div>

      <div className="relative left-[607px] top-[615px]">
        <div className=" left-[45px] top-[2px] flex flex-row">
           <Copyright className="w-10 h-16" />
          <div className="text-[#E31C25] text-6xl font-bold font-[Vanguard] pl-4">TED</div>
          <div className="text-[#161616] text-6xl font-bold font-[Vanguard]">x CET</div>
        </div>
       
      </div>

      <div className="absolute w-screen border-2 border-[#161616] top-[597px]"></div>
      <div className="absolute w-screen border-2 border-[#161616] top-[549px]"></div>

      <div className="absolute w-[1440px] h-[35px] left-0 top-[22px] flex justify-start items-center">
        <div className="pl-10 text-[#161616] text-[29px] font-[AvantGarde] font-light">
          - TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx CET -
        </div>
      </div>
      <div className="absolute w-screen border-2 border-[#161616] top-[66px]"></div>
      <div className="absolute w-screen border-2 border-[#161616] top-[15px]"></div>

      <div className="absolute w-[1440px] h-[35px] left-0 top-[555px] flex justify-end items-center">
        <div className="text-[#161616] text-[29px] font-[AvantGarde] font-light">
          - TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx CET -
        </div>
      </div>
    </div>
  );
};

export default Footer;