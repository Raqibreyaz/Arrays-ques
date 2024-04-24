import React from 'react'
import playfulImage from '../../assets/playful.jpg'
import Eyes from './Eyes'

function Playful() {

    return (
        <div  className='w-full  relative cursor-pointer' >
            <img src={playfulImage} alt="" data-scroll data-scroll-speed='-.3' />
            <Eyes play='play' />
        </div >
    )
}

export default Playful
