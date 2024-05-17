import React,{useEffect,useState} from 'react'

function ReadyStart() {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        })


    })
    
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".3" className='w-full h-[80vh] lg:h-screen  py-20 lg:py-20 bg-[#CDEA68]  rounded-t-3xl rounded-b-3xl ' >
            <div className='w-full h-full 
                            flex flex-col
                            justify-between lg:justify-center items-center
                            relative'>
                
                <div className=' h-full lg:h-0  flex flex-col justify-between lg:justify-center'>
                    <div className='w-full flex flex-col leading-[3rem]  justify-center items-center'>
                        <p className='text-[6vh] lg:text-[13vw]  lg:leading-[8rem] tracking-[-.09em] font-Grotesk font-extrabold text-zinc-900 flex justify-center items-center'>READY  </p>
                        <p className='text-[6vh] lg:text-[13vw]  lg:leading-[10rem] tracking-[-.09em] font-Grotesk font-extrabold text-zinc-900'>TO START </p>
                        <p className='text-[6vh] lg:text-[13vw]  lg:leading-[9rem] tracking-[-.09em] font-Grotesk font-extrabold text-zinc-900 text-nowrap'>THE PROJECT?</p>
                    </div>
                    <div className=' py-6    flex gap-1 flex-col justify-center items-center'>
                        <button className={`.reviewButton  px-10 py-1 text-lg border rounded-full text-black bg-zinc-200 `}>
                            CONTACT US
                        </button>
                        <h1 className='text-xl text-gray-900'>OR</h1>
                        <button className={`.reviewButton  px-10 py-1 text-lg border rounded-full text-black bg-zinc-200 `}>
                            @MADMEN.com
                        </button>
                    </div>           
                </div>
                <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full lg:w-3/5  h-2/5 flex items-center gap-4  justify-center'>
                    <div className='w-[40vw] h-[40vw] lg:w-[15vw] lg:h-[15vw] rounded-full bg-zinc-200 flex justify-center items-center'>
                        <div className='w-[20vw] h-[20vw] lg:w-[9vw] lg:h-[9vw] rounded-full bg-black relative '>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='w-full h-8 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                                <div className='w-4 h-4 lg:w-8 lg:h-8 bg-slate-300 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[40vw] h-[40vw] lg:w-[15vw] lg:h-[15vw] rounded-full bg-zinc-200 flex justify-center items-center'>
                        <div className='w-[20vw] h-[20vw] lg:w-[9vw] lg:h-[9vw]  rounded-full bg-black relative '>
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

export default ReadyStart