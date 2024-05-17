import React from 'react'

function Navbar() {
    return (
        <div id='nav' className='  w-full h-16 px-4 text-lg flex justify-center lg:justify-between items-center backdrop-blur-sm '>
            <div className=' lg:w-1/2  '>
                <img className='w-24 h-12 hover:cursor-pointer' src="https://i.ibb.co/Ntn0dMj/logosvg1.png" alt="logo" />
            </div>

            <div className='w-1/2 lg:flex justify-between  hidden'>
                <div className='flex gap-5'>
                    <a className='hover:underline hover:underline-offset-4 ' href='./'>Service</a>
                    <a className='hover:underline hover:underline-offset-4' href='./'>Our Work</a>
                    <a className='hover:underline hover:underline-offset-4' href='./'>About us</a>
                    <a className='hover:underline hover:underline-offset-4' href='./'>Insights</a>

                </div>

                <div>
                    <a className='hover:underline hover:underline-offset-4' href='/'>Contact us</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar