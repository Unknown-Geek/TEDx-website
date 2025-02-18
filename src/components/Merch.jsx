import { useState } from "react"
import { ArrowRight, Home } from "lucide-react"
import { ScrollingText } from "./About"
import "../styles/ScrollingText.css"
import tedx from "/public/assets/tedx.svg"
import b1 from "/public/assets/butterfly-1.png"
import b2 from "/public/assets/butterfly-2.png"
import gradient from "/public/assets/grabyou.png"
import ts from "/public/assets/tshirt.mp4"
import { useNavigate } from "react-router-dom"

export default function Merch() {
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="w-screen h-screen bg-black overflow-hidden text-[#fafafa] font-vanguard">
      <div className="flex flex-col lg:flex-row overflow-hidden space-y-10 h-full">
        <div className="pt-10 flex flex-col gap-10 items-start px-6 md:px-28 max-w-[550px]">
          <button
            onClick={() => navigate("/", { state: { fromMerch: true } })}
            className="rounded-[10.39px] border border-[#e31c25] flex items-center gap-[5.5px] px-3 py-1.5 text-[20.08px] font-avantgarde hover:bg-[#e31c25] hover:text-white transition-colors duration-200"
          >
            <Home className="w-[12.5px] h-[12.5px]" />
            <span>Home</span>
          </button>

          <div className="pt-20">
            <img src={tedx || "/placeholder.svg"} alt="tedx" className="max-w-[200px] md:max-w-none" />
          </div>

          <div className="flex flex-col tracking-[-0.03em] leading-[0.87] text-[60px] md:text-[90px] lg:text-[123px] font-bold">
            <p className="m-0">GRAB</p>
            <p className="m-0">YOUR</p>
            <p className="m-0">TEES</p>
            <p className="m-0">NOW</p>
          </div>

          <div className="relative w-full h-0">
            <img
              src={b1 || "/placeholder.svg"}
              alt="butterfly"
              className="absolute lg:-left-[6%] lg:top-[-400px] w-[15vw] max-w-[150px] min-w-[80px]"
            />
            <img
              src={b2 || "/placeholder.svg"}
              alt="butterfly"
              className="absolute top-[-120px] left-[15%] lg:top-[-120px] w-[12vw] max-w-[120px] min-w-[60px]"
            />
          </div>

          <button 
            className={`w-auto h-auto rounded-[15.26px] border-[2.3px] border-[#161616] shadow-[inset_0px_0px_10.84px_rgba(227,28,37,0.6)] overflow-hidden   
            ${
              isHovered
                ? "bg-white text-black border-[#BB000E] shadow-[inset_0px_0px_14px_rgba(0,0,0,0.6)]"
                : "bg-[#BB000E] text-[#FAFAFA] border-[#161616] shadow-[inset_0px_0px_14px_rgba(227,28,37,0.60)]"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex flex-row flex-nowrap items-center justify-center w-[300px] h-full px-[25.2px] py-2 text-[24px] md:text-[35.86px] font-avantgarde font-bold">
              <span>BUY NOW</span>
              <ArrowRight className={`w-[32px] h-[32px] md:w-[52.8px] md:h-[52.8px] ml-2 -rotate-45 transition-all duration-300 ease-in-out ${
                isHovered ? "rotate-1" : "-rotate-45"
              }`}/>
            </div>
          </button>
        </div>

        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="md:pl-44 pt-8 flex items-center justify-center w-full h-full">
            <video src={ts} autoPlay loop muted playsInline className="object-cover w-[500px]"></video>
          </div>
          <div className="overflow-hidden h-full object-fill mix-blend-lighten md:pl-40 -mt-60 md:-mt-80 flex items-center justify-center">
            <img src={gradient || "/placeholder.svg"} alt="gradient" className="w-full h-[800px] object-scale-down" />
          </div>
        </div>
      </div>

      <div className="w-full flex-1 flex h-10 flex-shrink-0 border-[#fafafa] border-b-2 border-t-2 overflow-hidden items-center justify-center -mt-36 md:-mt-0 md:absolute md:bottom-0">  
        <ScrollingText className="lg:min-w-screen flex-shrink-0 lg:h-full" dark direction="right" />
      </div>
    </div>
  )
}