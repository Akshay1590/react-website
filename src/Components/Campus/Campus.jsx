import React from 'react'
import './Campus.css'
import Gallery1 from '../../assets/assests/gallery-1.png'
import Gallery2 from '../../assets/assests/gallery-2.png'

import Gallery3 from '../../assets/assests/gallery-3.png'

import Gallery4 from '../../assets/assests/gallery-4.png'
import white from '../../assets/assests/white-arrow.png'




const Campus = () => {
  return (
    <div className='Campuss'>
        <div className="gallery">
            <img src={Gallery1} alt="" />
            <img src={Gallery2} alt="" />
            <img src={Gallery3} alt="" />
            <img src={Gallery4} alt="" />
        </div>
        <button className='btn12'>See More here <img src={white} alt="" /></button>
      
    </div> 
  )
}

export default Campus
