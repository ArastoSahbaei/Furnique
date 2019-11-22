import React, {useState} from 'react'
import './NewsLetterSignup.css'

export const NewsLetterSignup = () => {

    const [loading, setLoading] = useState(false)
    const signUpToNewsLetter = () => { setLoading(true) }

    return (
        loading ? <h1>Thank you for signing up</h1> :
        <div className="newsLetterSignupContainer">
            <hr className="newsLetterHR"/>
            <form className="newsLetterSignupForm">
            <span className="newsLetterHeadTitle">Inspiration & special offers? Sign up to our newsletter</span> 
                    <input className="newsLetterEmailInput" name="email" type="email" placeholder=" Your Email" required/> 
                    <button onClick={() => signUpToNewsLetter()} className="signMeUpButton" type="submit"> { loading ? "LOADING..." : "SUBSCRIBE" } </button>
            </form>
            <span className="unsubscribeMessage">No spam. Unsubscribe at anytime.</span>
        </div>
    )
}
