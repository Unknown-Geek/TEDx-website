import React from 'react'
import image1 from "/public/assets/person1final.webp"
import image2 from "/public/assets/person2final.webp"
import image3 from "/public/assets/person3final.webp"
import image4 from "/public/assets/person4final.webp"

const WebTeam = () => {
    return (
        <div className='bg-[#161616] w-screen  text-white flex flex-col justify-center items-center gap-7 '>
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
            
        </div>
    )
}

export default WebTeam