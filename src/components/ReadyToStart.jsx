import React from 'react'
import Eyes from './Playful/Eyes'

function ReadyToStart() {
    return (
        <div className='bg-[#CDEA68]  font-["Neue_Montreal"] '>
            <div className='uppercase text-[15vw] font-["Roboto_Condensed"] flex flex-col items-center leading-[13vw] font-bold py-[10vw] tracking-tighter text-[rgb(33,33,33)]'>
                <h1>ready</h1>
                <h1>to start</h1>
                <h1>the project?</h1>
            </div>
            <div className='w-full relative py-[10vw]  '>
                <Eyes />
            </div>
            <div className='flex flex-col uppercase w-full items-center py-[10vw] gap-[1vw] text-[1.4vw] max-sm:text-[1.8vw]'>
                <button className='border border-[rgb(33,33,33)] uppercase rounded-[3vw] px-[1vw] py-[2vw] w-1/4 text-white bg-[rgb(33,33,33)] flex items-center justify-around'>start the project <div className='h-[1vw] w-[1vw] bg-white rounded-full'></div></button>
                or
                <button className='border border-[rgb(33,33,33)] uppercase rounded-[3vw] px-[1vw] py-[2vw] w-1/4 text-gray flex items-center justify-around'>hello@ochi.design <div className='h-[1vw] w-[1vw] bg-[rgb(33,33,33)] rounded-full'></div></button>
            </div>
        </div>
    )
}

export default ReadyToStart
