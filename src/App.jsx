import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
function App() {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="container mx-auto p-4">
      {/* Navigation */}
      <nav className="flex justify-between items-center gap-6 mb-8">
        <div className="flex items-center">
          <span className="text-[#E31C25] text-[47px] font-vanguard font-bold">TED</span>
          <span className="text-[#161616] text-[47px] font-vanguard font-bold">x CET</span>
        </div>
        <div className="flex gap-4">
          {['About', 'Speakers', 'Team', 'Contact'].map((item) => (
            <button key={item} className="px-6 py-2 border border-[#161616] rounded-[20px] text-[#161616] text-[29px] font-avantgarde">
              {item}
            </button>
          ))}
          <button className="px-6 py-2 bg-[#BB000E] border border-[#161616] rounded-[20px] text-[#FAFAFA] text-[29px] font-avantgarde">
            Book Tickets 
            
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="mb-8">
        <div className="bg-[#161616] rounded-[20px] px-8 relative">
          <div className="relative h-[288px]">
            <img 
              src="src/assets/Butterfly-Effect.svg" 
              alt="Butterfly Effect"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left Panel */}
        <div className="border-2 border-[#161616] rounded-[20px] p-12" />

        {/* Center Panel */}
        <div className="border-2 border-[#161616] rounded-[20px] overflow-hidden relative">
          <img className="w-[375px] h-[375px] mx-auto mt-7 mix-blend-darken" src="src\assets\image 535.png" alt="" />
          <img className="w-[375px] h-[375px] mx-auto mt-7 opacity-50 mix-blend-multiply absolute top-0" src="src\assets\image 536.png" alt="" />
        </div>

        {/* Right Panel */}
        <div className="border-2 border-[#161616] rounded-[20px] flex flex-col gap-6 p-6">
          {/* Book Tickets Button */}
          <button className={`border-[3px] flex items-center justify-center w-full bg-[#BB000E] text-[#FAFAFA] text-[47px] font-avantgarde p-6 rounded-[20px] 
          ${isHovered
            ? "bg-white text-black  border-[#BB000E]  shadow-[inset_0px_0px_14px_rgba(0,0,0,0.6)]"
            : "bg-[#BB000E] text-[#FAFAFA] border-[#161616] shadow-[inset_0px_0px_14px_rgba(227,28,37,0.60)]"
        }`}
            onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} >
            BOOK TICKETS
            <ArrowUpRight
        className={`w-12 h-12 transition-all duration-300 ease-in-out ${isHovered ? "rotate-45" : "rotate-22"}`}
      />
           
          </button>

          {/* Date Display */}
          <div className="bg-[#161616] rounded-[20px] p-8 text-[#FAFAFA] h-[297px] flex justify-center items-center gap-8 relative">
            <div className="flex flex-col gap-3.5 -mt-4">
              <div className="text-[200px] font-vanguard font-black tracking-[4px] leading-[0.85]">25</div>
              <div className="text-right text-[123px] font-vanguard font-black leading-none">JAN</div>
            </div>
            <div className="w-[257px] h-0 rotate-90 origin-top-left border-t-[5px] border-[#FAFAFA] translate-y-[40px] translate-x-[40px]" />
            <span className="rotate-90 origin-top-left text-[76px] font-microgramma font-bold translate-y-[40px] translate-x-[40px]">2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
