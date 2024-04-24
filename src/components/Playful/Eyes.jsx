import React, { useState, useRef, useEffect } from 'react'

function Eyes({play=''}) {

    const [angle1, setAngle1] = useState(0)
    const [angle2, setAngle2] = useState(0)

    const line1 = useRef();
    const line2 = useRef();

    useEffect(() => {

        window.addEventListener('mousemove', (e) => {

            function getDeltaXDeltaY(line) {

                let nx = e.clientX - line.current.getBoundingClientRect().x;

                let ny = e.clientY - line.current.getBoundingClientRect().y;

                return (Math.atan2(ny, nx) * 180 / Math.PI) - 180
            }

            setAngle1(getDeltaXDeltaY(line1))

            setAngle2(getDeltaXDeltaY(line2))
        }
        )

    }, [])



    return (
        <div  className='absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[45%] flex gap-[3vw] text-[2vw]'>
            <div className='h-[30vmin] w-[30vmin] bg-white rounded-full flex justify-center items-center relative'>
                <div className='bg-black h-2/3 w-2/3 rounded-full absolute flex justify-center items-center ' >
                    <div className={` w-full absolute`} style={{ transform: `rotate(${angle1}deg)` }} ref={line1}>
                        <div className='h-[3vmin] w-[3vmin] rounded-full bg-white absolute top-1/2 translate-y-[-50%] left-0' ></div>
                    </div>
                </div>
                <p className='relative z-10 text-white'>{play}</p>
            </div>
            <div className='h-[30vmin] w-[30vmin] bg-white rounded-full flex justify-center items-center relative'>
                <div className='bg-black h-2/3 w-2/3 rounded-full absolute flex justify-center items-center ' >
                    <div className={` w-full absolute`} style={{ transform: `rotate(${angle2}deg)` }} ref={line2}>
                        <div className='h-[3vmin] w-[3vmin] rounded-full bg-white absolute top-1/2 translate-y-[-50%] left-0' ></div>
                    </div>
                </div>
                <p className='relative z-10 text-white'>{play}</p>
            </div>
        </div>
    )
}

export default Eyes
