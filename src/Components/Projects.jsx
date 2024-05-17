import React, { useState } from 'react'

function Projects() {
    const [projects, setprojects] = useState([
        {
            name: 'BrandBoost',
            image: 'https://i.ibb.co/YjtjX80/Project1.png',
            mainPoints: ["Audit", "Reporting"]
        },
        {
            name: 'SocialSphere',
            image: 'https://i.ibb.co/smnyY4X/Project2.png',
            mainPoints: ["Video ",  "Management"]
        },
        {
            name: 'DigitalDrive',
            image: 'https://i.ibb.co/kVTbV3z/project3.png',
            mainPoints: ["Generation", "ROI Optimization"]
        },
        {
            name: 'InsightIgnite',
            image: 'https://i.ibb.co/k2LMV1f/project4.png',
            mainPoints: ["Content Strategy","Recognition"]
        }
    ])
    
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.05" className='w-full min-h-min  flex flex-col gap-4 lg:gap-y-10 font-Neue rounded-t-3xl py-4 bg-white text-black'>
            <div className='px-4 '>
                <p className='text-4xl font-bold'>Featured projects</p>
            </div>
            <div className=' h-0 border border-[#7a7a8137]'>
                <span className=''></span>
            </div>
            
            <div className='w-full flex flex-col lg:grid grid-cols-2 gap-y-8	'>
                {projects.map((project, index) => (
                    <div key={index} className='px-4 flex flex-col gap-3 '>
                        <div className='flex gap-2  items-center'>
                            <div className='w-2 h-2 rounded-full bg-black'></div>
                            <p className='text-xl'>{project.name }</p>
                        </div>
                        <div className='w-full h-full '>
                            <img className='w-full  h-96 hover:h-[22rem] hover:w-[35rem] border border-gray-800  rounded-lg' src={project.image} alt="img" />
                        </div>
                        <div className=' w-full  flex  items-center justify-between  '>
                            
                                {project.mainPoints.map((point, index) => (
                                    <div key={index} className='point   border '>
                                        <span class="box h-10 lg:h-full lg:w-44">
                                            {point}
                                        </span>
                                    </div>
                                ))}                           
                            
                        </div>
                        
                    </div>
                    
                ))}
                
            </div>
            
            <div className='flex justify-center items-center'>
                <button class="btn-23 ">
                    <span class="text">View</span>
                    <span aria-hidden="" class="marquee"> Projects </span>
                </button>
            </div>
        </div>
    )
}

export default Projects