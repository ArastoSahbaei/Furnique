import React, { useState } from 'react'
import './Contact.css'
import {sendEmail} from '../../shared/api/ContactAPI'

export default function Contact() {

    const [email, setEmail] = useState(
        {
            email : "",
            subject : "",
            message : ""
        }              
    )

     const handleChange = key => event => {
        setEmail({...email, [key]: event.target.value});
     }

    return (
        <div className="contactContainer">  
        <form id="contact" method="post">
            <h3>Furnique Contact Form</h3>
            <h4>We're always glad to help.</h4>
            <fieldset> 
             <input placeholder="Your name" onChange={handleChange('firstName')} type="text" tabindex="1" required autofocus/> 
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
             <button name="submit" onClick={() => sendEmail(email)} type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
             <button onClick={() => sendEmail(email)}>sendEmailsendEmailsendEmailS</button>
            </fieldset>
        </form>
    </div>
    )
}
