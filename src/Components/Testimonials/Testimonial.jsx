import React, { useRef } from 'react'
import './Testimonials.css'
import nxt_btn from '../../assets/assests/next-icon.png'
import bck_btn from '../../assets/assests/back-icon.png'
import user1 from '../../assets/assests/user-1.png'
import user2 from '../../assets/assests/user-2.png'
import user3 from '../../assets/assests/user-3.png'
import user4 from '../../assets/assests/user-4.png'



const Testimonial = () => {
    const slider =useRef();
    let tx =0;

const Slideforward=()=>{
if (tx> -50)
    {
        tx -= 2
    }
    slider.current.style.transform= `translateX(${tx}%)`

}

const Slidebackward=()=>{

    if (tx <0)
        {
            tx += 25
        }
        slider.current.style.transform= `translateX(${tx}%)`

}


    return (
        <div className='Testi'>
            <img src={nxt_btn} alt="" className='Nxtbtn' onClick={Slideforward} />
            <img src={bck_btn} alt="" className='Bckbtn' onClick={Slidebackward}/>

            <div className="slider">

                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="Userinfo">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>Aksahy</h3>
                                    <span>Ahjdad</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia reiciendis at aspernatur facilis molestias iusto dolor consequuntur cumque, hic doloribus, doloremque accusantium aut. Optio praesentium atque nemo, ad ab maiores sit dicta ex fuga, at est numquam, iusto accusamus!
                            </p>

                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="Userinfo">
                                <img src={user2} alt="" />
                                <div>
                                    <h3>Aksahy</h3>
                                    <span>Ahjdad</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia reiciendis at aspernatur facilis molestias iusto dolor consequuntur cumque, hic doloribus, doloremque accusantium aut. Optio praesentium atque nemo, ad ab maiores sit dicta ex fuga, at est numquam, iusto accusamus!
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="Userinfo">
                                <img src={user3} alt="" />
                                <div>
                                    <h3>Aksahy</h3>
                                    <span>Ahjdad</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia reiciendis at aspernatur facilis molestias iusto dolor consequuntur cumque, hic doloribus, doloremque accusantium aut. Optio praesentium atque nemo, ad ab maiores sit dicta ex fuga, at est numquam, iusto accusamus!
                            </p>

                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="Userinfo">
                                <img src={user4} alt="" />
                                <div>
                                    <h3>Aksahy</h3>
                                    <span>Ahjdad</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia reiciendis at aspernatur facilis molestias iusto dolor consequuntur cumque, hic doloribus, doloremque accusantium aut. Optio praesentium atque nemo, ad ab maiores sit dicta ex fuga, at est numquam, iusto accusamus!
                            </p>

                        </div>
                    </li>

                </ul>

            </div>

        </div>


    )
}

export default Testimonial
