import React from 'react'
import { motion } from 'framer-motion'

function Marquee() {

    return (
        <div data-scroll data-scroll-speed='-.6' className='bg-[#004d43] w-full  rounded-tl-xl rounded-tr-xl uppercase  pt-[6vw] max-sm:h-[35vw] '>
            <div className='border-t-[1px] border-b-[1px] flex font-["Roboto_Condensed"] font-semibold text-white text-[20vw] max-sm:text-[30vw] max-sm:leading-[25vw] leading-[17vw] tracking-tighter'>
                <motion.div
                    initial={{ x: "0" }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", duration: 10, repeat: Infinity }}
                    className='whitespace-nowrap '>
                    we are ochi
                </motion.div>
                <motion.div
                    initial={{ x: "0" }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", duration: 10, repeat: Infinity }}
                    className='whitespace-nowrap'>
                    we are ochi
                </motion.div>
            </div>
        </div>
    )
}

export default Marquee
