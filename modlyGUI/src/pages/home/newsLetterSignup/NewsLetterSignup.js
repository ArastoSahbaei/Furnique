import React, {useState} from 'react'
import {SignUpSuccessMessage} from './signUpSuccessMessage/SignUpSuccessMessage'
import './NewsLetterSignup.css'

export const NewsLetterSignup = () => {

    const [loading, setLoading] = useState(false)
    const signUpToNewsLetter = () => { setLoading(true) }

    return (
        loading ? <SignUpSuccessMessage /> :
        <div className="newsLetterSignupContainer">
            <hr className="newsLetterHR"/>
            <form className="newsLetterSignupForm">
            <p className="newsLetterHeadTitle">Inspiration & special offers? Sign up to our newsletter</p> 
                    <input className="newsLetterEmailInput" name="email" type="email" placeholder=" Your Email" required/> 
                    <button onClick={() => signUpToNewsLetter()} className="signMeUpButton" type="submit"> { loading ? "LOADING..." : "SUBSCRIBE" } </button>
            </form>
            <span className="unsubscribeMessage">No spam. Unsubscribe at anytime.</span>
        </div>
    )
}
