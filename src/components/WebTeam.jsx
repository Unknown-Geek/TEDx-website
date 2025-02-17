import React from 'react'
import image1 from "/public/assets/person1final.webp"
import image2 from "/public/assets/person2final.webp"
import image3 from "/public/assets/person3final.webp"
import image4 from "/public/assets/person4final.webp"
import exe1 from "/public/assets/01.webp"
import exe2 from "/public/assets/02.webp"
import exe3 from "/public/assets/03.webp"
import exe4 from "/public/assets/04.webp"
import exe5 from "/public/assets/05.webp"
import exe6 from "/public/assets/06.webp"
import exe7 from "/public/assets/07.webp"
import exe8 from "/public/assets/08.webp"
import exe9 from "/public/assets/09.webp"
import exe13 from "/public/assets/13.webp"


const WebTeam = () => {
    return (
        <div className='bg-[#161616] w-screen text-white flex flex-col justify-center items-center '>
            <div className='flex flex-row justify-center gap-3 pt-4 w-screen md:justify-start md:pl-7 pb-5 ' >
                <h1 className='text-6xl font-vanguard text-white font-semibold'>WEBSITE</h1>
                <h1 className='text-6xl font-vanguard text-red-600 font-semibold'>TEAM</h1>
            </div>
            <div className='w-screen h-[2px] bg-white mb-4'></div>
            <div className='w-screen md:flex md:flex-row flex-col justify-center md:gap-1 items-center'>
                <div className="md:flex md:flex-row flex-col "> 
                    <img className='h-[723px] w-[350px] mx-auto' src={image1} />
                    <img src={image2} className='h-[723px] w-[350px] md:mt-40 mx-auto' />
                    <img src={image3} className='h-[723px] w-[350px] mx-auto' />
                    <img src={image4} className='h-[723px] w-[350px] md:mt-40 mx-auto' />
                </div>
            </div>

            {/* Add EXECOM section */}
            <div className='flex flex-row justify-start items-center gap-3 pt-16 w-screen md:pl-9 pl-3 pb-3'>
                <h1 className='text-[55px]  font-vanguard text-white font-semibold'>EXECUTIVE</h1>
                <h1 className='text-[55px]   font-vanguard text-red-600 font-semibold'>COMMITTEE</h1>
            </div>
            <div className='w-screen h-[2px] bg-white'></div>

            {/* Fixed infinite scroll container */}
            <div className="relative w-screen overflow-hidden py-8">
                {/* Desktop horizontal scroll */}
                <div className="hidden md:flex animate-scroll w-max">
                    {/* Single set of images with alternating positions */}
                    <div className="flex gap-8">
                        <div className="flex flex-col">
                            <img src={exe1} alt="Execom 1" className="h-[330px] w-[461px] " />
                        </div>
                        <div className="flex flex-col pt-56">
                            <img src={exe2} alt="Execom 2" className="h-[330px] w-[523px] " />
                        </div>
                        <div className="flex flex-col">
                            <img src={exe3} alt="Execom 3" className="h-[330px] w-[572px] " />
                        </div>
                        <div className="flex flex-col pt-56">
                            <img src={exe4} alt="Execom 4" className="h-[330px] w-[563px] " />
                        </div>
                        <div className="flex flex-col">
                            <img src={exe5} alt="Execom 5" className="h-[330px] w-[563px] " />
                        </div>
                        <div className="flex flex-col pt-56">
                            <img src={exe6} alt="Execom 6" className="h-[330px] w-[461px] " />
                        </div>
                        <div className="flex flex-col">
                            <img src={exe7} alt="Execom 7" className="h-[330px] w-[587px] " />
                        </div>
                        <div className="flex flex-col pt-56">
                            <img src={exe8} alt="Execom 8" className="h-[330px] w-[461px] " />
                        </div>
                        <div className="flex flex-col">
                            <img src={exe9} alt="Execom 9" className="h-[330px] w-[464px] " />
                        </div>
                        <div className="flex flex-col pt-56">
                            <img src={exe13} alt="Execom 10" className="h-[330px] w-[461px] " />
                        </div>
                    </div>
                </div>

                {/* Mobile vertical scroll */}
                <div className="md:hidden relative w-full overflow-hidden h-[80vh]">
                    <div className="flex flex-col animate-scroll-vertical w-full">
                        {/* Single set of images */}
                        <div className="flex flex-col gap-8 px-4">
                            <img src={exe1} alt="Execom 1" className="w-full h-auto" />
                            <img src={exe2} alt="Execom 2" className="w-full h-auto" />
                            <img src={exe3} alt="Execom 3" className="w-full h-auto" />
                            <img src={exe4} alt="Execom 4" className="w-full h-auto" />
                            <img src={exe5} alt="Execom 5" className="w-full h-auto" />
                            <img src={exe6} alt="Execom 6" className="w-full h-auto" />
                            <img src={exe7} alt="Execom 7" className="w-full h-auto" />
                            <img src={exe8} alt="Execom 8" className="w-full h-auto" />
                            <img src={exe9} alt="Execom 9" className="w-full h-auto" />
                            <img src={exe13} alt="Execom 10" className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebTeam