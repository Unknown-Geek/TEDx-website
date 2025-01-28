import React, { useState, useEffect } from 'react';

// Configure event date - Using Date object directly for better timezone handling
const EVENT_DATE = new Date(2025, 2, 2, 9, 0, 0); // March 2nd, 2025, 9:00 AM

const TimerUnit = ({ value, label }) => (
  <div className="p-2 flex flex-col justify-center items-center">
    <div className="text-[123px] font-microgramma font-bold text-[#161616] leading-[75px]">
      {value.toString().padStart(2, '0')}
    </div>
    <div className="text-[47px] font-vanguard font-normal text-[#161616] leading-[75px] tracking-[2.35px]">
      {label}
    </div>
  </div>
);

const Separator = () => (
  <div className="p-2 flex flex-col justify-center items-center">
    <div className="text-[123px] font-['Uncut_Sans_VF'] font-bold text-[#E31C25] leading-[75px]">:</div>
    <div className="text-[29px] font-avantgarde font-medium text-[#E31C25] leading-[75px]">&nbsp;</div>
  </div>
);

const HurryUpAnimation = () => {
  const [isFirstImage, setIsFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstImage(prev => !prev);
    }, 500); // image transition time

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[123px] flex justify-center ">
      <img
        src="../public/assets/Hurry Up 1.svg"
        alt="Hurry Up"

        className={`absolute  h-full object-contain transition-all duration-200 ease-in-out ${
          isFirstImage ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <img
        src="../public/assets/Hurry Up 2.svg"
        alt="Hurry Up"
        className={`absolute  h-full object-contain transition-all duration-200 ease-in-out ${
          !isFirstImage ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

const Countdown = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = EVENT_DATE - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto pt-20 px-10">
        {/* Countdown Timer */}
      <div className="w-full pt-[29px] px-2 mb-8 bg-[rgba(250,250,250,0.50)] rounded-[20px] border-[5px] border-[#E31C25] backdrop-blur-[6.4px] flex justify-center items-center gap-2">
        <TimerUnit value={timeLeft.days} label="Days" />
        <Separator />
        <TimerUnit value={timeLeft.hours} label="Hours" />
        <Separator />
        <TimerUnit value={timeLeft.minutes} label="Minutes" />
        <Separator />
        <TimerUnit value={timeLeft.seconds} label="Seconds" />
      </div>
      
      {/* Hurry Up Text Row */}
      <div className="flex justify-center items-center -mt-4 pt-5">
        <HurryUpAnimation />
      </div>
    </div>
  );
};

export default Countdown;