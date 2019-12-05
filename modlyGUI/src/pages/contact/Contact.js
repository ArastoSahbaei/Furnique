import React, { useState } from 'react'
import './Contact.css'
import FAQ from './faq/FAQ'
import {sendEmail} from '../../shared/api/ContactAPI'
import Cabinet from '../../shared/images/moderncabinet.jpg'

export default function Contact() {

    const [email, setEmail] = useState({
            name : "",
            email : "",
            subject : "er",
            message : ""
        })

     const handleChange = key => event => {
        setEmail({...email, [key]: event.target.value});
     }

    return (
        <div className="contactContainer">  
        <img className="faqCabinetImage" src={Cabinet} alt="cabinet"/>
         <FAQ/>
        <span className="helpTitle">Couldnt find your answer?</span> <br/>
     
<div className="letterWrapper">
  <article className="letter">
    <div className="side">
      <h1 className="contactTitle">Contact us</h1>
      <input className="inputLetter" placeholder="The Subject" onChange={handleChange('subject')} type="text" tabindex="3" required/>
      <p className="contactTitle">
        <textarea className="textareaLetter" placeholder="Your message" onChange={handleChange('message')} required />
      </p>
    </div>
    <div className="side">
      <p className="contactTitle">
        <input className="inputLetter2" type="text" placeholder="Your name" onChange={handleChange('name')} required  />
      </p>
      <p className="contactTitle">
        <input className="inputLetter2" type="email" placeholder="Your email" onChange={handleChange('email')} required/>
      </p>
      <p className="contactTitle">
        <button className="buttonLetter" onClick={() => sendEmail(email)}>Send</button>
      </p>
    </div>
  </article>
  <div className="envelope front"></div>
  <div className="envelope back"></div>
</div>
<p className="result-message centered">Thank you for your message</p>
</div>
    )
}
