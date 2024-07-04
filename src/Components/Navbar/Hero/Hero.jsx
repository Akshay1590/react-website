import React from 'react'
import './Hero.css'
import dark_arrow from '../../../assets/assests/dark-arrow.png'

const Hero = () => {
    return (
        <div className='hero Cointainer'>
            <div className="hero-text">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tempore quae culpa?</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis nulla, quo incidunt accusamus iste minima beatae reiciendis harum ab numquam amet sint nesciunt a porro esse praesentium voluptatum quam? Doloribus?</p>
                <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
            </div>
           
        </div>
    )
}

export default Hero
