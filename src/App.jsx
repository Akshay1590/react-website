import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Navbar/Hero/Hero.jsx'
import Programs from './Components/Programs/Programs.jsx'
import Title from './Components/Title/Title.jsx'
import About from './About/About.jsx'
import Campus from './Components/Campus/Campus.jsx'
import Testimonial from './Components/Testimonials/Testimonial.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Videop from './Components/Vedio/Videop.jsx'

const App = () => {

const[playstate, setplaystate]=useState(false)


  return (
    <div>
      <Navbar />
      <Hero />
      <div className="Cointainer">
        <Title subTitle="Our programs" titleee="What We Offer" />
        <Programs />
        <About setplaystate={setplaystate}/>
        <Title subTitle="Gallery" titleee="Campus Photos" />
        <Campus />
        <Title subTitle="Testimonials" titleee="What a Students Says" />
        <Testimonial/>
        <Title subTitle="Contact Us" titleee="Get in Touch" />
        <Contact/>
        <Footer/>
      </div>
      <Videop playstate={playstate} setplaystate={setplaystate}/>

    </div>
  )
}

export default App
