import React from 'react'
import { useState } from 'react'






function Reviews() {
    
    const [reviews, setreviews] = useState([
        {
            companyName: "Karman Ventures",
            services: ["Branding", "Digital Marketing", "Content Creation"],
            reviewer: "William Barnes",
            image: "image description",
            review: "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design.",
            rating: "5/5"
        },
        {
            companyName: "ABC Solutions",
            services: ["Web Design", "SEO", "PPC Advertising"],
            reviewer: "Jessica Smith",
            image: "image description",
            review: "ABC Solutions has been an invaluable partner for our company's digital marketing efforts. Their web design expertise helped us revamp our online presence, and their SEO and PPC strategies have significantly increased our website traffic and conversions. Their professionalism and dedication to delivering results are truly commendable. 5/5",
            rating: "5/5"
        },
        {
            companyName: "XYZ Corp",
            services: ["  Management", "Email Marketing", "Content Strategy"],
            reviewer: "John Doe",
            image: "image description",
            review: "Working with XYZ Corp has been a game-changer for our social media presence. Their expert team has managed our social media accounts efficiently, leading to a substantial increase in engagement and brand visibility. Their email marketing campaigns and content strategy have also been highly effective in reaching our target audience. 5/5",
            rating: "5/5"
        },
        {
            companyName: "Innovate Solutions",
            services: ["Market Research", "Branding", "Content Creation"],
            reviewer: "Emily Johnson",
            image: "image description",
            review: "Innovate Solutions provided us with invaluable insights through their comprehensive market research. Their branding expertise helped us refine our brand identity, and their content creation team produced high-quality content that resonated with our audience. Their dedication to understanding our needs and delivering exceptional results is commendable. 5/5",
            rating: "5/5"
        },
        {
            companyName: "Digital Growth Co.",
            services: ["SEO", "PPC Advertising", "  Management"],
            reviewer: "Michael Brown",
            image: "image description",
            review: "Digital Growth Co. has been instrumental in driving our online growth. Their SEO strategies have improved our website's visibility, and their PPC advertising campaigns have generated significant leads. Their social media management team has also helped us engage with our audience effectively. Their expertise and professionalism are unmatched. 5/5",
            rating: "5/5"
        },
        {
            companyName: "Marketing Innovations",
            services: ["Brand Strategy", "Digital Marketing", "Content Marketing"],
            reviewer: "Sophia Rodriguez",
            image: "image description",
            review: "Marketing Innovations has exceeded our expectations with their innovative marketing strategies. Their brand strategy expertise helped us differentiate ourselves in a competitive market, and their digital and content marketing efforts have driven impressive results. Their commitment to our success is evident in every interaction. 5/5",
            rating: "5/5"
        },
        {
            companyName: "Creative Minds Agency",
            services: ["Graphic Design", "Web Development", " Media Marketing"],
            reviewer: "David Lee",
            image: "image description",
            review: "Creative Minds Agency has been an integral part of our digital transformation journey. Their graphic design and web development teams created a stunning website that reflects our brand identity, and their social media marketing efforts have helped us engage with our audience effectively. Their creativity and professionalism are unmatched. 5/5",
            rating: "5/5"
        },
        {
            companyName: "Brand Builders Inc.",
            services: ["Branding", "Content Strategy", "SEO"],
            reviewer: "Olivia Clark",
            image: "image description",
            review: "Brand Builders Inc. has been instrumental in building our brand from the ground up. Their branding expertise helped us establish a strong brand identity, and their content strategy and SEO efforts have significantly increased our online visibility. Their dedication to our success and attention to detail are commendable. 5/5",
            rating: "5/5"
        },
        {
            companyName: "Digital Innovations",
            services: ["Web Design", "SEO", " Media Marketing"],
            reviewer: "Sophie Johnson",
            image: "image description",
            review: "Digital Innovations transformed our online presence with their exceptional web design and SEO services. Their expert team implemented effective strategies that significantly improved our website's visibility and user experience. Their social media marketing efforts also helped us engage with our audience and increase brand awareness. Highly recommend! 5/5",
            rating: "5/5"
        },
        {
            companyName: "BrandGenius",
            services: ["Brand Strategy", "Content Creation", "Email Marketing"],
            reviewer: "Daniel Brown",
            image: "image description",
            review: "BrandGenius provided us with invaluable insights and strategies to elevate our brand. Their expertise in brand strategy and content creation helped us establish a strong brand identity and connect with our audience authentically. Their email marketing campaigns also drove significant engagement and conversions. Exceptional service! 5/5",
            rating: "5/5"
        }
    ])
    
    const [activeReview, setActiveReview] = React.useState(-1);
    function openReview(index) {
        if (activeReview === index) {
            setActiveReview(-1);
        } else {
            setActiveReview(index);
        }
    }
    
    return (
        <div className='w-full  min-h-min  py-10  '>
            <div className='px-8 pb-12 w-full '>
                <h1 className='text-5xl'>Clients’ reviews</h1>
            </div>
            <div className='mb-8 h-0 border border-[#7a7a8137]'>
                <span className=''></span>
            </div>
            <div className='w-full h-full    px-4 '>
                {reviews.map((review, index) => (
                    <div key={index}>
                        <div className='w-full  flex flex-col    gap-5  '>
                            <div className='w-full flex justify-between  text-lg text-gray-300 '>
                                <div className='lg:w-1/3'>
                                <p className=' text-lg text-white '>{review.companyName}</p>
                                </div>
                                <div className='lg:w-1/3 flex justify-center'>
                                <h1 className='text-lg  hidden lg:block  text-gray-300'>{review.reviewer}</h1>
                                </div>
                                <div className='lg:w-1/3 flex justify-end'>
                                <p onClick={() => openReview(index)}
                                    className='underline-reveal2 hover:cursor-pointer underline decoration-2 underline-offset-4 hover:no-underline decoration-white'>
                                    Read me
                                </p>
                                </div>
                            </div>
                            
                            <div className=' w-full flex lg:flex-row flex-col justify-center gap-4 pb-2'>
                                <div className='  flex flex-col gap-4 '>
                                    <p className={`text-lg text-white ${activeReview ===index ? '':'hidden'}`}>Services:</p>
                                    <div className={`flex flex-col gap-4  ${activeReview === index ? '' : 'hidden'} `}>
                                        {review.services.map((service, index) => (
                                            <button key={index} className={`.reviewButton   rounded-full text-black bg-zinc-200 `}>
                                                <p>{service}</p>
                                            </button>
                                        ))
                                        }
                                    </div>
                                </div>
                                <div className='  flex  flex-col justify-center gap-y-8  '>
                                    <img className={`lg:w-96 ${activeReview === index ? '' : 'hidden'}`} src="https://i.ibb.co/GP6bsCh/cardHero.png" alt="" />
                                    <p className={`lg:w-96  text-xl text-zinc-500 ${activeReview === index ? '' : 'hidden'}`}>{review.review}</p>
                                </div>
                                
                            </div>
                            
                            
                        </div>
                        <div className='mt-2 w-full h-0 border border-[#7a7a8137]'>
                            <span className=''></span>
                        </div>
                    </div>
                ))
                
                }
            </div>
           
        </div>
    )
}

export default Reviews