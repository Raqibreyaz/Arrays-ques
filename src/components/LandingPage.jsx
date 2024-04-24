import React from 'react'
import { motion } from 'framer-motion'
import ochiImage from '../assets/ochi-image.jpg'
import redsvg from '../assets/redSvg.svg'

function LandingPage() {

  return (
    <div data-scroll data-scroll-speed='-.7'>
      <div className='mt-[5vh] dark:text-white w-full text-[7.8vw] uppercase font-semibold  pt-[8vw] font-["Roboto_Condensed"] leading-[7vw] tracking-tighter flex justify-between border-b-[1px] pb-[17vw] border-gray-500 '>
        <div className='px-[2vw] '>
          <h1>we create</h1>
          <h1 className='flex items-center'><motion.img src={ochiImage}
            initial={{ width: 0 }}
            animate={{ width: "9vw" }}
            transition={{ ease: [0.76, 0, 0.24, 1],duration:1 }}
            className='h-[5.7vw] w-[9vw]  rounded ' />
            <div className=''>eye opening</div>
          </h1>
          <h1>presentations</h1>
        </div>
        <div className='h-[20vw] w-[vw] '>
          <img src={redsvg} alt="" className='w-full h-full' />
        </div>
      </div>
      <div className='capitalize text-gray-400 flex gap-3 justify-between py-[1.5vw] px-[2vw] flex-wrap max-sm:text-[13px]'>
        <div>for public and private companies</div>
        <div>from the first pitch to IPO</div>
        <div className=' border-[1px] py-[2px] px-2 rounded-3xl  uppercase'>start the project</div>
      </div>
    </div>
  )
}

export default LandingPage
