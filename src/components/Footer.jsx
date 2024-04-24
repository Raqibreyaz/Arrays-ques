import React from 'react'
import ochi from '../assets/Ochi.svg'

function Footer() {
    return (
        <div className='font-["Neue_Montreal"] text-gray-700 dark:text-gray-300 w-screen px-[2vw] pt-[6vw] text-[1.7vw] max-sm:text-[2vw]'>
            <div className='flex max-sm:flex-col '>
                <div className='text-[7vw] uppercase font-["Roboto_Condensed"] w-[40%] 
                 leading-[6vw] tracking-tighter font-semibold dark:text-white text-black'>
                    <h1>eye-</h1>
                    <h1>opening</h1>
                </div>
                <div className='w-[60%] flex flex-col gap-[2vw]'>
                    <h1 className='text-[7vw] uppercase font-["Roboto_Condensed"]  dark:text-white leading-[6vw] tracking-tighter font-semibold text-black'>
                        presentations
                    </h1>
                    <div className=''>
                        S:
                        <div className='underline'>
                            <div>instagram</div>
                            <div>behance</div>
                            <div>facebook</div>
                            <div>linkedin</div>
                        </div>
                    </div>
                    <div className='w-full flex justify-between max-mobile:flex-col'>
                        <div>
                            L:
                            <div className='underline'>
                                <div>202-1965 W 4th Ave</div>
                                <div>vancouver,canada</div>
                                <div className='mt-[2vw]'>
                                    <div> 30 Chukarina St</div>
                                    <div>Lviv, Ukraine</div>
                                </div>
                            </div>
                        </div>
                        <div className='my-2'>
                            M:
                            <div className='underline'>
                                <div>Home</div>
                                <div>services</div>
                                <div>our work</div>
                                <div>about us</div>
                                <div>insights</div>
                                <div>contact us</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        E:
                        <div className='underline'>hello@ochi.design </div>
                    </div>
                </div>
            </div>
            <div className='flex max-sm:flex-col max-sm:mt-[2vh] justify-between px-[1vw] pt-[4vw] pb-[4vw] w-full'>
                <div className='w-[10vw]'>
                    <img src={ochi} alt="" className='invert' />
                </div>
                <div className='w-[60%] flex justify-between max-sm:flex-col max-sm:mt-[3vw]'>
                    <div className=''>
                        @ ochi design 2024.<span className='underline'>Legal Terms</span>
                    </div>
                    <div>Website by Raqib</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
