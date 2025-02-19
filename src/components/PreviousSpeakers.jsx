import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import image0 from "/public/assets/image0.webp";
import image1 from "/public/assets/image1.webp";
import image2 from "/public/assets/image2.webp";
import image3 from "/public/assets/image3.webp";
import image4 from "/public/assets/image4.webp";
import image5 from "/public/assets/image5.webp";
import image6 from "/public/assets/image6.webp";
import image7 from "/public/assets/image7.webp";
import image8 from "/public/assets/image8.webp";
import image9 from "/public/assets/image9.webp";
import image10 from "/public/assets/image10.webp";

const cards = [
  {
    id: 1,
    name: "NEERAJ MADHAV",
    image: image2,
    occupation: "ACTOR AND MUSICIAN",
    about: "Neeraj Madhav is a versatile artist who has made significant contributions to Indian cinema and music. Known for his compelling performances and musical talents, he has consistently pushed the boundaries of creative expression in South Indian entertainment."
  },
  {
    id: 2,
    name: "DR. SULPHI NOOHU",
    image: image0,
    occupation: "ENT SURGEON",
    about: "Dr. Sulphi Noohu, a distinguished EMT Surgeon, has been a tireless advocate for the rights and welfare of doctors and other healthcare workers. He has been associated with Indian Medical Association for more than 25 years. He has played a crucial role in coordinating relief efforts and providing medical assistance to those affected by pandemic. Outside his medical field, Dr.Noohu is a recognized writer and social media influencer, focusing on health related topics."
  },
  {
    id: 3,
    name: "ANJANA GOPAKUMAR",
    image: image1,
    occupation: "SOCIAL MEDIA INFLUENCER",
    about: "Michael Chen has revolutionized social enterprise in Southeast Asia, creating sustainable business models that address critical community needs. His initiatives have impacted over 100,000 lives across the region."
  },
  {
    id: 4,
    name: "SHUBHI AGARWAL ",
    image: image3,
    occupation: "CO FOUNDER AND CEO OF LOCOBUZZ",
    about: "Shubhi Agarwal is the co - founder and the chief operating officer of Locobuzz Solutions, which is an AI powered customer experience platform in India. She is one of the most respected and prominent figures within the Indian Startup Culture. With over 17 years of experience, she has been led many companies through diverse technological reforms, cementing themselves in the modern times. She has been recognized with several awards including the Women in Leadership Award at the World women Leadership Congress 2020."
  },
  {
    id: 5,
    name: "MANOJ RAGHAVAN",
    image: image4,
    occupation: "CEO AND MD, TATA ELXSI",
    about: "Manoj Raghavan is the current CEO and MD of Tata Elxsi. Tata Elxsi has been delivering cutting edge tech services to global companies for many years. Under his Leadership, Tata Elxsi has grown into a major competitor in the Industrial design market. The company's shift to Design Digital, catering to the growing world of digital marketing and development, shows hid strong vision and future outlook."
  },
  {
    id: 6,
    name: "P RADHAKRISHNAN",
    image: image5,
    occupation: "VETERAN SPACE SCIENTIST",
    about: "P Radhakrishnan is a veteran space scientist, author and speaker who worked at ISRO as the Deputy Director of Liquid Propulsion System Centre. He was involved in the development of India’s early satellites like Aryabhata, Rohini, APPLE, and later the INSAT satellites. His greatest feat was being one of two Indian scientist trained by NASA to be a payload specialist for the ST61-I Challenger mission, which was cancelled after the Challenger disaster of 1986. He has also co- authored the book A Brief History of Rocketry in ISRO."
  },
  {
    id: 7,
    name: "VALMAKRY",
    image: image6,
    occupation: "INFLUENCER",
    about: "No one knows who he is. The netizens only know him as the Valmakry, an anonymous rider riding all around the world, sharing his journey and lessons to his followers. In this age where keeping our anonymity is close to impossible, Valmakry has successfully used his anonymity to gain a cult following. For him, being an influencer is about spreading ideas and thoughts, as opposed to personality and looks."
  },
  {
    id: 8,
    name: "SREEJESH NAIR ",
    image: image7,
    occupation: "SOUND ENGINEER AND MIXER",
    about: "Sreejesh Nair is a sound engineer and mixer, who has worked in the re-recording of many big hits like Inception, The Harry Potter Series, Jawan and Gangs of Wasseypur among others. He has more than 200 movies and decades of experience to his name.  He was also a part of the First Dolby Atmos Mix Theatre installation in India and the first Dolby Atmos Premiere mix room in the world. He won the 60th National Film Award for the best Re-Recordist for the film Gangs of Wasseypur."
  },
  {
    id: 9,
    name: "MANJU SARA RAJAN",
    occupation: "JOURNALIST",
    image: image8,
    about: "Manju Sara Rajan is a journalist, editor and arts manager who is currently working as Senior Advisor, Design, at Asian Paints.  With a career spanning over decades, she has worked with some of the top International publications like Time newsmagazine’s Asia bureau in Hong Kong. She is the former CEO of the Kochi Biennale Foundation, where she oversaw the management of Kochi Muziris Biennale 2016."
  },
  {
    id: 10,
    name: "SUMESH MANGALASSERY",
    image: image9,
    occupation: "CEO AND FOUNDER \n Suyatri Community Tourism",
    about: "Sumesh Mangalassey is the CEO and Founder of Suyatri Community Tourism and Founder at Kabani – the other direction. With a strong vision for sustainable tourism, Sumesh has forever changed the modern tourism industry. He is now part of a global network engaging in the formulation of an international policy framework in sustainable tourism. He is a strong supporter of empowering local communities through sustainable, community-led tourism programs."
  },
  {
    id: 11,
    name: "NIKHIYA SHAMSHER ",
    image: image10,
    occupation: "UNDERGRADUATE STUDENT",
    about: "Nkihiya Shamsher is an undergraduate researcher at Stanford Universitystudying Biomedical Data Science. She is most famous for inventing QuitPuff atjust 16 years of age. QuitPuff is a diagnostic device which helps in earlydetection of oral cancer. Not only that, she has also helped start many NGOseven at a young age. She is also the recipient of the prestigious 2017 DianaLegacy award."
  }

];

