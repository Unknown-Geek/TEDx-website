import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Lottie from "lottie-react"
import dateLottie from "/public/assets/Date-Lottie.json"
import image535 from "/public/assets/image 535.png"
import image536 from "/public/assets/image 536.png"
import butterflyEffect from "/public/assets/Butterfly-Effect.svg"
import { ArrowUpRight, Menu } from "lucide-react"
import video from "/public/assets/video.mp4"
import logo from "/public/assets/Logo-White.png"
import image1 from "/public/assets/image1.svg"
import image2 from "/public/assets/image2.svg"
import image3 from "/public/assets/image3.svg"
import { Shirt } from "lucide-react"
import toast, { Toaster } from 'react-hot-toast'
import x from "/public/assets/close.svg"
const HoverStackImages = ({ images }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className=" w-[350px] h-[300px] sm:w-[300px] sm:h-[350px] mx-auto  cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`absolute inset-0 scale-90  mx-auto md:w-[1400px] md:h-[300px] w-[300px] place-self-auto md:pt-16 md:pb-10 pt-8  object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out
            ${isHovered ? getHoverTransform(index) : "translate-x-0 translate-y-0"}
          `}
          style={{ zIndex: images.length - index }}
        />
      ))}
    </div>
  );
};

const getHoverTransform = (index) => {
  const positions = [

    "md:translate-x-[-25px] md:translate-y-[-30px] translate-x-[-15px] translate-y-[-20px]",
    // First image moves up-left
    "md:translate-x-[25px] md:translate-y-[30px] translate-x-[15px] translate-y-[20px]",
    "translate-x-[5px] translate-y-[-5px]",// Second image stays in the center
    // Third image moves down-right
  ];
  return positions[index] || "";
};

const images = [image1, image3, image2];

const Home = () => {



  const [isHovered, setIsHovered] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const navItems = [
    { item: "About", href: "#about" },
    { item: "Speakers", href: "#speakers" },
    { item: "Team", href: "/team" },
    { item: "Contact", href: "#contact" }
  ]

  const handleMerchClick = () => {
    navigate("/merch", { state: { toMerch: true } })
  }

  useEffect(() => {
    // Only show on mobile devices
    if (window.innerWidth < 768) {
      // Wait 5 seconds before showing toast
      const showToastTimer = setTimeout(() => {
        const toastId = toast.custom((t) => (
          <div
          className={`${t.visible ? "animate-enter" : "animate-leave"
            } max-w-sm w-full bg-white shadow-xl rounded-lg pointer-events-auto flex flex-col border border-[#161616] p-2`}
        >
          <div className="border border-[#161616] p-2 rounded-lg ">
          {/* Close Button */}
          <button
            onClick={() => toast.dismiss(t.id)}
            className="absolute top-2 right-2 text-[#161616] font-bold text-xl"
          >
            <img src={x} />
          </button>

          {/* Alert Heading */}
          <div className="font-avantgarde flex items-center">
            <span className="font-extrabold text-[#BB000E] text-3xl">
              Alert
            </span>
            <span className="text-3xl text-[#161616]">!!</span>
          </div>

          {/* Message Content */}
          <p className="font-avantgarde text-[#161616] text-lg mt-2">
            Our exclusive merch is selling fast! <br />
            Don’t miss out on premium designs made just for you. <br />
            Grab yours now before it’s gone!
          </p>

          {/* Buy Merch Button */}
          <button
            onClick={() => {
              toast.dismiss(t.id);
              handleMerchClick();
            }}
            className="bg-[#BB000E] text-[#FAFAFA] px-4 py-2 rounded-md mt-4 font-avantgarde"
          >
            Buy Merch
          </button>
          </div>
        </div>
      ), {
        duration: 4000, // Auto-dismiss after 5s
        position: "bottom-right",
      });
    }, 5000);

    return () => clearTimeout(showToastTimer);
  }
}, []);
  return (
    <div className="container p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20 mx-auto">
    {/* Add this near the top of your JSX */}
      {/* Navigation */}
      <nav className="flex  justify-between items-center gap-4 mb-6 md:mb-8">
        <div className="flex items-center justify-center bg-[#161616] rounded-[12px] w-[180px]">
          <img
            className="p-3 w-[170px] h-[50px]"
            src={logo || "/placeholder.svg"}
            alt="Design element 2"
          />
        </div>
        <div className="hidden md:flex gap-2 lg:gap-4">
          {navItems.map((item) => (
            <a
              key={item.item}
              href={item.href}
              className="px-3 sm:px-4 md:px-6 py-2 border border-[#161616] rounded-[20px] text-[#161616] text-sm lg:text-3xl font-avantgarde hover:bg-[#BB000E] hover:text-[#FAFAFA]"
            >
              {item.item}
            </a>
          ))}
          <button
            onClick={handleMerchClick}
            className="px-4 sm:px-4 md:px-6 py-2 bg-[#BB000E] border border-[#161616] rounded-[20px] text-[#FAFAFA] text-base lg:text-3xl font-avantgarde hover:bg-[#FAFAFA] hover:text-[#BB000E]"
          >
            Buy Merch
          </button>
        </div>
       
        <button
          className="md:hidden p-2 border  border-[#161616] rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 p-4">
          <div className="flex justify-end">
           
            <button
              className="p-2 border border-[#161616] rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col space-y-4 mt-8">
            {navItems.map((item) => (
              <a
                key={item.item}
                href={item.href}
                className="px-3 sm:px-4 md:px-6 py-2 border border-[#161616] rounded-[20px] text-[#161616] text-sm lg:text-3xl font-avantgarde hover:bg-[#BB000E] hover:text-[#FAFAFA]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.item}
              </a>
            ))}
            <button
              onClick={() => { <div className="flex items-center justify-center md:hidden ml-auto ">
                {/* T-Shirt Merch Button */}
                
                </div>
                setIsMobileMenuOpen(false)
                handleMerchClick()
              }}
              className="px-3 py-2 bg-[#BB000E] border border-[#161616] rounded-[20px] text-[#FAFAFA] text-xl font-avantgarde hover:bg-[#FAFAFA] hover:text-[#BB000E]"
            >
              Buy Merch
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative justify-center items-center md:h-[300px] md:w-[1380px] w-full h-[100px] rounded-[12px] bg-black  overflow-hidden ">
        <HoverStackImages images={images} />
      </div>



      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 pt-6 pr-0 ">
        {/* Left Panel */}
        <div className="border-2 border-[#161616] rounded-[20px]">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-[16px] filter grayscale"
          ></video>
        </div>

        {/* Center Panel */}
        <div className="border-2 border-[#161616] rounded-[20px] overflow-hidden relative flex items-center justify-center h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px]">
          <img
            className="w-full h-full object-contain mix-blend-darken"
            src={image535 || "/placeholder.svg"}
            alt="Design element 1"
          />
          <img
            className="w-full h-full object-contain opacity-50 mix-blend-multiply absolute inset-0"
            src={image536 || "/placeholder.svg"}
            alt="Design element 2"
          />
        </div>

        {/* Right Panel */}
        <div className="rounded-[20px] flex flex-col gap-4 md:gap-6 md:col-span-2 lg:col-span-1 ">
          {/* Book Tickets Button */}
          <button  onClick={() => window.open("https://forms.gle/4A5tLDECx6rdBmUz9", "_blank")}
            className={`w-full text-4xl min-w-[200px] sm:min-w-[160px] whitespace-nowrap 
              sm:text-4xl md:text-3xl lg:text-3xl xl:text-5xl font-avantgarde p-4 rounded-[20px] flex items-center justify-center border-[3px]
              ${isHovered
                ? "bg-white text-black border-[#BB000E] shadow-[inset_0px_0px_14px_rgba(0,0,0,0.6)]"
                : "bg-[#BB000E] text-[#FAFAFA] border-[#161616] shadow-[inset_0px_0px_14px_rgba(227,28,37,0.60)]"
              }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            BOOK TICKETS
            <ArrowUpRight
              className={`w-14 flex-shrink-0 h-14 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 pl-2 transition-all duration-300 ease-in-out ${isHovered ? "rotate-45" : "rotate-0"
                }`}
            />
          </button>

          {/* Date Display */}
          <div className="bg-[#161616] rounded-[20px] h-[200px] sm:h-[250px] md:h-[325px] flex px-6 md:px-0 justify-center items-center object-fill">
            <Lottie animationData={dateLottie} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home