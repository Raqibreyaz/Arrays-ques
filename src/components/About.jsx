import React from 'react'
import ochiFounder from '../assets/ochi-founder.jpg'

function About() {
    return (
        <div data-scroll data-scroll-speed='.2' className=' pb-[6vw] bg-[#cdea68] font-["Neue_Montreal"] text-[rgb(33,33,33)] rounded-xl'>
            <h1 className='py-[8vw] px-[3vw]  text-[5.2vw] tracking-tight leading-[5vw]  border-[#99ad53]'>
                Ochi is a strategic partner for fast-grow­ing tech businesses that need to <span className='underline'>raise funds</span>, sell prod­ucts, <span className='underline'>ex­plain com­plex ideas </span>, and hire great peo­ple.
            </h1>
            <div className='flex justify-between px-[1.5vw] pt-[2vw]
            pb-[8vw] border-t border-b border-[#99ad53] max-sm:flex-col text-[1.8vw] max-sm:text-[2.3vw]'>
                <div>What you can expect</div>
                <div className='sm:w-[30%] w-[100%] sm:ml-[25vw] flex flex-col gap-[4vw] py-4'>
                    <p>
                        We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
                    </p>
                    <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.

                    </p>
                </div>
                <div className='flex flex-col mt-auto'>
                    <div className='mb-[2vw]'>S:</div>
                    <span className='underline'>Instagram</span>
                    <span className='underline'>Behance</span>
                    <span className='underline'>Facebook</span>
                    <span className='underline'>Linkedin</span>
                </div>
            </div>
            <div className=' w-full flex justify-between max-sm:flex-col pt-[2vw] pb-[4vw] px-[2vw]'>
                <div>
                    <h1 className='text-[5.3vw] '>Our approach:</h1>
                    <button className='bg-black text-white py-[1vw]  px-[2vw] rounded-[3vw] flex items-center gap-[2vw] mt-[1.7vw] text-[2.4vw] mb-[3vw]'>Read More <div className='h-[1vw] w-[1vw] bg-white rounded-full'></div></button>
                </div>
                <img src={ochiFounder} alt="" className='rounded-xl w-1/2 max-sm:w-2/3' />
            </div>
        </div>
    )
}

export default About
