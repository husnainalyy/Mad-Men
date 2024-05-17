import React from 'react'
import { motion } from "framer-motion"



function MovingSection() {
    
    return (
        
        <div data-scroll data-scroll-section data-scroll-speed=".0" className=' w-full min-h-min    rounded-t-3xl  pt-20  bg-[#9147ff]'>
               
            <div className=' h-0 border border-[#18181b37]'>
                    <span className=''></span>
                </div>
                <div className='w-full'>
                    <div className='w-full flex gap-10 whitespace-nowrap overflow-hidden'>
                        <motion.h1
                            initial={{ x: 0 }} animate={{ x: "-103.3%" }} transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
                            className=' text-[30vw] lg:text-[15vw] leading-none text-[#edf2ef] font-Grotesk font-bold tracking-[-0.05em] text-nowrap '>
                            WE ARE MAD-MEN
                        </motion.h1>

                        <motion.h1
                            initial={{ x: 0 }} animate={{ x: "-103.3%" }} transition={{ ease: "linear", repeat: Infinity,duration: 8}}
                        className=' text-[30vw] lg:text-[15vw] leading-none text-[#edf2ef] font-Grotesk font-bold tracking-[-0.05em] text-nowrap '>
                            WE ARE MAD-MEN
                        </motion.h1>
                    </div>
                </div>
                <div className=' h-0 border border-[#18181b37]'>
                    <span className=''></span>
                </div>
            </div>
          
    )
}

export default MovingSection