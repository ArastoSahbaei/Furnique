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

    function addClass() {
        document.body.classList.add("sent");
        }

     const handleChange = key => event => {
        setEmail({...email, [key]: event.target.value});
     }

    return (
        <div className="contactContainer">  
        <img className="faqCabinetImage" src={Cabinet} alt="cabinet"/>
         <FAQ/>
        <span className="helpTitle">Couldnt find your answer?</span> <br/>
       {/*  <form id="contact" method="post">
            <span className="helpTitleSub">We're always glad to help! Submit your issue and we'll get in touch.</span>
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
        </form> */}

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
        <input className="inputLetter" type="text" placeholder="Your name" onChange={handleChange('name')} required  />
      </p>
      <p className="contactTitle">
        <input className="inputLetter" type="email" placeholder="Your email" onChange={handleChange('email')} required/>
      </p>
      <p className="contactTitle">
        <button className="buttonLetter" onClick={() => sendEmail(email)}>Send</button>
      </p>
    </div>
  </article>
  <div className="envelope front"></div>
  <div className="envelope back"></div>
  
<p className="result-message centered">Thank you for your message</p>
</div>
    )
}
