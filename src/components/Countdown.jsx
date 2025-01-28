import React, { useState, useEffect } from 'react';

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

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 35,
    hours: 8,
    minutes: 22,
    seconds: 46
  });

  useEffect(() => {
    const timer = setInterval(() => {
      // Add countdown logic here
    }, 1000);
    return () => clearInterval(timer);
  }, []);

return (
    <div className="container mx-auto p-4">
        {/* Countdown Timer */}
      <div className="w-full pt-[29px] px-2 mb-16 bg-[rgba(250,250,250,0.50)] rounded-[20px] border-[5px] border-[#E31C25] backdrop-blur-[6.4px] flex justify-center items-center gap-2">
        <TimerUnit value={timeLeft.days} label="Days" />
        <Separator />
        <TimerUnit value={timeLeft.hours} label="Hours" />
        <Separator />
        <TimerUnit value={timeLeft.minutes} label="Minutes" />
        <Separator />
        <TimerUnit value={timeLeft.seconds} label="Seconds" />
      </div>
      
      {/* Hurry Up Text Row */}
      <div className="w-full flex justify-center items-center gap-1">
        <img src="/assets/Hurry Up 1.svg" alt="Hurry Up" className="h-[123px]" />
      </div>
    </div>
  );
};

export default Countdown;