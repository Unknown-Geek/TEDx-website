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
        <div className='bg-[#161616] w-screen text-white flex flex-col justify-center items-center gap-7'>
            <div className='flex flex-row justify-start gap-3 pt-4 w-screen pl-9' >
                <h1 className='text-6xl font-vanguard text-white font-semibold'>WEBSITE</h1>
                <h1 className='text-6xl font-vanguard text-red-600 font-semibold'>TEAM</h1>
            </div>
            <div className='w-screen h-[2px] bg-white'></div>
            <div className=' w-screen flex justify-center gap-1'>
                <img className='h-[723px] w-[350px]' src={image1} />
                <img src={image2} className='h-[723px] w-[350px] mt-40 ' />
                <img src={image3} className='h-[723px] w-[350px]' />
                <img src={image4} className='h-[723px] w-[350px] mt-40' />
            </div>

            {/* Add EXECOM section */}
            <div className='flex flex-row justify-start gap-3 pt-16 w-screen pl-9'>
                <h1 className='text-6xl font-vanguard text-white font-semibold'>EXECUTIVE</h1>
                <h1 className='text-6xl font-vanguard text-red-600 font-semibold'>COMMITTEE</h1>
            </div>
            <div className='w-screen h-[2px] bg-white'></div>

            {/* Fixed infinite scroll container */}
            <div className="relative w-screen overflow-hidden py-8">
                <div className="flex animate-scroll w-max">
                    {/* First set of images with alternating positions */}
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
                            <img src={exe8} alt="Execom 8" className="h-[330px] w-[461px]  " />
                        </div>
                        <div className="flex flex-col">
                            <img src={exe9} alt="Execom 9" className="h-[330px] w-[464px] " />
                        </div>
                        <div className="flex flex-col pt-56">
                            <img src={exe13} alt="Execom 10" className="h-[330px] w-[461px] " />
                        </div>
                    </div>

                    {/* Duplicate set for seamless scrolling with the same alternating pattern */}
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
            </div>
        </div>
    )
}

export default WebTeam