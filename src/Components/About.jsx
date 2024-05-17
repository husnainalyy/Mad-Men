import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

function About() {
    return (
        <div className=' w-full min-h-min pb-10 lg:pb-20 flex flex-col gap-5 lg:gap-10 items-center rounded-b-3xl  bg-[#f5dc00] '>
            <div className='w-full h-20 lg:mb-28'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#9147ff" fill-opacity="1" d="M0,96L10,106.7C20,117,40,139,60,122.7C80,107,100,53,120,58.7C140,64,160,128,180,176C200,224,220,256,240,256C260,256,280,224,300,186.7C320,149,340,107,360,101.3C380,96,400,128,420,149.3C440,171,460,181,480,186.7C500,192,520,192,540,202.7C560,213,580,235,600,245.3C620,256,640,256,660,245.3C680,235,700,213,720,181.3C740,149,760,107,780,90.7C800,75,820,85,840,90.7C860,96,880,96,900,106.7C920,117,940,139,960,144C980,149,1000,139,1020,149.3C1040,160,1060,192,1080,213.3C1100,235,1120,245,1140,256C1160,267,1180,277,1200,256C1220,235,1240,181,1260,176C1280,171,1300,213,1320,208C1340,203,1360,149,1380,112C1400,75,1420,53,1430,42.7L1440,32L1440,0L1430,0C1420,0,1400,0,1380,0C1360,0,1340,0,1320,0C1300,0,1280,0,1260,0C1240,0,1220,0,1200,0C1180,0,1160,0,1140,0C1120,0,1100,0,1080,0C1060,0,1040,0,1020,0C1000,0,980,0,960,0C940,0,920,0,900,0C880,0,860,0,840,0C820,0,800,0,780,0C760,0,740,0,720,0C700,0,680,0,660,0C640,0,620,0,600,0C580,0,560,0,540,0C520,0,500,0,480,0C460,0,440,0,420,0C400,0,380,0,360,0C340,0,320,0,300,0C280,0,260,0,240,0C220,0,200,0,180,0C160,0,140,0,120,0C100,0,80,0,60,0C40,0,20,0,10,0L0,0Z"></path></svg>
            </div>
            <div className='w-full h-full '>
                <h1 className='text-2xl lg:text-5xl text-gray-900 font-Neue px-4 lg:pl-12 lg:pr-28'>
                    MAD MEN is a strategic partner for businesses seeking to enhance their <span className='underline-reveal hover:cursor-pointer underline decoration-2 underline-offset-4 hover:no-underline'> brand presence </span>  and <span className='underline-reveal hover:cursor-pointer underline decoration-2 underline-offset-4 hover:no-underline'> achieve remarkable results </span>  in the ever-evolving  <span className='underline-reveal hover:cursor-pointer underline decoration-2 underline-offset-4 hover:no-underline'> digital landscape</span>.               
                </h1>
            </div>
            
            <div className='w-full h-0 border border-[#4d4d4f67]'>
                <span className=''></span>
            </div>
            
            <div className='w-full grid lg:flex px-4 lg:px-8 font-Neue text-[#18181bdd]'>
                <div className='w-1/2'>
                    <p>What you can expect:</p>
                </div>
                <div className='w-full lg:w-1/2  flex flex-col lg:flex-row  lg:gap-8'>
                    <div className='flex flex-col lg:gap-4 w-full lg:w-1/2 leading-tighter   '>
                        <p>Discover personalized marketing strategies crafted for your business objectives. Our team specializes in tailoring bespoke solutions to meet your unique needs and ROI.</p>
                        <p>Engage your audience with cutting-edge campaigns designed to captivate and inspire action. From creative storytelling to data-driven insights, we'll help you stand out in the crowded digital landscape </p>
                    </div>
                    <div className='w-full lg:w-1/2 flex flex-col justify-end '>
                        <p className='py-3 lg:pb-8 text-lg'>Services:</p>
                        {["Branding", "Digital Marketing", "Creative Campaigns", "Social Media Management", "Content Creation", "Analytics & Insights"].map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}                
                    </div>
                </div>
            </div>
            <div className='w-full h-0 border border-[#4d4d4f67]'>
                <span className=''></span>
            </div>
            <div className='w-full flex justify-between items-center px-2 '>
                <div className='w-1/2 lg:pl-12 '>
                    <h1 className='text-2xl lg:text-4xl lg:mb-6 '>Our approach:</h1>
                    <button className="px-8 py-2 focus:outline-none cursor-pointer border-none relative inline-block tracking-wider font-semibold text-base rounded-full overflow-hidden bg-violet-400 text-white">
                        <span className="relative z-10 transition-colors duration-400">READ MORE</span>
                    </button>
                </div>
                <div className='w-1/2 lg:w-1/3 '>
                    <img className=' lg:w-11/12 h-24 rounded-md' src="https://i.ibb.co/GP6bsCh/cardHero.png" alt="" />
                </div>
            </div>
            
        </div>
    )
}

export default About