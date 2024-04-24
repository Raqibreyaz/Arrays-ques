import React from 'react'

function ClientCard({ className, buttonContent, image }) {
    return (
        <div className={`${className} dark:invert relative rounded-xl text-white`}>
            <div className='absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] '>
                <img src={image} alt="" className='scale-125 h-[17vmin] w-[17vmin]' />
            </div>
            <button className='border uppercase rounded-2xl px-[1.4vw]  absolute bottom-[1.4vw] left-[1.4vw] text-[1.4vw] max-sm:text-[2vw]'>{buttonContent}</button>
        </div>
    )
}

export default ClientCard
