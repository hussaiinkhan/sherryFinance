import React from 'react'
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-1'>
                GROWING WITH DATA ANALYTICS
            </p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-2'>
                Grow with Data.
            </h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-base text-xl font-bold py-2'>
                    Fast, flexible financing for
                </p>
                <ReactTyped className=' md:text-5xl sm:text-base text-xl font-bold pl-2'
                strings={[
                    "BTB",
                    "BTC",
                    "SASS",
                ]}
                typeSpeed={120}
                backSpeed={140}
                placeholder=""
                loop
                > 
                </ReactTyped>
            </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500 mt-2'>
                    Monitor your Data analytics to increase revenvue for BTB, BTC, SASS Platforms
                </p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
                    Get Started
                </button>
        </div>
        
    </div>
  )
}

export default Hero