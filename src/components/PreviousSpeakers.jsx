import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import image from "/public/assets/previousSpeaker.png";

const cards = [
  {
    id: 1,
    name: "NEERAJ MADHAV",
    occupation: "Actor, Musician",
    image: "/api/placeholder/400/300"
  },
  {
    id: 2,
    name: "SARAH JOHNSON",
    occupation: "Climate Scientist",
    image: "/api/placeholder/400/300"
  },
  {
    id: 3,
    name: "MICHAEL CHEN",
    occupation: "Social Entrepreneur",
    image: "/api/placeholder/400/300"
  },
  {
    id: 4,
    name: "PRIYA PATEL",
    occupation: "AI Researcher",
    image: "/api/placeholder/400/300"
  },
  {
    id: 5,
    name: "DAVID WILSON",
    occupation: "Healthcare Pioneer",
    image: "/api/placeholder/400/300"
  },
  {
    id: 6,
    name: "MARIA GARCIA",
    occupation: "Education Reformer",
    image: "/api/placeholder/400/300"
  }
];

const PreviousSpeakers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const [cardsPerView, setCardsPerView] = useState(3);

 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { 
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) { 
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

   
    handleResize();

   
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const totalSlides = cards.length - cardsPerView + 1;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-8 bg-white flex items-center justify-center w-full">
      <div className="relative w-full max-w-[1400px] mx-auto px-4 lg:px-12">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-40 
                   w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg 
                   flex items-center justify-center
                   hover:bg-gray-50 transition-colors
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" />
        </button>

        {/* Cards Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out gap-4"
            style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="min-w-[calc(100%-16px)] sm:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-16px)] flex-shrink-0"
              >
                <div className="flex flex-col items-center bg-white rounded-lg overflow-hidden border-[2px] border-red-500 ">
                  <div className="relative h-[300px]">
                    <img
                      src={image}
                      alt={card.name}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-4xl font-semibold md:text-5xl text-gray-900 font-vanguard  mb-2 text-center">
                      {card.name}
                    </h4>
                    <h3 className="font-vanguard text-2xl md:text-3xl text-red-500 font-semibold text-center">
                      {card.occupation}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-40 
                   w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg 
                   flex items-center justify-center
                   hover:bg-gray-50 transition-colors
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" />
        </button>

        {/* Dots indicator */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors
                        ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-400'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviousSpeakers;