import React from 'react'
import '../Programs/Program.css'
import Programimg1 from '../../assets/assests/program-1.png'
import Programimg2 from '../../assets/assests/program-2.png'
import Programimg3 from '../../assets/assests/program-3.png'
import gradute_img1 from '../../assets/assests/program-icon-1.png'
import gradute_img2 from '../../assets/assests/program-icon-2.png'
import gradute_img3 from '../../assets/assests/program-icon-3.png'



const Programs = () => {
    return (
        <div className='programs'>
            <div className="program">
                <img src={Programimg1} alt="" />
                <div className="caption">
                    <img src={gradute_img1} alt="" />
                    <p>Graduation Degree</p>
                </div>

            </div>
            <div className="program">
                <img src={Programimg2} alt="" />
                <div className="caption">
                    <img src={gradute_img2} alt="" />
                    <p>Master Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={Programimg3} alt="" />
                <div className="caption">
                    <img src={gradute_img3} alt="" />
                    <p>Post-Graduation</p>
                </div>
            </div>

        </div>
    )
}

export default Programs
