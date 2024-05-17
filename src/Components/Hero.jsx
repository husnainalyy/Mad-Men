import { motion } from 'framer-motion'
import React from 'react'

function Hero() {
    
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full  min-h-min pt-40 pb-20  ">
            <div className=' w-full flex flex-col justify-center px-4 gap-6  tracking-tighter'>
                <h1 className=' text-[12.2vw]  lg:text-[7vw] leading-[0vw] lg:leading-[1vw]  font-bold tracking-tighter font-Grotesk'>WE SHAPE</h1>
                <div className='w-full flex items-center justify-start'>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "120px" }}
                        transition={{ ease: [0.45, 0, 0.55, 1],duration:1,delay:5.5}}
                        className="   rounded ">
                        <img loading='lazy' className='  h-20 lg:h-32   rounded' src="https://i.ibb.co/GP6bsCh/cardHero.png" alt="" />               
                    </motion.div>
                    <h1 className=' text-[13vw]  lg:text-[7vw] leading-[10vw] lg:leading-[6vw]  font-bold tracking-tighter font-Grotesk'>Ever- <br /> Expanding</h1>
                </div>
                <h1 className=" text-[12.2vw]  lg:text-[7vw] leading-[0vw] lg:leading-[2vw]  font-bold tracking-tighter font-Grotesk">Marketing Terrain</h1>          
            </div>
            <div className='mt-20 mx-3 lg:mt-28  h-0 border border-zinc-800'>
                <span className=''></span>
            </div>
            <div className='w-full pt-3 lg:pt-6  px-4 grid gap-y-2 lg:flex justify-between text-md '>
                <h1 className='text-zinc-500'>Empowering Public & Private Ventures</h1>
                <h1 className='text-zinc-500'>From Conception to Capitalization.</h1>
                <div className='flex '>
                    <button className=' px-4 flex gap-1 border border-zinc-600 text-zinc-600 rounded-full hover:bg-white hover:text-black'>
                        <p>
                            CONTACT US
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 19" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero