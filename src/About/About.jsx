import React from 'react'
import './About.css'
import Abouting from '../assets/assests/about.png'
import playimg from '../assets/assests/play-icon.png'

const About = ({setplaystate}) => {
    return (
        <div className='About'>
            <div className="AboutLeft">
                <img src={Abouting}  alt="" className='About-img'/>
                <img src={playimg} alt="" className='Playicon' onClick={()=>{
                    setplaystate(true)
                }}/>
            </div>
            <div className="AboutRight">
                <h3>About University</h3>
                <h2>Todays kskk skaksk.</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ab repellendus, tempore necessitatibus temporibus eum placeat, error neque eos nulla cupiditate earum inventore pariatur corrupti eligendi suscipit explicabo sunt magnam. Iste esse qui deserunt molestias.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolores modi non consequatur enim quam soluta excepturi laudantium et, sequi expedita odio dicta asperiores obcaecati?</p>

            </div>

        </div>
    )
}

export default About
