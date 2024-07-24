import React from 'react'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import OurStory from './components/OurStory'
import Classis from './components/Classis'
import Advantages from './components/Advantages'
import Banner from './components/Banner'
import Success from './components/Success'
import Count from './components/Count'

const App = () => {
  return (
    <div className='w-screen'>
      <Navbar />
      <Slider />
      <OurStory/>
      <Classis/>
      <Banner/>
      <Advantages/>
      <Success/>
      <Count/>
    </div>
  )
}

export default App