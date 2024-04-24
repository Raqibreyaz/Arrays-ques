import React from 'react'

import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Playful from './components/Playful/Playful'
import FeaturedProjects from './components/FeaturedProjects'
import ClientsReviews from './components/ClientReviews/ClientsReviews'
import ReadyToStart from './components/ReadyToStart'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll'

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-screen min-h-screen overflow-x-hidden dark:bg-[rgb(33,33,33)] '>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Playful />\
      <FeaturedProjects />
      <ClientsReviews />
      <ReadyToStart />
      <Footer />
    </div >
  )
}

export default App
