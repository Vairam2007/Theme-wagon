import React from 'react'
import Home_comp from '../Components/Home_comp'
import About_comp from '../Components/About_comp'
import Footer from '../Components/Footer'
import Contact_comp from '../Components/Contact_comp'
import Navbar from '../Components/Navbar'
import News from '../Components/News_comp'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Home_comp />
      <About_comp />
      <News />
      <Contact_comp />
      <Footer />
    </div>
  )
}

export default Home
