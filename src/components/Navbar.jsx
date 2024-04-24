import React, { useState } from 'react'
import ochi from '../assets/Ochi.svg'
import { IoSunnyOutline } from "react-icons/io5";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar() {

    const [pageTheme, setPageTheme] = useState('light');

    function handleTheme() {
        setPageTheme(pageTheme === "dark" ? 'light' : 'dark')
    }

    React.useEffect(() => {

        document.addEventListener('scroll', (e) => {
            document.querySelector('#nav').style.transform = "scaleY(0%)"
        }
        )
        document.addEventListener("scrollend", (e) => {
            document.querySelector('#nav').style.transform = "scaleY(100%)"
        }
        )
    }
        , [])


        React.useEffect(() => {

            const html = document.querySelector('html')
        
              html.classList.remove('light', 'dark')
              html.classList.add(pageTheme)      
        
          }
            , [pageTheme])

    return (
        <div id='nav' className='w-full p-[2vw] dark:text-white flex justify-between capitalize fixed z-[100] transition-transform duration-75'>
            <div className="absolute inset-0 backdrop-blur-sm"></div>
            <div><img src={ochi} alt="" className='dark:invert  relative sm:w-[7vw] w-[13vw]' /></div>
            <ul className='flex gap-[2vw] max-sm:hidden relative z-[100]'>
                {
                    ['services', 'our work', 'about us', 'insights', 'contact us'].map((item, index) => (
                        <li key={index}>{item}</li>
                    )
                    )
                }
            </ul>
            <div className='relative sm:text-[3vw] text-[5vw] dark:text-gray-300' onClick={handleTheme}>
                {pageTheme === 'dark' ? <BsFillMoonStarsFill/> : <IoSunnyOutline />}
            </div>
        </div>
    )
}

export default Navbar
