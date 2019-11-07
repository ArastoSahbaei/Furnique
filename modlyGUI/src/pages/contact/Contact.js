import React, { useState } from 'react'
import './Contact.css'
import FAQ from './faq/FAQ'
import {sendEmail} from '../../shared/api/ContactAPI'

export default function Contact() {

    const [email, setEmail] = useState({
            name : "",
            email : "",
            subject : "",
            message : ""
        })

     const handleChange = key => event => {
        setEmail({...email, [key]: event.target.value});
     }

    return (
        <div className="contactContainer">  
        <FAQ/>
        <form id="contact" method="post">
            <h3>Couldnt find your answer?</h3>
            <h4>We're always glad to help! Submit your issue and we'll get in touch.</h4>
            <fieldset> 
             <input placeholder="Your name" onChange={handleChange('name')} type="text" tabindex="1" required autofocus/> 
            </fieldset>
            <fieldset>
             <input placeholder="*Your Email Address" onChange={handleChange('email')} type="email" tabindex="2" required />
            </fieldset>
            <fieldset>
             <input placeholder="*Subject" onChange={handleChange('subject')} type="text" tabindex="3" required/>
            </fieldset>
            <fieldset>
            <textarea placeholder="Type your message here...." onChange={handleChange('message')} tabindex="4" required></textarea>
            </fieldset>
            <fieldset>
             <button onClick={() => sendEmail(email)} type="button">Submit</button>
            </fieldset>
        </form>
    </div>
    )
}
