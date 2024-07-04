import React from 'react'
import './Title.css'

const Title = ({subTitle,titleee}) => {
  return (
    <div className='title'>
        <p>{subTitle}</p>
        <h2>{titleee}</h2>
      
    </div>
  )
}

export default Title
