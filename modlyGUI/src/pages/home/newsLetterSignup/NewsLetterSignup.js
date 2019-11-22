import React, {useState, useEffect} from 'react'
import './NewsLetterSignup.css'

export const NewsLetterSignup = () => {

    const [loading, setLoading] = useState(false)
    const signUpToNewsLetter = () => { setLoading(true) }

    return (
        <div className="newsLetterSignupContainer">
            <hr/>
            <span className="newsLetterHeadTitle">Newletter, Inspiration & special offers? Sign up to our newsletter.</span>
            <form className="newsLetterSignupForm">
                    <input className="newsLetterEmailInput" name="email" type="email" placeholder=" Your Email" required/> 
                    <button onClick={() => signUpToNewsLetter()} className="signMeUpButton" type="submit"> { loading ? "LOADING..." : "SIGN ME UP !" } </button>
            </form>
            <span className="unsubscribeMessage">No spam. Unsubscribe at anytime.</span>
        </div>
    )
}
