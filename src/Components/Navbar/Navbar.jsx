import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Logo from '../../assets/assests/Logo.png'
import Menu from '../../assets/assests/menu-icon.png'

import { Link } from 'react-scroll';


const Navbar = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })

  })
const[MobileMenu ,setMobileM]=useState(false);

  const ToggleMenu=()=>{
MobileMenu? setMobileM(false):setMobileM(true)
  }

  return (
    <div>
      <nav className={`Cointainer ${sticky ? 'Darknav' : ""}`}>
        <img src={Logo} width={40} alt="" className='Logo' />

        <ul className={MobileMenu?'': 'Mobile_menu'}>
          <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to='About' smooth={true} offset={260} duration={500}>About</Link></li>
          <li><Link to='Campuss' smooth={true} offset={260} duration={500}>Campus</Link></li>
          <li><Link to='Testimonial' smooth={true} offset={260} duration={500}>Testimonials</Link></li>
          <li><button className='btn'>Contact us</button></li>
        </ul>
<img src={Menu} alt="" className='Menu' onClick={ToggleMenu} />
      </nav>
    </div>
  )
}

export default Navbar
