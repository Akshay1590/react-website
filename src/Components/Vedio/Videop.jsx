import React from 'react'
import './Video.css'
import video from '../../assets/assests/videoplayback.mp4'
const Videop = ({playstate,setplaystate}) => {
  return (
    <div className={`VideoP  ${playstate?'':'hide'}`}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Videop
