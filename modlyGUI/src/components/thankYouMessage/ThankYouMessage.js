import React from 'react'
import './ThankYouMessage.css'

export const ThankYouMessage = () => {
    return (
        <div className="thankYouMessageContainer">
            <p className="thankYouMessage">Welcome to Furnique <br/> 
            <span className="confirmYourMail">We've sent you a mail, please confirm your account.</span>
            </p>


            <div className="thankYouMessageButtonContainer">
                <li className="thankYouMessageButton1"> <button className="browseProducts"> <span>Browse products </span> </button> <br/> </li>
                <li className="thankYouMessageButton2"> <button className="createYourOwn">  <span>Design your own </span> </button> <br/> </li>
                <li className="thankYouMessageButton3"> <button className="getInspired">    <span>Get inspiration </span> </button> <br/> </li>
            </div>
        </div>
    )
}
