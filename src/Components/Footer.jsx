import React from 'react'

function Footer() {
    return (
        <div className='w-full py-10 lg:pb-20  px-4 min-h-min grid lg:flex rounded-t-3xl'>
            <div className='lg:w-1/2  flex lg:flex-col  justify-between'>
                <div className='flex justify-start items-end'>
                <h1 className='w-full text-4xl lg:text-8xl font-extrabold font-Grotesk'>EYE-OPENING</h1>
                </div>
                <div className='w-full'>
                    <img className=' lg:w-1/4 h-20 mb-20 lg:mb-0' src="https://i.ibb.co/GP6bsCh/cardHero.png" alt="card" />
                </div>
            </div>
            <div className=' flex flex-col gap-y-12'>
                <div className='w-full'>
                    <h1 className='w-full text-5xl lg:text-[7vw] font-extrabold font-Grotesk'>MARKETING </h1>
                </div>
                <div className='w-full flex flex-col'>
                    <h1 className='text-xl'>Services:</h1>
                    {["Instagram", "Behance", "Facebook", "Linkedin"].map((service,index) => (
                        <p key={index} className='w-12 text-md text-zinc-500 underline-reveal2 hover:cursor-pointer underline decoration-2 underline-offset-4 hover:no-underline decoration-white'>{service }</p>
                    
                    ))}
                </div>
                <div className=' w-full flex justify-between'>
                    <div className='w-full flex flex-col gap-8'>
                        <h1 className='text-xl'>Location:</h1>
                        <p className='text-zinc-500'>202-1965 W 4th Ave Vancouver, Canada</p>
                        <p className='text-zinc-500'>30 Chukarina St Lviv, Ukraine</p>
                    </div>
                    <div className='w-full flex justify-end items-end'>
                        <div className='flex flex-col '>
                            <h1 className='text-xl'>Pages:</h1>
                            {["Home", "Services", "Our work", "About us", "Insights", "Contact us"].map((pages,index) => (
                                <p key={index} className='w-20 text-md text-zinc-500 underline-reveal2 hover:cursor-pointer underline decoration-2 underline-offset-4 hover:no-underline decoration-white'>{pages}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <h1 className='text-xl'>Email:</h1>
                    <p className='pointer-cursor text-md text-zinc-500'>MADMARKETING@email.com</p>
                </div>
            </div>

        </div>
    )
}

export default Footer