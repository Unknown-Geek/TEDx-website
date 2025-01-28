import React from 'react';
import Lottie from 'lottie-react';
import dateLottie from '/public/assets/Date Lottie.json';
import image535 from '/public/assets/image 535.png';
import image536 from '/public/assets/image 536.png';
import butterflyEffect from '/public/assets/Butterfly-Effect.svg';

const Home = () => {
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
            <button key={item} className="px-6 py-1 border border-[#161616] rounded-[20px] text-[#161616] text-[29px] font-avantgarde">
              {item}
            </button>
          ))}
          <button className="px-6 py-1 bg-[#BB000E] border border-[#161616] rounded-[20px] text-[#FAFAFA] text-[29px] font-avantgarde">
            Book Tickets
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="mb-8">
        <div className="bg-[#161616] rounded-[20px] px-8 relative">
          <div className="relative h-[288px]">
            <img 
              src={butterflyEffect}
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
        <div className="border-2 border-[#161616] rounded-[20px] overflow-hidden relative flex items-center justify-center">
          <img 
            className="w-[375px] h-[375px] mx-auto mt-7 mix-blend-darken" 
            src={image535}
            alt="Design element 1" 
          />
          <img 
            className="w-[375px] h-[375px] mx-auto mt-7 opacity-50 mix-blend-multiply absolute" 
            src={image536}
            alt="Design element 2" 
          />
        </div>

        {/* Right Panel */}
        <div className="border-2 border-[#161616] rounded-[20px] flex flex-col gap-6 p-6">
          {/* Book Tickets Button */}
          <button className="w-full bg-[#BB000E] text-[#FAFAFA] text-[47px] font-avantgarde p-4 rounded-[20px] border-3 border-[#161616] shadow-[inset_0px_0px_14px_rgba(227,28,37,0.60)]">
            BOOK TICKETS
          </button>

          {/* Date Display */}
          <div className="bg-[#161616] rounded-[20px] h-[297px] flex justify-center items-center">
            <Lottie 
              animationData={dateLottie}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;