const PreviousSpeakers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [flippedCards, setFlippedCards] = useState(new Set());
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

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
    setFlippedCards(new Set()); // Reset flipped cards on slide change
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
    setFlippedCards(new Set()); // Reset flipped cards on slide change
  };

  const toggleCard = (cardId) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) {
      // Swiped left
      nextSlide();
    } else {
      // Swiped right
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="py-8 bg-white flex items-center justify-center w-full">
      <div className="relative w-full max-w-[1400px] mx-auto px-4 lg:px-12">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-40 
                   w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg 
                   hidden md:flex items-center justify-center
                   hover:bg-gray-50 transition-colors
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" />
        </button>

        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out gap-4"
            style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="min-w-[calc(100%-16px)] sm:min-w-[calc(50%-16px)] md:min-w-[calc(33.333%-16px)] flex-shrink-0"
              >
                <div
                  className="relative w-full h-full cursor-pointer"
                  style={{ perspective: '1000px' }}
                  onClick={() => toggleCard(card.id)}
                >
                  <div
                    className="relative transition-transform duration-700 transform-gpu preserve-3d w-full"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: flippedCards.has(card.id) ? 'rotateY(180deg)' : 'rotateY(0)',
                    }}
                  >
                    {/* Front of card */}
                    <div
                      className="flex flex-col items-center bg-white rounded-3xl overflow-hidden border-[2px] border-red-600 backface-hidden"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <div className="relative h-[300px]">
                        <img
                          src={card.image}
                          alt={card.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-4xl font-semibold md:text-5xl text-gray-900 font-vanguard mb-2 text-center">
                          {card.name}
                        </h4>
                        <h3 className="font-vanguard text-2xl md:text-2xl text-red-600 font-semibold text-center whitespace-pre-line">
                          {card.occupation}
                        </h3>
                      </div>
                    </div>

                    {/* Back of card */}

                    <div
                      className="absolute top-0 left-0 w-full h-full bg-black rounded-3xl border-[2px] border-red-600 p-6 flex flex-col items-center  justify-center gap-10 backface-hidden"
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      <h1 className='text-red-600 font-vanguard font-semibold text-6xl'>{card.name}</h1>
                      <p className="text-base text-white font-avantgarde leading-relaxed overflow-y-auto">
                        {card.about}
                      </p>
                    </div>
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
                   hidden md:flex items-center justify-center
                   hover:bg-gray-50 transition-colors
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" />
        </button>

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