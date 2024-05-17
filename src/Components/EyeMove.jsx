import LocomotiveScroll from 'locomotive-scroll';
import React, { useState,useEffect } from 'react'

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

function EyeMove() {
    const [rotate, setRotate] = useState(0);
    
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;
            
            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle-180);
        })
    
    
    })
      
    return (
        <div  className=' w-full  lg:h-[22vh] px-8 lg:px-24  overflow-hidden  bg-zinc-950'>
            <div className=' relative h-20   lg:h-full  bg-cover bg-center bg-[url("https://i.ibb.co/TthLyJd/Boho-Background-Desktop-Wallpaper.png")]'>
                <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-3/5  h-2/5 flex items-center gap-4  justify-center'>
                    <div className='w-[20vw] h-[20vw] lg:w-[15vw] lg:h-[15vw] rounded-full bg-zinc-200 flex justify-center items-center'>
                        <div className='w-[12vw] h-[12vw] lg:w-[9vw] lg:h-[9vw] rounded-full bg-black relative '>
                            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='w-full h-8 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                                <div className='w-4 h-4 lg:w-8 lg:h-8 bg-slate-300 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[20vw] h-[20vw] lg:w-[15vw] lg:h-[15vw] rounded-full bg-zinc-200 flex justify-center items-center'>
                        <div className=' w-[12vw] h-[12vw] lg:w-[9vw] lg:h-[9vw] rounded-full bg-black relative '>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='w-full h-8 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                                <div className='w-4 h-4 lg:w-8 lg:h-8 bg-slate-300 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EyeMove