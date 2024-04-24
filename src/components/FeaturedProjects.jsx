import React from 'react'
import featuredImage1 from '../assets/featuredImage.png'
import featuredImage2 from '../assets/featuredImage2.jpg'
import featuredImage3 from '../assets/featuredImage3.jpg'
import featuredImage4 from '../assets/featuredImage4.png'
import { motion, useAnimation } from 'framer-motion'

function FeaturedProjects() {

    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()]

    function handleHover(index) {
        cards[index].start({ opacity: 1, transform: `translateY(-50%) ${index % 2 == 0 ? ' translateX(-50%)' : 'translateX(50%)'}` })
    }
    function handleHoverEnd(index) {
        cards[index].start({ opacity: 0, transform: `translateY(0) ` })
    }

    return (
        <div className='min-h-[100vh] dark:text-white font-["Neue_Montreal"]'>
            <h1 className='pt-[10vw] pb-[4vw] px-[2vw] border-b text-[5vw]'>Featured projects</h1>
            <div className='flex flex-wrap max-sm:flex-col gap-x-[2vw] gap-y-[4vw] sm:justify-center max-sm:items-center py-[4vw] relative'>
                {
                    [
                        [featuredImage1, 'fyde'],
                        [featuredImage2, 'vise'],
                        [featuredImage3, 'trawa'],
                        [featuredImage4, 'premium blend']
                    ].map((pair, index) => {

                        return (<div key={index} className='sm:h-[47vw] sm:w-[47vw] max-sm:h-[70vw] max-sm:w-[80vw] flex flex-col justify-between gap-3 relative'>
                            <div className='uppercase flex  items-center gap-[1vw] text-[2vw]'>
                                <div className='h-[2vw] w-[2vw] bg-white rounded-full'></div>
                                {pair[1]}
                            </div>
                            <motion.div className='h-[90%] w-full rounded-xl hover:scale-95 transition-all duration-700 overflow-hidden'
                                onHoverStart={() => handleHover(index)}
                                onHoverEnd={() => handleHoverEnd(index)}
                            >
                                <img src={pair[0]} alt="" className='h-full w-full' />
                            </motion.div>
                            <motion.div className={`text-[6vw] font-semibold absolute top-1/2  z-20 text-[#CDEA68] uppercase whitespace-nowrap ${index % 2 == 0 ? 'sm:left-[100%] left-[50%] ' : 'sm:right-[100%] right-[50%]'}`}
                                initial={{ opacity: 0, }}
                                animate={cards[index]}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}>{pair[1]}</motion.div>
                            <div className='flex uppercase gap-[5px] text-[1.2vw] '>

                                {
                                    ['audit', 'copyrighting', 'sales deck', 'slides design'].map((btn, index) => {
                                        return (
                                            <button key={index} className='border rounded-[2vw] py-[0.7vw] px-[1.4vw] uppercase'>{btn}</button>
                                        )
                                    }
                                    )
                                }
                            </div>
                        </div>
                        )
                    })
                }
            </div>
            <div className='flex justify-center'>
                <button className='px-[3vw] py-[2vw] bg-black uppercase rounded-[4vw] flex items-center gap-[3.3vw]  text-[1.5vw] text-white'>view all case studies <div className='h-[1vw] w-[1vw] bg-white rounded-full'></div></button>
            </div>
        </div >
    )
}

export default FeaturedProjects
