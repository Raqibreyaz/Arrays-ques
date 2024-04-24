import React from 'react'
import clientImage from '../../assets/clientImage.png'
import ochiGreen from '../../assets/ochiGreen.svg'
import ClientCard from './ClientCard'
import stars from '../../assets/stars.svg'
import futureAcademy from '../../assets/futureAcademyImage.png'

function ClientsReviews() {
  return (
    <div className='min-h-screen w-[100vw] dark:text-white font-["Neue_Montreal"] py-[10vw]'>
      <h1 className='px-[2vw] py-[3vw] border-b border-gray-400 text-[5vw]'>Clients&apos; reviews
      </h1>
      <div className='flex justify-between max-sm:flex-col px-[2vw] w-full pt-[2vw] pb-[4vw] sm:text-[2vw] max-sm:min-h-[80vh] max-mobile:text-[4vmin] gap-[13vw]'>
        <div className=''>
          <h1 className='underline '>Karman Ventures</h1>
        </div>
        <div className='w-[20%] max-sm:w-[30%]'>
          <h1 className='mb-[2vw]'>Services: </h1>
          <div className='uppercase border rounded-[2vw] px-[1.5vw]   py-[1vw]  mb-[2vh] text-center sm:mt-[10vh] sm:text-[1vw]  max-sm:text-[2vw]'>investors deck
          </div>
          <div className='uppercase border rounded-[2vw] px-[1.5vw] py-[1vw]  text-center sm:text-[1.3vw] max-sm:text-[2vw] '>sales deck
          </div>
        </div>
        <div className='sm:max-w-[30%] flex flex-col sm:gap-[2vw] max-sm:w-full  gap-[10vmin] '>
          <h1>William Barnes </h1>
          <div className='h-[140px] w-[140px] max-sm:h-[30vw] max-sm:w-[30vw] rounded-xl overflow-hidden'>
            <img src={clientImage} alt="" className='w-full h-full' />
          </div>
          <div>
            <p>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5
            </p>
          </div>
        </div>
        <div className=''>
          <h1 className='text-gray-400 uppercase'> Read </h1>
        </div>
      </div>
      <div className='my-[4vh] pt-[2vw] pb-[7vw]'>
        {

          [
            ['planetly', 'nina walloch'],
            ['workix easy', 'tomer levy'],
            ['premium blend', 'ellen kim'],
            ['hypercare systems', 'brandan goss'],
            ['officevibe', 'raff labrie'],
            ['Orderlion', 'stefan strohmer'],
            ['black book', 'jaci smith'],
            ['trawa energy', 'david budde'],
          ].map((pair, index) => {
            return (
              <div key={index} className='capitalize flex w-full justify-between p-[2vw] border-t border-b border-gray-400 text-[1.7vw] max-sm:text-[10px] max-mobile:text-[3vw] '>
                <h1 className=''>{pair[0]}</h1>
                <h1 className='text-start'>{pair[1]}</h1>
                <h1 className='underline uppercase  text-end'>read</h1>
              </div>
            )
          }
          )
        }
      </div>
      <div className='flex sm:wrap gap-[2vw] sm:justify-center max-sm:items-center max-sm:flex-col max-sm:gap-[5vw] w-full '>
        <ClientCard className='sm:h-[30vw] sm:w-[30vw] h-[50vw] w-[80vw] bg-[#004d43]' buttonContent='@2019-2022' image={ochiGreen} />
        <div className='flex gap-[2%] sm:w-[62vw] sm:h-[30vw] max-sm:w-[80vw] max-sm:h-[50vw] max-sm:gap-[5vw] max-mobile:flex-col max-mobile:min-h-[100vw]'>
          <ClientCard className='h-[100%] w-[49%] max-mobile:w-[100%] bg-[#212121]' buttonContent='Rating 5.0 On Clutch' image={stars} />
          <ClientCard className='h-[100%] w-[49%] max-mobile:w-[100%] bg-[#212121]' buttonContent='Business Bootcamp alumni' image={futureAcademy} />
        </div>
      </div>
    </div>
  )
}

export default ClientsReviews
