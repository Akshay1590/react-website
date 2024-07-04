import React from 'react'
import './Contact.css'
import Message from '../../assets/assests/msg-icon.png'
import Message2 from '../../assets/assests/mail-icon.png'

import Message3 from '../../assets/assests/phone-icon.png'
import Message4 from '../../assets/assests/location-icon.png'





const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "d6e34859-fad1-469f-bd46-c1003c08b188");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };



    return (
        <div className='Contact'>
            <div className="contact-col">
                <h3>Send Us a Message  <img src={Message} alt="" /></h3>
                <p>
                    repellendus nemo officiis blanditiis qui facere est earum accusamus molestiae in repudiandae nesciunt aliquid alias distinctio, totam minus itaque, expedita voluptas consectetur ipsam libero ad? Eos, ipsa rem.
                    Voluptatibus voluptates asperiores, nostrum iusto, ducimus officiis eligendi totam corporis aspernatur praesentium, eaque aliquid atque fuga deleniti! Ab consequuntur error unde odit ipsam? Autem itaque laudantium, enim non dolorem sequi.
                </p>
                <ul>
                    <li>  <img src={Message2} alt="" />  Contact@akshaygupta@gmail.com  </li>
                    <li> <img src={Message3} alt="" /> 992949t93463  </li>
                    <li>  <img src={Message4} alt="" />  Contact@akshaygupta@gmail.com</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>

                    <label htmlFor="Name">Name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />

                    <label htmlFor="Phone">Phone</label>

                    <input type="text" name='Phnone' placeholder='Enter your phone number' required />

                    <label htmlFor="Mssg">Write your Message Here</label>
                    <br />
                    <textarea name="text" rows='6' placeholder='Enter your message' required className='txt'></textarea>
                    <br />

                    <button type='submit' className='Btnn DarkBtn'>Submit</button>
                    <span>{result}</span>



                </form>


            </div>

        </div>
    )
}

export default Contact
