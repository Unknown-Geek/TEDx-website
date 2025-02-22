import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import image from "/public/assets/speaker-temp.svg"

// Keep the original testimonials array commented out for later use
// const testimonials = [ ... ];

// Temporary data structure
const temporaryTestimonials = Array(5).fill({
    id: 1,
    name: "COMING SOON",
    occupation: "Speaker Details",
    testimonial: "We're excited to announce our upcoming speakers. Stay tuned for updates on the incredible minds who will be sharing their ideas and stories on our stage."
});

const SpeakersList = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [direction, setDirection] = useState('up');

    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                moveSlider(direction);
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, direction, currentIndex]);

    const moveSlider = (newDirection) => {
        setDirection(newDirection);
        if (newDirection === 'up') {
            setCurrentIndex((prev) =>
                prev === temporaryTestimonials.length - 1 ? 0 : prev + 1
            );
        } else {
            setCurrentIndex((prev) =>
                prev === 0 ? temporaryTestimonials.length - 1 : prev - 1
            );
        }
    };

    const getSlidePosition = (index) => {
        const position = (index - currentIndex + temporaryTestimonials.length) % temporaryTestimonials.length;
        const baseClasses = 'absolute w-full flex max-w-5xl mx-auto bg-white p-4 md:p-6 rounded-lg shadow-lg transition-all duration-500 ease-in-out border-[2px] border-red-500 shadow-[0_0_18px_rgba(239,68,68,0.6)]';

        if (position === 0) {
            return `${baseClasses} translate-y-0 scale-100 opacity-100 z-20`;
        }
        if (position === 1) {
            return `${baseClasses} translate-y-32 md:translate-y-48 scale-95 opacity-60 z-10`;
        }
        if (position === temporaryTestimonials.length - 1) {
            return `${baseClasses} -translate-y-32 md:-translate-y-48 scale-95 opacity-60 z-10`;
        }
        return `${baseClasses} ${position < temporaryTestimonials.length / 2 ? 'translate-y-48' : '-translate-y-48'} scale-90 opacity-0 z-0`;
    };

    return (
        <div id="speakers" className="min-h-screen w-full flex items-center justify-center px-4 py-32 md:py-24 bg-[#161616]">
            <div className="relative w-full max-w-7xl mx-auto">
                {/* Navigation Buttons */}
                <button
                    onClick={() => {
                        setIsAutoPlaying(false);
                        moveSlider('down');
                    }}
                    className="absolute left-1/2 -translate-x-1/2 -top-16 z-30 
                     w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center
                     hover:bg-gray-100 transition-colors duration-500 hover:shadow-red-500/30"
                    aria-label="Previous testimonial"
                >
                    <ChevronUp className="w-5 h-5 md:w-6 md:h-6  text-[#28223f]" />
                </button>

                {/* Testimonials Container */}
                <div
                    className="relative h-[800px] md:h-[90vh] w-full max-w-5xl mx-auto flex items-center overflow-hidden"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(false)}
                >
                    {temporaryTestimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={getSlidePosition(index)}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                                {/* Left Section - Image and TEDx Speaker */}
                                <div className="flex flex-col items-center justify-center space-y-4">
                                    <div className="w-full max-w-md opacity-100">
                                        <img src={image} alt="Coming Soon" className="w-full h-auto  " />
                                    </div>
                                    <div className='flex-row hidden md:flex'><p className='font-vanguard text-4xl md:text-5xl text-red-600 font-medium'>TEDx</p><p className='font-vanguard text-4xl md:text-5xl text-black font-medium'>SPEAKER</p></div>
                                </div>

                                {/* Right Section - Name, Occupation, and Testimonial */}
                                <div className="flex flex-col justify-center space-y-6">
                                    <div className="space-y-2">
                                        <h4 className="text-3xl md:text-6xl lg:text-7xl text-gray-900 font-vanguard font-medium">
                                            {testimonial.name}
                                        </h4>
                                        <h3 className='font-vanguard text-2xl md:text-4xl text-red-500 font-medium'>
                                            {testimonial.occupation}
                                        </h3>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed avantgarde text-xs md:text-base lg:text-lg">
                                        {testimonial.testimonial}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => {
                        setIsAutoPlaying(false);
                        moveSlider('up');
                    }}
                    className="absolute left-1/2 -translate-x-1/2 z-30 -bottom-20
                     w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center
                     hover:bg-gray-100 transition-colors duration-300 hover:shadow-red-500/30"
                    aria-label="Next testimonial"
                >
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-[#28223f]" />
                </button>
            </div>
        </div>
    );
};

export default SpeakersList;