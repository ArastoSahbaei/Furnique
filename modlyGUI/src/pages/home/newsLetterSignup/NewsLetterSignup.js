import React, {useState, useEffect} from 'react'
import './NewsLetterSignup.css'

export const NewsLetterSignup = () => {

    const [loading, setLoading] = useState(false)
    const signUpToNewsLetter = () => { setLoading(true) }

    return (
        <div className="newsLetterSignupContainer">
            <hr/>
            <form className="newsLetterSignupForm">
            <span className="newsLetterHeadTitle">Inspiration & special offers? Sign up to our newsletter</span> <br/><br/>
                    <input className="newsLetterEmailInput" name="email" type="email" placeholder=" Your Email" required/> 
                    <button onClick={() => signUpToNewsLetter()} className="signMeUpButton" type="submit"> { loading ? "LOADING..." : "SIGN ME UP !" } </button>
            </form>
            <span className="unsubscribeMessage">No spam. Unsubscribe at anytime.</span>
        </div>
    )
}
