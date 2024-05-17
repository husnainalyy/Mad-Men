import React from 'react'

function Card() {
    return (
        <div className='py-20 grid lg:flex gap-3 px-4'>
            <div className='lg:w-1/2 '>
                <img className='w-full lg:h-96 rounded-lg' src="https://i.ibb.co/jVMPBz9/Card2.png" alt="" />
            </div>
            <div className='lg:w-1/2 flex gap-2 '>
                <div className='w-1/2'>
                    <img className='w-full h-48 lg:h-96 rounded-lg' src="https://i.ibb.co/DfnWJVH/Card3.png" alt="" />
                </div>
                <div className='w-1/2 '>
                    <img className='w-full h-48 lg:h-96 rounded-lg' src="https://i.ibb.co/71fK3qk/Card1.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Card